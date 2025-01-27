<template>
    <div>
        <div class="home">
            <Header>
                <template #right>
                    <div class="login_and_register">
                        <div class="login_btn" @click="login">
                            {{ $t('ENTRAR') }}
                        </div>
                        <div class="register_btn" @click="register">
                            {{ $t('REGISTRO') }}
                        </div>
                    </div>
                </template>
            </Header>



            <van-swipe class="home_swipe" :autoplay="3000" indicator-color="white" lazy-render>
                <van-swipe-item v-for="(image, index) in images" :key="index">
                    <img :src="`http://localhost:8888/src` + image" />
                </van-swipe-item>
            </van-swipe>

            <!-- 两个活动菜单 -->
            <div class="flex justify-between items-center mt-4">
                <div>
                    <img src="@/assets/images/game_gif01.jpg" class="rounded-2xl" />
                </div>
                <div class="w-8"></div>
                <div>
                    <img src="@/assets/images/game_gif02.jpg" class="rounded-2xl" />
                </div>
            </div>

            <GameCompany></GameCompany>

            <Games></Games>

            <div class="flex justify-center items-center flex-row gap-10 mt-[25px] pt-[37px] pb-[37px]"
                style="border-top: 1px solid rgba(255, 255, 255, 0.10);border-bottom: 1px solid rgba(255, 255, 255, 0.10);">
                <img src="@/assets/images/contact/18+.png" class="max-w-[70px] min-w-[70px]" />
                <img src="@/assets/images/contact/tel.png" class="max-w-[70px] min-w-[70px]" />
                <img src="@/assets/images/contact/ws.png" class="max-w-[70px] min-w-[70px]" />
            </div>

            <div class="floorLogo">
                {{ $t('APPNAME') }}
            </div>

            <div class="floorDesc">
                {{ $t('COMPANYDESC') }}

            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import Header from '@/common/Header.vue';
import GameCompany from './components/GameCompany.vue';
import Games from './components/Games.vue';

const images = [
    '/assets/images/banner01.jpg',
    '/assets/images/banner02.jpg',
    '/assets/images/banner03.jpg',
    '/assets/images/banner04.jpg',
];

const login = () => {
    console.log('login');
};

const register = () => {
    console.log('register');
};
</script>

<style src="./home.scss" scoped lang="scss"></style>
