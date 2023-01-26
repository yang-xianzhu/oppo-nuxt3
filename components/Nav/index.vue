<template>
  <nav>
    <div
      v-for="item in list"
      :key="item.id"
      :title="item.title"
      @click="handleDetail(item.type as TDetail)"
    >
      <img :src="item.picStr" :alt="item.title" />
      <p>{{ item.title }}</p>
    </div>
  </nav>
</template>

<script setup lang="ts">
import type { ICategory } from "@/api/home/type";
import type { TDetail } from "@/api/detail/type";
const { list } = defineProps<{ list: ICategory[] }>();

async function handleDetail(type: TDetail) {
  navigateTo({
    path: "/detail",
    query: {
      type,
    },
  });
}
</script>

<style scoped lang="scss">
nav {
  display: flex;
  justify-content: space-between;

  div {
    position: relative;
    text-align: center;
    cursor: pointer;
    .link {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
  img {
    width: 80px;
  }
}
</style>
