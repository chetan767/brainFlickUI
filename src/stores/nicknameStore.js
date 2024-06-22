import { defineStore } from "pinia";
import { brainPostAPI } from "src/services/apiService";
import {
  getGuestSession,
  getNickname,
  getUserId,
  setGuestInfo,
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
      this.nickname = name;
      let res = await brainPostAPI(
        {
          nickname: this.nickname,
        },
        "user/guestLogin"
      );

      if ("error" in res && res.error) {
        //
      } else {
        setGuestInfo(res);
      }
    },
  },
});
