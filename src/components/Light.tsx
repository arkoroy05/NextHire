
const LightOverlay = ({ 
  color = 'white',
  opacity = 0.15,
  size = 300,
  position = { top: '0px', left: '0px' }  // Default position at top-left
}) => {
  return (
    <div 
      className="fixed pointer-events-none mix-blend-add"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        background: `radial-gradient(circle at center, 
          ${color} 0%, 
          rgba(255,255,255,0) 50%
        )`,
        opacity: opacity,
        top: position.top,
        left: position.left,
        zIndex: 50
      }}
    />
  );
};

// Example usage component
export default LightOverlay;