<template>
  <div class="m-2 flex flex-col gap-2">
    <TheHeader />
    <div>
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
