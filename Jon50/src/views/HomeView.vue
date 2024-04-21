<script setup></script>

<template>
  <div class="home-view">
    <h1 class="home-view-header">Sing-a-long</h1>
    <h3 class="home-view-title">We're thrilled to celebrate with you...</h3>
    <h3 class="home-view-title">Wishing all the best, to another exciting decade!</h3>
    <RouterLink to="/content" class="home-view-play">
      <button class="button">
        <!-- <object class="icon large" type="image/svg+xml" data="@icons/note.svg"></object> -->
        <img class="icon large" src="@icons/note.svg" alt="Play music only" />
      </button>
    </RouterLink>
    <RouterLink to="/content/acapella" class="home-view-play">
      <button class="button">
        <!-- <object class="icon large" type="image/svg+xml" data="@icons/mic.svg"></object> -->
        <img class="icon large" src="@icons/mic.svg" alt="Play with singer" />
      </button>
    </RouterLink>
  </div>
</template>

<style>
.home-view {
  height: calc(100vh - 2rem);
  display: grid;
  grid-template-rows: 8rem 2rem 2rem 16rem;
  grid-template-columns: repeat(2, 16rem);
  grid-gap: 0.5rem 2rem;
  grid-template-areas: 'header header' 'title1 title1' 'title2 title2' 'play1 play2';
  grid-template-areas: 1fr 1fr;
  place-content: center;
  align-items: start;
  justify-items: center;

  .home-view-header {
    text-align: center;
    font-size: 4rem;
    grid-area: header;
  }

  .home-view-title:first-of-type {
    grid-area: title1;
  }

  .home-view-title:last-of-type {
    grid-area: title2;
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
