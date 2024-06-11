import { defineStore } from "pinia";
import { brainPostAPI } from "src/services/apiService";
import {
  getGuestSession,
  getNickname,
  getUserId,
  setUserId,
  setNickname,
} from "src/services/authService";

export const useNicknameStore = defineStore("nickname", {
  state: () => ({
    nickname: null,
    userId: null,
    guestSession: false,
  }),
  getters: {},
  actions: {
    setNicknameAndUserId() {
      this.nickname = getNickname();
      this.userId = getUserId();
      this.guestSession = getGuestSession();
    },
    async sendNicknameToServer(name) {
      this.guestSession = true;
      this.nickname = name;
      let res = await brainPostAPI(
        {
          name: this.nickname,
        },
        "nickname"
      );

      if ("error" in res && res.error) {
        //
      } else {
        setUserId(res.userId);
        setNickname(this.nickname);
      }
    },
  },
});
