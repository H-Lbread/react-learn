import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

import App from "./App";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);



/**
 * 1-5行将所有必要部分组合在一起
 * - React
 * - React与Web浏览器对话的库（react DOM）
 * - 组件的样式
 * - App.js里面创建的组件
 * 
 * 最终注入在public文件夹里面的index.html中
 */