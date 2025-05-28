'use client'; // This directive ensures the component only runs on the client side, not during server-side rendering

import { motion } from 'framer-motion'; // Import motion component from framer-motion for animations

export function BackgroundBlur() {
  return (
    <>
      {/* First gradient blob (pink/red) - positioned in top right */}
      <motion.div
        // Base styling for the blob:
        className="absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] opacity-80"
        // Animation properties that will change over time:
        animate={{
          // Increased movement range for more visible motion
          x: [0, -40, 30, -20, 0],
          y: [0, 30, -40, 20, 0],

          // Slightly increased scale animation
          scale: [1, 1.06, 1],

          // Background gradient animation: cycles through these gradients
          // Each gradient is a radial gradient with different color stops
          // Format: rgba(red,green,blue,alpha) where rgb are 0-255, alpha is 0-1
          background: [
            'radial-gradient(circle, rgba(251,226,227,1) 0%, rgba(249,204,206,1) 100%)',
            'radial-gradient(circle, rgba(255,218,218,1) 0%, rgba(249,186,189,1) 70%)',
            'radial-gradient(circle, rgba(254,197,201,1) 0%, rgba(251,226,227,1) 100%)',
            'radial-gradient(circle, rgba(249,204,206,1) 0%, rgba(251,226,227,1) 100%)',
          ],
        }}
        // Transition controls how the animations behave:
        transition={{
          // Faster position transitions for more noticeable movement
          x: {
            duration: 20, // Reduced from 30
            repeat: Infinity,
            repeatType: 'mirror',
            ease: 'easeInOut',
          },
          y: {
            duration: 18, // Reduced from 25
            repeat: Infinity,
            repeatType: 'mirror',
            ease: 'easeInOut',
          },

          // Scale transition:
          scale: {
            duration: 6, // 6 second cycle
            ease: 'easeInOut', // smooth acceleration and deceleration
            repeat: Infinity, // repeat forever
            repeatType: 'reverse', // go back and forth between values
          },

          // Background color transition:
          background: {
            duration: 15, // 15 second cycle for color changes
            ease: 'easeInOut',
            repeat: Infinity,
            repeatType: 'reverse',
          },
        }}
      />

      {/* Second gradient blob (purple/blue) - positioned in top left */}
      <motion.div
        // Responsive positioning: starts far left (-35rem) and moves in at different breakpoints
        className="absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] opacity-80"
        animate={{
          // Increased movement range
          x: [0, 40, -30, 20, 0],
          y: [0, -30, 40, -20, 0],

          // More pronounced scale animation
          scale: [1, 1.08, 0.96, 1],

          // Purple/blue color variations
          background: [
            'radial-gradient(circle, rgba(219,215,251,1) 0%, rgba(196,190,249,1) 100%)',
            'radial-gradient(circle, rgba(207,202,255,1) 0%, rgba(219,215,251,1) 80%)',
            'radial-gradient(circle, rgba(193,188,249,1) 10%, rgba(229,226,255,1) 90%)',
            'radial-gradient(circle, rgba(196,190,249,1) 0%, rgba(219,215,251,1) 100%)',
          ],
        }}
        transition={{
          x: {
            duration: 18, // Reduced from 25
            repeat: Infinity,
            repeatType: 'mirror',
            ease: 'easeInOut',
          },
          y: {
            duration: 22, // Reduced from 30
            repeat: Infinity,
            repeatType: 'mirror',
            ease: 'easeInOut',
          },

          // Longer scale animation (8s vs 6s for the first blob)
          scale: {
            duration: 8,
            ease: 'easeInOut',
            repeat: Infinity,
            repeatType: 'reverse',
          },

          // Faster color transition than the first blob (12s vs 15s)
          background: {
            duration: 12,
            ease: 'easeInOut',
            repeat: Infinity,
            repeatType: 'reverse',
          },
        }}
      />

      {/* Third gradient blob (green) - positioned bottom right */}
      <motion.div
        // Only visible on medium screens and up (hidden md:block)
        className="absolute bottom-[-10rem] -z-10 right-[-20rem] h-[40rem] w-[40rem] rounded-full blur-[10rem] opacity-70 hidden md:block"
        animate={{
          // More pronounced circular motion
          x: [0, 30, 0, -30, 0],
          y: [0, -30, 0, 30, 0],

          // More dramatic scale changes
          scale: [0.9, 1.1, 0.92, 1.08, 0.9],

          // Green color variations
          background: [
            'radial-gradient(circle, rgba(223,246,221,1) 0%, rgba(186,237,182,1) 100%)',
            'radial-gradient(circle, rgba(200,249,195,1) 10%, rgba(223,246,221,1) 90%)',
            'radial-gradient(circle, rgba(186,237,182,1) 0%, rgba(230,250,228,1) 100%)',
            'radial-gradient(circle, rgba(210,240,208,1) 30%, rgba(186,237,182,1) 80%)',
            'radial-gradient(circle, rgba(223,246,221,1) 0%, rgba(186,237,182,1) 100%)',
          ],
        }}
        transition={{
          x: {
            duration: 25, // Reduced from 35
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'easeInOut',
          },
          y: {
            duration: 25, // Reduced from 35
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'easeInOut',
          },

          // Very long scale animation (20s)
          scale: {
            duration: 20,
            ease: 'easeInOut',
            repeat: Infinity,
          },

          // Long color transition (18s)
          background: {
            duration: 18,
            ease: 'easeInOut',
            repeat: Infinity,
            repeatType: 'reverse',
          },
        }}
      />

      {/* Fourth gradient blob (light blue) - only visible on large screens */}
      <motion.div
        className="absolute top-[20rem] -z-10 left-[30rem] h-[25rem] w-[25rem] rounded-full blur-[10rem] opacity-60 hidden lg:block"
        animate={{
          // Enhanced figure-8 like motion
          x: [0, -40, 0, 40, 0],
          y: [0, 35, 0, 35, 0],

          // More pronounced scale animation
          scale: [1, 1.15, 0.92, 1],

          // Light blue variations
          background: [
            'radial-gradient(circle, rgba(220,240,255,1) 0%, rgba(173,217,255,1) 100%)',
            'radial-gradient(circle, rgba(194,226,255,1) 20%, rgba(220,240,255,1) 80%)',
            'radial-gradient(circle, rgba(173,217,255,1) 10%, rgba(238,249,255,1) 90%)',
            'radial-gradient(circle, rgba(220,240,255,1) 0%, rgba(173,217,255,1) 100%)',
          ],
        }}
        transition={{
          x: {
            duration: 28, // Reduced from 40
            repeat: Infinity,
            repeatType: 'mirror',
            ease: 'easeInOut',
          },
          y: {
            duration: 14, // Reduced from 20
            repeat: Infinity,
            repeatType: 'mirror',
            ease: 'easeInOut',
          },
          scale: {
            duration: 10,
            ease: 'easeInOut',
            repeat: Infinity,
            repeatType: 'mirror',
          },
          background: {
            duration: 16,
            ease: 'easeInOut',
            repeat: Infinity,
            repeatType: 'reverse',
          },
        }}
      />
    </>
  );
}
