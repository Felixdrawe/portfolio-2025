'use client';

import SectionHeading from './section-heading';
import { projectsData } from '@/lib/data';
import Project from './project';
import { motion } from 'framer-motion';
import React from 'react';

export default function Projects() {
 

  return (
    <section>
      <SectionHeading>My projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
