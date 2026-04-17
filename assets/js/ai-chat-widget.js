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
            const welcomeMessage = knowledgeBase.greetings[Math.floor(Math.random() * knowledgeBase.greetings.length)];
            this.addMessage(welcomeMessage, 'bot');
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
            const lowerCaseMessage = userMessage.toLowerCase();

            // 遍历知识库
            for (const category in knowledgeBase) {
                if (knowledgeBase.hasOwnProperty(category)) {
                    const item = knowledgeBase[category];
                    if (item.keywords && item.answers) {
                        // 处理项目详情
                        if (category === 'project_details') {
                            for (const project in item) {
                                if (item.hasOwnProperty(project)) {
                                    const projectItem = item[project];
                                    if (projectItem.keywords.some(keyword => lowerCaseMessage.includes(keyword))) {
                                        return projectItem.answers[Math.floor(Math.random() * projectItem.answers.length)];
                                    }
                                }
                            }
                        } else {
                            if (item.keywords.some(keyword => lowerCaseMessage.includes(keyword))) {
                                return item.answers[Math.floor(Math.random() * item.answers.length)];
                            }
                        }
                    }
                }
            }

            // 如果没有找到匹配项，返回一个兜底回复
            return knowledgeBase.fallback[Math.floor(Math.random() * knowledgeBase.fallback.length)];
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