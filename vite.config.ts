import { ConfigEnv, UserConfig } from "vite";
import postcssPxtorem from 'postcss-pxtorem';
import { fileURLToPath, URL } from "node:url";
import vue from '@vitejs/plugin-vue'
import { proxy } from "./src/config/proxy";
import { visualizer } from "rollup-plugin-visualizer";
import compression from "vite-plugin-compression";
import tailwindcss from '@tailwindcss/vite'
import autoprefixer from 'autoprefixer'
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { VantResolver } from '@vant/auto-import-resolver';

function toPath(dir: string) {
  return fileURLToPath(new URL(dir, import.meta.url));
}

// https://vitejs.dev/config/
export default ({ mode }: ConfigEnv): UserConfig => {
  const isDev = mode === "development";
  return {
    base: isDev ? "/" : "/pg-new",
    plugins: [
      vue(),
      tailwindcss(),
      compression(),
      visualizer({
        open: false,
        gzipSize: true,
        brotliSize: true
      }),
      AutoImport({
        resolvers: [VantResolver()],
      }),
      Components({
        resolvers: [VantResolver()],
      }),
    ],
    server: {
      port: 8888,
      proxy,
      hmr: {
        overlay: true
      },
      headers: {
        'X-Frame-Options': 'ALLOWALL', // 或直接移除
      },
    },
    resolve: {
      alias: {
        "@": toPath("./src")
      }
    },
    css: {
      postcss: {
        plugins: [
          autoprefixer(),
          postcssPxtorem({
            rootValue: 16,
            propList: ['*'],
            exclude: /node_modules/,
          }),
        ]
      },
    },
    build: {
      minify: "esbuild",
      sourcemap: isDev,
      rollupOptions: {
        output: {
      
        }
      }
    }
  };
};
