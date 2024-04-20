<script setup>
defineProps({
  image: String
})
</script>

<template>
  <div class="image-container">
    <Transition>
      <img v-if="image" class="image" :src="image" />
    </Transition>
  </div>
</template>

<style>
.image-container {
  height: 100%;
  padding: 1rem 0;

  .image {
    height: 100%;
    border-radius: calc(1rem * infinity);
  }

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
