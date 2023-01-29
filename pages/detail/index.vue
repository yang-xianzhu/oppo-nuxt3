<template>
  <div
    style="
      padding: 12px 0 60px 0;
      background-color: var(--app-page-background-color);
    "
  >
    <div class="w">
      <DetailTab
        style="background: #fff"
        :list="(list as IList[])"
        @change="handle"
      />
      <!-- DetailList -->
      <div class="detail-list" style="margin-top: 20px">
        <div
          class="item app-card-hover"
          v-for="item in currentProductDetailss"
          :key="item.id"
        >
          <div class="img-box">
            <div class="tip" v-if="item.placeholderLabel?.activityInfo">
              {{ item.placeholderLabel?.activityInfo }}
            </div>
            <img :src="item.url" alt="" />
          </div>
          <!-- 手机型号 -->
          <h2 class="text-overflow-hide" :title="item.title">
            {{ item.title }}
          </h2>
          <!-- 活动折扣类型 -->
          <p class="type" v-if="item.activityList.length">
            <span v-for="i in item.activityList">{{ i.activityInfo }}</span>
          </p>
          <p class="price">
            <span class="price-des">{{ item.priceInfo?.prefix }}</span>
            <i class="symbol">{{ item.priceInfo?.currencyTag || "¥" }}</i
            >{{ item.priceInfo?.price }}
          </p>
        </div>
      </div>
      <!-- 没有更多了 -->
      <div class="last-line">
        <hr class="line" />
        <span class="text">没有更多了</span>
        <hr class="line" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import DetailTab from "@/components/detail-tab/index.vue";
import { getDetailData } from "@/api/detail/index";
import type { TDetail, IDetailData } from "@/api/detail/type";
import { useHomeStore } from "@/store/index";
import type { ProductDetailss } from "@/api/detail/type";

interface IList {
  text: string;
  id: number | string;
  productDetailss: ProductDetailss[];
}
const route = useRoute();
const { data } = await getDetailData(route.query?.type as TDetail);

useHomeStore().fetchDetailData(data.value?.data || ({} as IDetailData));

const currentProductDetailss = ref<ProductDetailss[]>([]);

const list = computed<IList[]>(() => {
  if (data?.value) {
    return (data.value.data as unknown as IDetailData[]).map((v) => ({
      text: v.title,
      id: v.id,
      productDetailss: v.productDetailss,
    }));
  } else {
    return [];
  }
});

function handle(productDetailss: ProductDetailss[]) {
  currentProductDetailss.value = productDetailss.filter(
    (v) => v.priceInfo.price
  );
}
</script>

<style lang="scss" scoped>
.detail-list {
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
    cursor: pointer;
    .card-link {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
    > .img-box {
      position: relative;
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
        padding: 2px 8px;
        font-size: 12px;
        color: $priceColor;
        border: 1px solid $priceBorderColor;
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
    &:nth-child(5n + 1) {
      margin-left: 0;
    }

    &:nth-child(n + 6) {
      margin-top: 12px;
    }
  }
}

.last-line {
  display: flex;
  align-items: center;
  margin-top: 30px;
  .text {
    margin: 0 24px;
    font-size: 18px;
    opacity: 0.5;
    color: #343a40;
  }
  .line {
    flex-grow: 1;
    background-color: #d2d2d2;
    height: 1px;
    border: none;
  }
}
</style>
