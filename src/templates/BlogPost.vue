<template>
  <Layout>
    <div class="container">
      <h1>
        {{ $page.post.title }}
      </h1>
      <div v-html="$page.post.content" class="content"></div>
    </div>
  </Layout>
</template>

<page-query>
    query ($path: String){
  post: blogPost (path: $path) {
    title
    date
    content
  }
}
</page-query>

<style lang="scss" scoped>
@import "~/assets/colorpalette.scss";
.container {
  padding: 20px;
}
h1 {
  font-size: 2em;
  color: $color1;
}
::v-deep p {
  font-size: 1em;
  margin-top: 20px;
  color: $color1;
}
</style>
