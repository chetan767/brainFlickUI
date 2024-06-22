import { defineStore } from "pinia";
import { brainGetAPI, brainPostAPI } from "src/services/apiService";
import {
  getGuestSession,
  getNickname,
  getUserId,
  setUserId,
  setNickname,
} from "src/services/authService";

export const useTopicsStore = defineStore("topics", {
  state: () => ({
    categories: [],
  }),
  getters: {},
  actions: {
    async getTopicsFromServer() {
      let res = await brainGetAPI("categories/topics/");
      console.log(res);
      this.categories = res;
    },
  },
});
