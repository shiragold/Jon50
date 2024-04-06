<script setup></script>

<template>
  <h1>Sing-a-long</h1>
  <h3>Thrilled to celebrate with you</h3>
  <h3>Wishing all the best, for another exciting decade!</h3>
  <div class="play-container">
    <RouterLink to="/content">
      <!-- <object data="@assets/home.svg" width="18" height="18" /> -->
      <img class="icon" src="../assets/icons/play.svg" alt="Go to content" />
    </RouterLink>
    <!-- <RouterLink to="/content/vocals">
      <object data="@assets/home.svg" width="18" height="18" />
      <img class="icon" src="./assets/icons/play.svg" alt="Go to content" />
    </RouterLink> -->
  </div>
</template>

<style>
.play-container {
  .icon {
    height: 128px;
  }
}
</style>
