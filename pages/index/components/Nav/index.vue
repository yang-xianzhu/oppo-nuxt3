<template>
  <nav>
    <div v-for="item in list" :key="item.id">
      <NuxtLink :to="item.link" class="link" :title="item.title"></NuxtLink>
      <img :src="item.picStr" :alt="item.title" />
      <p>{{ item.title }}</p>
    </div>
  </nav>
</template>

<script setup lang="ts">
import type { ICategory } from "@/api/home/type";
const { list } = defineProps<{ list: ICategory[] }>();
</script>

<style scoped lang="scss">
nav {
  display: flex;
  justify-content: space-between;

  div {
    position: relative;
    text-align: center;
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
