<template>
  <button type="button" class="font-bold" :disabled="!!disabled">
    <slot />
  </button>
</template>

<script lang="ts" setup>
defineProps<{
  disabled?: boolean;
}>();
</script>

<style lang="postcss" scoped>
button {
  @apply p-2 w-1/2;

  background-color: var(--md-accent);
  border-width: 2px;
  border-color: var(--md-accent-lighten-2);
  border-radius: 5px;
}

button:hover {
  background-color: var(--md-accent-lighten);
}

button:active {
  background-color: var(--md-accent-darken);
}

button:disabled {
  background-color: var(--md-accent-lighten-2);
}
</style>
