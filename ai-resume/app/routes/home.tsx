import type { Route } from "./+types/home";
import { Navbar } from "~/components/navbar";
import { resumes } from "~/constants/inex";
import ResumeCard from "~/components/ResumeCard";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "简历分析器" },
    {
      name: "description",
      content:
        "上传简历，3 秒生成 AI 诊断报告：关键词匹配度、ATS 得分、优化建议，助你面试翻倍。",
    },
  ];
}

export default function Home() {
  return (
    <main className="bg-[url('/images/bg-main.svg')] bg-cover ">
      <Navbar />

      <section className="main-section">
        <h1>追踪你的应用和简历评分</h1>
        <h2>查看你的提交内容并获取 AI 驱动的反馈。</h2>
      </section>
      {resumes.length > 0 && (
        <section className="resumes-section">
          {resumes.map((resume) => (
            <ResumeCard key={resume.id} resume={resume} />
          ))}
        </section>
      )}
    </main>
  );
}
