"use client";

import dynamic from 'next/dynamic';
import { type ThemeProviderProps } from "next-themes/dist/types";
import { useState, useEffect } from 'react';

const ThemeProvider = dynamic(
  () => import('next-themes').then((mod) => mod.ThemeProvider),
  {
    ssr: false,
    loading: () => <div style={{ visibility: 'hidden' }}></div>,
  }
);

export { ThemeProvider };
