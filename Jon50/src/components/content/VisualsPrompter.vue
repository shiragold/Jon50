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
  (acc, { timing, ...content }) => ({
    ...acc,
    [timing]: content
  }),
  {}
)
const times = Object.keys(lyricsByTiming)
  .map((time) => Number(time))
  .sort((time1, time2) => time1 - time2)

let content = ref(null)
let intervalList = []
onMounted(() => {
  times.forEach((timing, index) => {
    intervalList.push(
      setTimeout(() => {
        content.value = {
          index,
          ...content.value,
          ...lyricsByTiming[timing]
        }
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
  <div v-if="content" class="visuals">
    <ImageContainer :image="content.image" />
    <div>
      <LyricsContainer v-bind="content" />
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
