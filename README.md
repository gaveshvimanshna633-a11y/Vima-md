# MovieWorld

React (Vite) home page — Nav + Hero + Movie Grid. Built to match the
MOVIEWORLD design (black cinematic + crimson accents).

## What's inside

```
src/
  components/
    Nav.jsx / Nav.css        — top navigation bar
    Hero.jsx / Hero.css      — hero banner with slider dots
    MovieGrid.jsx / .css     — movie poster grid
  data/
    movies.js                — sample catalogue (edit this to change movies)
  App.jsx                    — wires everything together
  index.css                  — design tokens + global styles
```

To add/change movies, edit `src/data/movies.js` — no other file needs touching.

---

## Deploying from your phone (GitHub + Vercel, no computer needed)

### Step 1 — Get this project onto GitHub

1. On your phone, open **github.com** in the browser (or the GitHub app) and log in.
2. Tap **+** → **New repository**. Name it `movieworld`, keep it Public, tap **Create repository**.
3. On the new repo's page, tap **Add file → Upload files**.
4. Unzip the file you downloaded from Claude (most phone file managers can
   unzip — long-press the `.zip` → Extract/Unzip), then upload **all the
   files and folders** from inside `movieworld-react/` (not the zip itself).
   Do this in a few batches if your browser limits how many files you can
   select at once.
5. Scroll down, tap **Commit changes**.

### Step 2 — Deploy on Vercel

1. Open **vercel.com** in your phone's browser and sign up/log in with your
   GitHub account (this lets Vercel see your repos automatically).
2. Tap **Add New → Project**.
3. Find and select the `movieworld` repo you just created, tap **Import**.
4. Vercel auto-detects Vite — leave the settings as they are.
5. Tap **Deploy**. Wait ~1 minute.
6. You'll get a live link like `movieworld-yourname.vercel.app` — that's
   your site, live on the internet.

### Making changes later

Any time you edit a file in the GitHub repo (even from the GitHub mobile
app's built-in editor) and commit, Vercel automatically rebuilds and
redeploys your site within a minute or two. You never need to touch Vercel
again after the first setup.
