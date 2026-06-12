/* ============================================
   北京基石智勘科技有限公司 - 交互脚本
   含中英文语言切换功能
   ============================================ */

/* ---- 中英文翻译数据 ---- */
const translations = {
  zh: {
    /* 页面标题 */
    "page-title": "基石智勘 | AI驱动 · 智慧能源勘查",

    /* 品牌名 */
    "brand-name": "基石智勘",

    /* 导航 */
    "nav-home": "首页",
    "nav-about": "关于我们",
    "nav-business": "核心业务",
    "nav-advantage": "技术优势",
    "nav-process": "服务流程",
    "nav-contact": "联系方式",

    /* Hero */
    "hero-title": "基石智勘",
    "hero-subtitle": "AI驱动 · 能源智慧开发 · 矿业资源评估",
    "hero-rukn-meaning": "Rukn（رُكْن），阿拉伯语「基石、支柱」之意，承载我们对能源与资源行业的坚实承诺。",
    "hero-btn-services": "了解我们的服务",
    "hero-btn-contact": "联系我们",

    /* 关于我们 */
    "about-title": "关于我们",
    "about-subtitle": "人工智能时代 · 能源资源勘查与评估 · 高效开发技术服务",
    "about-heading": "立足智能化升级风口，赋能传统能源开发提质增效",
    "about-p1": "当前能源行业全面进入数字化、智能化、高效化转型新阶段。传统油气勘探开发模式面临复杂油气藏地质条件隐蔽、数据维度繁杂、人工建模精度有限等行业痛点。随着人工智能与大数据技术的快速迭代，AI 赋能已成为破解复杂油气藏勘探与高效开发难题的核心路径。",
    "about-p2": "基石智勘精准聚焦 <strong>人工智能时代矿产资源勘查与精细化评估赛道</strong>，定位为「技术驱动型、场景落地型」的高端矿产资源评价服务商。核心团队具备国内外顶级矿业企业及研究机构一线实战经验，深度联动多所高校科研资源，突破传统地质找矿单一技术局限，打通地质勘探 × 矿床模型 × 人工智能 × 算法研发技术壁垒，为固体矿产、经济金属等领域的资源精细化评估、储量动态分析与开发决策优化提供全程赋能，助力客户降本、提质、增效。",
    "about-p3": "公司始终秉持 <strong>「技术赋能、精准高效、务实共赢、长期深耕」</strong>的核心服务理念，为油气行业高质量、低成本、精细化发展提供全新解决方案。",

    /* 六边形网格 */
    "hex-ai": "AI",
    "hex-oilfield": "油田",
    "hex-data": "数据",
    "hex-geology": "地质",
    "hex-cornerstone": "矿产",
    "hex-model": "模型",
    "hex-algorithm": "算法",
    "hex-explore": "勘查",
    "hex-energy": "能源",

    /* 核心业务 */
    "business-title": "核心业务",
    "business-subtitle": "覆盖油气勘探开发全流程 · 延伸矿业资源智能评估",
    "biz-1-title": "能源资源智能化勘查",
    "biz-1-desc": "油气领域，着重精细化评估与储量分析，运用 AI 技术对复杂油气藏进行精准勘查和资源评估。矿业领域突破传统地质找矿单一技术局限，打通地质勘探 × 矿床模型 × 人工智能 × 算法研发技术壁垒，为固体矿产、经济金属等领域的资源精细化评估。",
    "biz-2-title": "地质建模与数模优化",
    "biz-2-desc": "既深耕复杂油气藏地质建模、油藏数值模拟等传统业务，构建高精度三维地质模型，精准预测开发动态；又协助客户将 AI 技术融入现有工作流程，推动业务流程智能化升级，提质增效。",
    "biz-3-title": "实验室分析化验",
    "biz-3-desc": "配备高压物性、岩心CT扫描、自动化孢粉分析、酸泡分析等全套大型实验设备，依托资深专业的实验技术人员，全面承接油气田、陆地煤层勘探开发领域岩心、油、水、气等样品检测分析工作，输出科学、严谨、权威的分析化验成果报告。",
    "biz-4-title": "油田软件开发",
    "biz-4-desc": "借助日新月异、功能日益强大的 AI 技术，专注落地油气勘探开发智能化方案定制，将AI与日常工作场景深度融合，打造部门或团队专属 AI 工具，从日常工作中很快落地的“小而美”的AI工具，提高效率。为油田行业定制各种实用小软件、AI 助手和业务工具，开发快、部署简单、上手即用。无论项目大小，业务有需求，我们就做。",
    "biz-5-title": "技术咨询",
    "biz-5-desc": "油气技术咨询、项目联合研发、产学研技术合作落地，提供全流程技术指导与解决方案。",
    "biz-6-title": "产学研合作",
    "biz-6-desc": "深度联动高校科研团队，搭建「科研+实战」复合型技术平台，推动前沿技术成果在油气行业的产业化落地。",

    /* 技术优势 */
    "adv-title": "技术优势",
    "adv-subtitle": "突破单一技术局限 · 实现油气技术与 AI 的深度融合",
    "adv-1-title": "一线实战技术优势",
    "adv-1-desc": "核心团队具备海外顶级能源企业一线油气项目实操经验，深耕油气勘探开发、油藏数模、地质建模、矿业资源评估领域多年，实战落地能力突出。",
    "adv-2-title": "产学研资源优势",
    "adv-2-desc": "深度联动多所高校地质、油气、算法领域专家团队，汇聚行业资深技术人才，搭建起「科研+实战」复合型技术团队。",
    "adv-3-title": "技术融合优势",
    "adv-3-desc": "打通地质专业 + 油藏工程 + 人工智能 + 算法研发技术壁垒，大幅提升复杂地质条件下油气资源勘查精度与开发效率。",
    "adv-4-title": "灵活落地优势",
    "adv-4-desc": "既能承接高端科研技术研发、大型油气藏智能优化项目，也可定制开发轻量化油田工具，适配不同客户与场景的差异化需求。",

    /* 服务流程 */
    "proc-title": "服务流程",
    "proc-subtitle": "从需求沟通到项目交付 · 全流程精细化服务",
    "proc-1-title": "需求沟通",
    "proc-1-desc": "深入了解客户痛点与技术需求，明确项目目标与范围",
    "proc-2-title": "方案设计",
    "proc-2-desc": "定制化技术方案设计，结合AI与地质工程制定最优路径",
    "proc-3-title": "技术研发",
    "proc-3-desc": "模型构建、算法开发、软件定制，分阶段迭代交付",
    "proc-4-title": "测试验证",
    "proc-4-desc": "基于真实数据验证，确保模型精度与方案可行性",
    "proc-5-title": "交付支持",
    "proc-5-desc": "成果交付、培训指导、持续优化与长期技术支持",

    /* 联系方式 */
    "contact-title": "联系方式",
    "contact-subtitle": "期待与您的合作 · 共创智慧能源勘查新未来",
    "contact-address-label": "公司地址",
    "contact-address": "北京市密云区西田各庄镇雁密路99号601室",
    "contact-phone-label": "联系电话",
    "contact-email-label": "电子邮箱",
    "placeholder-1": "项目展示 · 复杂油气藏三维地质模型",
    "placeholder-2": "项目展示 · AI 驱动油藏数值模拟优化",

    /* 表单 */
    "form-heading": "给我们留言",
    "form-name": "姓名",
    "form-email": "邮箱",
    "form-message": "留言内容",
    "form-send": "发送留言",
    "form-name-placeholder": "请输入您的姓名",
    "form-email-placeholder": "请输入您的邮箱",
    "form-message-placeholder": "请描述您的需求或问题...",
    "form-success": "已收到您的留言！",

    /* Footer */
    "footer-company": "北京基石智勘科技有限公司",
    "footer-copyright": "© 2024-2026 Rukn GeoExplore Technology limited company. All Rights Reserved.",

    /* ARIA */
    "nav-toggle": "菜单",
    "back-to-top": "返回顶部",

    /* 语言按钮文本 */
    "lang-switch-to": "EN"
  },

  en: {
    /* Page title */
    "page-title": "Rukn GeoExplore | AI-Driven · Smart Energy Exploration",

    /* Brand name */
    "brand-name": "Rukn GeoExplore",

    /* Navigation */
    "nav-home": "Home",
    "nav-about": "About",
    "nav-business": "Services",
    "nav-advantage": "Advantages",
    "nav-process": "Process",
    "nav-contact": "Contact",

    /* Hero */
    "hero-title": "Rukn GeoExplore",
    "hero-subtitle": "AI-Driven · Intelligent Energy Development · Mineral Resource Assessment",
    "hero-rukn-meaning": "Rukn (رُكْن) — Arabic for \"pillar\" and \"cornerstone,\" reflecting our steadfast commitment to the energy and resource industries.",
    "hero-btn-services": "Explore Our Services",
    "hero-btn-contact": "Contact Us",

    /* About Us */
    "about-title": "About Us",
    "about-subtitle": "AI-Era Energy Resource Exploration & Assessment · Efficient Development",
    "about-heading": "Empowering Traditional Energy Development Through Intelligent Upgrades",
    "about-p1": "The energy industry is undergoing a full-scale transformation toward digitalization, intelligence, and efficiency. Traditional oil and gas exploration faces challenges such as complex reservoir conditions, multi-dimensional data complexity, and limited manual modeling accuracy. As AI and big data technologies rapidly evolve, AI empowerment has become the core pathway to solving the challenges of complex reservoir exploration and efficient development.",
    "about-p2": "Rukn GeoExplore precisely targets the <strong>AI-era mineral resource exploration and refined assessment sector</strong>, positioning itself as a 'technology-driven, implementation-oriented' high-end mineral resource evaluation service provider. Our core team brings frontline hands-on experience from top-tier domestic and international mining companies and research institutions, coupled with deep partnerships with multiple university research networks. We break through the limitations of traditional single-technique mineral prospecting, integrating Geological Exploration × Ore Deposit Modeling × AI × Algorithm R&D to deliver end-to-end support for refined resource assessment, dynamic reserve analysis, and development decision optimization in solid minerals and economic metals — helping clients reduce costs, improve quality, and enhance efficiency.",
    "about-p3": "The company consistently upholds the core service philosophy of <strong>'Technology Empowerment, Precision & Efficiency, Pragmatic Win-Win, Long-Term Commitment'</strong>, delivering innovative solutions for high-quality, low-cost, and refined development in the oil and gas industry.",

    /* Hex grid */
    "hex-ai": "AI",
    "hex-oilfield": "Oilfield",
    "hex-data": "Data",
    "hex-geology": "Geology",
    "hex-cornerstone": "Minerals",
    "hex-model": "Model",
    "hex-algorithm": "Algorithm",
    "hex-explore": "Explore",
    "hex-energy": "Energy",

    /* Core Business */
    "business-title": "Core Services",
    "business-subtitle": "Full-Cycle Oil & Gas Exploration · Extended Mining Resource Assessment",
    "biz-1-title": "Intelligent Exploration & Assessment",
    "biz-1-desc": "In oil and gas, we focus on refined assessment and reserve analysis, leveraging AI for accurate exploration and evaluation of complex reservoirs. In mining, we break through the limitations of traditional single-technique prospecting, integrating Geological Exploration × Ore Deposit Modeling × AI × Algorithm R&D for refined resource assessment of solid minerals and economic metals.",
    "biz-2-title": "Geological Modeling & Simulation",
    "biz-2-desc": "From complex reservoir geological modeling and numerical simulation to helping clients integrate AI into existing workflows — we deliver high-precision 3D models that accurately predict development dynamics while driving intelligent process upgrades for better quality and efficiency.",
    "biz-3-title": "Laboratory Analysis & Testing",
    "biz-3-desc": "Equipped with a full suite of major laboratory instruments — high-pressure PVT analysis, core CT scanning, automated palynological analysis, acid-digestion analysis and more — and backed by senior laboratory specialists, we provide comprehensive testing and analysis of core, oil, water, and gas samples for oilfield and onshore coalbed exploration and development, delivering rigorous, authoritative analytical reports.",
    "biz-4-title": "Oilfield Software Development",
    "biz-4-desc": "Leveraging rapidly evolving AI technology, we deliver tailored intelligent solutions for oil and gas exploration and development, deeply integrating AI into daily workflows to build dedicated 'small but effective' AI tools for departments and teams that deploy quickly and boost efficiency. We custom-develop practical tools, AI assistants, and business applications for the oilfield industry — fast to build, simple to deploy, ready to use. No project is too big or small — if you have a need, we'll take it on.",
    "biz-5-title": "Technical Consulting",
    "biz-5-desc": "Oil & gas technical consulting, joint R&D projects, and industry-academia collaboration. Full-process technical guidance and solution delivery.",
    "biz-6-title": "Industry-Academia Cooperation",
    "biz-6-desc": "Deep collaboration with university research teams, building a 'research + practice' composite technical platform to drive the industrialization of cutting-edge technologies in the oil and gas sector.",

    /* Technical Advantages */
    "adv-title": "Technical Advantages",
    "adv-subtitle": "Breaking Single-Discipline Limitations · Deep Integration of Oil & Gas with AI",
    "adv-1-title": "Frontline Technical Expertise",
    "adv-1-desc": "Our core team has hands-on experience from top-tier global energy companies, with years of expertise in oil and gas exploration, reservoir simulation, geological modeling, and mining resource assessment — delivering proven implementation capabilities.",
    "adv-2-title": "University-Industry Network",
    "adv-2-desc": "Deep partnerships with multiple universities' geology, oil & gas, and algorithm expert teams, assembling a composite R&D + practice technical team with seasoned industry professionals.",
    "adv-3-title": "Multi-Disciplinary Integration",
    "adv-3-desc": "Breaking through the barriers between Geology + Reservoir Engineering + AI + Algorithm R&D, significantly improving exploration accuracy and development efficiency under complex geological conditions.",
    "adv-4-title": "Flexible Delivery",
    "adv-4-desc": "Capable of handling high-end R&D projects and large-scale reservoir optimization, while also delivering lightweight customized oilfield tools — adapting to the diverse needs of different clients and scenarios.",

    /* Service Process */
    "proc-title": "Service Process",
    "proc-subtitle": "From Requirements to Delivery · Full-Cycle Refined Service",
    "proc-1-title": "Requirements Discussion",
    "proc-1-desc": "In-depth understanding of client challenges and technical needs, clearly defining project objectives and scope.",
    "proc-2-title": "Solution Design",
    "proc-2-desc": "Customized technical solution design, combining AI with geoscience engineering to define the optimal implementation path.",
    "proc-3-title": "Technical Development",
    "proc-3-desc": "Model construction, algorithm development, software customization — delivered iteratively in phases.",
    "proc-4-title": "Testing & Validation",
    "proc-4-desc": "Validation against real-world data to ensure model accuracy and solution feasibility.",
    "proc-5-title": "Delivery & Support",
    "proc-5-desc": "Results delivery, training, ongoing optimization, and long-term technical support.",

    /* Contact */
    "contact-title": "Contact Us",
    "contact-subtitle": "Looking Forward to Working with You",
    "contact-address-label": "Address",
    "contact-address": "Room 601, No. 99 Yanmi Road, Xitiangezhang Town, Miyun District, Beijing",
    "contact-phone-label": "Phone",
    "contact-email-label": "Email",
    "placeholder-1": "Project Showcase · 3D Reservoir Geological Model",
    "placeholder-2": "Project Showcase · AI-Driven Reservoir Simulation",

    /* Form */
    "form-heading": "Send Us a Message",
    "form-name": "Name",
    "form-email": "Email",
    "form-message": "Message",
    "form-send": "Send",
    "form-name-placeholder": "Enter your name",
    "form-email-placeholder": "Enter your email",
    "form-message-placeholder": "Describe your needs or questions...",
    "form-success": "Submitted! We will contact you shortly.",

    /* Footer */
    "footer-company": "Rukn GeoExplore Technology Limited Company",
    "footer-copyright": "© 2024-2026 Rukn GeoExplore Technology Limited Company. All Rights Reserved.",

    /* ARIA */
    "nav-toggle": "Menu",
    "back-to-top": "Back to Top",

    /* Language button text */
    "lang-switch-to": "中文"
  }
};

