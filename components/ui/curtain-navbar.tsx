"use client";

import {
  ALL_NAV_ITEMS,
  NAVIGATION_CONSTANTS,
  NavItemType,
} from "@/lib/navigation";
import { cn } from "@/lib/utils";
import { gsap } from "gsap";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

export default function CurtainNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);
  const curtainLeftRef = useRef<HTMLDivElement>(null);
  const curtainRightRef = useRef<HTMLDivElement>(null);
  const menuOverlayRef = useRef<HTMLDivElement>(null);
  const menuItemsRef = useRef<(HTMLLIElement | null)[]>([]);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Initialize GSAP timeline
  useEffect(() => {
    const curtainLeft = curtainLeftRef.current;
    const curtainRight = curtainRightRef.current;
    const menuOverlay = menuOverlayRef.current;
    const menuItems = menuItemsRef.current;

    if (!curtainLeft || !curtainRight || !menuOverlay) return;

    // Set initial states - boxes start below screen, menu overlay hidden
    gsap.set(curtainLeft, {
      y: "100vh",
    });
    gsap.set(curtainRight, {
      y: "100vh",
    });
    gsap.set(menuOverlay, {
      clipPath: "inset(100% 0 0 0)", // Clipped from bottom (hidden)
    });
    gsap.set(menuItems, {
      y: 80,
      autoAlpha: 0,
    });

    // Create the timeline (paused)
    const tl = gsap.timeline({
      paused: true,
      defaults: { ease: "power4.inOut" },
    });

    // Animate menu overlay clip to reveal from bottom as boxes go up
    tl.to(menuOverlay, {
      clipPath: "inset(0% 0 0 0)", // Fully revealed
      duration: 1.3,
    }, 0);

    // Continuous motion - boxes sweep up from bottom to top without stopping
    tl.to(curtainLeft, {
      y: "-100vh",
      duration: 1.3,
    }, 0)
    .to(curtainRight, {
      y: "-100vh",
      duration: 1.3,
    }, 0.15); // Slight stagger - right box follows left

    // Menu items stagger in AFTER boxes completely go up
    tl.to(
      menuItems,
      {
        y: 0,
        autoAlpha: 1,
        duration: 0.5,
        stagger: 0.08,
        ease: "power3.out",
      },
      1.3 // Start after boxes are gone
    );

    timelineRef.current = tl;

    return () => {
      tl.kill();
    };
  }, []);

  // Handle open/close
  useEffect(() => {
    if (!timelineRef.current) return;

    if (isOpen) {
      // Disable body scroll
      document.body.style.overflow = "hidden";
      timelineRef.current.play();
    } else {
      // Enable body scroll
      document.body.style.overflow = "";
      timelineRef.current.reverse();
    }
  }, [isOpen]);

  const toggleMenu = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, item: NavItemType) => {
      // Handle anchor links with Lenis smooth scroll
      if (item.isAnchor || item.isHome) {
        e.preventDefault();

        // Close menu first
        setIsOpen(false);

        // Wait for menu close animation, then scroll
        setTimeout(() => {
          if (item.isHome) {
            if (window.lenis) {
              window.lenis.scrollTo(0, {
                offset: NAVIGATION_CONSTANTS.LENIS_SCROLL_OFFSET,
                duration: NAVIGATION_CONSTANTS.LENIS_SCROLL_DURATION,
                easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
              });
            } else {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          } else {
            const targetId = item.href.replace("#", "");
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
              if (window.lenis) {
                window.lenis.scrollTo(targetElement, {
                  offset: NAVIGATION_CONSTANTS.LENIS_SCROLL_OFFSET,
                  duration: NAVIGATION_CONSTANTS.LENIS_SCROLL_DURATION,
                  easing: (t: number) =>
                    Math.min(1, 1.001 - Math.pow(2, -10 * t)),
                });
              } else {
                targetElement.scrollIntoView({ behavior: "smooth" });
              }
            }
          }
        }, 1200); // Wait for reverse animation
      } else {
        // For regular links, just close menu
        setIsOpen(false);
      }
    },
    []
  );

  return (
    <>
      {/* Toggle Button (FAB) - Only visible on mobile/tablet */}
      <button
        ref={buttonRef}
        onClick={toggleMenu}
        className={cn(
          "lg:hidden fixed bottom-8 right-8 z-[60] h-16 w-16 rounded-full flex items-center justify-center",
          "bg-accent text-background shadow-2xl",
          "transition-transform duration-300 hover:scale-110 active:scale-95",
          "focus:outline-none focus-visible:ring-4 focus-visible:ring-accent/50"
        )}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
      >
        <div className="relative w-6 h-6">
          {/* Menu Icon */}
          <Menu
            className={cn(
              "absolute inset-0 transition-all duration-300",
              isOpen ? "opacity-0 rotate-90 scale-0" : "opacity-100 rotate-0 scale-100"
            )}
            strokeWidth={2}
          />
          {/* Close Icon */}
          <X
            className={cn(
              "absolute inset-0 transition-all duration-300",
              isOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-0"
            )}
            strokeWidth={2}
          />
        </div>
      </button>

      {/* Transition Curtains - Two staggered rectangle boxes */}
      {/* Left box - left half, 60% height */}
      <div
        ref={curtainLeftRef}
        className="lg:hidden fixed left-0 w-1/2 z-[50] pointer-events-none bg-accent rounded-t-lg"
        style={{ height: "60vh", top: 0 }}
        aria-hidden="true"
      />
      {/* Right box - right half, 60% height */}
      <div
        ref={curtainRightRef}
        className="lg:hidden fixed right-0 w-1/2 z-[50] pointer-events-none bg-accent rounded-t-lg"
        style={{ height: "60vh", top: 0 }}
        aria-hidden="true"
      />

      {/* Menu Overlay - sits behind boxes, revealed by clip-path */}
      <nav
        ref={menuOverlayRef}
        className={cn(
          "lg:hidden fixed inset-0 z-[45] bg-background",
          "flex flex-col justify-center px-8 md:px-16"
        )}
        style={{ clipPath: "inset(100% 0 0 0)" }}
        aria-label="Mobile navigation"
      >
        <ul className="flex flex-col gap-2">
          {ALL_NAV_ITEMS.map((item, index) => {
            // First 2 items (Home, Projects) are large, rest are smaller
            const isLarge = index < 2;
            
            return (
              <li
                key={item.label}
                ref={(el) => {
                  menuItemsRef.current[index] = el;
                }}
                className={cn("overflow-hidden", !isLarge && index === 2 && "mt-6")}
              >
                <Link
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item)}
                  target={item.isExternal ? "_blank" : undefined}
                  rel={item.isExternal ? "noopener noreferrer" : undefined}
                  className="group flex items-baseline gap-3"
                >
                  {/* Index number */}
                  <span className={cn(
                    "text-accent font-monorama",
                    isLarge ? "text-base" : "text-xs"
                  )}>
                    {(index + 1).toString().padStart(2, "0")}
                  </span>
                  {/* Label */}
                  <span
                    className={cn(
                      "uppercase transition-colors duration-300",
                      "group-hover:text-accent group-focus:text-accent",
                      isLarge 
                        ? "font-monument text-5xl sm:text-6xl md:text-7xl text-foreground" 
                        : "font-primary text-lg sm:text-xl md:text-2xl text-muted"
                    )}
                  >
                    {item.label}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Bottom info */}
        <div className="absolute bottom-8 left-8 md:left-16 right-8 md:right-16 flex justify-between items-end text-muted text-sm">
          <p className="font-monorama">Navigation</p>
          <p className="font-monorama">Scroll to explore</p>
        </div>
      </nav>
    </>
  );
}
