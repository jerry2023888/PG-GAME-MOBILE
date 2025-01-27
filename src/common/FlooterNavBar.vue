<script lang="ts" setup>
import { ref } from 'vue';
import { ContactPath, HomePath, NotifyPath, RechargePath, WithdrawPath } from '@/router';
import huodong_0 from '@/assets/svgs/huodong_0.svg';
import huodong_1 from '@/assets/svgs/huodong_1.svg';
import kefu_0 from '@/assets/svgs/kefu_0.svg';
import kefu_1 from '@/assets/svgs/kefu_1.svg';
import tixian_0 from '@/assets/svgs/tixian_0.svg';
import tixian_1 from '@/assets/svgs/tixian_1.svg';
import notify_0 from '@/assets/svgs/notify_0.svg';
import notify_1 from '@/assets/svgs/notify_1.svg';
import wallet_0 from '@/assets/images/icon/wallet.png';
import wallet_1 from '@/assets/images/icon/active/wallet.png';

// 定义 props 和 emit
defineProps({});
const emit = defineEmits<{
    (event: 'change', path: string): void;
}>();

// 当前选中的路径
const defaultPath = ref<string>(HomePath);

// 判断是否激活
const isActive = (path: string) => path === defaultPath.value;

// 点击处理
const handleClick = (path: string) => {
    defaultPath.value = path;
    emit('change', path);
};
</script>

<template>
    <div class="flex flex-col shadow-sm w-full fixed" style="bottom: -1px; left: 0; right: 0; z-index: 999;">
        <div class="flex relative flex-col w-full aspect-[4.747]">
            <img loading="lazy" src="@/assets/svgs/flooter_bg.svg" class="object-cover absolute inset-0 size-full"
                alt="" aria-hidden="true" />
            <div class="flex relative gap-2 justify-between items-center px-2 w-full">
                <div class="flex flex-col self-stretch pt-9 my-auto w-16 min-h-[81px]" @click="handleClick(HomePath)">
                    <div :style="{ 'color': isActive(HomePath) ? '#FFFFFF' : 'rgba(255, 255, 255, 0.45)' }"
                        class="flex w-full min-h-[48px] flex-col items-center justify-center font-[Poppins] font-[700]  text-[11px] gap-[3px]">
                        <img :src="isActive(HomePath) ? huodong_1 : huodong_0" class="max-w-[20px] max-h-[20px]" alt="">
                        <p>{{ $t('Promoção') }}</p>
                    </div>
                </div>
                <div class="flex flex-col self-stretch pt-9 my-auto w-16 min-h-[81px]"
                    @click="handleClick(WithdrawPath)">
                    <div :style="{ 'color': isActive(WithdrawPath) ? '#FFFFFF' : 'rgba(255, 255, 255, 0.45)' }"
                        class="flex w-full min-h-[48px] flex-col items-center justify-center font-[Poppins] font-[700]  text-[11px] gap-[3px]">
                        <img :src="isActive(WithdrawPath) ? tixian_1 : tixian_0" class="max-w-[20px] max-h-[20px]"
                            alt="">
                        <p>{{ $t('Saque') }}</p>
                    </div>
                </div>
                <div @click="handleClick(RechargePath)"
                    class="self-stretch px-2 pt-1.5 my-auto text-xs font-bold text-center text-white whitespace-nowrap min-h-[81px] w-[75px]"
                    role="heading" aria-level="2">
                    <img :src="isActive(RechargePath) ? wallet_1 : wallet_0"  class="max-w-[60px] max-h-[60px]" alt="">

                </div>
                <div @click="handleClick(NotifyPath)" class="flex flex-col self-stretch pt-9 my-auto w-16 min-h-[81px]">
                    <div :style="{ 'color': isActive(NotifyPath) ? '#FFFFFF' : 'rgba(255, 255, 255, 0.45)' }"
                        class="flex w-full min-h-[48px] flex-col items-center justify-center font-[Poppins] font-[700]  text-[11px] gap-[3px]">
                        <img :src="isActive(NotifyPath) ? notify_1 : notify_0" class="max-w-[20px] max-h-[20px]" alt="">
                        <p>{{ $t('Mensagem') }}</p>
                    </div>
                </div>
                <div @click="handleClick(ContactPath)"
                    class="flex flex-col self-stretch pt-9 my-auto w-16 min-h-[81px]">
                    <div :style="{ 'color': isActive(ContactPath) ? '#FFFFFF' : 'rgba(255, 255, 255, 0.45)' }"
                        class="flex w-full min-h-[48px] flex-col items-center justify-center font-[Poppins] font-[700]  text-[11px] gap-[3px]">
                        <img :src="isActive(ContactPath) ? kefu_1 : kefu_0" class="max-w-[20px] max-h-[20px]" alt="">
                        <p>{{ $t('Serviço') }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>