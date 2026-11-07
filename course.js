/*
  X MEDIA ACADEMY — COURSE CONTENT (the only file you edit to change the course)

  Swap a video:   upload the new video to Google Drive, share "Anyone with the link",
                  copy the ID from the link (the part after /d/) and paste it into `video`.
  Add a lesson:   copy a lesson block, give it a new unique `id`, fill it in.
  Coming soon:    set `video: ""` and the lesson shows as "Coming soon" without blocking anyone.
  Results sheet:  paste your Google Apps Script web app URL into `resultsUrl` (see README.md).
*/
window.COURSE = {
  version: "2026-11-07",
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
          id: "2.1", title: "How the Clone Factory Works", length: "1:01",
          video: "18dPzQoXLgcdFL8a_8FnUR3K172mew4iO", pdf: "1qVjmdXbDkBkSsl1pXlXXWLnZRqeFtDCT",
          learn: ["How Reels are made now", "Your 3 jobs as a Systems Manager"],
          steps: [
            "You do <b>not</b> write prompts. The Clone Factory (<b>xmediaops.com/clone</b>) does it for you.",
            "You give it 2 things: <b>an outfit</b> (front + back photo) and <b>a link to a winning Reel</b>.",
            "It makes the video. You check it. If it is good, press <b>Approve</b> — it is upscaled and cleaned automatically.",
            "Your 3 jobs: <b>make outfits</b>, <b>find winning Reels</b>, <b>check quality fast</b>."
          ],
          rule: "Always ask yourself: is this good enough to post on this account?",
          check: [
            { q: "Which 2 things do you give the Clone Factory?",
              options: ["An outfit (front + back) and a link to a winning Reel", "A written prompt and a song", "Only a photo of the model"],
              answer: 0, why: "Outfit + Reel link is all it needs." },
            { q: "What happens when you press Approve?",
              options: ["The video is upscaled and cleaned automatically", "The video is deleted", "You must clean it yourself"],
              answer: 0, why: "Approve does the upscale and the cleaning for you." }
          ]
        },
        {
          id: "2.2", title: "Making Outfits (Pinterest → Grok)", length: "2:22",
          video: "15TWxqS4d_1_E-pWs-13krhL_faM1nd5Q", pdf: "1lDJSl1jA86mHO0qWqCVWRibhit_wmJEz",
          learn: ["How to pick an outfit that fits the phone", "How to find many outfits fast on Pinterest", "How to make the front and back photos in Grok"],
          steps: [
            "Check which phone you are making for. Each phone has its own style (for example: Gym, Christmas, Cafe & walks).",
            "On Pinterest, search <b>cute girl</b> (or the style, for example <b>gym girl</b>).",
            "Click a good outfit. Pinterest then shows many similar outfits under it.",
            "Right-click the outfit → <b>Copy Image</b>.",
            "Open Grok (Outfit Maker), paste the image and write: <b>make the outfit references</b>",
            "Grok makes 2 photos of our model in that outfit: <b>front</b> and <b>back</b>. Save both."
          ],
          rule: "The outfit must match the phone's style.",
          check: [
            { q: "You copied an outfit from Pinterest. What do you write in Grok?",
              options: ["make the outfit references", "make a video", "describe this girl"],
              answer: 0, why: "That exact sentence starts the Outfit Maker." },
            { q: "Phone 2 is the Gym phone. Which outfit fits?",
              options: ["A gym set (sports bra and leggings)", "A Christmas jumper", "A wedding dress"],
              answer: 0, why: "Every outfit must match the phone's style." }
          ]
        },
        {
          id: "2.3", title: "Finding Winning Reels", length: "3:11",
          video: "1f1sInay79OM0n-GfgVWvkSAjmzpomVzY", pdf: "1v_HLycvtW2_AhlPFA13h7Kh9t2XCpRsE",
          learn: ["How to spot a Reel that did much better than normal", "The 3 rules every Reel must pass"],
          steps: [
            "Find a real, good-quality girl account on Instagram. Open her <b>Reels</b> tab.",
            "Look at the views. Most of her Reels get about the same views (for example 20k–80k). <b>Skip those.</b>",
            "Look for one Reel with far more views than the rest (for example 150k, 220k, 437k). That is a <b>winner</b>.",
            "<b>Rule 1 — only her:</b> no other person in the video.",
            "<b>Rule 2 — her face can be seen.</b>",
            "<b>Rule 3 — calm, natural vibe</b> (showing her look or outfit). No comedy skits. No talking videos.",
            "If it passes all 3 rules, copy the link."
          ],
          rule: "Only clone winners that pass all 3 rules.",
          check: [
            { q: "Her Reels get about 30k views. One has 400k, but a man walks in halfway. Do you clone it?",
              options: ["No — another person is in the video", "Yes — it has the most views", "Yes — the man will be removed"],
              answer: 0, why: "The AI can copy the wrong person." },
            { q: "Her normal is about 40k views. Which Reel is the best choice?",
              options: ["220k views, only her, face visible, calm outfit video", "45k views, only her, outfit video", "300k views, comedy skit with her friend"],
              answer: 0, why: "It is far above her normal AND passes all 3 rules." }
          ]
        },
        {
          id: "2.4", title: "Using the Clone Factory", length: "2:05",
          video: "1TbGpQVZLA-rMlZ-rQrMGSPjk7fPGqq-B", pdf: "1uvUgaHpJAmpaXChYEQusPpbq0BiRK0iM",
          learn: ["How to add an outfit", "How to make a Reel", "How to check it and press Approve"],
          steps: [
            "Go to <b>xmediaops.com/clone</b> → <b>Outfits</b>.",
            "Give the outfit a simple name (for example: white cute fit). Add the front photo and the back photo → <b>Add Outfit</b>.",
            "Pick the outfit, paste the Reel link → <b>Make Reel</b>.",
            "If it warns “more than one person”, only press <b>Make it anyway</b> if you already checked she is the main person.",
            "While it is making the video, go and find your next Reel.",
            "Watch the result with <b>sound ON</b>. Check the face, body, outfit and that it looks good.",
            "Good → <b>Approve</b>. Bad → <b>Skip</b> (next lesson)."
          ],
          rule: "Always watch the full result with sound on before you press Approve.",
          check: [
            { q: "The result is ready. What do you do before pressing Approve?",
              options: ["Watch it fully with sound on and check face, body and outfit", "Press Approve straight away", "Download it and edit it"],
              answer: 0, why: "You are the quality check. Nothing goes out unchecked." },
            { q: "It warns “more than one person”. You already checked she is clearly the main person. What do you do?",
              options: ["Press Make it anyway", "Close the website", "Change the outfit"],
              answer: 0, why: "Only after you have checked it yourself." }
          ]
        },
        {
          id: "2.5", title: "Working Fast & Skipping Bad Videos", length: "5:07",
          video: "1A2GvDKRa6l5ufVXT_s9IVw38-cGzc3ET", pdf: "1tqTrgyj9BN-0_m-EYN5STDwsEPScM6T4",
          learn: ["How to work on many Reels at the same time", "What to do when a video comes out bad"],
          steps: [
            "Never wait. While one video is being made, make the next outfit and find the next Reel.",
            "Skip accounts that look AI, are low quality, or do not fit the style.",
            "Found a good account for another phone (for example a gym account)? <b>Save it for that phone.</b>",
            "Bad result (wrong person, broken face)? <b>Do not try to fix it. Press Skip.</b>",
            "Go back to the account, pick another clean Reel and press Make Reel."
          ],
          rule: "Bad video = Skip and replace. Never spend time fixing it.",
          check: [
            { q: "The video copied a woman in the background instead of our model. What do you do?",
              options: ["Press Skip and make a new Reel from a clean video", "Try to fix it for 30 minutes", "Approve it anyway"],
              answer: 0, why: "You cannot fix it. Skipping and replacing is fastest." },
            { q: "You are looking for cafe videos and find a great gym account. What do you do?",
              options: ["Save it for the Gym phone and keep looking", "Ignore it", "Use it on the cafe phone"],
              answer: 0, why: "Good accounts are valuable. Save them for the right phone." }
          ]
        }
      ]
    },
    {
      id: "m3", title: "Module 3", subtitle: "Posting, Carousels & Stories",
      lessons: [
        { id: "3.1", title: "Posting with Zernio", length: "", video: "" },
        { id: "3.2", title: "Photo Carousels", length: "", video: "" },
        { id: "3.3", title: "Stories & Highlights", length: "", video: "" }
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
    { lesson: "2.3", q: "Her Reels have 25k, 30k, 28k and 310k views. Which one is the winner?", options: ["The 310k Reel", "All four", "The 25k Reel"], answer: 0 },
    { lesson: "2.3", q: "A Reel has 500k views, but her face is hidden the whole time. What do you do?", options: ["Skip it", "Clone it"], answer: 0 },
    { lesson: "2.2", q: "Phone 1 is the Christmas phone. Which outfit do you pick?", options: ["A red Christmas outfit", "A gym set", "A bikini"], answer: 0 },
    { lesson: "2.4", q: "The result looks good but the sound does not match her mouth. What do you do?", options: ["Skip it and make a new one", "Approve it"], answer: 0 },
    { lesson: "0", q: "From Day 3, how many Reels does your whole Cell post per day?", options: ["30 (3 per phone)", "10", "300"], answer: 0 },
    { lesson: "0", q: "You are stuck and forgot a step. What is the first thing you do?", options: ["Open that lesson's written guide (PDF)", "Guess and keep going", "Make a new account"], answer: 0 }
  ]
};
