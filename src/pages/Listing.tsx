import { useState } from 'react';
import { 
  Building2, 
  Users,
  Globe,
  Zap,
  ArrowRight,
  CheckCircle2,
  BarChart3
} from 'lucide-react';

const benefits = [
  {
    icon: Building2,
    title: '精准估值',
    description: '基于 AI 技术的智能估值系统，为高科技公司提供更准确的市值评估',
  },
  {
    icon: Zap,
    title: '简化流程',
    description: '在线申请、自动化审核，大幅缩短上市准备时间',
  },
  {
    icon: Globe,
    title: '全球曝光',
    description: '面向全球量化交易者和投资者，提升品牌国际影响力',
  },
  {
    icon: Users,
    title: '活跃生态',
    description: '连接专业量化交易者，提升股票流动性和市场活跃度',
  },
];

const requirements = [
  '公司成立满 2 年',
  '年营收达到 1000 万美元',
  '拥有核心技术或专利',
  '通过合规审查',
  '披露完整的财务信息',
  '接受定期审计',
];

const process = [
  {
    step: '01',
    title: '提交申请',
    description: '在线填写上市申请表，提交公司基本信息和财务资料',
  },
  {
    step: '02',
    title: '资质审核',
    description: '我们的专业团队将在 5-7 个工作日内完成初步审核',
  },
  {
    step: '03',
    title: '尽职调查',
    description: '深入调查公司业务、财务和法律状况，确保信息真实完整',
  },
  {
    step: '04',
    title: '上市定价',
    description: '基于 AI 估值模型和市场情况，确定合理的发行价格',
  },
  {
    step: '05',
    title: '正式上市',
    description: '完成所有流程后，公司股票将在 MINTQX 交易所挂牌交易',
  },
];

const Listing = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    revenue: '',
    employees: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert('感谢您的申请！我们的团队将在 24 小时内与您联系。');
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#d4af37]/5 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-[#d4af37]/10 border border-[#d4af37]/30 rounded-full px-4 py-2 mb-6">
              <Building2 className="w-4 h-4 text-[#d4af37]" />
              <span className="text-[#d4af37] text-sm font-medium">上市服务</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              为 <span className="text-gradient-gold">AI 和高科技公司</span>
              <br />打造的上市平台
            </h1>
            <p className="text-gray-400 text-lg mb-8">
              更精准的估值、更活跃的量化交易生态、更高效的资本募集
            </p>
            <a href="#apply" className="btn-primary text-lg px-8 py-4 inline-flex items-center">
              立即申请上市
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-[#141414]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              上市优势
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              MINTQX 为 AI 和高科技公司提供独特的上市价值
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="glass rounded-2xl p-8 card-hover flex items-start space-x-4"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#d4af37]/20 to-[#d4af37]/5 flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="w-7 h-7 text-[#d4af37]" />
                </div>
                <div>
                  <h3 className="text-white text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-gray-400">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                上市标准
              </h2>
              <p className="text-gray-400 mb-8">
                我们专注于 AI 和高科技领域，对符合条件的公司提供灵活的上市标准
              </p>
              <div className="space-y-4">
                {requirements.map((req) => (
                  <div key={req} className="flex items-center space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-[#d4af37] flex-shrink-0" />
                    <span className="text-gray-300">{req}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="glass rounded-2xl p-8">
              <div className="flex items-center space-x-3 mb-6">
                <BarChart3 className="w-8 h-8 text-[#d4af37]" />
                <h3 className="text-white text-xl font-semibold">市场表现</h3>
              </div>
              <div className="space-y-6">
                {[
                  { label: '平均首日涨幅', value: '+45%' },
                  { label: '平均市值增长', value: '+120%' },
                  { label: '流动性提升', value: '3x' },
                ].map((stat) => (
                  <div key={stat.label} className="flex items-center justify-between">
                    <span className="text-gray-400">{stat.label}</span>
                    <span className="text-[#d4af37] text-2xl font-bold">{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-[#141414]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              上市流程
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              清晰、透明、高效的上市流程
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {process.map((step) => (
              <div key={step.step} className="glass rounded-2xl p-6 card-hover">
                <div className="text-4xl font-bold text-[#d4af37]/30 mb-4">{step.step}</div>
                <h3 className="text-white text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-400 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="apply" className="py-20 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass rounded-2xl p-8 lg:p-12">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-white mb-4">申请上市</h2>
              <p className="text-gray-400">填写以下信息，我们的团队将在 24 小时内与您联系</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    公司名称 *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full bg-[#141414] border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-[#d4af37] focus:outline-none transition-colors"
                    placeholder="请输入公司名称"
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    联系人姓名 *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full bg-[#141414] border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-[#d4af37] focus:outline-none transition-colors"
                    placeholder="请输入联系人姓名"
                    value={formData.contactName}
                    onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    邮箱地址 *
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full bg-[#141414] border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-[#d4af37] focus:outline-none transition-colors"
                    placeholder="请输入邮箱地址"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    联系电话 *
                  </label>
                  <input
                    type="tel"
                    required
                    className="w-full bg-[#141414] border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-[#d4af37] focus:outline-none transition-colors"
                    placeholder="请输入联系电话"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    年营收（美元）
                  </label>
                  <input
                    type="text"
                    className="w-full bg-[#141414] border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-[#d4af37] focus:outline-none transition-colors"
                    placeholder="例如：10,000,000"
                    value={formData.revenue}
                    onChange={(e) => setFormData({ ...formData, revenue: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    员工人数
                  </label>
                  <input
                    type="number"
                    className="w-full bg-[#141414] border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-[#d4af37] focus:outline-none transition-colors"
                    placeholder="例如：100"
                    value={formData.employees}
                    onChange={(e) => setFormData({ ...formData, employees: e.target.value })}
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  公司简介
                </label>
                <textarea
                  rows={4}
                  className="w-full bg-[#141414] border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-[#d4af37] focus:outline-none transition-colors resize-none"
                  placeholder="请简要介绍公司业务、核心技术和上市计划"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <button type="submit" className="w-full btn-primary py-4 text-lg">
                提交申请
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Listing;
