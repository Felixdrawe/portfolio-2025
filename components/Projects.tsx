'use client';

import SectionHeading from './SectionHeading';
import { projectsData } from '@/lib/data';
import Project from './Project';
import React from 'react';
import { useSectionInView } from '@/lib/hooks';

export default function Projects() {
  // Using a balanced threshold for Projects
  const { ref } = useSectionInView('Projects', 0.4);
  return (
    <section ref={ref} id="projects" className="mb-28 scroll-mt-28">
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
