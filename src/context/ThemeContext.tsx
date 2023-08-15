'use client';
import React, { PropsWithChildren, createContext, useState } from 'react';

export type Theme = 'dark' | 'light';

export const ThemeContext = createContext<{ mode: Theme; toggle: () => void }>({ mode: 'dark', toggle: () => {} });

export default function ThemeProvide({ children }: PropsWithChildren<{}>) {
  const [mode, setMode] = useState<'dark' | 'light'>('dark');
  const toggle = () => {
    setMode(mode === 'light' ? 'dark' : 'light');
  };
  return (
    <ThemeContext.Provider value={{ mode, toggle }}>
      <div className={`${mode}`}>
        <div className=' text-[#111] bg-white dark:text-[#bbb] dark:bg-[#111]'>{children}</div>
      </div>
    </ThemeContext.Provider>
  );
}
