<template>
  <div v-for="(item, idx) in list" style="padding-top: 60px" :key="item.id">
    <SetionTitle :title="item.title" v-if="item.url" />
    <div class="category" style="margin-top: 24px">
      <NuxtLink
        class="category-first-item app-card-hover"
        :title="item.title"
        :to="item.link"
        v-if="item.url"
      >
        <img :src="item.url" alt=""
      /></NuxtLink>
      <div
        class="item app-card-hover"
        v-for="v in filterList[idx]"
        :title="v.title"
        :key="v.id"
      >
        <NuxtLink :to="v.link" class="card-link"> </NuxtLink>
        <div class="img-box">
          <div class="tip" v-if="v.placeholderLabel?.activityInfo">
            {{ v.placeholderLabel?.activityInfo }}
          </div>
          <img :src="v.url" alt="" />
        </div>
        <!-- 手机型号 -->
        <h2 class="text-overflow-hide" :title="v.title">
          {{ v.title }}
        </h2>
        <!-- 活动折扣类型 -->
        <p class="type" v-if="v.activityList.length">
          <span v-for="i in v.activityList">{{ i.activityInfo }}</span>
        </p>
        <p class="price">
          <span class="price-des">{{ v.priceInfo?.prefix }}</span>
          <i class="symbol">{{ v.priceInfo?.currencyTag || "¥" }}</i
          >{{ v.priceInfo?.price }}
        </p>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import SetionTitle from "@/components/section-title/index.vue";
import type { ICategory } from "@/api/home/type";

const { list } = defineProps<{ list: ICategory[] }>();

const filterList = computed(() =>
  list.map((v) => v.productDetailss.filter((v) => v.priceInfo.price))
);
</script>

<style scoped lang="scss">
.category {
  display: flex;
  flex-wrap: wrap;
  .item {
    position: relative;
    flex: none;
    min-width: 235px;
    height: 300px;
    padding-top: 12px;
    margin-left: 14px;
    text-align: center;
    background: #fff;
    border-radius: 5px;
    .card-link {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
    > .img-box {
      position: relative;
      cursor: pointer;
      .tip {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: flex;
        align-items: center;
        justify-content: center;
        width: 61.6px;
        height: 61.6px;
        color: #fff;
        background: rgba(0, 0, 0, 0.5);
        border-radius: 50%;
      }
      img {
        width: 135px;
        height: 150px;
      }
    }
    > h2 {
      font-weight: 500;
      font-size: 15px;
      width: 135px;
      margin: 0 auto;
      text-align: center;
    }
    .type {
      span {
        padding: 0 2px;
        font-size: 12px;
        color: $priceColor;
        border: 1px solid $priceColor;
        border-radius: 2px;
        &:nth-child(n + 2) {
          margin-left: 2px;
        }
      }
    }
    .price {
      color: $priceColor;
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
