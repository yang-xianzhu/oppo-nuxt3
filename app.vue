<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script lang="ts" setup>
import { useHomeStore } from "@/store/index";
// 获取数据
const store = useHomeStore();
store.fetchHomeData("oppo");
</script>
