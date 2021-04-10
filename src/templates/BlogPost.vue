<template>
  <Layout>
    <div class="container">
      <h1>
        {{ $page.post.title }}
      </h1>
      <div v-html="$page.post.content"></div>
    </div>
  </Layout>
</template>

<page-query>
    query ($path: String){
  post: blogPost (path: $path) {
    title
    content
  }
}
</page-query>

<style lang="scss" scoped>
.container {
  padding: 50px;
}
h1 {
  font-size: 2.5em;
}
</style>
