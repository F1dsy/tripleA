<template>
  <Layout>
    <div class="container">
      <h1>Galleri</h1>
      <div class="gallery">
        <div v-for="image in $static.gallery.list" :key="image.image">
          <img :src="image.image" alt="" />
        </div>
      </div>
    </div>
  </Layout>
</template>

<static-query>
query {
    gallery(path: "/static/gallery/") {
     list {
         image
        }
    }
}
</static-query>

<script>
export default {};
</script>

<style lang="scss" scoped>
.container {
  padding: 30px 0px;
  //   min-height: 100vh;
  h1 {
    text-align: center;
    font-size: 2em;
  }
  .gallery {
    display: flex;
    padding: 20px;
    flex-direction: column;
    img {
      padding: 5px;
      border-radius: 7px;
      width: 100%;
    }
  }
}
</style>
