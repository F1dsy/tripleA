<template>
  <div>
    <nav v-bind:class="{ scrolled: isScrolled }">
      <h1>Triple AAA</h1>
      <div class="menu" v-bind:class="{ open: navState }">
        <span class="close" v-on:click="handleNav">&times;</span>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/gallery">Galleri</a></li>
          <li><a href="/blog">Blog</a></li>
          <li><a href="">Om os</a></li>
        </ul>
        <div class="splash"></div>
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
    if (process.isClient) {
      this.onScroll();
      window.addEventListener("scroll", this.onScroll);
    }
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
    z-index: 1;
    // width: 0;
    // height: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    &.open {
      pointer-events: unset;
      .splash::after {
        transform: scale(1);
      }
      ul,
      .close {
        opacity: 1;
        transition: opacity 1s 300ms;
      }
    }
    .close {
      opacity: 0;
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
      opacity: 0;
      transition: opacity 300ms;
      li {
        font-size: 1.5em;
        a {
          text-decoration: none;
          color: white;
        }
      }
    }

    .splash {
      position: absolute;
      top: 40px;
      right: 40px;
      width: 0px;
      height: 0px;

      &::after {
        content: "";
        display: block;
        position: absolute;
        border-radius: 50%;
        background-color: rgba(0, 0, 0, 0.9);
        width: 284vmax;
        height: 284vmax;
        top: -142vmax;
        left: -142vmax;
        transform: scale(0);
        z-index: -1;
        transform-origin: 50% 50%;
        transition: transform 0.5s cubic-bezier(0.755, 0.05, 0.735, 0.57);
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
