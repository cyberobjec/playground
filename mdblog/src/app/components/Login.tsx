import React from "react";

const Login = () => {
  return (
    <div className="login-container">
      <div className="text-gradient">MDNOTES</div>
      <h2>简洁有序的笔记管理</h2>
      <p>随时记录、整理笔记，并在任意设备访问。</p>
      <div className="full-line"></div>
      <h6>登录您的账户</h6>

      <div className="">
        <p>邮箱</p>
        <input type="text" placeholder="邮箱" />
        <p>密码</p>
        <input type="password" placeholder="密码" />
        <button type="submit">登录</button>
      </div>
      <button>注册</button>

      <button className="card-button-secondary">
        <small>忘记密码</small>
      </button>
      <div className="full-line"></div>
      <footer>
        <a target="_blank" href="https://github.com/jamezmca/nextjs15-course">
          <img
            src="https://avatars.githubusercontent.com/u/117184986?v=4"
            alt="GitHub"
          />
          <span>GitHub</span>
        </a>
      </footer>
    </div>
  );
};

export default Login;
