<template>
  <div class="flex flex-col justify-start place-items-center gap-3">
    <p>
      This page is designed to help diagnose the connection issues an end-user
      might be experiencing when trying to access MangaDex.
    </p>
    <hr />
    <div class="flex w-1/2 gap-3 place-items-center justify-center">
      <btn @click="start" :disabled="running">
        {{ running ? "Running..." : "Start" }}
      </btn>
      <btn v-show="running" @click="cancel">Cancel</btn>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, useHead } from "#imports";
import Btn from "~/components/btn.vue";

useHead({
  title: "Home",
});

const running = ref(false);

const start = () => {
  running.value = true;
  console.log("Testing");
};

const cancel = () => {
  running.value = false;
  console.log("Cancelled");
};
</script>

<style lang="postcss" scoped>

</style>
