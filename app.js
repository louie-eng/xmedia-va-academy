/* X Media Academy — app logic. You should not need to edit this file; edit course.js instead. */
(function () {
  "use strict";
  var C = window.COURSE;
  var KEY = "xm_academy_v1";
  var $ = function (id) { return document.getElementById(id); };

  // ---------- helpers ----------
  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }
  function now() { return new Date().toISOString(); }
  function uid() { return "va-" + Math.random().toString(36).slice(2, 8) + Date.now().toString(36).slice(-4); }
  function hash(str) { var h = 2166136261 >>> 0; for (var i = 0; i < str.length; i++) { h ^= str.charCodeAt(i); h = Math.imul(h, 16777619) >>> 0; } return h; }
  function seededOrder(n, seedStr) {
    var a = []; for (var i = 0; i < n; i++) a.push(i);
    var s = hash(seedStr) || 1;
    for (var j = n - 1; j > 0; j--) { s = Math.imul(s ^ (s >>> 15), 2246822507) >>> 0; s = (s ^ (s >>> 13)) >>> 0; var k = s % (j + 1); var t = a[j]; a[j] = a[k]; a[k] = t; }
    return a;
  }
  function toSeconds(len) { if (!len) return 0; var p = len.split(":").map(Number); return p.length === 2 ? p[0] * 60 + p[1] : p[0]; }
  function mmss(sec) { sec = Math.max(0, Math.ceil(sec)); return Math.floor(sec / 60) + ":" + ("0" + (sec % 60)).slice(-2); }

  // ---------- course index ----------
  var LESSONS = [];   // playable lessons in order
  C.modules.forEach(function (m) {
    m.lessons.forEach(function (l, i) {
      l.module = m; l.indexInModule = i + 1; l.moduleCount = m.lessons.filter(function (x) { return x.video; }).length;
      if (l.video) LESSONS.push(l);
    });
  });
  function lessonById(id) { for (var i = 0; i < LESSONS.length; i++) if (LESSONS[i].id === id) return LESSONS[i]; return null; }
  function posOf(id) { for (var i = 0; i < LESSONS.length; i++) if (LESSONS[i].id === id) return i; return -1; }

  // ---------- state ----------
  var S = load();
  function blank() { return { vaId: uid(), name: "", telegram: "", startedAt: "", screen: "welcome", lessons: {}, exam: { attempts: [], passed: false, cert: "" }, queue: [] }; }
  function load() { try { var s = JSON.parse(localStorage.getItem(KEY)); if (s && s.vaId) return s; } catch (e) {} return blank(); }
  function save() { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) {} }
  function L(id) { if (!S.lessons[id]) S.lessons[id] = { seconds: 0, solved: {}, mistakes: 0, done: false }; return S.lessons[id]; }
  function doneCount() { return LESSONS.filter(function (l) { return L(l.id).done; }).length; }
  function unlocked(id) { var p = posOf(id); for (var i = 0; i < p; i++) if (!L(LESSONS[i].id).done) return false; return p >= 0; }
  function examUnlocked() { return doneCount() === LESSONS.length; }
  function attemptsLeft() { return C.exam.maxAttempts - S.exam.attempts.length; }
  function bestScore() { return S.exam.attempts.reduce(function (b, a) { return Math.max(b, a.score); }, 0); }
  function status() {
    if (S.exam.passed) return "PASSED";
    if (S.exam.attempts.length && attemptsLeft() <= 0) return "FAILED - LOCKED";
    if (examUnlocked()) return "READY FOR TEST";
    return "IN TRAINING";
  }
  function snapshot() {
    var secs = 0, mistakes = 0;
    Object.keys(S.lessons).forEach(function (k) { secs += S.lessons[k].seconds || 0; mistakes += S.lessons[k].mistakes || 0; });
    return { vaId: S.vaId, name: S.name, telegram: S.telegram, startedAt: S.startedAt, lessonsDone: doneCount(), lessonsTotal: LESSONS.length,
      studyMinutes: Math.round(secs / 6) / 10, checkMistakes: mistakes, examAttempts: S.exam.attempts.length, bestScore: bestScore(),
      examTotal: C.finalExam.length, status: status(), cert: S.exam.cert, courseVersion: C.version };
  }

  // ---------- results queue (never loses an answer) ----------
  function track(type, data) {
    var ev = snapshot(); ev.key = C.resultsKey; ev.eventId = uid(); ev.type = type; ev.at = now(); ev.data = data || {};
    S.queue.push(ev); if (S.queue.length > 800) S.queue.shift(); save(); flush();
  }
  var flushing = false;
  function flush() {
    if (!C.resultsUrl || flushing || !S.queue.length || !navigator.onLine) return;
    flushing = true;
    var ev = S.queue[0];
    fetch(C.resultsUrl, { method: "POST", mode: "no-cors", keepalive: true, headers: { "Content-Type": "text/plain;charset=utf-8" }, body: JSON.stringify(ev) })
      .then(function () { if (S.queue[0] && S.queue[0].eventId === ev.eventId) S.queue.shift(); save(); flushing = false; if (S.queue.length) setTimeout(flush, 150); })
      .catch(function () { flushing = false; });
  }
  setInterval(flush, 20000);
  window.addEventListener("online", flush);

  // ---------- rendering ----------
  var timer = null;
  function go(screen) { S.screen = screen; save(); render(); window.scrollTo(0, 0); $("sidebar").classList.remove("open"); }

  function render() {
    clearInterval(timer);
    var reg = !!S.name;
    $("topbar-right").classList.toggle("hidden", !reg);
    renderProgress(); renderMap();
    var sc = S.screen;
    if (!reg) return renderWelcome();
    if (sc === "exam") return examUnlocked() ? renderExamIntro() : go(LESSONS[0].id);
    if (sc === "examq") return renderExamQuestion();
    if (sc === "result") return renderResult();
    if (sc.indexOf("done:") === 0) return renderModuleDone(sc.slice(5));
    var l = lessonById(sc);
    if (!l || !unlocked(l.id)) { var first = LESSONS.filter(function (x) { return !L(x.id).done; })[0]; return go(first ? first.id : "exam"); }
    renderLesson(l);
  }

  function renderProgress() {
    var total = LESSONS.length + 1, done = doneCount() + (S.exam.passed ? 1 : 0), pct = Math.round(done / total * 100);
    $("bar-fill").style.width = pct + "%";
    $("bar-label").textContent = pct + "% complete";
  }

  function renderMap() {
    var html = "";
    C.modules.forEach(function (m) {
      html += '<div class="map-module"><h4>' + esc(m.title) + " · " + esc(m.subtitle) + "</h4>";
      m.lessons.forEach(function (l) {
        if (!l.video) { html += '<button class="map-item" disabled><span class="dot">' + esc(l.id) + "</span>" + esc(l.title) + '<span class="soon">Soon</span></button>'; return; }
        var st = L(l.id), cls = (st.done ? " done" : "") + (S.screen === l.id ? " active" : "");
        html += '<button class="map-item' + cls + '" data-go="' + esc(l.id) + '"' + (unlocked(l.id) ? "" : " disabled") + '><span class="dot">' + (st.done ? "✓" : esc(l.id)) + "</span>" + esc(l.title) + "</button>";
      });
      html += "</div>";
    });
    var ex = S.screen === "exam" || S.screen === "examq" || S.screen === "result";
    html += '<div class="map-module"><h4>Finish</h4><button class="map-item' + (S.exam.passed ? " done" : "") + (ex ? " active" : "") + '" data-go="exam"' + (examUnlocked() ? "" : " disabled") + '><span class="dot">' + (S.exam.passed ? "✓" : "★") + "</span>Final test</button></div>";
    $("map").innerHTML = html;
  }

  function renderWelcome() {
    $("view").innerHTML =
      '<div class="eyebrow">X Media Academy</div><h1>Welcome to your training</h1>' +
      '<p class="sub">This training teaches you everything you need to run your Cell. Take your time.</p>' +
      '<div class="card"><h2>How it works</h2><ol class="steps">' +
      "<li>Watch each video. They are in order, one at a time.</li>" +
      "<li>Read the steps under the video. You can open the written guide (PDF) any time.</li>" +
      "<li>Answer the quick questions to unlock the next lesson.</li>" +
      "<li>Pass the final test. Your result is sent to your manager automatically.</li></ol>" +
      '<p class="hint">Total video time: about 1 hour. Your progress is saved on this device.</p></div>' +
      '<div class="card"><h2>Your details</h2>' +
      '<label class="field">Full name<input id="f-name" autocomplete="name" placeholder="Example: Maria Santos"></label>' +
      '<label class="field">Telegram username<input id="f-tg" autocomplete="off" placeholder="Example: @maria_s"></label>' +
      '<div class="error" id="f-err"></div><button class="btn" id="f-start">Start training</button></div>';
    $("f-start").onclick = function () {
      var n = $("f-name").value.trim().replace(/\s+/g, " "), t = $("f-tg").value.trim().replace(/\s+/g, "");
      if (n.length < 3 || n.indexOf(" ") < 0) { $("f-err").textContent = "Please write your first and last name."; return; }
      if (t.replace("@", "").length < 3) { $("f-err").textContent = "Please write your Telegram username."; return; }
      S.name = n; S.telegram = t.charAt(0) === "@" ? t : "@" + t; S.startedAt = now();
      track("STARTED", { device: navigator.userAgent.slice(0, 120) });
      go(LESSONS[0].id);
    };
  }

  function renderLesson(l) {
    var st = L(l.id), need = Math.round(toSeconds(l.length) * C.watchRatio), checks = l.check || [];
    var isLast = posOf(l.id) === LESSONS.length - 1, next = LESSONS[posOf(l.id) + 1];
    var where = l.module.id === "m0" ? "Start here" : l.module.title + " · Lesson " + l.indexInModule + " of " + l.moduleCount;
    var qHtml = checks.map(function (q, qi) {
      var order = seededOrder(q.options.length, S.vaId + l.id + qi), solved = st.solved[qi];
      return '<div class="q" data-q="' + qi + '"><div class="q-title">' + (qi + 1) + ". " + q.q + "</div>" +
        order.map(function (oi) { var right = solved && oi === q.answer; return '<button class="opt' + (right ? " right" : "") + '" data-o="' + oi + '"' + (solved ? " disabled" : "") + ">" + q.options[oi] + "</button>"; }).join("") +
        '<div class="feedback ' + (solved ? "good" : "") + '">' + (solved ? "✓ Correct. " + q.why : "") + "</div></div>";
    }).join("");
    $("view").innerHTML =
      '<div class="eyebrow">' + esc(where) + "</div><h1>" + esc(l.title) + "</h1>" +
      '<p class="sub">Watch the video (' + esc(l.length) + "), read the steps, then answer " + checks.length + " quick questions.</p>" +
      '<div class="card"><h2>In this lesson you will learn</h2><ul class="learn">' + l.learn.map(function (x) { return "<li>" + x + "</li>"; }).join("") + "</ul></div>" +
      '<div class="video"><iframe src="https://drive.google.com/file/d/' + encodeURIComponent(l.video) + '/preview" allow="autoplay; fullscreen" allowfullscreen loading="lazy" title="' + esc(l.title) + '"></iframe></div>' +
      '<div class="video-meta"><span>Tip: press ⛶ to watch full screen. Subtitles are in the video.</span>' +
      (l.pdf ? '<a class="btn ghost small" target="_blank" rel="noopener" href="https://drive.google.com/file/d/' + encodeURIComponent(l.pdf) + '/view">📄 Written guide (PDF)</a>' : "") + "</div>" +
      '<div class="card"><h2>Step by step</h2><ol class="steps">' + l.steps.map(function (x) { return "<li>" + x + "</li>"; }).join("") + "</ol></div>" +
      '<div class="card rule"><div class="label">Most important rule</div><div>' + l.rule + "</div></div>" +
      '<div class="card"><h2>Quick check</h2>' + qHtml + "</div>" +
      '<div class="nav"><button class="btn ghost" id="back"' + (posOf(l.id) === 0 ? " disabled" : "") + '>← Back</button>' +
      '<span class="hint" id="gate"></span><button class="btn" id="next" disabled>' + (isLast ? "Go to final test →" : "Next lesson →") + "</button></div>";

    Array.prototype.forEach.call(document.querySelectorAll(".opt"), function (b) {
      b.onclick = function () {
        var box = b.closest(".q"), qi = +box.getAttribute("data-q"), q = checks[qi], oi = +b.getAttribute("data-o"), fb = box.querySelector(".feedback");
        if (oi === q.answer) {
          st.solved[qi] = true; b.classList.add("right");
          Array.prototype.forEach.call(box.querySelectorAll(".opt"), function (x) { x.disabled = true; });
          fb.className = "feedback good"; fb.innerHTML = "✓ Correct. " + q.why;
          track("CHECK_CORRECT", { lesson: l.id, question: q.q.replace(/<[^>]+>/g, "") });
        } else {
          st.mistakes++; b.classList.add("wrong"); b.disabled = true;
          fb.className = "feedback bad"; fb.textContent = "Not correct. Look at the steps above or watch that part of the video again, then try again.";
          track("CHECK_WRONG", { lesson: l.id, question: q.q.replace(/<[^>]+>/g, ""), picked: q.options[oi].replace(/<[^>]+>/g, "") });
        }
        save(); gate();
      };
    });
    $("back").onclick = function () { go(LESSONS[posOf(l.id) - 1].id); };
    $("next").onclick = function () {
      if (!st.done) { st.done = true; st.doneAt = now(); track("LESSON_DONE", { lesson: l.id, title: l.title, minutes: Math.round(st.seconds / 6) / 10, mistakes: st.mistakes }); }
      if (isLast) return go("exam");
      if (next.module.id !== l.module.id) return go("done:" + l.module.id);
      go(next.id);
    };
    function gate() {
      var allRight = checks.every(function (_, qi) { return st.solved[qi]; }), left = need - st.seconds, msg = "";
      if (!st.done && left > 0) msg = "Next unlocks in " + mmss(left) + " — watch the video";
      else if (!allRight) msg = "Answer all questions correctly to continue";
      $("gate").textContent = msg; $("next").disabled = !!msg;
    }
    gate();
    timer = setInterval(function () { if (document.visibilityState === "visible" && st.seconds < toSeconds(l.length) * 3) { st.seconds++; if (st.seconds % 5 === 0) save(); gate(); } }, 1000);
  }

  function renderModuleDone(mid) {
    var m = C.modules.filter(function (x) { return x.id === mid; })[0], idx = C.modules.indexOf(m), nextM = C.modules[idx + 1];
    var nextLesson = LESSONS.filter(function (x) { return !L(x.id).done; })[0];
    $("view").innerHTML = '<div class="eyebrow">Well done</div><h1>' + esc(m.title) + " complete ✓</h1>" +
      '<div class="card"><p>You finished <b>' + esc(m.subtitle) + "</b>.</p>" +
      (nextM ? "<p>Next: <b>" + esc(nextM.title) + " — " + esc(nextM.subtitle) + "</b>.</p>" : "") +
      '<p class="hint">Remember: every lesson has a written guide (PDF). You can go back to any lesson from the course map.</p></div>' +
      '<div class="nav"><span></span><button class="btn" id="cont">Continue →</button></div>';
    $("cont").onclick = function () { go(nextLesson ? nextLesson.id : "exam"); };
  }

  // ---------- final test ----------
  var draft = null;
  function renderExamIntro() {
    if (S.exam.passed || attemptsLeft() <= 0) return go("result");
    var n = C.finalExam.length;
    $("view").innerHTML = '<div class="eyebrow">Finish</div><h1>Final test</h1>' +
      '<div class="card"><ol class="steps"><li>There are <b>' + n + " questions</b>.</li>" +
      "<li>You need <b>" + Math.ceil(n * C.exam.passPercent / 100) + " out of " + n + "</b> to pass.</li>" +
      "<li>The answers are <b>not shown</b> during the test.</li>" +
      "<li>You have <b>" + attemptsLeft() + " " + (attemptsLeft() === 1 ? "try" : "tries") + "</b> left.</li>" +
      "<li>Your result goes to your manager automatically.</li></ol></div>" +
      '<div class="nav"><span class="hint">Not ready? Use the course map to review any lesson.</span><button class="btn" id="startx">Start the test</button></div>';
    $("startx").onclick = function () {
      draft = { order: seededOrder(n, S.vaId + "exam" + S.exam.attempts.length), answers: {}, i: 0 };
      go("examq");
    };
  }
  function renderExamQuestion() {
    if (!draft) return go("exam");
    var n = C.finalExam.length, qi = draft.order[draft.i], q = C.finalExam[qi], opt = seededOrder(q.options.length, S.vaId + "x" + qi + S.exam.attempts.length);
    $("view").innerHTML = '<div class="eyebrow">Final test · Question ' + (draft.i + 1) + " of " + n + "</div>" +
      '<div class="card"><div class="q"><div class="q-title" style="font-size:20px">' + q.q + "</div>" +
      opt.map(function (oi) { return '<button class="opt' + (draft.answers[qi] === oi ? " picked" : "") + '" data-o="' + oi + '">' + q.options[oi] + "</button>"; }).join("") + "</div></div>" +
      '<div class="nav"><button class="btn ghost" id="xb"' + (draft.i === 0 ? " disabled" : "") + '>← Back</button>' +
      '<button class="btn" id="xn"' + (draft.answers[qi] == null ? " disabled" : "") + ">" + (draft.i === n - 1 ? "Submit test" : "Next →") + "</button></div>";
    Array.prototype.forEach.call(document.querySelectorAll(".opt"), function (b) {
      b.onclick = function () { draft.answers[qi] = +b.getAttribute("data-o"); renderExamQuestion(); };
    });
    $("xb").onclick = function () { draft.i--; renderExamQuestion(); };
    $("xn").onclick = function () { if (draft.i < n - 1) { draft.i++; return renderExamQuestion(); } submitExam(); };
  }
  function submitExam() {
    var n = C.finalExam.length, score = 0, wrong = [], answers = [];
    C.finalExam.forEach(function (q, qi) {
      var ok = draft.answers[qi] === q.answer; if (ok) score++; else if (wrong.indexOf(q.lesson) < 0) wrong.push(q.lesson);
      answers.push({ q: q.q, picked: q.options[draft.answers[qi]], correct: ok });
    });
    var passed = score * 100 / n >= C.exam.passPercent;
    var attempt = { score: score, total: n, at: now(), passed: passed, review: wrong };
    S.exam.attempts.push(attempt);
    if (passed) { S.exam.passed = true; S.exam.cert = "XM-" + (hash(S.vaId + S.name + attempt.at) >>> 0).toString(16).toUpperCase().slice(0, 6) + "-" + score; }
    draft = null; save();
    track("TEST_SUBMITTED", { attempt: S.exam.attempts.length, score: score, total: n, passed: passed, reviewLessons: wrong.join(", "), answers: answers });
    go("result");
  }
  function renderResult() {
    var a = S.exam.attempts[S.exam.attempts.length - 1];
    if (!a) return go("exam");
    var snap = snapshot(), msg;
    if (S.exam.passed) {
      msg = "X Media Academy — PASSED\nName: " + S.name + "\nTelegram: " + S.telegram + "\nScore: " + a.score + "/" + a.total + "\nCode: " + S.exam.cert;
      $("view").innerHTML = '<div class="eyebrow">Final test</div><h1>You passed 🎉</h1>' +
        '<div class="card"><div class="score pass">' + a.score + "/" + a.total + "</div><p>Great work, " + esc(S.name.split(" ")[0]) + ". Your result has been sent to your manager.</p>" +
        '<div class="code">' + esc(S.exam.cert) + "</div>" +
        '<div class="stat-row"><div class="stat"><div class="n">' + snap.studyMinutes + '</div><div class="l">minutes studied</div></div>' +
        '<div class="stat"><div class="n">' + snap.checkMistakes + '</div><div class="l">quick-check mistakes</div></div>' +
        '<div class="stat"><div class="n">' + snap.examAttempts + '</div><div class="l">test tries</div></div></div>' +
        "<h2>What happens next</h2><ol class=\"steps\"><li>Send the message below to your manager on Telegram.</li><li>Your manager gives you your Cell (10 phones) and your Cell Sheet.</li><li>Day 1 and Day 2: set up all 10 phones. Use the written guides.</li></ol>" +
        '<div class="nav"><span></span><button class="btn" id="copy">Copy message for my manager</button></div></div>';
      $("copy").onclick = function () { (navigator.clipboard ? navigator.clipboard.writeText(msg) : Promise.reject()).then(function () { $("copy").textContent = "Copied ✓"; }, function () { prompt("Copy this message:", msg); }); };
      return;
    }
    var left = attemptsLeft();
    var review = a.review.map(function (id) { var l = lessonById(id); return l ? '<button class="btn ghost small" data-go="' + esc(id) + '">Review ' + esc(id) + " · " + esc(l.title) + "</button>" : ""; }).join(" ");
    $("view").innerHTML = '<div class="eyebrow">Final test</div><h1>' + (left > 0 ? "Not passed yet" : "No tries left") + "</h1>" +
      '<div class="card"><div class="score fail">' + a.score + "/" + a.total + "</div>" +
      (left > 0 ? "<p>You need " + Math.ceil(a.total * C.exam.passPercent / 100) + "/" + a.total + " to pass. You have <b>" + left + " " + (left === 1 ? "try" : "tries") + "</b> left.</p><h2>Review these lessons first</h2><div style=\"display:flex;flex-wrap:wrap;gap:8px\">" + review + "</div>"
        : "<p>Please message your manager on Telegram. Your results have been sent to them.</p>") + "</div>" +
      (left > 0 ? '<div class="nav"><span></span><button class="btn" id="retry">Try the test again</button></div>' : "");
    if ($("retry")) $("retry").onclick = function () { go("exam"); };
  }

  // ---------- events ----------
  document.addEventListener("click", function (e) {
    var t = e.target.closest("[data-go]"); if (!t || t.disabled) return;
    var g = t.getAttribute("data-go"); go(g === "exam" && (S.exam.passed || (S.exam.attempts.length && attemptsLeft() <= 0)) ? "result" : g);
  });
  $("map-btn").onclick = function () { $("sidebar").classList.toggle("open"); };
  document.addEventListener("visibilitychange", function () {
    if (document.visibilityState === "hidden" && C.resultsUrl && navigator.sendBeacon) S.queue.slice(0, 20).forEach(function (ev) { navigator.sendBeacon(C.resultsUrl, new Blob([JSON.stringify(ev)], { type: "text/plain" })); });
  });

  render(); flush();
})();
