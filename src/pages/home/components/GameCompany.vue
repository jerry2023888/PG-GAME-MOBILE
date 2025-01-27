<template>
    <!-- 游戏厂商 -->
    <div class="flex mt-[15px] w-full overflow-x-scroll" style="scrollbar-width: none; -ms-overflow-style: none;">
        <div v-for="index in 15" :key="index" @click="handleClick"
            class="bg-[#292F35] rounded-2xl min-w-[94px] max-h-[48px] p-[11px] pr-[6px] pl-[6px] mr-[10px]">
            <img :src="`http://localhost:8888/src/assets/images/game_company/gc${index < 10 ? ('0' + index) : index}.png`"
                alt="">
        </div>
    </div>
    
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router';
import { UserInfoPath } from '@/router';
const router = useRouter();
const handleClick = () => {
    router.push(UserInfoPath);
};
</script>