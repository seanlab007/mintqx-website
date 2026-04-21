import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  TrendingUp, 
  Zap, 
  Shield, 
  Globe, 
  ArrowRight,
  BarChart3,
  Cpu,
  Users,
  ChevronRight
} from 'lucide-react';

// Market data simulation
const marketIndices = [
  { name: 'MINTQX Composite', value: 3847.52, change: +2.34, symbol: 'MINT' },
  { name: 'AI Tech Index', value: 2156.78, change: +4.12, symbol: 'AI30' },
  { name: 'Quantum Index', value: 987.45, change: -0.87, symbol: 'QTM10' },
  { name: 'Robotics Index', value: 1654.23, change: +1.56, symbol: 'ROBO' },
];

const features = [
  {
    icon: Zap,
    title: '极速交易',
    description: '毫秒级订单执行，支持高频量化交易策略',
  },
  {
    icon: Shield,
    title: '安全可靠',
    description: '银行级安全防护，多重加密保障资产安全',
  },
  {
    icon: Globe,
    title: '全球接入',
    description: '全球节点部署，随时随地稳定交易',
  },
  {
    icon: BarChart3,
    title: '智能分析',
    description: 'AI驱动的市场分析和交易信号',
  },
];

const userTypes = [
  {
    icon: TrendingUp,
    title: '上市公司',
    description: '简化的上市流程，高效的资本募集，专业的投资者关系管理',
    link: '/listing',
    cta: '了解上市服务',
  },
  {
    icon: Cpu,
    title: '量化交易者',
    description: '低延迟交易平台，丰富的市场数据，高级分析工具',
    link: '/trading',
    cta: '开始交易',
  },
  {
    icon: Users,
    title: '开发者',
    description: '开放的API/SDK，详细的开发文档，沙盒环境',
    link: '/developers',
    cta: '查看API文档',
  },
];

