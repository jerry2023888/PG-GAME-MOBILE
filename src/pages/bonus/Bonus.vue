<template>
  <div class="h-lvh min-h-lvh font-[Poppins] overflow-y-auto">
    <Header :showHome="false" :title="$t('FundoDeResagate')"></Header>

    <div class="p-[15px]">
      <!--列表数据-->
      <div>
        <div
          class="bg-gradient-to-r from-[#122FA2] to-[#2A3138] p-[10px] mt-2 first:mt-0 rounded-[10px] flex justify-between items-center"
          v-for="item in bonusData"
          :key="item.id"
        >
          <div class="flex items-center">
            <img class="w-[58px] h-[58px]" :src="item.imgPath" alt="" />
            <div class="ml-2">
              <div class="text-sm">{{ item.name }}</div>
              <div class="text-[#FFEA00]">
                BRL<span class="ml-1">{{ item.money }}</span>
              </div>
            </div>
          </div>

          <div
            class="bg-[#FFFFFF1A] w-[88px] py-[8px] rounded-[7px] text-center"
            :class="{
              'bg-gradient-to-b from-[#F42E5A] to-[#C7013C] active:bg-gradient-to-b active:from-[#C7013C] active:via-[#C7013C]_17% active:to-[#F42E5A] shadow-[0px_2.8px_3.71px_0px_#FF003761,0px_2.8px_1.4px_0px_#FC5E7F_inset,0px_2.8px_2.1px_0px_#00000040]':
                item.status === 1,
            }"
          >
            {{ item.status < 2 ? $t("Receive") : $t("Received") }}
          </div>
        </div>
      </div>
      <!--详情-->
      <div class="text-center mt-5 font-semibold">
        <span class="text-[#FFEA00]">30%</span>
        {{ $t("FundoDepósito") }}
      </div>
      <div class="mt-4 text-[#FFFFFF80] text-sm">
        <div class="flex">
          1.
          <div>{{ $t("FundoInformação1") }}</div>
        </div>
        <div class="flex">
          2.
          <div>{{ $t("FundoInformação2") }}</div>
        </div>
        <div class="flex">
          3.
          <div>{{ $t("FundoInformação3") }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Header from "@/common/Header.vue";

const bonusData = ref([
  {
    id: 1,
    money: 100,
    name: "current cashback",
    imgPath: "/src/assets/images/bonus/icon_coin.png",
    status: 0,
  },
  {
    id: 2,
    money: 100,
    name: "second cashback",
    imgPath: "/src/assets/images/bonus/icon_box.png",
    status: 1,
  },
  {
    id: 2,
    money: 100,
    name: "thrid cashback",
    imgPath: "/src/assets/images/bonus/icon_box.png",
    status: 2,
  },
]);
</script>
