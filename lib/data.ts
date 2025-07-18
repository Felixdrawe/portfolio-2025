import React from 'react';
import { CgWorkAlt } from 'react-icons/cg';
import { FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaGitAlt, FaPython } from 'react-icons/fa';
import {
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiPrisma,
  SiMongodb,
  SiRedux,
  SiGraphql,
  SiApollographql,
  SiExpress,
  SiPostgresql,
} from 'react-icons/si';
import { LuGraduationCap } from 'react-icons/lu';
import { TbBrandFramerMotion } from 'react-icons/tb';
import corpcommentImg from '@/public/corpcomment.png';
import rmtdevImg from '@/public/rmtdev.png';
import wordanalyticsImg from '@/public/wordanalytics.png';

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Skills',
    hash: '#skills',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export const experiencesData = [
  {
    title: 'Graduated bootcamp',
    location: 'Miami, FL',
    description:
      'I graduated after 6 months of studying. I immediately found a job as a front-end developer.',
    icon: React.createElement(LuGraduationCap),
    date: '2019',
  },
  {
    title: 'Front-End Developer',
    location: 'Orlando, FL',
    description:
      'I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.',
    icon: React.createElement(CgWorkAlt),
    date: '2019 - 2021',
  },
  {
    title: 'Full-Stack Developer',
    location: 'Houston, TX',
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: '2021 - present',
  },
] as const;

export const projectsData = [
  {
    title: 'CorpComment',
    description:
      'I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.',
    tags: ['React', 'Next.js', 'MongoDB', 'Tailwind', 'Prisma'],
    imageUrl: corpcommentImg,
  },
  {
    title: 'rmtDev',
    description:
      'Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.',
    tags: ['React', 'TypeScript', 'Next.js', 'Tailwind', 'Redux'],
    imageUrl: rmtdevImg,
  },
  {
    title: 'Word Analytics',
    description:
      'A public web app for quick analytics on text. It shows word count, character count and social media post limits.',
    tags: ['React', 'Next.js', 'SQL', 'Tailwind', 'Framer'],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  {
    name: 'HTML',
    icon: React.createElement(FaHtml5),
  },
  {
    name: 'CSS',
    icon: React.createElement(FaCss3Alt),
  },
  {
    name: 'JavaScript',
    icon: React.createElement(SiJavascript),
  },
  {
    name: 'TypeScript',
    icon: React.createElement(SiTypescript),
  },
  {
    name: 'React',
    icon: React.createElement(FaReact),
  },
  {
    name: 'Next.js',
    icon: React.createElement(SiNextdotjs),
  },
  {
    name: 'Node.js',
    icon: React.createElement(FaNodeJs),
  },
  {
    name: 'Git',
    icon: React.createElement(FaGitAlt),
  },
  {
    name: 'Tailwind',
    icon: React.createElement(SiTailwindcss),
  },
  {
    name: 'Prisma',
    icon: React.createElement(SiPrisma),
  },
  {
    name: 'MongoDB',
    icon: React.createElement(SiMongodb),
  },
  {
    name: 'Redux',
    icon: React.createElement(SiRedux),
  },
  {
    name: 'GraphQL',
    icon: React.createElement(SiGraphql),
  },
  {
    name: 'Apollo',
    icon: React.createElement(SiApollographql),
  },
  {
    name: 'Express',
    icon: React.createElement(SiExpress),
  },
  {
    name: 'PostgreSQL',
    icon: React.createElement(SiPostgresql),
  },
  {
    name: 'Python',
    icon: React.createElement(FaPython),
  },
  {
    name: 'Framer Motion',
    icon: React.createElement(TbBrandFramerMotion),
  },
] as const;
