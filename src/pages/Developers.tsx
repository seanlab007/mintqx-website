import { useState } from 'react';
import { 
  Code2, 
  BookOpen, 
  Terminal, 
  Key,
  Copy,
  Check,
  ChevronRight,
  Zap,
  Database,
  Shield,
  Webhook
} from 'lucide-react';

const endpoints = [
  {
    method: 'GET',
    path: '/api/v1/market/ticker',
    description: '获取实时行情数据',
    params: [
      { name: 'symbol', type: 'string', required: true, description: '股票代码' },
    ],
  },
  {
    method: 'GET',
    path: '/api/v1/market/depth',
    description: '获取订单簿深度',
    params: [
      { name: 'symbol', type: 'string', required: true, description: '股票代码' },
      { name: 'limit', type: 'integer', required: false, description: '深度层级 (默认 100)' },
    ],
  },
  {
    method: 'GET',
    path: '/api/v1/market/trades',
    description: '获取最近成交',
    params: [
      { name: 'symbol', type: 'string', required: true, description: '股票代码' },
      { name: 'limit', type: 'integer', required: false, description: '返回条数 (默认 100, 最大 1000)' },
    ],
  },
  {
    method: 'POST',
    path: '/api/v1/order/create',
    description: '创建订单',
    params: [
      { name: 'symbol', type: 'string', required: true, description: '股票代码' },
      { name: 'side', type: 'string', required: true, description: '买卖方向 (BUY/SELL)' },
      { name: 'type', type: 'string', required: true, description: '订单类型 (LIMIT/MARKET)' },
      { name: 'quantity', type: 'decimal', required: true, description: '数量' },
      { name: 'price', type: 'decimal', required: false, description: '价格 (限价单必填)' },
    ],
  },
];

const codeExamples = {
  javascript: `// JavaScript 示例
const axios = require('axios');

const API_KEY = 'your_api_key';
const API_SECRET = 'your_api_secret';
const BASE_URL = 'https://api.mintqx.com';

// 获取实时行情
async function getTicker(symbol) {
  try {
    const response = await axios.get(
      \`\${BASE_URL}/api/v1/market/ticker\`,
      {
        params: { symbol },
        headers: {
          'X-API-Key': API_KEY,
          'X-API-Secret': API_SECRET,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error('Error:', error.response?.data || error.message);
  }
}

// 使用示例
getTicker('NVDA').then(data => {
  console.log('Ticker:', data);
});`,
  python: `# Python 示例
import requests
import hmac
import hashlib
import time

API_KEY = 'your_api_key'
API_SECRET = 'your_api_secret'
BASE_URL = 'https://api.mintqx.com'

def get_ticker(symbol):
    \"\"\"获取实时行情\"\"\"
    timestamp = str(int(time.time() * 1000))
    
    # 生成签名
    message = f'{timestamp}GET/api/v1/market/ticker'
    signature = hmac.new(
        API_SECRET.encode(),
        message.encode(),
        hashlib.sha256
    ).hexdigest()
    
    headers = {
        'X-API-Key': API_KEY,
        'X-Timestamp': timestamp,
        'X-Signature': signature,
    }
    
    params = {'symbol': symbol}
    
    response = requests.get(
        f'{BASE_URL}/api/v1/market/ticker',
        params=params,
        headers=headers
    )
    
    return response.json()

# 使用示例
data = get_ticker('NVDA')
print(f"Price: {data['price']}")`,
  curl: `# cURL 示例
# 获取实时行情
curl -X GET 'https://api.mintqx.com/api/v1/market/ticker?symbol=NVDA' \\
  -H 'X-API-Key: your_api_key' \\
  -H 'X-API-Secret: your_api_secret'

# 创建订单
curl -X POST 'https://api.mintqx.com/api/v1/order/create' \\
  -H 'Content-Type: application/json' \\
  -H 'X-API-Key: your_api_key' \\
  -H 'X-API-Secret: your_api_secret' \\
  -d '{
    "symbol": "NVDA",
    "side": "BUY",
    "type": "LIMIT",
    "quantity": 100,
    "price": 875.50
  }'`,
};

