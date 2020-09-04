<template>
  <div>
    <div class="banner" v-for="item in banner">
      <div class="w">
        <a :href="item.link"
          ><img v-lazy="'http://60.168.18.161:18088' + item.img" src="" alt=""
        /></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Banner",
  props: {
    banner: Array,
  },
};
</script>

<style lang="scss" scoped>
.banner {
  margin-bottom: 6px;
}
img {
  width: 1200px;
  height: 88px;
}
</style>
