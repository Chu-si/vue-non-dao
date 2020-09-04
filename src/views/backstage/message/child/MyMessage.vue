<template>
  <div class="MyMessage">
    <a-collapse v-model="activeKey" :accordion="true" :bordered="false">
      <template #expandIcon="props">
        <a-badge :offset="[0,5]" :dot="true"></a-badge>
      </template>
      <template v-for="item in title">
        <a-collapse-panel :showArrow="item.look" :key="item.id" :header="item.title">
          <p>{{ item.main }}</p>
        </a-collapse-panel>
      </template>
    </a-collapse>
  </div>
</template>
<script>
const title = [];
for (let i = 0; i < 10; i++) {
  title.push({
    id: i.toString(),
    title: `第${i}行`,
    look: true,
    main: `London Park no. ${i}`,
  });
}
export default {
  name: "MyFavorites",
  data() {
    return {
      title,
      activeKey: [],
    };
  },
  watch: {
    activeKey(key) {
      this.title[key].look = false;
      console.log(key);
    },
  },
};
</script>
<style lang="scss" scoped>
p {
  margin: 0;
  padding-left: 20px;
}
</style>
