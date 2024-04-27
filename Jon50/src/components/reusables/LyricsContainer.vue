<script setup>
import { watch, ref } from 'vue'

const props = defineProps({
  index: {
    type: Number,
    default: -1
  },
  text: {
    type: String,
    default: ''
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

watch(
  () => props.start,
  (newStart) => {
    document.documentElement.style.setProperty('--transition-duration', `${newStart}s`)
  },
  { immediate: true }
)
watch(
  () => props.duration,
  (newDuration) => {
    document.documentElement.style.setProperty('--fill-duration', `${newDuration}s`)
  },
  { immediate: true }
)
let fillActive = ref(false)
const fillStart = () => (fillActive.value = true)
const fillEnd = () => (fillActive.value = false)
</script>

<template>
  <Transition @after-enter="fillStart" @before-leave="fillEnd">
    <span :key="index" class="lyrics-container" :class="{ fill: fillActive }">
      <span class="lyrics">{{ text }}</span>
    </span>
  </Transition>
</template>

<style>
@keyframes fill {
  to {
    background-size: 0 100%;
  }
}

.lyrics-container {
  border-radius: calc(infinity * 1px);
  background: linear-gradient(var(--color-light), var(--color-light)) var(--color-dark) no-repeat 0
    0;
  background-size: 100% 100%;

  .lyrics {
    display: table;
    padding: 1rem 2rem;
    border-radius: calc(infinity * 1px);
    font-size: 4rem;
    background-color: var(--color-light);
    color: var(--color-primary);
  }

  &.fill {
    animation: fill var(--fill-duration) linear 1 backwards;

    .lyrics {
      mix-blend-mode: multiply;
    }
  }
}

.v-enter-active,
.v-leave-active {
  transition: all var(--transition-duration) ease-out;
}

.v-enter-from {
  opacity: 0;
  transform: translateY(30px);
}

.v-leave-from,
.v-leave-to {
  display: none;
}
</style>
