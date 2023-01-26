<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script lang="ts" setup>
import { useHomeStore } from "@/store/index";
// 获取数据
const store = useHomeStore();
// 获取首页的数据
store.fetchHomeData("oppo");
</script>
