<template>
  <footer>
    <ul class="w list">
      <li v-for="item in list" :key="item.id">
        <img :src="item.icon" alt="" />
        <span>{{ item.title }}</span>
      </li>
    </ul>
  </footer>
</template>

<script setup lang="ts">
const list = [
  {
    title: "全国联保",
    id: "1",
    icon: "https://dsfs.oppo.com/oppo/shop-pc-v2/main/img/04210c8.svg",
  },
  {
    title: "7天无理由退货",
    id: "2",
    icon: "https://dsfs.oppo.com/oppo/shop-pc-v2/main/img/4be7942.svg",
  },
  {
    title: "官方换货保障",
    id: "3",
    icon: "https://dsfs.oppo.com/oppo/shop-pc-v2/main/img/eb8fa21.svg",
  },
  {
    title: "满69元包邮",
    id: "4",
    icon: "https://dsfs.oppo.com/oppo/shop-pc-v2/main/img/3839092.svg",
  },
  {
    title: "900+ 家售后网点",
    id: "5",
    icon: "https://dsfs.oppo.com/oppo/shop-pc-v2/main/img/11324b1.svg",
  },
];
</script>

<style lang="scss" scoped>
footer {
  padding: 32px 0;
}
.list {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 80px;
  li {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
      width: 50px;
      height: 50px;
      margin-bottom: 12px;
    }
    span {
      font-size: 16px;
    }
  }
}
</style>
