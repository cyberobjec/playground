// ========== 第一块：imports 导入 ==========
import { Form } from "react-router";  // 导入 Form 组件（用于提交表单）
import type { Route } from ".//types/post";  // 导入类型定义

// ========== 第二块：clientLoader 函数 ==========
// 【作用】：用户访问页面前，提前加载数据
// 【何时执行】：路由导航时，组件渲染前
export async function clientLoader({ params }: Route.LoaderArgs) {
  // 第5行：params 是动态路由参数
  // 例如访问 /post/123，则 params.postId = '123'
  const postId = params.postId;
  
  // 第6-8行：发送 GET 请求获取数据
  // 拼接 URL：https://jsonplaceholder.typicode.com/posts/123
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );
  
  // 第9行：等待响应并解析 JSON
  // 返回的数据格式：{ id: 123, title: '标题', body: '内容', ... }
  // 这个数据会传给 Post 组件的 loaderData props
  return await res.json();
}

// ========== 第三块：clientAction 函数 ==========
// 【作用】：处理用户操作（表单提交）
// 【何时执行】：用户点击 Delete 按钮时触发
export async function clientAction({ params }: Route.LoaderArgs) {
  // 第13行：发送 DELETE 请求到 API
  // 目的是删除这个文章
  // 请求 URL：DELETE /posts/123（删除 ID 为 123 的文章）
  await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`, {
    // 第14行：HTTP 方法设置为 DELETE
    method: "DELETE",
  });
  // action 执行完毕，表示删除成功
}

// ========== 第四块：Post 组件 ==========
// 【作用】：渲染页面界面
// 【接收的数据】：loaderData（来自 clientLoader 返回的数据）
export default function Post({ loaderData }: Route.ComponentProps) {
  return (
    <div>
      {" "}
      
      // 第22行：显示文章标题
      // loaderData.title 就是 clientLoader 返回数据中的 title
      // 例如：loaderData = { id: 123, title: 'React 学习', body: '...' }
      // 这里就显示："Title: React 学习"
      <p> Title: {loaderData.title}</p>
      
      // 第23行：显示文章内容
      // loaderData.body 就是 clientLoader 返回数据中的 body
      // 这里就显示："Body: 这是文章内容..."
      <p> Body: {loaderData.body}</p>

      // 第24-26行：删除表单
      // method="delete" 关键！
      // 当点击提交按钮时，Router 自动调用 clientAction 函数
      <Form method="delete">
        // 第25行：删除按钮
        // 用户点击后 → Form 提交 → 触发 clientAction
        <button type="submit"> Delete </button>
      </Form>
    </div>
  );
}