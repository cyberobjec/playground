import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

const home = () => {
  return (
    <>
      <div className="bg-brand text-white p-6">我的品牌色！</div>

      <h1 className="font-display text-4xl">自定义字体</h1>

      <div className="p-18">自定义间距</div>
    </>
  );
};

export default home;
