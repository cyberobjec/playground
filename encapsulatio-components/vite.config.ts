// React Router v7 Vite 配置文件
import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    // TailwindCSS 插件 - 提供原子化 CSS 支持
    tailwindcss(),

    // React Router v7 插件 - 提供全栈框架功能
    // 包括 SSR、路由、数据加载、类型生成等
    reactRouter(),

    // TypeScript 路径映射插件 - 支持 tsconfig.json 中的 paths 配置
    // 允许使用 @ 等别名导入模块
    tsconfigPaths(),
  ],
});
