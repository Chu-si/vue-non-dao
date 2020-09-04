<template>
  <div class="List">
    <router-link :to="list.path">
      <img v-lazy="list.imgUrl" src="" alt="">
      <div class="title">
        <h2 class="nowrap">{{list.title}}</h2>
        <p>{{list.title}}</p>
        <div>
          <span class="zixun">{{list.type}}</span>
          <span class="bet">|</span>
          <span class="time">{{list.time}}</span>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "List",
  props: {
    list: Object,
  },
};
</script>

<style lang="scss" scoped>
.List {
  overflow: hidden;
  height: 222px;
  padding: 28px 0;
  border-bottom: 1px solid #e9e9e9;
  img {
    width: 294px;
    height: 166px;
    float: left;
  }
  .title {
    float: right;
    width: calc(100% - 324px);
    h2 {
      color: #000000;
      font-size: 22px;
    }
    p {
      line-height: 24px;
      color: #666666;
      height: 72px;
      overflow: hidden;
    }
    .zixun {
      display: inline-block;
      width: 88px;
      text-align: center;
      height: 28px;
      line-height: 26px;
      border: 1px solid #0f46b5;
      color: #0f46b5;
    }
    .bet {
      display: inline-block;
      padding: 0 26px;
    }
    .time {
      line-height: 28px;
      color: #666666;
    }
  }
}
</style>