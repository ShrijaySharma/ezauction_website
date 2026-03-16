import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import './BounceCards.css';

export default function BounceCards({
  className = '',
  items = [],
  containerWidth = '100%',
  containerHeight = 580,
  animationDelay = 0.5,
  animationStagger = 0.06,
  easeType = 'elastic.out(1, 0.8)',
  transformStyles = [
    'rotate(10deg) translate(-170px)',
    'rotate(5deg) translate(-85px)',
    'rotate(-3deg)',
    'rotate(-10deg) translate(85px)',
    'rotate(2deg) translate(170px)'
  ],
  enableHover = true
}) {
  const containerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile width to switch to simpler vertical stacking
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return; // Disable GSAP intro on mobile for performance
    
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.desktop-card',
        { scale: 0 },
        {
          scale: 1,
          stagger: animationStagger,
          ease: easeType,
          delay: animationDelay
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, [animationStagger, easeType, animationDelay, items.length, isMobile]);

  const getNoRotationTransform = transformStr => {
    const hasRotate = /rotate\([\s\S]*?\)/.test(transformStr);
    if (hasRotate) {
      return transformStr.replace(/rotate\([\s\S]*?\)/, 'rotate(0deg)');
    } else if (transformStr === 'none') {
      return 'rotate(0deg)';
    } else {
      return `${transformStr} rotate(0deg)`;
    }
  };

  const getPushedTransform = (baseTransform, offsetX) => {
    const translateRegex = /translate\(([-0-9.]+)px\)/;
    const match = baseTransform.match(translateRegex);
    if (match) {
      const currentX = parseFloat(match[1]);
      const newX = currentX + offsetX;
      return baseTransform.replace(translateRegex, `translate(${newX}px)`);
    } else {
      return baseTransform === 'none' ? `translate(${offsetX}px)` : `${baseTransform} translate(${offsetX}px)`;
    }
  };

  const pushSiblings = hoveredIdx => {
    if (!enableHover || !containerRef.current || isMobile) return;

    const q = gsap.utils.selector(containerRef);

    items.forEach((_, i) => {
      const target = q(`.card-${i}`);
      gsap.killTweensOf(target);

      const baseTransform = transformStyles[i] || 'none';

      if (i === hoveredIdx) {
        const noRotationTransform = getNoRotationTransform(baseTransform);
        gsap.to(target, {
          transform: noRotationTransform,
          duration: 0.4,
          ease: 'back.out(1.4)',
          overwrite: 'auto',
          zIndex: 50,
          scale: 1.05
        });
      } else {
        const offsetX = i < hoveredIdx ? -150 : 150;
        const pushedTransform = getPushedTransform(baseTransform, offsetX);

        const distance = Math.abs(hoveredIdx - i);
        const delay = distance * 0.05;

        gsap.to(target, {
          transform: pushedTransform,
          duration: 0.4,
          ease: 'back.out(1.4)',
          delay,
          overwrite: 'auto',
          zIndex: items.length - i,
          scale: 1
        });
      }
    });
  };

  const resetSiblings = () => {
    if (!enableHover || !containerRef.current || isMobile) return;

    const q = gsap.utils.selector(containerRef);

    items.forEach((_, i) => {
      const target = q(`.card-${i}`);
      gsap.killTweensOf(target);
      const baseTransform = transformStyles[i] || 'none';
      gsap.to(target, {
        transform: baseTransform,
        duration: 0.4,
        ease: 'back.out(1.4)',
        overwrite: 'auto',
        zIndex: items.length - i,
        scale: 1
      });
    });
  };

  // Mobile Render
  if (isMobile) {
    return (
      <div className={`w-full flex flex-col gap-6 px-4 ${className}`}>
        {items.map((item, idx) => (
          <div
            key={idx}
            className="w-full relative rounded-[30px] overflow-hidden flex flex-col bg-slate-900 border border-white/10 shadow-xl"
            style={{ 
              minHeight: '380px' 
            }}
          >
             {item}
          </div>
        ))}
      </div>
    );
  }

  // Desktop Render
  return (
    <div
      className={`bounceCardsContainer ${className}`}
      ref={containerRef}
      style={{
        width: containerWidth,
        height: containerHeight,
        perspective: '1000px'
      }}
    >
      {items.map((item, idx) => (
        <div
          key={idx}
          className={`card desktop-card card-${idx}`}
          style={{
            transform: transformStyles[idx] ?? 'none',
            zIndex: items.length - idx
          }}
          onMouseEnter={() => pushSiblings(idx)}
          onMouseLeave={resetSiblings}
        >
          {typeof item === 'string' ? (
            <img className="image" src={item} alt={`card-${idx}`} />
          ) : (
            item
          )}
        </div>
      ))}
    </div>
  );
}
