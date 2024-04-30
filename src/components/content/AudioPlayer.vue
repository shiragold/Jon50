<script setup>
import { computed, onMounted } from 'vue'
const props = defineProps({
  src: {
    type: String,
    required: true
  }
})
const srcFull = computed(() => '@media/' + props.src + '.mp3')

onMounted(() => {
  document.getElementsByTagName('audio')[0].play()
})
</script>
<template>
  <audio>
    <source :src="srcFull" type="audio/mpeg" />
  </audio>
</template>
