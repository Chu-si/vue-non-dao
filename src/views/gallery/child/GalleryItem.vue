<template>
  <div class="GalleryItem">
    <router-link :to="galleryItem.path">
      <img v-lazy="galleryItem.imgUrl" src="" alt="">
      <div class="title">
        <div class="mt"><span>{{galleryItem.type}}</span>{{galleryItem.title}}</div>
        <div class="mb">
          <div class="time">{{galleryItem.time}}</div>
          <div class="num">{{galleryItem.num}}张 {{galleryItem.liu}}浏览</div>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "GalleryItem",
  props: {
    galleryItem: Object,
  },
};
</script>

<style lang="scss" scoped>
.GalleryItem {
  width: 284px;
  box-shadow: 0 0 13px 3px rgba(162, 162, 162, 0.17);
  img {
    width: 284px;
    height: 172px;
  }
  .title {
    padding: 0 11px;
    .mt {
      color: #333333;
      line-height: 26px;
      height: 52px;
      overflow: hidden;
      margin: 10px 0 15px 0;
      span {
        height: 22px;
        width: 45px;
        display: inline-block;
        line-height: 20px;
        text-align: center;
        border: 1px solid #e4393c;
        color: #e4393c;
        border-radius: 4px;
        margin-right: 12px;
      }
    }
    .mb {
      overflow: hidden;
      color: #666666;
      padding-bottom: 15px;
      .time {
        float: left;
      }
      .num {
        float: right;
      }
    }
  }
}
</style>