'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.8,
      ease: 'easeOut',
    },
  }),
};

const whyInvestCards = [
  {
    title: 'Full-Stack Intelligence',
    text: `From custom AI chips to real-time predictive pipelines, Firebird embeds intelligence into every layer. Our vertically integrated stack ensures faster time-to-market, lower operating costs, and maximum system autonomy.`,
  },
  {
    title: 'Sovereignty by Design',
    text: `Unlike centralized platforms, Firebird systems are decentralized, zero-trust, and user-controlled. You don’t rent your infrastructure — you own it.`,
  },
];

const cardData = {
  Mission: {
    title: 'Mission',
    text: `To empower humanity with decentralized, intelligent infrastructure that is fast, secure, and built to scale...`,
    bg: '#E3F2FD',
    textColor: '#0D47A1',
  },
  Vision: {
    title: 'Vision',
    text: `A future where every system is intelligent. Every node is sovereign...`,
    bg: '#E8F5E9',
    textColor: '#1B5E20',
  },
  Statement: {
    title: 'Statement',
    text: `A future where every system is intelligent. Every node is sovereign...`,
    bg: '#FFF3E0',
    textColor: '#E65100',
  },
};

const sections = [
  {
    id: 'ai-cloud',
    label: 'AI Cloud',
    content: 'We design high-performance decentralized AI cloud solutions.',
    color: '#00C853',
  },
  {
    id: 'silicon',
    label: 'Custom Silicon',
    content: 'From chip to stack, we build AI-first silicon for scale.',
    color: '#2962FF',
  },
  {
    id: 'sovereignty',
    label: 'Data Sovereignty',
    content: 'We give users control with encrypted, sovereign systems.',
    color: '#FF6D00',
  },
  {
    id: 'networks',
    label: 'Decentralized Networks',
    content: 'Protocols that eliminate bottlenecks and enable automation.',
    color: '#D500F9',
  },
];

