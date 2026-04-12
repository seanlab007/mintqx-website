import { useState, useEffect } from 'react';
import { 
  TrendingUp, 
  TrendingDown,
  Search,
  Filter,
  ArrowUpDown,
  Star,
  BarChart3,
  Activity,
  Clock,
  Globe
} from 'lucide-react';

// Mock stock data
const stocks = [
  { symbol: 'NVDA', name: 'NVIDIA Corp', price: 875.28, change: 2.45, volume: '45.2M', marketCap: '2.1T', sector: 'AI芯片' },
  { symbol: 'TSLA', name: 'Tesla Inc', price: 175.34, change: -1.23, volume: '98.5M', marketCap: '557B', sector: '自动驾驶' },
  { symbol: 'MSFT', name: 'Microsoft Corp', price: 421.44, change: 0.87, volume: '22.1M', marketCap: '3.1T', sector: '云计算' },
  { symbol: 'GOOGL', name: 'Alphabet Inc', price: 165.86, change: 1.12, volume: '28.3M', marketCap: '2.0T', sector: 'AI搜索' },
  { symbol: 'META', name: 'Meta Platforms', price: 505.68, change: 3.21, volume: '18.7M', marketCap: '1.3T', sector: '元宇宙' },
  { symbol: 'AMD', name: 'AMD Inc', price: 178.92, change: -0.56, volume: '52.4M', marketCap: '289B', sector: 'AI芯片' },
  { symbol: 'PLTR', name: 'Palantir Tech', price: 22.45, change: 5.67, volume: '65.8M', marketCap: '48B', sector: '大数据分析' },
  { symbol: 'CRWD', name: 'CrowdStrike', price: 345.67, change: 1.89, volume: '3.2M', marketCap: '82B', sector: '网络安全' },
];

const marketOverview = [
  { name: 'MINTQX Composite', value: 3847.52, change: 2.34 },
  { name: 'AI Tech Index', value: 2156.78, change: 4.12 },
  { name: 'Quantum Index', value: 987.45, change: -0.87 },
  { name: 'Robotics Index', value: 1654.23, change: 1.56 },
];

