<script setup>
defineProps({
  text: String
})
</script>

<template>
  <div class="o-speech-bubble">{{ text }}</div>
</template>

<style lang="css">
.o-speech-bubble {
  border-radius: calc(infinity * 1px);
  background-color: blue;
  width: 80vw;
  font-size: 4vw;
}
</style>
