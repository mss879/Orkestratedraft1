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
    imageSrc: '/Connect%20your%20store.png',
    imageAlt: 'Connect your store and campaigns'
  },
  {
    title: "Choose your category profile",
    items: [
      "Pick the category that matches your brand, for example beauty, fashion, home or food.",
      "Category models bring instant pattern recognition for your niche so you are not waiting months for the system to learn from scratch."
    ],
    icon: Layers,
    imageSrc: '/Choose%20your%20category%20.png',
    imageAlt: 'Choose your category profile'
  },
  {
    title: "Start chatting with your Orkestrator",
    items: [
      "Describe your goals in simple language. e.g. \"Recover more lapsing VIPs\" or \"Launch a new product to high intent browsers.\"",
      "Orkestrate turns that into cohorts, journeys and experiments across your channels."
    ],
    icon: MessageSquare,
    imageSrc: '/Start%20chatting%20.png',
    imageAlt: 'Start chatting with your Orkestrator'
  },
  {
    title: "Approve plays and launch",
    items: [
      "Review the proposed plays in plain English. Tweak guardrails, budget and tone where needed.",
      "Approve and Orkestrate's agents create and schedule the actual campaigns in your connected tools."
    ],
    icon: CheckCircle2,
    imageSrc: '/Approve%20plays.png',
    imageAlt: 'Approve plays and launch'
  },
  {
    title: "Learn, optimize and scale",
    items: [
      "Every send, click and order feeds back into Orkestrate. Agents automatically promote what works.",
      "Over time you run far more campaigns and experiments with the same team while keeping performance and customer experience improving week after week."
    ],
    icon: TrendingUp,
    imageSrc: '/Learn,%20optimize%20a.png',
    imageAlt: 'Learn, optimize and scale'
  }
];

export default function HowItWorks() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-slate-50/50">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 rounded-full border border-orange-100 bg-orange-50/50 px-4 py-1.5 mb-6">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
          </span>
          <span className="text-xs font-mono font-medium text-orange-700 uppercase tracking-wider">System Workflow</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-4">How Orkestrate works</h2>
        <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
          Turn a small team into a high output marketing engine in 5 automated steps.
        </p>
      </div>

      <div className="flex flex-col gap-10">
        {steps.map((step, index) => (
          <div 
            key={index}
            className={`bg-white border border-gray-200 rounded-3xl p-6 flex flex-col gap-10 sm:p-12 sm:gap-12 md:items-center shadow-sm hover:shadow-md transition-all duration-300 ${
              index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'
            }`}
          >
            <div className="md:w-1/2 lg:w-[45%]">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{step.title}</h3>
              <ul className="grid gap-4">
                {step.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#DD3B2F] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 font-medium leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:w-1/2 lg:w-[55%] flex items-center">
              <div
                className={`w-full max-w-sm overflow-hidden rounded-xl lg:rounded-3xl border border-gray-200 bg-white ${
                  index % 2 === 1 ? 'md:mr-auto' : 'md:ml-auto'
                }`}
              >
                <Image
                  src={step.imageSrc}
                  alt={step.imageAlt}
                  width={1400}
                  height={900}
                  className="h-auto w-full object-cover"
                  sizes="(min-width: 1024px) 55vw, (min-width: 768px) 50vw, 100vw"
                  priority={index === 0}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
