'use client';

import React from 'react';
import SectionHeading from './SectionHeading';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';
// import { sendEmail } from '@/actions/sendEmail';
import SubmitBtn from './SubmitBtn';
// import toast from 'react-hot-toast';

export default function Contact() {
  const { ref } = useSectionInView('Contact');

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 w-[min(100%,38rem)] text-center sm:mb-28"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact me</SectionHeading>

      <p className="-mt-6 text-gray-700 dark:text-white/80">
        Please contact me directly at{' '}
        <a className="underline" href="mailto:example@gmail.com">
          example@gmail.com
        </a>{' '}
        or through this form.
      </p>

      <form
        className="mt-10 flex flex-col dark:text-black"
        // action={async (formData) => {
        //   const { data, error } = await sendEmail(formData);

        //   if (error) {
        //     toast.error(error);
        //     return;
        //   }

        //   toast.success('Email sent successfully!');
        // }}
      >
        <input
          className="borderBlack dark:bg-opacity-80 dark:focus:bg-opacity-100 h-14 rounded-lg px-4 transition-all focus:border-gray-400 focus:ring-2 focus:ring-gray-300 focus:outline-none dark:bg-white dark:outline-none"
          name="senderEmail"
          type="email"
          required
          maxLength={100}
          placeholder="Your email"
        />
        <textarea
          className="borderBlack dark:bg-opacity-80 dark:focus:bg-opacity-100 my-3 h-52 resize-none rounded-lg p-4 transition-all focus:border-gray-400 focus:ring-2 focus:ring-gray-300 focus:outline-none dark:bg-white dark:outline-none"
          name="message"
          placeholder="Your message"
          required
          maxLength={3000}
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}
