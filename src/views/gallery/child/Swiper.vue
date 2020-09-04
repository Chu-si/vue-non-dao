

<template>
  <div class="swiper-container gallery-thumbs">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="item in swiperList">
        <router-link :to="item.path">
          <img :src="item.imgUrl" alt="" />
          <div class="title nowrap">
            <span>{{item.type}}</span>{{item.title}}
          </div>
        </router-link>
      </div>
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>
<script>
//引入swiper
import Swiper from "swiper/bundle";
import "swiper/swiper-bundle.css";

export default {
  name: "tSwiper",
  props: {
    swiperList: Array,
  },
  mounted() {
    //注册swiper
    let galleryThumbs = new Swiper(".gallery-thumbs", {
      spaceBetween: 10,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
      pagination: {
        el: ".swiper-pagination",
      },
    });
  },
};
</script>
<style lang="scss" scoped>
.gallery-thumbs {
  width: 550px;
  height: 346px;
  .swiper-slide {
    position: relative;
    cursor: pointer;
  }
  .swiper-pagination {
    z-index: 10;
    bottom: 50px;
    left: 0;
    text-align: center;
    width: 100%;
  }
  .title {
    width: 100%;
    padding: 11px 10px;
    position: absolute;
    bottom: 0;
    left: 0;
    height: 44px;
    background: rgba(82, 82, 82, 0.5);
    color: #fff;
    span {
      display: inline-block;
      width: 45px;
      height: 22px;
      text-align: center;
      line-height: 22px;
      color: #fff;
      background: #e4393c;
      border-radius: 4px;
      margin-right: 20px;
    }
  }
}
img {
  width: 100%;
  height: 100%;
}
</style>