/* ---- 初始化语言 ---- */
let currentLang = localStorage.getItem('lang') || 'zh';

/**
 * 应用指定语言到页面所有 [data-i18n] / [data-i18n-html] / [data-i18n-placeholder] / [data-i18n-aria] 元素
 */
function applyLanguage(lang) {
  const t = translations[lang];

  /* 更新 html lang 属性 */
  document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';

  /* 更新页面标题 */
  const titleEl = document.querySelector('title[data-i18n]');
  if (titleEl && t['page-title']) {
    titleEl.textContent = t['page-title'];
  }

  /* 普通文本：data-i18n */
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (key && key !== 'page-title' && t[key] !== undefined) {
      el.textContent = t[key];
    }
  });

  /* HTML 内容（含 strong 等标签）：data-i18n-html */
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (key && t[key] !== undefined) {
      el.innerHTML = t[key];
    }
  });

  /* placeholder 属性：data-i18n-placeholder */
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (key && t[key] !== undefined) {
      el.setAttribute('placeholder', t[key]);
    }
  });

  /* aria-label 属性：data-i18n-aria */
  document.querySelectorAll('[data-i18n-aria]').forEach(el => {
    const key = el.getAttribute('data-i18n-aria');
    if (key && t[key] !== undefined) {
      el.setAttribute('aria-label', t[key]);
    }
  });

  /* 更新语言切换按钮文本 */
  const switcher = document.getElementById('langSwitcher');
  if (switcher) {
    switcher.textContent = t['lang-switch-to'];
    switcher.setAttribute('aria-label',
      lang === 'zh' ? 'Switch to English' : '切换到中文');
  }

  currentLang = lang;
  localStorage.setItem('lang', currentLang);
}

