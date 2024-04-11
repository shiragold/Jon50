<script setup></script>

<template>
  <div class="home-view">
    <h1 class="home-view-h1">Sing-a-long</h1>
    <h3>We're thrilled to celebrate with you...</h3>
    <h3>Wishing all the best, to another exciting decade!</h3>
    <div>
      <RouterLink to="/content">
        <button>
          <img class="icon large" src="../assets/icons/music.svg" alt="Play music only" />
        </button>
      </RouterLink>
      <RouterLink to="/content/acapella">
        <button>
          <img class="icon large" src="../assets/icons/mic.svg" alt="Play with singer" />
        </button>
      </RouterLink>
    </div>
  </div>
</template>

<style>
.home-view {
  height: 100vh;
  display: grid;
  grid-template-rows: 8rem 2rem 2rem 20rem;
  grid-template-areas: 1fr 1fr;
  place-content: center;
  align-items: center;

  .home-view-h1 {
    text-align: center;
    font-size: 4rem;
  }
}
</style>
