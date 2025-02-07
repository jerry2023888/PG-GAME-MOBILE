<template>
  <div class="h-lvh min-h-lvh font-[Poppins] overflow-y-auto">
    <Header :showHome="false" title="Check-In"></Header>

    <div class="p-[15px]">
      <!--用户-->
      <div
        class="flex justify-between items-center px-4 py-2 bg-[#292F35] rounded-[5px]"
      >
        <div class="flex items-center font-semibold">
          <img
            class="w-[30px] h-[30px] rounded-[8px] mr-3"
            src="@/assets/images/icon/avatar.jpg"
            alt=""
          />
          <span>tiger_4987</span>
        </div>
        <div class="border-l-[1px] border-[#FFFFFF1A] pl-3">
          <img
            class="w-[44px] h-[16px]"
            src="@/assets/images/icon/vip10.png"
            alt=""
          />
        </div>
      </div>
      <!--进度-->
      <div class="mt-[10px] bg-[#292F35] rounded-[5px] px-2 py-[10px]">
        <div class="text-[12px] leading-3.5 break-all text-center">
          {{ $t("InformaçõesDeLogin") }}
        </div>

        <div class="flex justify-between items-center mt-[10px]">
          <div
            v-for="(item, index) in checkProgressData"
            :key="item.id"
            class="w-[23%] h-[88px] bg-contain bg-center bg-no-repeat text-[#FFD99B] text-[12px] font-semibold flex justify-center items-end"
            :style="{
              backgroundImage: `url('/src/assets/images/check_in/box${
                index + 1
              }.png')`,
            }"
          >
            <span class="pb-1.5"
              >R$<span class="ml-1">{{ formatMoney(item.money) }}</span></span
            >
          </div>
        </div>
        <!--进度条-->
        <div class="mt-4">
          <div class="w-[88%] relative">
            <div class="w-full h-[4px] bg-gray-700 rounded-[5px]">
              <div
                class="h-full bg-green-500 rounded-[5px]"
                :style="{ width: `${progress}%` }"
              ></div>
            </div>
          </div>

          <div class="flex justify-between">
            <div
              v-for="item in progressData"
              :key="item.id"
              class="w-[23%] flex justify-center flex-col items-center"
            >
              <div
                class="point w-4 h-4 bg-gray-700 relative -top-[10px]"
                :class="{ 'bg-green-500': progress >= item.progress }"
              ></div>
              <div class="text-[12px] leading-1">
                <span class="mr-1">{{ item.day }}</span
                >{{ $t("Dia") }}
              </div>
            </div>
          </div>
          <div class="mt-4 text-[12px]">
            {{ $t("DiasConsecutivosDeCheckIn") }}:
            <span class="text-[#FFEA00]">{{ checkIn }}/7</span>
          </div>
        </div>
      </div>
      <!--奖励-->
      <div class="flex flex-wrap justify-between">
        <div
          class="check-in-item py-2.5 w-[48%] rounded-[5px] mt-[10px] relative"
          :class="[
            {
              'w-full': item.day === 7,
            },
          ]"
          v-for="item in checkInBonus"
          :key="item.id"
        >
          <img
            class="w-[120px] h-[100px] absolute right-[12px] top-0 object-contain"
            v-if="item.day === 7"
            src="/src/assets/images/check_in/coin2.png"
            alt=""
          />
          <div
            class="bg-[url('/src/assets/images/check_in/bg_day.png')] bg-right h-[17px] w-[55px] bg-contain text-[12px] text-center font-semibold"
          >
            {{ item.day }} <span>{{ $t("Dia") }}</span>
          </div>
          <div
            v-if="item.day < 7"
            class="bg-[url('/src/assets/images/check_in/coin1.png')] bg-no-repeat bg-[length:50px_50px] bg-[right_0px_center] mt-2 pl-2"
          >
            <div class="text-[14px]">{{ $t("PodeReceber") }}</div>
            <div class="text-[22px] text-[#FFEA00] font-bold">
              R$<span class="pl-[2px]">{{ formatMoney(item.money) }}</span>
            </div>
          </div>
          <div v-else class="mt-2 pl-2">
            <div class="text-[14px]">{{ $t("PodeReceber") }}</div>
            <div class="text-[22px] text-[#FFEA00] font-bold">
              R$<span class="pl-[2px]">{{ formatMoney(item.money) }}</span>
            </div>
          </div>
          <!--按钮-->
          <div class="flex justify-center z-10" @click="onCheckIn">
            <div
              class="bg-[#0000004D] text-[#FFFFFF99] w-full mt-2 mx-[15px] text-center h-9 flex justify-center items-center text-[15px] font-bold rounded-[10px]"
              :class="[
                {
                  'bg-gradient-to-r from-[#1079FC] to-[#0AD79E] text-white':
                    item.isSign,
                },
              ]"
            >
              <img
                v-if="!item.isSign"
                class="w-[18px] h-[18px] mr-1"
                src="/src/assets/images/check_in/icon_lock.png"
                alt=""
              />
              {{ item.isSign ? $t("CheckIn") : $t("NaoIniciado") }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import Header from "@/common/Header.vue";
import { formatMoney } from "@/utils";

const checkProgressData = ref([
  {
    id: 1,
    money: 1,
  },
  {
    id: 2,
    money: 2,
  },
  {
    id: 3,
    money: 3,
  },
  {
    id: 4,
    money: 8,
  },
]);
const progressData = ref([
  {
    id: 1,
    progress: 13.5,
    day: 4,
  },
  {
    id: 1,
    progress: 40.5,
    day: 5,
  },
  {
    id: 1,
    progress: 69.5,
    day: 6,
  },
  {
    id: 1,
    progress: 100,
    day: 7,
  },
]);
const progress = ref(14);
const checkIn = ref(0);
const checkInBonus = ref([
  {
    id: 1,
    day: 1,
    money: 1,
    isSign: true,
  },
  {
    id: 2,
    day: 2,
    money: 1,
    isSign: false,
  },
  {
    id: 3,
    day: 3,
    money: 1,
    isSign: false,
  },
  {
    id: 4,
    day: 4,
    money: 1,
    isSign: false,
  },
  {
    id: 5,
    day: 5,
    money: 1,
    isSign: false,
  },
  {
    id: 6,
    day: 6,
    money: 1,
    isSign: false,
  },
  {
    id: 7,
    day: 7,
    money: 1,
    isSign: false,
  },
]);
//签到
const onCheckIn = () => {};
</script>

<style src="./checkin.scss" scoped lang="scss"></style>
