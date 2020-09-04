<template>
  <div class="Business">
    <div class="w">
      <div class="mt">
        <p>主营业务</p>
        <ul class="fr change blue" slot="item-tab">
          <li
            v-for="(item, index) in headerName"
            :key="index"
            :class="{ active: index === currentIndex }"
            @click="navClick(index)"
          >
            {{ item }}
          </li>
        </ul>
      </div>
      <div class="mb">
        <div class="leftBox fl">
          <div class="item" v-for="(item, index) in leftBox" :key="index">
            <p><i class="iconfont" :class="item.icon"></i>{{ item.name }}</p>
            <ul>
              <li v-for="(item, index) in item.item" :key="index">
                <router-link :to="item.href">
                  {{ item.name }}
                </router-link>
              </li>
            </ul>
          </div>
        </div>
        <div class="rightbox fr">
          <ul>
            <li
              v-for="(item, index) in businessRight"
              :key="index"
              @click="itemClick(item)"
            >
              <img
                v-lazy="'http://60.168.18.161:18088' + item.pic.split(',')[0]"
                src=""
                alt=""
              />
              <h2 class="nowrap">{{ item.title }}</h2>
              <p>{{ item.ramark }}</p>
              <span>了解更多</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getDictType } from "network/app.js";
export default {
  name: "Business",
  props: {
    businessRight: Array,
    businessLeft: Array,
  },
  data() {
    return {
      headerName: ["租赁", "金融服务", "保险", "维保", "其他"],
      currentIndex: 0,
      leftBox: [
        {
          name: "设备类型",
          icon: "icon-leixing",
          item: [
            {
              name: "挖掘机",
              href: "/rent",
            },
            {
              name: "压路机",
              href: "/rent",
            },
            {
              name: "载装机",
              href: "/rent",
            },
            {
              name: "推土机",
              href: "/rent",
            },
            {
              name: "平地机",
              href: "/rent",
            },
            {
              name: "起重机",
              href: "/rent",
            },
            {
              name: "压路机",
              href: "/rent",
            },
            {
              name: "其它",
              href: "/rent",
            },
          ],
        },
        {
          name: "燃油类型",
          icon: "icon-ranyou",
          item: [
            {
              name: "汽油",
              href: "/rent",
            },
            {
              name: "纯电动",
              href: "/rent",
            },
            {
              name: "柴油",
              href: "/rent",
            },
            {
              name: "其它",
              href: "/rent",
            },
          ],
        },
        {
          name: "环保等级",
          icon: "icon-level",
          item: [
            {
              name: "国Ⅰ",
              href: "/rent",
            },
            {
              name: "国Ⅱ",
              href: "/rent",
            },
          ],
        },
        {
          name: "环保登记号",
          icon: "icon-yijiaob",
          item: [
            {
              name: "有",
              href: "/rent",
            },
            {
              name: "无",
              href: "/rent",
            },
          ],
        },
        {
          name: "机械所有人",
          icon: "icon-certified",
          item: [
            {
              name: "个人",
              href: "/rent",
            },
            {
              name: "企业",
              href: "/rent",
            },
          ],
        },
      ],
    };
  },
  methods: {
    //点击切换选中项
    navClick(index) {
      this.currentIndex = index;
    },
    itemClick(item) {
      this.$router.push("/rentDetails/" + item.id);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./style.scss";
.leftBox {
  width: 365px;
  padding-left: 18px;
  background: #f3f3f3;
  .item {
    padding-bottom: 10px;
    p {
      line-height: 68px;
      margin: 0;
      font-size: 18px;
      color: #333333;
      i {
        color: #fdbe13;
        font-size: 22px;
        margin-right: 16px;
      }
    }
    ul {
      margin: 0;
      padding: 0;
      overflow: hidden;
      li {
        float: left;
        cursor: pointer;
        width: 100px;
        height: 38px;
        text-align: center;
        line-height: 38px;
        background: #fff;
        margin-bottom: 12px;
        margin-right: 14px;
      }
    }
  }
}
.rightbox {
  width: 828px;
  ul {
    overflow: hidden;
    margin: 0;
    padding: 0;
    li {
      width: 263px;
      margin-left: 13px;
      float: left;
      cursor: pointer;
      img {
        width: 263px;
        height: 205px;
      }
      h2 {
        font-size: 16px;
        color: #333333;
        line-height: 54px;
        margin: 0;
      }
      p {
        font-size: 12px;
        color: #666666;
        line-height: 18px;
        height: 54px;
        overflow: hidden;
        margin-bottom: 20px;
      }
      span {
        width: 130px;
        height: 44px;
        border: 1px solid #d48844;
        text-align: center;
        line-height: 42px;
        color: #d48844;
        display: block;
        @include webkit(transition, all 0.3s ease 0s);
        &:hover {
          color: #fff;
          background: #d48844;
        }
      }
    }
    li:nth-child(1),
    li:nth-child(2),
    li:nth-child(3) {
      margin-bottom: 41px;
    }
  }
}
</style>
