import { defineStore } from "pinia";
import { getHomeData } from "@/api/home";
import type { THomeData, IData } from "@/api/home/type";
export const useHomeStore = defineStore("home", {
  state() {
    return {
      homeInfo: {} as IData,
    };
  },
  actions: {
    async fetchHomeData(type: THomeData) {
      const { data } = await getHomeData(type);
      this.homeInfo = data.value?.data || ({} as IData);
    },
  },
});
