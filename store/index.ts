import { defineStore } from "pinia";
import { getHomeData } from "@/api/home";
import type { THomeData, IData } from "@/api/home/type";
import type { IDetailData } from "@/api/detail/type";

export const useHomeStore = defineStore("home", {
  state() {
    return {
      homeInfo: {} as IData,
      detailInfo: {} as IDetailData,
    };
  },
  actions: {
    // 获取首页数据
    async fetchHomeData(type: THomeData) {
      const { data } = await getHomeData(type);
      this.homeInfo = data.value?.data || ({} as IData);
    },
    // 获取商品详情信息
    async fetchDetailData(data: IDetailData) {
      this.detailInfo = data as IDetailData;
    },
  },
});
