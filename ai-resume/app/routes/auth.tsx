import React, { use } from "react";
import { usePuterStore } from "~/lib/puter";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
export function meta() {
  return [
    {
      title: "简历分析器|登录",
    },
    {
      name: "description",
      content: "登录你的账户",
    },
  ];
}

const auth = () => {
  const { isLoading, auth } = usePuterStore();
  const location = useLocation();
  const next = location.search.split("next=")[1];
  const navigate = useNavigate();
  useEffect(() => {
    if (auth.isAuthenticated) navigate("next");
  }, [auth.isAuthenticated, next]);
  return (
    <main className="bg-[url('/images/bg-auth.svg')] bg-cover min-h-screen flex items-center justify-center">
      <div className="gradient-border shadow-lg">
        <section className="flex flex-col gap-8 bg-white rounded-2xl p-10">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-2xl font-bold">欢迎回来</h1>
            <h2>登陆继续你的分析之旅</h2>
          </div>
          {isLoading ? (
            <button className="auth-button animate-pulse">加载中...</button>
          ) : (
            <>
              {auth.isAuthenticated ? (
                <button className="auth-button" onClick={() => auth.signOut()}>
                  <p>登出</p>
                </button>
              ) : (
                <button className="auth-button" onClick={() => auth.signIn()}>
                  <p>登陆</p>
                </button>
              )}
            </>
          )}
        </section>
      </div>
    </main>
  );
};

export default auth;
