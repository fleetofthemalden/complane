
# Complane

A simple step-by-step website to "complane" to Secretary Pete Buttigieg about bad experiences on US Airlines.

Hosted at [minnick.co/complane](https://www.minnick.co/complane)

## Implementation Task List
Using Markdown because JIRA would be overkill

#### App Structure, etc
- [x] Logo and favicon
- [x] Set up deployment to GH pages
- [x] install tailwind
- [ ] add shadcn
  - [x] install
  - [ ] add forms
- [ ] nav
- [ ] get started/resume/start over
- [ ] clean up starter code
- [ ] store
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

#### Boarding
- [ ] view + router
- [ ] yes/no
- [ ] text input

#### In-Flight
- [x] view + router
- [ ] yes/no
- [ ] text input
- [ ] unit tests

#### Arrival
- [ ] view + router
- [ ] yes/no
- [ ] text input

#### Send to Pete
- [ ] view + router
- [ ] write letter
- [ ] read from store
- [ ] email link
- [ ] copy to clipboard

______________________________________________________________________

## Running the project locally

This template should help get you started developing with Vue 3 in Vite.

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
