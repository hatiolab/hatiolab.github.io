/**
 * Hatiolab Flagship Landing Page - Modern JavaScript Module
 * Handles Single Page i18n (KO/EN/ZH), Q&A Drawer, and Interactive Architecture Showcase
 */

// Multilingual Dictionary (Korean, English, Chinese)
const I18N_DATA = {
  ko: {
    hero_badge: "차세대 산업용 디지털 트윈 & AI 오케스트레이션",
    hero_title_1: "스마트 공급망과",
    hero_title_2: "디지털 트윈의 심장",
    hero_subtitle: "실시간 현장 관제부터 AI 기반 미래 예측까지. HatioLab은 최첨단 시뮬레이션 커널과 오케스트레이션 스위트로 제조·물류 지능화를 선도합니다.",
    hero_cta_primary: "Operato Twin 시탐하기",
    hero_cta_secondary: "도큐멘테이션 & Q&A",
    
    bento_twin_tag: "핵심 커널 엔진",
    bento_twin_title: "Operato Twin — 이산사건 시뮬레이션 & AI 샌드박스",
    bento_twin_desc: "ISA-95 4대 자원(Personnel, Equipment, PhysicalAsset, Material) 정규화와 몬테카를로 미래 예측으로 공정 병목과 자재 고갈을 사전에 차단합니다.",
    
    bento_suite_tag: "스마트 오케스트레이션",
    bento_suite_title: "Operato Suite (WMS / WCS / WES / TMS)",
    bento_suite_desc: "창고, 기계, 창고 실행, 수송 시스템을 하나의 단일 통제면으로 통합하여 24시간 실시간 무단속 관제를 실현합니다.",
    
    bento_ai_tag: "AI & 자율 로보틱스",
    bento_ai_title: "AI & Robotics (ai-doop)",
    bento_ai_desc: "AGV/AMR 자율주행 로봇 제어와 AI 코파일럿 통합으로 현장의 작업자 안전과 자동 불출 제어를 완벽히 지원합니다.",
    
    arch_title: "3계층 그랜드 통합 파노라마 아키텍처",
    arch_subtitle: "실물 현장의 무질서한 데이터가 4대 자원으로 정규화되고, 사설 평행 우주(Fork)에서 AI 시뮬레이션을 거쳐 검증된 명령만 안전하게 실행됩니다.",
    
    metric_1_val: "$28.56M",
    metric_1_lbl: "연간 순 정량 이익 모델",
    metric_2_val: "29일",
    metric_2_lbl: "CapEx 투자 회수 기간",
    metric_3_val: "103ms",
    metric_3_lbl: "15회 몬테카를로 예측 속도",
    metric_4_val: "4 Core",
    metric_4_lbl: "ISA-95 자원 표준 준수",
    
    qna_btn_read: "Q&A 가이드 자세히 보기",
    contact_title: "도입 문의 & 기술 파트너십",
    contact_sub: "HatioLab의 스마트 물류·제조 솔루션으로 현장의 디지털 전환을 시작하세요.",
  },
  en: {
    hero_badge: "Next-Gen Industrial Digital Twin & AI Orchestration",
    hero_title_1: "The Heart of Smart Supply Chain &",
    hero_title_2: "Industrial Digital Twin",
    hero_subtitle: "From real-time shop floor monitoring to AI-driven future prediction. HatioLab leads manufacturing and logistics intelligence with cutting-edge simulation kernels and orchestration suites.",
    hero_cta_primary: "Explore Operato Twin",
    hero_cta_secondary: "Documentation & Q&A",
    
    bento_twin_tag: "Core Engine",
    bento_twin_title: "Operato Twin — DES Engine & AI Sandbox",
    bento_twin_desc: "Prevents shop floor bottlenecks and material starvation via ISA-95 4 Core Resources (Personnel, Equipment, PhysicalAsset, Material) and Monte Carlo forecasting.",
    
    bento_suite_tag: "Smart Orchestration",
    bento_suite_title: "Operato Suite (WMS / WCS / WES / TMS)",
    bento_suite_desc: "Integrates warehouse, machinery, execution, and transport systems into a single control plane for 24/7 continuous operations.",
    
    bento_ai_tag: "AI & Robotics",
    bento_ai_title: "AI & Robotics (ai-doop)",
    bento_ai_desc: "Supports worker safety and automated dispatch control via AGV/AMR autonomous robot control and AI copilot integration.",
    
    arch_title: "3-Plane Grand Panorama Architecture",
    arch_subtitle: "Shop floor chaos is normalized into 4 Core Resources, running AI simulations in parallel sandboxes and egressing only verified safe commands.",
    
    metric_1_val: "$28.56M",
    metric_1_lbl: "Net Annual Benefit Model",
    metric_2_val: "29 Days",
    metric_2_lbl: "CapEx Payback Period",
    metric_3_val: "103ms",
    metric_3_lbl: "15x Monte Carlo Forecast Speed",
    metric_4_val: "4 Core",
    metric_4_lbl: "ISA-95 Standard Alignment",
    
    qna_btn_read: "Read Q&A Guide",
    contact_title: "Contact Us & Partnership",
    contact_sub: "Start your digital transformation journey with HatioLab's smart logistics and manufacturing solutions.",
  },
  zh: {
    hero_badge: "下一代工业数字孪生与AI编排平台",
    hero_title_1: "智能供应链与",
    hero_title_2: "工业数字孪生之心",
    hero_subtitle: "从实时现场监控到基于AI的未来预测。HatioLab以尖端模拟内核和编排套件引领制造与物流智能化。",
    hero_cta_primary: "探索 Operato Twin",
    hero_cta_secondary: "文档与Q&A",
    
    bento_twin_tag: "核心引擎",
    bento_twin_title: "Operato Twin — 离散事件模拟与AI沙盒",
    bento_twin_desc: "通过ISA-95四大核心资源规范与蒙特卡洛预测，提前消除生产瓶颈与物料短缺。",
    
    bento_suite_tag: "智能编排",
    bento_suite_title: "Operato Suite (WMS / WCS / WES / TMS)",
    bento_suite_desc: "将仓库、设备、执行与运输系统集成于单一控制面板，实现24/7不间断监控。",
    
    bento_ai_tag: "AI与机器人",
    bento_ai_title: "AI & Robotics (ai-doop)",
    bento_ai_desc: "集成AGV/AMR自主机器人控制与AI Copilot，完美保障现场人员安全与自动派发控制。",
    
    arch_title: "三层宏伟整合全景架构",
    arch_subtitle: "现场混沌数据规范化为四大资源，在平行沙盒中运行AI模拟，仅安全出站经验证的命令。",
    
    metric_1_val: "$28.56M",
    metric_1_lbl: "年度净收益模型",
    metric_2_val: "29天",
    metric_2_lbl: "CapEx 投资回收期",
    metric_3_val: "103ms",
    metric_3_lbl: "15次蒙特卡洛预测速度",
    metric_4_val: "4 Core",
    metric_4_lbl: "ISA-95 标准对齐",
    
    qna_btn_read: "阅读Q&A指南",
    contact_title: "联系我们与合作",
    contact_sub: "利用HatioLab的智能物流与制造解决方案，开启现场数字化转型。",
  }
};

let currentLang = 'ko';

document.addEventListener('DOMContentLoaded', () => {
  initLanguageSwitcher();
  initModalHandlers();
});

function initLanguageSwitcher() {
  const buttons = document.querySelectorAll('.lang-btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const lang = e.target.dataset.lang;
      if (lang && I18N_DATA[lang]) {
        currentLang = lang;
        buttons.forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        applyTranslations(lang);
      }
    });
  });
}

function applyTranslations(lang) {
  const data = I18N_DATA[lang];
  if (!data) return;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (data[key]) {
      el.textContent = data[key];
    }
  });
}

// Modal Handlers
function initModalHandlers() {
  const modal = document.getElementById('qnaModal');
  const closeBtn = document.getElementById('closeModalBtn');
  const openBtns = document.querySelectorAll('.open-qna-btn');

  openBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      modal.classList.add('open');
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      modal.classList.remove('open');
    });
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('open');
    }
  });
}
