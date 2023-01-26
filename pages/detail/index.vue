<template>
  <div class="w">详情:{{}}</div>
</template>

<script lang="ts" setup>
import { getDetailData } from "@/api/detail/index";
import type { TDetail, IDetailData } from "@/api/detail/type";
import { useHomeStore } from "@/store/index";

const route = useRoute();
const { data } = await getDetailData(route.query?.type as TDetail);

useHomeStore().fetchDetailData(data.value?.data || ({} as IDetailData));
</script>
