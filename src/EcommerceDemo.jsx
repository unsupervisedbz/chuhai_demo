import React, { useState } from 'react';

// Ecommerce Demo Component
export default function EcommerceDemo() {
  const [activeTab, setActiveTab] = useState('problem');

  // Update page title
  React.useEffect(() => {
    document.title = 'Ecommerce Demo';
  }, []);

  const renderContent = () => {
    switch (activeTab) {
      case 'problem':
        return <ProblemSection />;
      case 'solution':
        return <SolutionSection />;
      case 'features':
        return <FeaturesSection />;
      case 'results':
        return <CaseStudiesSection />;
      case 'why-us':
        return <WhyUsSection />;
      case 'next-steps':
        return <NextStepsSection />;
      default:
        return <ProblemSection />;
    }
  };

  return (
    <>
      <style>{`
        body {
            font-family: 'Noto Sans SC', sans-serif;
            background-color: #f9fafb;
            color: #1f2937;
        }
        .tab-active, .sub-tab-active {
            border-color: #3b82f6;
            color: #3b82f6;
            font-weight: 500;
        }
        .tab-inactive, .sub-tab-inactive {
            border-color: transparent;
            color: #6b7280;
        }
        .gradient-text {
            background: linear-gradient(to right, #3b82f6, #1e40af);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
        .sub-tab-btn {
            transition: all 0.2s ease-in-out;
        }
        .sub-tab-btn:hover {
            color: #3b82f6;
        }
      `}</style>
      
      <div className="container mx-auto p-4 md:p-8">
        <Header />
        <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />

        <main id="tab-content" className="bg-white p-6 md:p-10 rounded-2xl shadow-lg transition-all duration-300 min-h-[500px]">
          {renderContent()}
        </main>
        
        <Footer />
      </div>
    </>
  );
}

// Header Component
const Header = () => (
  <header className="text-center mb-8 md:mb-12">
    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold gradient-text">Goaly AI出海GTM营销引擎</h1>
    <p className="mt-2 md:mt-4 text-lg md:text-2xl text-gray-600">AI-Powered Ecommerce Growth Engine</p>
    <p className="mt-4 text-base md:text-lg max-w-3xl mx-auto bg-blue-100 text-blue-800 p-3 rounded-lg border border-blue-200">
      "在所有人还在比谁的产品更便宜时，我们让您的产品，成为唯一被记住的那个。"
    </p>
  </header>
);

// Tabs Navigation Component
const Tabs = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: 'problem', label: '核心问题' },
    { id: 'solution', label: '我们的方案' },
    { id: 'features', label: '核心功能' },
    { id: 'results', label: '案例展示' },
    { id: 'why-us', label: '为何是我们' },
    { id: 'next-steps', label: '下一步' },
  ];

  return (
    <div className="mb-8 border-b border-gray-200">
      <nav className="flex flex-wrap -mb-px justify-center" aria-label="Tabs">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`text-sm md:text-base mr-2 md:mr-4 py-3 px-2 md:px-4 border-b-2 font-medium ${activeTab === tab.id ? 'tab-active' : 'tab-inactive'}`}
          >
            {tab.label}
          </button>
        ))}
      </nav>
    </div>
  );
};

