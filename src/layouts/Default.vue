<template>
  <div>
    <nav>
      <h1>Triple AAA</h1>
      <div class="menu" v-bind:class="{ open: navState }">
        <span class="close" v-on:click="handleNav">&times;</span>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="">Galleri</a></li>
          <li><a href="/blog">Blog</a></li>
          <li><a href="">Om os</a></li>
        </ul>
      </div>
      <svg
        viewBox="0 0 80 57"
        width="40"
        height="30"
        fill="#fff"
        v-on:click="handleNav"
      >
        <rect width="80" height="7"></rect>
        <rect y="25" width="80" height="7"></rect>
        <rect y="50" width="80" height="7"></rect>
      </svg>
    </nav>
    <slot />
  </div>
</template>

<script>
export default {
  data() {
    return {
      navState: false,
    };
  },
  methods: {
    handleNav() {
      this.navState = !this.navState;
    },
  },
};
</script>

<style scoped lang="scss">
@import "../assets/colorpalette.scss";

nav {
  display: flex;
  position: sticky;
  top: 0;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  background-color: $color3;
  z-index: 1;
  padding: 0 20px;
  h1 {
    font-size: 2em;
    font-weight: 200;
    color: white;
  }
  .menu {
    top: 0;
    right: 0;
    position: fixed;
    transition: width 500ms;
    width: 0;
    z-index: 1;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.9);
    overflow: hidden;
    &.open {
      width: 100%;
    }
    .close {
      position: absolute;
      top: 25px;
      right: 30px;
      color: white;
      font-size: 2em;
    }
    ul {
      display: flex;
      flex-direction: column;
      height: 100%;
      justify-content: space-evenly;
      align-items: center;
      li {
        font-size: 1.5em;
        a {
          text-decoration: none;
          color: white;
        }
      }
    }
  }
}

@media screen and (min-width: 768px) {
  nav {
    padding: 0 40px;
    background-color: $color3;
    box-shadow: #0005 0 0 10px;
    svg {
      display: none;
    }
    .menu {
      float: right;
      position: static;
      width: 50%;
      background-color: transparent;
      .close {
        display: none;
      }
      ul {
        flex-direction: row;
      }
    }
  }
}
</style>
