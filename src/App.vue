<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import AppLayout from './components/AppLayout.vue'
</script>

<template>
  <header>
    <div class="wrapper">
      <AppLayout msg="Complane" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/">Link 1</RouterLink>
        <RouterLink to="/">Link 2</RouterLink>
      </nav>
    </div>
  </header>

  <div class="lg:min-h-screen lg:flex lg:items-center mt-8 lg:mt-0 p-5">
    <RouterView />
  </div>
</template>

<style scoped>
/* TODO: clean this up with tailwind */
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
