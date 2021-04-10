<template>
  <HomePageLayout>
    <div>
      <FullScreen></FullScreen>
      <div class="content">
        <h1>Helloo</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At, quidem.
          Libero mollitia sit illo voluptates delectus vel provident? Eos quia
          eveniet minima repudiandae nisi ea atque voluptatem quidem laborum
          eius.
        </p>
        {{ $page }}
      </div>
    </div>
  </HomePageLayout>
</template>

<page-query>
    query {
      posts: allBlogPost {
            edges {
                node {
                    id
                    title
                }
            }
        }
    }
</page-query>

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
.content {
  height: 100vh;
}
h1 {
  font-size: 6em;
}
p {
  font-size: 3em;
}
</style>
