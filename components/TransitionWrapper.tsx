'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TransitionWrapperProps {
  children: React.ReactNode;
}

export default function TransitionWrapper({ children }: TransitionWrapperProps) {
  const pathname = usePathname();
  const [isFirstLoad, setIsFirstLoad] = useState(true);

  useEffect(() => {
    // Skip the transition on the very first load
    if (isFirstLoad) {
      setIsFirstLoad(false);
      return;
    }

    // Check if the browser supports View Transitions (type guard for newer browsers)
    if ((document as any).startViewTransition) {
      (document as any).startViewTransition(() => {
        // This is a placeholder for Next.js route change
      });
    }
  }, [pathname]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname} // Make sure each page change triggers the animation
        initial={{ x: 300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: 300, opacity: 0 }}
        transition={{
          type: 'spring',
          stiffness: 260,
          damping: 20,
        }}
        className="transition-wrapper"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}