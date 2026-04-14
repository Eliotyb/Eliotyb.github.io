/* AI 聊天小部件脚本 */

(function () {
    'use strict';

    // 检查是否已经初始化过
    if (window.AIChatWidgetInitialized) return;
    window.AIChatWidgetInitialized = true;

    class AIChatWidget {
        constructor() {
            // 注入 HTML 结构
            this.injectHTML();

            // 获取 DOM 元素
            this.widget = document.getElementById('aiChatWidget');
            this.messagesContainer = document.getElementById('chatMessages');
            this.input = document.getElementById('chatInput');
            this.sendBtn = document.getElementById('chatSendBtn');
            this.header = document.getElementById('chatHeader');
            this.closeBtn = document.getElementById('chatCloseBtn');
            this.isCollapsed = false;

            this.initEventListeners();
            this.addWelcomeMessage();
        }

        injectHTML() {
            // 在页面底部注入 HTML
            const htmlContent = `
                <div class="ai-chat-widget" id="aiChatWidget">
                    <div class="chat-header" id="chatHeader">
                        <div>
                            <div class="chat-header-title">AI 助手</div>
                            <div class="chat-header-subtitle">随时为您服务</div>
                        </div>
                        <div class="chat-header-right">
                            <button class="chat-close-btn" id="chatCloseBtn">×</button>
                        </div>
                    </div>
                    <div class="chat-messages" id="chatMessages">
                        <div class="message bot">
                            <div class="message-content">
                                你好！我是阿彬的 AI 助手。很高兴为你服务！😊 有什么我可以帮助你的吗？
                            </div>
                        </div>
                    </div>
                    <div class="chat-input-container">
                        <input 
                            type="text" 
                            class="chat-input" 
                            id="chatInput" 
                            placeholder="输入你的问题..." 
                            autocomplete="off"
                        >
                        <button class="chat-send-btn" id="chatSendBtn">↑</button>
                    </div>
                </div>
            `;

            const div = document.createElement('div');
            div.innerHTML = htmlContent;
            document.body.appendChild(div.firstElementChild);
        }

        initEventListeners() {
            this.sendBtn.addEventListener('click', () => this.handleSendMessage());
            this.input.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    this.handleSendMessage();
                }
            });
            this.header.addEventListener('click', () => this.toggleCollapse());
            this.closeBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                this.minimizeWidget();
            });
        }

        addWelcomeMessage() {
            // 已在 HTML 中
        }

        handleSendMessage() {
            const message = this.input.value.trim();
            if (!message) return;

            // 添加用户消息
            this.addMessage(message, 'user');
            this.input.value = '';

            // 显示"正在输入"指示器
            this.showTypingIndicator();

            // 模拟 AI 回复延迟
            setTimeout(() => {
                const response = this.generateAIResponse(message);
                this.removeTypingIndicator();
                this.addMessage(response, 'bot');
            }, 1000 + Math.random() * 1000);
        }

        addMessage(text, sender) {
            const messageEl = document.createElement('div');
            messageEl.className = `message ${sender}`;
            messageEl.innerHTML = `<div class="message-content">${this.escapeHtml(text)}</div>`;
            this.messagesContainer.appendChild(messageEl);
            this.messagesContainer.scrollTop = this.messagesContainer.scrollHeight;
        }

        generateAIResponse(userMessage) {
            // 简单的 AI 回复逻辑
            const responses = {
                '你好': '你好！很高兴认识你。😊 我可以帮你了解阿彬的作品和经验。有什么想知道的吗？',
                '介绍': '阿彬是一位全栈开发工程师，擅长前端、后端和 AI 技术。他有丰富的项目经验，包括微服务架构、API 网关等。',
                '项目': '阿彬完成过许多有趣的项目，包括 AI 分类系统、推荐引擎、任务调度器等。你可以访问项目页面查看详细信息！',
                '联系': '你可以通过这个网站的联系表单与阿彬联系，或访问他的社交媒体账号。',
                '谢谢': '不客气！如果还有其他问题，随时告诉我。🙌',
                '再见': '再见！希望我能帮到你。下次见! 👋',
                '帮助': '我可以回答关于阿彬、他的项目、技能和联系方式的问题。随意提问吧！',
                '技能': '阿彬掌握的技能包括：JavaScript、Python、React、Vue、Node.js、Docker、Kubernetes 等。',
                '工作': '阿彬有多年的软件开发经验，曾参与多个企业级项目的设计与开发。',
            };

            // 检查关键词
            for (const [key, value] of Object.entries(responses)) {
                if (userMessage.toLowerCase().includes(key)) {
                    return value;
                }
            }

            // 默认回复
            const defaultResponses = [
                '这是个很好的问题！有什么我可以更详细地解释吗？',
                '很有趣的想法！你可以在网站上找到更多相关信息。',
                '我理解你的意思。如果你有更具体的问题，我会很乐意帮助你！',
                '这很有意思！不妨告诉我更多细节？',
                '好的，我正在为你查找相关信息...'
            ];

            return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
        }

        showTypingIndicator() {
            const indicator = document.createElement('div');
            indicator.className = 'message bot';
            indicator.id = 'typingIndicator';
            indicator.innerHTML = `
                <div class="typing-indicator">
                    <span class="typing-dot"></span>
                    <span class="typing-dot"></span>
                    <span class="typing-dot"></span>
                </div>
            `;
            this.messagesContainer.appendChild(indicator);
            this.messagesContainer.scrollTop = this.messagesContainer.scrollHeight;
        }

        removeTypingIndicator() {
            const indicator = document.getElementById('typingIndicator');
            if (indicator) indicator.remove();
        }

        toggleCollapse() {
            this.isCollapsed = !this.isCollapsed;
            if (this.isCollapsed) {
                this.widget.classList.add('collapsed');
            } else {
                this.widget.classList.remove('collapsed');
            }
        }

        minimizeWidget() {
            this.widget.style.display = 'none';
        }

        escapeHtml(text) {
            const map = {
                '&': '&amp;',
                '<': '&lt;',
                '>': '&gt;',
                '"': '&quot;',
                "'": '&#039;'
            };
            return text.replace(/[&<>"']/g, m => map[m]);
        }
    }

    // 页面加载完成后初始化
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            new AIChatWidget();
        });
    } else {
        new AIChatWidget();
    }
})();
