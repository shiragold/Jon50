<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { LYRICS_LIST } from '../../utils/constants'
import SpeechBubble from '../reusables/SpeechBubble.vue'

const lyricsByTiming = LYRICS_LIST.reduce(
  (acc, { timing, ...content }) =>
    timing
      ? {
          ...acc,
          [timing]: content
        }
      : acc,
  {}
)
const times = Object.keys(lyricsByTiming)
  .map((time) => Number(time))
  .sort((time1, time2) => time1 - time2)

let timeIndex = 0
let content = ref(null)
let interval = null

const generateNextContent = () => {
  let timeout = times[timeIndex]
  if (timeIndex) {
    timeout -= times[timeIndex - 1]
  }
  interval = setTimeout(() => {
    content.value = { ...content.value, ...lyricsByTiming[times[timeIndex]] }
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
  <div class="content-image">
    <img v-if="content?.image" class="image" :src="content.image" />
  </div>
  <div class="content-lyrics">
    <SpeechBubble v-if="content">{{ content.text }}</SpeechBubble>
  </div>
</template>

<style>
.content-image {
  height: 100%;

  .image {
    height: 100%;
  }
}
</style>
