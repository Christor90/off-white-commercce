'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image, { StaticImageData } from 'next/image';

import Image1 from '../../public/images/img1.jpg';
import Image2 from '../../public/images/img2.jpg';
import Image3 from '../../public/images/img3.jpg';
import Image4 from '../../public/images/img4.jpg';

gsap.registerPlugin(ScrollTrigger);

interface CardData {
  index: string;
  total: string;
  eyebrow: string;
  heading: string;
  body: string;
  image: string | StaticImageData;
  alt: string;
}

const cards: CardData[] = [
  {
    index: '01',
    total: '04',
    eyebrow: 'Create at the speed of thought',
    heading: 'Tell us your idea, watch it come alive.',
    body: 'Tell Base44 your idea, and watch it transform into a working app with all the building blocks already in place, from beautifully designed pages to user flows and one-click integrations.',
    image: Image1,
    alt: 'Task management app preview',
  },
  {
    index: '02',
    total: '04',
    eyebrow: 'A backend that builds with you',
    heading: 'Logic and infrastructure, on autopilot.',
    body: 'While you shape the idea, Base44 automatically sets up the logic and infrastructure so your app works out of the box. User logins, authentication, data storage, and role-based permissions are generated behind the scenes.',
    image: Image2,
    alt: 'Backend infrastructure preview',
  },
  {
    index: '03',
    total: '04',
    eyebrow: 'Ready to use, instantly',
    heading: 'Built-in hosting. One click to publish.',
    body: 'Our platform comes with built-in hosting, analytics, and custom domains so when your app is ready to go live, all you have to do is press publish.',
    image: Image3,
    alt: 'Live app deployment preview',
  },
  {
    index: '04',
    total: '04',
    eyebrow: 'One platform. Any agent.',
    heading: 'The latest AI models, always.',
    body: 'Get access to the latest AI models as they launch. Base44 automatically selects the best model for your project, or you can choose the one that fits your build, your style, and your workflow.',
    image: Image4,
    alt: 'AI model selection preview',
  },
];

export default function StackedScrollCards() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const container = containerRef.current;
    if (!section || !container) return;

    const cardEls = gsap.utils.toArray<HTMLElement>(
      container.querySelectorAll<HTMLElement>('.stack-card'),
    );
    const totalCards = cardEls.length;
    const transitions = totalCards - 1;
    const scrollDistance = window.innerHeight * transitions;

    cardEls.forEach((card, i) => {
      if (i === 0) return;
      gsap.set(card, { scale: 1 - i * 0.03, y: i * 10 });
    });

    const tl = gsap.timeline({ paused: true });

    cardEls.forEach((card, i) => {
      if (i === transitions) return;

      tl.to(
        card,
        {
          yPercent: -115,
          opacity: 0,
          scale: 0.88,
          ease: 'power2.inOut',
          duration: 1,
        },
        i,
      );

      if (i + 1 <= transitions) {
        tl.to(
          cardEls[i + 1],
          { scale: 1, y: 0, ease: 'power2.out', duration: 1 },
          i,
        );
      }
    });

    ScrollTrigger.create({
      trigger: section,
      start: 'top 80px',
      end: `+=${scrollDistance}`,
      pin: true,
      pinSpacing: true,
      anticipatePin: 1,
      scrub: 1,
      animation: tl,
    });

    ScrollTrigger.refresh();

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#f0eeea] px-6 pb-16 pt-20 "
    >
      <div
        ref={containerRef}
        className="relative mx-auto h-[520px] w-full max-w-[920px]"
      >
        {cards.map((card, i) => (
          <article
            key={card.index}
            className="stack-card absolute inset-0 overflow-hidden bg-white will-change-transform [transform-origin:center_bottom]"
            style={{ zIndex: cards.length - i }}
          >
            {/* Inner layout — text left, image right (bleeding off edge) */}
            <div className="flex h-full">
              {/* ── Left: text content ── */}
              <div className="flex flex-1 flex-col justify-between px-10 pb-10 pt-8 md:px-14 md:pb-12 md:pt-10">
                {/* Top meta */}
                <p className="flex flex-col gap-1 text-[13px] tracking-[0.01em] text-[#888]">
                  <span className="text-xs tabular-nums text-[#aaa]">
                    {card.index} / {card.total}
                  </span>
                  {card.eyebrow}
                </p>

                {/* Body copy */}
                <div className="flex flex-col gap-4">
                  <h2 className="text-[clamp(1.3rem,2.2vw,1.75rem)] font-semibold leading-tight tracking-[-0.02em] text-[#111]">
                    {card.heading}
                  </h2>
                  <p className="max-w-sm text-[15px] leading-[1.75] text-[#555]">
                    {card.body}
                  </p>
                </div>

                {/* CTA — pinned to bottom-left */}
                <button className="inline-flex cursor-pointer items-center self-start rounded-full bg-[#111] px-6 py-3 text-sm font-medium text-white transition-colors duration-150 hover:bg-[#333] active:scale-[0.97]">
                  Start building
                </button>
              </div>

              {/* ── Right: image bleeding off the right edge ── */}
              <div className="relative hidden w-[45%] shrink-0 md:block">
                {/*
                  No right padding / border-radius on the right side.
                  The section has overflow-hidden so the image clips naturally
                  at the card boundary. We add rounded corners only on the
                  top-left to blend with the card's inner corner.
                */}
                <Image
                  src={card.image}
                  alt={card.alt}
                  fill
                  className="object-cover object-left"
                  loading={i === 0 ? 'eager' : 'lazy'}
                />
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
