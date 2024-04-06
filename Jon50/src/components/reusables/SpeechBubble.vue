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
  <div class="o-speech-bubble"><slot /></div>
</template>

<style lang="css">
.o-speech-bubble {
  display: grid;
  place-content: center;
  border-radius: calc(infinity * 1px);
  border: 1px solid black;
  width: 80vw;
  font-size: 4vw;
}
</style>
