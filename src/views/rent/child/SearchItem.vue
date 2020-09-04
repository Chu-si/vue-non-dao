<template>
  <div class="box" :class="{active: overflow}">
    <ul ref="ul">
      <li v-for="(sItem,index) in bItem.item" :class="{active: index === currentIndex }" :key="index" @click="itemClick(index)">{{sItem.name}}</li>
    </ul>
    <div class="more" @click="moreClick">更多+</div>
  </div>
</template>

<script>
export default {
  name: "SearchItme",
  props: {
    bItem: {},
  },
  data() {
    return {
      currentIndex: 0,
      overflow: false,
    };
  },
  methods: {
    //点击条件
    itemClick(index) {
      //高亮
      this.currentIndex = index;
    },
    //点击更多
    moreClick(index) {
      //多余隐藏内容显示
      this.overflow = false;
    },
  },
  mounted: function () {
    //元素挂载完成判断是否有多余内容
    if (this.$refs.ul.offsetHeight > 60) {
      this.overflow = true;
    }
  },
};
</script>

<style lang="scss" scoped>
.box {
  overflow: hidden;
  border-left: 1px solid #e6e6e6;
  padding: 0;
  padding-left: 15px;
  position: relative;
  ul {
    padding: 0;
    padding-top: 16px;
    margin: 0;
    overflow: hidden;
    li {
      float: left;
      padding: 0 14px;
      cursor: pointer;
      height: 26px;
      color: #333333;
      font-size: 14px;
      margin: 0 16px 16px 0;
      line-height: 26px;
      &.active {
        color: #fff;
        background: #ff9600;
      }
    }
  }
  .more {
    position: absolute;
    right: 30px;
    top: 18px;
    display: none;
    color: #0152f5;
    cursor: pointer;
  }
  &.active {
    overflow: visible;
    height: 42px;
    padding-right: 75px;
    .more {
      display: block;
    }
  }
}
</style>