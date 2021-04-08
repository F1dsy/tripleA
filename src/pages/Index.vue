<template>
  <div>
    <FullScreen></FullScreen>
    <h1>Helloo</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. At, quidem.
      Libero mollitia sit illo voluptates delectus vel provident? Eos quia
      eveniet minima repudiandae nisi ea atque voluptatem quidem laborum eius.
    </p>
  </div>
</template>

<script>
import FullScreen from "../components/FullScreenIntro.vue";

export default {
  metaInfo: {
    title: "Hello, world!",
  },
  components: {
    FullScreen,
  },
};
</script>

<style scoped lang="scss">
h1 {
  font-size: 6em;
}
p {
  font-size: 3em;
}
</style>
