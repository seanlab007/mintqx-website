import { Link } from 'react-router-dom';
import { TrendingUp, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { label: '上市服务', path: '/listing' },
      { label: '交易平台', path: '/trading' },
      { label: '开发者API', path: '/developers' },
      { label: '市场数据', path: '/trading' },
    ],
    company: [
      { label: '关于我们', path: '/about' },
      { label: '团队介绍', path: '/about' },
      { label: '新闻资讯', path: '/about' },
      { label: '加入我们', path: '/about' },
    ],
    support: [
      { label: '帮助中心', path: '#' },
      { label: 'API文档', path: '/developers' },
      { label: '服务状态', path: '#' },
      { label: '联系我们', path: '/about' },
    ],
    legal: [
      { label: '用户协议', path: '#' },
      { label: '隐私政策', path: '#' },
      { label: '风险提示', path: '#' },
      { label: '合规声明', path: '#' },
    ],
  };

  // Cross-site ecosystem partners
  const ecosystemLinks = [
    {
      name: 'Dark Matter Bank',
      url: 'https://www.darkmatterbank.com',
      desc: 'DeFi 数字银行',
      badge: 'DARK',
      color: '#a78bfa',
    },
    {
      name: 'USDD Stablecoin',
      url: 'https://www.usddstablecoin.com',
      desc: '稳定币发行平台',
      badge: 'USDD',
      color: '#d4af37',
    },
  ];

  return (
    <footer className="bg-[#0a0a0a] border-t border-[#d4af37]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#d4af37] to-[#b8960c] flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-[#0a0a0a]" />
              </div>
              <span className="text-xl font-bold text-gradient-gold">MINTQX</span>
            </Link>
            <p className="text-gray-400 text-sm mb-6 max-w-xs">
              面向 AI 和高科技公司的下一代量化交易股票市场，提供高效、透明且充满活力的交易生态系统。
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-400 text-sm">
                <Mail className="w-4 h-4 text-[#d4af37]" />
                <span>contact@mintqx.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400 text-sm">
                <Phone className="w-4 h-4 text-[#d4af37]" />
                <span>+86 400-888-8888</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400 text-sm">
                <MapPin className="w-4 h-4 text-[#d4af37]" />
                <span>上海市浦东新区</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">服务</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-gray-400 text-sm hover:text-[#d4af37] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">公司</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-gray-400 text-sm hover:text-[#d4af37] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-semibold mb-4">支持</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-gray-400 text-sm hover:text-[#d4af37] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold mb-4">法律</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-gray-400 text-sm hover:text-[#d4af37] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Ecosystem Partners */}
        <div className="mt-12 pt-8 border-t border-[#d4af37]/20">
          <p className="text-gray-500 text-xs uppercase tracking-widest mb-4 font-medium">生态合作伙伴</p>
          <div className="flex flex-wrap gap-3">
            {ecosystemLinks.map((eco) => (
              <a
                key={eco.name}
                href={eco.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#d4af37]/40 rounded-lg px-3 py-2 transition-all group"
              >
                <span
                  className="text-xs font-bold px-1.5 py-0.5 rounded"
                  style={{ color: eco.color, backgroundColor: `${eco.color}18`, border: `1px solid ${eco.color}44` }}
                >
                  {eco.badge}
                </span>
                <span className="text-gray-300 text-sm group-hover:text-white transition-colors">{eco.name}</span>
                <span className="text-gray-500 text-xs hidden sm:inline">{eco.desc}</span>
                <ExternalLink className="w-3 h-3 text-gray-500 group-hover:text-[#d4af37] transition-colors" />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 pt-6 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} MINTQX. All rights reserved.
          </p>
          <div className="flex items-center space-x-6">
            <a href="#" className="text-gray-400 hover:text-[#d4af37] transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-[#d4af37] transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-[#d4af37] transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
