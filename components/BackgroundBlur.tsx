'use client'; // This directive ensures the component only runs on the client side, not during server-side rendering

import { motion } from 'framer-motion'; // Import motion component from framer-motion for animations

export function BackgroundBlur() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* First gradient blob (pink/red) - positioned in top right */}
      <motion.div
        // Base styling for the blob:
        className="absolute top-[-6rem] right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[8rem] sm:w-[68.75rem] opacity-80"
        // Animation properties that will change over time:
        animate={{
          // Even more enhanced movement range
          x: [0, -70, 60, -50, 0],
          y: [0, 60, -70, 50, 0],

          // More dramatic scale animation
          scale: [1, 1.15, 0.92, 1.1, 1],

          // Background gradient animation with more vibrant colors
          background: [
            'radial-gradient(circle, rgba(255,230,232,1) 0%, rgba(255,170,180,1) 100%)',
            'radial-gradient(circle, rgba(255,218,218,1) 0%, rgba(255,150,160,1) 70%)',
            'radial-gradient(circle, rgba(255,190,197,1) 0%, rgba(255,225,227,1) 100%)',
            'radial-gradient(circle, rgba(253,190,195,1) 0%, rgba(255,230,232,1) 100%)',
          ],
        }}
        // Transition controls how the animations behave:
        transition={{
          // Even faster position transitions
          x: {
            duration: 14, // Further reduced for quicker movement
            repeat: Infinity,
            repeatType: 'mirror',
            ease: 'easeInOut',
          },
          y: {
            duration: 13, // Further reduced for quicker movement
            repeat: Infinity,
            repeatType: 'mirror',
            ease: 'easeInOut',
          },

          // Faster scale transition:
          scale: {
            duration: 4, // 4 second cycle (even faster)
            ease: 'easeInOut',
            repeat: Infinity,
            repeatType: 'reverse',
          },

          // Background color transition:
          background: {
            duration: 12, // Faster color changes
            ease: 'easeInOut',
            repeat: Infinity,
            repeatType: 'reverse',
          },
        }}
      />

      {/* Second gradient blob (purple/blue) - positioned in top left */}
      <motion.div
        className="absolute top-[-1rem] left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[8rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] opacity-80"
        animate={{
          // More dramatic movement
          x: [0, 70, -60, 50, 0],
          y: [0, -60, 70, -50, 0],

          // More dramatic scale animation
          scale: [1, 1.18, 0.9, 1.12, 1],

          // Purple/blue color variations with more vibrancy
          background: [
            'radial-gradient(circle, rgba(225,220,255,1) 0%, rgba(166,155,252,1) 100%)',
            'radial-gradient(circle, rgba(215,210,255,1) 0%, rgba(180,165,255,1) 80%)',
            'radial-gradient(circle, rgba(173,165,255,1) 10%, rgba(235,232,255,1) 90%)',
            'radial-gradient(circle, rgba(166,155,252,1) 0%, rgba(225,220,255,1) 100%)',
          ],
        }}
        transition={{
          x: {
            duration: 13, // Even faster movement
            repeat: Infinity,
            repeatType: 'mirror',
            ease: 'easeInOut',
          },
          y: {
            duration: 15, // Even faster movement
            repeat: Infinity,
            repeatType: 'mirror',
            ease: 'easeInOut',
          },

          // Faster scale animation
          scale: {
            duration: 5,
            ease: 'easeInOut',
            repeat: Infinity,
            repeatType: 'reverse',
          },

          // Faster color transition
          background: {
            duration: 10,
            ease: 'easeInOut',
            repeat: Infinity,
            repeatType: 'reverse',
          },
        }}
      />

      {/* Third gradient blob (green) - positioned bottom right */}
      <motion.div
        className="absolute bottom-[-10rem] -z-10 right-[-20rem] h-[40rem] w-[40rem] rounded-full blur-[8rem] opacity-75 hidden md:block"
        animate={{
          // More pronounced circular motion
          x: [0, 60, 0, -60, 0],
          y: [0, -60, 0, 60, 0],

          // More dramatic scale changes
          scale: [0.85, 1.25, 0.82, 1.2, 0.85],

          // Green color variations with more vibrancy
          background: [
            'radial-gradient(circle, rgba(228,255,225,1) 0%, rgba(150,235,145,1) 100%)',
            'radial-gradient(circle, rgba(205,255,200,1) 10%, rgba(228,255,225,1) 90%)',
            'radial-gradient(circle, rgba(150,235,145,1) 0%, rgba(235,255,232,1) 100%)',
            'radial-gradient(circle, rgba(215,248,212,1) 30%, rgba(150,235,145,1) 80%)',
            'radial-gradient(circle, rgba(228,255,225,1) 0%, rgba(150,235,145,1) 100%)',
          ],
        }}
        transition={{
          x: {
            duration: 16, // Even faster circular motion
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'easeInOut',
          },
          y: {
            duration: 16, // Even faster circular motion
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'easeInOut',
          },

          // More responsive scale animation
          scale: {
            duration: 12,
            ease: 'easeInOut',
            repeat: Infinity,
          },

          // Faster color transition
          background: {
            duration: 14,
            ease: 'easeInOut',
            repeat: Infinity,
            repeatType: 'reverse',
          },
        }}
      />

      {/* Fourth gradient blob (light blue) - only visible on large screens */}
      <motion.div
        className="absolute top-[20rem] -z-10 left-[30rem] h-[25rem] w-[25rem] rounded-full blur-[8rem] opacity-70 hidden lg:block"
        animate={{
          // More pronounced figure-8 like motion
          x: [0, -70, 0, 70, 0],
          y: [0, 65, 0, 65, 0],

          // More dramatic scale animation
          scale: [1, 1.3, 0.85, 1.25, 1],

          // Light blue variations with more vibrancy
          background: [
            'radial-gradient(circle, rgba(225,245,255,1) 0%, rgba(120,200,255,1) 100%)',
            'radial-gradient(circle, rgba(200,235,255,1) 20%, rgba(225,245,255,1) 80%)',
            'radial-gradient(circle, rgba(120,200,255,1) 10%, rgba(240,250,255,1) 90%)',
            'radial-gradient(circle, rgba(225,245,255,1) 0%, rgba(120,200,255,1) 100%)',
          ],
        }}
        transition={{
          x: {
            duration: 18, // Even faster movement
            repeat: Infinity,
            repeatType: 'mirror',
            ease: 'easeInOut',
          },
          y: {
            duration: 10, // Even faster movement
            repeat: Infinity,
            repeatType: 'mirror',
            ease: 'easeInOut',
          },
          scale: {
            duration: 6, // Faster scale changes
            ease: 'easeInOut',
            repeat: Infinity,
            repeatType: 'mirror',
          },
          background: {
            duration: 12,
            ease: 'easeInOut',
            repeat: Infinity,
            repeatType: 'reverse',
          },
        }}
      />
    </div>
  );
}
