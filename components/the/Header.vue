<template>
  <div class="flex flex-col bg-gray-700">
    <div class="flex gap-2 justify-center my-2">
      <nuxt-link class="flex flex-row gap-2 mx-2" to="/">
        <img alt="logo" src="/favicon.svg" style="width: 2rem">
        <h1 class="text-2xl text-white font-bold">MangaDex</h1>
        <h1 class="text-2xl text-white">Diagnostics</h1>
      </nuxt-link>
    </div>
    <hr class="separator" />
    <div class="flex justify-center gap-3 bg-gray-800">
      <nuxt-link v-for="link of links" class="underline" :to="link.to">
        {{ link.label }}
      </nuxt-link>
    </div>
    <hr class="separator" />
  </div>
</template>

<script lang="ts" setup>
const links = [
  { label: "Home", to: "/" },
  { label: "MTR", to: "/mtr" },
  { label: "About", to: "/about" },
];
</script>

<style lang="postcss" scoped>
.separator {
  @apply border-gray-600;
}
</style>
