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
  padding: 20px 300px;
}
::v-deep p {
  font-size: 1.2em;
  margin-top: 20px;
  color: $color1;
}
h1 {
  font-size: 2.5em;
  margin: 20px 0 30px 50px;
  color: $color1;
}
</style>