const Trading = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSector, setSelectedSector] = useState('全部');
  const [sortBy, setSortBy] = useState('marketCap');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');
  const [watchlist, setWatchlist] = useState<string[]>(['NVDA', 'TSLA']);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const sectors = ['全部', 'AI芯片', '自动驾驶', '云计算', 'AI搜索', '元宇宙', '大数据分析', '网络安全'];

  const filteredStocks = stocks
    .filter(stock => {
      const matchesSearch = stock.symbol.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          stock.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesSector = selectedSector === '全部' || stock.sector === selectedSector;
      return matchesSearch && matchesSector;
    })
    .sort((a, b) => {
      const aValue = a[sortBy as keyof typeof a];
      const bValue = b[sortBy as keyof typeof b];
      if (typeof aValue === 'number' && typeof bValue === 'number') {
        return sortOrder === 'asc' ? aValue - bValue : bValue - aValue;
      }
      return 0;
    });

  const toggleWatchlist = (symbol: string) => {
    setWatchlist(prev => 
      prev.includes(symbol) 
        ? prev.filter(s => s !== symbol)
        : [...prev, symbol]
    );
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Market Overview Bar */}
      <div className="bg-[#141414] border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center space-x-6">
              {marketOverview.map((market) => (
                <div key={market.name} className="flex items-center space-x-2">
                  <span className="text-gray-400 text-sm">{market.name}</span>
                  <span className="text-white font-medium">{market.value.toFixed(2)}</span>
                  <span className={`text-sm ${market.change >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                    {market.change >= 0 ? '+' : ''}{market.change}%
                  </span>
                </div>
              ))}
            </div>
            <div className="flex items-center space-x-4 text-gray-400 text-sm">
              <div className="flex items-center space-x-1">
                <Globe className="w-4 h-4" />
                <span>市场状态: <span className="text-green-400">交易中</span></span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="w-4 h-4" />
                <span>{currentTime.toLocaleTimeString('zh-CN')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">市场行情</h1>
          <p className="text-gray-400">实时追踪 AI 和高科技公司股票表现</p>
        </div>

        {/* Filters */}
        <div className="glass rounded-xl p-4 mb-6">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input
                  type="text"
                  placeholder="搜索股票代码或名称"
                  className="bg-[#0a0a0a] border border-gray-700 rounded-lg pl-10 pr-4 py-2 text-white focus:border-[#d4af37] focus:outline-none w-64"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="flex items-center space-x-2">
                <Filter className="w-5 h-5 text-gray-400" />
                <select
                  className="bg-[#0a0a0a] border border-gray-700 rounded-lg px-4 py-2 text-white focus:border-[#d4af37] focus:outline-none"
                  value={selectedSector}
                  onChange={(e) => setSelectedSector(e.target.value)}
                >
                  {sectors.map(sector => (
                    <option key={sector} value={sector}>{sector}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-gray-400 text-sm">排序:</span>
              <select
                className="bg-[#0a0a0a] border border-gray-700 rounded-lg px-4 py-2 text-white focus:border-[#d4af37] focus:outline-none"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="marketCap">市值</option>
                <option value="price">价格</option>
                <option value="change">涨跌幅</option>
                <option value="volume">成交量</option>
              </select>
              <button
                onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
                className="p-2 bg-[#0a0a0a] border border-gray-700 rounded-lg hover:border-[#d4af37] transition-colors"
              >
                <ArrowUpDown className="w-5 h-5 text-gray-400" />
              </button>
            </div>
          </div>
        </div>

        {/* Stock Table */}
        <div className="glass rounded-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-800">
                  <th className="text-left py-4 px-6 text-gray-400 font-medium text-sm">收藏</th>
                  <th className="text-left py-4 px-6 text-gray-400 font-medium text-sm">代码</th>
                  <th className="text-left py-4 px-6 text-gray-400 font-medium text-sm">名称</th>
                  <th className="text-left py-4 px-6 text-gray-400 font-medium text-sm">行业</th>
                  <th className="text-right py-4 px-6 text-gray-400 font-medium text-sm">价格</th>
                  <th className="text-right py-4 px-6 text-gray-400 font-medium text-sm">涨跌幅</th>
                  <th className="text-right py-4 px-6 text-gray-400 font-medium text-sm">成交量</th>
                  <th className="text-right py-4 px-6 text-gray-400 font-medium text-sm">市值</th>
                  <th className="text-center py-4 px-6 text-gray-400 font-medium text-sm">操作</th>
                </tr>
              </thead>
              <tbody>
                {filteredStocks.map((stock) => (
                  <tr key={stock.symbol} className="border-b border-gray-800/50 hover:bg-[#d4af37]/5 transition-colors">
                    <td className="py-4 px-6">
                      <button
                        onClick={() => toggleWatchlist(stock.symbol)}
                        className={`transition-colors ${watchlist.includes(stock.symbol) ? 'text-[#d4af37]' : 'text-gray-600 hover:text-[#d4af37]'}`}
                      >
                        <Star className={`w-5 h-5 ${watchlist.includes(stock.symbol) ? 'fill-current' : ''}`} />
                      </button>
                    </td>
                    <td className="py-4 px-6">
                      <span className="text-[#d4af37] font-semibold">{stock.symbol}</span>
                    </td>
                    <td className="py-4 px-6 text-white">{stock.name}</td>
                    <td className="py-4 px-6">
                      <span className="px-3 py-1 bg-[#d4af37]/10 text-[#d4af37] text-xs rounded-full">
                        {stock.sector}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-right text-white font-medium">
                      ${stock.price.toFixed(2)}
                    </td>
                    <td className="py-4 px-6 text-right">
                      <span className={`flex items-center justify-end ${stock.change >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                        {stock.change >= 0 ? <TrendingUp className="w-4 h-4 mr-1" /> : <TrendingDown className="w-4 h-4 mr-1" />}
                        {stock.change >= 0 ? '+' : ''}{stock.change}%
                      </span>
                    </td>
                    <td className="py-4 px-6 text-right text-gray-400">{stock.volume}</td>
                    <td className="py-4 px-6 text-right text-gray-400">{stock.marketCap}</td>
                    <td className="py-4 px-6 text-center">
                      <button className="btn-primary text-xs py-2 px-4">交易</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="glass rounded-xl p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Activity className="w-6 h-6 text-[#d4af37]" />
              <h3 className="text-white font-semibold">市场活跃度</h3>
            </div>
            <div className="text-3xl font-bold text-gradient-gold mb-2">高</div>
            <p className="text-gray-400 text-sm">当前交易量高于平均水平 23%</p>
          </div>
          <div className="glass rounded-xl p-6">
            <div className="flex items-center space-x-3 mb-4">
              <BarChart3 className="w-6 h-6 text-[#d4af37]" />
              <h3 className="text-white font-semibold">涨跌停</h3>
            </div>
            <div className="flex items-center space-x-4">
              <div>
                <div className="text-2xl font-bold text-green-400">156</div>
                <p className="text-gray-400 text-xs">上涨</p>
              </div>
              <div>
                <div className="text-2xl font-bold text-red-400">89</div>
                <p className="text-gray-400 text-xs">下跌</p>
              </div>
            </div>
          </div>
          <div className="glass rounded-xl p-6">
            <div className="flex items-center space-x-3 mb-4">
              <TrendingUp className="w-6 h-6 text-[#d4af37]" />
              <h3 className="text-white font-semibold">今日热门</h3>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[#d4af37] text-sm">PLTR</span>
                <span className="text-green-400 text-sm">+5.67%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[#d4af37] text-sm">META</span>
                <span className="text-green-400 text-sm">+3.21%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trading;
