# X Media Academy — VA training site

Live link for VAs: https://louie-eng.github.io/xmedia-va-academy/

## Files
| File | What it is | Do you edit it? |
|---|---|---|
| `course.js` | Every lesson, video, step, question and the final test | **Yes, this is the only file you edit** |
| `app.js` | How the site works (locking, timer, saving) | No |
| `styles.css` | Fonts and colours | Only to change the look |
| `index.html` | Page shell | No |
| `google-sheet-script.gs` | Saves results into your Google Sheet | Once, at setup |

## 1. Swap or add a video
1. Upload the video to Google Drive in **X Media VA Academy**, then Share → "Anyone with the link".
2. Copy the ID from the link: `drive.google.com/file/d/`**THIS-PART**`/view`.
3. In `course.js`, paste it into that lesson's `video:` (and the PDF ID into `pdf:`). Update `length:`.
4. New lesson: copy a lesson block, give it a new `id` (e.g. `"3.1"`), write `learn`, `steps`, `rule`, `check`.
5. Lessons with `video: ""` show as **Soon** and do not block anyone.
6. Publish: run `./publish.sh` in this folder.

## 2. Connect the results Google Sheet (2 minutes, once)
1. Make a new Google Sheet called **X Media Academy Results**.
2. Extensions → Apps Script → paste all of `google-sheet-script.gs` → Save.
3. Deploy → New deployment → Web app → Execute as **Me** → Who has access **Anyone** → Deploy → allow.
4. Copy the Web app URL into `resultsUrl` in `course.js`, then run `./publish.sh`.

Until step 4 is done, every answer waits safely in the VA's browser and is sent the moment the URL is added.

## What you see in the Sheet
- **VAs** tab: one live row per VA: status (IN TRAINING / READY FOR TEST / PASSED / FAILED - LOCKED), lessons done, minutes studied, quick-check mistakes, test tries, best score, certificate code.
- **Answers** tab: every answer they gave, right or wrong, with the time.

## Rules built in
- Lessons unlock in order. "Next" stays locked until the VA has spent 70% of the video length on the page **and** answered every quick-check right.
- Final test: 12 questions, 12/12 to pass, answers hidden, max 3 tries, then locked ("message your manager").
- Answer order is shuffled per VA, so answers can't be shared as "always pick B".
- To check a VA's code: find it in the **VAs** tab. If it is not there, it is fake.
