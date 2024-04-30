<script setup>
import { ref, onBeforeMount, onMounted } from 'vue'
const props = defineProps({
  src: {
    type: String,
    required: true
  }
})
let audioFile = ref(null)
onBeforeMount(() => audioFile = import('@media/' + props.src + '.mp3'))

onMounted(() => {
  document.getElementsByTagName('audio')[0].play()
})
</script>
<template>
  <audio>
    <source :src="audioFile" type="audio/mpeg" />
  </audio>
</template>
