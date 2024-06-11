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
    categories: [
      {
        name: "Hogwarts meri Jaan",
        id: "talksicknhk",
        topics: [
          {
            name: "Harry Potter",
            topicId: "nhk",
            description:
              "Harmoine and genei  voldermort bad, maninder docker ni bnraHarmoine and genei  voldermort bad, maninder docker ni bnraHarmoine and genei  voldermort bad, maninder docker ni bnra",
          },
          {
            name: "Harry Potter",
            topicId: "nhk",
            description:
              "Harmoine and genei  voldermort bad, maninder docker ni bnraHarmoine and genei  voldermort bad, maninder docker ni bnraHarmoine and genei  voldermort bad, maninder docker ni bnra",
          },
          {
            name: "Harry Potter",
            topicId: "nhk",
            description:
              "Harmoine and genei  voldermort bad, maninder docker ni bnraHarmoine and genei  voldermort bad, maninder docker ni bnraHarmoine and genei  voldermort bad, maninder docker ni bnra",
          },
          {
            name: "Harry Potter",
            topicId: "nhk",
            description:
              "Harmoine and genei  voldermort bad, maninder docker ni bnraHarmoine and genei  voldermort bad, maninder docker ni bnraHarmoine and genei  voldermort bad, maninder docker ni bnra",
          },
        ],
      },
      {
        name: "Hogwarts meri Jaan",
        id: "talksicknhk",
        topics: [
          {
            name: "Harry Potter",
            topicId: "nhk",
            description:
              "Harmoine and genei  voldermort bad, maninder docker ni bnraHarmoine and genei  voldermort bad, maninder docker ni bnraHarmoine and genei  voldermort bad, maninder docker ni bnra",
          },
          {
            name: "Harry Potter",
            topicId: "nhk",
            description:
              "Harmoine and genei  voldermort bad, maninder docker ni bnraHarmoine and genei  voldermort bad, maninder docker ni bnraHarmoine and genei  voldermort bad, maninder docker ni bnra",
          },
          {
            name: "Harry Potter",
            topicId: "nhk",
            description:
              "Harmoine and genei  voldermort bad, maninder docker ni bnraHarmoine and genei  voldermort bad, maninder docker ni bnraHarmoine and genei  voldermort bad, maninder docker ni bnra",
          },
          {
            name: "Harry Potter",
            topicId: "nhk",
            description:
              "Harmoine and genei  voldermort bad, maninder docker ni bnraHarmoine and genei  voldermort bad, maninder docker ni bnraHarmoine and genei  voldermort bad, maninder docker ni bnra",
          },
        ],
      },
      {
        name: "Hogwarts meri Jaan",
        id: "talksicknhk",
        topics: [
          {
            name: "Harry Potter",
            topicId: "nhk",
            description:
              "Harmoine and genei  voldermort bad, maninder docker ni bnraHarmoine and genei  voldermort bad, maninder docker ni bnraHarmoine and genei  voldermort bad, maninder docker ni bnra",
          },
          {
            name: "Harry Potter",
            topicId: "nhk",
            description:
              "Harmoine and genei  voldermort bad, maninder docker ni bnraHarmoine and genei  voldermort bad, maninder docker ni bnraHarmoine and genei  voldermort bad, maninder docker ni bnra",
          },
          {
            name: "Harry Potter",
            topicId: "nhk",
            description:
              "Harmoine and genei  voldermort bad, maninder docker ni bnraHarmoine and genei  voldermort bad, maninder docker ni bnraHarmoine and genei  voldermort bad, maninder docker ni bnra",
          },
          {
            name: "Harry Potter",
            topicId: "nhk",
            description:
              "Harmoine and genei  voldermort bad, maninder docker ni bnraHarmoine and genei  voldermort bad, maninder docker ni bnraHarmoine and genei  voldermort bad, maninder docker ni bnra",
          },
        ],
      },
      {
        name: "Hogwarts meri Jaan",
        id: "talksicknhk",
        topics: [
          {
            name: "Harry Potter",
            topicId: "nhk",
            description:
              "Harmoine and genei  voldermort bad, maninder docker ni bnraHarmoine and genei  voldermort bad, maninder docker ni bnraHarmoine and genei  voldermort bad, maninder docker ni bnra",
          },
          {
            name: "Harry Potter",
            topicId: "nhk",
            description:
              "Harmoine and genei  voldermort bad, maninder docker ni bnraHarmoine and genei  voldermort bad, maninder docker ni bnraHarmoine and genei  voldermort bad, maninder docker ni bnra",
          },
          {
            name: "Harry Potter",
            topicId: "nhk",
            description:
              "Harmoine and genei  voldermort bad, maninder docker ni bnraHarmoine and genei  voldermort bad, maninder docker ni bnraHarmoine and genei  voldermort bad, maninder docker ni bnra",
          },
          {
            name: "Harry Potter",
            topicId: "nhk",
            description:
              "Harmoine and genei  voldermort bad, maninder docker ni bnraHarmoine and genei  voldermort bad, maninder docker ni bnraHarmoine and genei  voldermort bad, maninder docker ni bnra",
          },
        ],
      },
      {
        name: "Hogwarts meri Jaan",
        id: "talksicknhk",
        topics: [
          {
            name: "Harry Potter",
            topicId: "nhk",
            description:
              "Harmoine and genei  voldermort bad, maninder docker ni bnraHarmoine and genei  voldermort bad, maninder docker ni bnraHarmoine and genei  voldermort bad, maninder docker ni bnra",
          },
          {
            name: "Harry Potter",
            topicId: "nhk",
            description:
              "Harmoine and genei  voldermort bad, maninder docker ni bnraHarmoine and genei  voldermort bad, maninder docker ni bnraHarmoine and genei  voldermort bad, maninder docker ni bnra",
          },
          {
            name: "Harry Potter",
            topicId: "nhk",
            description:
              "Harmoine and genei  voldermort bad, maninder docker ni bnraHarmoine and genei  voldermort bad, maninder docker ni bnraHarmoine and genei  voldermort bad, maninder docker ni bnra",
          },
          {
            name: "Harry Potter",
            topicId: "nhk",
            description:
              "Harmoine and genei  voldermort bad, maninder docker ni bnraHarmoine and genei  voldermort bad, maninder docker ni bnraHarmoine and genei  voldermort bad, maninder docker ni bnra",
          },
        ],
      },
    ],
  }),
  getters: {},
  actions: {
    async getTopicsFromServer() {
      this.guestSession = true;
      this.nickname = name;
      let res = await brainGetAPI("topics");

      if ("error" in res && res.error) {
        //
      } else {
        this.topics = res.topics;
      }
    },
  },
});
