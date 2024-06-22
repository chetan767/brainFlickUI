import { defineStore } from "pinia";
import { brainGetAPI, brainPostAPI } from "src/services/apiService";

export const useQuizStore = defineStore("quiz", {
  state: () => ({
    quiz: {},
    sounds: {
      gameStart: new Audio("src/assets/audios/game-start.mp3"),
      gameNext: new Audio("src/assets/audios/game-next.mp3"),
    },
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
    // setSounds(sounds) {
    //   this.sounds = sounds;
    // },
  },
});