const AboutUs: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [active, setActive] = useState<string | null>(null);
  const cardKeys = Object.keys(cardData) as Array<keyof typeof cardData>;
  const currentCardKey = cardKeys[currentIndex];
  const currentCard = cardData[currentCardKey];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % cardKeys.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [cardKeys.length]);

  return (
    <>
      {/* WHO WE ARE */}
      <section className="relative w-full h-[848px] bg-gradient-to-b from-black via-[#180102] via-40% to-[#C30A0D] overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-cover bg-center z-0 opacity-20" />

        {/* Logo */}
        <div className="absolute w-[460px] h-[460px] left-[98px] top-[84px]">
          <div className="absolute w-full h-full rounded-full bg-[radial-gradient(50%_50%,rgba(149,149,149,0.05)_0%,rgba(122,122,122,0.08)_80.29%,rgba(115,115,115,0)_100%)]" />
          <Image
            src="/images/logo2.jpg"
            alt="Logo"
            width={460}
            height={460}
            className="absolute top-0 left-0 rounded-full object-cover"
          />
        </div>

        {/* Text */}
        <div className="absolute w-[600px] left-[651px] top-[52px] text-white text-right">
          <h2 className="text-[30px] font-semibold mb-4">WHO ARE WE?</h2>
          <p className="text-[20px] font-semibold leading-[24px]">
            Firebird is a frontier technology organization reimagining the future of computing from
            the ground up...
          </p>
        </div>

        {/* Rotating Cards */}
        <div className="absolute left-[600px] top-[306px] w-[576px] h-[278px] perspective-[1000px]">
          {['Statement', 'Vision'].map((key, i) => (
            <div
              key={key}
              className="absolute w-full h-full rounded-[20px] p-6"
              style={{
                background: cardData[key as keyof typeof cardData].bg,
                color: cardData[key as keyof typeof cardData].textColor,
                transform: `rotateX(45deg) translateZ(-${60 - i * 30}px)`,
                zIndex: 10 + i * 10,
                opacity: 0.4 + i * 0.3,
              }}
            >
              <h3 className="text-[24px] font-semibold mb-3">
                {cardData[key as keyof typeof cardData].title}
              </h3>
              <p className="text-[20px] font-medium leading-[24px]">
                {cardData[key as keyof typeof cardData].text}
              </p>
            </div>
          ))}

          <AnimatePresence mode="wait">
            <motion.div
              key={currentCardKey}
              className="absolute w-full h-full rounded-[20px] p-6"
              style={{
                background: currentCard.bg,
                color: currentCard.textColor,
                zIndex: 30,
              }}
              initial={{ rotateY: 90, opacity: 0 }}
              animate={{ rotateY: 0, opacity: 1 }}
              exit={{ rotateY: -90, opacity: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-[24px] font-semibold mb-3">{currentCard.title}</h3>
              <p className="text-[20px] font-medium leading-[24px]">{currentCard.text}</p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dot Nav */}
        <div className="absolute left-[1380px] top-[349px]">
          <div className="w-[2px] h-[150px] bg-[#D9D9D9] rounded-[20px] ml-8" />
          <div className="w-[2px] h-[50px] bg-[#D9D9D9] rounded-[20px] ml-8 mt-2" />
          <div className="flex flex-col gap-2 mt-6 ml-7">
            {cardKeys.map((_, idx) => (
              <div
                key={idx}
                className={`w-[10px] h-[10px] rounded-full ${
                  idx === currentIndex ? 'bg-[#D5D5D5]' : 'bg-[#878787]'
                }`}
              />
            ))}
          </div>
        </div>

        <div className="absolute w-full text-center bottom-0">
          <h1 className="text-[170px] font-semibold leading-[206px] text-white/75">About Us</h1>
        </div>
      </section>

      {/* WHAT DO WE DO */}
      <section className="relative w-full h-[848px] bg-black text-white flex items-center justify-center">
        <div className="absolute top-[60px] left-[60px] max-w-[600px] z-10 text-white">
          <h2 className="text-[32px] font-bold mb-2">
            WHAT DO WE <span className="text-yellow-400">DO?</span>
          </h2>
          <p className="text-[16px] leading-relaxed">
            Firebird is not your typical infrastructure provider. We engineer intelligent, sovereign
            systems that merge custom silicon, AI-first software, and decentralized architecture...
          </p>
        </div>

        <motion.svg
          viewBox="0 0 600 600"
          className="absolute w-[500px] h-[500px] left-[calc(50%-250px)] top-[calc(50%-250px)]"
          animate={!active ? { rotate: 360 } : {}}
          transition={{ repeat: Infinity, duration: 40, ease: 'linear' }}
        >
          {[90, 190, 290].map((radius) => (
            <circle key={radius} cx="300" cy="300" r={radius} stroke="#333" strokeWidth="1" fill="none" />
          ))}

          {sections.map((section, i) => {
            const angle = (360 / sections.length) * i;
            const rad = (angle * Math.PI) / 180;
            const r = 190;
            const x = 300 + r * Math.cos(rad);
            const y = 300 + r * Math.sin(rad);
            const tooltipY = y < 300 ? y - 140 : y + 30;
            const isActive = active === section.id;

            return (
              <g key={section.id}>
                <line x1="300" y1="300" x2={x} y2={y} stroke="#555" strokeWidth="1" />
                <circle cx={x} cy={y} r="6" fill="#fff" stroke="#000" strokeWidth="1" />
                <motion.circle
                  cx={x}
                  cy={y}
                  r="24"
                  fill={section.color}
                  className="cursor-pointer"
                  whileHover={{ scale: 1.4, rotateZ: 10 }}
                  onClick={() =>
                    setActive((prev) => (prev === section.id ? null : section.id))
                  }
                />
                <AnimatePresence>
                  {isActive && (
                    <foreignObject x={x - 100} y={tooltipY} width="200" height="100">
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8, rotate: -angle }}
                        animate={{ opacity: 1, scale: 1, rotate: -angle }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                        className="bg-white text-black p-3 rounded-xl shadow-xl text-sm font-semibold"
                        style={{ transformOrigin: 'center center' }}
                      >
                        <div className="text-base">{section.label}</div>
                        <div className="text-xs font-normal opacity-70">{section.content}</div>
                      </motion.div>
                    </foreignObject>
                  )}
                </AnimatePresence>
              </g>
            );
          })}
        </motion.svg>
      </section>

      {/* WHY INVEST */}
      <section className="relative w-full h-screen bg-gradient-to-b from-black via-black/90 to-[#7c0000] overflow-hidden flex flex-col items-center justify-center px-4">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-cover bg-center opacity-30 z-0" />

        <div className="relative z-10 max-w-5xl text-center text-white">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-4">
            WHY <span className="text-red-500">INVEST</span> IN US?
          </h2>
          <p className="text-sm md:text-base font-medium mb-12">
            Firebird is where infrastructure meets ideology — engineered for those who demand
            performance, ownership, and long-term advantage
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            {whyInvestCards.map((card, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardVariants}
                className="w-full md:w-[420px] p-6 rounded-xl backdrop-blur-md bg-white/10 border border-white/20 text-white shadow-lg"
              >
                <h3 className="text-xl font-semibold mb-3">{card.title}</h3>
                <p className="text-sm leading-relaxed">{card.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative w-full h-[400px] bg-gradient-to-r from-black via-gray-900 to-black text-center flex flex-col items-center justify-center gap-6">
        <motion.h2
          className="text-5xl font-extrabold bg-gradient-to-r from-red-400 via-yellow-400 to-red-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Building the Future of Intelligent Infrastructure
        </motion.h2>

        <motion.button
          className="px-6 py-3 text-lg font-semibold text-white bg-red-600 rounded-xl shadow-lg hover:bg-red-700 transition"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
        >
          Join the Revolution
        </motion.button>
      </section>

       <section className="relative flex items-center justify-center min-h-screen bg-gradient-to-b from-black to-red-900 text-white overflow-hidden">
      {/* 3D Grid Lines Background */}
      <div className="absolute inset-0 grid-background z-0 pointer-events-none" />

      {/* Content Wrapper */}
      <div className="relative z-10 px-6 max-w-7xl w-full flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left: Flame Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="w-[200px] h-[200px] md:w-[250px] md:h-[250px]"
        >
          <Image
            src="/images/00208.png" // Save the blue flame image as public/flame-icon.png
            alt="Flame"
            width={250}
            height={250}
            className="object-contain"
          />
        </motion.div>

        {/* Right: Text Content */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="text-center md:text-left max-w-xl"
        >
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-yellow-400">JOIN</span>{' '}
            <span className="text-white">US</span>
          </h2>

          <p className="text-sm md:text-base text-gray-300 mb-6">
            We operate as a high-talent-density unit, unified by bold vision and disciplined execution.
            We're not just a company — we're a movement of builders, scientists, and strategists reshaping the
            foundations of digital infrastructure.
          </p>

          <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm border border-white/20 shadow-lg">
            <p className="mb-4 text-sm md:text-base text-white">
              Whether you're a startup scaling fast, a government building sovereign cloud systems,
              or a partner ready to unlock decentralized AI at scale — Firebird is your launchpad.
            </p>

            <button className="px-6 py-2 rounded-md bg-white/20 hover:bg-white/30 transition-colors duration-300 border border-white text-white font-semibold">
              JOIN US
            </button>
          </div>
        </motion.div>
      </div>
    </section>
    </>
  );
};

export default AboutUs;