/* ---- 页面加载时应用语言 ---- */
document.addEventListener('DOMContentLoaded', () => {

  /* 先应用保存的语言 */
  applyLanguage(currentLang);

  /* ---- 语言切换按钮 ---- */
  const langSwitcher = document.getElementById('langSwitcher');
  if (langSwitcher) {
    langSwitcher.addEventListener('click', () => {
      const newLang = currentLang === 'zh' ? 'en' : 'zh';
      applyLanguage(newLang);
    });
  }

  /* ---- 导航栏滚动效果 ---- */
  const navbar = document.querySelector('.navbar');
  const navLinks = document.querySelectorAll('.nav-links a');
  const sections = document.querySelectorAll('.section, .hero');
  const backToTop = document.getElementById('backToTop');
  const navToggle = document.getElementById('navToggle');
  const navLinksContainer = document.querySelector('.nav-links');

  /* 滚动事件 */
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    /* 导航栏半透明 */
    if (scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    /* 高亮当前导航 */
    let currentId = '';
    sections.forEach(section => {
      const top = section.offsetTop - 100;
      const bottom = top + section.offsetHeight;
      if (scrollY >= top && scrollY < bottom) {
        currentId = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + currentId) {
        link.classList.add('active');
      }
    });

    /* 返回顶部按钮 */
    if (scrollY > 600) {
      backToTop.classList.add('show');
    } else {
      backToTop.classList.remove('show');
    }
  });

  /* 移动端菜单 */
  navToggle.addEventListener('click', () => {
    navLinksContainer.classList.toggle('open');
    navToggle.classList.toggle('open');
    // Update aria-label to reflect state
    const isOpen = navLinksContainer.classList.contains('open');
    navToggle.setAttribute('aria-label',
      isOpen
        ? (currentLang === 'zh' ? '关闭菜单' : 'Close menu')
        : (currentLang === 'zh' ? '菜单' : 'Menu')
    );
  });

  /* 点击导航链接关闭菜单 */
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navLinksContainer.classList.remove('open');
      navToggle.classList.remove('open');
      navToggle.setAttribute('aria-label', currentLang === 'zh' ? '菜单' : 'Menu');
    });
  });

  /* 返回顶部 */
  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });


  /* ---- 滚动渐入动画 (Intersection Observer) ---- */
  const revealElements = document.querySelectorAll('.reveal');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // stop watching after revealed
      }
    });
  }, {
    threshold: 0.08,           // lowered from 0.15 — triggers earlier
    rootMargin: '0px 0px 0px 0px'  // removed negative bottom margin
  });

  revealElements.forEach(el => observer.observe(el));


  /* ---- Hero 粒子 / 数据流动画 (Canvas) ---- */
  const canvas = document.getElementById('heroCanvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let width, height;
    let particles = [];
    const maxParticles = 100;

    function resize() {
      width = canvas.width = canvas.parentElement.offsetWidth;
      height = canvas.height = canvas.parentElement.offsetHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    /* 从 CSS 变量读取主题色（RGB 分量），随主题自动变化 */
    const rootStyle = getComputedStyle(document.documentElement);
    const themeRGB = (name, fallback) =>
      (rootStyle.getPropertyValue(name).trim() || fallback);
    const highlightRGB = themeRGB('--highlight-rgb', '0, 212, 255');
    const gradientMidHex = themeRGB('--gradient-mid', '#7b5fff');
    /* 十六进制转 RGB 分量字符串 */
    function hexToRGB(hex) {
      const h = hex.replace('#', '');
      const n = parseInt(h.length === 3 ? h.split('').map(c => c + c).join('') : h, 16);
      return `${(n >> 16) & 255}, ${(n >> 8) & 255}, ${n & 255}`;
    }
    const midRGB = gradientMidHex.startsWith('#') ? hexToRGB(gradientMidHex) : gradientMidHex;

    /* 粒子类 */
    class Particle {
      constructor() {
        this.reset();
      }
      reset() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 1.5 + 0.5;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5;
        this.opacity = Math.random() * 0.5 + 0.1;
        this.color = Math.random() < 0.7
          ? `rgba(${highlightRGB}, ${this.opacity})`
          : `rgba(${midRGB}, ${this.opacity})`;
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x < 0 || this.x > width || this.y < 0 || this.y > height) {
          this.reset();
        }
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    }

    /* 初始化粒子 */
    for (let i = 0; i < maxParticles; i++) {
      particles.push(new Particle());
    }

    /* 连线绘制 */
    function drawConnections() {
      const maxDist = 120;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < maxDist) {
            const alpha = (1 - dist / maxDist) * 0.15;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(${highlightRGB}, ${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
    }

    /* 渲染循环 */
    function animate() {
      ctx.clearRect(0, 0, width, height);
      particles.forEach(p => {
        p.update();
        p.draw();
      });
      drawConnections();
      requestAnimationFrame(animate);
    }
    animate();
  }


  /* ---- 联系表单提交 (前端展示) ---- */
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = contactForm.querySelector('button[type="submit"]');
      const originalText = btn.textContent;
      const successText = translations[currentLang]['form-success'];
      btn.textContent = successText;
      btn.disabled = true;
      btn.style.background = '#16a34a';
      setTimeout(() => {
        btn.textContent = originalText;
        btn.disabled = false;
        btn.style.background = '';
        contactForm.reset();
      }, 3000);
    });
  }

});