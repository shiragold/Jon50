<script setup>
const props = defineProps({
  text: {
    type: String,
    required: true
  },
  start: {
    type: Number,
    default: -1
  },
  duration: {
    type: Number,
    default: 0
  }
})
let highlightActive = false
const onBeforeEnter = () => {
  setTimeout(() => {
    highlightActive = true
  }, props.start * 1000)
}
</script>

<template>
  <div class="lyrics-container" :class="{ 'highlight-active': highlightActive }">
    <Transition @before-enter="onBeforeEnter">
      <span :key="text" class="lyrics">{{ text }}</span>
    </Transition>
  </div>
</template>

<style>
.lyrics-container {
  border-radius: calc(infinity * 1px);
  background-color: white;
  color: lightskyblue;
  font-size: 4rem;
  padding: 1rem 2rem;

  .v-enter-active {
    transition: opacity 0.5s ease;
  }

  .v-enter-from {
    opacity: 0;
  }

  .lyrics {
    display: table;
  }

  &.highlight-active {
    background: white linear-gradient(darkslateblue, darkslateblue) no-repeat 0 0;
    background-size: 100% 100%;
    animation: stripes 1s linear 1 forwards;

    .lyrics {
      mix-blend-mode: multiply;
    }
  }
}

@keyframes stripes {
  to {
    background-size: 0 100%;
  }
}
</style>
