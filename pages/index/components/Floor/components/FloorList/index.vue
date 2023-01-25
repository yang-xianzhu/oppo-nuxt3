<template>
  <div v-for="item in list" style="padding-top: 60px">
    <SetionTitle :title="item.title" />
    <div class="category" style="margin-top: 24px">
      <NuxtLink class="category-first-item app-card-hover" :title="item.title">
        <img :src="item.url" alt=""
      /></NuxtLink>
      <div class="item app-card-hover" v-for="v in item.productDetailss">
        <img :src="v.url" alt="" />
        <h2
          style="width: 135px; margin: 0 auto; text-align: center"
          class="text-overflow-hide"
          :title="v.title"
        >
          {{ v.title }}
        </h2>
        <p class="price">
          <span class="price-des">{{ v.pricePrefix }}</span>
          <i class="symbol">¥</i>{{ v.price }}
        </p>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import SetionTitle from "@/components/section-title/index.vue";
import type { ICategory } from "@/api/home/type";

const { list } = defineProps<{ list: ICategory[] }>();
console.log(list);
</script>

<style scoped lang="scss">
.category {
  display: flex;
  flex-wrap: wrap;
  .item {
    flex: none;
    min-width: 235px;
    height: 300px;
    padding-top: 12px;
    margin-left: 14px;
    text-align: center;
    background: #fff;
    border-radius: 5px;
    > img {
      width: 135px;
      height: 150px;
    }
    > h2 {
      font-weight: normal;
    }
    .price {
      color: rgb(246, 52, 52);
      font-size: 18px;
      > &-des {
        font-size: 12px;
        margin-right: 4px;
      }
      .symbol {
        margin-right: 4px;
      }
    }
    // 4 9
    &:nth-child(5n + 5) {
      margin-left: 0;
    }

    &:nth-child(n + 5) {
      margin-top: 12px;
    }
  }
  .category-first-item {
    width: 488px;
    background: #eee;
    height: 300px;
    border-radius: 5px;
    > img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
