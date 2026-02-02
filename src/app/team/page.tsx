"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Container from "@/components/Container";
import Section from "@/components/Section";

const teamMembers = [
  { name: "Gaurav", role: "Founder & CEO", image: "/images/team1.jpg" },
  { name: "Team Member 2", role: "Financial Advisor", image: "/images/team2.jpg" },
  { name: "Team Member 3", role: "Creative Lead", image: "/images/team3.jpg" },
];

export default function TeamPage() {
  return (
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-white py-20"
    >
      <Container>
        <Section 
          id="our-team" 
          title="Meet the Visionaries" 
          description="The experts behind Finwise."
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-12">
            {teamMembers.map((member, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="group text-center"
              >
                <div className="relative overflow-hidden rounded-[2.5rem] aspect-square mb-6 border border-gray-100 shadow-sm transition-all group-hover:shadow-xl group-hover:border-primary/20">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-105 group-hover:scale-100"
                  />
                </div>
                <h3 className="text-2xl font-bold text-foreground manrope">{member.name}</h3>
                <p className="text-secondary font-medium tracking-wide uppercase text-sm mt-1">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </Section>
      </Container>
    </motion.main>
  );
}