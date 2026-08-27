/* ============================================================
   EXPAND CARD — Click timeline card → expand to center modal
   ============================================================ */

(function() {
  'use strict';

  // ── Detailed content for each timeline item ────────────
  var details = {
    'Student Union Officer': {
      title: '🎤 Student Union Officer',
      subtitle: 'ZJUI Student Union · Oct 2024 – Jun 2025',
      body: "<p>Joined the ZJUI Student Union as a freshman officer, taking a hands-on role in planning and executing several of the college’s signature events.</p>"
          + "<p><strong>Welcome Gala:</strong> Handled venue setup and flow coordination, participating in the full process from planning to execution. Coordinated with performers and stage/equipment staff to ensure lighting, sound, and other stage effects, while also performing on stage as a singer. The gala reached the entire incoming class.</p>"
          + "<p><strong>Lawn Music Festival:</strong> Planned interactive segments and helped promote the event on campus. The festival attracted 200+ students across colleges, becoming one of the hottest campus events of the semester, and I also performed on stage as a singer.</p>"
          + "<p><strong>Club Carnival:</strong> Coordinated venue allocation and traffic planning for 20+ student clubs, and introduced a “stamp-collection” mechanism for the first time, significantly boosting participation and club exposure.</p>"
          + "<p>This experience taught me event planning, cross-department communication, and on-the-spot improvisation from an executor’s perspective—skills that later translated directly into team management when I led course project teams.</p>",
      icon: '🎤 '
    },

    'China International College Students’ Innovation Competition': {
      title: '🏆 China International College Students’ Innovation Competition (2025)',
      subtitle: 'Singapore Regional · Silver Award',
      body: "<p>As a core team member in the 2025 China International College Students’ Innovation Competition, our project focused on the technical development and commercial validation of a novel early-detection method for diabetes.</p>"
          + "<p><strong>My Role:</strong> Responsible for technical proposal writing and result presentation. Participated in the engineering validation of the detection device, and produced the full pitch deck and demo materials.</p>"
          + "<p><strong>Singapore Regional:</strong> Competing against teams from top universities across Asia, our pitch deck and business plan received praise from judges as “combining engineering feasibility with business logic,” and we ultimately won a Silver Award at the Singapore regional round. This experience was my first systematic reflection on “how technology becomes value,” and a key reason I later decided to pursue the Digital Intelligence Organization micro-minor and move toward a product management career.</p>",
      icon: '🏆 '
    },

    'Innovation Lab Assistant': {
      title: '🔧 Innovation Lab Assistant',
      subtitle: 'ZJUI Innovation Lab · Mar 2026 – Jun 2026',
      body: "<p>Worked as a student assistant at the ZJUI Innovation Lab, responsible for the daily operation of core fabrication equipment and student training.</p>"
          + "<p><strong>Equipment Management:</strong> Managed 6 FDM 3D printers and 2 laser cutters, training 50+ users in total. Created troubleshooting flowcharts for common issues (clogged nozzles, warping, layer shifting, etc.).</p>"
          + "<p><strong>Technical Support:</strong> Assisted multiple course project teams with prototype fabrication, providing DFM-oriented design feedback (wall-thickness optimization, support-structure design, tolerance fitting, etc.), helping 3 teams earn A-level grades in course reviews.</p>"
          + "<p>This role took me from “knowing how to use the equipment” to “understanding manufacturing,” giving me an intuitive grasp of the process limits and design constraints of additive manufacturing.</p>",
      icon: '🔧 '
    },

    'Humanoid Robot Design for Underwater Operation': {
      title: '🤖 Humanoid Robot Design for Underwater Operation',
      subtitle: 'Summer Research · Jun – Jul 2025',
      body: "<p>Participated in a faculty-guided summer research project aiming to design a mechanical structure for a humanoid robot intended for underwater operations.</p>"
          + "<p><strong>Structural Design:</strong> Modeled the robot’s full-body mechanical structure in SolidWorks, with a focus on optimizing the transmission scheme for the shoulder and wrist degrees of freedom. Verified the 6-DOF robotic arm’s workspace through kinematic simulation, and innovatively proposed a rotatable suction-cup design to ensure the robot’s stable operation underwater.</p>"
          + "<p><strong>Cross-Disciplinary Collaboration:</strong> Worked closely with the electrical team (motor selection and control) and the software team (ROS motion planning) to ensure the mechanical interfaces matched the electronic control scheme.</p>"
          + "<p>The project results were presented as an academic poster and received the Outstanding Summer Research Poster Award. This was my first complete research loop of “problem definition → solution design → simulation verification → result presentation.”</p>",
      icon: '🤖 '
    },

    'Jiangsu Tianming Machinery Co., Ltd.': {
      title: '⚙️ Jiangsu Tianming Machinery Co., Ltd.',
      subtitle: 'Engineering Assistant · TM-11 Turbojet Engine · Jul – Aug 2025',
      body: "<p>Completed a one-month engineering assistant internship at Jiangsu Tianming Machinery Co., Ltd. during the summer between my freshman and sophomore years, deeply involved in the development of the TM-11 micro turbojet engine.</p>"
          + "<p><strong>Design &amp; Modeling:</strong> Used SolidWorks to complete 3D modeling of key components including the compressor impeller, combustion chamber casing, and exhaust nozzle. Assisted in producing GB-standard engineering drawings, with dimensional and geometric tolerances reviewed and approved by the supervising engineer.</p>"
          + "<p><strong>Assembly Process:</strong> Assisted in the full assembly of 2 engine prototypes, including rotor dynamic-balancing correction, bearing preload adjustment, and combustion-chamber sealing tests. Recorded 15 key process points during assembly, helping optimize the initial draft of the assembly work instructions.</p>"
          + "<p><strong>Ground Testing:</strong> Participated in engine bench testing, responsible for collecting and organizing test data (thrust, rotational speed, exhaust temperature, fuel flow, etc.), and assisted in analyzing the engine’s performance curves under different throttle conditions.</p>"
          + "<p>This experience let me truly step into a factory, get my hands on an engine, and understand that “every annotation on a drawing corresponds to a process on the shop floor”—engineering intuition that can’t be taught in the classroom.</p>",
      icon: '⚙️'
    },

    'Design for Manufacturability (DFM) Course Project': {
      title: '📐 Design for Manufacturability (DFM) Course Project',
      subtitle: 'Team Lead · Top-Ranked Project · Fall Semester 2025',
      body: "<p>My most representative course project at ZJUI. As the team lead of a 4-person group, I led the team through a complete product-development process from concept to physical artifact.</p>"
          + "<p><strong>Concept Design:</strong> Organized brainstorming and requirements analysis, ultimately settling on a product concept that balanced functionality and manufacturability. Used Fusion 360 to complete assembly modeling and topology optimization of key components.</p>"
          + "<p><strong>DFM Analysis:</strong> Against the constraints of FDM 3D printing, iteratively refined the design with wall-thickness optimization, overhang-angle adjustment, and support-structure minimization—cutting print time by about 30% while maintaining structural strength.</p>"
          + "<p><strong>Prototype Fabrication:</strong> Used the lab’s FDM printers to print, remove supports, sand, and assemble the physical prototype. Assembly accuracy met the design tolerance requirements, and functional verification passed on the first attempt.</p>"
          + "<p><strong>Results:</strong> Ranked first among all 12 course teams. Reviewer feedback specifically noted the “high consistency between the design’s manufacturability and the actual prototype.” As team lead, I learned how to assign tasks, manage milestones, and balance the ideal and the practical in technical decisions.</p>",
      icon: '📐 '
    },

    'UN Headquarters Geneva Field Exchange Program': {
      title: '🇺🇳 UN Headquarters Geneva Field Exchange Program',
      subtitle: 'Outstanding Delegate · Jan 2026',
      body: "<p>In January 2026, as a member of the Zhejiang University youth delegation, I traveled to Geneva, Switzerland for a field exchange program at the UN headquarters—a profoundly eye-opening experience.</p>"
          + "<p><strong>UN Agency Visits:</strong> Visited the UN Office at Geneva (Palais des Nations), the World Health Organization (WHO), and the International Labour Organization (ILO), attending specialized lectures by UN officials on global governance and the Sustainable Development Goals (SDGs).</p>"
          + "<p><strong>Model UN:</strong> Participated in a simulated multilateral consultation themed “national responsibilities for environmental protection,” speaking and negotiating as the representative of the United Kingdom, and experiencing the dual demands of “national position + diplomatic expression” in international negotiation.</p>"
          + "<p><strong>Cross-Cultural Exchange:</strong> Engaged in deep dialogue with youth representatives from 15+ countries and UN officials, covering topics from differences in education systems to technology-innovation pathways and global career development. My ability to communicate fluidly across cultural contexts was highly recognized by the delegation’s mentors.</p>"
          + "<p>At the end of the program I was awarded the “Outstanding Delegate” honor. This experience made me realize—technical ability is hard currency, but understanding needs and expression across cultural contexts is the real passport for an engineer going global.</p>",
      icon: '🇺🇳'
    },

    'Linde APAC': {
      title: '💼 Linde APAC Commercial Internship',
      subtitle: 'Commercial Department · Jul – Aug 2026',
      body: "<p>Completed a summer internship in the Commercial Department of Linde APAC, where I worked at the intersection of business operations and digital technology within a global industrial gases company.</p>"
          + "<p><strong>Internal Digitalization:</strong> Supported the company’s internal digitalization initiatives, helping digitize and streamline business workflows and documentation to improve efficiency across the commercial team.</p>"
          + "<p><strong>Contract Review Agent:</strong> Assisted in building a contract-review agent using Microsoft 365 Copilot, contributing to requirement analysis, prompt design, knowledge-base setup, and testing to help the team review contracts more efficiently.</p>"
          + "<p><strong>Compressor Market Research:</strong> Produced a compressor market research report, collecting and analyzing market data, competitor information, and industry trends to support commercial decision-making.</p>"
          + "<p>This experience connected my engineering background with real commercial workflows, giving me hands-on exposure to how AI and data are applied in business operations.</p>",
      icon: '💼 '
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

  // ── Close logic ──────────────────────────────────────
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
      var titleEl = card.querySelector('.tl-title');
      if (!titleEl) return;
      var key = titleEl.textContent.trim();
      var data = details[key];
      if (!data) return;

      // Populate modal
      modal.querySelector('.card-modal-icon').textContent = data.icon;
      modal.querySelector('.card-modal-title').textContent = data.title;
      modal.querySelector('.card-modal-subtitle').textContent = data.subtitle;
      modal.querySelector('.card-modal-body').innerHTML = data.body;

      // Open
      overlay.classList.add('is-open');
      modal.classList.add('is-open');
      document.body.style.overflow = 'hidden';
    });
  });

})();
