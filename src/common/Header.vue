<template>
    <div class="header">
        <van-nav-bar fixed :border="false" v-if="showHome" :clickable="false">
            <template #left>
                <img src="@/assets/svgs/home_menu.svg" alt="">
            </template>
            <template #title>

            </template>
            <template #right>
                <slot name="right"></slot>
            </template>
        </van-nav-bar>
        <van-nav-bar fixed :border="false" v-else  :clickable="false">
            <template #left>
                <img src="@/assets/svgs/left_back.svg" alt="">
            </template>
            <template #title>
                <p class="title">{{ title || 'Tigger' }}</p>
            </template>
            <template #right>
                <slot name="right"></slot>
            </template>
        </van-nav-bar>
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
//获取props
const props = defineProps({
    title: {
        type: String,
        default: ''
    },
    showHome: {
        type: Boolean,
        default: true
    }
});


</script>
<style scoped lang="scss">
.header {
    height: var(--van-nav-bar-height);

    .title {
        color: var(--100, #FFF);
        text-align: center;
        font-family: 'Poppins';
        font-size: 14px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        text-transform: uppercase;
    }
}
</style>