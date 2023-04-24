<template>
  <nuxt-layout>
    <nuxt-page />
  </nuxt-layout>
</template>

<script lang="ts" setup>
import { useHead } from "#imports";

useHead({
  titleTemplate: function (pageTitle) {
    if (!pageTitle || !pageTitle.trim()) {
      return "MangaDex Diagnostics";
    }
    return `${pageTitle} - MangaDex Diagnostics`;
  },
});
</script>

<style lang="postcss">
/* noinspection CssUnusedSymbol */
html,
body,
#__nuxt,
#__layout {
  height: 100%;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

pre {
  white-space: pre-wrap !important;
  word-break: break-word !important;
}
</style>
