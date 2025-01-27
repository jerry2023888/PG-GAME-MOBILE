/**
 * 此处不允许出现任何与请求以外的逻辑，包括store的引用，任何数据处理逻辑都应该在service中完成
 */

import { ref } from "vue";
import axiosInstance from "@/plugins/axios";
import { UserInfo } from "@/types/userinfo";
export const getUserInfo = () => {
  const data = ref<UserInfo | null>(null);
  const error = ref<any | null>(null);
  const loading = ref<boolean>(false);

  const fetch = async () => {
    try {
      loading.value = true;
      const response = await axiosInstance.get(
        "http://restcountries.com/v3.1/all?fields=name"
      );
      data.value = response.data;
    } catch (err) {
      error.value = err;
    } finally {
      loading.value = false;
    }
  };

  return {
    fetch,
    data,
    error,
    loading,
  };
};
