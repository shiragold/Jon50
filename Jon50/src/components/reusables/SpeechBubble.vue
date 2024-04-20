<script setup>
defineProps({
  start: {
    type: Number,
    default: -1
  },
  duration: {
    type: Number,
    default: 0
  }
})
</script>

<template>
  <div class="speech-bubble">
    <Transition>
      <slot />
    </Transition>
  </div>
</template>

<style lang="css">
.speech-bubble {
  border-radius: calc(infinity * 1px);
  background-color: white;
  color: darkslateblue;
  font-size: 4rem;
  padding: 1rem 2rem;

  .v-enter-active,
  .v-leave-active {
    transition: opacity 0.5s ease;
  }

  .v-enter-from,
  .v-leave-to {
    opacity: 0;
  }
}
</style>
