'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { BsArrowRight, BsLinkedin } from 'react-icons/bs';
import { HiDownload } from 'react-icons/hi';
import { FaGithubSquare } from 'react-icons/fa';
import { useActiveSectionContext } from '@/context/active-section-context';
import { useSectionInView } from '@/lib/hooks';

export default function Intro() {
  const { ref } = useSectionInView('Home', 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  return (
    <section ref={ref} className="mb-28 max-w-[50rem] scroll-mt-50 text-center sm:mb-0" id="home">
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              type: 'tween',
              duration: 0.3,
            }}
          >
            <Image
              src="/felix.png"
              alt="Felix Drawe Web Developer portrait"
              width={192}
              height={192}
              quality={95}
              priority={true}
              className="size-[7rem] rounded-full border-[0.3rem] border-gray-200 object-cover shadow-xl"
            />
          </motion.div>
          <motion.span
            className="absolute right-0 bottom-0 text-4xl"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              type: 'spring',
              stiffness: 130,
              delay: 0.3,
            }}
            aria-hidden="true"
          >
            👋
          </motion.span>
        </div>
      </div>
      <motion.h1
        className="mt-4 mb-10 px-4 text-2xl !leading-[1.5] font-medium sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className="font-bold">Hello, I&apos;m Felix.</span> I&apos;m a{' '}
        <span className="font-bold">Web Developer</span> with{' '}
        <span className="font-bold">1 year</span> of experience. I enjoy building{' '}
        <span className="italic">sites & apps</span>. My focus is{' '}
        <span className="underline">React (Next.js)</span>.
      </motion.h1>

      <motion.div
        className="flex flex-col items-center justify-center gap-2 px-4 text-lg font-medium sm:flex-row sm:px-10"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.15,
        }}
      >
        <Link
          href="#contact"
          className="group flex cursor-pointer items-center justify-center gap-2 rounded-full bg-gray-900 px-7 py-3 text-white transition duration-300 ease-in-out outline-none hover:scale-110 hover:bg-gray-950 focus:scale-110 focus:ring-2 focus:ring-offset-2 active:scale-105"
          onClick={() => {
            setActiveSection('Contact');
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here{' '}
          <BsArrowRight className="opacity-70 transition duration-300 ease-in-out group-hover:translate-x-1" />
        </Link>

        <a
          className="group flex cursor-pointer items-center justify-center gap-2 rounded-full border border-black/10 bg-white px-7 py-3 transition duration-300 ease-in-out outline-none hover:scale-110 focus:scale-110 focus:ring-2 focus:ring-offset-2 active:scale-105"
          href="/CV.pdf"
          download
        >
          Download CV{' '}
          <HiDownload className="opacity-70 transition duration-300 ease-in-out group-hover:translate-y-1" />
        </a>

        <div className="flex justify-center gap-2">
          <a
            className="flex cursor-pointer items-center justify-center gap-2 rounded-full border border-black/10 bg-white p-4 text-gray-700 transition duration-300 ease-in-out outline-none hover:scale-[1.15] hover:text-gray-950 focus:scale-[1.15] focus:ring-2 focus:ring-offset-2 active:scale-105"
            href="https://www.linkedin.com/in/felix-drawe-b3b1b31a/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
          >
            <BsLinkedin />
          </a>
          <a
            className="flex cursor-pointer items-center justify-center gap-2 rounded-full border border-black/10 bg-white p-4 text-gray-700 transition duration-300 ease-in-out outline-none hover:scale-[1.15] hover:text-gray-950 focus:scale-[1.15] focus:ring-2 focus:ring-offset-2 active:scale-105"
            href="https://github.com/felixdrawe"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
          >
            <FaGithubSquare />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
