/* ============================================================
   EXPAND CARD — Click timeline card → expand to center modal
   Bilingual (en / zh), keyed by data-detail attribute.
   ============================================================ */

(function() {
  'use strict';

  // ── Detailed content for each timeline item ────────────
  var details = {
    'student-union': {
      icon: '🎤',
      en: {
        title: 'Student Union Officer',
        subtitle: 'ZJUI Student Union · Oct 2024 – Jun 2025',
        body: "<p>Joined the ZJUI Student Union as a freshman officer, taking a hands-on role in planning and executing several of the college’s signature events.</p>"
            + "<p><strong>Welcome Gala:</strong> Handled venue setup and flow coordination, participating in the full process from planning to execution. Coordinated with performers and stage/equipment staff to ensure lighting, sound, and other stage effects, while also performing on stage as a singer. The gala reached the entire incoming class.</p>"
            + "<p><strong>Lawn Music Festival:</strong> Planned interactive segments and helped promote the event on campus. The festival attracted 200+ students across colleges, becoming one of the hottest campus events of the semester, and I also performed on stage as a singer.</p>"
            + "<p><strong>Club Carnival:</strong> Coordinated venue allocation and traffic planning for 20+ student clubs, and introduced a “stamp-collection” mechanism for the first time, significantly boosting participation and club exposure.</p>"
            + "<p>This experience taught me event planning, cross-department communication, and on-the-spot improvisation from an executor’s perspective—skills that later translated directly into team management when I led course project teams.</p>"
      },
      zh: {
        title: '学生会干事',
        subtitle: 'ZJUI 学生会 · 2024.10 – 2025.6',
        body: "<p>大一加入 ZJUI 学生会，作为干事深度参与了学院多项品牌活动的策划与执行。</p>"
            + "<p>【迎新晚会】负责场地布置与流程协调，参与学生会团队从方案到执行的全流程，负责演员与场地设备工作人员的对接，保证灯光、音响等舞台效果，同时作为歌手上台表演，晚会覆盖全院新生。</p>"
            + "<p>【草地音乐节】策划互动环节并参与校园宣传，活动吸引了跨学院 200+ 名学生参与，成为当学期热度最高的校园活动之一，同时作为歌手上台表演。</p>"
            + "<p>【社团嘉年华】对接 20+ 社团完成场地分配与动线规划，首次引入“打卡集章”机制，大幅提升了参与率和社团曝光度。</p>"
            + "<p>这段经历让我从一个执行者视角理解了活动策划、跨部门沟通与现场应变——后来做课程项目组长时，这些经验直接转化为了团队管理能力。</p>"
      }
    },

    'innovation-competition': {
      icon: '🏆',
      en: {
        title: 'China International College Students’ Innovation Competition',
        subtitle: 'Singapore Regional · Silver Award',
        body: "<p>As a core team member in the 2025 China International College Students’ Innovation Competition, our project focused on the technical development and commercial validation of a novel early-detection method for diabetes.</p>"
            + "<p><strong>My Role:</strong> Responsible for technical proposal writing and result presentation. Participated in the engineering validation of the detection device, and produced the full pitch deck and demo materials.</p>"
            + "<p><strong>Singapore Regional:</strong> Competing against teams from top universities across Asia, our pitch deck and business plan received praise from judges as “combining engineering feasibility with business logic,” and we ultimately won a Silver Award at the Singapore regional round. This experience was my first systematic reflection on “how technology becomes value,” and a key reason I later decided to pursue the Digital Intelligence Organization micro-minor and move toward a product management career.</p>"
      },
      zh: {
        title: '中国国际大学生创新大赛',
        subtitle: '新加坡区域赛 · 银奖',
        body: "<p>作为团队核心成员参加 2025 年中国国际大学生创新大赛，项目聚焦于糖尿病的新型早期检测方式的技术落地与商业化验证。</p>"
            + "<p>【我的角色】负责技术方案撰写与成果展示。参与对检测设备的工程技术方面验证，制作了全套路演 PPT 与演示物料。</p>"
            + "<p>【新加坡区域赛】面对来自亚洲多所顶尖高校的竞争团队，我们制作的路演 PPT 以及商业计划书获得了评委“工程可行性与商业逻辑兼备”的评价，最终斩获新加坡区域赛银奖。这次经历让我第一次系统性地思考“技术如何转化为价值”，也是我后来决定辅修数智组织微专业、走向产品经理方向的重要契机。</p>"
      }
    },

    'robot-research': {
      icon: '🤖',
      en: {
        title: 'Humanoid Robot Design for Underwater Operation',
        subtitle: 'Summer Research · Jun – Jul 2025',
        body: "<p>Participated in a faculty-guided summer research project aiming to design a mechanical structure for a humanoid robot intended for underwater operations.</p>"
            + "<p><strong>Structural Design:</strong> Modeled the robot’s full-body mechanical structure in SolidWorks, with a focus on optimizing the transmission scheme for the shoulder and wrist degrees of freedom. Verified the 6-DOF robotic arm’s workspace through kinematic simulation, and innovatively proposed a rotatable suction-cup design to ensure the robot’s stable operation underwater.</p>"
            + "<p><strong>Cross-Disciplinary Collaboration:</strong> Worked closely with the electrical team (motor selection and control) and the software team (ROS motion planning) to ensure the mechanical interfaces matched the electronic control scheme.</p>"
            + "<p>The project results were presented as an academic poster and received the Outstanding Summer Research Poster Award. This was my first complete research loop of “problem definition → solution design → simulation verification → result presentation.”</p>"
      },
      zh: {
        title: '面向水下操作的人型机器人设计',
        subtitle: '暑期科研 · 2025.6 – 2025.7',
        body: "<p>参与由学院导师指导的暑期科研项目，目标是设计一款面向水下作业场景的人型机器人机械结构方案。</p>"
            + "<p>【结构设计】使用 SolidWorks 完成了机器人全身的机械结构建模，重点优化了肩部和腕部自由度的传动方案。通过运动学仿真验证了 6-DOF 机械臂的工作空间范围。同时，创新性地提出可转动吸盘方案，保障了机器人在水下的稳定工作状态。</p>"
            + "<p>【跨学科协作】与电气组（电机选型与控制）和软件组（ROS 运动规划）保持紧密同步，确保机械接口与电控方案匹配。</p>"
            + "<p>项目成果以学术海报形式展示，获得 Outstanding Summer Research Poster Award（优秀暑研展报奖）。这是我第一次完整经历“问题定义 → 方案设计 → 仿真验证 → 成果展示”的科研闭环。</p>"
      }
    },

    'jiangsu-tianming': {
      icon: '⚙️',
      en: {
        title: 'Jiangsu Tianming Machinery Co., Ltd.',
        subtitle: 'Engineering Assistant · TM-11 Turbojet Engine · Jul – Aug 2025',
        body: "<p>Completed a one-month engineering assistant internship at Jiangsu Tianming Machinery Co., Ltd. during the summer between my freshman and sophomore years, deeply involved in the development of the TM-11 micro turbojet engine.</p>"
            + "<p><strong>Design &amp; Modeling:</strong> Used SolidWorks to complete 3D modeling of key components including the compressor impeller, combustion chamber casing, and exhaust nozzle. Assisted in producing GB-standard engineering drawings, with dimensional and geometric tolerances reviewed and approved by the supervising engineer.</p>"
            + "<p><strong>Assembly Process:</strong> Assisted in the full assembly of 2 engine prototypes, including rotor dynamic-balancing correction, bearing preload adjustment, and combustion-chamber sealing tests. Recorded 15 key process points during assembly, helping optimize the initial draft of the assembly work instructions.</p>"
            + "<p><strong>Ground Testing:</strong> Participated in engine bench testing, responsible for collecting and organizing test data (thrust, rotational speed, exhaust temperature, fuel flow, etc.), and assisted in analyzing the engine’s performance curves under different throttle conditions.</p>"
            + "<p>This experience let me truly step into a factory, get my hands on an engine, and understand that “every annotation on a drawing corresponds to a process on the shop floor”—engineering intuition that can’t be taught in the classroom.</p>"
      },
      zh: {
        title: '江苏天明机械有限公司',
        subtitle: '工程师助理 · TM-11 型涡喷发动机 · 2025.7 – 2025.8',
        body: "<p>大一至大二暑假在江苏天明机械有限公司完成为期一个月的工程师助理实习，深度参与了 TM-11 型微型涡喷发动机的研制流程。</p>"
            + "<p>【设计建模】运用 SolidWorks 完成了压气机叶轮、燃烧室壳体及尾喷管等关键零部件的三维建模，协助制作符合 GB 标准的工程图纸，尺寸公差与形位公差标注均经过主管工程师审核通过。</p>"
            + "<p>【装配工艺】协助完成了 2 台发动机样机的整机装配，包括转子动平衡校正、轴承预紧力调整及燃烧室密封测试。记录了装配过程中的 15 项工艺要点，帮助优化了装配作业指导书初稿。</p>"
            + "<p>【地面试车】参与了发动机台架试车试验，负责试车数据（推力、转速、排气温度、燃油流量等）的采集与整理，协助分析了发动机在不同油门状态下的性能曲线。</p>"
            + "<p>这段经历让我真正走进了工厂、摸到了发动机、理解了“设计图纸上的每一个标注都对应着车间里的一道工序”——这是在课堂上学不到的工程直觉。</p>"
      }
    },

    'dfm': {
      icon: '📐',
      en: {
        title: 'Design for Manufacturability (DFM) Course Project',
        subtitle: 'Team Lead · Top-Ranked Project · Fall Semester 2025',
        body: "<p>My most representative course project at ZJUI. As the team lead of a 4-person group, I led the team through a complete product-development process from concept to physical artifact.</p>"
            + "<p><strong>Concept Design:</strong> Organized brainstorming and requirements analysis, ultimately settling on a product concept that balanced functionality and manufacturability. Used Fusion 360 to complete assembly modeling and topology optimization of key components.</p>"
            + "<p><strong>DFM Analysis:</strong> Against the constraints of FDM 3D printing, iteratively refined the design with wall-thickness optimization, overhang-angle adjustment, and support-structure minimization—cutting print time by about 30% while maintaining structural strength.</p>"
            + "<p><strong>Prototype Fabrication:</strong> Used the lab’s FDM printers to print, remove supports, sand, and assemble the physical prototype. Assembly accuracy met the design tolerance requirements, and functional verification passed on the first attempt.</p>"
            + "<p><strong>Results:</strong> Ranked first among all 12 course teams. Reviewer feedback specifically noted the “high consistency between the design’s manufacturability and the actual prototype.” As team lead, I learned how to assign tasks, manage milestones, and balance the ideal and the practical in technical decisions.</p>"
      },
      zh: {
        title: '可制造性设计（DFM）课程项目',
        subtitle: '小组长 · 作品评分第一名 · 2025 年秋季学期',
        body: "<p>这是我在 ZJUI 最具代表性的一次课程项目经历。作为 4 人团队的小组长，带领团队完成了从概念到实物的完整产品开发流程。</p>"
            + "<p>【概念设计】组织团队进行头脑风暴与需求分析，最终确定了一个兼具功能性与可制造性的产品方案。使用 Fusion 360 完成了装配体建模以及关键部件的拓扑优化。</p>"
            + "<p>【DFM 分析】针对 3D 打印（FDM）工艺约束，对设计方案进行了壁厚优化、悬垂角度调整、支撑结构最小化等迭代修改，将打印时间缩短了约 30% 的同时保证了结构强度。</p>"
            + "<p>【原型制造】利用实验室的 FDM 打印机完成了实物原型的打印、去支撑、打磨与装配。原型装配精度达到设计公差要求，功能验证一次通过。</p>"
            + "<p>【项目成果】在全课程 12 个小组中获得作品评分第一名。评审反馈特别提到了“设计方案的制造可行性与实际原型的高度一致性”。作为组长，我学会了如何分配任务、把控节点、在技术决策中平衡理想与现实。</p>"
      }
    },

    'un-geneva': {
      icon: '🇺🇳',
      flag: 'assets/un-flag.svg',
      en: {
        title: 'UN Headquarters Geneva Field Exchange Program',
        subtitle: 'Outstanding Delegate · Jan 2026',
        body: "<p>In January 2026, as a member of the Zhejiang University youth delegation, I traveled to Geneva, Switzerland for a field exchange program at the UN headquarters—a profoundly eye-opening experience.</p>"
            + "<p><strong>UN Agency Visits:</strong> Visited the UN Office at Geneva (Palais des Nations), the World Health Organization (WHO), and the International Labour Organization (ILO), attending specialized lectures by UN officials on global governance and the Sustainable Development Goals (SDGs).</p>"
            + "<p><strong>Model UN:</strong> Participated in a simulated multilateral consultation themed “national responsibilities for environmental protection,” speaking and negotiating as the representative of the United Kingdom, and experiencing the dual demands of “national position + diplomatic expression” in international negotiation.</p>"
            + "<p><strong>Cross-Cultural Exchange:</strong> Engaged in deep dialogue with youth representatives from 15+ countries and UN officials, covering topics from differences in education systems to technology-innovation pathways and global career development. My ability to communicate fluidly across cultural contexts was highly recognized by the delegation’s mentors.</p>"
            + "<p>At the end of the program I was awarded the “Outstanding Delegate” honor. This experience made me realize—technical ability is hard currency, but understanding needs and expression across cultural contexts is the real passport for an engineer going global.</p>"
      },
      zh: {
        title: '联合国驻日内瓦总部实地交流项目',
        subtitle: '优秀团员 · 2026 年 1 月',
        body: "<p>2026 年 1 月，作为浙江大学青年代表团成员赴瑞士日内瓦，参加联合国总部实地交流项目。这是一次深刻拓宽全球视野的经历。</p>"
            + "<p>【联合国机构参访】实地走访了联合国日内瓦办事处（万国宫）、世界卫生组织（WHO）、国际劳工组织（ILO）等机构，参加了由联合国官员授课的关于全球治理、可持续发展目标（SDGs）的专题课程。</p>"
            + "<p>【模拟联合国】参与了一场以“环境保护的各国责任”为主题的模拟多边磋商，作为英国代表进行发言与谈判，体验了国际协商中“国家立场 + 外交表达”的双重要求。</p>"
            + "<p>【跨文化交流】与来自 15+ 个国家的青年代表以及联合国官员进行了深度对话，话题涵盖教育体系差异、技术创新路径和全球职业发展。在各种文化背景中自如切换的沟通能力得到了代表团导师的高度认可。</p>"
            + "<p>项目结束时被授予“优秀团员”荣誉。这次经历让我深刻意识到——技术能力是硬通货，但理解不同文化语境下的需求与表达，才是工程人才走向世界的通行证。</p>"
      }
    },

    'lab-assistant': {
      icon: '🔧',
      en: {
        title: 'Innovation Lab Assistant',
        subtitle: 'ZJUI Innovation Lab · Mar 2026 – Jun 2026',
        body: "<p>Worked as a student assistant at the ZJUI Innovation Lab, responsible for the daily operation of core fabrication equipment and student training.</p>"
            + "<p><strong>Equipment Management:</strong> Managed 6 FDM 3D printers and 2 laser cutters, training 50+ users in total. Created troubleshooting flowcharts for common issues (clogged nozzles, warping, layer shifting, etc.).</p>"
            + "<p><strong>Technical Support:</strong> Assisted multiple course project teams with prototype fabrication, providing DFM-oriented design feedback (wall-thickness optimization, support-structure design, tolerance fitting, etc.), helping 3 teams earn A-level grades in course reviews.</p>"
            + "<p>This role took me from “knowing how to use the equipment” to “understanding manufacturing,” giving me an intuitive grasp of the process limits and design constraints of additive manufacturing.</p>"
      },
      zh: {
        title: '创新实验室助理',
        subtitle: 'ZJUI 创新实验室 · 2026.3 – 2026.6',
        body: "<p>在 ZJUI 创新实验室担任学生助理，负责核心制造设备的日常运营与学生培训。</p>"
            + "<p>【设备管理】管理 6 台 FDM 3D 打印机及 2 台激光切割机，累计培训 50+ 人次。针对常见问题（堵头、翘边、层移等）制作了故障排查流程图。</p>"
            + "<p>【技术支持】协助多个课程项目团队完成原型制造，从 DFM 角度提供设计反馈（如壁厚优化、支撑结构设计、公差配合等），帮助 3 个团队在课程评审中获得 A 级评价。</p>"
            + "<p>这段工作让我从“会用设备”进化到“理解制造”，对增材制造的工艺边界和设计约束有了直观认知。</p>"
      }
    },

    'linde-apac': {
      icon: '💼',
      en: {
        title: 'Linde APAC',
        subtitle: 'Commercial Department · Jul – Aug 2026',
        body: "<p>Completed a summer internship in the Commercial Department of Linde APAC, where I worked at the intersection of business operations and digital technology within a global industrial gases company.</p>"
            + "<p><strong>Internal Digitalization:</strong> Supported the company’s internal digitalization initiatives, helping digitize and streamline business workflows and documentation to improve efficiency across the commercial team.</p>"
            + "<p><strong>Contract Review Agent:</strong> Assisted in building a contract-review agent using Microsoft 365 Copilot, contributing to requirement analysis, prompt design, knowledge-base setup, and testing to help the team review contracts more efficiently.</p>"
            + "<p><strong>Compressor Market Research:</strong> Produced a compressor market research report, collecting and analyzing market data, competitor information, and industry trends to support commercial decision-making.</p>"
            + "<p>This experience connected my engineering background with real commercial workflows, giving me hands-on exposure to how AI and data are applied in business operations.</p>"
      },
      zh: {
        title: 'Linde APAC',
        subtitle: '商务部 · 2026 年 7 – 8 月',
        body: "<p>在 Linde APAC 商务部完成暑期实习，在一家全球工业气体企业里，将商业运营与数字技术相结合。</p>"
            + "<p>【内部数字化】支持公司内部数字化建设，协助梳理并优化业务流程与文档，提升商业团队工作效率。</p>"
            + "<p>【合同审查 Agent】协助搭建基于 Microsoft 365 Copilot 的合同审查 agent，参与需求分析、提示词设计、知识库搭建与测试，帮助团队更高效地审查合同。</p>"
            + "<p>【压缩机市场调研】制作压缩机市场调研报告，收集并分析市场数据、竞品信息与行业趋势，为商业决策提供支持。</p>"
            + "<p>这段经历将我的工程背景与真实的商业流程连接起来，让我亲身体验了 AI 与数据如何落地到商业运营中。</p>"
      }
    }
  };

  // ── Build modal DOM ──────────────────────────────────
  var overlay = document.createElement('div');
  overlay.className = 'card-overlay';
  overlay.innerHTML = ''
    + '<div class="card-modal">'
    + '  <button class="card-modal-close">&times;</button>'
    + '  <div class="card-modal-icon"></div>'
    + '  <h2 class="card-modal-title"></h2>'
    + '  <p class="card-modal-subtitle"></p>'
    + '  <div class="card-modal-body"></div>'
    + '</div>';
  document.body.appendChild(overlay);

  var modal = overlay.querySelector('.card-modal');
  var currentDetailId = null;

  function renderDetail(id) {
    var entry = details[id];
    if (!entry) return;
    var lang = (window.currentLang === 'zh') ? 'zh' : 'en';
    var d = entry[lang] || entry.en;
    var iconEl = modal.querySelector('.card-modal-icon');
    if (entry.flag) {
      iconEl.innerHTML = '<img src="' + entry.flag + '" alt="United Nations flag">';
    } else {
      iconEl.textContent = entry.icon;
    }
    modal.querySelector('.card-modal-title').textContent = d.title;
    modal.querySelector('.card-modal-subtitle').textContent = d.subtitle;
    modal.querySelector('.card-modal-body').innerHTML = d.body;
  }

  function openModal() {
    overlay.classList.add('is-open');
    modal.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    overlay.classList.remove('is-open');
    modal.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  overlay.addEventListener('click', function(e) {
    if (e.target === overlay) closeModal();
  });
  overlay.querySelector('.card-modal-close').addEventListener('click', closeModal);
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') closeModal();
  });

  // ── Attach click to each timeline card ───────────────
  var cards = document.querySelectorAll('.timeline-card');
  cards.forEach(function(card) {
    card.style.cursor = 'pointer';
    card.addEventListener('click', function() {
      var id = card.getAttribute('data-detail');
      if (!id || !details[id]) return;
      currentDetailId = id;
      renderDetail(id);
      openModal();
    });
  });

  // Re-render the open modal when the language changes.
  window.onLanguageChange = function() {
    if (currentDetailId && overlay.classList.contains('is-open')) {
      renderDetail(currentDetailId);
    }
  };

})();
