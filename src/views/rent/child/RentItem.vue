<template>
  <div class="RentItem">
    <router-link to="/rentDetails">
      <img v-lazy="rentData.img" src="" alt="">
      <div class="title">
        <div class="mt">
          <div class="con">
            <span>{{rentData.num}}</span>/{{rentData.continued}}
          </div>
          <div class="line">|</div>
          <div class="address">{{rentData.address}}</div>
          <div class="time">{{rentData.time}}</div>
        </div>
        <div class="name nowrap">{{rentData.name}}</div>
        <div class="company nowrap"><i class="iconfont icon-gongsixinxi"></i>{{rentData.company}}</div>
        <div class="contact">联系我</div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "RentItem",
  props: {
    rentData: Object,
  },
};
</script>

<style lang="scss" scoped>
.RentItem {
  margin-bottom: 60px;
  cursor: pointer;
  img {
    width: 260px;
    height: 160px;
  }
  .title {
    padding: 0 15px;
    .mt {
      padding-top: 15px;
      overflow: hidden;
      div {
        float: left;
        color: #c3c3c3;
        line-height: 30px;
      }
      .con {
        font-size: 16px;
        color: #ff6600;
        span {
          font-size: 22px;
          vertical-align: bottom;
        }
      }
      .line {
        padding: 0 10px;
      }
      .address {
        font-size: 14px;
        color: #0152f5;
      }
      .time {
        float: right;
        color: #999999;
        font-size: 14px;
      }
    }
    .name {
      color: #666666;
      margin-bottom: 8px;
    }
    .company {
      color: #999999;
      margin-bottom: 6px;
    }
    .contact {
      border: 1px solid #ff6600;
      width: 100px;
      height: 30px;
      text-align: center;
      line-height: 28px;
      color: #ff6600;
      @include webkit(transition, all 0.3s ease 0s);
      &:hover {
        color: #fff;
        background: #ff6600;
      }
    }
  }
}
</style>