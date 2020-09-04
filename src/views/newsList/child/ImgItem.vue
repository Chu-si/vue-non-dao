<template>
  <div class="imgItem">
    <router-link :to="imgData.path">
      <img v-lazy="imgData.imgUrl" src="" alt="">
    </router-link>
  </div>
</template>

<script>
export default {
  name: "imgItem",
  props: {
    imgData: Object,
  },
};
</script>

<style lang="scss" scoped>
img {
  width: 100%;
  margin-bottom: 12px;
}
</style>