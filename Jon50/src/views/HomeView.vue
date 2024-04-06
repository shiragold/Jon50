<script setup></script>

<template>
  <h1>Sing-a-long</h1>
  <h3>We're thrilled to celebrate with you...</h3>
  <h3>Wishing all the best, to another exciting decade!</h3>
  <div class="play-container">
    <RouterLink to="/content">
      <img class="icon" src="../assets/icons/music.svg" alt="Play music only" />
    </RouterLink>
    <RouterLink to="/content/acapella">
      <img class="icon" src="../assets/icons/mic.svg" alt="Play with singer" />
    </RouterLink>
  </div>
</template>

<style>
.play-container {
  .icon {
    height: 128px;
  }
}
</style>
