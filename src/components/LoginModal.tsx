import { useState } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { X } from 'lucide-react'

interface LoginModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function LoginModal({ isOpen, onClose }: LoginModalProps) {
  const { signIn, signUp, signInWithPhone, verifyOTP } = useAuth()
  const [mode, setMode] = useState<'email' | 'phone'>('email')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [phone, setPhone] = useState('')
  const [otp, setOtp] = useState('')
  const [otpSent, setOtpSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [isRegister, setIsRegister] = useState(false)

  if (!isOpen) return null

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    
    try {
      if (isRegister) {
        const { error } = await signUp(email, password)
        if (error) throw error
        setError('注册成功！请查收验证邮件。')
      } else {
        const { error } = await signIn(email, password)
        if (error) throw error
        onClose()
      }
    } catch (err: any) {
      setError(err.message || '操作失败')
    } finally {
      setLoading(false)
    }
  }

  const handlePhoneSend = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    
    try {
      const { error } = await signInWithPhone(phone)
      if (error) throw error
      setOtpSent(true)
    } catch (err: any) {
      setError(err.message || '发送验证码失败')
    } finally {
      setLoading(false)
    }
  }

  const handleOTPVerify = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    
    try {
      const { error } = await verifyOTP(phone, otp)
      if (error) throw error
      onClose()
    } catch (err: any) {
      setError(err.message || '验证码错误')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
      <div className="bg-gray-900 border border-gray-700 rounded-lg w-full max-w-md mx-4 relative">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          <X size={20} />
        </button>
        
        <div className="p-8">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">
            {isRegister ? '创建账户' : '欢迎登录'}
          </h2>
          
          <div className="flex mb-6 bg-gray-800 rounded">
            <button
              onClick={() => { setMode('email'); setError(''); setOtpSent(false) }}
              className={`flex-1 py-2 text-sm ${mode === 'email' ? 'text-blue-400 border-b-2 border-blue-400' : 'text-gray-400'}`}
            >
              邮箱登录
            </button>
            <button
              onClick={() => { setMode('phone'); setError(''); setOtpSent(false) }}
              className={`flex-1 py-2 text-sm ${mode === 'phone' ? 'text-blue-400 border-b-2 border-blue-400' : 'text-gray-400'}`}
            >
              手机登录
            </button>
          </div>
          
          {error && (
            <div className="mb-4 p-3 bg-red-500/20 border border-red-500/50 rounded text-red-400 text-sm">
              {error}
            </div>
          )}
          
          {mode === 'email' ? (
            <form onSubmit={handleEmailSubmit} className="space-y-4">
              <div>
                <input
                  type="email"
                  placeholder="电子邮箱"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded text-white placeholder:text-gray-500 focus:outline-none focus:border-blue-400"
                  required
                />
              </div>
              <div>
                <input
                  type="password"
                  placeholder="密码"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded text-white placeholder:text-gray-500 focus:outline-none focus:border-blue-400"
                  required
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 bg-blue-600 text-white font-medium rounded hover:bg-blue-500 transition disabled:opacity-50"
              >
                {loading ? '处理中...' : (isRegister ? '注册' : '登录')}
              </button>
              <div className="text-center">
                <button
                  type="button"
                  onClick={() => setIsRegister(!isRegister)}
                  className="text-gray-400 text-sm hover:text-blue-400"
                >
                  {isRegister ? '已有账号？登录' : '没有账号？注册'}
                </button>
              </div>
            </form>
          ) : (
            otpSent ? (
              <form onSubmit={handleOTPVerify} className="space-y-4">
                <div className="text-center text-gray-400 mb-4">
                  验证码已发送至 {phone}
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="输入6位验证码"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value.replace(/\D/g, '').slice(0, 6))}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded text-white text-center text-2xl tracking-widest placeholder:text-gray-500 focus:outline-none focus:border-blue-400"
                    maxLength={6}
                    required
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading || otp.length !== 6}
                  className="w-full py-3 bg-blue-600 text-white font-medium rounded hover:bg-blue-500 transition disabled:opacity-50"
                >
                  {loading ? '验证中...' : '验证登录'}
                </button>
                <button
                  type="button"
                  onClick={() => setOtpSent(false)}
                  className="w-full text-gray-400 text-sm hover:text-blue-400"
                >
                  重新发送验证码
                </button>
              </form>
            ) : (
              <form onSubmit={handlePhoneSend} className="space-y-4">
                <div>
                  <input
                    type="tel"
                    placeholder="手机号 (国际格式，如 +86...)"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded text-white placeholder:text-gray-500 focus:outline-none focus:border-blue-400"
                    required
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading || phone.length < 10}
                  className="w-full py-3 bg-blue-600 text-white font-medium rounded hover:bg-blue-500 transition disabled:opacity-50"
                >
                  {loading ? '发送中...' : '获取验证码'}
                </button>
              </form>
            )
          )}
        </div>
      </div>
    </div>
  )
}