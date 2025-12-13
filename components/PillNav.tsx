'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';

export type PillNavItem = {
  label: string;
  href: string;
  ariaLabel?: string;
};

export interface PillNavProps {
  items: PillNavItem[];
  activeHref?: string;
  className?: string;
  ease?: string;
  baseColor?: string;
  pillColor?: string;
  hoveredPillTextColor?: string;
  pillTextColor?: string;
}

const isExternalLink = (href: string) =>
  href.startsWith('http://') ||
  href.startsWith('https://') ||
  href.startsWith('//') ||
  href.startsWith('mailto:') ||
  href.startsWith('tel:');

const PillNav: React.FC<PillNavProps> = ({
  items,
  activeHref,
  className = '',
  ease = 'power3.easeOut',
  baseColor = '#000000',
  pillColor = '#ffffff',
  hoveredPillTextColor = '#ffffff',
  pillTextColor,
}) => {
  const resolvedPillTextColor = pillTextColor ?? baseColor;
  const circleRefs = useRef<Array<HTMLSpanElement | null>>([]);
  const tlRefs = useRef<Array<gsap.core.Timeline | null>>([]);
  const activeTweenRefs = useRef<Array<gsap.core.Tween | null>>([]);

  useEffect(() => {
    const layout = () => {
      circleRefs.current.forEach((circle) => {
        if (!circle?.parentElement) return;

        const pill = circle.parentElement as HTMLElement;
        const rect = pill.getBoundingClientRect();
        const { width: w, height: h } = rect;
        const R = (w * w / 4 + h * h) / (2 * h);
        const D = Math.ceil(2 * R) + 2;
        const delta = Math.ceil(R - Math.sqrt(Math.max(0, R * R - w * w / 4))) + 1;
        const originY = D - delta;

        circle.style.width = `${D}px`;
        circle.style.height = `${D}px`;
        circle.style.bottom = `-${delta}px`;

        gsap.set(circle, {
          xPercent: -50,
          scale: 0,
          transformOrigin: `50% ${originY}px`,
        });

        const label = pill.querySelector<HTMLElement>('.pill-label');
        const white = pill.querySelector<HTMLElement>('.pill-label-hover');

        if (label) gsap.set(label, { y: 0 });
        if (white) gsap.set(white, { y: h + 12, opacity: 0 });

        const index = circleRefs.current.indexOf(circle);
        if (index === -1) return;

        tlRefs.current[index]?.kill();
        const tl = gsap.timeline({ paused: true });

        tl.to(
          circle,
          { scale: 1.2, xPercent: -50, duration: 2, ease, overwrite: 'auto' },
          0
        );

        if (label) {
          tl.to(label, { y: -(h + 8), duration: 2, ease, overwrite: 'auto' }, 0);
        }

        if (white) {
          gsap.set(white, { y: Math.ceil(h + 100), opacity: 0 });
          tl.to(white, { y: 0, opacity: 1, duration: 2, ease, overwrite: 'auto' }, 0);
        }

        tlRefs.current[index] = tl;
      });
    };

    layout();

    const onResize = () => layout();
    window.addEventListener('resize', onResize);

    if (document.fonts) {
      document.fonts.ready.then(layout).catch(() => {});
    }

    return () => window.removeEventListener('resize', onResize);
  }, [items, ease]);

  const handleEnter = (i: number) => {
    const tl = tlRefs.current[i];
    if (!tl) return;
    activeTweenRefs.current[i]?.kill();
    activeTweenRefs.current[i] = tl.tweenTo(tl.duration(), {
      duration: 0.3,
      ease,
      overwrite: 'auto',
    });
  };

  const handleLeave = (i: number) => {
    const tl = tlRefs.current[i];
    if (!tl) return;
    activeTweenRefs.current[i]?.kill();
    activeTweenRefs.current[i] = tl.tweenTo(0, {
      duration: 0.2,
      ease,
      overwrite: 'auto',
    });
  };

  const cssVars = {
    ['--base' as any]: baseColor,
    ['--pill-bg' as any]: pillColor,
    ['--hover-text' as any]: hoveredPillTextColor,
    ['--pill-text' as any]: resolvedPillTextColor,
    ['--nav-h' as any]: '56px',
    ['--pill-pad-x' as any]: '20px',
    ['--pill-gap' as any]: '6px',
  } as React.CSSProperties;

  return (
    <nav
      className={`w-max flex items-center ${className}`}
      aria-label="Primary"
      style={cssVars}
    >
      <div
        className="relative flex items-center rounded-full"
        style={{
          height: 'var(--nav-h)',
          background: 'var(--base, #000)',
        }}
      >
        <ul
          role="menubar"
          className="list-none flex items-stretch m-0 p-[6px] h-full"
          style={{ gap: 'var(--pill-gap)' }}
        >
          {items.map((item, i) => {
            const isActive = activeHref === item.href;

            const pillStyle: React.CSSProperties = {
              background: 'var(--pill-bg, #fff)',
              color: 'var(--pill-text, var(--base, #000))',
              paddingLeft: 'var(--pill-pad-x)',
              paddingRight: 'var(--pill-pad-x)',
            };

            const PillContent = (
              <>
                <span
                  className="hover-circle absolute left-1/2 bottom-0 rounded-full z-[1] block pointer-events-none"
                  style={{
                    background: 'var(--base, #000)',
                    willChange: 'transform',
                  }}
                  aria-hidden="true"
                  ref={(el) => {
                    circleRefs.current[i] = el;
                  }}
                />
                <span className="label-stack relative inline-block leading-[1] z-[2]">
                  <span
                    className="pill-label relative z-[2] inline-block leading-[1]"
                    style={{ willChange: 'transform' }}
                  >
                    {item.label}
                  </span>
                  <span
                    className="pill-label-hover absolute left-0 top-0 z-[3] inline-block"
                    style={{
                      color: 'var(--hover-text, #fff)',
                      willChange: 'transform, opacity',
                    }}
                    aria-hidden="true"
                  >
                    {item.label}
                  </span>
                </span>
                {isActive && (
                  <span
                    className="absolute left-1/2 -bottom-[7px] -translate-x-1/2 w-3 h-3 rounded-full z-[4]"
                    style={{ background: 'var(--base, #000)' }}
                    aria-hidden="true"
                  />
                )}
              </>
            );

            const basePillClasses =
              'relative overflow-hidden inline-flex items-center justify-center h-full no-underline rounded-full box-border font-semibold text-base md:text-lg leading-[0] whitespace-nowrap cursor-pointer px-0';

            return (
              <li key={item.href} role="none" className="flex h-full">
                {isExternalLink(item.href) ? (
                  <a
                    role="menuitem"
                    href={item.href}
                    className={basePillClasses}
                    style={pillStyle}
                    aria-label={item.ariaLabel || item.label}
                    onMouseEnter={() => handleEnter(i)}
                    onMouseLeave={() => handleLeave(i)}
                  >
                    {PillContent}
                  </a>
                ) : (
                  <Link
                    role="menuitem"
                    href={item.href}
                    className={basePillClasses}
                    style={pillStyle}
                    aria-label={item.ariaLabel || item.label}
                    onMouseEnter={() => handleEnter(i)}
                    onMouseLeave={() => handleLeave(i)}
                  >
                    {PillContent}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default PillNav;
