# Hatiolab 2026 Strategic Renewal Plan

---

## 1. Executive Summary

### 1.1 Strategic Pivot
**From "Heart of Supply Chain" to "AI-First Industrial Platform"**

Hatiolab은 기존의 물류 소프트웨어 공급사를 넘어, **AI 기반의 자율 운영(Autonomous Operation)을 실현하는 테크 기업**으로 도약합니다. 우리는 제조와 물류 현장의 데이터를 학습(Learn)하고, 미래를 예측(See)하며, 대화형 인터페이스(Talk)로 제어하는 통합 AI 플랫폼을 제공합니다.

### 1.2 Core Objectives
1.  **Brand Repositioning**: 단순 솔루션 벤더가 아닌, 산업 AI 기술을 선도하는 파트너로 재정의.
2.  **Product Innovation**: LLM, 시계열 예측 등 최신 AI 기술이 내재화된 `Operato AI Platform` 런칭.
3.  **Experience Upgrade**: Bento Grid, Glassmorphism 등 최신 트렌드를 반영한 압도적인 웹 경험 제공.

---

## 2. Brand Identity

### 2.1 Mission Statement
**"Redefining Industry with Artificial Intelligence"**
(제조와 물류, AI로 다시 설계하다)

### 2.2 Vision
**"The Brain of Smart Operations"**
현장의 모든 데이터가 모이고, 분석되고, 실행되는 두뇌 역할을 수행합니다.

### 2.3 Core Values
*   **Predictive (예측성)**: 사후 대응이 아닌 사전 예방.
*   **Autonomous (자율성)**: 사람의 개입을 최소화한 최적화.
*   **Conversational (대화형)**: 복잡한 데이터를 가장 쉬운 언어로.

---

## 3. Product Portfolio: Operato AI Platform

우리의 솔루션은 **Data(수집) → Intelligence(분석) → Action(실행)**의 완결된 루프를 제공합니다.

### 3.1 Architecture Overview

```mermaid
graph TD
    subgraph "Edge Layer (Physical World)"
        Sensors[IoT Sensors]
        Machines[Equipment]
        Workers[Workers]
    end

    subgraph "Operato AI Platform (The Brain)"
        direction TB
        
        subgraph "Operato Learn (DataHub)"
            Ingest[Data Ingestion]
            Label[Auto Labeling]
            Store[Vector DB / Data Lake]
        end
        
        subgraph "Operato See (MLOps)"
            Predict[Demand/Fault Prediction]
            Detect[Anomaly Detection]
            Optimize[Inventory Optimization]
        end
        
        subgraph "Operato Talk (Agent)"
            LLM[LLM Engine]
            RAG[RAG System]
            Action[Function Calling]
        end
        
        Learn --> See
        See --> Talk
        Talk --> Learn
    end

    subgraph "Application Layer (Solutions)"
        Vis[Operato Visualizer]
        WMS[Smart Warehouse (WMS/WCS)]
        MES[Smart Factory (MES)]
    end

    Edge Layer --> Ingest
    Action --> WMS
    Action --> MES
    Predict --> Vis
```

### 3.2 Key Solutions

#### 1. Operato Learn (DataHub)
> **"The Foundation of Intelligence"**

*   **Role**: 파편화된 현장 데이터를 AI가 학습 가능한 형태로 실시간 정제 및 표준화.
*   **Key Features**:
    *   Multi-protocol Data Ingestion (MQTT, OPC-UA, Modbus)
    *   Automated Data Labeling & Versioning
    *   Real-time Data Quality Monitoring

#### 2. Operato See (MLOps)
> **"The Eye of Future"**

*   **Role**: 과거 데이터를 기반으로 미래의 위험을 예측하고 최적의 운영 시나리오 제안.
*   **Key Features**:
    *   Predictive Maintenance (설비 고장 예측)
    *   Demand Forecasting (수요 예측)
    *   Dynamic Route Optimization (동적 경로 최적화)

#### 3. Operato Talk (Agent)
> **"The Voice of Operations"**

*   **Role**: 전문 지식이 없어도 자연어로 복잡한 시스템을 제어하고 인사이트 획득.
*   **Key Features**:
    *   Conversational BI (대화형 데이터 분석)
    *   Workflow Automation Agent
    *   Context-aware Alerting

#### 4. Operato Visualizer
> **"The Digital Twin Canvas"**

*   **Role**: AI의 판단과 현장의 상태를 직관적인 2D/3D 그래픽으로 시각화.
*   **Key Features**:
    *   No-Code Dashboard Builder
    *   Real-time 3D Rendering (WebGL)
    *   Multi-device Support

---

## 4. Design Strategy

### 4.1 Design Concept: "Futuristic Minimal"
기술적 복잡함은 숨기고, 정보의 본질만 명료하게 전달합니다.

### 4.2 Key Visual Elements
1.  **Bento Grid Layout**: 정보를 모듈화하여 직관적으로 배치, 정리된 느낌과 리듬감 부여.
2.  **Glassmorphism**: 깊이감과 현대적인 세련미를 주는 반투명 블러 효과 사용.
3.  **Dynamic Gradients**: 정적인 단색 대신, 살아있는 듯한 미세한 움직임이 있는 그라디언트 활용.
4.  **Micro-interactions**: 사용자의 행동에 반응하는 섬세한 애니메이션으로 몰입감 증대.

### 4.3 Color Palette
*   **Primary**: `Deep Space Navy` (#0a0a0f) - 무한한 우주와 같은 깊이감.
*   **Accent**: `Electric Indigo` (#6366f1) to `Cyber Violet` (#8b5cf6) - 지능과 연결을 상징.
*   **Text**: `Starlight White` (#ffffff) & `Moon Dust Grey` (#a0a0b0).

### 4.4 Typography
*   **English**: **Inter** - 가독성과 모던함의 표준.
*   **Korean**: **Noto Sans KR** - 신뢰감 있는 고딕체.
*   **Headings**: Bold & Tight Tracking으로 임팩트 강화.

---

## 5. Information Architecture (IA)

```
/ (Home)
├── Solutions
│   ├── Operato Learn (DataHub)
│   ├── Operato See (MLOps)
│   ├── Operato Talk (Agent)
│   └── Operato Visualizer
├── Products
│   ├── Smart Warehouse (WMS/WCS/ECS)
│   └── Smart Factory (Things Factory/Chef)
├── Company
│   ├── About Us
│   └── Careers
└── Contact
```

---

## 6. Roadmap

| Phase | Milestone | Key Deliverables |
| :--- | :--- | :--- |
| **Phase 1** | **Foundation** | 메인 페이지 리뉴얼, 브랜드 아이덴티티 확립 (완료) |
| **Phase 2** | **Expansion** | 솔루션(Learn/See/Talk) 상세 페이지 구축 |
| **Phase 3** | **Integration** | 제품(Warehouse/Factory) 페이지 및 연동 시나리오 구현 |
| **Phase 4** | **Global** | 다국어 지원 및 글로벌 SEO 최적화 |

---

_Last Updated: 2025-12-03_
_Confidential - Hatiolab Internal Use Only_
