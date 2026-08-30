# Boom Chat V19

## New features
- NASA-style **MISSION ALERTS** center.
- Alerts for post likes, comments and direct messages.
- Browser push subscription support.
- Real Web Push via the included Supabase Edge Function.
- Feed is permanently **newest post first**.
- Select up to **10 photos** in one post.
- Multiple photos are stored in Supabase Storage and displayed as a swipe/scroll carousel.

## Required setup

### 1. Run SQL
Run `supabase-v19-migration.sql` once in Supabase SQL Editor.

### 2. GitHub Pages
Upload:
- `index.html`
- `sw.js`

Both must be in the same GitHub Pages root folder.

### 3. Push notifications
The site can register browser push subscriptions after Step 1.

For actual notifications when the recipient has the site closed, deploy:
`supabase/functions/push-notify/index.ts`

A PRIVATE VAPID setup file was generated separately and is intentionally
NOT included in this GitHub ZIP. Never commit that private key to GitHub.

### 4. Enable push
After deploying the Edge Function, each user taps:
**ALERTS → ENABLE PUSH**

V19 badge confirms the latest build.
