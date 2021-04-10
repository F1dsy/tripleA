<template>
  <div>
    <nav :style="styleObject">
      <h1>Triple AAA</h1>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="">Galleri</a></li>
        <li><a href="/blog">Blog</a></li>
        <li><a href="">Om os</a></li>
      </ul>
    </nav>
    <slot />
  </div>
</template>

<script>
export default {
  data() {
    return {
      styleObject: {
        height: "0",
      },
    };
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      if (window.scrollY === 0) {
        this.styleObject.height = 0;
      } else {
        this.styleObject.height = "80px";
      }
    },
  },
};
</script>

<style scoped lang="scss">
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 40px;
  position: fixed;
  z-index: 10;
  transition: height 500ms;
  overflow: hidden;
  background-color: white;
  box-shadow: #0005 0 0 10px;
  h1 {
    font-size: 2.5em;
    letter-spacing: 5px;
    font-weight: 200;
  }
  ul {
    display: inherit;
    justify-content: space-evenly;
    align-items: center;
    height: inherit;
    width: 50%;
    li {
      font-size: 1.5em;
      a {
        text-decoration: none;
      }
    }
  }
}
</style>
