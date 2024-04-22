<script setup>
defineProps({
  image: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="image-container">
    <Transition>
      <img :key="image" class="image" :src="image" />
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

  .v-enter-active {
    transition: opacity 0.5s cubic-bezier(1, 0.5, 0.5, 1);
  }

  .v-enter-from {
    opacity: 0;
  }
}
</style>
