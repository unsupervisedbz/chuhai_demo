import React, { useState } from 'react';

// Ecommerce Demo Component
export default function EcommerceDemo() {
  const [activeTab, setActiveTab] = useState('problem');
  const [showPositioningWorkflow, setShowPositioningWorkflow] = useState(false);

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
        return <FeaturesSection showPositioningWorkflow={showPositioningWorkflow} setShowPositioningWorkflow={setShowPositioningWorkflow} />;
      case 'results':
        return <CaseStudiesSection />;
      case 'why-us':
        return <WhyUsSection />;
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
    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold gradient-text">AI出海GTM营销增长引擎</h1>
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
      { id: 'results', label: '业界成功案例' },
    { id: 'why-us', label: '为何是我们' },
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
                    <p>客户只看价格，品牌无记忆点，毛利率被无限压缩。企业陷入到无限的价格战恶性竞争。<span className="font-semibold">如何针对目标客户定制化选品+差异化营销，是每个出海电商企业必须解决的问题。</span></p>
                </div>
            </div>

            <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-bold text-orange-700 mb-4">问题2: 获客成本持续攀升</h3>
                <div className="space-y-3 text-gray-700">
                    <p><strong>转化率持续下降：</strong>Instagram DM 转化率从2023到2025下降了28% <a href="https://napolify.com/blogs/news/instagram-dm-sales-conversion" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[1]</a>。</p>
                    <p><strong>即时回复是关键：</strong>数据揭示：回复速度比粉丝数量更重要，品牌在一分钟内回复比30分钟后回复的转化率高391% <a href="https://napolify.com/blogs/news/instagram-dm-sales-conversion" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[2]</a>。</p>
                    <p><strong>个人定制化提高转化率：</strong>最优解需要高度定制的内容 从3秒hook → value delivery → curiosity gap → specific CTA → DM capture 5个步骤需要在24-72小时内高速完成。平均转化率vs最优转化率：0.84% vs 3%</p>
                </div>
                <div className="mt-4 bg-orange-100 border border-orange-200 text-orange-800 p-3 rounded">
                    <p className="font-bold">结果？</p>
                    <p>传统电商获客成本高 - FB/IG CAC：$45-75 /人 <a href="https://www.upcounting.com/blog/average-ecommerce-customer-acquisition-cost" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[3]</a>，TikTok CAC：$25-45 /人 <a href="https://www.upcounting.com/blog/average-ecommerce-customer-acquisition-cost" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[4]</a>, Shopify CAC：$127 and $462/人 <a href="https://www.shopify.com/blog/customer-lifetime-value" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[5]</a>。但是客户平均生命周期价值仅为$72 <a href="https://www.zikanalytics.com/blog/shopify-statistics/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[6]</a>，利润微薄。</p>
                </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-bold text-yellow-700 mb-4">问题3: 缺乏个性化营销能力</h3>
                <div className="space-y-3 text-gray-700">
                    <p><strong>千人一面的营销：</strong>无法根据用户行为偏好提供个性化推荐和营销内容。</p>
                    <p><strong>客户画像不精准：</strong>缺乏深度用户洞察，无法识别高价值客户群体。</p>
                    <p><strong>营销时机把握不准：</strong>无法在最佳时机触达客户，错失销售机会。</p>
                </div>
                {/* <div className="mt-4 bg-yellow-100 border border-yellow-200 text-yellow-800 p-3 rounded">
                    <p className="font-bold">结果？</p>
                    <p>营销效率低下，客户满意度仅为60%，品牌忠诚度持续下降。</p>
                </div> */}
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
            <p className="text-gray-700 text-base md:text-lg mb-6">我们不是卖软件，是为您打造一个自动分析、自动决策、自动落地的AI营销引擎，专为出海电商企业定制。</p>
            
            {/* 解决方案核心要点 */}
            <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-bold text-blue-800 mb-4">💡 解决方案核心要点</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white p-4 rounded-lg border border-blue-200">
                        <h4 className="font-semibold text-blue-700 mb-3">1. 一体式Marketing+Sales系统</h4>
                        <p className="text-gray-700 text-sm">解决市场、销售、内容制作部门之间信息流通障碍、或者广告投放得到的潜在客户没有销售及时转化， 或者关键信息丢失/不一致导致的转化率瓶颈</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-blue-200">
                        <h4 className="font-semibold text-blue-700 mb-3">2. 企业专属AI模型</h4>
                        <p className="text-gray-700 text-sm">根据企业已有的工作流程和数据闭环生成企业专属模型，智能调用相关ERP、CRM、EHR等系统，支持国内、海外两套营销工具生态系统，提升市场、销售部门的工作效率</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-blue-200">
                        <h4 className="font-semibold text-blue-700 mb-3">3. 多模态本地化素材生成</h4>
                        <p className="text-gray-700 text-sm">多模态本地化宣传素材生成 + AI虚拟人IG/TikTok广告，为中小型电商公司节省内容成本</p>
                    </div>
                </div>
            </div>
            
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
                                <div className="text-sm font-medium text-blue-800">AI推理规划</div>
                            </div>
                            <div className="bg-blue-50 border border-blue-200 p-3 rounded text-center">
                                <div className="text-sm font-medium text-blue-800">营销专属模型++工具生态系统</div>
                            </div>
                            <div className="bg-blue-50 border border-blue-200 p-3 rounded text-center">
                                <div className="text-sm font-medium text-blue-800">AI多模态识别 & 视频/音频/图片生成</div>
                            </div>
                            <div className="bg-blue-50 border border-blue-200 p-3 rounded text-center">
                                <div className="text-sm font-medium text-blue-800">AI CRM</div>
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
                                        <div className="text-xs text-gray-600">结合用户需求和市场趋势,提供智能化选品及定价方案，打造差异度</div>
                                    </div>
                                    <div className="bg-purple-50 border border-purple-200 p-3 rounded">
                                        <div className="text-sm font-medium text-purple-800 mb-1">商品展示和素材生成</div>
                                        <div className="text-xs text-gray-600">自动生成商品Demo + 本地化宣传素材</div>
                                    </div>
                                    <div className="bg-purple-50 border border-purple-200 p-3 rounded">
                                        <div className="text-sm font-medium text-purple-800 mb-1">定价策略</div>
                                        <div className="text-xs text-gray-600">合理的定价策略考虑成本和利润,结合市场竞争状况</div>
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-3">
                                <h5 className="text-sm font-semibold text-purple-600">场 (Channel)</h5>
                                <div className="space-y-2">
                                    <div className="bg-purple-50 border border-purple-200 p-3 rounded">
                                        <div className="text-sm font-medium text-purple-800 mb-1">虚拟货场</div>
                                        <div className="text-xs text-gray-600">实现虚拟货场快速、低成本、大批量搭建</div>
                                    </div>
                                    <div className="bg-purple-50 border border-purple-200 p-3 rounded">
                                        <div className="text-sm font-medium text-purple-800 mb-1">全渠道转化率优化</div>
                                        <div className="text-xs text-gray-600">实时监控全链路的转化效果 </div>
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

const FeaturesSection = ({ showPositioningWorkflow, setShowPositioningWorkflow }) => (
    <section>
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-gray-800">核心功能模块：四维AI驱动，从洞察到成交</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg border">
                <h3 className="font-bold text-lg text-blue-700 mb-2">✅ 模块一：AI客户洞察引擎</h3>
                <p className="text-gray-600 mb-3">深度了解客户，不看表面数据。实时分析用户行为、购买偏好、生命周期价值。定位核心目标群体。</p>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                    <li>追踪用户购买路径和决策节点</li>
                    <li>分析季节性需求和趋势变化</li>
                    <li>识别高价值客户和潜在流失风险</li>
                    <li>预测客户未来购买行为</li>
                </ul>
                {/* <p className="mt-3 bg-yellow-100 text-yellow-800 p-2 text-sm rounded">💡 <strong>案例发现：</strong>AI发现您的客户中25%是"冲动购买型"，但现有营销策略完全忽略了这一群体——这就是您的机会。</p> */}
            </div>
            <div className="bg-gray-50 p-6 rounded-lg border">
                <h3 className="font-bold text-lg text-blue-700 mb-2">✅ 模块二：AI智能选品 + 营销内容生成</h3>
                {/* <p className="text-gray-600 mb-3">千人千面，精准触达。基于用户画像和行为数据，生成个性化营销内容。</p> */}
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                            <li>
                                智能产品定位推荐 + 差异度策略 <span 
                                    className="text-blue-600 hover:text-blue-800 hover:underline cursor-pointer font-medium"
                                    onClick={() => setShowPositioningWorkflow(!showPositioningWorkflow)}
                                >
                                    (细节流程)
                                </span>
                        {showPositioningWorkflow && (
                            <div className="mt-4 bg-white p-4 rounded-lg border border-blue-200">
                                <h4 className="font-semibold text-blue-700 mb-3">🎯 智能产品定位实施流程</h4>
                                <div className="space-y-4">
                                    {/* Phase 1 */}
                                    <div className="border-l-4 border-blue-500 pl-4">
                                        <h5 className="font-semibold text-gray-800 mb-2">第一阶段：调研分析</h5>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                                            <div>
                                                <div className="font-medium text-gray-700 mb-1">客户调研</div>
                                                <ul className="text-gray-600 space-y-1">
                                                    <li>• 基于AI的客户反馈情感分析</li>
                                                    <li>• 使用预测分析识别高价值客户群体</li>
                                                    <li>• 绘制客户旅程和痛点地图</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <div className="font-medium text-gray-700 mb-1">竞品分析</div>
                                                <ul className="text-gray-600 space-y-1">
                                                    <li>• 部署自动化竞品监控工具</li>
                                                    <li>• 分析竞品全渠道定位策略</li>
                                                    <li>• 识别定位空白和机会点</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    {/* Phase 2 */}
                                    <div className="border-l-4 border-green-500 pl-4">
                                        <h5 className="font-semibold text-gray-800 mb-2">第二阶段：策略制定</h5>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                                            <div>
                                                <div className="font-medium text-gray-700 mb-1">产品定位框架创建</div>
                                                <ul className="text-gray-600 space-y-1">
                                                    <li>• 基于数据洞察定义独特价值主张</li>
                                                    <li>• 选择主要定位类型（功能/情感/象征/体验）</li>
                                                    <li>• 制定定位声明和传播架构</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <div className="font-medium text-gray-700 mb-1">差异化策略</div>
                                                <ul className="text-gray-600 space-y-1">
                                                    <li>• 基于客户数据优先差异化维度</li>
                                                    <li>• 创建竞争优势地图</li>
                                                    <li>• 设计独特销售主张(USP)</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    {/* Phase 3 */}
                                    <div className="border-l-4 border-yellow-500 pl-4">
                                        <h5 className="font-semibold text-gray-800 mb-2">第三阶段：执行测试</h5>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                                            <div>
                                                <div className="font-medium text-gray-700 mb-1">内容开发</div>
                                                <ul className="text-gray-600 space-y-1">
                                                    <li>• 使用AI写作工具创建产品定位素材</li>
                                                    <li>• 制定多渠道传播策略</li>
                                                    <li>• 为销售/营销团队建立营销定位白皮书 + 话术模版</li>
                                                    <li>• 在所有营销素材中体现产品定位 保证Marketing+Sales内容一致性</li>
                                                    <li>• 结合真人客户评测反馈 + AI虚拟海外用户群体调研 + 产品使用反馈分析，不断优化产品定位</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <div className="font-medium text-gray-700 mb-1">A/B测试与优化</div>
                                                <ul className="text-gray-600 space-y-1">
                                                    <li>• 跨渠道测试定位信息</li>
                                                    <li>• 使用AI分析衡量定位效果</li>
                                                    <li>• 基于性能数据迭代优化</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    {/* Phase 4 */}
                                    <div className="border-l-4 border-purple-500 pl-4">
                                        <h5 className="font-semibold text-gray-800 mb-2">第四阶段：监控优化 (持续进行)</h5>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                                            <div>
                                                <div className="font-medium text-gray-700 mb-1">性能追踪</div>
                                                <ul className="text-gray-600 space-y-1">
                                                    <li>• 监控品牌感知指标</li>
                                                    <li>• 追踪竞品定位变化</li>
                                                    <li>• 测量市场响应和转化率</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <div className="font-medium text-gray-700 mb-1">持续优化</div>
                                                <ul className="text-gray-600 space-y-1">
                                                    <li>• 使用预测分析调整定位</li>
                                                    <li>• 基于市场反馈更新定位</li>
                                                    <li>• 季度性完善差异化策略</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </li>
                    <li>动态定价策略优化</li>
                    <li>个性化网站+社交媒体宣传素材生成，本地化素材转化</li>
                </ul>
                <div className="mt-3 bg-green-100 text-green-800 p-2 text-sm rounded">
                    <p className="font-semibold mb-1">🎯 <strong>输出结果：</strong></p>
                    <div className="space-y-1">
                        <div>举例：Grammarly通过使用AI识别高意向Lead，将其升级计划的转化率提高了80% <a href="https://superagi.com/case-study-how-ai-lead-scoring-boosted-conversion-rates-by-25-for-top-b2b-companies-in-2025/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[来源]</a></div>
                        {/* <div><strong>2.</strong> 动态定价策略，平均客单价提升25%</div>
                        <div><strong>3.</strong> 个性化营销内容，客户满意度提升至85%</div> */}
                    </div>
                </div>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg border">
                <h3 className="font-bold text-lg text-blue-700 mb-2">✅ 模块三：AI营销流程自动化</h3>
                <p className="text-gray-600 mb-3">从"手动营销"到"智能营销"。AI自动执行营销策略，24/7不间断优化。</p>
                <div className="overflow-x-auto bg-white rounded shadow-sm border">
                    <table className="w-full text-xs text-left text-gray-600">
                        <tbody>
                        <tr className="bg-gray-100"><td className="px-3 py-2 font-medium text-gray-800">AI 智能导购 + Conversational Marketing</td><td className="px-3 py-2">AI导购24/7解答客户问题，帮助客户快速决策</td></tr>
                        <tr className="bg-gray-100"><td className="px-3 py-2 font-medium text-gray-800">新客户欢迎</td><td className="px-3 py-2">自动发送个性化欢迎邮件，提升首次购买转化率</td></tr>
                        <tr className="border-b"><td className="px-3 py-2 font-medium text-gray-800">购物车放弃</td><td className="px-3 py-2">智能识别放弃原因，自动发送挽回邮件</td></tr>
                        <tr className="bg-gray-100 border-b"><td className="px-3 py-2 font-medium text-gray-800">客户生命周期</td><td className="px-3 py-2">根据购买历史，自动推荐相关产品</td></tr>
                        <tr className="border-b"><td className="px-3 py-2 font-medium text-gray-800">流失预警</td><td className="px-3 py-2">预测客户流失风险，主动营销挽回</td></tr>
                        <tr className="bg-gray-100"><td className="px-3 py-2 font-medium text-gray-800">复购激励</td><td className="px-3 py-2">基于客户价值，自动发放个性化优惠券</td></tr>
                        <tr className="border-b"><td className="px-3 py-2 font-medium text-gray-800">KOL/分销商智能匹配</td><td className="px-3 py-2">AI自动寻找合适的本地KOL和分销商，加速营销递推</td></tr>
                        <tr className="bg-gray-100"><td className="px-3 py-2 font-medium text-gray-800">智能A/B测试优化</td><td className="px-3 py-2">AI自动进行A/B测试，优化营销文案和促销活动效果</td></tr>
                        <tr className="border-b"><td className="px-3 py-2 font-medium text-gray-800">AI Lead评分 </td><td className="px-3 py-2">预测转化 发现潜在高价值客户 提升转化率</td></tr>
                        </tbody>
                    </table>
                </div>
                <p className="mt-3 text-xs text-gray-500 bg-white p-2 rounded border"> AI为您生成完整的营销自动化流程，包括触发条件、内容模板、发送时机等，实现全自动化客户运营。</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg border">
                <h3 className="font-bold text-lg text-blue-700 mb-2">✅ 模块四：AI 全链路投放效果监控</h3>
                <p className="text-gray-600 mb-3">数据驱动决策，精准优化投放。AI实时监控全链路营销效果，智能优化投放策略。</p>
                <ol className="text-sm space-y-2 text-gray-700">
                    <li><strong>1. CPM/CPC，CTR/CR，CAC/LTV 全链路实时监控：</strong>发现链路中的递推瓶颈，实时优化投放效果</li>
                    <li><strong>2. 营销预算动态规划：</strong>基于ROI数据智能分配预算，确保每一分钱都花在刀刃上</li>
                    <li><strong>3. 多渠道效果对比分析：</strong>Facebook、Google、TikTok等平台效果横向对比，找出最优投放渠道</li>
                    <li><strong>4. 实时预警系统：</strong>成本异常、转化率下降等关键指标自动预警，及时止损</li>
                    <li><strong>5. 竞品投放策略监控：</strong>追踪竞品广告投放策略，发现市场机会和竞争威胁</li>
                    <li><strong>6. 客户生命周期价值优化：</strong>基于LTV数据优化获客成本，提升整体盈利能力</li>
                </ol>
                {/* <p className="mt-3 bg-yellow-100 text-yellow-800 p-2 text-sm rounded"> 💯 <strong>"结果：传统方式手动分析 → AI引擎实时监控，投放效率提升250%，ROI提升180%。"</strong></p> */}
            </div>
        </div>
    </section>
);

const CaseStudiesSection = () => (
    <section>
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">业界成功案例</h2>
        
        {/* 转化率提升案例 */}
        <div className="bg-blue-50 p-6 rounded-lg mb-6">
            <h3 className="font-bold text-xl text-blue-700 mb-4">🚀 智能Lead评分: 转化率提升案例</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-600 mb-2">Grammarly</h4>
                    <p className="text-gray-600 mb-2">通过使用AI识别高意向Lead，将其升级计划的转化率提高了<strong>80%</strong></p>
                    {/* <p className="text-sm text-gray-500">来源: <a href="https://superagi.com/case-study-how-ai-lead-scoring-boosted-conversion-rates-by-25-for-top-b2b-companies-in-2025/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">SuperAGI案例研究</a></p> */}
                </div>
                <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-600 mb-2">科技SaaS提供商</h4>
                    <p className="text-gray-600 mb-2">实施AI驱动的Lead评分后，转化率提高了<strong>32%</strong></p>
                    {/* <p className="text-sm text-gray-500">来源: <a href="https://superagi.com/case-study-how-ai-lead-scoring-boosted-conversion-rates-by-25-for-top-b2b-companies-in-2025/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">SuperAGI案例研究</a></p> */}
                </div>
            </div>
            
            {/* 关键数据洞察 */}
            <div className="mt-6">
                <h4 className="font-bold text-lg text-blue-700 mb-4">📊 关键数据洞察</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-lg">
                        <h5 className="font-semibold text-blue-600 mb-2">AI Lead评分效果</h5>
                        <ul className="text-sm text-gray-600 space-y-1">
                            <li>• Lead资格认定准确性提高<strong>40%</strong></li>
                            <li>• 转化率提高<strong>40%</strong>，误判率降低<strong>30%</strong></li>
                            <li>• 高绩效公司可达到<strong>6%</strong>转化率（vs 3.2%平均）</li>
                        </ul>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                        <h5 className="font-semibold text-blue-600 mb-2">时机影响</h5>
                        <ul className="text-sm text-gray-600 space-y-1">
                            <li>• 第一小时内跟进Lead转化率提高到<strong>53%</strong></li>
                            <li>• 预测性Lead评分使用增长<strong>14倍</strong></li>
                            <li>• 领先公司AI项目ROI是同行<strong>2.1倍</strong></li>
                        </ul>
                    </div>
                </div>
                <p className="mt-4 text-sm text-gray-500 text-center">数据来源: <a href="https://superagi.com/case-study-how-ai-lead-scoring-boosted-conversion-rates-by-25-for-top-b2b-companies-in-2025/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">SuperAGI案例研究</a> | <a href="https://iterable.com/blog/15-stats-roi-ai-marketing/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Iterable</a></p>
            </div>
        </div>

        {/* AI定制化营销提高商业表现 */}
        <div className="bg-indigo-50 p-6 rounded-lg mb-6">
            <h3 className="font-bold text-xl text-indigo-700 mb-4">🎯 AI定制化营销：商业表现提升数据</h3>
            <div className="overflow-x-auto bg-white rounded-lg shadow-sm border">
                <table className="w-full text-sm border-collapse border border-gray-300">
                    <thead>
                        <tr className="bg-indigo-50">
                            <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-indigo-800">营销指标</th>
                            <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-indigo-800">AI定制化影响</th>
                            <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-indigo-800">数据来源</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border border-gray-300 px-4 py-3 font-medium text-gray-800">使用AI定制化的营销人员</td>
                            <td className="border border-gray-300 px-4 py-3 text-gray-700"><strong>59%</strong>的营销人员（企业级）</td>
                            <td className="border border-gray-300 px-4 py-3 text-gray-600">Salesforce调查</td>
                        </tr>
                        <tr className="bg-gray-50">
                            <td className="border border-gray-300 px-4 py-3 font-medium text-gray-800">平均ROI改善</td>
                            <td className="border border-gray-300 px-4 py-3 text-gray-700"><strong>+25%</strong>营销ROI</td>
                            <td className="border border-gray-300 px-4 py-3 text-gray-600">Accenture研究</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 px-4 py-3 font-medium text-gray-800">定制化带来的销售增长</td>
                            <td className="border border-gray-300 px-4 py-3 text-gray-700"><strong>+20%</strong>销售提升</td>
                            <td className="border border-gray-300 px-4 py-3 text-gray-600">BCG分析</td>
                        </tr>
                        <tr className="bg-gray-50">
                            <td className="border border-gray-300 px-4 py-3 font-medium text-gray-800">参与度</td>
                            <td className="border border-gray-300 px-4 py-3 text-gray-700"><strong>2倍</strong>更高的客户参与度</td>
                            <td className="border border-gray-300 px-4 py-3 text-gray-600">Statista/调查</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 px-4 py-3 font-medium text-gray-800">转化率</td>
                            <td className="border border-gray-300 px-4 py-3 text-gray-700"><strong>1.7倍</strong>更高的转化率</td>
                            <td className="border border-gray-300 px-4 py-3 text-gray-600">HubSpot数据</td>
                        </tr>
                        <tr className="bg-gray-50">
                            <td className="border border-gray-300 px-4 py-3 font-medium text-gray-800">客户流失减少</td>
                            <td className="border border-gray-300 px-4 py-3 text-gray-700"><strong>-28%</strong>流失率（客户流失）</td>
                            <td className="border border-gray-300 px-4 py-3 text-gray-600">Gartner</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 px-4 py-3 font-medium text-gray-800">客户满意度</td>
                            <td className="border border-gray-300 px-4 py-3 text-gray-700"><strong>+30%</strong>CSAT分数</td>
                            <td className="border border-gray-300 px-4 py-3 text-gray-600">Forrester</td>
                        </tr>
                        <tr className="bg-gray-50">
                            <td className="border border-gray-300 px-4 py-3 font-medium text-gray-800">推荐产生的收入</td>
                            <td className="border border-gray-300 px-4 py-3 text-gray-700"><strong>35%</strong>的亚马逊电商收入</td>
                            <td className="border border-gray-300 px-4 py-3 text-gray-600">McKinsey</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 px-4 py-3 font-medium text-gray-800">快速增长者vs缓慢增长者收入</td>
                            <td className="border border-gray-300 px-4 py-3 text-gray-700"><strong>+40%</strong>定制化收入（领先者）</td>
                            <td className="border border-gray-300 px-4 py-3 text-gray-600">McKinsey</td>
                        </tr>
                        <tr className="bg-gray-50">
                            <td className="border border-gray-300 px-4 py-3 font-medium text-gray-800">营销成本降低</td>
                            <td className="border border-gray-300 px-4 py-3 text-gray-700"><strong>-50%</strong>更低获客成本（最高）</td>
                            <td className="border border-gray-300 px-4 py-3 text-gray-600">McKinsey</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            
            {/* 额外ROI和营销效率案例 */}
            <div className="mt-6">
                <h4 className="font-bold text-lg text-indigo-700 mb-4">💰 公司ROI和营销效率提升案例</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-white p-4 rounded-lg border border-indigo-200">
                        <h5 className="font-semibold text-indigo-600 mb-2">星巴克</h5>
                        <p className="text-gray-600 mb-2">营销ROI提高<strong>30%</strong></p>
                        <p className="text-sm text-gray-500">来源: <a href="https://www.brandxr.io/ai-powered-personalization-personalized-customer-experiences-at-scale" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">BrandXR</a></p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-indigo-200">
                        <h5 className="font-semibold text-indigo-600 mb-2">Netflix</h5>
                        <p className="text-gray-600 mb-2">通过AI个人定制化内容ROI提升30%，每年节省<strong>$10亿</strong></p>
                        <p className="text-sm text-gray-500">来源: <a href="https://www.brandxr.io/ai-powered-personalization-personalized-customer-experiences-at-scale" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">BrandXR</a></p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-indigo-200">
                        <h5 className="font-semibold text-indigo-600 mb-2">BCG研究数据</h5>
                        <p className="text-gray-600 mb-2">深度投资AI的组织平均看到销售ROI提高<strong>10-20%</strong></p>
                        <p className="text-sm text-gray-500">来源: <a href="https://www.bcg.com/publications/2025/closing-the-ai-impact-gap" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">BCG报告</a></p>
                    </div>
                </div>
            </div>
        </div>

        

    </section>
);

const WhyUsSection = () => {

    return (
        <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">为什么选择我们？不是另一个SaaS工具</h2>

            <div>
                {/* 核心优势 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    <div className="border rounded-lg p-4 bg-red-50">
                        <h4 className="font-bold text-red-600 text-lg">传统工具</h4>
                        <ul className="list-disc list-inside mt-2 text-red-900">
                            <li>给你数据</li>
                            <li>让你"知道"</li>
                            <li>需要你写文案</li>
                            <li>指导你做营销</li>
                            <li>只专注漏斗中的单一环节</li>
                            <li>月付$5,000</li>
                        </ul>
                    </div>
                    <div className="border rounded-lg p-4 bg-green-50">
                        <h4 className="font-bold text-green-600 text-lg">我们的AI营销增长引擎</h4>
                        <ul className="list-disc list-inside mt-2 text-green-900">
                            <li>给你增长</li>
                            <li>让你"做到"</li>
                            <li>自动生成并优化营销策略</li>
                            <li>自动执行+监控+优化</li>
                            <li>提供一站式端到端解决方案</li>
                            <li>按增长结果付费</li>
                        </ul>
                    </div>
                </div>

                {/* 我们的团队 */}
                <div>
                    <h3 className="text-xl md:text-2xl font-bold mb-4 text-gray-800">我们的团队</h3>
                    <h4 className="text-lg font-semibold text-gray-700 mb-4">技术与行业的完美融合</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="flex items-start p-4 bg-gray-50 rounded-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-4 text-blue-500 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.121 15.536c-1.171 1.952-3.07 1.952-4.242 0-1.172-1.953-1.172-5.119 0-7.072 1.171-1.952 3.07-1.952 4.242 0M12 10.5h.01M12 13.5h.01M12 16.5h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            <div>
                                <h4 className="font-semibold">前Meta Llama 核心研发团队</h4>
                                <p className="text-gray-600 text-sm">拥有世界级AI大模型研发背景，奠定我们坚实的技术实力。</p>
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
                                <h4 className="font-semibold">北美SMB企业运营经验</h4>
                                <p className="text-gray-600 text-sm">熟悉北美营销递推策略和隐私/数据合规要求</p>
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
                    
                    {/* Contact Information */}
                    <div className="mt-8 p-6 bg-gray-50 rounded-lg border">
                        <h4 className="text-lg font-bold text-gray-800 mb-3">联系我们</h4>
                        <div className="text-gray-700">
                            <p className="font-medium">Bella Zhu</p>
                            <p className="text-blue-600 hover:text-blue-800">
                                <a href="mailto:bella@goaly.ai">bella@goaly.ai</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            
        </section>
    );
};


// Footer Component
const Footer = () => (
  <footer className="text-center mt-8">
    {/* <p className="text-gray-600 text-lg font-semibold italic">"在所有人还在比谁的产品更便宜时，我们让您的产品，成为唯一被记住的那个。"</p> */}
  </footer>
);
