import { 
  TrendingUp, 
  Target, 
  Eye,
  Users,
  Award,
  Globe,
  Shield,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';

const stats = [
  { value: '2024', label: '成立年份' },
  { value: '100+', label: '上市公司' },
  { value: '1M+', label: '活跃用户' },
  { value: '$50B+', label: '日交易量' },
];

const values = [
  {
    icon: Target,
    title: '创新驱动',
    description: '以 AI 和量化技术为核心，持续推动交易体验革新',
  },
  {
    icon: Shield,
    title: '安全至上',
    description: '采用银行级安全标准，全方位保护用户资产和数据',
  },
  {
    icon: Globe,
    title: '全球视野',
    description: '连接全球投资者和高科技公司，打造国际化交易平台',
  },
  {
    icon: Users,
    title: '用户为本',
    description: '以用户需求为中心，提供专业、高效的服务体验',
  },
];

const team = [
  {
    name: '张明远',
    role: '创始人兼 CEO',
    description: '前高盛量化交易总监，拥有 15 年金融科技经验',
  },
  {
    name: '李思琪',
    role: '首席技术官',
    description: '前 Google AI 研究员，深度学习领域专家',
  },
  {
    name: '王浩然',
    role: '首席运营官',
    description: '前纳斯达克亚太区负责人，资本市场资深人士',
  },
  {
    name: '陈雨萱',
    role: '首席合规官',
    description: '前 SEC 高级法律顾问，金融监管专家',
  },
];

const About = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#d4af37]/5 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-[#d4af37]/10 border border-[#d4af37]/30 rounded-full px-4 py-2 mb-6">
              <TrendingUp className="w-4 h-4 text-[#d4af37]" />
              <span className="text-[#d4af37] text-sm font-medium">关于我们</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              重塑 <span className="text-gradient-gold">量化交易</span>的未来
            </h1>
            <p className="text-gray-400 text-lg">
              MINTQX 是全球首家专注于 AI 和高科技公司的下一代量化交易所，
              致力于通过技术创新为上市公司、量化交易者和投资者创造更大价值。
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-[#141414]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
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

      {/* Mission & Vision */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="glass rounded-2xl p-8">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#d4af37]/20 to-[#d4af37]/5 flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-[#d4af37]" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-4">我们的愿景</h2>
              <p className="text-gray-400 leading-relaxed">
                成为全球领先的 AI 和高科技公司量化交易平台，通过技术创新和生态建设，
                推动资本市场向更高效、更透明、更智能的方向发展，
                为科技创新企业提供最佳融资环境，为投资者创造持续价值。
              </p>
            </div>
            <div className="glass rounded-2xl p-8">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#d4af37]/20 to-[#d4af37]/5 flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-[#d4af37]" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-4">我们的使命</h2>
              <p className="text-gray-400 leading-relaxed">
                以 AI 技术为核心驱动力，打造下一代量化交易基础设施，
                为 AI 和高科技公司提供精准估值和高效融资服务，
                为量化交易者提供低延迟、高可靠的交易环境，
                构建开放、共赢的金融科技生态系统。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-[#141414]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              核心价值观
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              这些价值观指引着我们的每一个决策和行动
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="glass rounded-2xl p-8 card-hover flex items-start space-x-4"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#d4af37]/20 to-[#d4af37]/5 flex items-center justify-center flex-shrink-0">
                  <value.icon className="w-7 h-7 text-[#d4af37]" />
                </div>
                <div>
                  <h3 className="text-white text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-gray-400">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              核心团队
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              来自全球顶级金融机构和科技公司的精英团队
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <div key={member.name} className="glass rounded-2xl p-6 card-hover text-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#d4af37] to-[#b8960c] mx-auto mb-4 flex items-center justify-center">
                  <span className="text-[#0a0a0a] text-2xl font-bold">
                    {member.name.charAt(0)}
                  </span>
                </div>
                <h3 className="text-white text-lg font-semibold mb-1">{member.name}</h3>
                <p className="text-[#d4af37] text-sm mb-3">{member.role}</p>
                <p className="text-gray-400 text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-[#141414]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              监管与合规
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              我们严格遵守各国金融监管要求，确保平台安全合规运营
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Award,
                title: '持牌经营',
                description: '持有美国 SEC、英国 FCA、新加坡 MAS 等多国金融牌照',
              },
              {
                icon: Shield,
                title: '资金安全',
                description: '客户资金独立托管，由顶级银行提供资金存管服务',
              },
              {
                icon: Globe,
                title: '全球合规',
                description: '严格遵守 GDPR、CCPA 等数据保护法规',
              },
            ].map((item) => (
              <div key={item.title} className="glass rounded-2xl p-6 text-center card-hover">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#d4af37]/20 to-[#d4af37]/5 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-[#d4af37]" />
                </div>
                <h3 className="text-white text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass rounded-2xl p-8 lg:p-12">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-white mb-4">联系我们</h2>
              <p className="text-gray-400">有任何问题或合作意向，欢迎与我们联系</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#d4af37]/20 to-[#d4af37]/5 flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-6 h-6 text-[#d4af37]" />
                </div>
                <h3 className="text-white font-semibold mb-2">邮箱</h3>
                <p className="text-gray-400 text-sm">contact@mintqx.com</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#d4af37]/20 to-[#d4af37]/5 flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-6 h-6 text-[#d4af37]" />
                </div>
                <h3 className="text-white font-semibold mb-2">电话</h3>
                <p className="text-gray-400 text-sm">+86 400-888-8888</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#d4af37]/20 to-[#d4af37]/5 flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-6 h-6 text-[#d4af37]" />
                </div>
                <h3 className="text-white font-semibold mb-2">地址</h3>
                <p className="text-gray-400 text-sm">上海市浦东新区陆家嘴金融中心</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
