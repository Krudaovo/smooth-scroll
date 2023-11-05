import React from 'react';

type BlankSectionType = {
  children: React.ReactNode
}

export default function BlankSection({ children }: BlankSectionType) {
  return (
    <>
      <div className='h-screen w-full flex'>
        <p className='m-auto text-7xl font-bold italic'>
          {children}
        </p>
      </div>
    </>
  );
};