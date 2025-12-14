import React from 'react';
import Image from 'next/image';
import { CheckCircle2, Plug, Layers, MessageSquare, TrendingUp } from 'lucide-react';

const steps = [
  {
    title: "Connect your store and campaigns",
    items: [
      "Plug in Shopify plus your existing tools like Klaviyo, Attentive or Braze.",
      "Orkestrate ingests orders, browsing, campaigns and basic catalog data so it can see what you are already doing and where revenue is leaking."
    ],
    icon: Plug,
    imageSrc: '/work%20iamge%201.png',
    imageAlt: 'Connect your store and campaigns'
  },
  {
    title: "Choose your category profile",
    items: [
      "Pick the category that matches your brand, for example beauty, fashion, home or food.",
      "Category models bring instant pattern recognition for your niche so you are not waiting months for the system to learn from scratch."
    ],
    icon: Layers,
    imageSrc: '/work%20iamge%202.png',
    imageAlt: 'Choose your category profile'
  },
  {
    title: "Start chatting with your Orkestrator",
    items: [
      "Describe your goals in simple language. e.g. \"Recover more lapsing VIPs\" or \"Launch a new product to high intent browsers.\"",
      "Orkestrate turns that into cohorts, journeys and experiments across your channels."
    ],
    icon: MessageSquare,
    imageSrc: '/work%20iamge%203.png',
    imageAlt: 'Start chatting with your Orkestrator'
  },
  {
    title: "Approve plays and launch",
    items: [
      "Review the proposed plays in plain English. Tweak guardrails, budget and tone where needed.",
      "Approve and Orkestrate's agents create and schedule the actual campaigns in your connected tools."
    ],
    icon: CheckCircle2,
    imageSrc: '/work%20iamge%204.png',
    imageAlt: 'Approve plays and launch'
  },
  {
    title: "Learn, optimize and scale",
    items: [
      "Review the proposed plays in plain English. Tweak guardrails, budget and tone where needed.",
      "Over time you run far more campaigns and experiments with the same team while keeping performance and customer experience improving week after week."
    ],
    icon: TrendingUp,
    imageSrc: '/work%20iamge%205.png',
    imageAlt: 'Learn, optimize and scale'
  }
];

export default function HowItWorks() {
  return (
    <section className="bg-[#131313] py-20">
      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 mb-6 backdrop-blur-md">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
          </span>
          <span className="text-xs font-mono font-medium text-orange-200 uppercase tracking-wider">System Workflow</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">How Orkestrate works</h2>
        <p className="text-base sm:text-lg text-white/70 max-w-2xl mx-auto">
          Turn a small team into a high output marketing engine in 5 automated steps.
        </p>
      </div>

      <div className="flex flex-col gap-10">
        {steps.map((step, index) => (
          <div 
            key={index}
            className={`relative bg-white/[0.06] backdrop-blur-md border border-white/15 rounded-3xl p-6 flex flex-col gap-10 sm:p-12 sm:gap-12 md:items-center shadow-[0_8px_32px_rgba(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.12)] hover:bg-white/[0.10] hover:backdrop-blur-2xl hover:border-orange-500/50 hover:shadow-[0_18px_60px_rgba(232,98,51,0.18),inset_0_1px_0_rgba(255,255,255,0.18)] transition-all duration-500 overflow-hidden ${
              index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'
            }`}
          >
            {/* Glass texture overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-white/5 to-transparent opacity-60 pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(1200px_circle_at_15%_15%,rgba(255,255,255,0.18),transparent_55%)] opacity-70 pointer-events-none" />
            
            <div className="relative z-10 md:w-1/2 lg:w-[45%]">
              <h3 className="text-2xl font-bold text-white mb-6">{step.title}</h3>
              <ul className="grid gap-4">
                {step.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-orange-400 flex-shrink-0 mt-0.5" />
                    <span className="text-white/75 font-medium leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative z-10 md:w-1/2 lg:w-[55%] flex items-center">
              <div
                className={`relative w-full max-w-lg overflow-hidden rounded-xl lg:rounded-3xl border border-white/15 bg-white/[0.04] backdrop-blur-md shadow-[0_10px_40px_rgba(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.10)] ${
                  index % 2 === 1 ? 'md:mr-auto' : 'md:ml-auto'
                }`}
              >
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/12 via-transparent to-transparent" />
                <Image
                  src={step.imageSrc}
                  alt={step.imageAlt}
                  width={1400}
                  height={1100}
                  className="h-auto w-full object-cover"
                  sizes="(min-width: 1024px) 55vw, (min-width: 768px) 50vw, 100vw"
                  priority={index === 0}
                />
                <span className="absolute bottom-3 right-3 rounded-full bg-orange-500/90 px-3 py-1 text-xs font-bold text-white shadow-[0_10px_25px_rgba(0,0,0,0.35)] border border-white/15 backdrop-blur-md">
                  Step {index + 1}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}
