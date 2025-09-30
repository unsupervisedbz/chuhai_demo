import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import RealEstateDemo from './RealEstateDemo';
import EcommerceDemo from './EcommerceDemo';

// Main App Component with Routing
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/medical_equipment" element={<MarketingDemo />} />
        <Route path="/real_estate" element={<RealEstateDemo />} />
        <Route path="/ecommerce" element={<EcommerceDemo />} />
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </Router>
  );
}

// Marketing Demo Component (original content)
function MarketingDemo() {
  const [activeTab, setActiveTab] = useState('problem');

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
      {/* It's unconventional to put style tags in a component, but for a single self-contained file, it's the most direct way to include the necessary CSS. */}
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

// Landing Page Component
function LandingPage() {
  React.useEffect(() => {
    document.title = 'AI Marketing Demos';
  }, []);

    return (
    <>
      <style>{`
        body {
            font-family: 'Noto Sans SC', sans-serif;
            background-color: #f9fafb;
            color: #1f2937;
        }
        .gradient-text {
            background: linear-gradient(to right, #3b82f6, #1e40af);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
      `}</style>
      
      <div className="container mx-auto p-4 md:p-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-6">AI营销引擎演示</h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">选择您感兴趣的行业，体验AI驱动的营销解决方案</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Medical Equipment Demo */}
          <Link 
            to="/medical_equipment" 
            className="group block p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-blue-500"
          >
            <div className="text-center">
              <div className="text-6xl mb-4">🏥</div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors">
                医美仪器营销引擎
              </h2>
              <p className="text-gray-600 mb-6">
                专为医美仪器出海打造的AI营销系统，帮助您摆脱价格战，实现差异化突围
              </p>
              <div className="inline-flex items-center text-blue-600 font-semibold group-hover:text-blue-700">
                查看演示 
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </div>
            </div>
          </Link>

          {/* Real Estate Demo */}
          <Link 
            to="/real_estate" 
            className="group block p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-blue-500"
          >
            <div className="text-center">
              <div className="text-6xl mb-4">🏠</div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors">
                地产营销智能平台
              </h2>
              <p className="text-gray-600 mb-6">
                为地产企业提供AI驱动的营销解决方案，精准获客，提升转化率
              </p>
              <div className="inline-flex items-center text-blue-600 font-semibold group-hover:text-blue-700">
                查看演示 
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </div>
            </div>
          </Link>

          {/* Ecommerce Demo */}
          <Link 
            to="/ecommerce" 
            className="group block p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-blue-500"
          >
            <div className="text-center">
              <div className="text-6xl mb-4">🛒</div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors">
                电商增长智能引擎
              </h2>
              <p className="text-gray-600 mb-6">
                为电商企业提供AI驱动的增长解决方案，个性化营销，精准获客，提升转化率
              </p>
              <div className="inline-flex items-center text-blue-600 font-semibold group-hover:text-blue-700">
                查看演示 
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </div>
            </div>
          </Link>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-500 text-lg italic">
            "让您的品牌，成为唯一被记住的那个"
          </p>
        </div>
      </div>
    </>
  );
}

// Header Component
const Header = () => (
  <header className="text-center mb-8 md:mb-12">
    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold gradient-text">AI出海GTM营销引擎</h1>
    <p className="mt-2 md:mt-4 text-lg md:text-2xl text-gray-600">专为出海企业打造的“战略大脑”</p>
    <p className="mt-4 text-base md:text-lg max-w-3xl mx-auto bg-blue-100 text-blue-800 p-3 rounded-lg border border-blue-200">
       “当所有品牌都在卖‘紧致’和‘提拉’，我们让您的机器，成为<strong>唯一被记住的那个</strong>。”
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
    // { id: 'next-steps', label: '下一步' },
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

// --- Content Section Components ---

const ProblemSection = () => {
    return (
            <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-red-600">核心问题：阻碍医美仪器出海成功的三大挑战</h2>
            
            <div className="space-y-6">
                {/* Problem 1: 医美同质化困境 */}
                <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
                    <h3 className="text-xl font-bold text-red-700 mb-4">问题1: 医美同质化困境</h3>
                    <div className="space-y-3 text-gray-700">
                        <p><strong>产品高度同质化：</strong>Fotona、Thermage、Utherapy… 功能描述几乎一致："非侵入式抗衰"、"胶原再生"、"无恢复期"。</p>
                        <p><strong>营销文案高度复制：</strong>全网都是"皮肤年轻10岁"、"明星同款"、"医生推荐"。</p>
                        <p><strong>渠道模式雷同：</strong>全都找Medical Spa合作，用"返点+赠机"拼价格。</p>
                    </div>
                    <div className="mt-4 bg-red-100 border border-red-200 text-red-800 p-3 rounded">
                        <p className="font-bold">结果？</p>
                        <p>客户只看价格，品牌无记忆点，毛利率被压缩。企业陷入到无限的价格战恶性竞争，是<span className="font-semibold">美国60%的医美SPA营销低于业内平均的主要原因。</span></p>
                    </div>
                </div>

                {/* Problem 2: 进入北美市场的挑战 */}
                <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-lg">
                    <h3 className="text-xl font-bold text-orange-700 mb-4">问题2: 进入北美市场的挑战</h3>
                    <div className="space-y-4">
                        <div className="flex items-start p-4 bg-white rounded-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-orange-500 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9V3m0 18a9 9 0 009-9m-9 9a9 9 0 00-9-9" /></svg>
                            <div>
                                <h4 className="font-semibold">本土化壁垒</h4>
                                <p className="text-gray-600">难以快速理解北美市场特性和消费者偏好。营销内容本土化程度低，转化率差。无法精准识别市场空白和新机会。</p>
                            </div>
                        </div>
                        <div className="flex items-start p-4 bg-white rounded-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-orange-500 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                            <div>
                                <h4 className="font-semibold">缺乏对本地Medical Spa运营模式的深度理解</h4>
                                <p className="text-gray-600">不了解其客户管理、营销策略和盈利模式，导致合作方案缺乏吸引力。</p>
                            </div>
                        </div>
                        <div className="flex items-start p-4 bg-white rounded-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-orange-500 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <div>
                                <h4 className="font-semibold">难以建立信任关系和渠道网络</h4>
                                <p className="text-gray-600">作为新品牌，缺乏本地成功案例和口碑，难以说服诊所和医生进行合作。</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Problem 3: 落地周期长 成本高 */}
                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
                    <h3 className="text-xl font-bold text-yellow-700 mb-4">问题3: 落地周期长 获客成本高 转化率低</h3>
                    <div className="space-y-3 text-gray-700">
                        <p><strong>团队配置成本高：</strong>需要配备完整的市场+销售团队，包括市场调研、品牌定位、渠道拓展、客户服务等专业人员。</p>
                        <p><strong>时间周期长：</strong>整个流程动辄耗时数月，从市场调研到产品定位，从渠道建立到客户转化，每个环节都需要大量时间。</p>
                        <p><strong>试错成本高：</strong>缺乏本地市场经验，容易走弯路，每次调整都需要重新投入大量资源和时间。</p>
                    </div>
                    <div className="mt-4 bg-yellow-100 border border-yellow-200 text-yellow-800 p-3 rounded">
                        <p className="font-bold">结果？</p>
                        <p>传统方式进入北美市场需要6-12个月，投入成本预计～300万美元。</p>
                    </div>
                </div>
            </div>
            </section>
    );
};


const SolutionSection = () => (
            <section>
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-blue-600 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
            我们的解决方案：您的北美市场“营销增长引擎”
        </h2>
        
        {/* 解决方案核心要点 */}
        <div className="bg-blue-50 p-6 rounded-lg mb-6">
            <h3 className="text-lg font-bold text-blue-800 mb-4">💡 解决方案核心要点</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-4 rounded-lg border border-blue-200">
                    <h4 className="font-semibold text-blue-700 mb-3">1. 一体式Marketing+Sales系统</h4>
                    <p className="text-gray-700 text-sm">解决市场、销售、内容制作部门之间信息流通障碍、或者广告投放得到的潜在客户没有销售及时转化， 或者关键信息丢失/不一致导致的转化率瓶颈</p>
                    <br />
                    <p className="text-gray-700 text-sm">以最终结果（转化率，营业额）为导向，提升营销效率。</p>
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
                                <div className="font-medium text-purple-800">Simulated Environment</div>
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

const FeaturesSection = () => {
    const [showCompetitiveWorkflow, setShowCompetitiveWorkflow] = useState(true);
    const [expandedPhases, setExpandedPhases] = useState(new Set());

    const togglePhase = (phaseId) => {
        setExpandedPhases(prev => {
            const newSet = new Set(prev);
            if (newSet.has(phaseId)) {
                newSet.delete(phaseId);
            } else {
                newSet.add(phaseId);
            }
            return newSet;
        });
    };

    return (
    <section>
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-gray-800">核心功能模块：四维AI驱动，从洞察到成交</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg border">
                <h3 className="font-bold text-lg text-blue-700 mb-2">✅ 模块一：AI市场情报引擎</h3>
                <p className="text-gray-600 mb-3">看透市场，不看PPT。实时抓取北美10,000+ Medical Spa官网、社交媒体评论、搜索信息、客户真实反馈、市场趋势报告。</p>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                    <li>追踪北美医美行业最新趋势和消费者行为变化</li>
                    <li>分析季节性需求波动和区域差异</li>
                    <li>发现被忽略的“未被满足的需求”</li>
                    <li>分析竞品定价、促销及KOL合作策略</li>
                </ul>
                <p className="mt-3 bg-yellow-100 text-yellow-800 p-2 text-sm rounded">💡 <strong>案例发现：</strong>AI发现北美医美诊所有15-20%的客户是中年男性，大城市甚至达到了30%, 但只有<strong>2%</strong>的医美机构宣传针对中年男性——这就是您的机会。</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg border">
                <h3 className="font-bold text-lg text-blue-700 mb-2">✅ 模块二：竞品智能分析</h3>
                <p className="text-gray-600 mb-3">知己知彼，找到您独一无二的"护城河"。 <span 
                    className="text-blue-600 hover:text-blue-800 hover:underline cursor-pointer font-medium"
                    onClick={() => setShowCompetitiveWorkflow(!showCompetitiveWorkflow)}
                >
                    (详细流程)
                </span></p>
                {showCompetitiveWorkflow && (
                    <div className="mt-4 bg-white p-4 rounded-lg border border-blue-200">
                        <h4 className="font-semibold text-blue-700 mb-3">🎯 竞品智能分析实施流程</h4>
                        <div className="space-y-4">
                    {/* Phase 1 */}
                    <div className="border-l-4 border-blue-500 pl-4">
                        <h5 
                            className="font-semibold text-gray-800 mb-2 cursor-pointer hover:text-blue-600 hover:underline"
                            onClick={() => togglePhase('phase1')}
                        >
                            第一阶段：调研分析
                        </h5>
                        {expandedPhases.has('phase1') && (
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
                        )}
                    </div>
                    
                    {/* Phase 2 */}
                    <div className="border-l-4 border-green-500 pl-4">
                        <h5 
                            className="font-semibold text-gray-800 mb-2 cursor-pointer hover:text-blue-600 hover:underline"
                            onClick={() => togglePhase('phase2')}
                        >
                            第二阶段：策略制定
                        </h5>
                        {expandedPhases.has('phase2') && (
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
                        )}
                    </div>
                    
                    {/* Phase 3 */}
                    <div className="border-l-4 border-yellow-500 pl-4">
                        <h5 
                            className="font-semibold text-gray-800 mb-2 cursor-pointer hover:text-blue-600 hover:underline"
                            onClick={() => togglePhase('phase3')}
                        >
                            第三阶段：执行测试
                        </h5>
                        {expandedPhases.has('phase3') && (
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
                        )}
                    </div>
                    
                    {/* Phase 4 */}
                    <div className="border-l-4 border-purple-500 pl-4">
                        <h5 
                            className="font-semibold text-gray-800 mb-2 cursor-pointer hover:text-blue-600 hover:underline"
                            onClick={() => togglePhase('phase4')}
                        >
                            第四阶段：监控优化 (持续进行)
                        </h5>
                        {expandedPhases.has('phase4') && (
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
                        )}
                    </div>
                        </div>
                    </div>
                )}
                {/* <div className="mt-3 bg-green-100 text-green-800 p-3 text-sm rounded">
                    <p className="font-semibold mb-2">🎯 <strong>输出结果：</strong></p>
                    <div className="space-y-1">
                        <div><strong>1.</strong> 配备双手柄+五治疗头，独创治疗头可精准作用于2mm/3mm/4.5mm皮下层（传统仅3mm/4.5mm），实现超声刀无法覆盖区域的精细化抗衰，治疗维度更全面。</div>
                        <div><strong>2.</strong> 能量呈"圈状"分布，相比超声刀的"点状"聚焦更温和舒适，治疗无需敷麻药，痛感大幅降低。</div>
                        <div><strong>3.</strong> NMPA认证 更安全合规</div>
                    </div>
                </div> */}
            </div>
            <div className="bg-gray-50 p-6 rounded-lg border">
                <h3 className="font-bold text-lg text-blue-700 mb-2">✅ 模块三：AI新品定位推荐</h3>
                <p className="text-gray-600 mb-3">从“卖仪器”到“定义品类”。当您想推出新一代医美仪器时，AI为您生成完整的落地方案。</p>
                <div className="overflow-x-auto bg-white rounded shadow-sm border">
                    <table className="w-full text-xs text-left text-gray-600">
                        <tbody>
                        <tr className="bg-gray-100"><td className="px-3 py-2 font-medium text-gray-800">市场时机分析</td><td className="px-3 py-2">男性医美接受度提升，市场复合年均增长率（CAGR）达17%</td></tr>
                            <tr className="border-b"><td className="px-3 py-2 font-medium text-gray-800">目标人群</td><td className="px-3 py-2">35-55岁高净值男性，关注形象提升。有轻度脱发+下颌线松弛。</td></tr>
                            <tr className="bg-gray-100 border-b"><td className="px-3 py-2 font-medium text-gray-800">核心痛点</td><td className="px-3 py-2">不想做‘女人项目’，但想看起来更有精神。传统植发恢复期长，效果不自然。</td></tr>
                            <tr className="border-b"><td className="px-3 py-2 font-medium text-gray-800">解决方案</td><td className="px-3 py-2">专为男性面部轮廓重塑+解决脱发，45分钟疗程+0恢复期，一次解决2个问题。</td></tr>
                            <tr className="bg-gray-100"><td className="px-3 py-2 font-medium text-gray-800">关键优势</td><td className="px-3 py-2">效果自然。Lunch-time treatment, 无需等待恢复期。</td></tr>
                        </tbody>
                    </table>
                </div>
                <p className="mt-3 text-xs text-gray-500 bg-white p-2 rounded border"> AI为您生成完整的落地方案，包括市场调研、产品定位、营销策略、销售渠道、递推过程跟踪等。辅助您的市场部门制定完整的新品上市计划。</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg border">
                <h3 className="font-bold text-lg text-blue-700 mb-2">✅ 模块四：AI本地化GTM引擎</h3>
                <p className="text-gray-600 mb-3">快速拿下Medical Spa合作。AI为您生成7步自动合作推进流程。</p>
                <ol className="text-sm space-y-2 text-gray-700">
                    <li><strong>1. 筛选合作伙伴：</strong>锁定技术敏感型、高复购率的优质SPA</li>
                    <li><strong>2. 合作提案：</strong>为SPA自动创建定制化的合作提案。自动化执行outreach计划，实时跟进，建立您本地的AI智能CRM客户管理系统。</li>
                    <li><strong>3. 生成定制化素材：</strong>自动产出定制化的社交媒体素材、门店海报、营销话术模版和员工培训材料。</li>
                    <li><strong>4. 赋能SPA试用：</strong>帮助SPA开展试用活动，并提供AI客户反馈报告。</li>
                    <li><strong>5. 匹配KOL：</strong>推荐高转化率的男性健康/中年生活类博主。</li>
                    <li><strong>6. 实时检测报告：</strong>实时跟踪数据：试用转化率、客户复购意向、社交媒体提及量、SPA推荐意愿等。</li>
                    <li><strong>7. 动态优化策略：</strong>如果某一个步骤的转化率低？AI自动建议换话术、换KOL、换定价模型</li>
                </ol>
                <p className="mt-3 bg-yellow-100 text-yellow-800 p-2 text-sm rounded"> 💯 <strong>"结果：传统方式6个月谈下5家合作 → AI引擎3周谈下12家，转化率提升210%。"</strong></p>
            </div>
        </div>
    </section>
    );
};

const CaseStudiesSection = () => {
  const [activeSubTab, setActiveSubTab] = useState('gtm');

  const subTabs = [
    { id: 'gtm', label: '进入北美市场' },
    { id: 'dev', label: '新产品研发' },
    { id: 'industry', label: '业界成功案例' },
  ];

  return (
    <section>
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">模拟应用场景 & 业界成功案例</h2>
      <div className="mb-6 border-b border-gray-200">
        <nav className="flex -mb-px" aria-label="Sub-Tabs">
          {subTabs.map(tab => (
                <button 
              key={tab.id}
              onClick={() => setActiveSubTab(tab.id)}
              className={`sub-tab-btn text-sm md:text-base mr-4 py-3 px-1 border-b-2 font-medium ${activeSubTab === tab.id ? 'sub-tab-active' : 'sub-tab-inactive'}`}
            >
              {tab.label}
                </button>
          ))}
        </nav>
      </div>
      <div>
        {activeSubTab === 'gtm' && <GTMCaseStudy />}
        {activeSubTab === 'dev' && <DevCaseStudy />}
        {activeSubTab === 'industry' && <IndustryCaseStudy />}
      </div>
            </section>
  );
};

const GTMCaseStudy = () => (
    <div>
        <h3 className="font-bold text-xl text-blue-700 mb-4">AI本地化GTM引擎</h3>
        {/* <p className="mb-6 text-gray-600">我们为一家中国医美仪器厂商执行了为期一个月的北美市场进入计划，核心是利用AI快速、精准地建立本地渠道。</p> */}
        <ol className="relative border-l border-gray-200">                  
            <li className="mb-6 ml-4"><div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white"></div><h3 className="text-lg font-semibold text-gray-900">第1步：智能圈选 + 精准触达</h3><p className="text-base font-normal text-gray-500">AI分析全美市场，筛选出200家高潜力Medical Spa，并自动生成合作提案和定价策略，触达率95%。</p></li>
            <li className="mb-6 ml-4"><div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white"></div><h3 className="text-lg font-semibold text-gray-900">第2步：A搭建本地化CRM，自动化推进谈判链路</h3><p className="text-base font-normal text-gray-500">客户分层管理，关键节点自动跟进，提升转化效率。筛选出50家签约SPA。</p></li>
            <li className="mb-6 ml-4"><div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white"></div><h3 className="text-lg font-semibold text-gray-900">第3步：AI赋能SPA活动运营</h3><p className="text-base font-normal text-gray-500">智能生成内容+动态调优策略，放大活动声量与转化打造爆款活动。实现用户自传播与GMV拉升双飞轮。</p></li>
            <li className="mb-6 ml-4"><div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white"></div><h3 className="text-lg font-semibold text-gray-900">第4步：品牌心智建设 × KOL协同种草</h3><p className="text-base font-normal text-gray-500">联动垂类KOL/KOC全域种草 + 24/7 虚拟数字人直播，迅速打开品牌和仪器在北美市场的知名度。强化品牌调性，借力达人矩阵实现破圈传播， 实现用户自传播与GMV拉升双飞轮。</p></li>
            <li className="ml-4"><div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white"></div><h3 className="text-lg font-semibold text-gray-900">第5步：实时数据闭环，敏捷迭代优化</h3><p className="text-base font-normal text-gray-500">AI实时追踪试用转化数据和社交媒体反馈，动态调整营销策略。总结成功案例，迅速扩展签约SPA数量。</p></li>
        </ol>
        <div className="mt-8 bg-gray-100 p-6 rounded-lg border border-gray-200">
             <h4 className="text-lg font-bold mb-4">🎯 最终成果</h4>
             <ul className="space-y-2 list-inside list-disc text-gray-700">
                <li><strong>转化效率：</strong>传统方式6个月谈5家 → AI引擎3周谈12家，转化率提升210%。</li>
                <li><strong>销售业绩：</strong>首月销售额超$280,000，毛利率达58% (行业平均35%)。</li>
             </ul>
             <blockquote className="mt-4 border-l-4 border-blue-500 pl-4 italic text-yellow-600">
                 客户反馈：“我们终于不是‘另一个Fotona’了。”
             </blockquote>
         </div>
    </div>
);

// FlowChart Component for interactive boxes
const FlowChart = () => {
  const [expandedBoxes, setExpandedBoxes] = useState(new Set(['market-insight', 'customer-pain', 'differentiation', 'concept-validation']));

  const flowchartData = [
    {
      id: 'market-insight',
      title: '1. 市场洞察',
      content: (
        <div className="space-y-3">
          <div className="font-semibold text-blue-700">📊 市场数据洞察：被忽视的"高价值空白市场"（AI分析发现）</div>
          <div className="space-y-2 text-sm">
            <div className="flex items-start">
              <span className="font-semibold text-gray-800 mr-2">1.</span>
              <div>
                <div className="font-medium">"搜索量爆炸，供给量稀缺"</div>
                <div className="text-gray-600">行业趋势分析：2025美国医美行业报告显示，20%医美诊所的客户是男性，并且在逐年增加。可是大部分医美SPA&仪器的针对客户是女性。</div>
                <div className="text-gray-600">最新热点：#DataJawFix(8.2M+ IG/TikTok搜索量), #Malehairline (10.3M+) 和 #MaleAntiAging(5.4M+)</div>
              </div>
            </div>
            <div className="flex items-start">
              <span className="font-semibold text-gray-800 mr-2">2.</span>
              <div>
                <div className="font-medium">"供需严重失衡"</div>
                <div className="text-gray-600">针对男性的非创植发、下颌线重塑、抗衰服务有着极高需求，可是只有～10%医美诊所提供针对性的服务。</div>
              </div>
            </div>
            <div className="flex items-start">
              <span className="font-semibold text-gray-800 mr-2">3.</span>
              <div>
                <div className="font-medium">"双重痛点叠加"</div>
                <div className="text-gray-600">锁定"脱发+面部松弛"双重痛点，单一解决方案无法满足复合需求</div>
              </div>
            </div>
            <div className="flex items-start">
              <span className="font-semibold text-gray-800 mr-2">4.</span>
              <div>
                <div className="font-medium">"支付能力强，决策周期短"</div>
                <div className="text-gray-600">目标客群为高收入男性，相比女性客户更注重效率，决策周期平均缩短40%</div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'customer-pain',
      title: '2. 客户痛点',
      content: (
        <div className="space-y-3">
          <div className="font-semibold text-blue-700">🧠 行业洞察：被忽视的"隐性痛点"（AI分析发现）</div>
          <div className="space-y-2 text-sm">
            <div className="flex items-start">
              <span className="font-semibold text-gray-800 mr-2">1.</span>
              <div>
                <div className="font-medium">"不想被当成'女人'"</div>
                <div className="text-gray-600">北美中年男性普遍抗拒"女性化"医美宣传（如"仙女针""玻尿酸少女感"），他们需要去性别化、专业、医学感强的表达。</div>
              </div>
            </div>
            <div className="flex items-start">
              <span className="font-semibold text-gray-800 mr-2">2.</span>
              <div>
                <div className="font-medium">"怕耽误工作"</div>
                <div className="text-gray-600">67%受访者表示"恢复期超过2天就不考虑"（来源：2025 Men's Health Medical Survey），零 downtime 是核心卖点。</div>
              </div>
            </div>
            <div className="flex items-start">
              <span className="font-semibold text-gray-800 mr-2">3.</span>
              <div>
                <div className="font-medium">"信任医生，不信任网红"</div>
                <div className="text-gray-600">他们更相信认证医师+临床数据，而非KOL。适合联合Board-Certified Dermatologists做背书。</div>
              </div>
            </div>
            <div className="flex items-start">
              <span className="font-semibold text-gray-800 mr-2">4.</span>
              <div>
                <div className="font-medium">"愿意为'自信'付费，而非'年轻'"</div>
                <div className="text-gray-600">最强购买动机不是"看起来年轻"，而是"在董事会看起来更有权威"、"不被当成'过时的人'"。</div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'differentiation',
      title: '3. 差异化定位',
      content: (
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-50">
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-800">支柱</th>
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-800">竞品做法</th>
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-800">您的差异化做法</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-3 font-medium text-gray-800">1. 目标人群</td>
                <td className="border border-gray-300 px-4 py-3 text-gray-600">35-65岁女性</td>
                <td className="border border-gray-300 px-4 py-3 text-gray-700">
                  <div className="space-y-1">
                    <div className="font-medium">45-60岁高收入男性:</div>
                    <div>企业高管、创业者、专业人士</div>
                    <div className="text-blue-600">重视形象权威, 厌恶"女性化"医美标签</div>
                  </div>
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3 font-medium text-gray-800">2. 核心痛点</td>
                <td className="border border-gray-300 px-4 py-3 text-gray-600">皱纹、松弛、肤色暗沉</td>
                <td className="border border-gray-300 px-4 py-3 text-gray-700">
                  <div className="space-y-1">
                    <div>"下颌线模糊"+"鬓角脂肪下垂"+"看起来疲惫没精神"</div>
                    <div className="font-medium text-blue-600">强调“Sharper Jawline = Sharper Leadership”，而不是lady-like 的“turn back time”。</div>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3 font-medium text-gray-800">3. 产品语言</td>
                <td className="border border-gray-300 px-4 py-3 text-gray-600">"焕肤""年轻10岁""明星同款"</td>
                <td className="border border-gray-300 px-4 py-3 text-gray-700">
                  <div className="space-y-1">
                    <div>"轮廓重塑""下颌线强化""形象提升"</div>
                    {/* <div className="text-blue-600">用用户语言, 而非美容语言</div> */}
                  </div>
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3 font-medium text-gray-800">4. 使用场景</td>
                <td className="border border-gray-300 px-4 py-3 text-gray-600">女性SPA下午茶场景</td>
                <td className="border border-gray-300 px-4 py-3 text-gray-700">
                  <div className="space-y-1">
                    <div>周五下班后30分钟治疗, 周一开会精神焕发</div>
                    <div className="text-blue-600">强调"快速""无创伤""效果自然不刻意"</div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="mt-4 p-4 bg-blue-50 border-l-4 border-blue-500 rounded-r-lg">
            <p className="text-lg font-semibold text-blue-800">
              🎯 一句话定位："为男性轮廓而生，不是女性仪器的'加大版'"
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'concept-validation',
      title: '4. 概念验证',
      content: '自动生成本地化营销文案（如："Dad\'s New Secret?"），在小范围社群进行概念测试，获得积极反馈。'
    }
  ];

  const toggleBox = (boxId) => {
    setExpandedBoxes(prev => {
      const newSet = new Set(prev);
      if (newSet.has(boxId)) {
        newSet.delete(boxId);
      } else {
        newSet.add(boxId);
      }
      return newSet;
    });
  };

    return (
    <div className="space-y-4">
      {flowchartData.map((box, index) => (
        <div key={box.id} className="relative">
          {/* Arrow connector (except for first item) */}
          {index > 0 && (
            <div className="flex justify-center mb-2">
              <div className="relative">
                <div className="w-0.5 h-6 bg-gray-300"></div>
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 10L12 15L17 10" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                </div>
              </div>
            </div>
          )}
          
          {/* Clickable box */}
          <div 
            className="bg-white border-2 border-gray-200 rounded-lg p-4 cursor-pointer hover:border-blue-400 hover:shadow-md transition-all duration-200"
            onClick={() => toggleBox(box.id)}
          >
            <div className="flex items-center justify-between">
              <h4 className="font-bold text-lg text-gray-800">{box.title}</h4>
              <div className="text-gray-400">
                {expandedBoxes.has(box.id) ? '−' : '+'}
              </div>
            </div>
            
            {/* Expanded content */}
            {expandedBoxes.has(box.id) && (
              <div className="mt-4 pt-4 border-t border-gray-100">
                <div className="text-gray-700">
                  {box.content}
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
        </div>
    );
};

const DevCaseStudy = () => (
    <div>
        <h3 className="font-bold text-xl text-blue-700 mb-4">应用AI新品营销系统</h3>
        <p className="mb-6 text-gray-600">案例：一家客户希望开发一款区别于主流市场的抗衰仪器。AI引擎通过市场分析，发现了一个被忽视的巨大机会：北美中年男性市场。</p>
        <FlowChart />
         <p className="mt-4 text-sm text-gray-600 bg-gray-100 p-3 rounded-md">✅ AI一键生成了包含市场数据、产品定义、GTM策略和本地化营销素材。整个新仪器落地过程从6个月缩短到3周。</p>
    </div>
);

const IndustryCaseStudy = () => (
    <div>
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
    </div>
);

const WhyUsSection = () => {

    return (
        <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">为什么选择我们？</h2>

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
                                <h4 className="font-semibold">湾区Medical Spa主理人</h4>
                                <p className="text-gray-600 text-sm">团队中有多年亲身运营 Medical Spa 的合伙人，既懂医美客户真实需求，也了解北美医美机构的运营模式和核心痛点。</p>
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
                            <p className="mb-2">"我们是将Meta级的AI技术和营销经验、经过验证的规模化工程能力、以及来自Medical Spa一线战场的行业洞察，三者深度融合的唯一团队。"</p>
                            <p className="font-semibold">"我们建造的不仅是工具，更是您赢得北美市场的战略竞争优势。"</p>
                        </blockquote>
                    </div>
                </div>
            </div>
            
            {/* Footer */}
            <div className="mt-12 pt-8 border-t border-gray-200 text-center">
                <p className="text-gray-600 font-medium">Bella Zhu | <a href="mailto:bella@goaly.ai" className="text-blue-600 hover:text-blue-800 hover:underline">bella@goaly.ai</a></p>
            </div>
            
        </section>
    );
};


const NextStepsSection = () => (
    <section>
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">下一步：让您的仪器，成为北美医美市场的新标准</h2>
        <p className="text-lg text-gray-600 mb-8">我们不卖仪器，我们帮您重新定义“抗衰”是什么。现在，您有三个选择：</p>
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
                <p className="text-gray-500">7天内获得“差异化突围方案”</p>
            </div>
        </div>
        <div className="mt-10 text-center">
            <button className="bg-blue-600 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-700 transition-colors text-lg">
                📞 联系我们，开启您的“非价格战”北美之旅
            </button>
        </div>
        <div className="mt-8 bg-gray-100 p-4 rounded-lg text-center">
            <p className="text-black-600 font-semibold text-lg md:text-xl">AI出海GTM营销引擎 - 专为医美仪器出海企业打造的"战略大脑"</p>
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
    {/* <p className="text-gray-600 text-lg font-semibold">“在所有人还在比谁的机器更便宜时，我们让您的机器，成为唯一被记住的那个。”</p> */}
  </footer>
);

