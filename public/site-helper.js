// public/site-helper.js

(function () {
  'use strict';

  // 配置数据
  const siteInfo = {
    baseUrl: 'https://zhapp-aiyouxi.com.cn',
    keyword: '爱游戏',
    tagline: '发现好游戏，从这里开始',
    contactEmail: 'support@zhapp-aiyouxi.com.cn'
  };

  // 卡片数据
  const tipCards = [
    { id: 1, title: '欢迎访问', content: '本站提供大量精选游戏，点击即可开始畅玩。' },
    { id: 2, title: '新手上路', content: '首次访问请查看帮助中心，快速了解平台功能。' },
    { id: 3, title: '每日推荐', content: '每天都有新的' + siteInfo.keyword + '推荐，别错过哦。' }
  ];

  // 关键词徽章列表
  const badgeList = [
    { label: '热门', color: '#e74c3c' },
    { label: '最新', color: '#2ecc71' },
    { label: siteInfo.keyword, color: '#3498db' },
    { label: '免费', color: '#f39c12' }
  ];

  // 访问说明
  const accessNote = {
    title: '如何使用本站',
    steps: [
      '打开浏览器，访问 ' + siteInfo.baseUrl,
      '浏览首页推荐列表或使用搜索功能',
      '点击任意游戏卡片查看详情',
      '点击“开始游戏”按钮即可体验'
    ]
  };

  // DOM 操作工具
  function createElement(tag, className, innerHTML) {
    const el = document.createElement(tag);
    if (className) el.className = className;
    if (innerHTML) el.innerHTML = innerHTML;
    return el;
  }

  function appendChildren(parent, children) {
    children.forEach(child => {
      if (child) parent.appendChild(child);
    });
  }

  // 构建提示卡片区域
  function buildTipCards() {
    const container = createElement('div', 'tip-cards');
    tipCards.forEach(card => {
      const cardEl = createElement('div', 'tip-card');
      const titleEl = createElement('h3', 'tip-card-title', card.title);
      const contentEl = createElement('p', 'tip-card-content', card.content);
      appendChildren(cardEl, [titleEl, contentEl]);
      container.appendChild(cardEl);
    });
    return container;
  }

  // 构建关键词徽章区
  function buildBadges() {
    const container = createElement('div', 'keyword-badges');
    badgeList.forEach(badge => {
      const span = createElement('span', 'badge', badge.label);
      span.style.backgroundColor = badge.color;
      span.style.color = '#fff';
      span.style.padding = '4px 10px';
      span.style.borderRadius = '12px';
      span.style.margin = '4px';
      span.style.display = 'inline-block';
      span.style.fontSize = '14px';
      container.appendChild(span);
    });
    return container;
  }

  // 构建访问说明
  function buildAccessNote() {
    const container = createElement('div', 'access-note');
    const titleEl = createElement('h2', 'access-note-title', accessNote.title);
    const list = createElement('ol', 'access-note-steps');
    accessNote.steps.forEach(step => {
      const li = createElement('li', null, step);
      list.appendChild(li);
    });
    appendChildren(container, [titleEl, list]);
    return container;
  }

  // 主构建函数
  function buildPageHelper() {
    const wrapper = createElement('div', 'site-helper');
    const cards = buildTipCards();
    const badges = buildBadges();
    const note = buildAccessNote();
    appendChildren(wrapper, [cards, badges, note]);

    // 插入页面底部
    const body = document.body;
    if (body) {
      body.appendChild(wrapper);
    }
  }

  // 初始化样式
  function injectStyles() {
    const style = document.createElement('style');
    style.textContent = `
      .site-helper {
        max-width: 800px;
        margin: 20px auto;
        padding: 16px;
        font-family: Arial, sans-serif;
        background: #f9f9f9;
        border-radius: 8px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      }
      .tip-cards {
        display: flex;
        gap: 16px;
        flex-wrap: wrap;
        margin-bottom: 20px;
      }
      .tip-card {
        flex: 1 1 200px;
        background: #fff;
        border-radius: 6px;
        padding: 12px;
        box-shadow: 0 1px 4px rgba(0,0,0,0.08);
      }
      .tip-card-title {
        margin: 0 0 6px 0;
        font-size: 18px;
        color: #333;
      }
      .tip-card-content {
        margin: 0;
        color: #555;
      }
      .keyword-badges {
        margin-bottom: 20px;
      }
      .access-note {
        background: #fff;
        border-radius: 6px;
        padding: 12px 16px;
      }
      .access-note-title {
        margin: 0 0 10px 0;
        font-size: 20px;
      }
      .access-note-steps li {
        margin-bottom: 6px;
        color: #444;
      }
    `;
    document.head.appendChild(style);
  }

  // 启动
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      injectStyles();
      buildPageHelper();
    });
  } else {
    injectStyles();
    buildPageHelper();
  }

})();