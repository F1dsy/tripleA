<template>
  <div>
    <nav v-bind:class="{ scrolled: isScrolled }">
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
      isScrolled: false,
    };
  },
  created() {
    this.onScroll();
    window.addEventListener("scroll", this.onScroll);
  },
  methods: {
    handleNav() {
      this.navState = !this.navState;
    },
    onScroll() {
      if (window.scrollY === 0 && window.location.pathname === "/") {
        this.isScrolled = true;
      } else {
        this.isScrolled = false;
      }
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
  z-index: 1;
  padding: 0 20px;
  transition: 300ms;
  background-color: $color3;
  box-shadow: 0 0 10px #0005;
  &.scrolled {
    background-color: $color5;
    box-shadow: none;
  }
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
    border-radius: 50%;
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
