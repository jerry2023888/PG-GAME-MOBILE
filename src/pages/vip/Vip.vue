<template>
  <div class="h-lvh min-h-lvh font-[Poppins] overflow-y-auto">
    <Header :showHome="false" title="VIP"></Header>

    <div class="p-[20px]">
      <!--VIP信息-->
      <div
        class="bg-[url('/src/assets/images/vip/vip_bg.png')] bg-cover bg-center h-[236px] rounded-2xl relative"
      >
        <div
          class="absolute w-[120px] h-[93.75px] top-[15px] right-[20px] bg-[url('/src/assets/images/vip/frame.png')] bg-cover bg-center"
        >
          <div class="w-full h-full relative">
            <span
              class="absolute left-1/2 -translate-x-1/2 top-[33px] text-[26.67px] font-bold"
            >
              {{ vipLevel }}
            </span>
          </div>
        </div>
        <div
          class="w-full absolute bottom-0 bg-[#292F35] rounded-2xl flex flex-col justify-between"
        >
          <div
            class="pt-[15px] pl-[20px] pr-[15px] flex justify-between items-center"
          >
            <div>
              <div>{{ $t("PodeReceberBonus") }}</div>
              <div class="text-[32px] font-semibold text-[#FFD99B]">
                {{ bonus }}
              </div>
            </div>
            <div>
              <div
                v-if="false"
                class="h-[51px] px-[20px] border-[1.5px] border-[#FFFFFF1A] rounded-[100px] flex justify-center items-center text-[#FFFFFF66] font-bold"
              >
                {{ $t("Receber") }}
              </div>
              <div
                class="h-[51px] px-[20px] bg-gradient-to-b from-[#FFD68A] to-[#A7713A] border-t-[1.5px] border-[#FFFFFF30] rounded-[100px] flex justify-center items-center text-[#47240F] font-bold bg-linear"
              >
                {{ $t("Receber") }}
              </div>
            </div>
          </div>
          <div
            class="px-[20px] py-1.5 flex justify-between items-center bg-[#FFFFFF0D] rounded-b-2xl"
          >
            {{ $t("RegistroDeenvioDeBonus") }}
            <img
              class="w-[20px] h-[20px]"
              loading="lazy"
              src="@/assets/svgs/arrow_right.svg"
              alt=""
              aria-hidden="true"
            />
          </div>
        </div>
      </div>

      <!--进度-->
      <div class="px-[10px] py-[15px] bg-[#292F35] mt-[15px] rounded-2xl">
        <div class="px-[10px]">
          <div class="flex justify-between items-center">
            <span class="text-[12px] text-[#FFFFFF99]">{{
              $t("VolumeAcumuladoDeApostas")
            }}</span>
            <span class="font-semibold">2222.16</span>
          </div>
          <van-progress
            class="my-[2px]"
            :percentage="50"
            color="#5F81A1"
            track-color="#1C2127"
            stroke-width="6px"
            :show-pivot="false"
          />
          <div class="flex justify-between items-center mt-[5px]">
            <span class="text-[12px] text-[#FFFFFF99]">0</span>
            <span class="text-[12px] text-[#FFFFFF99]">5000(VIP1)</span>
          </div>
        </div>

        <div class="p-[10px] bg-[#FFFFFF0D] rounded-xl mt-[10px]">
          <div class="flex justify-between items-center">
            <span class="text-[12px] text-[#FFD99B]">{{
              $t("VolumeAcumuladoDeApostas")
            }}</span>
            <span class="font-semibold text-[#FFFFFF99]">2222.16</span>
          </div>
          <van-progress
            class="my-[2px]"
            :percentage="50"
            color="#5F81A1"
            track-color="#1C2127"
            stroke-width="6px"
            :show-pivot="false"
          />
          <div
            class="flex justify-between items-center mt-[5px] text-[12px] text-[#FFFFFF99]"
          >
            <span>0</span>
            <span class="text-[#FFD99B]"
              >{{ $t("ManterADivisao") }}: <span class="ml-1">0</span></span
            >
          </div>
        </div>
      </div>

      <!--表格-->
      <div class="mt-[20px]">
        <div class="flex justify-between items-center text-[#FFFFFF80]">
          <div
            class="flex-1 pb-1 text-center border-b-2 border-[#32373C]"
            :class="[
              { 'text-white': !activeTable },
              { '!border-[#FFD99B]': !activeTable },
            ]"
            @click="tableChange(0)"
          >
            <span>{{ $t("RendimentosVIP") }}</span>
          </div>
          <div
            class="flex-1 pb-1 text-center border-b-2 border-[#32373C]"
            :class="[
              { 'text-white': activeTable },
              { '!border-[#FFD99B]': activeTable },
            ]"
            @click="tableChange(1)"
          >
            <span>{{ $t("CondicoesVIP") }}</span>
          </div>
        </div>

        <div class="mt-[15px]">
          <div
            class="flex justify-between items-center mt-[10px] bg-[#292F35] py-[10px] rounded-t-xl"
          >
            <span
              v-for="(item, index) in tableHeader"
              :key="index"
              class="flex-1 text-center text-[12px] text-[#FFFFFF66] leading-[12px]"
              >{{ $t(item) }}</span
            >
          </div>
          <div
            v-for="item in tableData"
            :key="item.nivel"
            class="flex justify-between items-center py-[10px] bg-[#292F35] mt-[2px]"
          >
            <span class="flex-1 text-center text-[12px] text-[#FFD99B]">{{
              item.nivel
            }}</span>
            <span class="flex-1 text-center text-[12px] text-[#FFFFFF66]">{{
              !item.apostas ? "--" : item.apostas
            }}</span>
            <span class="flex-1 text-center text-[12px] text-[#FFFFFF66]">{{
              !item.upgrade ? "--" : item.upgrade
            }}</span>
            <span class="flex-1 text-center text-[12px] text-[#FFFFFF66]">{{
              !item.semanal ? "--" : item.semanal
            }}</span>
            <span class="flex-1 text-center text-[12px] text-[#FFFFFF66]">{{
              !item.mensal ? "--" : item.mensal
            }}</span>
          </div>
        </div>
      </div>

      <!--说明-->
      <div class="mt-[20px]">
        <div class="flex items-center bg-[#292F35] p-[10px] rounded-t-xl">
          <img
            class="w-[22px] h-[22px]"
            loading="lazy"
            src="@/assets/svgs/warning_circle.svg"
            alt=""
            aria-hidden="true"
          />
          <span class="ml-[10px] text-[#FFFFFF99] text-[14px]">{{
            $t("DescricaoDaAtividade")
          }}</span>
        </div>
        <div class="break-words pt-[10px] px-[10px]">
          nivelnivelnivelnivelnivelnivelnivelnivelnivelnivelnivelnivelnivelnivelnivelnivelnivelnivelnivelnivelnivelnivelnivelnivelnivellnivelnivelnivelnivelnivelnivelnivelnivellnivelnivelnivelnivelnivelnivelnivelnivellnivelnivelnivelnivelnivelnivelnivl
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Header from "@/common/Header.vue";

