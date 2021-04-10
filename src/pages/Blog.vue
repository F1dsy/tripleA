<template>
  <Layout>
    <div class="container">
      <h1>Blog Posts</h1>
      <div v-for="edge in $page.posts.edges" :key="edge.id">
        <h2>{{ edge.node.title }}</h2>
        <h3>{{ edge.node.excerpt }}</h3>
      </div>
    </div>
  </Layout>
</template>

<page-query>

    query {
       posts: allBlogPost {
            edges {
                node {
                    id
                    title
                    excerpt
                }
            }
        }
    }

</page-query>

<script>
export default {};
</script>

<style lang="scss" scoped>
.container {
  padding: 20px;
}
h1 {
  font-size: 3em;
}
h2 {
  font-size: 2.5em;
}
</style>
