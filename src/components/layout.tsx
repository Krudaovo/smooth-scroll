import React, { useEffect } from 'react';
import { smoothScroll } from '../gsap/animation';
import HireMe from './hire-me';

type LayoutChildrenType = {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutChildrenType) {

  useEffect(() => {
    smoothScroll();
  }, []);

  return (
    <>
      <div id='smooth-wrapper' className='smooth-wrapper bg-slate-900 text-slate-200'>
        <div id='smooth-content' className='smooth-content'>
          {children}
        </div>
      </div>
      <HireMe />
    </>
  );
};