const Home = () => {
  const [animatedValues, setAnimatedValues] = useState(marketIndices.map(() => 0));

  useEffect(() => {
    // Animate market values on load
    const duration = 1500;
    const steps = 60;
    const interval = duration / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      const easeOut = 1 - Math.pow(1 - progress, 3);
      
      setAnimatedValues(marketIndices.map((index) => 
        index.value * easeOut
      ));

      if (step >= steps) {
        clearInterval(timer);
        setAnimatedValues(marketIndices.map((index) => index.value));
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-transparent to-[#0a0a0a]" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#d4af37]/10 rounded-full blur-[120px] animate-pulse-gold" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-[120px] animate-pulse-gold" style={{ animationDelay: '1s' }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-[#d4af37]/10 border border-[#d4af37]/30 rounded-full px-4 py-2 mb-8 animate-float">
            <span className="w-2 h-2 bg-[#d4af37] rounded-full animate-pulse" />
            <span className="text-[#d4af37] text-sm font-medium">下一代量化交易所</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6">
            <span className="text-white">AI 驱动的</span>
            <br />
            <span className="text-gradient-gold">量化交易未来</span>
          </h1>

          {/* Subtitle */}
          <p className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto mb-10">
            面向 AI 和高科技公司的下一代股票市场，提供高效、透明且充满活力的交易生态系统
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-16">
            <Link to="/trading" className="btn-primary text-lg px-8 py-4">
              开始交易
              <ArrowRight className="inline-block w-5 h-5 ml-2" />
            </Link>
            <Link to="/listing" className="btn-secondary text-lg px-8 py-4">
              了解上市服务
            </Link>
          </div>

          {/* Market Indices */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {marketIndices.map((index, i) => (
              <div
                key={index.symbol}
                className="glass rounded-xl p-4 card-hover"
              >
                <div className="text-gray-400 text-xs mb-1">{index.name}</div>
                <div className="text-white text-xl font-bold">
                  {animatedValues[i].toFixed(2)}
                </div>
                <div className={`text-sm font-medium ${
                  index.change >= 0 ? 'text-green-400' : 'text-red-400'
                }`}>
                  {index.change >= 0 ? '+' : ''}{index.change}%
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-[#d4af37]/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-[#d4af37] rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 lg:py-32 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              为什么选择 <span className="text-gradient-gold">MINTQX</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              我们致力于为 AI 和高科技公司提供最专业的交易服务
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="glass rounded-2xl p-6 card-hover group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#d4af37]/20 to-[#d4af37]/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-6 h-6 text-[#d4af37]" />
                </div>
                <h3 className="text-white text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* User Types Section */}
      <section className="py-20 lg:py-32 bg-[#141414]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              为不同用户 <span className="text-gradient-gold">量身定制</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              无论您是上市公司、量化交易者还是开发者，我们都能满足您的需求
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {userTypes.map((type) => (
              <div
                key={type.title}
                className="glass rounded-2xl p-8 card-hover group"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#d4af37] to-[#b8960c] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <type.icon className="w-8 h-8 text-[#0a0a0a]" />
                </div>
                <h3 className="text-white text-2xl font-bold mb-4">{type.title}</h3>
                <p className="text-gray-400 mb-6">{type.description}</p>
                <Link
                  to={type.link}
                  className="inline-flex items-center text-[#d4af37] font-medium hover:text-[#e8c547] transition-colors"
                >
                  {type.cta}
                  <ChevronRight className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 lg:py-32 bg-[#0a0a0a] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#d4af37]/5 via-transparent to-[#d4af37]/5" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: '$50B+', label: '日交易量' },
              { value: '100+', label: '上市公司' },
              { value: '1M+', label: '活跃用户' },
              { value: '99.99%', label: '系统可用性' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl lg:text-5xl font-bold text-gradient-gold mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ecosystem Banner */}
      <section className="py-12 bg-gradient-to-r from-[#0a0a0a] via-[#141414] to-[#0a0a0a] border-y border-[#d4af37]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500 text-xs uppercase tracking-widest mb-6 font-medium">生态系统 — 互联互通</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* Dark Matter Bank */}
            <a
              href="https://www.darkmatterbank.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 bg-[#7c3aed]/10 hover:bg-[#7c3aed]/20 border border-[#7c3aed]/30 hover:border-[#7c3aed]/60 rounded-xl px-5 py-3 transition-all group w-full sm:w-auto justify-center"
            >
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#7c3aed] to-[#4c1d95] flex items-center justify-center text-sm font-bold text-white shrink-0">D</div>
              <div className="text-left">
                <div className="text-white text-sm font-semibold group-hover:text-[#a78bfa] transition-colors">Dark Matter Bank</div>
                <div className="text-gray-500 text-xs">DeFi 数字银行 · AI 算力代币</div>
              </div>
              <ChevronRight className="w-4 h-4 text-gray-500 group-hover:text-[#a78bfa] group-hover:translate-x-1 transition-all ml-2" />
            </a>

            {/* Divider */}
            <div className="hidden sm:flex items-center text-gray-700">
              <div className="w-8 h-px bg-[#d4af37]/30" />
              <div className="w-2 h-2 rounded-full bg-[#d4af37]/50 mx-2" />
              <div className="w-8 h-px bg-[#d4af37]/30" />
            </div>

            {/* USDD */}
            <a
              href="https://www.usddstablecoin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 bg-[#d4af37]/10 hover:bg-[#d4af37]/20 border border-[#d4af37]/30 hover:border-[#d4af37]/60 rounded-xl px-5 py-3 transition-all group w-full sm:w-auto justify-center"
            >
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#d4af37] to-[#b8960c] flex items-center justify-center text-sm font-bold text-[#0a0a0a] shrink-0">$</div>
              <div className="text-left">
                <div className="text-white text-sm font-semibold group-hover:text-[#d4af37] transition-colors">USDD Stablecoin</div>
                <div className="text-gray-500 text-xs">稳定币发行平台 · 跨链结算</div>
              </div>
              <ChevronRight className="w-4 h-4 text-gray-500 group-hover:text-[#d4af37] group-hover:translate-x-1 transition-all ml-2" />
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-[#141414]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
            准备好开启您的
            <br />
            <span className="text-gradient-gold">交易之旅</span>了吗？
          </h2>
          <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
            立即加入 MINTQX，体验下一代量化交易所带来的无限可能
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link to="/trading" className="btn-primary text-lg px-8 py-4">
              立即注册
              <ArrowRight className="inline-block w-5 h-5 ml-2" />
            </Link>
            <Link to="/about" className="btn-secondary text-lg px-8 py-4">
              联系我们
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
