import React, { HTMLAttributes } from 'react';
interface PageProps extends HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
  }

const Page: React.FC<PageProps> = ({ children, ...props }) => {
  return (
    <div
      {...props}
      className="bg-white"
      style={{
        aspectRatio: '210 / 296.8',  // A4 aspect ratio (width / height)
        width: '100%',             // Allows width to scale responsively
        height: 'auto',            // Height auto adjusts to maintain the aspect 
        overflow: 'auto',          // Allow scrolling if content overflows
        margin: '0 auto',          // Center the page horizontally
      }}
    >
      {children} {/* Render children here */}
    </div>
  );
};

export default Page;
