import { useActiveSectionContext } from '@/context/active-section-context';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import type { SectionName } from './types';

export function useSectionInView(sectionName: SectionName, threshold = 0.5) {
  // Use different root margins based on section name
  const rootMargin =
    sectionName === 'Skills'
      ? '-10% 0px -10% 0px' // Make Skills activate earlier (less bottom margin)
      : '-10% 0px -40% 0px'; // Default for other sections

  const { ref, inView } = useInView({
    threshold,
    rootMargin,
  });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    // Only update the section if it's in view and user hasn't clicked recently
    // Use a shorter timeout for Skills to make it more responsive
    const timeoutThreshold = sectionName === 'Skills' ? 100 : 300;

    if (inView && Date.now() - timeOfLastClick > timeoutThreshold) {
      setActiveSection(sectionName);
    }
  }, [inView, setActiveSection, timeOfLastClick, sectionName]);

  return {
    ref,
  };
}
