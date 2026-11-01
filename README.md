# കലോത്സവം 2026 — Live Website v2

## What's included
- Public stage schedule with Malayalam search
- Live ongoing/upcoming/completed stage status
- Live announcements and results
- Teacher-only sign-in, stage editing, event reordering, result publishing
- Realtime Firebase Firestore listeners
- Responsive single-page website for GitHub Pages

## Setup (about 15–25 minutes)
1. Go to https://console.firebase.google.com and create a project.
2. Under **Build → Firestore Database**, create a database. Choose a suitable region. You can start in production mode, then immediately publish the rules in `firestore.rules` under **Firestore Database → Rules**. Do not leave permissive test rules active.
3. Under **Build → Authentication → Sign-in method**, enable **Email/Password**. Under **Users**, add an authorized teacher's email and password.
4. Under **Project settings → Your apps**, register a **Web** app and copy its `firebaseConfig` values into `firebase-config.js`. These values are not secrets.
5. Under **Authentication → Users**, copy the teacher's **User UID**. In **Firestore Database → Data**, create collection `admins`, document ID exactly equal to that UID, with field `role` (string) = `admin`. Only add trusted teacher UIDs. The client cannot grant itself admin rights.
6. In **Authentication → Settings → Authorized domains**, add your GitHub Pages domain (e.g. `yourname.github.io`) if not already present.
7. Upload `index.html`, `app.js`, and `firebase-config.js` to the root of a GitHub repository. Under **Settings → Pages**, select **Deploy from a branch**, `main`, `/ (root)`.
8. Open your site, sign in with the teacher account, and save each stage once to initialize the live Firestore records. Publish announcements and results as needed. Open the site on another device to verify live changes.

## Important
- The default event names are **sample/transcribed from the supplied image**; confirm each against the official printed schedule before publishing. Stage times are 9:30 a.m. as shown in the image.
- This is a genuine realtime implementation, not a simulated refresh, **after Firebase is configured**. Without Firebase credentials the website runs in **demo/read-only mode**.
- Results are append-only in this version; corrections require editing the result document directly in Firebase Console. A future version can add a safe edit/delete workflow.
- The Firestore rules protect writes, but you should set Firebase usage/budget alerts and monitor usage for public events.
- Do not publish teacher passwords in code, GitHub, screenshots, or posters.
- No backend server is needed for this version: GitHub Pages hosts the frontend, Firebase provides authentication and database.
