<template>
  <div class="lg:min-h-screen lg:flex lg:items-center mt-8 lg:mt-0 p-5">
    <div class="mx-auto w-[460px]">
      <h1 class="text-xl font-bold">
        <slot name="header-text"></slot>
      </h1>
      <slot></slot>
    </div>
  </div>
</template>