const sdks = [
  {
    name: 'Python SDK',
    description: '官方 Python SDK，支持 Python 3.7+',
    install: 'pip install mintqx-sdk',
    icon: Terminal,
  },
  {
    name: 'Node.js SDK',
    description: '官方 Node.js SDK，支持 TypeScript',
    install: 'npm install @mintqx/sdk',
    icon: Code2,
  },
  {
    name: 'Java SDK',
    description: '官方 Java SDK，支持 Java 11+',
    install: 'Maven: com.mintqx:sdk:1.0.0',
    icon: Database,
  },
];

const Developers = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'api' | 'sdk'>('overview');
  const [selectedLanguage, setSelectedLanguage] = useState<'javascript' | 'python' | 'curl'>('javascript');
  const [copied, setCopied] = useState(false);

  const copyCode = () => {
    navigator.clipboard.writeText(codeExamples[selectedLanguage]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#d4af37]/5 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-[#d4af37]/10 border border-[#d4af37]/30 rounded-full px-4 py-2 mb-6">
              <Code2 className="w-4 h-4 text-[#d4af37]" />
              <span className="text-[#d4af37] text-sm font-medium">开发者中心</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              构建您的 <span className="text-gradient-gold">量化交易应用</span>
            </h1>
            <p className="text-gray-400 text-lg mb-8">
              使用我们强大的 API 和 SDK，快速构建专业的交易应用和策略
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="btn-primary text-lg px-8 py-4 inline-flex items-center">
                <Key className="w-5 h-5 mr-2" />
                获取 API Key
              </button>
              <button className="btn-secondary text-lg px-8 py-4 inline-flex items-center">
                <BookOpen className="w-5 h-5 mr-2" />
                查看文档
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8">
            {[
              { id: 'overview', label: '概览', icon: BookOpen },
              { id: 'api', label: 'API 参考', icon: Webhook },
              { id: 'sdk', label: 'SDK', icon: Code2 },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as typeof activeTab)}
                className={`flex items-center space-x-2 py-4 border-b-2 transition-colors ${
                  activeTab === tab.id
                    ? 'border-[#d4af37] text-[#d4af37]'
                    : 'border-transparent text-gray-400 hover:text-white'
                }`}
              >
                <tab.icon className="w-5 h-5" />
                <span className="font-medium">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {activeTab === 'overview' && (
            <div className="space-y-12">
              {/* Features */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    icon: Zap,
                    title: '低延迟',
                    description: '平均延迟 < 10ms，支持高频交易策略',
                  },
                  {
                    icon: Database,
                    title: '实时数据',
                    description: 'WebSocket 实时推送行情和成交数据',
                  },
                  {
                    icon: Shield,
                    title: '安全可靠',
                    description: '多重签名验证，IP 白名单，API 密钥管理',
                  },
                ].map((feature) => (
                  <div key={feature.title} className="glass rounded-2xl p-6 card-hover">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#d4af37]/20 to-[#d4af37]/5 flex items-center justify-center mb-4">
                      <feature.icon className="w-6 h-6 text-[#d4af37]" />
                    </div>
                    <h3 className="text-white text-lg font-semibold mb-2">{feature.title}</h3>
                    <p className="text-gray-400">{feature.description}</p>
                  </div>
                ))}
              </div>

              {/* Quick Start */}
              <div className="glass rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-white mb-6">快速开始</h2>
                <div className="space-y-6">
                  {[
                    { step: 1, title: '注册账号', desc: '创建 MINTQX 开发者账号' },
                    { step: 2, title: '创建 API Key', desc: '在控制台生成 API Key 和 Secret' },
                    { step: 3, title: '阅读文档', desc: '了解 API 使用规范和限制' },
                    { step: 4, title: '开始开发', desc: '使用 SDK 或直接调用 API' },
                  ].map((item) => (
                    <div key={item.step} className="flex items-start space-x-4">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#d4af37] to-[#b8960c] flex items-center justify-center flex-shrink-0">
                        <span className="text-[#0a0a0a] font-bold text-sm">{item.step}</span>
                      </div>
                      <div>
                        <h3 className="text-white font-semibold">{item.title}</h3>
                        <p className="text-gray-400">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'api' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Endpoints List */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-white mb-6">API 端点</h2>
                {endpoints.map((endpoint) => (
                  <div
                    key={endpoint.path}
                    className="glass rounded-xl p-4 card-hover cursor-pointer"
                  >
                    <div className="flex items-center space-x-3 mb-2">
                      <span className={`px-2 py-1 rounded text-xs font-medium ${
                        endpoint.method === 'GET' 
                          ? 'bg-green-500/20 text-green-400' 
                          : 'bg-blue-500/20 text-blue-400'
                      }`}>
                        {endpoint.method}
                      </span>
                      <code className="text-[#d4af37] text-sm">{endpoint.path}</code>
                    </div>
                    <p className="text-gray-400 text-sm">{endpoint.description}</p>
                  </div>
                ))}
              </div>

              {/* Code Example */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">代码示例</h2>
                <div className="glass rounded-xl overflow-hidden">
                  <div className="flex items-center justify-between px-4 py-3 border-b border-gray-800">
                    <div className="flex space-x-2">
                      {(['javascript', 'python', 'curl'] as const).map((lang) => (
                        <button
                          key={lang}
                          onClick={() => setSelectedLanguage(lang)}
                          className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                            selectedLanguage === lang
                              ? 'bg-[#d4af37]/20 text-[#d4af37]'
                              : 'text-gray-400 hover:text-white'
                          }`}
                        >
                          {lang === 'javascript' ? 'JavaScript' : lang === 'python' ? 'Python' : 'cURL'}
                        </button>
                      ))}
                    </div>
                    <button
                      onClick={copyCode}
                      className="flex items-center space-x-1 text-gray-400 hover:text-[#d4af37] transition-colors"
                    >
                      {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                      <span className="text-sm">{copied ? '已复制' : '复制'}</span>
                    </button>
                  </div>
                  <div className="p-4 overflow-x-auto">
                    <pre className="text-sm text-gray-300">
                      <code>{codeExamples[selectedLanguage]}</code>
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'sdk' && (
            <div className="space-y-8">
              <h2 className="text-2xl font-bold text-white">官方 SDK</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {sdks.map((sdk) => (
                  <div key={sdk.name} className="glass rounded-2xl p-6 card-hover">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#d4af37]/20 to-[#d4af37]/5 flex items-center justify-center mb-4">
                      <sdk.icon className="w-6 h-6 text-[#d4af37]" />
                    </div>
                    <h3 className="text-white text-lg font-semibold mb-2">{sdk.name}</h3>
                    <p className="text-gray-400 text-sm mb-4">{sdk.description}</p>
                    <div className="bg-[#0a0a0a] rounded-lg p-3 mb-4">
                      <code className="text-[#d4af37] text-xs">{sdk.install}</code>
                    </div>
                    <button className="text-[#d4af37] text-sm font-medium flex items-center hover:text-[#e8c547] transition-colors">
                      查看文档
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </button>
                  </div>
                ))}
              </div>

              {/* Rate Limits */}
              <div className="glass rounded-2xl p-8">
                <h3 className="text-xl font-bold text-white mb-6">API 限制</h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-800">
                        <th className="text-left py-3 px-4 text-gray-400 font-medium">等级</th>
                        <th className="text-left py-3 px-4 text-gray-400 font-medium">请求限制</th>
                        <th className="text-left py-3 px-4 text-gray-400 font-medium">WebSocket</th>
                        <th className="text-left py-3 px-4 text-gray-400 font-medium">费用</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { level: '免费版', limit: '100 次/分钟', ws: '1 个连接', fee: '免费' },
                        { level: '专业版', limit: '1000 次/分钟', ws: '5 个连接', fee: '$99/月' },
                        { level: '企业版', limit: '10000 次/分钟', ws: '无限制', fee: '定制' },
                      ].map((row) => (
                        <tr key={row.level} className="border-b border-gray-800/50">
                          <td className="py-3 px-4 text-white">{row.level}</td>
                          <td className="py-3 px-4 text-gray-400">{row.limit}</td>
                          <td className="py-3 px-4 text-gray-400">{row.ws}</td>
                          <td className="py-3 px-4 text-[#d4af37]">{row.fee}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Developers;
