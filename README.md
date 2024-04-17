
# Complane

A simple step-by-step website to "complane" to Secretary Pete Buttigieg about bad experiences on US Airlines.

Hosted at [minnick.co/complane](https://www.minnick.co/complane)

## Implementation Task List
Using Markdown because JIRA would be overkill

#### App Structure, etc
- [x] Logo and favicon
- [x] Set up deployment to GH pages
- [x] install tailwind
- [x] add shadcn
  - [x] install
  - [x] add forms
- [ ] nav
  - [ ] start over
  - [ ] resume
  - [ ] prev
  - [ ] skip
- [ ] clean up starter code
- [ ] Footer
  - [ ] hire me info
  - [ ] paypal link


#### Landing Screen
- [x] view + router
- [x] blurb
- [ ] common complaints

#### Basic Flight Info Form
- [ ] view + router
- [ ] Airline Picker
- [ ] Flight No input
- [ ] Date Picker

#### Check-in
- [ ] view + router
- [ ] yes/no
- [ ] text input
- [ ] store

#### Boarding
- [ ] view + router
- [ ] yes/no
- [ ] text input
- [ ] store

#### In-Flight
- [x] view + router
- [x] yes/no
- [x] text input
- [x] store
- [ ] unit tests

#### Arrival
- [ ] view + router
- [ ] yes/no
- [ ] text input
- [ ] store

#### Send to Pete
- [x] view + router
- [x] write letter
- [ ] format letter
- [x] read from store
- [ ] email link
- [ ] copy to clipboard
- [ ] print preview
- [ ] no problems
- [ ] Tone toggle: Normal / Joe Lycett

______________________________________________________________________

## Running the project locally

### Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

### Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

### Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

### Project Setup

```sh
npm install
```

#### Compile and Hot-Reload for Development

```sh
npm run dev
```

#### Type-Check, Compile and Minify for Production

```sh
npm run build
```

#### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

#### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
