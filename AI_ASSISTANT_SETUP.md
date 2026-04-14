# AI 助手配置指南

## 📋 方案描述

您的网站将集成一个**免费的 AI 聊天助手**，显示在右下角浮窗。访客可以通过这个窗口与 AI 进行对话。

---

## 🚀 快速设置（3种方案选择）

### **推荐方案：Crisp.chat**（完全免费）

Crisp 是一个功能完整的聊天平台，拥有强大的免费计划。

#### 第1步：注册 Crisp 账号
1. 访问 [https://crisp.chat](https://crisp.chat)
2. 点击 "**Start for free**"
3. 使用邮箱注册或社交账号登录
4. 填写网站信息

#### 第2步：获取 Website ID
1. 登录 Crisp Dashboard
2. 在左侧菜单找到 "**Settings**" → "**Website**"
3. 找到 `Website ID` 字段（类似：`12a45b6c-7890-1234-5678-9abcdef01234`）
4. 复制完整的 Website ID

#### 第3步：更新网站代码
在以下文件的 `</body>` 标签之前添加如下代码：

```html
<!-- Crisp AI Assistant Start -->
<script type="text/javascript">
  window.$crisp=[];
  window.CRISP_WEBSITE_ID="YOUR_CRISP_WEBSITE_ID";
  (function(){
    d=document;
    s=d.createElement("script");
    s.src="https://client.crisp.chat/l.js";
    s.async=1;
    d.getElementsByTagName("head")[0].appendChild(s);
  })();
</script>
<!-- Crisp AI Assistant End -->
```

**将 `YOUR_CRISP_WEBSITE_ID` 替换为您在第2步获取的 ID。**

#### 第4步：在 Crisp Dashboard 中配置 AI
1. 进入 "**AI Agents**" 或 "**Automation**" 页面
2. 启用 "**AI Copilot**"（如果有）或设置自动回复规则
3. 保存配置

---

### **备选方案：Tidio**

如果您更喜欢 Tidio，步骤类似：

1. 访问 [https://tidio.com](https://tidio.com)
2. 注册并获取 `Public Key`
3. 在 `</body>` 前添加：

```html
<!-- Tidio AI Assistant Start -->
<script src="//code.tidio.co/YOUR_TIDIO_PUBLIC_KEY.js"></script>
<!-- Tidio AI Assistant End -->
```

---

### **高级方案：自定义 AI 聊天框**

如果您想要完全自定义的解决方案，可以使用以下开源库：

- **Botpress** - 强大的开源聊天机器人平台
- **Rasa** - 开源 NLP 聊天框架
- **OpenAI API** - 需要付费，但功能强大

---

## 📁 需要更新的文件

将聊天代码添加到这些文件的 `</body>` 标签前：

- ✅ `index.html` （主页）
- ✅ `selfintroduction/self_introduction.html` （自我介绍页）
- ✅ `projects/*.html` （所有项目页面）

---

## ⚙️ 配置 AI 聊天机器人（以 Crisp 为例）

### 在 Crisp Dashboard 中：

1. **设置欢迎消息**
   - Settings → Conversation → Welcome message
   - 示例："你好！我是阿彬的 AI 助手，有什么可以帮你的吗？"

2. **添加自动回复规则**
   - Automations → Create rule
   - 设置触发条件（如：特定关键词）
   - 设置自动回复内容

3. **配置工作时间**
   - Settings → Availability
   - 设置在线/离线时间

4. **启用 AI Copilot**（如有）
   - AI 会基于您的现有消息学习自动回复

---

## 🎯 功能特性

### Crisp 免费计划包括：
- ✅ 无限聊天对话
- ✅ 访客追踪
- ✅ 基础 AI 功能
- ✅ 移动应用
- ✅ 浏览器通知
- ✅ Website operator seat（1个）

### Tidio 免费计划包括：
- ✅ 聊天机器人（基础版）
- ✅ Live chat
- ✅ 1个座位
- ✅ 基础分析

---

## 📊 监控和分析

登录 Dashboard 后，您可以查看：
- 访客对话摘要
- 热点问题统计
- 访客参与度
- 即时通知

---

## ❓ 常见问题

**Q: 浮窗影响网站性能吗？**
A: 不会。这些脚本是异步加载的，不会阻塞页面加载。

**Q: 可以自定义浮窗样式吗？**
A: 可以。在各个服务的 Dashboard 中都有样式自定义选项。

**Q: 免费计划有什么限制？**
A: 主要是功能限制（如：高级 AI 功能需要付费），但聊天功能本身没有限制。

**Q: 如何获取应有的回复？**
A: 在 Dashboard 中设置自动回复规则，或手动回复访客消息。

---

## 🎨 代码示例

### 完整的 HTML 集成示例（以 Crisp 为例）

```html
<!DOCTYPE html>
<html>
<head>
    <title>阿彬学长的个人小站</title>
</head>
<body>
    <!-- 您的网站内容 -->
    
    <!-- AI Assistant Start -->
    <script type="text/javascript">
      window.$crisp=[];
      window.CRISP_WEBSITE_ID="aa11bb22-cc33-dd44-ee55-ff66aa77bb88";
      (function(){
        d=document;
        s=d.createElement("script");
        s.src="https://client.crisp.chat/l.js";
        s.async=1;
        d.getElementsByTagName("head")[0].appendChild(s);
      })();
    </script>
    <!-- AI Assistant End -->
</body>
</html>
```

---

## 📞 获取帮助

- **Crisp 帮助中心**: https://help.crisp.chat
- **Tidio 文档**: https://www.tidio.com/en/help/
- **社区论坛**: 在各服务的官网上都有社区支持

---

## ✅ 后续步骤

1. 选择您喜欢的服务（推荐 Crisp）
2. 注册账号并获取 Website ID
3. 我可以帮您将代码集成到所有页面
4. 在 Dashboard 中配置欢迎消息和自动回复
5. 完成！

---

**有任何问题？请随时告诉我！** 用您选择的服务的 **Website ID / Public Key**，我会一次性帮您集成到所有页面。
