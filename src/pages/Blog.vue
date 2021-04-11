<template>
  <Layout>
    <div class="container">
      <h1>Her er vores blogs</h1>

      <div class="posts">
        <div v-for="edge in $page.posts.edges" :key="edge.id" class="post">
          <!-- <img src="" alt="" /> -->
          <h2>{{ edge.node.title }}</h2>
          <h3>{{ edge.node.excerpt }}</h3>

          <!-- <g-link :to="edge.node.path">Læs mere</g-link> -->
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>

    query {
       posts: allBlogPost {
            edges {
                node {
                    path
                    title
                    excerpt
                    image
                }
            }
        }
    }

</page-query>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../assets/colorpalette.scss";

.container {
  padding: 30px 0px;
  min-height: 100vh;
  h1 {
    text-align: center;
    font-size: 2em;
  }
}
.posts {
  display: flex;
  flex-direction: column;
  padding: 20px;
  .post {
    width: 100%;
    margin: 20px 0;
    h2 {
      font-size: 1.5em;
      margin: 10px;
    }
    h3 {
      font-size: 1em;
      margin: 10px;
    }
  }
}
</style>