// Content Sections (ecommerce-focused)
const ProblemSection = () => (
    <section>
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-red-600">核心问题：阻碍电商增长的三大挑战</h2>
        
        <div className="space-y-6">
            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-bold text-red-700 mb-4">问题1: 电商竞争同质化</h3>
                <div className="space-y-3 text-gray-700">
                    <p><strong>产品高度同质化：</strong>所有电商都在强调"品质保证"、"快速发货"、"正品保障"等相同卖点。</p>
                    <p><strong>营销文案高度复制：</strong>全网都是"限时特价"、"库存紧张"、"错过再等一年"。</p>
                    <p><strong>渠道模式雷同：</strong>全都依赖平台流量，用"低价+促销"拼销量。</p>
                </div>
                <div className="mt-4 bg-red-100 border border-red-200 text-red-800 p-3 rounded">
                    <p className="font-bold">结果？</p>
                    <p>客户只看价格，品牌无记忆点，毛利率被压缩到5%以下。企业陷入到无限的价格战恶性竞争，是<span className="font-semibold">美国70%的电商企业亏损的直接原因。</span></p>
                </div>
            </div>

            <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-bold text-orange-700 mb-4">问题2: 获客成本持续攀升</h3>
                <div className="space-y-3 text-gray-700">
                    <p><strong>广告成本飙升：</strong>Facebook广告成本从2019年的$0.5/点击上升到2024年的$3.2/点击，增长540%。</p>
                    <p><strong>转化率持续下降：</strong>电商转化率从3.2%下降到1.8%，大量广告预算浪费。</p>
                    <p><strong>客户生命周期价值低：</strong>一次性购买比例高达85%，复购率不足15%。</p>
                </div>
                <div className="mt-4 bg-orange-100 border border-orange-200 text-orange-800 p-3 rounded">
                    <p className="font-bold">结果？</p>
                    <p>传统电商获客成本高达$150/人，但客户平均生命周期价值仅为$200，利润微薄。</p>
                </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-bold text-yellow-700 mb-4">问题3: 缺乏个性化营销能力</h3>
                <div className="space-y-3 text-gray-700">
                    <p><strong>千人一面的营销：</strong>无法根据用户行为偏好提供个性化推荐和营销内容。</p>
                    <p><strong>客户画像不精准：</strong>缺乏深度用户洞察，无法识别高价值客户群体。</p>
                    <p><strong>营销时机把握不准：</strong>无法在最佳时机触达客户，错失销售机会。</p>
                </div>
                <div className="mt-4 bg-yellow-100 border border-yellow-200 text-yellow-800 p-3 rounded">
                    <p className="font-bold">结果？</p>
                    <p>营销效率低下，客户满意度仅为60%，品牌忠诚度持续下降。</p>
                </div>
            </div>
        </div>
    </section>
);

