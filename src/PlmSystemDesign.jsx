import React, { useEffect } from 'react';

// This component assumes that the html2pdf.js library is available globally.
// In a typical React project, you would include this script in your main index.html file:
// <script src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js"></script>

const PlmSystemDesign = () => {
    
    useEffect(() => {
        document.title = 'PLM Data Platform';
    }, []);

    const handleDownloadPdf = () => {
        const downloadButton = document.getElementById('download-pdf-btn');
        const contentToPrint = document.getElementById('content-to-print');

        if (!contentToPrint || !downloadButton) {
            console.error("Required elements for PDF generation are not found.");
            return;
        }

        // Temporarily hide the button so it doesn't appear in the PDF
        downloadButton.style.display = 'none';

        const pdfOptions = {
            margin: [0.5, 0.2, 0.5, 0.2], // [top, left, bottom, right] in inches
            filename: 'AI-Native-PLM-Architecture.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2, useCORS: true, logging: true, letterRendering: true },
            jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
        };

        // Use the html2pdf library to generate the PDF
        window.html2pdf().set(pdfOptions).from(contentToPrint).save().then(() => {
            // Show the button again after the PDF has been saved
            downloadButton.style.display = 'block';
        });
    };

    return (
        <>
            <style>{`
                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                }

                body {
                    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Microsoft YaHei', sans-serif;
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    min-height: 100vh;
                    padding: 40px 20px;
                    color: #333;
                }

                .container {
                    max-width: 1400px;
                    margin: 0 auto;
                }

                .header {
                    text-align: center;
                    color: white;
                    margin-bottom: 50px;
                    position: relative;
                }

                .header h1 {
                    font-size: 2.8rem;
                    margin-bottom: 15px;
                    text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
                }

                .header p {
                    font-size: 1.2rem;
                    opacity: 0.9;
                    margin-bottom: 25px;
                }
                
                #download-pdf-btn {
                    background-color: #ffffff;
                    color: #667eea;
                    border: none;
                    padding: 12px 25px;
                    font-size: 1rem;
                    font-weight: bold;
                    border-radius: 50px;
                    cursor: pointer;
                    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
                    transition: all 0.3s ease;
                }

                #download-pdf-btn:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.25);
                    background-color: #f0f2f5;
                }

                .architecture {
                    background: rgba(255, 255, 255, 0.95);
                    border-radius: 20px;
                    padding: 40px;
                    box-shadow: 0 20px 60px rgba(0,0,0,0.3);
                }

                .layer {
                    margin-bottom: 30px;
                    border-radius: 15px;
                    padding: 25px;
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                }

                .layer:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 10px 30px rgba(0,0,0,0.15);
                }

                .layer-title {
                    font-size: 1.5rem;
                    font-weight: bold;
                    margin-bottom: 20px;
                    display: flex;
                    align-items: center;
                    gap: 10px;
                }

                .layer-icon {
                    width: 40px;
                    height: 40px;
                    border-radius: 10px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 1.5rem;
                }

                .ai-layer {
                    background: linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%);
                    color: white;
                }

                .ai-layer .layer-icon {
                    background: rgba(255,255,255,0.2);
                }

                .integration-layer {
                    background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
                    color: white;
                }

                .integration-layer .layer-icon {
                    background: rgba(255,255,255,0.2);
                }

                .application-layer {
                    background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
                    color: white;
                }

                .application-layer .layer-icon {
                    background: rgba(255,255,255,0.2);
                }

                .storage-layer {
                    background: linear-gradient(135deg, #ca8a04 0%, #d97706 100%);
                    color: white;
                }

                .storage-layer .layer-icon {
                    background: rgba(255,255,255,0.2);
                }

                .processing-layer {
                    background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
                    color: white;
                }

                .processing-layer .layer-icon {
                    background: rgba(255,255,255,0.2);
                }

                .model-matrix-layer {
                    background: linear-gradient(135deg, #8b5cf6 0%, #a855f7 100%);
                    color: white;
                }

                .model-matrix-layer .layer-icon {
                    background: rgba(255,255,255,0.2);
                }

                .components-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                    gap: 15px;
                    margin-top: 15px;
                }

                .component {
                    background: rgba(255,255,255,0.15);
                    padding: 15px;
                    border-radius: 10px;
                    backdrop-filter: blur(10px);
                    transition: all 0.3s ease;
                }

                .component:hover {
                    background: rgba(255,255,255,0.25);
                    transform: scale(1.05);
                }

                .component-title {
                    font-weight: bold;
                    margin-bottom: 8px;
                    font-size: 1.1rem;
                }

                .component-desc {
                    font-size: 0.9rem;
                    opacity: 0.9;
                }

                .connection-arrows {
                    text-align: center;
                    font-size: 2rem;
                    color: #667eea;
                    margin: 20px 0;
                }

                .tech-stack {
                    background: white;
                    border-radius: 15px;
                    padding: 30px;
                    margin-top: 40px;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
                }

                .tech-stack h2 {
                    color: #667eea;
                    margin-bottom: 20px;
                    font-size: 1.8rem;
                }

                .tech-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                    gap: 20px;
                }

                .tech-category {
                    background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
                    padding: 20px;
                    border-radius: 12px;
                }

                .tech-category h3 {
                    color: #667eea;
                    margin-bottom: 15px;
                    font-size: 1.2rem;
                }

                .tech-item {
                    background: white;
                    padding: 10px 15px;
                    margin: 8px 0;
                    border-radius: 8px;
                    font-size: 0.95rem;
                    box-shadow: 0 2px 8px rgba(0,0,0,0.05);
                }

                .legend {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 20px;
                    justify-content: center;
                    margin-top: 30px;
                    padding: 20px;
                    background: rgba(255,255,255,0.9);
                    border-radius: 15px;
                }

                .legend-item {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                }

                .legend-color {
                    width: 30px;
                    height: 30px;
                    border-radius: 8px;
                }

                @media (max-width: 768px) {
                    .header h1 {
                        font-size: 2rem;
                    }
                    
                    .components-grid {
                        grid-template-columns: 1fr;
                    }
                    
                    .tech-grid {
                        grid-template-columns: 1fr;
                    }
                }
            `}</style>
            <div id="content-to-print">
                <div className="container">
                    <div className="header">
                        <h1>🚀 System Architecture of Agent Ecosystem</h1>
                        <p>案例：医疗器械行业 - AI原生智能体生态系统</p>
                        <button id="download-pdf-btn" onClick={handleDownloadPdf}>Download as PDF</button>
                    </div>

                    <div className="architecture">
                        {/* AI Agent Layer */}
                        <div className="layer ai-layer">
                            <div className="layer-title">
                                <div className="layer-icon">🤖</div>
                                Agent Library
                            </div>
                            <div className="components-grid">
                                <div className="component">
                                    <div className="component-title">🎨 设计助手 Agent</div>
                                    <div className="component-desc">智能零件推荐、设计规范检查、自动生成技术文档</div>
                                </div>
                                <div className="component">
                                    <div className="component-title">📊 BOM 分析 Agent</div>
                                    <div className="component-desc">成本优化、替代料推荐、EBOM/MBOM转换建议</div>
                                </div>
                                <div className="component">
                                    <div className="component-title">✅ 合规检查 Agent</div>
                                    <div className="component-desc">FDA/ISO标准审查、自动生成合规报告</div>
                                </div>
                                <div className="component">
                                    <div className="component-title">🔄 版本变更管理 Agent</div>
                                    <div className="component-desc">影响分析、风险预测、自动通知相关方</div>
                                </div>
                                <div className="component">
                                    <div className="component-title">🎯 AI智能出图</div>
                                    <div className="component-desc">智能草图生成、图纸合规检测</div>
                                </div>
                                <div className="component">
                                    <div className="component-title">💬 智能问答+新员工培训</div>
                                    <div className="component-desc">企业知识库问答、自动化员工培训</div>
                                </div>
                                <div className="component">
                                    <div className="component-title">🧪 测试方案生成</div>
                                    <div className="component-desc">根据测试部门需求，生成测试方案、用例</div>
                                </div>
                            </div>
                        </div>

                        <div className="connection-arrows">↕️</div>

                        {/* Application Layer */}
                        <div className="layer application-layer">
                            <div className="layer-title">
                                <div className="layer-icon">⚙️</div>
                                Domain-specific Software
                            </div>
                            <div className="components-grid">
                                <div className="component">
                                    <div className="component-title">PLM 核心服务</div>
                                    <div className="component-desc">产品数据管理、版本控制、配置管理</div>
                                </div>
                                <div className="component">
                                    <div className="component-title">CAD 管理服务</div>
                                    <div className="component-desc">Creo/AutoCAD/Altium集成、Check-in/out</div>
                                </div>
                                <div className="component">
                                    <div className="component-title">工作流引擎</div>
                                    <div className="component-desc">ECN/ECO/ECR流程、审批管理</div>
                                </div>
                                <div className="component">
                                    <div className="component-title">项目管理</div>
                                    <div className="component-desc">里程碑跟踪、资源配置、任务分解</div>
                                </div>
                            </div>
                        </div>

                        <div className="connection-arrows">↕️</div>

                        {/* Integration Layer */}
                        <div className="layer integration-layer">
                            <div className="layer-title">
                                <div className="layer-icon">🔗</div>
                                Agent Infrastructure
                            </div>
                            <div className="components-grid">
                                <div className="component">
                                    <div className="component-title">Agent Chaining Infra </div>
                                    <div className="component-desc">LangGraph / AutoGen - Multi-Agent协作</div>
                                </div>
                                <div className="component">
                                    <div className="component-title">API Gateway</div>
                                    <div className="component-desc">Kong / AWS API Gateway - GraphQL + REST + gRPC</div>
                                </div>
                                <div className="component">
                                    <div className="component-title">RAG 框架 </div>
                                    <div className="component-desc">LangChain / LlamaIndex - 检索增强生成</div>
                                </div>
                                <div className="component">
                                    <div className="component-title">Context Management </div>
                                    <div className="component-desc">长期+短期记忆管理</div>
                                </div>
                                <div className="component">
                                    <div className="component-title">Function/Tooling Calling</div>
                                    <div className="component-desc">LLM Model - 函数/工具调用接口</div>
                                </div>
                            </div>
                        </div>

                        <div className="connection-arrows">↕️</div>

                        {/* Storage Layer */}
                        <div className="layer storage-layer">
                            <div className="layer-title">
                                <div className="layer-icon">💾</div>
                                Data Storage
                            </div>
                            <div className="components-grid">
                                <div className="component">
                                    <div className="component-title">关系型数据库</div>
                                    <div className="component-desc">PostgreSQL + TimescaleDB - 元数据/BOM/版本/审计</div>
                                </div>
                                <div className="component">
                                    <div className="component-title">⭐ 向量数据库</div>
                                    <div className="component-desc">Weaviate/Qdrant - CAD向量/语义搜索/RAG知识库</div>
                                </div>
                                <div className="component">
                                    <div className="component-title">⭐ 图数据库</div>
                                    <div className="component-desc">Neo4j - BOM关系图/变更影响分析/依赖关系</div>
                                </div>
                                <div className="component">
                                    <div className="component-title">对象存储</div>
                                    <div className="component-desc">MinIO/S3 - CAD文件/PDF/图片(版本化)</div>
                                </div>
                                <div className="component">
                                    <div className="component-title">数据湖</div>
                                    <div className="component-desc">Delta Lake/Iceberg - 历史数据/分析数据</div>
                                </div>
                            </div>
                        </div>

                        <div className="connection-arrows">↕️</div>

                        {/* Processing Layer */}
                        <div className="layer processing-layer">
                            <div className="layer-title">
                                <div className="layer-icon">⚡</div>
                                Core Infrastructure
                            </div>
                            <div className="components-grid">
                                <div className="component">
                                    <div className="component-title">Embedding Pipeline</div>
                                    <div className="component-desc">CAD文件向量化、特征提取、自动标签生成</div>
                                </div>
                                <div className="component">
                                    <div className="component-title">ETL Airflow</div>
                                    <div className="component-desc">Apache Airflow - 数据同步/清洗/转换</div>
                                </div>
                                <div className="component">
                                    <div className="component-title">Real-time Streaming</div>
                                    <div className="component-desc">Kafka/Redpanda - 变更事件流/CDC</div>
                                </div>
                                <div className="component">
                                    <div className="component-title">Training & Eval Infra</div>
                                    <div className="component-desc">Continuous Post-training & Evaluation</div>
                                </div>
                                <div className="component">
                                    <div className="component-title">Model Serving</div>
                                    <div className="component-desc">MLOps - Deployment, Inference Optimization, Monitoring</div>
                                </div>
                            </div>
                        </div>

                        <div className="connection-arrows">↕️</div>

                        {/* Model Matrix Layer */}
                        <div className="layer model-matrix-layer">
                            <div className="layer-title">
                                <div className="layer-icon">🧠</div>
                                Model Library
                            </div>
                            <div className="components-grid">
                                <div className="component">
                                    <div className="component-title">基础大模型</div>
                                    <div className="component-desc">通用任务处理、复杂推理、知识融会贯通</div>
                                </div>
                                <div className="component">
                                    <div className="component-title">多模态模型</div>
                                    <div className="component-desc">图像+文本理解、CAD文件分析、视觉问答</div>
                                </div>
                                <div className="component">
                                    <div className="component-title">边缘小模型</div>
                                    <div className="component-desc">实时推理优化、本地部署、低延迟响应</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Tech Stack Details */}
                    {/* <div className="tech-stack">
                        <h2>🛠️ 核心技术栈详解</h2>
                        <div className="tech-grid">
                            <div className="tech-category">
                                <h3>PLM 应用层</h3>
                                <div className="tech-item">✅ Aras Innovator (企业级)</div>
                                <div className="tech-item">✅ Odoo PLM (轻量级)</div>
                                <div className="tech-item">✅ 自研微服务 (FastAPI/Spring Boot)</div>
                            </div>

                            <div className="tech-category">
                                <h3>AI 框架</h3>
                                <div className="tech-item">🤖 LangChain / LlamaIndex</div>
                                <div className="tech-item">🤖 LangGraph / AutoGen</div>
                                <div className="tech-item">🤖 Post-trained LLM Model (grounded with your enterprise data)</div>
                            </div>

                            <div className="tech-category">
                                <h3>数据库</h3>
                                <div className="tech-item">🗄️ PostgreSQL 15+ (主库)</div>
                                <div className="tech-item">🔍 Weaviate (向量数据库)</div>
                                <div className="tech-item">🕸️ Neo4j (图数据库)</div>
                                <div className="tech-item">📦 MinIO / AWS S3 (对象存储)</div>
                            </div>

                            <div className="tech-category">
                                <h3>CAD 集成</h3>
                                <div className="tech-item">🔧 Creo Connector</div>
                                <div className="tech-item">🔧 AutoCAD .NET API</div>
                                <div className="tech-item">🔧 Altium Designer API</div>
                                <div className="tech-item">🔧 FreeCAD Python API</div>
                            </div>

                            <div className="tech-category">
                                <h3>数据处理</h3>
                                <div className="tech-item">⚡ Apache Airflow (编排)</div>
                                <div className="tech-item">⚡ Apache Kafka (流处理)</div>
                                <div className="tech-item">⚡ Delta Lake (数据湖)</div>
                                <div className="tech-item">⚡ MLflow (模型管理)</div>
                            </div>

                            <div className="tech-category">
                                <h3>API & 网关</h3>
                                <div className="tech-item">🌐 GraphQL (Apollo Server)</div>
                                <div className="tech-item">🌐 REST API (FastAPI)</div>
                                <div className="tech-item">🌐 Kong / AWS API Gateway</div>
                                <div className="tech-item">🌐 gRPC (微服务通信)</div>
                            </div>
                        </div>
                    </div> */}

                    {/* Legend */}
                    <div className="legend">
                        <div className="legend-item">
                            <div className="legend-color" style={{background: 'linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%)'}}></div>
                            <div className="legend-color" style={{background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'}}></div>
                            <span>企业智能体研发+运维: Solution Team </span>
                        </div>
                      
                        {/* <div className="legend-item">
                            <div className="legend-color" style={{background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'}}></div>
                            <span>集成层</span>
                        </div> */}
                        
                         <div className="legend-item">
                             <div className="legend-color" style={{background: 'linear-gradient(135deg, #ca8a04 0%, #d97706 100%)'}}></div>
                             <div className="legend-color" style={{background: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'}}></div>
                             <span>Training / Eval / Data / Serving Infra： AI Infra Team</span>
                         </div>
                        {/* <div className="legend-item">
                            <div className="legend-color" style={{background: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'}}></div>
                            <span>处理层</span>
                        </div> */}
                        <div className="legend-item">
                            <div className="legend-color" style={{background: 'linear-gradient(135deg, #8b5cf6 0%, #a855f7 100%)'}}></div>
                            <span>新模型研发：AI Research Team</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PlmSystemDesign;

