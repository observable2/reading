# Reading

An Observable Notebook Kit project. Playback uses the shared engine
[observable2/scoringthespeltair](https://github.com/observable2/scoringthespeltair),
which this project tracks at the tip of its default branch.

## Commands

- `npm run preview` — local preview at http://localhost:5173
- `npm run build` — build to `../dist`

## Working with the engine

`package.json` depends on `github:observable2/scoringthespeltair` (no tag), so
the engine comes from GitHub's default branch. `package-lock.json` pins the
exact commit, so **nothing updates until you ask it to**.

1. Edit the engine in its own repo, then **commit and push**. Unpushed changes
   are invisible here.
2. In this project run `npm update scoringthespeltair`.
3. Restart `npm run preview` and hard-reload. If it still serves old code,
   delete `node_modules/.vite` and restart.
4. Commit the changed `package-lock.json`. It records which engine commit this
   project was last run against.

Notes:

- If the engine seems unchanged, check that the commit hash for
  `scoringthespeltair` in `package-lock.json` has moved.
- `npm run build` uses the locked commit. Run step 2 first for the latest engine.
- A broken push to the engine breaks this project on the next update. Avoid
  updating just before a class or deploy.
- Import from the engine with `import { play, defaultConfig } from
  "scoringthespeltair"` (the engine's `index.js`). A new engine export must be
  re-exported from `index.js`; a new engine file must also be added to `files`
  and `exports` in the engine's `package.json`.
