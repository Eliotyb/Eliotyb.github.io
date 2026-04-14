# Tawk.to AI助手配置指南

## 📋 快速概览

您的网站已集成**Tawk.to**在线客服系统，支持AI聊天机器人和实时客服功能。该工具已添加到以下页面：

- ✅ 主页 (`index.html`)
- ✅ 自我介绍页 (`selfintroduction/self_introduction.html`)
- ✅ 所有项目页面 (12个项目)

## 🚀 快速开始

### 第1步：访问Tawk.to官网
访问 [https://tawk.to](https://tawk.to)

### 第2步：注册账号
1. 点击"Sign Up"（免费注册）
2. 使用邮箱注册或用Google/GitHub账号登录
3. 填写必要信息

### 第3步：创建聊天频道
1. 登录后，进入Dashboard
2. 点击"+ Create a new property"
3. 输入网站名称（如"阿彬学长的个人网站"）
4. 输入网站URL：`https://你的域名`
5. 选择您想要的聊天频道名称

### 第4步：获取Property ID
1. 创建完成后，系统会自动生成代码
2. 在弹出窗口中找到这样的代码：
   ```
   https://embed.tawk.to/YOUR_PROPERTY_ID/1h0f1nb0k
   ```
3. 复制整个URL中的 `YOUR_PROPERTY_ID` 部分（通常是长字符串，如：`5f4c...`）

### 第5步：更新您的网站代码

在以下所有HTML文件中，找到这行代码：
```javascript
s1.src='https://embed.tawk.to/YOUR_TAWK_PROPERTY_ID/1h0f1nb0k';
```

将 `YOUR_TAWK_PROPERTY_ID` 替换为您在第4步获得的ID。

需要更新的文件：
- `index.html`
- `selfintroduction/self_introduction.html`
- `projects/order-system.html`
- `projects/ai-classification.html`
- `projects/api-gateway.html`
- `projects/microservices.html`
- `projects/recommendation-engine.html`
- `projects/task-scheduler.html`
- `projects/book-mockup.html`
- `projects/creative-flyer.html`
- `projects/mockup-collection.html`
- `projects/motion-graphics.html`
- `projects/poster-design.html`
- `projects/yellow-poster.html`

### 第6步：配置AI聊天机器人（可选）

1. 在Tawk.to Dashboard中，找到您创建的Channel
2. 点击"Settings" → "Chatbot"
3. 启用AI聊天机器人并配置欢迎信息

示例配置：
```
欢迎来到阿彬学长的个人小站！👋

我是AI助手，很高兴为您服务。

您可以咨询我关于以下内容：
- 项目信息和技术细节
- 联系方式和合作机会
- 简历和工作经验
- 其他问题

如需与真人客服沟通，请留言，我会尽快回复！
```

## 🎨 自定义选项

### 改变聊天窗口外观
1. Dashboard → Channel Settings
2. Appearance → Theme
3. 选择颜色主题、位置、大小等

### 设置离线消息
1. Dashboard → Channel Settings
2. Offline Message
3. 配置访客留言表单

### 设置快速回复
1. Dashboard → Channel Settings
2. Pre-Chat Form
3. 添加常见问题和快速回复

## 🔧 配置建议

### 聊天窗口位置
- 目前配置为右下角浮窗（推荐）
- 可在Tawk.to设置中修改为左下角

### 欢迎消息建议
```
👋 你好！欢迎来到阿彬学长的个人小站

我是AI助手，可以帮助您了解：
✨ 我的技术栈和项目经验
💼 工作机会和合作
📱 联系方式
❓ 其他任何问题

有什么我可以帮助的吗？
```

### 工作时间设置
1. 设置在线/离线时间
2. 配置自动回复消息
3. 设置离线表单

## 📊 监测和分析

### 查看聊天记录
- Dashboard → Conversations
- 查看所有访客聊天记录
- 分析访客关注的问题

### 生成统计报告
- Dashboard → Analytics
- 查看聊天数量、响应时间等指标

## 🎯 高级配置

### 集成更多功能
- 社交媒体链接
- CRM集成
- 自定义字段
- 聊天评分

### API集成（高级）
- 使用Tawk.to API自定义功能
- 文档：https://docs.tawk.to/

## ❓ 常见问题

**Q: AI助手何时开始工作？**
A: 代码部署后，聊天窗口会立即出现在右下角。请检查浏览器控制台确保没有错误。

**Q: 需要调整聊天窗口位置？**
A: 在Tawk.to设置中修改即可，无需更改网站代码。

**Q: 如何启用AI自动回复？**
A: 在Tawk.to Dashboard的Chatbot设置中启用AI功能。

**Q: 支持多语言吗？**
A: 支持！在设置中可切换语言，包括中文。

## 📞 获取支持

- Tawk.to官方文档：https://docs.tawk.to/
- 邮件支持：support@tawk.to
- 在线帮助中心：https://help.tawk.to/

---

**最后一步：测试您的AI助手**

1. 部署更新后的代码到网站
2. 打开您的网站
3. 查找右下角的聊天窗口
4. 发送测试消息确保正常工作

祝您的AI助手运行顺利！🚀
