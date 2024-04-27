<script setup>
import { watch, ref } from 'vue'

const props = defineProps({
  text: {
    type: String,
    default: ''
  },
  fill: {
    type: Number,
    default: 0
  }
})

let fillActive = ref(false)
watch(
  () => props.fill,
  (newFill) => {
    fillActive.value = true
    document.documentElement.style.setProperty('--fill-duration', `${newFill ?? 0}s`)
  }
)
const stopFill = () => (fillActive.value = false)
</script>

<template>
  <span class="lyrics-container" :class="{ fill: fillActive }">
    <Transition @before-leave="stopFill">
      <span :key="text" class="lyrics">{{ text }}</span>
    </Transition>
  </span>
</template>

<style>
@keyframes fill {
  to {
    background-size: 0 100%;
  }
}

.lyrics-container {
  border-radius: calc(infinity * 1px);
  background: linear-gradient(var(--color-primary), var(--color-primary)) var(--color-light)
    no-repeat 0 0;
  background-size: 100% 100%;

  .lyrics {
    display: table;
    padding: 1rem 2rem;
    border-radius: calc(infinity * 1px);
    font-size: 4rem;
    color: var(--color-dark);
  }

  &.fill {
    animation: fill var(--fill-duration) linear 1 backwards;
  }

  .v-enter-active {
    transition: all 0.1s ease-out;
  }

  .v-enter-from {
    opacity: 0;
    transform: translateY(120px);
  }
}
</style>
