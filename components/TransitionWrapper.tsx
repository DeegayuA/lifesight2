'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TransitionWrapperProps {
  children: React.ReactNode;
  setLoading: (loading: boolean) => void;
}

export default function TransitionWrapper({ children, setLoading }: TransitionWrapperProps) {
  const pathname = usePathname();
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const [isExternalNavigation, setIsExternalNavigation] = useState(false);
  const [loadingIndex, setLoadingIndex] = useState(0); // Add loadingIndex state

  const loadingStates = [
    {
      text: "Enhancing accessibility features...",
    },
    {
      text: "Researching visual impairments...",
    },
    {
      text: "Configuring AI assistance...",
    },
    {
      text: "Setting up OCR for text extraction...",
    },
    {
      text: "Activating voice recognition & TTS...",
    },
    {
      text: "Customizing UI with light/dark modes...",
    },
    {
      text: "Optimizing for gamification & tools...",
    },
    {
      text: "Finalizing social inclusion features...",
    },
  ];

  useEffect(() => {
    // Determine if the navigation is external
    setIsExternalNavigation(!document.referrer.startsWith(window.location.origin));

    if (isFirstLoad) {
      setIsFirstLoad(false); // Prevent this effect from running again on subsequent navigations

      // If it's an external navigation, show the loading animation
      if (!document.referrer.startsWith(window.location.origin)) {
        setLoading(true); // Show loading screen

        // Cycle through loading messages
        const intervalId = setInterval(() => {
          setLoadingIndex((prevIndex) => (prevIndex + 1) % loadingStates.length);
        }, 4000 / loadingStates.length); // Divide 4 seconds by the number of messages

        // Hide loading screen after 4 seconds
        const loadingTimeout = setTimeout(() => {
          setLoading(false);
          clearInterval(intervalId); // Clear the interval when loading is done
        }, 4000);

        // Cleanup function to clear timeout and interval if the component unmounts before loading is done
        return () => {
          clearTimeout(loadingTimeout);
          clearInterval(intervalId);
        };
      }
      return; // Exit the effect after the first load
    }

<<<<<<< Updated upstream
    // Check if the browser supports View Transitions (type guard for newer browsers)
    if ((document as any).startViewTransition) {
      (document as any).startViewTransition(() => {
        // This is a placeholder for Next.js route change
      });
    }
  }, [pathname]);
=======
    // For internal navigations, use view transitions if available
    if (!document.startViewTransition) {
      return;
    }

    document.startViewTransition(() => {
      // The actual content update is handled by Next.js;
      // we just wrap it in startViewTransition to trigger the animation.
    });
  }, [pathname, isFirstLoad, setLoading, router]); // Include router in the dependency array

  // Render the children directly, with the loading animation handled by the useEffect
  // based on isExternalNavigation and isFirstLoad.
  if (isExternalNavigation && isFirstLoad) {
    return <div className="transition-wrapper">{children}</div>;
  }
>>>>>>> Stashed changes

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