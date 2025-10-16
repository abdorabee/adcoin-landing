'use client'

import { motion } from 'framer-motion'

const tokenomicsData = [
  {
    percentage: '50%',
    title: 'User Rewards',
    description: 'Direct rewards for users who watch ads and engage with content',
    color: 'from-purple-500 to-purple-600',
    icon: '👥'
  },
  {
    percentage: '25%',
    title: 'Advertiser Incentives',
    description: 'Rewards and incentives for advertisers to promote their brands',
    color: 'from-cyan-500 to-cyan-600',
    icon: '📢'
  },
  {
    percentage: '15%',
    title: 'Development Fund',
    description: 'Funding for platform development, features, and improvements',
    color: 'from-amber-500 to-amber-600',
    icon: '⚡'
  },
  {
    percentage: '10%',
    title: 'Treasury & Operations',
    description: 'Operational costs, partnerships, and strategic initiatives',
    color: 'from-emerald-500 to-emerald-600',
    icon: '🏛️'
  }
]

export default function TokenomicsSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Tokenomics</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Transparent token distribution designed to reward users and fuel sustainable growth
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tokenomicsData.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                transition: { duration: 0.2 }
              }}
              className="glass rounded-2xl p-6 hover:shadow-2xl transition-all duration-300"
            >
              <div className="text-center">
                <div className="text-4xl mb-4">{item.icon}</div>
                <div className={`text-3xl font-bold mb-2 bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                  {item.percentage}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="glass rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-white">
              Built on Polygon Network
            </h3>
            <p className="text-gray-300 mb-6">
              AdCoin leverages Polygon's fast, low-cost transactions to ensure seamless user experiences 
              and sustainable token economics. No more gas fee headaches!
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                Low Transaction Fees
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                Fast Confirmations
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                Ethereum Compatible
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
