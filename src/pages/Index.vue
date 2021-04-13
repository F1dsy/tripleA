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
        <h1>Alina</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt
          asperiores maxime iure ducimus laborum, dolorum nisi consectetur,
          ratione eius at fuga, necessitatibus temporibus libero mollitia quo?
          Obcaecati totam hic suscipit.
        </p>
      </section>
      <section class="third">
        <div class="picframe">
          <img src="../assets/img/Anastasia.jpg" alt="" />
        </div>
        <h1>Anastasia</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt
          asperiores maxime iure ducimus laborum, dolorum nisi consectetur,
          ratione eius at fuga, necessitatibus temporibus libero mollitia quo?
          Obcaecati totam hic suscipit.
        </p>
      </section>
      <section class="fourth">
        <div class="picframe">
          <img src="../assets/img/Alex2.jpg" alt="" />
        </div>
        <h1>Alex</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt
          asperiores maxime iure ducimus laborum, dolorum nisi consectetur,
          ratione eius at fuga, necessitatibus temporibus libero mollitia quo?
          Obcaecati totam hic suscipit.
        </p>
      </section>
    </div>
  </Layout>
</template>

<script>
import HomePageLayout from "../layouts/HomePage.vue";
import FullScreen from "../components/FullScreenIntro.vue";
import BlogPost from "../templates/BlogPost.vue";

export default {
  metaInfo: {
    title: "Hello, world!",
  },
  components: {
    FullScreen,
    BlogPost,
    HomePageLayout,
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
// @media screen and (min-width: 768px) {
//   h1 {
//     font-size: 6em;
//   }
//   p {
//     font-size: 3em;
//   }
//   section.first {
//     width: 100%;
//     height: 500px;
//     background-color: $color5;
//     padding: 150px;

//     h1 {
//       color: white;
//       position: relative;
//       &::after {
//         content: "Vi er de tre A'er";
//         font-size: 1.5em;
//         left: -30px;
//         top: 10px;
//         position: absolute;
//         color: rgba(255, 255, 255, 0.1);
//       }
//     }
//   }
//   .picframe {
//     position: relative;
//     float: right;
//     right: 150px;
//     top: -100px;
//     width: 400px;
//     height: 600px;
//     background-color: burlywood;
//     img {
//       position: relative;
//       top: 30px;
//       right: 50px;
//       width: 200px;
//       height: 300px;
//       object-fit: cover;
//     }
//   }
// }
</style>
