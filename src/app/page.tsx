'use client'

import { motion } from 'framer-motion'
import WaitlistForm from '@/components/WaitlistForm'
import TokenomicsSection from '@/components/TokenomicsSection'
import RoadmapSection from '@/components/RoadmapSection'
import Footer from '@/components/Footer'
import ParticleField from '@/components/ParticleField'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden aurora scanlines grid-bg">
        {/* Background effects */}
        <ParticleField />
        <div className="absolute inset-0 pointer-events-none"></div>
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 glow-text">
              <span className="gradient-text">Watch Ads.</span>
              <br />
              <span className="text-white">Earn AdCoin.</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
          >
            Earn crypto for your attention — or promote your brand transparently with blockchain.
            <br />
            <span className="text-lg text-gray-400 mt-4 block">
              The future of digital advertising is here.
            </span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-16"
          >
            <WaitlistForm />
          </motion.div>

          {/* Feature highlights */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            <motion.div whileHover={{ rotateX: 6, rotateY: -6, scale: 1.02 }} transition={{ type: 'spring', stiffness: 200, damping: 15 }} className="holo-card neon-border rounded-2xl p-6 hover:shadow-[0_0_30px_rgba(139,92,246,0.35)] transition-all duration-300">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-semibold text-white mb-2">Earn Crypto</h3>
              <p className="text-gray-300 text-sm">
                Get rewarded with AdCoin tokens for every ad you watch
              </p>
            </motion.div>
            <motion.div whileHover={{ rotateX: 6, rotateY: 6, scale: 1.02 }} transition={{ type: 'spring', stiffness: 200, damping: 15 }} className="holo-card neon-border rounded-2xl p-6 hover:shadow-[0_0_30px_rgba(6,182,212,0.35)] transition-all duration-300">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-semibold text-white mb-2">Transparent</h3>
              <p className="text-gray-300 text-sm">
                Blockchain-powered transparency for advertisers and users
              </p>
            </motion.div>
            <motion.div whileHover={{ rotateX: -6, rotateY: 0, scale: 1.02 }} transition={{ type: 'spring', stiffness: 200, damping: 15 }} className="holo-card neon-border rounded-2xl p-6 hover:shadow-[0_0_30px_rgba(245,158,11,0.35)] transition-all duration-300">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold text-white mb-2">Fast & Cheap</h3>
              <p className="text-gray-300 text-sm">
                Built on Polygon for instant, low-cost transactions
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-gray-400 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Tokenomics Section */}
      <TokenomicsSection />

      {/* Roadmap Section */}
      <RoadmapSection />

      {/* Footer */}
      <Footer />
    </main>
  )
}