<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { LYRICS_LIST } from '../../utils/constants'
import SpeechBubble from '../reusables/SpeechBubble.vue'

const lyricsByTiming = LYRICS_LIST.reduce(
  (acc, { timing, text, image }) =>
    timing
      ? {
          ...acc,
          [timing]: { text, image }
        }
      : acc,
  {}
)
const times = Object.keys(lyricsByTiming)
  .map((time) => Number(time))
  .sort()

let timeIndex = 0
let content = ref(null)
let interval = null

const generateNextContent = () => {
  let timeout = times[timeIndex]
  if (timeIndex) {
    timeout -= times[timeIndex - 1]
  }
  interval = setTimeout(() => {
    content.value = lyricsByTiming[times[timeIndex]]
    if (timeIndex < times.length) {
      timeIndex++
      interval = generateNextContent()
    }
  }, timeout * 1000)
}
onMounted(generateNextContent)

onBeforeUnmount(() => {
  clearInterval(interval)
  interval = null
})
</script>

<template>
  <div>
    <img v-if="content" :src="`@images/${content.image ?? 'tivee'}.JPG`" />
  </div>
  <div class="content-lyrics">
    <SpeechBubble v-if="content">{{ content.text }}</SpeechBubble>
  </div>
</template>

<style>
.content-lyrics {
  align-self: start;
}
</style>
