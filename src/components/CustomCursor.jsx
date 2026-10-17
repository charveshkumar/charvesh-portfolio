import React, { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [followerPos, setFollowerPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice] = useState(() => {
    if (typeof window === 'undefined') return false;
    return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  });

  useEffect(() => {
    if (isTouchDevice) return;

    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const onMouseLeave = () => {
      setIsVisible(false);
    };

    const handleHoverCheck = (e) => {
      const target = e.target;
      const isInteractive = target.closest('a, button, input, textarea, select, .interactive-hover, .project-card');
      setIsHovered(!!isInteractive);
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousemove', handleHoverCheck);
    document.addEventListener('mouseleave', onMouseLeave);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousemove', handleHoverCheck);
      document.removeEventListener('mouseleave', onMouseLeave);
    };
  }, [isTouchDevice]);

  // Smooth lerp for follower circle
  useEffect(() => {
    if (isTouchDevice) return;
    let animationFrameId;

    const follow = () => {
      setFollowerPos((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.15,
        y: prev.y + (position.y - prev.y) * 0.15,
      }));
      animationFrameId = requestAnimationFrame(follow);
    };

    animationFrameId = requestAnimationFrame(follow);
    return () => cancelAnimationFrame(animationFrameId);
  }, [position, isTouchDevice]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <>
      {/* Inner Dot */}
      <div
        className="fixed top-0 left-0 w-2 h-2 bg-[#E50920] rounded-full pointer-events-none z-[9999] transition-transform duration-100 ease-out"
        style={{
          transform: `translate3d(${position.x - 4}px, ${position.y - 4}px, 0) scale(${isHovered ? 1.8 : 1})`,
        }}
      />

      {/* Outer Follower Ring */}
      <div
        className={`fixed top-0 left-0 rounded-full pointer-events-none z-[9998] transition-all duration-200 ease-out border ${
          isHovered
            ? 'w-12 h-12 border-[#E50920] bg-[#E50920]/10 border-2'
            : 'w-8 h-8 border-white/20'
        }`}
        style={{
          transform: `translate3d(${followerPos.x - (isHovered ? 24 : 16)}px, ${followerPos.y - (isHovered ? 24 : 16)}px, 0)`,
        }}
      />
    </>
  );
}
