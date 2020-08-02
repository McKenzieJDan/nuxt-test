<template>
  <div>
    <div class="nav-top nav-spacing hori">
      <div class="nav-item-main">Spotify App</div>
    </div>

    <div id="nav-middle" class="nav-middle">
      <div class="nav-item nav-spacing">
        <nuxt-link to="/#" class="nav-item-main">
          <div class="nav-item-text">Home</div>
        </nuxt-link>
      </div>
      <div class="nav-item nav-spacing">
        <nuxt-link to="/login" class="nav-item-main">
          <div class="nav-item-text">Login</div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '~assets/index.scss';
@import '~assets/layout.scss';

.nav-spacing {
  padding: 2px 15px 2px 15px;
}

.nav-top {
  align-items: center;
  justify-content: space-between;
  border-bottom: $default-border;
  padding-top: 15px;
  padding-bottom: 15px;
  margin-bottom: $default-margin-bottom;
}

.nav-middle {
  flex: 1;
  overflow-y: scroll;
  overflow-x: visible;
  -ms-overflow-style: none;
  justify-content: space-between;
}

#nav-middle::-webkit-scrollbar {
  display: none;
}

.nav-item-main {
  display: flex;
  align-items: center;
  padding: 8px 8px 8px 8px;
  color: $grey-default;
  text-decoration: none;

  &:hover:not(.disabled):not(.active) {
    background-color: $grey-background-hover;
    color: $grey-font-hover;
    border-radius: $default-border-radius;
    cursor: pointer;
  }

  &.active {
    background-color: $navy-background-active;
    color: $grey-font-active;
    border-radius: 3px;
    cursor: pointer;
  }

  &.disabled {
    cursor: not-allowed;
    color: $grey-font-disabled;
  }

  &[disabled] {
    opacity: 0.5;
    pointer-events: none;
  }
}
</style>
