# Tawk.to Property ID 替换清单

## ⚠️ 重要提醒
您需要在以下所有文件中将 `YOUR_TAWK_PROPERTY_ID` 替换为您从Tawk.to获得的实际Property ID。

## 📝 替换步骤

1. 访问 https://tawk.to 注册并创建聊天频道
2. 获取您的Property ID（形如：`5f4c123abc...`）
3. 在每个文件中搜索并替换代码

### 查找和替换的代码：
```javascript
s1.src='https://embed.tawk.to/YOUR_TAWK_PROPERTY_ID/1h0f1nb0k';
```

替换为（使用您的实际ID，例如：5f4c123abc）：
```javascript
s1.src='https://embed.tawk.to/5f4c123abc/1h0f1nb0k';
```

---

## ✅ 需要更新的文件列表

### 主页面（必须）
- [ ] `index.html` - 第1397行附近

### 个人介绍页面（可选但推荐）
- [ ] `selfintroduction/self_introduction.html` - 第365行附近

### 项目页面（推荐全部更新）
- [ ] `projects/order-system.html` - 第140行附近
- [ ] `projects/ai-classification.html` - 第140行附近
- [ ] `projects/api-gateway.html` - 第140行附近
- [ ] `projects/microservices.html` - 第140行附近
- [ ] `projects/recommendation-engine.html` - 第140行附近
- [ ] `projects/task-scheduler.html` - 第140行附近
- [ ] `projects/book-mockup.html` - 第117行附近
- [ ] `projects/creative-flyer.html` - 第117行附近
- [ ] `projects/mockup-collection.html` - 第117行附近
- [ ] `projects/motion-graphics.html` - 第117行附近
- [ ] `projects/poster-design.html` - 第117行附近
- [ ] `projects/yellow-poster.html` - 第116行附近

---

## 🔄 快速批量替换方法

### 使用VS Code全局查找和替换：

1. 按 `Ctrl + H` 打开"查找和替换"
2. 在"查找"框输入：
   ```
   YOUR_TAWK_PROPERTY_ID
   ```
3. 在"替换"框输入：
   ```
   您的实际Property ID（例如：5f4c123abc）
   ```
4. 点击"全部替换" (Replace All) 按钮
5. 完成！

---

## 🎯 验证替换

替换完成后，打开网站查看：
- [ ] 右下角是否出现聊天窗口？
- [ ] 聊天窗口是否响应点击？
- [ ] 浏览器控制台是否有错误信息？

如果出现问题，检查：
1. Property ID是否正确复制
2. URL格式是否正确（应该以`https://embed.tawk.to/`开头）
3. 浏览器是否正确加载了脚本

---

## 📱 测试聊天窗口

1. 在浏览器中打开您的网站
2. 查找右下角的聊天窗口（通常显示Tawk logo）
3. 点击打开聊天页面
4. 发送测试消息验证功能

---

## 💡 提示

- 建议先在一个页面上测试，确认无误后再更新其他页面
- 如忘记Property ID，可登录Tawk.to Dashboard重新查看
- 聊天窗口可能需要1-2分钟才能完全加载

---

**需要帮助？** 查看 `TAWK_SETUP_GUIDE.md` 了解完整的设置说明。
