# Reading

An Observable Notebook Kit project. Playback uses the shared engine
[observable2/scoringthespeltair](https://github.com/observable2/scoringthespeltair),
which this project pins to a release tag.

## Commands

- `npm run preview` — local preview at http://localhost:5173
- `npm run build` — build to `../dist`

## Working with the engine

`package.json` depends on `github:observable2/scoringthespeltair#vX.Y.Z`, a
tagged engine release. `package-lock.json` pins the exact commit, so **nothing
updates until you change the tag**. Because the tag is fixed, `npm update`
will not move it.

To bump to a new engine release:

1. In the engine repo, commit, **push**, and tag the release (`vX.Y.Z`), then
   push the tag. Unpushed changes and tags are invisible here.
2. Skim what changed (`git log vOLD..vNEW --stat` in the engine repo) and
   check that its `peerDependencies` (rita) still match this project.
3. From this folder run `node node_modules/scoringthespeltair/scripts/bump.js vX.Y.Z`
   (add `--dry` to preview). It sets the tag in `package.json` and regenerates
   `package-lock.json` in a temporary folder. Do not run plain `npm install`
   or `npm update` instead: this folder is in the `scored-air` workspace, so
   npm would update the shared root lockfile, not this project's own, which is
   the one the deploy builds from.
4. Confirm the `scoringthespeltair` entry in `package-lock.json` shows the new
   version and commit hash.
5. Restart `npm run preview` and hard-reload. If it still serves old code,
   delete `node_modules/.vite` and restart. Play through each notebook in
   `nbks/` and check timing.
6. Run `npm run build` to confirm a clean build.
7. Commit `package.json` and `package-lock.json`. Pushing to main triggers the
   deploy workflow.

Notes:

- If the engine seems unchanged, check that the version and commit hash for
  `scoringthespeltair` in `package-lock.json` have moved.
- `npm run build` uses the locked commit, so a build never picks up engine
  changes until you bump the tag.
- Avoid bumping just before a class or deploy; a new engine release can change
  timing.
- Import from the engine with `import { play, defaultConfig } from
  "scoringthespeltair"` (the engine's `index.js`). A new engine export must be
  re-exported from `index.js`; a new engine file must also be added to `files`
  and `exports` in the engine's `package.json`.
