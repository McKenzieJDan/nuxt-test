<template>
  <div
    class="max-w-sm rounded overflow-hidden shadow-lg cursor-pointer"
    @click="getPlaylist(item.id)"
  >
    <img
      class="object-cover h-48 w-full bg-no-repeat bg-cover"
      :src="item.images[0].url"
    />
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">{{ item.name }}</div>
    </div>
  </div>
</template>

<script>
import spotifyApi from '~/api/spotify'

export default {
  props: {
    item: {
      type: Object,
      default: undefined,
    },
  },
  methods: {
    playPlaylist(uri) {
      spotifyApi.play({ context_uri: uri }).then((x) => {
        this.$root.$emit('alert', {
          text: 'Playing on Spotify',
        })
      })
    },
    getPlaylist(id) {
      spotifyApi.getPlaylist(id).then((x) => {
        console.log(x)
      })
    },
  },
}
</script>
