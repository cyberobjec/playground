// script.ts
import {
  Home,
  User,
  Briefcase,
  FileText,
  Mail,
  createIcons
} from "https://unpkg.com/lucide@latest/dist/esm/lucide.js";
var navItems = [
  { icon: "home", text: "首页", href: "#home" },
  { icon: "user", text: "关于", href: "#about" },
  { icon: "briefcase", text: "服务", href: "#services" },
  { icon: "file-text", text: "简历", href: "#profile" },
  { icon: "mail", text: "联系", href: "#contact" }
];
var navUl = document.querySelector(".nav");
navUl.innerHTML = navItems.map((item) => `
  <li>
    <a href="${item.href}">
      <i data-lucide="${item.icon}"></i>
      ${item.text}
    </a>
  </li>
`).join("");
createIcons({
  icons: {
    Home,
    User,
    Briefcase,
    FileText,
    Mail
  }
});