const bonus = ref(0);
const vipLevel = ref(0);
const active = ref(0);
const activeTable = ref(0);
const tableHeader = ref([
  "Nivel",
  "Apostas",
  "BonuSupgrade",
  "BonusSemanal",
  "BonusMensal",
]);
const tableData = ref([
  {
    nivel: "VIP1",
    apostas: 5000,
    upgrade: 10,
    semanal: 0,
    mensal: 3,
  },
  {
    nivel: "VIP2",
    apostas: 5000,
    upgrade: 10,
    semanal: 0,
    mensal: 3,
  },
  {
    nivel: "VIP3",
    apostas: 5000,
    upgrade: 10,
    semanal: 3,
    mensal: 3,
  },
  {
    nivel: "VIP4",
    apostas: 5000,
    upgrade: 10,
    semanal: 5,
    mensal: 3,
  },
  {
    nivel: "VIP5",
    apostas: 5000,
    upgrade: 10,
    semanal: 10,
    mensal: 3,
  },
  {
    nivel: "VIP6",
    apostas: 5000,
    upgrade: 10,
    semanal: 10,
    mensal: 3,
  },
  {
    nivel: "VIP7",
    apostas: 5000,
    upgrade: 10,
    semanal: 10,
    mensal: 3,
  },
  {
    nivel: "VIP8",
    apostas: 5000,
    upgrade: 10,
    semanal: 10,
    mensal: 3,
  },
  {
    nivel: "VIP9",
    apostas: 5000,
    upgrade: 10,
    semanal: 10,
    mensal: 3,
  },
  {
    nivel: "VIP10",
    apostas: 5000,
    upgrade: 10,
    semanal: 10,
    mensal: 3,
  },
]);

const tableChange = (val: number) => {
  if (activeTable.value == val) return;

  activeTable.value = val;
};
</script>
