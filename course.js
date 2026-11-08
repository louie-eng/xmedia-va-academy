/*
  X MEDIA ACADEMY — COURSE CONTENT (the only file you edit to change the course)

  Swap a video:   upload the new video to Google Drive, share "Anyone with the link",
                  copy the ID from the link (the part after /d/) and paste it into `video`.
  Add a lesson:   copy a lesson block, give it a new unique `id`, fill it in.
  Coming soon:    set `video: ""` and the lesson shows as "Coming soon" without blocking anyone.
  Results sheet:  paste your Google Apps Script web app URL into `resultsUrl` (see README.md).
*/
window.COURSE = {
  version: "2026-11-08",
  resultsUrl: "",              // Google Sheet webhook (README.md step 2). Empty = results wait safely in the browser.
  resultsKey: "xm-academy-7741", // must match KEY in google-sheet-script.gs
  watchRatio: 0.7,             // VA must spend 70% of the video length on a lesson before Continue unlocks
  exam: { passPercent: 100, maxAttempts: 3 },

  modules: [
    {
      id: "m0", title: "Start Here", subtitle: "How your Cell works",
      lessons: [
        {
          id: "0", title: "Welcome: How Your 10-Phone Cell Works", length: "6:48",
          video: "1QG7PtDij8c_jMTFaJxxJaFkIy12SsMme", pdf: "12o4sqyapW44KDm_dsSu5NTZDuuPsuQpL",
          learn: ["What a Cell is", "What you do on Day 1 and Day 2", "What you do every day from Day 3"],
          steps: [
            "A <b>Cell</b> is 10 iPhones in the cloud. You control them from your computer with <b>AliRemote</b>.",
            "<b>Phones 1–5</b> are for Model A. <b>Phones 6–10</b> are for Model B.",
            "Every phone has <b>Instagram, a Facebook Page, YouTube Shorts and X</b>.",
            "<b>Day 1 and Day 2:</b> set up all 10 phones — apps, accounts, profile pictures and warm-up.",
            "<b>From Day 3:</b> the system makes the Reels. You check them and press Approve. <b>3 Reels per phone, every day.</b>",
            "Instagram and Facebook start posting on Day 3. YouTube Shorts starts after its 3-day warm-up.",
            "Every lesson has a <b>written guide (PDF)</b>. Open it any time you forget a step."
          ],
          rule: "Never put a photo or video on a phone until it has gone through <b>xmediaops.com/clean</b>.",
          check: [
            { q: "You start on Monday. What do you do on Monday and Tuesday?",
              options: ["Set up all 10 phones: apps, accounts, profiles and warm-up", "Post as many Reels as you can", "Wait for your manager to set up the phones"],
              answer: 0, why: "Day 1 and Day 2 are only for setting up. Content starts on Day 3." },
            { q: "From Day 3, how many Reels does each phone post per day?",
              options: ["3", "1", "10"],
              answer: 0, why: "3 Reels per phone × 10 phones = 30 Reels a day for your Cell." }
          ]
        }
      ]
    },
    {
      id: "m1", title: "Module 1", subtitle: "Set up your phones (Day 1–2)",
      lessons: [
        {
          id: "1.1", title: "AliRemote & Installing the Apps", length: "4:34",
          video: "1av-w0Y84wbMpqe71WpFFN1VPaGix2Gw2", pdf: "1SyU4t2tvTgrEm1mtoMne5zpdPjJT69A0",
          learn: ["How to control a phone in AliRemote", "How to type passwords with no mistakes", "Which apps to install, in which order"],
          steps: [
            "Open AliRemote → click <b>iPhones</b> → click the phone you are working on.",
            "Use the <b>Controls</b> on the left: Home, App Switcher, Lock, Control Center. Use the arrows to scroll.",
            "Never type long text on the phone keyboard. Tap the box on the phone, write the text in the <b>Type</b> box (top right) and click <b>Send</b>.",
            "The <b>Notes</b> box (bottom right) has this phone's details: iCloud email, iCloud password, phone number and Gmail.",
            "To put a photo or video on the phone, use the <b>Content</b> button on the right side.",
            "Open the App Store. Install in this order: <b>Gmail → Facebook → Instagram → YouTube → X</b>.",
            "If it asks for a password, copy the iCloud password from Notes and send it with the Type box.",
            "Move the 5 apps to the bottom of the home screen, in the same order."
          ],
          rule: "Passwords always go through the <b>Type box → Send</b>. Never type them letter by letter.",
          check: [
            { q: "You need to enter a long password on the phone. What do you do?",
              options: ["Tap the box on the phone, put the password in AliRemote's Type box, click Send", "Click each letter on the phone keyboard", "Write it in the Notes box"],
              answer: 0, why: "The Type box is fast and makes no typing mistakes." },
            { q: "Which app order is correct?",
              options: ["Gmail → Facebook → Instagram → YouTube → X", "Instagram → Facebook → Gmail → X → YouTube", "Facebook → Instagram → YouTube → Gmail → X"],
              answer: 0, why: "Gmail comes first because every other account is made with it." }
          ]
        },
        {
          id: "1.2", title: "Making Gmail, Facebook & the Facebook Page", length: "11:11",
          video: "1WPLWswTXZOFHtIUVI3VhoTBlraQyYoOC", pdf: "1jAm5HsiBS_YqI4iX8m6MZfr9jA4K-ieJ",
          learn: ["How to make the Gmail", "How to make the Facebook profile", "How to make the Facebook Page (where Reels are posted)"],
          steps: [
            "Open the <b>Cell Sheet</b>. Use the <b>date of birth at the top of the sheet</b> for every account. Gender: Female.",
            "Change the name a little on each phone (for example: Elsa Hale, Hale Elsa, Elsaa Hale).",
            "<b>Gmail:</b> Create account → For my personal use → name → birthday → pick an email → make a password.",
            "Phone check: choose <b>Romania (+40)</b> and paste the phone number from Notes. The code arrives in the iPhone <b>Messages</b> app.",
            "Write every email, password and number in the Cell Sheet <b>the moment you make it</b>. Write the number as <b>40…</b> (no + sign).",
            "<b>Facebook:</b> Create new account → same birthday → phone number. If the SMS code does not come in 30 seconds, choose <b>Confirm by email</b> and use the Gmail.",
            "Set the city to <b>Miami, Florida</b>. Scroll for 30 seconds and add 5–6 suggested friends.",
            "<b>Facebook Page:</b> Menu → Pages → Create → name → category <b>Personal blog</b> → invite the friends you added → Done."
          ],
          rule: "Log every login in the Cell Sheet straight away. If it is not in the sheet, it does not exist.",
          check: [
            { q: "Which date of birth do you use for the accounts?",
              options: ["The date of birth at the top of the Cell Sheet", "Your own birthday", "Any date that is over 18"],
              answer: 0, why: "Every account in a Cell uses the same date so the accounts stay consistent." },
            { q: "How do you write the phone number in the Google Sheet?",
              options: ["40 and then the number, with no + sign", "+40 and then the number", "Only the last 4 numbers"],
              answer: 0, why: "Google Sheets breaks numbers that start with +." },
            { q: "The Facebook SMS code has not arrived after 30 seconds. What do you do?",
              options: ["Choose “Confirm by email” and use the phone's Gmail", "Make a new Facebook account", "Wait one hour"],
              answer: 0, why: "Email confirmation is instant and keeps the same account." }
          ]
        },
        {
          id: "1.3", title: "Making Instagram & YouTube Shorts", length: "7:12",
          video: "1l_v0g-CFRRhKsNyDvwUsy5obxAP012hG", pdf: "1M3WbxbNAxlz8RfxKoUGE4Qx5vJ3ze8Dh",
          learn: ["How to make Instagram the safe way", "How to fix Instagram when it gets stuck", "How to make the YouTube channel"],
          steps: [
            "Open Instagram. If it offers to continue with Facebook, say <b>NO</b>. Tap <b>Create new account</b>.",
            "Sign up with the phone's <b>Gmail</b>. Get the 6-digit code from the Gmail app.",
            "Use a <b>different password from Facebook</b>. Write it in the Cell Sheet.",
            "Use the same birthday as the Cell Sheet. Pick a clean username (for example: elsahale212).",
            "Skip the profile picture for now. Follow 1 big creator and like 1 post.",
            "<b>Stuck on loading?</b> Control Center → Airplane Mode ON → wait 5 seconds → OFF. Close Instagram and open it again.",
            "<b>YouTube:</b> tap You (bottom right) → Sign in with the phone's Gmail → You → <b>Create a channel</b>."
          ],
          rule: "Never link Instagram to Facebook, and never use the same password on both.",
          check: [
            { q: "Instagram shows “Continue as [Facebook name]”. What do you do?",
              options: ["Tap Create new account and sign up with the Gmail", "Tap Continue because it is faster", "Log in with your own Instagram"],
              answer: 0, why: "If the accounts are linked and one is banned, both are banned." },
            { q: "Instagram is stuck on loading after sign up. What do you do?",
              options: ["Airplane Mode on for 5 seconds, then off, then open Instagram again", "Make a second Instagram account", "Delete the Instagram app"],
              answer: 0, why: "Airplane Mode resets the phone's internet and the account loads." }
          ]
        },
        {
          id: "1.4", title: "Profile Pictures, Banner & Bios", length: "9:59",
          video: "1feEOGSn27dsUo2rp4blU30fz1svKQ363", pdf: "1-e2RMx8ht1CtN749swQjKOd3FDR4-ODs",
          learn: ["How to pick photos on Pinterest", "How to make profile pictures and a banner with Grok", "How to clean them and add the bios"],
          steps: [
            "Each phone needs <b>4 images</b>: 3 profile pictures (Instagram, Facebook Page, YouTube) and 1 banner (Facebook Page).",
            "On Pinterest, pick <b>3 portrait photos</b> and <b>1 wide lifestyle photo</b> (beach, palm trees, cafe).",
            "In Grok, open the project <b>Social Profile Builder</b>. Add the 3 portraits and write: <i>These three are for profile pictures for Instagram, YouTube Shorts, and Facebook.</i>",
            "Add the wide photo and write: <i>This one is for a banner.</i>",
            "In Grok Imagine, add the model's face photo. Profile pictures are <b>square (1:1)</b>. The banner is <b>wide (16:9)</b>.",
            "Put all 4 images into <b>xmediaops.com/clean</b>. Download the clean files.",
            "Upload the clean files to the phone with the <b>Content</b> button.",
            "Instagram = picture 1 + 2-line bio + 1 link. Facebook Page = picture 2 + banner + 1-line bio. YouTube = picture 3 + short description."
          ],
          rule: "Every image goes through <b>xmediaops.com/clean</b> before it touches a phone. No exceptions.",
          check: [
            { q: "You made 4 images in Grok. What is the next step?",
              options: ["Put them through xmediaops.com/clean, then upload the clean files", "Upload them straight to the phone", "Take a screenshot of them"],
              answer: 0, why: "Raw AI images carry hidden data that the apps can detect." },
            { q: "What shape is the Facebook banner?",
              options: ["Wide (16:9)", "Square (1:1)", "Tall (9:16)"],
              answer: 0, why: "Banners are wide. Profile pictures are square." },
            { q: "Can one phone use the same profile picture on Instagram, Facebook and YouTube?",
              options: ["No — each app gets a different picture", "Yes — it saves time"],
              answer: 0, why: "3 different pictures make the profiles look real." }
          ]
        },
        {
          id: "1.5", title: "Warm-up, Professional Account & Zernio", length: "5:35",
          video: "1qxm_T6GOe8N185cfVxicG1Mm6mQoZ4Hs", pdf: "1faFomUZrZzW1iPWh39Lym72eXcB2Sy7M",
          learn: ["How to warm up an account like a real American girl", "How to switch Instagram to a Professional account", "When to connect the accounts to Zernio"],
          steps: [
            "On Instagram, search a big American girl creator (for example: Alix Earle). Open her Reels and scroll.",
            "Scroll for about <b>10 minutes</b>. Watch good Reels fully. Skip bad or foreign Reels fast.",
            "In each session: <b>like 5–8 Reels</b>, <b>follow 4–5</b> American girl creators, write <b>1 short comment</b>.",
            "Warm-up time: <b>Instagram 1 day. Facebook Page 1 day. YouTube Shorts 3 days</b> (USA content only).",
            "Instagram profile → ☰ menu → Account type and tools → <b>Switch to professional account</b> → Digital creator → keep “Display on profile” <b>OFF</b> → <b>Creator</b>.",
            "When the warm-up is finished, connect Instagram, the Facebook Page and YouTube in <b>Zernio</b>. Mark it in the Cell Sheet."
          ],
          rule: "No account goes into Zernio before its warm-up is finished.",
          check: [
            { q: "When can you connect YouTube Shorts to Zernio?",
              options: ["After 3 days of warm-up", "Straight away", "After 1 hour of scrolling"],
              answer: 0, why: "YouTube needs the longest warm-up: 3 days." },
            { q: "Zernio cannot post to the Instagram account. What did you forget?",
              options: ["To switch Instagram to a Professional (Creator) account", "To get more followers", "To change the username"],
              answer: 0, why: "Zernio can only post to Professional accounts." },
            { q: "While warming up, you see a Reel in another language. What do you do?",
              options: ["Skip it fast", "Watch it twice and like it", "Leave a comment"],
              answer: 0, why: "You are teaching the app to show American girl content." }
          ]
        }
      ]
    },
    {
      id: "m2", title: "Module 2", subtitle: "Make the Reels (Day 3 onwards)",
      lessons: [
        {
          id: "2.1", title: "The 5 Phone Formats, Account Info & Niche Branding", length: "5:30",
          video: "1QARw_rWEP4DHzCAi85AstvIpm2XoH6Ul", pdf: "18tdLvYnOQOVbBng4oq39CTPuJKeKC7jg",
          learn: ["How the 5 phones per model are split by niche", "How to use Account Info and save Account Details", "Why Gym phones never copy actual workouts"],
          steps: [
            "Open <b>xmediaops.com/clone</b>. Each model has <b>5 phones</b>, and each phone has its own niche:",
            "<b>P1 · Santa Trends</b> (red outfits & holiday trends) · <b>P2 · Gym Skits</b> · <b>P3 · Upscale Beauty</b> · <b>P4 · Talking Heads</b> · <b>P5 · Beach Skits</b>.",
            "Click <b>Account Info</b> on the phone you are working on. It shows that phone's exact rules, bio ideas, profile picture rules and what to avoid.",
            "Fill in <b>Account Details</b> (Gmail, Instagram, Facebook Page, YouTube and Bio) and click <b>Save</b> so every phone's login stays inside the dashboard.",
            "Every outfit, profile picture and Reel on a phone must match that phone's niche (for example: red outfits on P1, gym sets on P2, beach fits on P5).",
            "<b>Important for P2 · Gym Skits:</b> only pick funny skits, personality videos or posing in gym clothes. <b>Never</b> clone actual workouts or gym machines — AI breaks on workout machines."
          ],
          rule: "Always check <b>Account Info</b> first so your outfit and Reel match that phone's exact niche.",
          check: [
            { q: "You are working on P2 · Gym Skits. Which Reel should you pick?",
              options: ["A solo girl in gym clothes doing a cute or funny skit", "A girl lifting heavy weights on a gym machine", "A girl in a wedding dress"],
              answer: 0, why: "AI cannot render gym machines or workouts cleanly — only use solo skits and posing in gym clothes." },
            { q: "Where do you check a phone's niche rules and save its Gmail, Instagram, Facebook and YouTube logins?",
              options: ["Inside Account Info / Account Details on xmediaops.com/clone", "In a random text file on your desktop", "You do not need to save them"],
              answer: 0, why: "Account Info shows the phone's rules and saves all logins in one place." },
            { q: "How are the 5 phones for each model set up?",
              options: ["P1 Santa Trends, P2 Gym Skits, P3 Upscale Beauty, P4 Talking Heads, P5 Beach Skits", "All 5 phones post the exact same videos", "Only 1 phone posts Reels"],
              answer: 0, why: "Each of the 5 phones tests a proven niche for that model." }
          ]
        },
        {
          id: "2.2", title: "Hunting Outlier Reels, Pinned Creators & Grok Outfits", length: "5:08",
          video: "1n1k8VAp5jLLTQuxA-Ytafcz07xN6EHAU", pdf: "1UQBAN1WOGq0zQ8Wq1IrZf5f1zGSawQWp",
          learn: ["How to use Pinned creators and spot outlier Reels", "How to make safe outfits in Grok Outfit Builder", "Why you never clone the same Reel twice"],
          steps: [
            "Look at the <b>Pinned:</b> bar at the top of the phone tab. Click a pinned creator to open her Instagram Reels, or click <b>+</b> to pin a new creator you find.",
            "Scroll her Reels and look for an <b>outlier winner</b> — a Reel with way more views than her normal posts (for example <b>50k, 200k, 400k+</b> when her normal is 10k).",
            "Check that it is <b>only her</b>, her <b>face is clear</b>, and the video fits the phone's niche.",
            "On Pinterest, copy an outfit photo that matches the phone's niche and the video's setting.",
            "In Grok <b>OUTFIT BUILDER</b>, paste the photo and write: <b>make the outfit references</b>. Download the <b>front</b> and <b>back</b> photos.",
            "<b>Beach safety rule (P5):</b> never paste bare bikini photos into Grok (Grok will block or ban it). Pick cute <b>beach cover-ups, sarongs or beach skirt sets</b>.",
            "Upload the front and back photos in <b>Outfits → + Add Outfit</b>, select the outfit, paste the Reel link and click <b>Make Reel</b>."
          ],
          rule: "You <b>can</b> reuse 1 good outfit on many different Reels, but <b>NEVER clone the same Reel twice</b> with different outfits (that gets accounts banned).",
          check: [
            { q: "Can you use the same Reel link twice if you change the outfit?",
              options: ["No — never clone the same Reel more than once", "Yes — you can use the same Reel 5 times", "Yes — if it has over 1M views"],
              answer: 0, why: "Posting the same Reel motion twice triggers duplicate-content bans. Reuse outfits, never Reels." },
            { q: "You need an outfit for P5 · Beach Skits. What do you paste into Grok?",
              options: ["A cute beach cover-up or beach skirt set", "A bare micro-bikini photo", "A winter coat"],
              answer: 0, why: "Bare bikinis get blocked by Grok. Beach cover-ups and skirt sets look great and pass safely." },
            { q: "A creator normally gets 12k views. Which Reel do you copy?",
              options: ["A 185k-view Reel with only her and a clear face", "An 11k-view Reel", "A 300k-view Reel with 3 people talking"],
              answer: 0, why: "Pick solo outlier Reels that beat her normal views by 3x–10x." }
          ]
        },
        {
          id: "2.3", title: "Quality Control, Audio Check & One-Click Approve", length: "3:30",
          video: "1l2ptzHnUdzHsBSqmtWOosk6ajUoNyRcc", pdf: "1yr_K6zOKCKejCI9KGaAIqOZjL3M9RVOP",
          learn: ["How to check every Reel like a real fan", "Why sound must always be ON", "What Approve and Make it anyway do"],
          steps: [
            "When a Reel finishes generating, play it from start to finish with <b>sound ON</b>.",
            "Ask yourself: <b>does this look like a real, attractive video of our girl?</b> Check her face, eyes, body, outfit and background.",
            "<b>No sound?</b> If a Reel has no audio, press <b>Skip</b> straight away. Never approve a silent Reel.",
            "<b>Warning popup (“more than one person”):</b> only click <b>Make it anyway</b> if you already watched the Reel and confirmed she is the main person in focus.",
            "If the video looks real and has working audio, click <b>Approve</b>.",
            "<b>Approve</b> automatically upscales the video to <b>1080p iPhone Clean</b>, strips all AI metadata and sends it to Zernio."
          ],
          rule: "Never approve a Reel without watching the full video with <b>sound ON</b>.",
          check: [
            { q: "A generated Reel looks great visually, but when you play it there is no sound. What do you do?",
              options: ["Press Skip immediately", "Press Approve anyway", "Upload it without sound"],
              answer: 0, why: "Reels without audio fail on Instagram, Facebook and YouTube Shorts." },
            { q: "What happens automatically when you press Approve?",
              options: ["It upscales to 1080p iPhone Clean, strips metadata and queues for Zernio", "It deletes the video", "You still have to clean the file manually"],
              answer: 0, why: "One click on Approve handles upscaling, metadata cleaning and scheduling." }
          ]
        },
        {
          id: "2.4", title: "Ramping to 30 Reels a Day, Pinning & Error Handling", length: "6:07",
          video: "1XTVt1BpS1_z7ThP-R3e-MVEpGbIU1YpI", pdf: "15dtWAVpuRicBwjnTRNGqT8MAMs9QtL39",
          learn: ["How to ramp from 1 Reel per phone to 30 Reels a day", "When to Skip broken renders without redoing them", "What to do if an error pops up"],
          steps: [
            "On your first day making Reels, start with <b>1 Reel per phone</b> to learn the flow. Then ramp up to <b>3 Reels per phone = 30 Reels a day</b> across all 10 phones.",
            "Every time you find a great creator for a phone, click <b>+</b> on the <b>Pinned:</b> bar and save her `@username`. Build <b>10–15 pinned creators per phone</b>.",
            "Do not wait for one video to finish. Queue Reels across Phone 1, Phone 2, Phone 3, Phone 4 and Phone 5 at the same time.",
            "<b>When a render comes out broken</b> (weird background animal/person, warped face, or something silly like shoes in a sauna): press <b>Skip</b> and pick a <b>different</b> Reel. Never waste time re-running the same broken Reel.",
            "<b>Red error box (“The Atlas balance is too low”):</b> stop and message your manager on Telegram straight away so they can top up the balance."
          ],
          rule: "Broken render = press <b>Skip</b> and move to a new Reel. Never re-run a broken video.",
          check: [
            { q: "A generated Reel looks weird because a horse in the background glitched. What do you do?",
              options: ["Press Skip and pick a different clean Reel", "Try making the exact same Reel 3 more times", "Press Approve"],
              answer: 0, why: "If the source video confuses the AI once, it will fail again. Skip it and pick a cleaner Reel." },
            { q: "You see a red error saying “The Atlas balance is too low”. What do you do?",
              options: ["Message your manager on Telegram straight away so they can top it up", "Keep clicking Make Reel 20 times", "Delete the outfits"],
              answer: 0, why: "Your manager tops up the Atlas credit balance in seconds once you tell them." },
            { q: "Once ramped up, what is your daily target for a 10-phone Cell?",
              options: ["3 Reels per phone = 30 Approved Reels per day", "1 Reel per week", "100 Reels on Phone 1 only"],
              answer: 0, why: "Every phone gets 3 Approved Reels per day (30 total across 10 phones)." }
          ]
        },
        {
          id: "2.5", title: "Hunting Talking Head Accounts & Cross-Pinning Niches", length: "5:21",
          video: "1yBkDn6BSQbn8z1Rxb7lRvFLfX7IOgDl-", pdf: "1VF8xpXpG9FDWafuubxSL4qBKsOcx7yja",
          learn: ["How to find real Talking Head Reels for P4", "How to tell a true Talking Head from a lip-sync", "How to cross-pin creators to other phones while scrolling"],
          steps: [
            "<b>P4 · Talking Heads</b> is only for videos where <b>one girl is speaking directly to the camera in her own voice</b> (usually with captions on screen).",
            "<b>Not a Talking Head:</b> if she is just smiling with text on screen and music, or mouthing/lip-syncing someone else's audio, <b>do not</b> use it on P4.",
            "When you find a girl who speaks to the camera and gets big outlier views (<b>100k, 500k, 700k+</b>), click <b>+</b> on P4 to pin her.",
            "Copy her winning talking Reel, pair it with a clean casual outfit in P4 and click <b>Make Reel</b>.",
            "<b>Cross-pin while you hunt:</b> while scrolling Instagram, if you see a great Gym girl, Upscale Beauty girl or Beach girl, switch to that phone tab (`P2`, `P3` or `P5`) and pin her with <b>+</b> so you never lose a good account."
          ],
          rule: "On <b>P4 · Talking Heads</b>, the girl must actually be speaking with her own voice — never silent text or music lip-syncs.",
          check: [
            { q: "Which video belongs on P4 · Talking Heads?",
              options: ["1 solo girl speaking directly to the camera in her own voice with 500k views", "A girl dancing silently with text on the screen", "Two people interviewing each other on the street"],
              answer: 0, why: "P4 is strictly for solo talking-to-camera videos where she speaks in her own voice." },
            { q: "While hunting for P4 Talking Heads, you spot an amazing Gym Skit creator. What do you do?",
              options: ["Switch to P2 · Gym Skits, click + to pin her for later, then continue on P4", "Ignore her because you are on P4", "Use her gym video on P4"],
              answer: 0, why: "Cross-pinning builds your creator library on every phone without extra work." }
          ]
        }
      ]
    },
    {
      id: "m3", title: "Module 3", subtitle: "Posting, Carousels & Stories",
      lessons: [
        {
          id: "3.1", title: "Daily Stories & Building Highlights (\"Life\" & \"Me\")", length: "5:54",
          video: "1qR0aaMlrBIfCz_eueaciNipPti1fP6KJ", pdf: "1GJMX5cp9xyXhzSu-joUJt8fSFBbGqfty",
          learn: ["When and where to post Daily Stories (2:00 PM UK Time, IG Only)", "How to post a \"Life\" Story straight from Pinterest without Grok", "How to generate a \"Me\" Story in Grok and build the Life 💕 & Me 💕 Highlights"],
          steps: [
            "<b>Daily Schedule (Day 1 to Day 7):</b> Post <b>1 Story per phone every day around 2:00 PM UK Time</b> across all 10 phones. Post Stories on <b>Instagram ONLY</b> — never on Facebook Stories (only Instagram has Highlights).",
            "<b>Alternate Days (Day 1–7):</b> <b>Day 1, 3, 5, 7 = \"Life\" Story</b> (lifestyle shot). <b>Day 2, 4, 6 = \"Me\" Story</b> (photo of our girl). Once an account gets traction, add the <b>Link 🔗</b> Highlight.",
            "<b>How to Post a \"Life\" Story (No Grok Needed):</b> Search your phone's niche on <b>Pinterest</b> (e.g. <code>gym girl</code>). Pick an aesthetic lifestyle photo where <b>her face is not shown</b> and her body proportions match our creator. Download it and drop it straight into <code>xmediaops.com/clean</code>.",
            "<b>How to Post a \"Me\" Story (Grok Skill):</b> Pick a niche photo on <b>Pinterest</b> where she is showing herself off. Drop it into your Cell's Grok <b>CAROUSELS + STORIES</b> skill and tell Grok: <i>\"For Elsa, make sure the inputs are good and the face stays good, for the Story Me\"</i>. Download the generated image and clean it on <code>xmediaops.com/clean</code>.",
            "<b>Upload, Add Viral US Girl Song & Save to Highlight:</b> Upload the <b>CLEANED</b> image via AliRemote <b>Content</b>, open Instagram and select <b>Story</b> (not feed post). Add a <b>viral US girl song</b> with lyrics (e.g. Sabrina Carpenter), post to Your Story, then tap <b>Highlight</b> and save it to <b>Life 💕</b> or <b>Me 💕</b> (always include a cute emoji)."
          ],
          rule: "Post 1 Story every day at <b>2:00 PM UK Time on Instagram ONLY</b>: <b>Life</b> Stories come straight from Pinterest (no face, no Grok) → Clean; <b>Me</b> Stories go Pinterest → Grok → Clean.",
          check: [
            { q: "Where and when do you post Daily Stories during the first 7 days of a new account?",
              options: ["Around 2:00 PM UK Time on Instagram Story ONLY (never Facebook Story)", "At midnight on Facebook Story only", "Once a month on YouTube Shorts"],
              answer: 0, why: "Stories are posted daily around 2:00 PM UK Time on Instagram only, because only Instagram has profile Highlights." },
            { q: "On Day 1, 3, 5 and 7 you post a \"Life\" Story. Do you need to run it through Grok?",
              options: ["No — pick a Pinterest niche photo that does not show her face (with matching body proportions) and clean it directly on xmediaops.com/clean", "Yes — generate 10 images in Grok first", "Post it without cleaning"],
              answer: 0, why: "Life Stories don't show her face, so you take them straight from Pinterest, clean them on xmediaops.com/clean, and post." },
            { q: "After posting a Story on Instagram with a viral US girl song, what must you always do?",
              options: ["Save it to the matching Highlight with an emoji (Life 💕 or Me 💕)", "Delete the Story immediately", "Share it to your personal Facebook"],
              answer: 0, why: "Saving every Story into Life 💕 and Me 💕 builds the account's permanent profile Highlights." }
          ]
        },
        {
          id: "3.2", title: "Photo Carousels (Pinned Creators → Grok → Clean → IG & FB Page)", length: "3:55",
          video: "13eDuj8Kjz2Ck7-z2ZitF17aTHHauE38R", pdf: "14QLGofANnd9KH3EdEsovxcknWeXdlxVB",
          learn: ["When to post Carousels (4:00 PM UK Time every other day from Day 3)", "How to pull Carousel slides from your Pinned Creators and clone them in Grok", "How to post Carousels manually on BOTH Instagram and your Facebook Page"],
          steps: [
            "<b>Every-Other-Day Schedule (Day 3, 5, 7, 9...):</b> Post <b>1 Photo Carousel per phone around 4:00 PM UK Time every other day</b> (10 Carousels total across your Cell, finished before 5:00 PM UK Time).",
            "<b>Pull from Pinned Creators:</b> Open <code>xmediaops.com/clone</code> and click one of your <b>Pinned Creators</b> for that phone's niche (e.g. a Beach creator for <b>P5 · Beach Skits</b>). Download the 2–4 slides of a high-performing Carousel using the <b>Instagram Downloader Chrome extension</b>.",
            "<b>Regenerate in Grok (CAROUSELS + STORIES Skill):</b> Drop the downloaded slides into your Grok <b>CAROUSELS + STORIES</b> skill and type: <i>\"Regenerate this for me with Elsa\"</i> (and ask for a short chill girly caption if not already output).",
            "<b>Clean & Put the Best Close-Up First:</b> Download the generated slides and clean every slide on <code>xmediaops.com/clean</code>. When uploading to the phone via AliRemote <b>Content</b>, always put the <b>most engaging close-up shot as Slide 1</b>.",
            "<b>Post on BOTH Instagram & Facebook Page:</b> On <b>Instagram</b>, post the Carousel on the matching niche account with <b>USA viral audio</b> and the Grok caption. On <b>Facebook</b>, first make sure you are switched into your <b>Facebook Page account</b> (never your main personal account!), then post the exact same cleaned Carousel slides with audio and caption."
          ],
          rule: "Post 1 Carousel per phone every other day at <b>4:00 PM UK Time</b> on <b>BOTH Instagram and the Facebook Page</b> (never the personal FB profile), with the most engaging close-up as <b>Slide 1</b>.",
          check: [
            { q: "When do you start posting Photo Carousels, and how often?",
              options: ["From Day 3 onwards, every other day (Day 3, 5, 7, 9...) around 4:00 PM UK Time", "On Day 1 before warming up", "Only once a month"],
              answer: 0, why: "Carousels start on Day 3 after warm-up and run every other day around 4:00 PM UK Time (10 Carousels across your 10 phones)." },
            { q: "Which slide must always go first (Slide 1) when posting a Carousel?",
              options: ["The most engaging close-up photo of the creator", "A blurry background photo", "An uncleaned raw file"],
              answer: 0, why: "Slide 1 hooks the viewer in the feed, so always lead with the most engaging close-up shot." },
            { q: "Where do you manually post every cleaned Photo Carousel?",
              options: ["On BOTH Instagram and the Facebook Page (making sure you switched into the Page, not your main personal FB account)", "Only on YouTube Shorts", "On your personal Facebook profile"],
              answer: 0, why: "The exact same cleaned Carousel goes on both Instagram and the creator's Facebook Page with USA viral audio and the Grok caption." }
          ]
        },
        { id: "3.3", title: "Posting with Zernio", length: "", video: "" }
      ]
    }
  ],

  // Final test: different questions from the lesson checks. `lesson` = which lesson to review if wrong.
  finalExam: [
    { lesson: "1.1", q: "You get a brand new phone. Which app do you install first?", options: ["Gmail", "Instagram", "X"], answer: 0 },
    { lesson: "1.2", q: "You just made the Facebook account. When do you write the password in the Cell Sheet?", options: ["Straight away", "At the end of the day", "You do not need to — you will remember it"], answer: 0 },
    { lesson: "1.3", q: "Which Instagram password is correct?", options: ["A different password from Facebook", "The same password as Facebook", "The same password as Gmail"], answer: 0 },
    { lesson: "1.4", q: "Grok made a great profile picture. What is the very next step?", options: ["Clean it on xmediaops.com/clean", "Upload it with the Content button", "Post it on Instagram"], answer: 0 },
    { lesson: "1.5", q: "It is Day 2. You made YouTube Shorts on Day 1. Can you connect it to Zernio today?", options: ["No — YouTube needs 3 days of warm-up", "Yes", "Yes, if you scroll for 1 hour"], answer: 0 },
    { lesson: "1.4", q: "Which Instagram bio is correct?", options: ["20 | Florida 🌴 and one short cute line", "A long paragraph about AI", "Your real name and your country"], answer: 0 },
    { lesson: "2.1", q: "On P2 · Gym Skits, which video must you NEVER clone?", options: ["Actual workouts or girls using gym machines", "A cute solo skit in gym clothes", "A girl posing in a gym set"], answer: 0 },
    { lesson: "2.2", q: "Can you reuse 1 good outfit across multiple Reels, or reuse 1 Reel with multiple outfits?", options: ["Reuse outfits across different Reels — NEVER clone the same Reel twice", "Clone the same Reel 5 times with different outfits", "Never reuse outfits"], answer: 0 },
    { lesson: "2.3", q: "A generated Reel looks good, but has no sound when you play it. What do you do?", options: ["Press Skip immediately", "Press Approve", "Download it"], answer: 0 },
    { lesson: "2.4", q: "You see the red error “The Atlas balance is too low”. What do you do?", options: ["Message your manager on Telegram straight away", "Keep clicking Make Reel", "Approve broken videos"], answer: 0 },
    { lesson: "2.5", q: "Which video belongs on P4 · Talking Heads?", options: ["One solo girl speaking directly to the camera in her own voice", "A silent video with music and text on screen", "Two girls dancing"], answer: 0 },
    { lesson: "3.1", q: "How do you post a \"Life\" Story on Day 1, 3, 5 and 7 around 2:00 PM UK Time?", options: ["Pick a Pinterest niche photo with no face shown → clean on xmediaops.com/clean → post to IG Story ONLY with a US girl song → save to Life 💕", "Post it on Facebook Stories without cleaning", "Generate a Reel on xmediaops.com/clone"], answer: 0 },
    { lesson: "3.2", q: "When posting a Photo Carousel at 4:00 PM UK Time every other day on Facebook, what must you check first?", options: ["That you are switched into the Facebook Page account (never the main personal account)", "That you deleted the Instagram post first", "That the images are uncleaned"], answer: 0 },
    { lesson: "0", q: "From Day 3, how many Reels does your whole Cell post per day?", options: ["30 (3 per phone)", "10", "300"], answer: 0 },
    { lesson: "0", q: "You are stuck and forgot a step. What is the first thing you do?", options: ["Open that lesson's written guide (PDF)", "Guess and keep going", "Make a new account"], answer: 0 }
  ]
};
