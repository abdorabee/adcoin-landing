'use client'

import { motion } from 'framer-motion'

const roadmapData = [
  {
    quarter: 'Q4 2025',
    title: 'MVP Launch',
    description: 'Core platform launch with basic ad viewing and token earning functionality',
    status: 'upcoming',
    features: ['User registration', 'Ad viewing system', 'Token rewards', 'Basic wallet integration']
  },
  {
    quarter: 'Q1 2026',
    title: 'Token Launch on Polygon',
    description: 'Official AdCoin token launch with full DeFi integration and trading capabilities',
    status: 'upcoming',
    features: ['Token deployment', 'DEX listings', 'Staking rewards', 'Governance voting']
  },
  {
    quarter: 'Q2 2026',
    title: 'Advertiser Dashboard',
    description: 'Comprehensive platform for advertisers to create, manage, and optimize campaigns',
    status: 'upcoming',
    features: ['Campaign creation', 'Analytics dashboard', 'Payment processing', 'Targeting tools']
  },
  {
    quarter: 'Q3 2026',
    title: 'Global Expansion',
    description: 'International expansion with multi-language support and regional partnerships',
    status: 'upcoming',
    features: ['Multi-language support', 'Regional partnerships', 'Mobile apps', 'Advanced analytics']
  }
]

export default function RoadmapSection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-transparent to-purple-900/10 aurora">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 glow-text">
            <span className="gradient-text">Roadmap</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Our journey to revolutionize digital advertising with blockchain technology
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-400 via-cyan-400 to-amber-400 shadow-[0_0_20px_rgba(139,92,246,0.5)] hidden md:block"></div>

          <div className="space-y-12">
            {roadmapData.map((item, index) => (
              <motion.div
                key={item.quarter}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative flex items-start gap-8"
              >
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-6 w-4 h-4 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full border-4 border-gray-900 z-10 shadow-[0_0_12px_rgba(139,92,246,0.8)]"></div>

                <div className="flex-1 ml-0 md:ml-16">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="holo-card neon-border rounded-2xl p-8 hover:shadow-[0_0_36px_rgba(6,182,212,0.35)] transition-all duration-300"
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div className="flex items-center gap-4 mb-4 md:mb-0">
                        <span className="text-2xl font-bold gradient-text">
                          {item.quarter}
                        </span>
                        <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm font-medium">
                          {item.status}
                        </span>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-3">
                      {item.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-6 text-lg">
                      {item.description}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {item.features.map((feature, featureIndex) => (
                        <motion.div
                          key={featureIndex}
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: (index * 0.2) + (featureIndex * 0.1) }}
                          className="flex items-center gap-3 p-3 bg-white/5 rounded-lg"
                        >
                          <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full"></div>
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="holo-card neon-border rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-white">
              Join Our Journey
            </h3>
            <p className="text-gray-300 mb-6">
              Be part of the future of digital advertising. Early supporters will receive exclusive benefits 
              and priority access to new features.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2 text-purple-300">
                <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                Early Access
              </div>
              <div className="flex items-center gap-2 text-cyan-300">
                <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                Exclusive Rewards
              </div>
              <div className="flex items-center gap-2 text-amber-300">
                <span className="w-2 h-2 bg-amber-400 rounded-full"></span>
                Community Governance
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
