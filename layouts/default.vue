<template>
  <div class="flex flex-grow flex-col gap-2">
    <TheHeader />
    <div class="m-2 flex-grow">
      <slot />
    </div>
    <TheFooter />
  </div>
</template>

<script lang="ts" setup>
import { useHead } from "#imports";

useHead({
  title: "MangaDex Diagnostics",
});
</script>

<style lang="postcss">

</style>
