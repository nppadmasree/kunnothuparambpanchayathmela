# Kalolsavam 2026 — Version 3

## Included features
- Three existing live stage cards and admin editing, with up/down programme ordering
- Automatic Malayalam public announcements when a stage's saved competition order changes
- Admin-only student directory and numerical marks out of 300
- Up to 25 participants per competition, with A (240–300), B (210–239), C (180–209), and no grade (<180)
- Admin-controlled first/second/third prize separate from grade
- Public results contain only chest number, name, school, grade and prize
- School leaderboard: A=5, B=3, C=1 per student in published results
- CSV import for schools and students
- Photo gallery with Firebase Storage uploads

## Deploy — important order
1. Back up the existing GitHub repository files before editing. Existing Firestore data remains untouched.
2. Firebase Console > Firestore Database > Rules: **replace** old rules with `firestore.rules` and Publish. Do not append to existing rules. Keep your existing `admins/<teacher-uid>` document with `role` string `admin`.
3. Firebase Console > Storage: create a bucket if needed; this may require upgrading to Blaze billing. Under Storage > Rules replace with `storage.rules` and Publish. If Storage is unavailable, the rest of the site still works; photo uploads will fail until enabled.
4. GitHub repo `nppadmasree/kunnothuparambpanchayathmela`: upload/replace `index.html`, `app.js`, and `firebase-config.js` in the repository ROOT. Do not upload ZIP as the site.
5. Wait for GitHub Pages deployment and hard refresh (Ctrl+Shift+R).
6. Log in, add schools, then students, then choose a stage and competition, click **Load / edit result**, enter participant marks, Save draft, and Publish result.
7. Check the public results tab and the school points tab from a signed-out browser.

## CSV examples
schools.csv (UTF-8):
```
id,name
S001,School A
S002,School B
```
students.csv (UTF-8):
```
chest,name,schoolId
101,Student One,S001
102,Student Two,S002
```
Upload schools first and wait for them to appear in the school list, then upload students. CSV supports quoted commas and Malayalam UTF-8.

## Notes and limitations
- Existing V2 simple results in the `results` collection remain stored but are not automatically converted to student-wise V3 results. Re-enter or migrate them manually; do not delete old records until verified.
- A published result is a snapshot: later changes to a student's directory name or school do not retroactively change already-published results. Load and republish that event to update it.
- The public points table totals published results only; private drafts do not count. Each student grade in each event contributes points, even if several students from one school participate in the same event.
- Prize positions are chosen by admin; this version does not auto-rank or decide ties. Only one first, second, and third prize can be selected per item.
- A schedule change announcement is generated when saving a reordered event list. Draft reordering in the editor is not public until Save stage is clicked. Renaming an item may look like a different event and is not announced as a move.
- Firebase Storage may require Blaze billing. Set budget alerts, since billing alerts do not impose hard caps.
- School directory is public, student directory and private results are restricted to admin in Firestore rules.
- Public result rules restrict top-level fields, and the site deliberately excludes numeric marks from public documents. For higher-assurance deployments, consider stricter nested participant schema validation and server-side publishing.
- Test login and one sample event before entering all competition results.
