<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { VISUALS_TIMING_LIST } from '../../utils/constants'
import ImageContainer from '../reusables/ImageContainer.vue'
import LyricsContainer from '../reusables/LyricsContainer.vue'

let currentImage = ref(null)
let currentLyrics = ref({
  index: 0
})
let intervalList = []
onMounted(() => {
  VISUALS_TIMING_LIST.forEach((visuals) => {
    const { time, image, fill, ...lyrics } = visuals
    intervalList.push(
      setTimeout(() => {
        if (image) {
          currentImage.value = image
        }
        if (lyrics.text) {
          currentLyrics.value.index++
        }
        currentLyrics.value = {
          ...currentLyrics.value,
          ...lyrics,
          fill
        }
      }, time * 1000)
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
