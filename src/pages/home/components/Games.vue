<template>
    <!-- 游戏列表 -->
    <div v-for="tes in 3" :key="tes" class="mt-4">

        <div class="flex justify-between items-center mt-[15px] flex-row w-full">
            <div class="max-w-[80px]">
                <img src="@/assets/images/game_company/gc01.png" alt="" class="w-full" />
            </div>
            <div
                class="text-[#7C7E7F] min-w-[52px] text-center font-[Poppins] font-[700] leading-[normal] text-[12px] bg-[#292F35] min-h-[25px] flex flex-row items-center justify-center rounded-[5px] active:bg-[white] active:text-[#292F35]">
                {{ $t('MORE') }}
            </div>
        </div>

        <div class="flex flex-row items-start gap-[10px] mt-[15px] justify-between"
            v-for="index in getArrayIndex(games, 3)" :key="index">
            <div v-for="game in getSlicedGames(index, 3)" :key="game.name" :style="{ 'opacity': game.name ? 1 : 0 }"
                class="flex flex-col items-center justify-center min-w-[100px] min-h-[145px] rounded-[9px] flex-1 bg-gray-200 basis-3/1">
                {{ game.name }}
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">

// 根据数组长度生成每组的起始索引
const getArrayIndex = (arr: any[], sliceNumber: number) => {
    return Array.from({ length: Math.ceil(arr.length / sliceNumber) }, (_, i) => i);
};

// 根据起始索引获取对应的切片
const getSlicedGames = (groupIndex: number, sliceNumber: number) => {
    const startIndex = groupIndex * sliceNumber;
    const endIndex = startIndex + sliceNumber;
    const data = games.slice(startIndex, endIndex);
    if (data.length < sliceNumber) {
        const diff = sliceNumber - data.length;
        for (let i = 0; i < diff; i++) {
            data.push({ name: '', image: '' });
        }
    }
    return data;
};

const games = [
    { name: 'game01', image: '/assets/images/game_company/gc01.png' },
    { name: 'game02', image: '/assets/images/game_company/gc02.png' },
    { name: 'game03', image: '/assets/images/game_company/gc03.png' },
    { name: 'game04', image: '/assets/images/game_company/gc04.png' },
    { name: 'game05', image: '/assets/images/game_company/gc05.png' },
    { name: 'game06', image: '/assets/images/game_company/gc06.png' },
    { name: 'game07', image: '/assets/images/game_company/gc07.png' },
    { name: 'game08', image: '/assets/images/game_company/gc08.png' },
    { name: 'game09', image: '/assets/images/game_company/gc09.png' },
    { name: 'game10', image: '/assets/images/game_company/gc10.png' },
];

</script>