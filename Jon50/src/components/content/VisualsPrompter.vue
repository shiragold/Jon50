<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { LYRICS_LIST } from '../../utils/constants'
import images from '@images'
import ImageContainer from '../reusables/ImageContainer.vue'
import LyricsContainer from '../reusables/LyricsContainer.vue'

const LYRICS_IMAGE_LIST = images.map((image, i) => ({
  ...LYRICS_LIST[i],
  image
}))
const lyricsByTiming = LYRICS_IMAGE_LIST.reduce(
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
    if (timeIndex < times.length - 1) {
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
  <div v-if="content" class="visuals">
    <ImageContainer :image="content.image" />
    <div>
      <LyricsContainer :text="content.text" />
    </div>
  </div>
  <div v-else>
    <slot name="placeholder" />
  </div>
</template>

<style>
.visuals {
  grid-template-rows: 80% 20%;
}
</style>
