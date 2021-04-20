<template>
  <Layout>
    <div class="content">
      <section class="first">
        <h1>Vi er de tre A'er</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas omnis
          suscipit mollitia recusandae fugit, rem voluptas magnam vitae hic
          dolor ut sit.
        </p>
      </section>
      <section class="second">
        <div class="picframe">
          <img src="../assets/img/Alina.jpg" alt="" />
        </div>
        <div class="wrapper">
          <h1>Alina</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt
            asperiores maxime iure ducimus laborum, dolorum nisi consectetur,
            ratione eius at fuga, necessitatibus temporibus libero mollitia quo?
            Obcaecati totam hic suscipit.
          </p>
        </div>
      </section>
      <section class="third">
        <div class="picframe">
          <img src="../assets/img/Anastasia.jpg" alt="" />
        </div>
        <div class="wrapper">
          <h1>Anastasia</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt
            asperiores maxime iure ducimus laborum, dolorum nisi consectetur,
            ratione eius at fuga, necessitatibus temporibus libero mollitia quo?
            Obcaecati totam hic suscipit.
          </p>
        </div>
      </section>
      <section class="fourth">
        <div class="picframe">
          <img src="../assets/img/Alex2.jpg" alt="" />
        </div>
        <div class="wrapper">
          <h1>Alex</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt
            asperiores maxime iure ducimus laborum, dolorum nisi consectetur,
            ratione eius at fuga, necessitatibus temporibus libero mollitia quo?
            Obcaecati totam hic suscipit.
          </p>
        </div>
      </section>
    </div>
  </Layout>
</template>

<script>
import FullScreen from "../components/FullScreenIntro.vue";
import BlogPost from "../templates/BlogPost.vue";

export default {
  metaInfo: {
    title: "Hello, world!",
  },
  components: {
    FullScreen,
    BlogPost,
  },
};
</script>

<style scoped lang="scss">
@import "../assets/colorpalette.scss";
.content {
  width: 100%;
}

section.first {
  width: 100%;
  height: calc(100vh - 80px);
  background-color: $color5;
  padding: 50% 0;
  text-align: center;
  overflow: hidden;
  color: white;
  h1 {
    position: relative;
    font-size: 2.5em;
    &::after {
      content: "Vi er de tre A'er";
      font-size: 1.5em;
      white-space: nowrap;
      left: -30px;
      top: 10px;
      position: absolute;
      color: rgba(255, 255, 255, 0.1);
    }
  }
  p {
    margin: 150px 80px;
  }
}
section.second,
.third,
.fourth {
  // height: 1000px;
  // background-color: $color5;
  text-align: center;
  .picframe {
    img {
      position: relative;

      width: 100%;
      height: 500px;

      object-fit: cover;
    }
  }
  h1 {
    margin: 30px 0;
    font-size: 2.5em;
  }
  p {
    margin: 40px;
  }
}
@media screen and (min-width: 768px) {
  .content {
    section.first {
      padding: 10% 50% 0 10%;
      text-align: left;
      h1 {
        font-size: 5em;
        &::after {
          font-size: 2em;
        }
      }
      p {
        margin: 30% 50px;
        font-size: 1.5em;
      }
    }
    section.second,
    .third,
    .fourth {
      &.second,
      &.fourth {
        flex-direction: row-reverse;
      }
      text-align: left;
      height: 500px;
      // padding: 0 20%;
      display: flex;
      .wrapper {
        width: 50%;
      }
      .picframe {
        position: relative;
        // height: 400px;
        width: 50%;
        img {
          width: 50%;
          height: 100%;
        }
      }
    }
    section.second .picframe img {
      top: -200px;
      left: 150px;
    }
  }
}
</style>
