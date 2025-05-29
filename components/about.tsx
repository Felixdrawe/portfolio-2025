'use client';

import SectionHeading from './Section-heading';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <motion.section
      className="mb-28 max-w-[45rem] scroll-mt-28 text-center leading-8 sm:mb-0"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After 25 years of freelancing as a film editor—primarily on commercials—I found myself
        increasingly drawn to the evolving landscape of technology, particularly the rapid
        advancements in AI and web development. This curiosity led me to explore programming as a
        new creative outlet. To build a solid foundation, I completed Harvard&apos;s CS50&apos;s
        Introduction to Programming with Python and CS50&apos;s Web Programming with Python and
        JavaScript. These courses provided me with a comprehensive understanding of programming
        concepts and web development practices. Since then, I&apos;ve been focusing on full-stack
        web development, working with technologies like{' '}
        <span className="font-medium">React, Next.js, and Supabase</span>. I&apos;m also proficient
        in <span className="font-medium">TypeScript and Prisma</span>, and I continually explore new
        tools and frameworks to enhance my skill set. I&apos;m passionate about creating
        applications that are both functional and enjoyable to use. I&apos;m open to collaborations,
        new ideas, and opportunities to bring innovative projects to life.
      </p>
    </motion.section>
  );
}