const SolutionSection = () => {
    const [activeSubTab, setActiveSubTab] = useState('overview');

    return (
        <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-blue-600 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
                我们的解决方案：您的电商增长"智能引擎"
            </h2>
            <p className="text-gray-700 text-base md:text-lg mb-6">我们不是卖软件，是为您打造一个自动分析、自动决策、自动落地的AI电商营销作战系统，专为电商企业定制。</p>
            
            {/* Sub-tabs */}
            <div className="mb-6">
                <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg">
                    <button
                        onClick={() => setActiveSubTab('overview')}
                        className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                            activeSubTab === 'overview'
                                ? 'bg-white text-blue-600 shadow-sm'
                                : 'text-gray-600 hover:text-gray-900'
                        }`}
                    >
                        方案概述
                    </button>
                    <button
                        onClick={() => setActiveSubTab('system')}
                        className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                            activeSubTab === 'system'
                                ? 'bg-white text-blue-600 shadow-sm'
                                : 'text-gray-600 hover:text-gray-900'
                        }`}
                    >
                        系统设计
                    </button>
                </div>
            </div>

            {/* Sub-tab content */}
            {activeSubTab === 'overview' && (
                <div className="bg-white border-2 border-gray-200 p-6 rounded-lg">
                    <h3 className="text-lg font-bold text-gray-800 mb-6 text-center">AI+电商:全方位赋能"人货场",降本增效效能凸显</h3>
                    
                    {/* Technical Foundation */}
                    <div className="mb-6">
                        <h4 className="text-base font-semibold text-blue-700 mb-3 text-center">技术基础</h4>
                        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                            <div className="bg-blue-50 border border-blue-200 p-3 rounded text-center">
                                <div className="text-sm font-medium text-blue-800">AI虚拟人</div>
                            </div>
                            <div className="bg-blue-50 border border-blue-200 p-3 rounded text-center">
                                <div className="text-sm font-medium text-blue-800">专属模型</div>
                            </div>
                            <div className="bg-blue-50 border border-blue-200 p-3 rounded text-center">
                                <div className="text-sm font-medium text-blue-800">3D建模渲染</div>
                            </div>
                            <div className="bg-blue-50 border border-blue-200 p-3 rounded text-center">
                                <div className="text-sm font-medium text-blue-800">AI多模态识别</div>
                            </div>
                            <div className="bg-blue-50 border border-blue-200 p-3 rounded text-center">
                                <div className="text-sm font-medium text-blue-800">AI智能计算</div>
                            </div>
                        </div>
                    </div>

                    {/* Core E-commerce Flow */}
                    <div className="mb-6">
                        <h4 className="text-base font-semibold text-green-700 mb-3 text-center">核心电商流程</h4>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="text-center">
                                <div className="bg-red-100 border border-red-300 p-4 rounded-lg mb-2">
                                    <div className="font-semibold text-red-800">消费者</div>
                                </div>
                                <div className="text-xs text-gray-600">商品上架</div>
                            </div>
                            <div className="text-center">
                                <div className="bg-red-100 border border-red-300 p-4 rounded-lg mb-2">
                                    <div className="font-semibold text-red-800">国内电商平台/跨境电商</div>
                                </div>
                                <div className="text-xs text-gray-600">商品展示、虚拟试穿、智能客服</div>
                            </div>
                            <div className="text-center">
                                <div className="bg-red-100 border border-red-300 p-4 rounded-lg mb-2">
                                    <div className="font-semibold text-red-800">仓库</div>
                                </div>
                                <div className="text-xs text-gray-600">库存管理、物流管理</div>
                            </div>
                        </div>
                    </div>

                    {/* AI-driven Functionalities */}
                    <div>
                        <h4 className="text-base font-semibold text-purple-700 mb-3 text-center">AI驱动功能</h4>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="space-y-3">
                                <h5 className="text-sm font-semibold text-purple-600">人 (People)</h5>
                                <div className="space-y-2">
                                    <div className="bg-purple-50 border border-purple-200 p-3 rounded">
                                        <div className="text-sm font-medium text-purple-800 mb-1">需求分析</div>
                                        <div className="text-xs text-gray-600">识别消费者的真实需求,包括功能需求和情感需求</div>
                                    </div>
                                    <div className="bg-purple-50 border border-purple-200 p-3 rounded">
                                        <div className="text-sm font-medium text-purple-800 mb-1">用户画像</div>
                                        <div className="text-xs text-gray-600">构建详细的用户画像,帮助品牌更精准地定位目标人群</div>
                                    </div>
                                    <div className="bg-purple-50 border border-purple-200 p-3 rounded">
                                        <div className="text-sm font-medium text-purple-800 mb-1">用户体验</div>
                                        <div className="text-xs text-gray-600">关注消费者的购物体验,从产品设计到售后服务</div>
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-3">
                                <h5 className="text-sm font-semibold text-purple-600">货 (Goods)</h5>
                                <div className="space-y-2">
                                    <div className="bg-purple-50 border border-purple-200 p-3 rounded">
                                        <div className="text-sm font-medium text-purple-800 mb-1">智慧选品</div>
                                        <div className="text-xs text-gray-600">助力一键实现产品洞察,提供智能化选品及定价方案</div>
                                    </div>
                                    <div className="bg-purple-50 border border-purple-200 p-3 rounded">
                                        <div className="text-sm font-medium text-purple-800 mb-1">商品展示</div>
                                        <div className="text-xs text-gray-600">基于视觉算法生成商品的三维模型及纹理</div>
                                    </div>
                                    <div className="bg-purple-50 border border-purple-200 p-3 rounded">
                                        <div className="text-sm font-medium text-purple-800 mb-1">定价策略</div>
                                        <div className="text-xs text-gray-600">合理的定价策略考虑成本和利润,结合市场竞争状况</div>
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-3">
                                <h5 className="text-sm font-semibold text-purple-600">场 (Place)</h5>
                                <div className="space-y-2">
                                    <div className="bg-purple-50 border border-purple-200 p-3 rounded">
                                        <div className="text-sm font-medium text-purple-800 mb-1">虚拟货场</div>
                                        <div className="text-xs text-gray-600">实现虚拟货场快速、低成本、大批量搭建</div>
                                    </div>
                                    <div className="bg-purple-50 border border-purple-200 p-3 rounded">
                                        <div className="text-sm font-medium text-purple-800 mb-1">全渠道整合</div>
                                        <div className="text-xs text-gray-600">现代零售趋势越来越倾向于线上线下融合</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {activeSubTab === 'system' && (
                <div className="bg-white border-2 border-gray-200 p-6 rounded-lg">
                    <h3 className="text-lg font-bold text-gray-800 mb-6 text-center">🤖 AI营销引擎架构图</h3>
                    
                    {/* Application Scenarios Layer */}
                    <div className="mb-6">
                        <h4 className="text-base font-semibold text-blue-700 mb-3 text-center">应用场景</h4>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                            <div className="bg-blue-50 border border-blue-200 p-3 rounded text-center">
                                <div className="text-sm font-medium text-blue-800">市场趋势分析</div>
                            </div>
                            <div className="bg-blue-50 border border-blue-200 p-3 rounded text-center">
                                <div className="text-sm font-medium text-blue-800">产品定位</div>
                            </div>
                            <div className="bg-blue-50 border border-blue-200 p-3 rounded text-center">
                                <div className="text-sm font-medium text-blue-800">定制化内容生成</div>
                            </div>
                            <div className="bg-blue-50 border border-blue-200 p-3 rounded text-center">
                                <div className="text-sm font-medium text-blue-800">本地化GTM递推</div>
                            </div>
                        </div>
                    </div>

                    {/* Functional Modules Layer */}
                    <div className="mb-6">
                        <h4 className="text-base font-semibold text-green-700 mb-3 text-center">功能模块</h4>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                            <div className="space-y-2">
                                <div className="bg-green-50 border border-green-200 p-2 rounded text-xs text-center">
                                    <div className="font-medium text-green-800">目标用户画像</div>
                                </div>
                                <div className="bg-green-50 border border-green-200 p-2 rounded text-xs text-center">
                                    <div className="font-medium text-green-800">用户痛点分析</div>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <div className="bg-green-50 border border-green-200 p-2 rounded text-xs text-center">
                                    <div className="font-medium text-green-800">行业趋势</div>
                                </div>
                                <div className="bg-green-50 border border-green-200 p-2 rounded text-xs text-center">
                                    <div className="font-medium text-green-800">竞品分析</div>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <div className="bg-green-50 border border-green-200 p-2 rounded text-xs text-center">
                                    <div className="font-medium text-green-800">差异化营销策略</div>
                                </div>
                                <div className="bg-green-50 border border-green-200 p-2 rounded text-xs text-center">
                                    <div className="font-medium text-green-800">定价策略</div>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <div className="bg-green-50 border border-green-200 p-2 rounded text-xs text-center">
                                    <div className="font-medium text-green-800">核心信息&品牌调性</div>
                                </div>
                                <div className="bg-green-50 border border-green-200 p-2 rounded text-xs text-center">
                                    <div className="font-medium text-green-800">模拟市场测试</div>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-2">
                            <div className="space-y-2">
                                <div className="bg-green-50 border border-green-200 p-2 rounded text-xs text-center">
                                    <div className="font-medium text-green-800">多模态素材生成</div>
                                </div>
                                <div className="bg-green-50 border border-green-200 p-2 rounded text-xs text-center">
                                    <div className="font-medium text-green-800">广告内容生成</div>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <div className="bg-green-50 border border-green-200 p-2 rounded text-xs text-center">
                                    <div className="font-medium text-green-800">营销素材本地化</div>
                                </div>
                                <div className="bg-green-50 border border-green-200 p-2 rounded text-xs text-center">
                                    <div className="font-medium text-green-800">筛选合作伙伴</div>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <div className="bg-green-50 border border-green-200 p-2 rounded text-xs text-center">
                                    <div className="font-medium text-green-800">本地化品牌心智建设</div>
                                </div>
                                <div className="bg-green-50 border border-green-200 p-2 rounded text-xs text-center">
                                    <div className="font-medium text-green-800">优化合作提案</div>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <div className="bg-green-50 border border-green-200 p-2 rounded text-xs text-center">
                                    <div className="font-medium text-green-800">全链路监控+迭代优化</div>
                                </div>
                                <div className="bg-green-50 border border-green-200 p-2 rounded text-xs text-center">
                                    <div className="font-medium text-green-800">...</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Underlying Architecture Layer */}
                    <div>
                        <h4 className="text-base font-semibold text-purple-700 mb-3 text-center">底层架构</h4>
                        <div className="space-y-4">
                            {/* Agent Related Systems */}
                            <div>
                                <h5 className="text-sm font-semibold text-purple-600 mb-2">Agent 相关系统</h5>
                                <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
                                    <div className="bg-purple-50 border border-purple-200 p-2 rounded text-xs text-center">
                                        <div className="font-medium text-purple-800">Agent 开发系统</div>
                                    </div>
                                    <div className="bg-purple-50 border border-purple-200 p-2 rounded text-xs text-center">
                                        <div className="font-medium text-purple-800">Agent Deployment</div>
                                    </div>
                                    <div className="bg-purple-50 border border-purple-200 p-2 rounded text-xs text-center">
                                        <div className="font-medium text-purple-800">Agent Runtime Monitoring</div>
                                    </div>
                                    <div className="bg-purple-50 border border-purple-200 p-2 rounded text-xs text-center">
                                        <div className="font-medium text-purple-800">ToolSet</div>
                                    </div>
                                    <div className="bg-purple-50 border border-purple-200 p-2 rounded text-xs text-center">
                                        <div className="font-medium text-purple-800">AgentGym</div>
                                    </div>
                                </div>
                            </div>

                            {/* Model Matrix */}
                            <div>
                                <h5 className="text-sm font-semibold text-purple-600 mb-2">模型矩阵</h5>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                                    <div className="bg-purple-50 border border-purple-200 p-2 rounded text-xs text-center">
                                        <div className="font-medium text-purple-800">基础大模型</div>
                                    </div>
                                    <div className="bg-purple-50 border border-purple-200 p-2 rounded text-xs text-center">
                                        <div className="font-medium text-purple-800">多模态模型</div>
                                    </div>
                                    <div className="bg-purple-50 border border-purple-200 p-2 rounded text-xs text-center">
                                        <div className="font-medium text-purple-800">用户意图识别</div>
                                    </div>
                                    <div className="bg-purple-50 border border-purple-200 p-2 rounded text-xs text-center">
                                        <div className="font-medium text-purple-800">推理规划模型</div>
                                    </div>
                                    <div className="bg-purple-50 border border-purple-200 p-2 rounded text-xs text-center">
                                        <div className="font-medium text-purple-800">长期记忆管理</div>
                                    </div>
                                    <div className="bg-purple-50 border border-purple-200 p-2 rounded text-xs text-center">
                                        <div className="font-medium text-purple-800">RAG检索</div>
                                    </div>
                                </div>
                            </div>

                            {/* Other Infra Components */}
                            <div>
                                <h5 className="text-sm font-semibold text-purple-600 mb-2">其他Infra组件</h5>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                                    <div className="bg-purple-50 border border-purple-200 p-2 rounded text-xs text-center">
                                        <div className="font-medium text-purple-800">Data Infra</div>
                                    </div>
                                    <div className="bg-purple-50 border border-purple-200 p-2 rounded text-xs text-center">
                                        <div className="font-medium text-purple-800">Training Infra</div>
                                    </div>
                                    <div className="bg-purple-50 border border-purple-200 p-2 rounded text-xs text-center">
                                        <div className="font-medium text-purple-800">Eval</div>
                                    </div>
                                    <div className="bg-purple-50 border border-purple-200 p-2 rounded text-xs text-center">
                                        <div className="font-medium text-purple-800">Security & Privacy</div>
                                    </div>
                                    <div className="bg-purple-50 border border-purple-200 p-2 rounded text-xs text-center">
                                        <div className="font-medium text-purple-800">Simulated Env</div>
                                    </div>
                                    <div className="bg-purple-50 border border-purple-200 p-2 rounded text-xs text-center">
                                        <div className="font-medium text-purple-800">Storage</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

const FeaturesSection = () => (
    <section>
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-gray-800">核心功能模块：四维AI驱动，从洞察到成交</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg border">
                <h3 className="font-bold text-lg text-blue-700 mb-2">✅ 模块一：AI客户洞察引擎</h3>
                <p className="text-gray-600 mb-3">深度了解客户，不看表面数据。实时分析用户行为、购买偏好、生命周期价值。</p>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                    <li>追踪用户购买路径和决策节点</li>
                    <li>分析季节性需求和趋势变化</li>
                    <li>识别高价值客户和潜在流失风险</li>
                    <li>预测客户未来购买行为</li>
                </ul>
                <p className="mt-3 bg-yellow-100 text-yellow-800 p-2 text-sm rounded">💡 <strong>案例发现：</strong>AI发现您的客户中25%是"冲动购买型"，但现有营销策略完全忽略了这一群体——这就是您的机会。</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg border">
                <h3 className="font-bold text-lg text-blue-700 mb-2">✅ 模块二：AI个性化推荐系统</h3>
                <p className="text-gray-600 mb-3">千人千面，精准触达。基于用户画像和行为数据，生成个性化营销内容。</p>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                    <li>智能产品推荐算法</li>
                    <li>个性化邮件和短信营销</li>
                    <li>动态定价策略优化</li>
                    <li>个性化着陆页生成</li>
                </ul>
                <div className="mt-3 bg-green-100 text-green-800 p-2 text-sm rounded">
                    <p className="font-semibold mb-1">🎯 <strong>输出结果：</strong></p>
                    <div className="space-y-1">
                        <div><strong>1.</strong> 个性化推荐准确率提升65%，转化率提升40%</div>
                        <div><strong>2.</strong> 动态定价策略，平均客单价提升25%</div>
                        <div><strong>3.</strong> 个性化营销内容，客户满意度提升至85%</div>
                    </div>
                </div>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg border">
                <h3 className="font-bold text-lg text-blue-700 mb-2">✅ 模块三：AI营销自动化引擎</h3>
                <p className="text-gray-600 mb-3">从"手动营销"到"智能营销"。AI自动执行营销策略，24/7不间断优化。</p>
                <div className="overflow-x-auto bg-white rounded shadow-sm border">
                    <table className="w-full text-xs text-left text-gray-600">
                        <tbody>
                        <tr className="bg-gray-100"><td className="px-3 py-2 font-medium text-gray-800">新客户欢迎</td><td className="px-3 py-2">自动发送个性化欢迎邮件，提升首次购买转化率</td></tr>
                        <tr className="border-b"><td className="px-3 py-2 font-medium text-gray-800">购物车放弃</td><td className="px-3 py-2">智能识别放弃原因，自动发送挽回邮件</td></tr>
                        <tr className="bg-gray-100 border-b"><td className="px-3 py-2 font-medium text-gray-800">客户生命周期</td><td className="px-3 py-2">根据购买历史，自动推荐相关产品</td></tr>
                        <tr className="border-b"><td className="px-3 py-2 font-medium text-gray-800">流失预警</td><td className="px-3 py-2">预测客户流失风险，主动营销挽回</td></tr>
                        <tr className="bg-gray-100"><td className="px-3 py-2 font-medium text-gray-800">复购激励</td><td className="px-3 py-2">基于客户价值，自动发放个性化优惠券</td></tr>
                        </tbody>
                    </table>
                </div>
                <p className="mt-3 text-xs text-gray-500 bg-white p-2 rounded border"> AI为您生成完整的营销自动化流程，包括触发条件、内容模板、发送时机等，实现全自动化客户运营。</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg border">
                <h3 className="font-bold text-lg text-blue-700 mb-2">✅ 模块四：AI竞争情报系统</h3>
                <p className="text-gray-600 mb-3">知己知彼，百战不殆。AI实时监控竞争对手，制定差异化策略。</p>
                <ol className="text-sm space-y-2 text-gray-700">
                    <li><strong>1. 竞品价格监控：</strong>实时追踪竞争对手价格变化，自动调整定价策略</li>
                    <li><strong>2. 营销策略分析：</strong>分析竞品广告投放、促销活动，发现市场空白</li>
                    <li><strong>3. 产品趋势预测：</strong>基于市场数据，预测热门产品趋势</li>
                    <li><strong>4. 差异化定位：</strong>找到竞品薄弱环节，制定差异化竞争策略</li>
                    <li><strong>5. 市场机会挖掘：</strong>发现新兴细分市场，抢占先机</li>
                </ol>
                <p className="mt-3 bg-yellow-100 text-yellow-800 p-2 text-sm rounded"> 💯 <strong>"结果：传统方式6个月调研 → AI引擎3周分析，市场洞察效率提升300%。"</strong></p>
            </div>
        </div>
    </section>
);

const CaseStudiesSection = () => (
    <section>
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">案例展示：从战略到执行</h2>
        <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="font-bold text-xl text-blue-700 mb-4">应用AI电商增长引擎</h3>
            <p className="mb-6 text-gray-600">我们为一家时尚电商执行了为期一个月的增长优化计划，核心是利用AI提升客户价值和营销效率。</p>
            <div className="space-y-4">
                <div className="flex items-start p-4 bg-white rounded-lg">
                    <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <div>
                        <h4 className="font-semibold">第1周：客户画像分析</h4>
                        <p className="text-gray-600">AI分析50万用户数据，生成精准客户画像，识别出5个高价值客户群体。</p>
                    </div>
                </div>
                <div className="flex items-start p-4 bg-white rounded-lg">
                    <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <div>
                        <h4 className="font-semibold">第2周：个性化营销策略</h4>
                        <p className="text-gray-600">基于客户画像，为每个群体制定个性化营销策略和产品推荐。</p>
                    </div>
                </div>
                <div className="flex items-start p-4 bg-white rounded-lg">
                    <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <div>
                        <h4 className="font-semibold">第3-4周：营销自动化部署</h4>
                        <p className="text-gray-600">部署AI营销自动化系统，实现24/7智能客户运营，最终转化率提升180%。</p>
                    </div>
                </div>
            </div>
            <div className="mt-8 bg-gray-100 p-6 rounded-lg border border-gray-200">
                <h4 className="text-lg font-bold mb-4">🎯 最终成果</h4>
                <ul className="space-y-2 list-inside list-disc text-gray-700">
                    <li><strong>转化效率：</strong>传统方式转化率2.1% → AI引擎转化率5.9%，提升180%。</li>
                    <li><strong>销售业绩：</strong>月销售额从$280,000增长到$520,000，增长率86%。</li>
                    <li><strong>客户价值：</strong>客户平均生命周期价值从$180提升到$320，增长78%。</li>
                </ul>
                <blockquote className="mt-4 border-l-4 border-blue-500 pl-4 italic text-blue-600">
                    {/* 客户反馈："我们终于不是'另一个亚马逊'了。" */}
                </blockquote>
            </div>
        </div>
    </section>
);

const WhyUsSection = () => {
    const [activeSubTab, setActiveSubTab] = useState('advantage');

    return (
        <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">为什么选择我们？不是另一个SaaS工具</h2>
             <div className="mb-6 border-b border-gray-200">
                <nav className="flex -mb-px" aria-label="Sub-Tabs">
                    <button
                        onClick={() => setActiveSubTab('advantage')}
                        className={`sub-tab-btn text-sm md:text-base mr-4 py-3 px-1 border-b-2 font-medium ${activeSubTab === 'advantage' ? 'sub-tab-active' : 'sub-tab-inactive'}`}
                    >
                        核心优势
                    </button>
                    <button
                        onClick={() => setActiveSubTab('team')}
                        className={`sub-tab-btn text-sm md:text-base mr-4 py-3 px-1 border-b-2 font-medium ${activeSubTab === 'team' ? 'sub-tab-active' : 'sub-tab-inactive'}`}
                    >
                        我们的团队
                    </button>
                </nav>
            </div>

            {activeSubTab === 'advantage' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="border rounded-lg p-4 bg-red-50">
                        <h4 className="font-bold text-red-600 text-lg">传统工具</h4>
                        <ul className="list-disc list-inside mt-2 text-red-900">
                            <li>给你数据</li>
                            <li>让你"知道"</li>
                            <li>需要你写文案</li>
                            <li>指导你做营销</li>
                            <li>月付$5,000</li>
                        </ul>
                    </div>
                    <div className="border rounded-lg p-4 bg-green-50">
                        <h4 className="font-bold text-green-600 text-lg">我们的AI增长引擎</h4>
                        <ul className="list-disc list-inside mt-2 text-green-900">
                            <li>给你增长</li>
                            <li>让你"做到"</li>
                            <li>自动生成并优化营销</li>
                            <li>自动执行+监控+优化</li>
                            <li>按增长结果付费</li>
                        </ul>
                    </div>
                </div>
            )}
            
            {activeSubTab === 'team' && (
                 <div>
                    <h3 className="text-xl md:text-2xl font-bold mb-4 text-gray-800">技术与行业的完美融合</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="flex items-start p-4 bg-gray-50 rounded-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-4 text-blue-500 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.121 15.536c-1.171 1.952-3.07 1.952-4.242 0-1.172-1.953-1.172-5.119 0-7.072 1.171-1.952 3.07-1.952 4.242 0M12 10.5h.01M12 13.5h.01M12 16.5h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            <div>
                                <h4 className="font-semibold">前Meta Llama 核心研发团队</h4>
                                <p className="text-gray-600 text-sm">拥有世界级AI大模型研发背景，奠定我们坚实的技术领先地位。</p>
                            </div>
                        </div>
                         <div className="flex items-start p-4 bg-gray-50 rounded-lg">
                             <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-4 text-blue-500 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                            <div>
                                <h4 className="font-semibold">多年广告推荐算法经验</h4>
                                <p className="text-gray-600 text-sm">拥有多年全球广告投放与增长实战经验，深谙用户增长和商业化逻辑，确保我们的营销策略能带来真实、可衡量的销售转化。</p>
                            </div>
                        </div>
                         <div className="flex items-start p-4 bg-gray-50 rounded-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-4 text-blue-500 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2h10a2 2 0 002-2v-1a2 2 0 012-2h1.945C21.43 11.96 21.5 12.484 21.5 13v2.5a2.5 2.5 0 01-2.5 2.5h-13A2.5 2.5 0 013 15.5V13c0-.516.07-1.04.195-1.534-.055.165-.088.337-.11.516l-.03.218z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 11a1 1 0 011-1h14a1 1 0 110 2H5a1 1 0 01-1-1z" /><path d="M12 3v3m0 3V3m0 3h2.5M12 6H9.5" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                            <div>
                                <h4 className="font-semibold">湾区电商平台主理人</h4>
                                <p className="text-gray-600 text-sm">团队中有多年亲身运营电商平台的合伙人，既懂电商客户真实需求，也了解北美电商机构的运营模式和核心痛点。</p>
                            </div>
                        </div>
                        <div className="flex items-start p-4 bg-gray-50 rounded-lg">
                             <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-4 text-blue-500 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 16v-2m8-8h2M4 12H2m15.364 6.364l-1.414-1.414M6.05 6.05l-1.414-1.414m12.728 0l-1.414 1.414M6.05 17.95l-1.414 1.414M12 18a6 6 0 100-12 6 6 0 000 12z" /></svg>
                            <div>
                                <h4 className="font-semibold">研发到落地全链路能力</h4>
                                <p className="text-gray-600 text-sm">从市场调研 → 差异化定位 → 产品建议 → 本地化营销 → 渠道拓展，我们不是顾问，而是全链路执行的增长合伙人。</p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-8">
                        <blockquote className="p-4 italic border-l-4 bg-blue-50 text-blue-800 border-blue-500 rounded-r-lg">
                            <p className="mb-2">"我们是将Meta级的AI技术和营销经验、经过验证的规模化工程能力、以及来自电商一线战场的行业洞察，三者深度融合的唯一团队。"</p>
                            <p className="font-semibold">"我们建造的不仅是工具，更是您赢得电商市场的战略竞争优势。"</p>
                        </blockquote>
                    </div>
                </div>
            )}
        </section>
    );
};

const NextStepsSection = () => (
    <section>
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">下一步：让您的电商，成为行业增长的新标准</h2>
        <p className="text-lg text-gray-600 mb-8">我们不卖产品，我们帮您重新定义"电商增长"是什么。现在，您有三个选择：</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="p-6 border rounded-lg hover:shadow-xl transition-shadow">
                <p className="text-4xl mb-2">📉</p>
                <h4 className="font-bold">继续卷价格</h4>
                <p className="text-gray-500">利润被压缩到地板</p>
            </div>
            <div className="p-6 border rounded-lg hover:shadow-xl transition-shadow">
                <p className="text-4xl mb-2">🤷‍♂️</p>
                <h4 className="font-bold">花钱买工具</h4>
                <p className="text-gray-500">花$50万，等6个月</p>
            </div>
            <div className="p-6 border-2 border-blue-500 rounded-lg shadow-lg bg-blue-50 hover:shadow-2xl transition-shadow">
                <p className="text-4xl mb-2">✅</p>
                <h4 className="font-bold text-blue-600">接入AI引擎</h4>
                <p className="text-gray-500">7天内获得"增长突围方案"</p>
            </div>
        </div>
        <div className="mt-10 text-center">
            <button className="bg-blue-600 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-700 transition-colors text-lg">
                📞 联系我们，开启您的"非价格战"电商增长之旅
            </button>
        </div>
        <div className="mt-8 bg-gray-100 p-4 rounded-lg text-center">
            <p className="text-black-600 font-semibold text-lg md:text-xl">Goaly AI出海GTM营销引擎 - 专为电商企业打造的"增长大脑"</p>
            <p className="mt-4">CEO：Bella Zhu | 前Meta广告技术负责人 | Llama开源模型核心贡献者 | 十亿级用户产品研发到落地经验 </p>
            <p className="mt-1">
                <a href="#" className="text-black-500 hover:underline">Email: </a>  
                <a href="mailto:bella@goaly.ai" className="text-blue-500 hover:underline">bella@goaly.ai</a> 
            </p>
        </div>
    </section>
);

// Footer Component
const Footer = () => (
  <footer className="text-center mt-8">
    {/* <p className="text-gray-600 text-lg font-semibold italic">"在所有人还在比谁的产品更便宜时，我们让您的产品，成为唯一被记住的那个。"</p> */}
  </footer>
);
