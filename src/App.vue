<template>
  <div id="Container">
    <router-view v-slot="{ Component }">
      <transition :name="`${route.meta.transitionName}`" mode="out-in">
        <keep-alive v-if="route.meta.keepAlive">
          <component :is="Component" />
        </keep-alive>
        <component v-else :is="Component" />
      </transition>
    </router-view>
    <FlooterNavBar v-if="route.meta.showNav" @change="handleChange"></FlooterNavBar>
  </div>
</template>

<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router';
import FlooterNavBar from '@/common/FlooterNavBar.vue';
const router = useRouter();
const route = useRoute();

const handleChange = (path: string) => {
  if (path !== route.path) {
    router.push(path);
  }
};

</script>

<style lang="scss">
/* 页面全局基础样式 */
body,
html {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}
</style>
