import { defineStore } from "pinia";
import { UserInfo } from "@/types/userinfo";

export default defineStore("userInfo", {
  state: () => ({
    _userInfo: {} as UserInfo
  }),
  getters: {
    getUserInfo: (state) => state._userInfo,
    isLogin: (state) => {
      if (state._userInfo === null) {
        return false;
      }
      if (state._userInfo.token === '') {
        return false;
      }
      return true;
    },
  },
  actions: {
    setUserInfo(value: UserInfo) {
      this._userInfo = value;
    },
  },
  persist: true, // 开启持久化

});