<template>
  <div>
    <div class="mc rent">
      <ul>
        <li v-for="(item,index) in rentData" :key="index">
          <rentItem :rentData="item"></rentItem>
        </li>
      </ul>
    </div>
    <div class="mb">
      <a-pagination :default-current="1" :total="200" :default-page-size="12" :item-render="itemRender" />
    </div>
  </div>
</template>

<script>
import rentItem from "./RentItem";
export default {
  name: "component_name",
  data() {
    return {
      rentData: [
        {
          img:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597608185889&di=640e1a4f43bd8f783bbf30066604c976&imgtype=0&src=http%3A%2F%2Fa3.att.hudong.com%2F14%2F75%2F01300000164186121366756803686.jpg",
          num: "22000",
          continued: "月",
          address: "南京",
          time: "07-20",
          name: "毕节挖机出租",
          company: "昊远工程机械租赁",
          href: "/rentDetails",
        },
        {
          img:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597608185889&di=640e1a4f43bd8f783bbf30066604c976&imgtype=0&src=http%3A%2F%2Fa3.att.hudong.com%2F14%2F75%2F01300000164186121366756803686.jpg",
          num: "22000",
          continued: "月",
          address: "南京",
          time: "07-20",
          name: "毕节挖机出租",
          company: "昊远工程机械租赁",
          href: "/rentDetails",
        },
        {
          img:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597608185889&di=640e1a4f43bd8f783bbf30066604c976&imgtype=0&src=http%3A%2F%2Fa3.att.hudong.com%2F14%2F75%2F01300000164186121366756803686.jpg",
          num: "22000",
          continued: "月",
          address: "南京",
          time: "07-20",
          name: "毕节挖机出租",
          company: "昊远工程机械租赁",
          href: "/rentDetails",
        },
        {
          img:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597608185889&di=640e1a4f43bd8f783bbf30066604c976&imgtype=0&src=http%3A%2F%2Fa3.att.hudong.com%2F14%2F75%2F01300000164186121366756803686.jpg",
          num: "22000",
          continued: "月",
          address: "南京",
          time: "07-20",
          name: "毕节挖机出租",
          company: "昊远工程机械租赁",
          href: "/rentDetails",
        },
        {
          img:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597608185889&di=640e1a4f43bd8f783bbf30066604c976&imgtype=0&src=http%3A%2F%2Fa3.att.hudong.com%2F14%2F75%2F01300000164186121366756803686.jpg",
          num: "22000",
          continued: "月",
          address: "南京",
          time: "07-20",
          name: "毕节挖机出租",
          company: "昊远工程机械租赁",
          href: "/rentDetails",
        },
        {
          img:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597608185889&di=640e1a4f43bd8f783bbf30066604c976&imgtype=0&src=http%3A%2F%2Fa3.att.hudong.com%2F14%2F75%2F01300000164186121366756803686.jpg",
          num: "22000",
          continued: "月",
          address: "南京",
          time: "07-20",
          name: "毕节挖机出租",
          company: "昊远工程机械租赁",
          href: "/rentDetails",
        },
        {
          img:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597608185889&di=640e1a4f43bd8f783bbf30066604c976&imgtype=0&src=http%3A%2F%2Fa3.att.hudong.com%2F14%2F75%2F01300000164186121366756803686.jpg",
          num: "22000",
          continued: "月",
          address: "南京",
          time: "07-20",
          name: "毕节挖机出租",
          company: "昊远工程机械租赁",
          href: "/rentDetails",
        },
        {
          img:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597608185889&di=640e1a4f43bd8f783bbf30066604c976&imgtype=0&src=http%3A%2F%2Fa3.att.hudong.com%2F14%2F75%2F01300000164186121366756803686.jpg",
          num: "22000",
          continued: "月",
          address: "南京",
          time: "07-20",
          name: "毕节挖机出租",
          company: "昊远工程机械租赁",
          href: "/rentDetails",
        },
        {
          img:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597608185889&di=640e1a4f43bd8f783bbf30066604c976&imgtype=0&src=http%3A%2F%2Fa3.att.hudong.com%2F14%2F75%2F01300000164186121366756803686.jpg",
          num: "22000",
          continued: "月",
          address: "南京",
          time: "07-20",
          name: "毕节挖机出租",
          company: "昊远工程机械租赁",
          href: "/rentDetails",
        },
        {
          img:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597608185889&di=640e1a4f43bd8f783bbf30066604c976&imgtype=0&src=http%3A%2F%2Fa3.att.hudong.com%2F14%2F75%2F01300000164186121366756803686.jpg",
          num: "22000",
          continued: "月",
          address: "南京",
          time: "07-20",
          name: "毕节挖机出租",
          company: "昊远工程机械租赁",
          href: "/rentDetails",
        },
        {
          img:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597608185889&di=640e1a4f43bd8f783bbf30066604c976&imgtype=0&src=http%3A%2F%2Fa3.att.hudong.com%2F14%2F75%2F01300000164186121366756803686.jpg",
          num: "22000",
          continued: "月",
          address: "南京",
          time: "07-20",
          name: "毕节挖机出租",
          company: "昊远工程机械租赁",
          href: "/rentDetails",
        },
        {
          img:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597608185889&di=640e1a4f43bd8f783bbf30066604c976&imgtype=0&src=http%3A%2F%2Fa3.att.hudong.com%2F14%2F75%2F01300000164186121366756803686.jpg",
          num: "22000",
          continued: "月",
          address: "南京",
          time: "07-20",
          name: "毕节挖机出租",
          company: "昊远工程机械租赁",
          href: "/rentDetails",
        },
      ],
    };
  },
  components: {
    rentItem,
  },
  methods: {
    //分页器文字改变
    itemRender(current, type, originalElement) {
      if (type === "prev") {
        return <a class="ant-pagination-item-link page">上一页</a>;
      } else if (type === "next") {
        return <a class="ant-pagination-item-link page">下一页</a>;
      }
      return originalElement;
    },
  },
};
</script>

<style lang="scss" scoped>
.mc {
  width: 850px;
  overflow: hidden;
  margin-top: 42px;
  ul {
    margin: 0;
    padding: 0;
    width: 885px;
    overflow: hidden;
    li {
      width: 260px;
      float: left;
      margin-right: 35px;
    }
  }
}
.mb {
  text-align: center;
  .page {
    padding: 0 10px;
  }
}
</style>