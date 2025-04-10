'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Cross, BookOpen, Star, Users, Globe, Mic, HeartHandshake } from 'lucide-react';
import TeamMemberCard from '@/components/about/TeamMemberCard'; // You'll need to create this component
import HistoryTimeline from '@/components/about/HistoryTimeline'; // You'll need to create this component
import NavBar from '@/components/Header';
import HolyFooter from '@/components/Footer';

export default function AboutPage() {
  const coreBeliefs = [
    { icon: <Cross size={32} />, title: "Divine Salvation", text: "We believe in salvation through faith in Jesus Christ alone, by grace not works." },
    { icon: <BookOpen size={32} />, title: "Biblical Truth", text: "The Bible as the inspired, inerrant word of God and final authority for life." },
    { icon: <Star size={32} />, title: "Eternal Hope", text: "In the promise of eternal life through Christ's resurrection." },
    { icon: <Users size={32} />, title: "The Church", text: "In the universal Church as Christ's body on earth." },
    { icon: <Globe size={32} />, title: "Great Commission", text: "In fulfilling Christ's command to make disciples of all nations." },
    { icon: <HeartHandshake size={32} />, title: "Love in Action", text: "That faith without works is dead - we demonstrate God's love practically." },
  ];

  const ministryPillars = [
    { title: "Evangelism", description: "Reaching the lost through crusades, media, and personal witness.", icon: <Mic size={24} /> },
    { title: "Discipleship", description: "Equipping believers through Bible teaching and mentorship.", icon: <BookOpen size={24} /> },
    { title: "Compassion", description: "Serving communities through humanitarian projects.", icon: <HeartHandshake size={24} /> },
  ];

  const teamMembers = [
    { name: "Anne Musau", role: "Founder & Lead Minister", image: "/assets/images/team/anne.jpg" },
    { name: "David Mwangi", role: "Executive Pastor", image: "/assets/images/team/david.jpg" },
    { name: "Sarah Johnson", role: "Worship Director", image: "/assets/images/team/sarah.jpg" },
    { name: "Michael Otieno", role: "Missions Coordinator", image: "/assets/images/team/michael.jpg" },
  ];

  return (
    <div className="bg-white">
        <NavBar />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-red-50 to-white py-32 px-6">
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/assets/images/cross-pattern.png')] bg-repeat opacity-10" />
        </div>
        <div className="max-w-6xl mx-auto text-center relative">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
              Our Story
            </span>
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Discover the heart, history, and heavenly calling behind Anne Musau Ministries
          </motion.p>
        </div>
      </section>

      {/* Biography Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
            <motion.div
              className="relative group"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="absolute -inset-2 bg-red-500/10 rounded-3xl transform rotate-2 transition-all group-hover:rotate-0" />
              <div className="relative bg-white rounded-3xl p-8 shadow-lg">
                <h2 className="text-3xl font-bold text-red-600 mb-6">Our Foundation</h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Anne Musau Ministries was birthed in 2010 from a divine encounter that transformed 
                  Anne's life. What began as small prayer meetings in her living room has grown into 
                  a global movement impacting millions through television, digital media, humanitarian 
                  works, and spiritual empowerment initiatives.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  With a mandate to "prepare the way of the Lord," our ministry bridges the gap between 
                  traditional church settings and contemporary outreach, bringing the gospel to places 
                  it's never been before.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="relative rounded-3xl overflow-hidden bg-gray-100 min-h-[400px]"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              whileHover={{ scale: 0.98 }}
            >
              <Image
                src="/assets/images/media/musau2.JPG"
                alt="Anne Musau Ministry"
                fill
                className="object-cover"
                priority
                style={{ objectPosition: '50% 5%' }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-red-300/20 to-red-400/20" />
              <div className="absolute inset-0 mix-blend-soft-light bg-red-50/5" />
            </motion.div>
          </div>

          {/* Founder's Message */}
          <motion.div
            className="bg-red-600 text-white rounded-[4rem] p-12 mb-24 relative overflow-hidden"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
          >
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full" />
            <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-white/5 rounded-full" />
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-6">A Word From Anne</h3>
              <div className="text-xl leading-relaxed space-y-6">
                <p>
                  "When God called me to this ministry, I had nothing but a Bible and a burning heart. 
                  Today I stand amazed at what He has done through our obedience."
                </p>
                <p>
                  Our vision remains simple: to see every person encounter Jesus, be transformed by His 
                  love, and empowered to transform their world. This isn't just a ministry - it's a 
                  movement of ordinary people serving an extraordinary God.
                </p>
                <p>
                  Join us as we fulfill the Great Commission in our generation!"
                </p>
              </div>
              <div className="mt-8 flex items-center">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white mr-4">
                  <Image
                    src="/assets/images/team/anne.jpg"
                    alt="Anne Musau"
                    width={64}
                    height={64}
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-bold">Anne Musau</p>
                  <p className="text-red-200">Founder & Lead Minister</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Ministry Pillars */}
      <section className="py-20 px-6 bg-red-50">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-4xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <span className="bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
              Our Ministry Pillars
            </span>
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {ministryPillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="text-red-500 mb-4">{pillar.icon}</div>
                <h4 className="text-xl font-bold text-gray-800 mb-3">{pillar.title}</h4>
                <p className="text-gray-600">{pillar.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Beliefs */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-4xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <span className="bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
              What We Believe
            </span>
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreBeliefs.map((belief, index) => (
              <motion.div
                key={belief.title}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-red-500 mb-4">{belief.icon}</div>
                <h4 className="text-xl font-bold text-gray-800 mb-3">{belief.title}</h4>
                <p className="text-gray-600">{belief.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-4xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <span className="bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
              Our Journey
            </span>
          </motion.h2>
          
          <HistoryTimeline />
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-4xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <span className="bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
              Meet The Team
            </span>
          </motion.h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <TeamMemberCard 
                key={member.name}
                name={member.name}
                role={member.role}
                image={member.image}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Closing Verse */}
      <section className="py-20 px-6 bg-red-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-6xl mb-6">❝</div>
            <p className="text-2xl italic mb-6">
              "Being confident of this, that he who began a good work in you 
              will carry it on to completion until the day of Christ Jesus."
            </p>
            <p className="text-xl">Philippians 1:6</p>
          </motion.div>
        </div>
      </section>
       <HolyFooter />
    </div>
  );
}