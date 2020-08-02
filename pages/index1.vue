<template>
  <div>
    <div class="container mx-auto">
      <div class="flex flex-wrap -mx-2 overflow-hidden">
        <div v-if="loading">LOADING...</div>
        <template v-else>
          <template v-for="(item, key) in playlists">
            <div :key="key" class="my-2 px-2 w-1/2 lg:w-1/4 xl:w-1/4">
              <card :item="item" />
            </div>
          </template>
          <div
            class="max-w-sm rounded overflow-hidden shadow-lg cursor-pointer"
          >
            <img
              class="object-cover h-48 w-full bg-no-repeat bg-cover"
              :src="current.album.images[0].url"
            />
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">{{ current.name }}</div>
              <div class="text-xl mb-2">{{ current.artists[0].name }}</div>
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import spotifyApi from '~/api/spotify'
import card from '~/components/card'

export default {
  components: {
    card,
  },
  data() {
    return {
      loading: true,
      playlists: [],
      current: undefined,
    }
  },
  mounted() {
    this.getUserPlaylists()
    this.getCurrentSong()
  },
  methods: {
    getUserPlaylists() {
      this.loading = true
      spotifyApi.getUserPlaylists().then((x) => {
        this.playlists = x.items
        this.loading = false
      })
    },
    getCurrentSong() {
      this.loading = true
      spotifyApi.getMyCurrentPlayingTrack().then((x) => {
        this.current = x.item
        this.loading = false
      })
    },
  },
}
</script>
