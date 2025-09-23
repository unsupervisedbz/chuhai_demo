import React, { useState } from 'react';

// Real Estate Demo Component
export default function RealEstateDemo() {
  const [activeTab, setActiveTab] = useState('problem');

  // Update page title
  React.useEffect(() => {
    document.title = 'Real Estate Demo';
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
    <p className="mt-2 md:mt-4 text-lg md:text-2xl text-gray-600">Real Estate Marketing Intelligence Platform</p>
    <p className="mt-4 text-base md:text-lg max-w-3xl mx-auto bg-blue-100 text-blue-800 p-3 rounded-lg border border-blue-200">
      "当所有地产公司都在卖'地段'和'价格'，我们卖的是——没人敢说的真相，和精准打中的空白市场。"
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

// Content Sections (simplified for real estate demo)
const ProblemSection = () => (
    <section>
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-red-600">核心问题：阻碍地产营销成功的三大挑战</h2>
        
        <div className="space-y-6">
            <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-bold text-orange-700 mb-4">问题1: 客户获取成本高</h3>
                <div className="space-y-3 text-gray-700">
                    <p><strong>获客成本不断攀升：</strong>传统地产营销获客成本从2019年的$200/人上升到2024年的$800/人。</p>
                    <p><strong>转化率持续下降：</strong>营销转化率从15%下降到5%，大量营销预算浪费。</p>
                    <p><strong>客户信任度低：</strong>过度营销导致客户对地产广告信任度降至历史低点。</p>
                </div>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-bold text-red-700 mb-4">问题2: 地产营销同质化困境</h3>
                <div className="space-y-3 text-gray-700">
                    <p><strong>产品高度同质化：</strong>所有楼盘都强调"黄金地段"、"地铁直达"、"学区房"等相同卖点。</p>
                    <p><strong>营销文案高度复制：</strong>全网都是"投资首选"、"升值潜力"、"稀缺房源"。</p>
                    <p><strong>渠道模式雷同：</strong>全都依赖中介渠道，用"返点+优惠"拼价格。</p>
                </div>
            </div>

            

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-bold text-yellow-700 mb-4">问题3: 数据驱动决策能力弱</h3>
                <div className="space-y-3 text-gray-700">
                    <p><strong>缺乏精准客户画像：</strong>无法准确识别高价值客户，营销资源分散。</p>
                    <p><strong>市场趋势把握滞后：</strong>依赖传统调研，无法实时捕捉市场变化。</p>
                    <p><strong>个性化营销能力不足：</strong>千人一面的营销内容，无法满足不同客户需求。</p>
                </div>
            </div>
        </div>
    </section>
);

const SolutionSection = () => (
    <section>
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-blue-600 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
            我们的解决方案：您的地产营销"智能大脑"
        </h2>
        <p className="text-gray-700 text-base md:text-lg mb-6">我们不是卖软件，是为您打造一个自动分析、自动决策、自动落地的AI地产营销作战系统，专为地产企业定制。</p>
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
    </section>
);

const FeaturesSection = () => (
    <section>
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-gray-800">核心功能模块：四维AI驱动，从洞察到成交</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg border">
                <h3 className="font-bold text-lg text-blue-700 mb-2">✅ 模块一：AI市场情报引擎</h3>
                <p className="text-gray-600 mb-3">看透市场，不看PPT。实时抓取地产市场数据、竞品信息、客户反馈。</p>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                    <li>追踪地产行业最新趋势和消费者行为变化</li>
                    <li>分析区域需求和价格波动</li>
                    <li>发现被忽略的"未被满足的需求"</li>
                </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg border">
                <h3 className="font-bold text-lg text-blue-700 mb-2">✅ 模块二：竞品智能分析</h3>
                <p className="text-gray-600 mb-3">知己知彼，找到您独一无二的"护城河"。</p>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                    <li>全方位扫描竞争对手的项目和定价策略</li>
                    <li>解析明星项目的成功要素和市场渗透路径</li>
                    <li>基于SWOT框架的智能化分析，生成差异化定位和市场策略</li>
                </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg border">
                <h3 className="font-bold text-lg text-blue-700 mb-2">✅ 模块三：AI项目定位推荐</h3>
                <p className="text-gray-600 mb-3">从"卖房子"到"定义生活方式"。当您想推出新一代地产项目时，AI为您生成完整的落地方案。</p>
                <div className="overflow-x-auto bg-white rounded shadow-sm border">
                    <table className="w-full text-xs text-left text-gray-600">
                        <tbody>
                        <tr className="bg-gray-100"><td className="px-3 py-2 font-medium text-gray-800">市场时机分析</td><td className="px-3 py-2">年轻家庭购房需求增长，市场复合年均增长率（CAGR）达12%</td></tr>
                            <tr className="border-b"><td className="px-3 py-2 font-medium text-gray-800">目标人群</td><td className="px-3 py-2">28-40岁双职工家庭，注重教育资源和通勤便利。有学区房需求。</td></tr>
                            <tr className="bg-gray-100 border-b"><td className="px-3 py-2 font-medium text-gray-800">核心痛点</td><td className="px-3 py-2">不想买'老破小'，但预算有限。传统学区房价格高，居住体验差。</td></tr>
                            <tr className="border-b"><td className="px-3 py-2 font-medium text-gray-800">解决方案</td><td className="px-3 py-2">专为年轻家庭打造的智能学区房，现代设计+优质教育+便捷通勤，一次解决3个问题。</td></tr>
                            <tr className="bg-gray-100"><td className="px-3 py-2 font-medium text-gray-800">关键优势</td><td className="px-3 py-2">性价比高。智能家居系统，居住体验升级。</td></tr>
                        </tbody>
                    </table>
                </div>
                <p className="mt-3 text-xs text-gray-500 bg-white p-2 rounded border"> AI为您生成完整的落地方案，包括市场调研、项目定位、营销策略、销售渠道、递推过程跟踪等。辅助您的市场部门制定完整的新项目上市计划。</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg border">
                <h3 className="font-bold text-lg text-blue-700 mb-2">✅ 模块四：AI本地化GTM引擎</h3>
                <p className="text-gray-600 mb-3">快速拿下渠道合作。AI为您生成7步自动合作推进流程。</p>
                <ol className="text-sm space-y-2 text-gray-700">
                    <li><strong>1. 筛选合作伙伴：</strong>锁定口碑好、客户质量高的优质中介和渠道</li>
                    <li><strong>2. 合作提案：</strong>为中介自动创建定制化的合作提案。自动化执行outreach计划，实时跟进，建立您本地的AI智能CRM客户管理系统。</li>
                    <li><strong>3. 生成定制化素材：</strong>自动产出定制化的社交媒体素材、宣传海报、营销话术模版和销售培训材料。</li>
                    <li><strong>4. 赋能渠道试用：</strong>帮助渠道开展项目体验活动，并提供AI客户反馈报告。</li>
                    <li><strong>5. 匹配KOL：</strong>推荐高转化率的房产/生活方式类博主。</li>
                    <li><strong>6. 实时检测报告：</strong>实时跟踪数据：体验转化率、客户购买意向、社交媒体提及量、渠道推荐意愿等。</li>
                    <li><strong>7. 动态优化策略：</strong>如果某一个步骤的转化率低？AI自动建议换话术、换KOL、换定价模型</li>
                </ol>
                <p className="mt-3 bg-yellow-100 text-yellow-800 p-2 text-sm rounded"> 💯 <strong>"结果：传统方式6个月谈下5家合作 → AI引擎3周谈下12家，转化率提升210%。"</strong></p>
            </div>
        </div>
    </section>
);

const CaseStudiesSection = () => (
    <section>
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">案例展示：从战略到执行</h2>
        <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="font-bold text-xl text-blue-700 mb-4">应用AI地产营销引擎</h3>
            <p className="mb-6 text-gray-600">我们为一家地产开发商执行了为期一个月的营销优化计划，核心是利用AI快速、精准地提升营销效果。</p>
            <div className="space-y-4">
                <div className="flex items-start p-4 bg-white rounded-lg">
                    <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <div>
                        <h4 className="font-semibold">第1周：智能客户画像</h4>
                        <p className="text-gray-600">AI分析客户数据，生成精准客户画像，识别高价值潜在客户。</p>
                    </div>
                </div>
                <div className="flex items-start p-4 bg-white rounded-lg">
                    <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <div>
                        <h4 className="font-semibold">第2周：个性化营销内容</h4>
                        <p className="text-gray-600">基于客户画像生成个性化营销内容，提升转化率。</p>
                    </div>
                </div>
                <div className="flex items-start p-4 bg-white rounded-lg">
                    <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <div>
                        <h4 className="font-semibold">第3-4周：效果优化</h4>
                        <p className="text-gray-600">AI实时追踪营销效果，动态调整策略，最终转化率提升150%。</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

const WhyUsSection = () => (
    <section>
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">为什么选择我们？不是另一个SaaS工具</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border rounded-lg p-4 bg-red-50">
                <h4 className="font-bold text-red-600 text-lg">传统工具</h4>
                <ul className="list-disc list-inside mt-2 text-red-900">
                    <li>给你数据</li>
                    <li>让你"知道"</li>
                    <li>需要你写文案</li>
                    <li>指导你找客户</li>
                    <li>月付$5,000</li>
                </ul>
            </div>
            <div className="border rounded-lg p-4 bg-green-50">
                <h4 className="font-bold text-green-600 text-lg">我们的AI营销引擎</h4>
                <ul className="list-disc list-inside mt-2 text-green-900">
                    <li>给你战略</li>
                    <li>让你"做到"</li>
                    <li>自动生成并测试文案</li>
                    <li>自动筛选+触达+优化</li>
                    <li>按销售结果付费</li>
                </ul>
            </div>
        </div>
        <div className="mt-8 bg-blue-600 text-white p-6 rounded-lg text-center">
            <h3 className="text-xl font-bold mb-2">💼 我们的收费模式：0年费 + 销售额5%成功分成</h3>
            <p>您不卖，我们不赚。我们是您的增长合伙人，不是供应商。</p>
        </div>
    </section>
);

const NextStepsSection = () => (
    <section>
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">下一步：让您的项目，成为地产市场的新标准</h2>
        <p className="text-lg text-gray-600 mb-8">我们不卖房子，我们帮您重新定义"地产营销"是什么。现在，您有三个选择：</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="p-6 border rounded-lg hover:shadow-xl transition-shadow">
                <p className="text-4xl mb-2">📉</p>
                <h4 className="font-bold">继续卷价格</h4>
                <p className="text-gray-500">利润被压缩到地板</p>
            </div>
            <div className="p-6 border rounded-lg hover:shadow-xl transition-shadow">
                <p className="text-4xl mb-2">🤷‍♂️</p>
                <h4 className="font-bold">花钱做调研</h4>
                <p className="text-gray-500">花$50万，等6个月</p>
            </div>
            <div className="p-6 border-2 border-blue-500 rounded-lg shadow-lg bg-blue-50 hover:shadow-2xl transition-shadow">
                <p className="text-4xl mb-2">✅</p>
                <h4 className="font-bold text-blue-600">接入AI引擎</h4>
                <p className="text-gray-500">7天内获得"差异化突围方案"</p>
            </div>
        </div>
        <div className="mt-10 text-center">
            <button className="bg-blue-600 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-700 transition-colors text-lg">
                📞 联系我们，开启您的"非价格战"地产营销之旅
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
    <p className="text-gray-600 text-lg font-semibold italic">"在所有人还在比谁的房子更便宜时，我们让您的房子，成为唯一被记住的那个。"</p>
  </footer>
);
