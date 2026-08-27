/* ============================================================
   I18N — Language switcher (EN / 中文)
   Detects browser language, applies translations, remembers choice.
   ============================================================ */

(function() {
  'use strict';

  var translations = {
    en: {
      pageTitle: 'Jingcheng Cao',
      heroName: 'Jingcheng Cao',
      heroSubtitle: 'Mechanical Engineering × Digital Business',
      eduTitle: 'Education',
      eduSchool1: 'Zhejiang University–University of Illinois Urbana-Champaign Institute (ZJUI)',
      eduDegree1: 'ZJUI · B.Eng. Mechanical Engineering · Expected graduation 2028',
      eduDetail1: 'Dual-degree program: B.Eng. from ZJU + B.S. from UIUC<br>Fully English-taught environment',
      eduTag1_1: 'Statics',
      eduTag1_2: 'Dynamics',
      eduTag1_3: 'Thermodynamics',
      eduTag1_4: 'Mechanics of Materials',
      eduTag1_5: 'CAD / Engineering Drawing',
      eduSchool2: 'Zhejiang University International Business School (ZIBS)',
      eduDegree2: 'ZIBS · Digital Intelligence Organization Micro-minor · Sep 2025 – Present',
      eduHighlight2: 'Interdisciplinary',
      eduTag2_1: 'Social Media Marketing',
      eduTag2_2: 'Technology & Organization',
      eduTag2_3: 'Innovation Strategy Management',
      eduTag2_4: 'Digital Intelligence Operations',
      eduTag2_5: 'Digital Intelligence Leadership',
      expTitle: 'Experience',
      exp1Date: 'Oct 2024 – Jun 2025',
      exp1Title: 'Student Union Officer',
      exp1Subtitle: 'ZJUI Student Union',
      exp1Desc: 'Helped plan and organize large campus events including the welcome gala, lawn music festival, and club carnival, developing cross-department communication and event coordination skills.',
      exp2Date: 'Jul 2025',
      exp2Title: 'China International College Students’ Innovation Competition',
      exp2Subtitle: 'Silver Award · Singapore Regional',
      exp2Desc: 'Participated in innovation project design, led technical proposal writing and result presentation, and won a Silver Award at the Singapore regional round.',
      exp3Date: 'Jun – Jul 2025',
      exp3Title: 'Humanoid Robot Design for Underwater Operation',
      exp3Subtitle: 'Summer Research · Outstanding Summer Research Poster Award',
      exp3Desc: 'Contributed to mechanical structure design, using Fusion 360 for kinematic simulation and structural optimization; received the Outstanding Summer Research Poster Award.',
      exp4Date: 'Jul – Aug 2025',
      exp4Title: 'Jiangsu Tianming Machinery Co., Ltd.',
      exp4Subtitle: 'Engineering Assistant · TM-11 Turbojet Engine',
      exp4Desc: 'Participated in the full engine development cycle—design optimization, component assembly, and ground testing; produced 3D models and engineering drawings with SolidWorks; assisted in test-data collection and performance analysis.',
      exp5Date: 'Fall Semester 2025',
      exp5Title: 'Design for Manufacturability (DFM) Course Project',
      exp5Subtitle: 'Team Lead · Top-Ranked Project',
      exp5Desc: 'Led the team from concept design to digital modeling with SolidWorks and Fusion 360, produced a physical prototype via 3D printing, and ranked first among all course teams.',
      exp6Date: 'Jan 2026',
      exp6Title: 'UN Headquarters Geneva Field Exchange Program',
      exp6Subtitle: 'Outstanding Delegate',
      exp6Desc: 'Joined the Zhejiang University youth delegation on a field exchange visit to the UN headquarters in Geneva and received the “Outstanding Delegate” honor.',
      exp7Date: 'Mar 2026 – Jun 2026',
      exp7Title: 'Innovation Lab Assistant',
      exp7Desc: 'Managed daily operation, maintenance, and training for the lab’s 3D printers and laser cutters, serving 50+ users in total.',
      exp8Date: 'Jul – Aug 2026',
      exp8Title: 'Linde APAC',
      exp8Subtitle: 'Commercial Department Intern',
      exp8Desc: 'Supported internal digitalization initiatives, helped build a Microsoft 365 Copilot contract-review agent, and produced a compressor market research report.',
      skillTitle: 'Skills & Languages',
      skillH1: 'Engineering Design & Manufacturing',
      skillTag1_3: '3D Printing (FDM/SLA)',
      skillTag1_4: 'Laser Cutting',
      skillTag1_5: 'CAD / Engineering Drawing',
      skillH2: 'Programming & Data',
      skillTag2_3: 'Data Analysis & Visualization',
      skillH3: 'Languages',
      langChineseNumber: 'Native',
      langChineseLabel: 'Chinese',
      visionText: 'Starting from the technical depth of <em>Mechanical Engineering</em><br>Understanding markets and organizations through a <em>business lens</em><br>Ultimately moving toward <em>Product Management</em>—',
      visionHighlight: 'Becoming the person who translates technology into value.',
      contactLabelPhone: 'Phone',
      contactLabelEmail: 'Email',
      contactLabelLocation: 'Location',
      contactValueLocation: 'Hangzhou',
      footerNote: '© 2026 Jingcheng Cao'
    },

    zh: {
      pageTitle: '曹竟成 · Jingcheng Cao',
      heroName: '曹竟成',
      heroSubtitle: '机械工程 × 数智管理',
      eduTitle: '教育背景',
      eduSchool1: '浙江大学-伊利诺伊大学香槟分校联合学院',
      eduDegree1: 'ZJUI · 机械工程 本科 · 预计 2028 年毕业',
      eduDetail1: 'ZJU 工学学士 + UIUC 理学学士双学位项目在读<br>全英文授课环境',
      eduTag1_1: '静力学',
      eduTag1_2: '动力学',
      eduTag1_3: '热力学',
      eduTag1_4: '材料力学',
      eduTag1_5: 'CAD 工程制图',
      eduSchool2: '浙江大学国际商学院',
      eduDegree2: 'ZIBS · 数智组织微专业 · 2025.9 – 至今',
      eduHighlight2: '跨学科',
      eduTag2_1: '社交媒体营销',
      eduTag2_2: '技术与组织',
      eduTag2_3: '创新策略管理',
      eduTag2_4: '数字智能运营',
      eduTag2_5: '数智领导力',
      expTitle: '经历',
      exp1Date: '2024 年 10 月 – 2025 年 6 月',
      exp1Title: '学生会干事',
      exp1Subtitle: 'ZJUI 学生会',
      exp1Desc: '参与策划并组织迎新晚会、草地音乐节、社团嘉年华等校级大型活动，锻炼跨部门沟通与活动统筹能力。',
      exp2Date: '2025.7',
      exp2Title: '中国国际大学生创新大赛',
      exp2Subtitle: '新加坡区域赛银奖',
      exp2Desc: '参与创新项目设计，负责技术方案撰写与成果展示，荣获新加坡区域赛银奖。',
      exp3Date: '2025 年 6 – 7 月',
      exp3Title: '面向水下操作的人型机器人设计',
      exp3Subtitle: '暑期科研 · 优秀暑研展报奖',
      exp3Desc: '参与机械结构方案设计，使用 Fusion 360 进行运动学仿真与结构优化，获 Outstanding Summer Research Poster Award。',
      exp4Date: '2025 年 7 – 8 月',
      exp4Title: '江苏天明机械有限公司',
      exp4Subtitle: '工程师助理 · TM-11 型涡喷发动机',
      exp4Desc: '参与发动机设计优化、零部件装配及地面试车全流程；运用 SolidWorks 完成三维建模与工程图纸输出；协助试车数据采集与性能分析。',
      exp5Date: '2025 年秋季学期',
      exp5Title: '可制造性设计（DFM）课程项目',
      exp5Subtitle: '小组长 · 作品评分第一名',
      exp5Desc: '带领团队使用 SolidWorks 与 Fusion 360 完成概念设计到数字建模，利用 3D 打印制造实物原型，在全部课程小组中获评第一。',
      exp6Date: '2026 年 1 月',
      exp6Title: '联合国驻日内瓦总部实地交流项目',
      exp6Subtitle: '优秀团员',
      exp6Desc: '参加浙江大学青年代表团赴日内瓦联合国总部实地交流访问，获得“优秀团员”荣誉。',
      exp7Date: '2026 年 3 月 – 2026 年 6 月',
      exp7Title: '创新实验室助理',
      exp7Desc: '负责实验室 3D 打印机与激光切割机的日常管理、维护与操作培训，累计服务 50+ 人次。',
      exp8Date: '2026 年 7 – 8 月',
      exp8Title: 'Linde APAC',
      exp8Subtitle: '商务部实习生',
      exp8Desc: '支持公司内部数字化建设，协助搭建基于 Microsoft 365 Copilot 的合同审查 agent，并制作压缩机市场调研报告。',
      skillTitle: '技能与语言',
      skillH1: '工程设计与制造',
      skillTag1_3: '3D 打印 (FDM/SLA)',
      skillTag1_4: '激光切割',
      skillTag1_5: 'CAD 工程制图',
      skillH2: '编程与数据',
      skillTag2_3: '数据分析与可视化',
      skillH3: '语言能力',
      langChineseNumber: '母语',
      langChineseLabel: '中文',
      visionText: '从<em>机械工程</em>的技术深度出发<br>借<em>商科视角</em>理解市场与组织<br>最终走向<em>产品经理</em>——',
      visionHighlight: '做那个把技术翻译成价值的人。',
      contactLabelPhone: '电话',
      contactLabelEmail: '邮箱',
      contactLabelLocation: '所在地',
      contactValueLocation: '杭州',
      footerNote: '© 2026 曹竟成'
    }
  };

  function detectLang() {
    try {
      var saved = localStorage.getItem('lang');
      if (saved === 'en' || saved === 'zh') return saved;
    } catch (e) {}
    var nav = (navigator.language || navigator.userLanguage || '').toLowerCase();
    return nav.indexOf('zh') === 0 ? 'zh' : 'en';
  }

  function applyLanguage(lang) {
    window.currentLang = lang;
    document.documentElement.setAttribute('lang', lang === 'zh' ? 'zh-CN' : 'en');

    document.querySelectorAll('[data-i18n]').forEach(function(el) {
      var key = el.getAttribute('data-i18n');
      var value = translations[lang] && translations[lang][key];
      if (value != null) el.textContent = value;
    });

    document.querySelectorAll('[data-i18n-html]').forEach(function(el) {
      var key = el.getAttribute('data-i18n-html');
      var value = translations[lang] && translations[lang][key];
      if (value != null) el.innerHTML = value;
    });

    document.querySelectorAll('.lang-btn').forEach(function(btn) {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });

    try { localStorage.setItem('lang', lang); } catch (e) {}

    if (typeof window.onLanguageChange === 'function') window.onLanguageChange(lang);
  }

  function init() {
    applyLanguage(detectLang());
    document.querySelectorAll('.lang-btn').forEach(function(btn) {
      btn.addEventListener('click', function() {
        applyLanguage(btn.getAttribute('data-lang'));
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
