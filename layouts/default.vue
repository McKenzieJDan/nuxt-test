<template>
  <div id="app">
    <div class="container hori">
      <Navbar class="nav vert" />
      <div id="content" class="content">
        <Nuxt />
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '~/components/Navbar'

export default {
  components: { Navbar },
}
</script>

<style lang="scss">
@import '~assets/app.scss';
@import '~assets/layout.scss';
@import '~assets/index.scss';

.container {
  width: 100%;
  height: 100%;
  min-height: 100%;
  align-items: stretch;
  overflow: hidden;
  background-color: $background;
}

.nav {
  flex-shrink: 0;
  user-select: none;
  min-width: 170px;
  max-width: 240px;
  width: 20%;
  color: $white;
  border-right: $default-border;
}

.nav::-webkit-scrollbar {
  display: none;
}

.content {
  flex: 1 1 auto;
  background: $background;
  overflow: auto;
}
</style>
