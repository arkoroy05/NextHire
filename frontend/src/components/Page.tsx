import React, { HTMLAttributes } from 'react';

interface PageProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const Page: React.FC<PageProps> = ({ children, className = '', ...props }) => {
  return (
    <div className="flex justify-center w-full items-center">
      <div
        {...props}
        className={`bg-white w-[210mm] h-[296.86mm] shadow-lg ${className}`}
        style={{
          // Fixed dimensions based on A4 paper size
          minHeight: '296.86mm',
          minWidth: '210mm',
          maxWidth: '210mm',
           // Standard document margins
          boxSizing: 'border-box',
          backgroundColor: 'white',
          position: 'relative',
          overflow: 'hidden' // Prevent content from bleeding outside the page
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Page;