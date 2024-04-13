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
  <div class="speech-bubble"><slot /></div>
</template>

<style lang="css">
.speech-bubble {
  border-radius: calc(infinity * 1px);
  border: 1px solid black;
  font-size: 4rem;
  padding: 1rem 2rem;
}
</style>
