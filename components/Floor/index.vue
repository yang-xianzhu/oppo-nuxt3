<template>
  <!-- 每一个楼层 -->
  <FloorList :list="list" />
</template>

<script lang="ts" setup>
import FloorList from "./components/FloorList/index.vue";
import type { ICategory } from "@/api/home/type";
const { list } = defineProps<{ list: ICategory[] }>();
</script>
