<script setup>
import { NoteIcon, MicIcon } from '@icons'
</script>

<template>
  <div class="home-view">
    <h1 class="home-view-header">Sing-a-long</h1>
    <h3 class="home-view-title">
      Thrilled to celebrate with you!<br />Wishing all the best...<br />to another exciting decade!
    </h3>
    <RouterLink to="/content/tune" custom v-slot="{ navigate }">
      <button class="home-view-play button" @click="navigate">
        <NoteIcon class="icon large" />
      </button>
    </RouterLink>
    <RouterLink to="/content/song" custom v-slot="{ navigate }">
      <button class="home-view-play button" @click="navigate">
        <MicIcon class="icon large" />
      </button>
    </RouterLink>
  </div>
</template>

<style>
.home-view {
  height: calc(100vh - 2rem);
  display: grid;
  grid-template-areas: 'header header' 'title title' 'play1 play2';
  grid-template-rows: 4rem 8rem 16rem;
  grid-template-columns: repeat(2, 16rem);
  grid-gap: 2rem;
  place-content: center;
  align-items: start;
  justify-items: center;
  color: var(--color-secondary);
  background-color: var(--color-primary);

  .home-view-header {
    grid-area: header;
    text-align: center;
    font-size: 4rem;
  }

  .home-view-title {
    grid-area: title;
    text-align: center;
    line-height: 3rem;
    font-size: 2rem;
  }

  .home-view-play {
    align-self: center;
  }

  .home-view-play:first-of-type {
    grid-area: play1;
  }

  .home-view-play:last-of-type {
    grid-area: play2;
  }
}
</style>
