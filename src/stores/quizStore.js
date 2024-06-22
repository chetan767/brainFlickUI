import { defineStore } from "pinia";
import { brainGetAPI, brainPostAPI } from "src/services/apiService";

export const useQuizStore = defineStore("quiz", {
  state: () => ({
    quiz: {},
  }),
  getters: {},
  actions: {
    async getQuizFromServer(data) {
      console.log(data, "data");
      let res = await brainPostAPI(data, "quizes/getquiz/");

      if ("error" in res && res.error) {
        return { error: true };
        //
      } else {
        this.quiz = res;
      }
    },
  },
});
