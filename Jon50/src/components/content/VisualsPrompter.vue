<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { LYRICS_LIST } from '../../utils/constants'
import images from '@images'
import ImageContainer from '../reusables/ImageContainer.vue'
import LyricsContainer from '../reusables/LyricsContainer.vue'

const VISUALS_LIST = images.map((image, i) => ({
  ...LYRICS_LIST[i],
  image
}))
const lyricsByTiming = VISUALS_LIST.reduce(
  (acc, { timing, ...content }) => ({
    ...acc,
    [timing]: content
  }),
  {}
)
const times = Object.keys(lyricsByTiming)
  .map((time) => Number(time))
  .sort((time1, time2) => time1 - time2)

let currentImage = ref(null)
let currentLyrics = ref(null)
let intervalList = []
onMounted(() => {
  times.forEach((timing, index) => {
    intervalList.push(
      setTimeout(() => {
        const { image, ...lyrics } = lyricsByTiming[timing]
        currentLyrics.value = {
          ...currentLyrics.value,
          ...lyrics,
          index
        }
        currentImage.value = image
      }, timing * 1000)
    )
  })
})

onBeforeUnmount(() => {
  intervalList.forEach(clearInterval)
  intervalList = null
})
</script>

<template>
  <div class="visuals">
    <ImageContainer v-if="currentImage" :image="currentImage" />
    <div v-else>
      <slot name="placeholder" />
    </div>
    <LyricsContainer v-show="currentLyrics" v-bind="currentLyrics" />
  </div>
</template>

<style>
.visuals {
  grid-template-rows: 80% 20%;
}
</style>
