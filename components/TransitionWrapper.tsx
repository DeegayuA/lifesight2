'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

interface TransitionWrapperProps {
  children: React.ReactNode;
}

export default function TransitionWrapper({ children }: TransitionWrapperProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [isFirstLoad, setIsFirstLoad] = useState(true);

  useEffect(() => {
    // Skip the transition on the very first load
    if (isFirstLoad) {
      setIsFirstLoad(false);
      return;
    }

    // Check if the browser supports View Transitions
    if (!document.startViewTransition) {
      return;
    }

    // Start the view transition
    document.startViewTransition(() => {
      // The actual route change is handled by Next.js,
      // we just wrap it in a view transition.
    });
  }, [pathname]);

  return <div className="transition-wrapper">{children}</div>;
}
