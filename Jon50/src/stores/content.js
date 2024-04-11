import { defineStore } from 'pinia'

export const useContentStore = defineStore('content', {
  state: () => ({
    isPlaying: false
  }),
  actions: {
    togglePlay() {
      this.isPlaying = !this.isPlaying
    }
  }
})
