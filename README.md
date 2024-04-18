
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
- [ ] nav (v1.0.5)
  - [ ] start over
  - [ ] resume
  - [ ] prev
  - [ ] skip
- [ ] clean up starter code
- [ ] Footer (v1.0.6)
  - [ ] hire me info
  - [ ] paypal link


#### Landing Screen (v1.0)
- [x] view + router
- [x] blurb
- [ ] common complaints (v1.2)

#### Basic Flight Info Form (v1.0)
- [x] view + router
- [x] Airline Picker
  - [ ] Fix closing behavior (v1.2)
  - [ ] Add airline images (v1.2)
- [ ] Flight No input
- [ ] Date Picker
- [ ] Format page
- [x] store
- [ ] Airport Code To/From (v1.2.5)

#### Check-in (v1.2)
- [ ] view + router
- [ ] yes/no
- [ ] text input
- [ ] store

#### Boarding (v1.2)
- [ ] view + router
- [ ] yes/no
- [ ] text input
- [ ] store

#### In-Flight (v1.0)
- [x] view + router
- [x] yes/no
- [x] text input
- [x] store
- [ ] unit tests

#### Arrival (v1.2)
- [ ] view + router
- [ ] yes/no
- [ ] text input
- [ ] store

#### Send to Pete (v1.0)
- [x] view + router
- [x] write letter
- [x] format letter
- [x] read from store
- [x] email link 
  - [x] v1.0 email link
  - [ ] encode email body (v1.1)
  - [ ] 1 click button (v1.1)
- [ ] copy to clipboard (v1.1)
- [ ] print preview (v1.1)
- [ ] edge cases (v1.1)
  - [ ] user has no issues with flight
- [ ] Tone toggle: Normal / Joe Lycett (v1.3)

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
