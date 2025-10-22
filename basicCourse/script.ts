// 导入需要的图标
import {
  Home,
  User,
  Briefcase,
  FileText,
  Mail,
  createIcons,
} from "https://unpkg.com/lucide@latest/dist/esm/lucide.js";

// 导航栏配置
interface NavItem {
  icon: string; // Lucide 图标名称
  text: string; // 菜单文字
  href: string; // 跳转链接
}

const navItems: NavItem[] = [
  { icon: "home", text: "首页", href: "#home" },
  { icon: "user", text: "关于", href: "#about" },
  { icon: "briefcase", text: "服务", href: "#services" },
  { icon: "file-text", text: "简历", href: "#profile" },
  { icon: "mail", text: "联系", href: "#contact" },
];

// 获取页面中的导航容器
const navUl = document.querySelector(".nav") as HTMLElement;

// 根据配置动态生成导航菜单
navUl.innerHTML = navItems
  .map(
    (item) => `
  <li>
    <a href="${item.href}">
      <i data-lucide="${item.icon}"></i>
      ${item.text}
    </a>
  </li>
`
  )
  .join("");

// 初始化导入的图标
createIcons({
  icons: {
    Home,
    User,
    Briefcase,
    FileText,
    Mail,
  },
});
