<template>
  <div class="SearchMenu">
    <div class="w">
      <div class="searchMenu">
        <div class="item" v-for="(bItem,index1) in MenuData" :key="index1">
          <span><i>*</i>{{bItem.name}}</span>
          <div class="rightBox">
            <searchItme :bItem="bItem"></searchItme>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import searchItme from "./SearchItem";
export default {
  name: "SearchMenu",
  data() {
    return {
      MenuData: [
        {
          name: "机械类型",
          hot: true,
          item: [
            {
              src: "",
              name: "a",
              active: true,
            },
            {
              src: "",
              name: "b",
              active: false,
            },
            {
              src: "",
              name: "c",
              active: false,
            },
            {
              src: "",
              name: "不限",
              active: false,
            },
            {
              src: "",
              name: "不限",
              active: false,
            },
            {
              src: "",
              name: "b",
              active: false,
            },
            {
              src: "",
              name: "c",
              active: false,
            },
            {
              src: "",
              name: "不限",
              active: false,
            },
            {
              src: "",
              name: "不限",
              active: false,
            },
            {
              src: "",
              name: "b",
              active: false,
            },
            {
              src: "",
              name: "c",
              active: false,
            },
            {
              src: "",
              name: "不限",
              active: false,
            },
            {
              src: "",
              name: "不限",
              active: false,
            },
            {
              src: "",
              name: "b",
              active: false,
            },
            {
              src: "",
              name: "c",
              active: false,
            },
            {
              src: "",
              name: "不限",
              active: false,
            },
            {
              src: "",
              name: "不限",
              active: false,
            },
            {
              src: "",
              name: "不限",
              active: false,
            },
            {
              src: "",
              name: "不限",
              active: false,
            },
            {
              src: "",
              name: "不限",
              active: false,
            },
            {
              src: "",
              name: "不限",
              active: false,
            },
            {
              src: "",
              name: "不限",
              active: false,
            },
          ],
        },
        {
          name: "机械类型",
          hot: true,
          item: [
            {
              src: "",
              name: "1",
              active: false,
            },
            {
              src: "",
              name: "6",
              active: false,
            },
            {
              src: "",
              name: "1",
              active: false,
            },
            {
              src: "",
              name: "不限",
              active: false,
            },
            {
              src: "",
              name: "不限",
              active: false,
            },
            {
              src: "",
              name: "不限",
              active: false,
            },
            {
              src: "",
              name: "不限",
              active: false,
            },
            {
              src: "",
              name: "不限",
              active: false,
            },
            {
              src: "",
              name: "不限",
              active: false,
            },
            {
              src: "",
              name: "不限",
              active: false,
            },
          ],
        },
      ],
    };
  },
  components: {
    searchItme,
  },
};
</script>

<style lang="scss" scoped>
.searchMenu {
  border-top: 1px solid #e6e6e6;
  border-left: 1px solid #e6e6e6;
  margin-bottom: 35px;
  .item {
    border-bottom: 1px solid #e6e6e6;
    border-right: 1px solid #e6e6e6;
    overflow: hidden;
    span {
      width: 150px;
      float: left;
      padding-left: 24px;
      line-height: 58px;
      font-size: 14px;
      color: #666666;
      i {
        color: #cc242c;
        margin-right: 7px;
      }
    }
    .rightBox {
      float: left;
      width: 1048px;
    }
  }
}
</style>