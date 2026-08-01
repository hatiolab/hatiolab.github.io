/**
 * Hatiolab Corporate Portal - JavaScript Module
 * Handles Single Page i18n (KO/EN/ZH) and Interactive Solution Showcase
 */

// Multilingual Dictionary (Korean, English, Chinese)
const I18N_DATA = {
  ko: {
    hero_badge: "스마트 공급망 & 산업용 지능 엔터프라이즈",
    hero_title_1: "스마트 공급망과",
    hero_title_2: "디지털 트윈의 심장",
    hero_subtitle: "하티오랩(HatioLab)은 실체 있는 물류·제조 현장을 디지털 지능과 결합하는 차세대 엔터프라이즈 기술 기업입니다. 시뮬레이션 커널, 통합 오케스트레이션, AI 로보틱스로 산업 현장의 혁신을 이끕니다.",
    hero_cta_primary: "3대 핵심 솔루션 보기",
    hero_cta_secondary: "도입 문의하기",
    
    bento_twin_tag: "SOLUTION 01",
    bento_twin_title: "Operato Twin — 산업용 디지털 트윈 커널",
    bento_twin_desc: "ISA-95 4대 자원(Personnel, Equipment, PhysicalAsset, Material) 정규화와 몬테카를로 미래 예측으로 공정 병목과 자재 고갈을 사전에 차단하는 시뮬레이션 엔진입니다.",
    
    bento_suite_tag: "SOLUTION 02",
    bento_suite_title: "Operato Suite — 스마트 물류·제조 오케스트레이션",
    bento_suite_desc: "창고 관리(WMS), 설비 제어(WCS), 창고 실행(WES), 수송 관리(TMS), 야드 관리(YMS)를 하나의 단일 통제면(Single Control Plane)으로 통합합니다.",
    
    bento_ai_tag: "SOLUTION 03",
    bento_ai_title: "AI & Robotics (ai-doop) — 자율 로보틱스 & AI 제어",
    bento_ai_desc: "AGV/AMR 자율주행 물류 로봇 통합 제어와 AI 코파일럿을 결합하여 현장 작업자 안전 보호와 자동 불출 Command를 안전하게 발정합니다.",
    
    value_title: "HatioLab이 제공하는 3대 핵심 기업 가치",
    value_sub: "단순한 관제를 넘어 실물 현장에 안전하고 검증된 재무적·운영적 가치를 제공합니다.",
    
    val1_title: "1:1 실시간 현장 동기화",
    val1_desc: "현실 공장·창고의 시간 흐름과 1:1로 동기화되어 24시간 안정적인 이산 상태를 유지합니다.",
    
    val2_title: "안심 안전 제어 메커니즘",
    val2_desc: "무단 자동 실행 없이 AI가 제안(Propose Action)하고 관리자의 승인 게이트(Approval Gate)를 통해서만 안전하게 실행됩니다.",
    
    val3_title: "정량적 생산성 모델",
    val3_desc: "유휴시간 감축, 오버타임 차단, 몬테카를로 미래 예측을 통해 측정 가능한 재무적 가치를 실현합니다.",
    
    contact_title: "HatioLab 솔루션 도입 문의",
    contact_sub: "스마트 공급망 구축 및 산업용 디지털 트윈 도입을 위한 기술 파트너십을 시작하세요.",
    contact_btn: "문의 보내기"
  },
  en: {
    hero_badge: "Smart Supply Chain & Industrial Intelligence Enterprise",
    hero_title_1: "The Heart of Smart Supply Chain &",
    hero_title_2: "Industrial Digital Twin",
    hero_subtitle: "HatioLab is a next-generation enterprise technology company bridging physical manufacturing and logistics operations with digital intelligence via simulation kernels, orchestration suites, and AI robotics.",
    hero_cta_primary: "Explore 3 Core Solutions",
    hero_cta_secondary: "Contact Us",
    
    bento_twin_tag: "SOLUTION 01",
    bento_twin_title: "Operato Twin — Industrial Digital Twin Kernel",
    bento_twin_desc: "Simulation engine normalizing ISA-95 4 Core Resources (Personnel, Equipment, PhysicalAsset, Material) and preventing bottlenecks via Monte Carlo forecasting.",
    
    bento_suite_tag: "SOLUTION 02",
    bento_suite_title: "Operato Suite — Smart Supply Chain Orchestration",
    bento_suite_desc: "Integrates WMS, WCS, WES, TMS, and YMS into a single control plane for 24/7 continuous smart warehouse and factory operations.",
    
    bento_ai_tag: "SOLUTION 03",
    bento_ai_title: "AI & Robotics (ai-doop) — Autonomous Robotics & AI",
    bento_ai_desc: "Combines AGV/AMR autonomous robot control with AI copilots to protect worker safety and issue validated dispatch commands.",
    
    value_title: "3 Core Enterprise Values Delivered by HatioLab",
    value_sub: "Delivering safe, validated financial and operational value beyond mere visualization.",
    
    val1_title: "1:1 Real-Time Physical Sync",
    val1_desc: "Synchronizes 1:1 with real plant/warehouse clocks to maintain stable discrete state operations 24/7.",
    
    val2_title: "Propose-Only Safety Control",
    val2_desc: "Eliminates unauthorized auto-execution. AI proposes actions requiring manager approval gates before egress.",
    
    val3_title: "Quantitative Value Modeling",
    val3_desc: "Realizes measurable financial impact by reducing idle time, preventing overtime, and fast Monte Carlo forecasting.",
    
    contact_title: "Contact HatioLab for Solutions",
    contact_sub: "Start your technological partnership with HatioLab for smart supply chain and digital twin deployment.",
    contact_btn: "Send Inquiry"
  },
  zh: {
    hero_badge: "智能供应链与工业智能企业",
    hero_title_1: "智能供应链与",
    hero_title_2: "工业数字孪生之心",
    hero_subtitle: "HatioLab是一家将物理物流与制造现场与数字智能相结合的下一代企业技术公司，通过模拟内核、编排套件和AI机器人引领产业创新。",
    hero_cta_primary: "查看三大核心解决方案",
    hero_cta_secondary: "联系我们",
    
    bento_twin_tag: "SOLUTION 01",
    bento_twin_title: "Operato Twin — 工业数字孪生内核",
    bento_twin_desc: "基于ISA-95四大核心资源规范与蒙特卡洛预测，提前消除生产瓶颈与物料短缺的模拟引擎。",
    
    bento_suite_tag: "SOLUTION 02",
    bento_suite_title: "Operato Suite — 智能供应链编排套件",
    bento_suite_desc: "将仓库(WMS)、设备控制(WCS)、执行(WES)、运输(TMS)和场地(YMS)集成于单一控制面板。",
    
    bento_ai_tag: "SOLUTION 03",
    bento_ai_title: "AI & Robotics (ai-doop) — 自主机器人与AI控制",
    bento_ai_desc: "结合AGV/AMR自主机器人控制与AI Copilot，完美保障现场人员安全与自动派发控制。",
    
    value_title: "HatioLab 交付的三大核心企业价值",
    value_sub: "超越单纯可视化，交付安全、经过验证的财务与运营价值。",
    
    val1_title: "1:1 实时物理同步",
    val1_desc: "与真实工厂和仓库时间流1:1同步，24小时维持稳定的离散状态。",
    
    val2_title: "安全批准控制机制",
    val2_desc: "消除无授权自动执行。AI提出建议动作，必须经管理者批准门后方可安全出站。",
    
    val3_title: "定量价值模型",
    val3_desc: "通过减少空闲时间、防止加班和蒙特卡洛未来预测，实现可衡量的财务价值。",
    
    contact_title: "联系 HatioLab 方案咨询",
    contact_sub: "开启与HatioLab的技术合作，部署智能供应链与工业数字孪生。",
    contact_btn: "发送咨询"
  }
};

let currentLang = 'ko';

document.addEventListener('DOMContentLoaded', () => {
  initLanguageSwitcher();
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
