'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Search, ArrowRight, Users, Zap, Eye, BellOff, ShoppingBag, Database, Server, Layout, MessageSquare, Mail, BarChart3, Smartphone, Workflow, Layers, Box, Globe, Cpu, Radio, Plug, Play, TrendingUp, CheckCircle2, Sparkles } from 'lucide-react';
import LightRays from '@/components/LightRays';
import FloatingNavbar from '@/components/FloatingNavbar';

const QUERIES = [
  'where am I are loosing revenue',
  'how can I optimise my campaigns for more revenue',
  'Where is my stack the weakest today',
  'What campaigns performed the best in the last year',
];

export default function Home() {
  const [currentQueryIndex, setCurrentQueryIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const currentQuery = QUERIES[currentQueryIndex];

    const handleTyping = () => {
      if (!isDeleting) {
        if (displayedText.length < currentQuery.length) {
          setDisplayedText(currentQuery.slice(0, displayedText.length + 1));
          setTypingSpeed(100);
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayedText.length > 0) {
          setDisplayedText(currentQuery.slice(0, displayedText.length - 1));
          setTypingSpeed(50);
        } else {
          setIsDeleting(false);
          setCurrentQueryIndex((prev) => (prev + 1) % QUERIES.length);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentQueryIndex, typingSpeed]);

  return (
    <div className="bg-[#fbf7ef]">
      <FloatingNavbar />

      <section className="min-h-screen relative overflow-hidden flex items-center justify-center px-4 pt-44 pb-32">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#fbf7ef]" />
          <LightRays
            raysOrigin="top-center"
            raysColor="#EE5D25"
            raysSpeed={1.5}
            lightSpread={0.8}
            rayLength={1.2}
            followMouse={true}
            mouseInfluence={0.1}
            noiseAmount={0.1}
            distortion={0.05}
            saturation={1}
            className="opacity-30"
          />
        </div>

        <div className="max-w-5xl w-full text-center space-y-8 relative z-10">
          <div className="space-y-4 motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-6 motion-safe:duration-700">
            <h2 className="text-gray-600 text-lg md:text-xl font-medium tracking-wide">
              The #1 Marketing Platform for Shopify
            </h2>

            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-red-500 to-orange-600 leading-tight whitespace-nowrap pb-2 md:pb-3">
              Marketing by chatting with AI
            </h1>

            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 font-medium mt-2 md:mt-4">
              Orkestrate is a chat-first marketing orchestration platform that sits on top of your stack, finds revenue you’re leaking, and launches personalized journeys fast.
            </p>
          </div>

          <div className="mt-12 motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-6 motion-safe:duration-700 motion-safe:delay-200">
            <div className="relative max-w-4xl mx-auto">
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-400 via-amber-400 to-orange-500 rounded-full blur-sm opacity-75"></div>
              <div className="relative bg-white rounded-full shadow-2xl overflow-hidden">
                <div className="flex items-center">
                  <div className="flex-1 flex items-center px-6 py-5 md:py-6">
                    <Search className="w-5 h-5 md:w-6 md:h-6 text-gray-400 mr-3 flex-shrink-0" />
                    <div className="flex-1 flex items-center overflow-hidden min-w-0">
                      <span className="text-base md:text-lg text-gray-600 whitespace-nowrap overflow-hidden text-ellipsis">
                        {displayedText}
                      </span>
                      <span className="inline-block w-0.5 h-5 md:h-6 bg-gray-600 animate-pulse ml-1 flex-shrink-0"></span>
                    </div>
                  </div>
                  <button className="bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-white font-semibold px-6 md:px-8 py-5 md:py-6 rounded-r-full transition-all duration-300 flex-shrink-0 text-sm md:text-base whitespace-nowrap">
                    Connect for FREE!
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative px-4 py-20 md:py-24 lg:py-28 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-6 motion-safe:duration-700">
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900">
              Intelligence that
              <br />
              Drives revenue 24/27
            </h3>

            <p className="mt-4 max-w-3xl text-base sm:text-lg text-gray-600 leading-relaxed">
              Orkestrate reads your orders, site behaviour and campaign data to surface
              where you are leaking revenue and where you can safely push harder.
              Advanced personalization sees roughly 40% higher revenue from marketing.
            </p>
          </div>

          <div className="mt-10 motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-6 motion-safe:duration-700 motion-safe:delay-150">
            <div className="-mx-4 px-4 overflow-x-auto pb-8 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
              <div className="flex gap-5 min-w-max snap-x snap-mandatory px-2">
                {/* Card 1 */}
                <div className="snap-start w-[340px] sm:w-[380px] flex flex-col justify-between rounded-2xl border border-gray-200 bg-white p-6 shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-all duration-300 hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)] hover:border-orange-200 hover:-translate-y-1 group">
                  <div>
                    <div className="flex items-start justify-between mb-5">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-50 text-[#DD3B2F] group-hover:bg-[#DD3B2F] group-hover:text-white transition-colors duration-300">
                          <Users className="h-5 w-5" />
                        </div>
                        <div>
                          <h4 className="text-base font-bold text-gray-900">High value lapsing</h4>
                          <div className="flex items-center gap-1.5 mt-0.5">
                            <span className="relative flex h-2 w-2">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                            </span>
                            <p className="text-xs font-medium text-gray-500">183 customers at risk</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mb-5 rounded-xl bg-gray-50 p-4 border border-gray-100 group-hover:border-orange-100 transition-colors">
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Recoverable Revenue</p>
                      <div className="flex items-baseline gap-1 mt-1">
                        <p className="text-xl font-bold text-gray-900">9.4k</p>
                        <span className="text-gray-400 text-sm">-</span>
                        <p className="text-xl font-bold text-gray-900">14.2k</p>
                      </div>
                    </div>

                    <p className="text-sm text-gray-600 leading-relaxed mb-6">
                      Customers who used to buy often and have gone quiet for over their regular time. Perfect for a sharp, respectful winback.
                    </p>
                  </div>

                  <button className="group/btn flex w-full items-center justify-center gap-2 rounded-xl bg-white border-2 border-gray-100 py-3 text-sm font-bold text-gray-900 transition-all hover:border-[#DD3B2F] hover:text-[#DD3B2F]">
                    Run this winback
                    <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </button>
                </div>

                {/* Card 2 */}
                <div className="snap-start w-[340px] sm:w-[380px] flex flex-col justify-between rounded-2xl border border-gray-200 bg-white p-6 shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-all duration-300 hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)] hover:border-orange-200 hover:-translate-y-1 group">
                  <div>
                    <div className="flex items-start justify-between mb-5">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-50 text-[#DD3B2F] group-hover:bg-[#DD3B2F] group-hover:text-white transition-colors duration-300">
                          <Zap className="h-5 w-5" />
                        </div>
                        <div>
                          <h4 className="text-base font-bold text-gray-900">Ready to buy now</h4>
                          <div className="flex items-center gap-1.5 mt-0.5">
                            <span className="relative flex h-2 w-2">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                            </span>
                            <p className="text-xs font-medium text-gray-500">276 likely buyers</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mb-5 rounded-xl bg-gray-50 p-4 border border-gray-100 group-hover:border-orange-100 transition-colors">
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Potential Revenue</p>
                      <div className="flex items-baseline gap-1 mt-1">
                        <p className="text-xl font-bold text-gray-900">8.1k</p>
                        <span className="text-gray-400 text-sm">-</span>
                        <p className="text-xl font-bold text-gray-900">11.7k</p>
                      </div>
                    </div>

                    <p className="text-sm text-gray-600 leading-relaxed mb-6">
                      People who browsed in a very similar pattern to those who bought but had strange cut offs. Ideal for a focused SKU lead nudge.
                    </p>
                  </div>

                  <button className="group/btn flex w-full items-center justify-center gap-2 rounded-xl bg-white border-2 border-gray-100 py-3 text-sm font-bold text-gray-900 transition-all hover:border-[#DD3B2F] hover:text-[#DD3B2F]">
                    Run this nudge
                    <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </button>
                </div>

                {/* Card 3 */}
                <div className="snap-start w-[340px] sm:w-[380px] flex flex-col justify-between rounded-2xl border border-gray-200 bg-white p-6 shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-all duration-300 hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)] hover:border-orange-200 hover:-translate-y-1 group">
                  <div>
                    <div className="flex items-start justify-between mb-5">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-50 text-[#DD3B2F] group-hover:bg-[#DD3B2F] group-hover:text-white transition-colors duration-300">
                          <Eye className="h-5 w-5" />
                        </div>
                        <div>
                          <h4 className="text-base font-bold text-gray-900">Overlooked buyers</h4>
                          <div className="flex items-center gap-1.5 mt-0.5">
                            <span className="relative flex h-2 w-2">
                              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                            </span>
                            <p className="text-xs font-medium text-gray-500">7,000 Likely buyers</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mb-5 rounded-xl bg-gray-50 p-4 border border-gray-100 group-hover:border-orange-100 transition-colors">
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Potential Revenue</p>
                      <div className="flex items-baseline gap-1 mt-1">
                        <p className="text-xl font-bold text-gray-900">55.5k</p>
                        <span className="text-gray-400 text-sm">-</span>
                        <p className="text-xl font-bold text-gray-900">90.8k</p>
                      </div>
                    </div>

                    <p className="text-sm text-gray-600 leading-relaxed mb-6">
                      Overlooked customers that aren’t in your chosen segment but have several attributes that relates to the overall campaign.
                    </p>
                  </div>

                  <button className="group/btn flex w-full items-center justify-center gap-2 rounded-xl bg-white border-2 border-gray-100 py-3 text-sm font-bold text-gray-900 transition-all hover:border-[#DD3B2F] hover:text-[#DD3B2F]">
                    Run this segment
                    <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </button>
                </div>

                {/* Card 4 */}
                <div className="snap-start w-[340px] sm:w-[380px] flex flex-col justify-between rounded-2xl border border-gray-200 bg-white p-6 shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-all duration-300 hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)] hover:border-orange-200 hover:-translate-y-1 group">
                  <div>
                    <div className="flex items-start justify-between mb-5">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-50 text-[#DD3B2F] group-hover:bg-[#DD3B2F] group-hover:text-white transition-colors duration-300">
                          <BellOff className="h-5 w-5" />
                        </div>
                        <div>
                          <h4 className="text-base font-bold text-gray-900">Over-messaged VIPs</h4>
                          <div className="flex items-center gap-1.5 mt-0.5">
                            <span className="relative flex h-2 w-2">
                              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
                            </span>
                            <p className="text-xs font-medium text-gray-500">94 VIPs on the edge</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mb-5 rounded-xl bg-gray-50 p-4 border border-gray-100 group-hover:border-orange-100 transition-colors">
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Margin Protection</p>
                      <div className="flex items-baseline gap-1 mt-1">
                        <p className="text-xl font-bold text-gray-900">3.2k</p>
                        <span className="text-sm text-gray-500 font-medium ml-1">monthly</span>
                      </div>
                    </div>

                    <p className="text-sm text-gray-600 leading-relaxed mb-6">
                      Top spenders who have seen too many emails and ads this week. Orkestrate cools them off so they do not unsubscribe.
                    </p>
                  </div>

                  <button className="group/btn flex w-full items-center justify-center gap-2 rounded-xl bg-white border-2 border-gray-100 py-3 text-sm font-bold text-gray-900 transition-all hover:border-[#DD3B2F] hover:text-[#DD3B2F]">
                    Apply this guardrail
                    <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </button>
                </div>

                {/* Card 5 */}
                <div className="snap-start w-[340px] sm:w-[380px] flex flex-col justify-between rounded-2xl border border-gray-200 bg-white p-6 shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-all duration-300 hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)] hover:border-orange-200 hover:-translate-y-1 group">
                  <div>
                    <div className="flex items-start justify-between mb-5">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-50 text-[#DD3B2F] group-hover:bg-[#DD3B2F] group-hover:text-white transition-colors duration-300">
                          <ShoppingBag className="h-5 w-5" />
                        </div>
                        <div>
                          <h4 className="text-base font-bold text-gray-900">Next best product</h4>
                          <div className="flex items-center gap-1.5 mt-0.5">
                            <span className="relative flex h-2 w-2">
                              <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
                            </span>
                            <p className="text-xs font-medium text-gray-500">211 candidates</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mb-5 rounded-xl bg-gray-50 p-4 border border-gray-100 group-hover:border-orange-100 transition-colors">
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Incremental Revenue</p>
                      <div className="flex items-baseline gap-1 mt-1">
                        <p className="text-xl font-bold text-gray-900">6.5k</p>
                        <span className="text-gray-400 text-sm">-</span>
                        <p className="text-xl font-bold text-gray-900">9.8k</p>
                      </div>
                    </div>

                    <p className="text-sm text-gray-600 leading-relaxed mb-6">
                      Customers who bought Product A and showed interest in Product B but never finished. Clean, relevant cross sell.
                    </p>
                  </div>

                  <button className="group/btn flex w-full items-center justify-center gap-2 rounded-xl bg-white border-2 border-gray-100 py-3 text-sm font-bold text-gray-900 transition-all hover:border-[#DD3B2F] hover:text-[#DD3B2F]">
                    Launch this cross sell
                    <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-6 motion-safe:duration-700 motion-safe:delay-300">
            <button className="inline-flex items-center justify-center rounded-2xl bg-[#DD3B2F] text-white font-bold px-8 py-5 text-base sm:text-lg hover:opacity-90 transition-opacity">
              Connect and try our intelligence layer
              <span className="ml-2 uppercase">FOR FREE</span>
            </button>
            <p className="mt-3 text-sm sm:text-base text-gray-600">
              All numbers update from your live data once you connect.
            </p>
          </div>
        </div>
      </section>

      <section
        className="relative px-4 py-20 md:py-24 lg:py-28"
        data-framer-name="Aampe Advantage"
        id="aampe-advantage"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-6 motion-safe:duration-700">
            <p className="text-sm font-medium tracking-wide text-gray-700">Aampe Advantage</p>
            <h2 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-gray-900 leading-tight max-w-4xl mx-auto">
              <span className="block">Continuous Intelligence for</span>
              <span className="block">Personalization at Scale</span>
            </h2>
          </div>

          <div className="mt-12 lg:mt-14 grid gap-10 lg:gap-14 lg:grid-cols-[0.85fr,2.8fr,0.85fr] items-center">
            <div className="space-y-7 text-left motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-6 motion-safe:duration-700 motion-safe:delay-150">
              <div className="flex items-start gap-3">
                <svg viewBox="0 0 16 16" aria-hidden="true" className="h-4 w-4 mt-1 text-gray-700" fill="currentColor">
                  <path d="M 11.89 3.404 L 11.182 4.111 L 11.889 4.818 L 12.596 4.111 L 11.889 3.404 Z M 9.767 5.525 L 10.474 4.818 L 11.181 5.525 L 10.474 6.232 Z M 7.293 8 L 6.233 9.06 L 6.939 9.768 L 8 8.707 L 9.06 9.767 L 9.768 9.061 L 8.708 8 L 9.768 6.94 L 9.061 6.232 L 8 7.292 L 6.94 6.232 L 6.232 6.939 L 7.292 8 Z M 4.11 4.818 L 3.403 4.111 L 4.11 3.404 L 4.817 4.111 Z M 4.817 5.525 L 5.524 6.232 L 6.231 5.525 L 5.524 4.818 Z M 9.767 10.475 L 10.474 11.182 L 11.181 10.475 L 10.474 9.768 Z M 11.888 12.596 L 11.181 11.889 L 11.888 11.182 L 12.595 11.889 Z M 4.817 10.475 L 5.524 9.768 L 6.231 10.475 L 5.524 11.182 Z M 4.11 11.182 L 3.403 11.889 L 4.11 12.596 L 4.817 11.889 Z" />
                </svg>
                <div>
                  <p className="text-sm font-semibold text-gray-900">Limited Segments</p>
                  <p className="mt-2 text-[12.5px] text-gray-700 leading-relaxed max-w-[220px]">
                    You manually create a handful of static segments to tailor messages
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <svg viewBox="0 0 16 16" aria-hidden="true" className="h-4 w-4 mt-1 text-gray-700" fill="currentColor">
                  <path d="M 11.89 3.404 L 11.182 4.111 L 11.889 4.818 L 12.596 4.111 L 11.889 3.404 Z M 9.767 5.525 L 10.474 4.818 L 11.181 5.525 L 10.474 6.232 Z M 7.293 8 L 6.233 9.06 L 6.939 9.768 L 8 8.707 L 9.06 9.767 L 9.768 9.061 L 8.708 8 L 9.768 6.94 L 9.061 6.232 L 8 7.292 L 6.94 6.232 L 6.232 6.939 L 7.292 8 Z M 4.11 4.818 L 3.403 4.111 L 4.11 3.404 L 4.817 4.111 Z M 4.817 5.525 L 5.524 6.232 L 6.231 5.525 L 5.524 4.818 Z M 9.767 10.475 L 10.474 11.182 L 11.181 10.475 L 10.474 9.768 Z M 11.888 12.596 L 11.181 11.889 L 11.888 11.182 L 12.595 11.889 Z M 4.817 10.475 L 5.524 9.768 L 6.231 10.475 L 5.524 11.182 Z M 4.11 11.182 L 3.403 11.889 L 4.11 12.596 L 4.817 11.889 Z" />
                </svg>
                <div>
                  <p className="text-sm font-semibold text-gray-900">Restricted Content</p>
                  <p className="mt-2 text-[12.5px] text-gray-700 leading-relaxed max-w-[220px]">
                    You must stay on top of your users&apos; evolving language and preferences
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <svg viewBox="0 0 16 16" aria-hidden="true" className="h-4 w-4 mt-1 text-gray-700" fill="currentColor">
                  <path d="M 11.89 3.404 L 11.182 4.111 L 11.889 4.818 L 12.596 4.111 L 11.889 3.404 Z M 9.767 5.525 L 10.474 4.818 L 11.181 5.525 L 10.474 6.232 Z M 7.293 8 L 6.233 9.06 L 6.939 9.768 L 8 8.707 L 9.06 9.767 L 9.768 9.061 L 8.708 8 L 9.768 6.94 L 9.061 6.232 L 8 7.292 L 6.94 6.232 L 6.232 6.939 L 7.292 8 Z M 4.11 4.818 L 3.403 4.111 L 4.11 3.404 L 4.817 4.111 Z M 4.817 5.525 L 5.524 6.232 L 6.231 5.525 L 5.524 4.818 Z M 9.767 10.475 L 10.474 11.182 L 11.181 10.475 L 10.474 9.768 Z M 11.888 12.596 L 11.181 11.889 L 11.888 11.182 L 12.595 11.889 Z M 4.817 10.475 L 5.524 9.768 L 6.231 10.475 L 5.524 11.182 Z M 4.11 11.182 L 3.403 11.889 L 4.11 12.596 L 4.817 11.889 Z" />
                </svg>
                <div>
                  <p className="text-sm font-semibold text-gray-900">Manual A/B tests</p>
                  <p className="mt-2 text-[12.5px] text-gray-700 leading-relaxed max-w-[220px]">
                    You run A/B tests one at a time on one or two specific variables
                  </p>
                </div>
              </div>
            </div>

            <div className="motion-safe:animate-in motion-safe:fade-in motion-safe:duration-700 motion-safe:delay-200">
              <div className="mx-auto max-w-[1100px] w-full">
                <Image
                  alt=""
                  src="https://framerusercontent.com/images/d90MNP2pZ1fMl0QoqDcHf98C0iU.webp?width=1920&height=1620"
                  width={1920}
                  height={1620}
                  sizes="(min-width: 1024px) 1100px, 100vw"
                  className="w-full rounded-2xl"
                  style={{ height: 'auto' }}
                />
              </div>
            </div>

            <div className="space-y-7 text-left motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-6 motion-safe:duration-700 motion-safe:delay-250">
              <div className="flex items-start gap-3">
                <svg viewBox="0 0 16 16" aria-hidden="true" className="h-4 w-4 mt-1 text-emerald-700" fill="currentColor">
                  <path d="M 11.449 4.798 L 12.247 4 L 12.954 4.707 L 12.156 5.505 Z M 9.053 7.193 L 10.65 5.597 L 11.357 6.304 L 9.761 7.9 L 9.054 7.193 Z M 3.753 9.168 L 5.416 10.831 L 8.256 7.991 L 8.962 8.699 L 5.769 11.892 L 5.416 12.246 L 5.062 11.892 L 3.045 9.875 Z" />
                </svg>
                <div>
                  <p className="text-sm font-semibold text-gray-900">Individual Users</p>
                  <p className="mt-2 text-[12.5px] text-gray-700 leading-relaxed max-w-[220px]">
                    Agents identify and act on user patterns in real time, down to the individual level
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <svg viewBox="0 0 16 16" aria-hidden="true" className="h-4 w-4 mt-1 text-emerald-700" fill="currentColor">
                  <path d="M 11.449 4.798 L 12.247 4 L 12.954 4.707 L 12.156 5.505 Z M 9.053 7.193 L 10.65 5.597 L 11.357 6.304 L 9.761 7.9 L 9.054 7.193 Z M 3.753 9.168 L 5.416 10.831 L 8.256 7.991 L 8.962 8.699 L 5.769 11.892 L 5.416 12.246 L 5.062 11.892 L 3.045 9.875 Z" />
                </svg>
                <div>
                  <p className="text-sm font-semibold text-gray-900">Limitless Creativity</p>
                  <p className="mt-2 text-[12.5px] text-gray-700 leading-relaxed max-w-[220px]">
                    Access a rich library of content variants without compromising brand integrity
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <svg viewBox="0 0 16 16" aria-hidden="true" className="h-4 w-4 mt-1 text-emerald-700" fill="currentColor">
                  <path d="M 11.449 4.798 L 12.247 4 L 12.954 4.707 L 12.156 5.505 Z M 9.053 7.193 L 10.65 5.597 L 11.357 6.304 L 9.761 7.9 L 9.054 7.193 Z M 3.753 9.168 L 5.416 10.831 L 8.256 7.991 L 8.962 8.699 L 5.769 11.892 L 5.416 12.246 L 5.062 11.892 L 3.045 9.875 Z" />
                </svg>
                <div>
                  <p className="text-sm font-semibold text-gray-900">Ongoing Optimizations</p>
                  <p className="mt-2 text-[12.5px] text-gray-700 leading-relaxed max-w-[220px]">
                    Agents test thousands of variants in parallel constantly learning and optimizing for impact
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 lg:mt-18 grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-6 text-center motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-6 motion-safe:duration-700 motion-safe:delay-300">
            <div>
              <div className="flex items-end justify-center gap-1">
                <p className="text-4xl sm:text-5xl font-semibold text-gray-900">128</p>
                <p className="text-2xl sm:text-3xl font-semibold text-gray-900/50">%</p>
              </div>
              <p className="mt-3 text-sm sm:text-base text-gray-800">Improvement in Engagement</p>
            </div>

            <div>
              <div className="flex items-end justify-center gap-1">
                <p className="text-4xl sm:text-5xl font-semibold text-gray-900">25</p>
                <p className="text-2xl sm:text-3xl font-semibold text-gray-900/50">%</p>
              </div>
              <p className="mt-3 text-sm sm:text-base text-gray-800">Increase in Incremental Purchases</p>
            </div>

            <div>
              <div className="flex items-end justify-center gap-1">
                <p className="text-4xl sm:text-5xl font-semibold text-gray-900">135</p>
                <p className="text-2xl sm:text-3xl font-semibold text-gray-900/50">%</p>
              </div>
              <p className="mt-3 text-sm sm:text-base text-gray-800">Increase in GMV after Onboarding</p>
            </div>

            <div>
              <div className="flex items-end justify-center gap-1">
                <p className="text-4xl sm:text-5xl font-semibold text-gray-900">&lt;8</p>
                <p className="text-2xl sm:text-3xl font-semibold text-gray-900/50">hrs</p>
              </div>
              <p className="mt-3 text-sm sm:text-base text-gray-800">Completed Integration &amp; Testing</p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative px-4 py-20 md:py-24 lg:py-28 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-6 motion-safe:duration-700">
            <div className="inline-flex items-center gap-2 rounded-full border bg-gray-100 px-4 py-2">
              <span className="text-xs font-semibold tracking-wide text-gray-700">Category</span>
              <span className="w-px h-4 bg-gray-200" />
              <span className="relative h-[1.1em] overflow-hidden">
                <span className="block animate-category-rotate">
                  <span className="block text-xs font-semibold text-[#DD3B2F]">Fashion &amp; apparel</span>
                  <span className="block text-xs font-semibold text-[#DD3B2F]">Beauty &amp; skincare</span>
                  <span className="block text-xs font-semibold text-[#DD3B2F]">Home &amp; lifestyle</span>
                </span>
              </span>
            </div>

            <h3 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-gray-900">
              Category Based AI Models
            </h3>
            <p className="mt-3 text-base sm:text-lg text-gray-700">
              Already knows your industries Ins &amp; Outs!
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:gap-6 lg:grid-cols-3 motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-6 motion-safe:duration-700 motion-safe:delay-150">
            <div className="rounded-2xl border bg-white shadow-sm p-6">
              <p className="text-sm font-semibold text-gray-900">Fashion &amp; apparel</p>
              <p className="mt-3 text-sm sm:text-base text-gray-700 leading-relaxed">
                Spots fit, size and seasonality patterns so you send the right looks to the right closets.
              </p>
              <p className="mt-3 text-sm text-gray-500 leading-relaxed">
                “Your denim VIPs respond best to SMS drops on weekends.”
              </p>
            </div>

            <div className="rounded-2xl border bg-white shadow-sm p-6">
              <p className="text-sm font-semibold text-gray-900">Beauty &amp; skincare</p>
              <p className="mt-3 text-sm sm:text-base text-gray-700 leading-relaxed">
                Understands replenishment cycles and routines, not just one-off orders.
              </p>
              <p className="mt-3 text-sm text-gray-500 leading-relaxed">
                “These 1,104 customers are due for a refill within 7 days.”
              </p>
            </div>

            <div className="rounded-2xl border bg-white shadow-sm p-6">
              <p className="text-sm font-semibold text-gray-900">Home &amp; lifestyle</p>
              <p className="mt-3 text-sm sm:text-base text-gray-700 leading-relaxed">
                Reads browsing depth and consideration windows for higher ticket items.
              </p>
              <p className="mt-3 text-sm text-gray-500 leading-relaxed">
                “Visitors who viewed sofas 3+ times are 4x more likely to convert with a reminder.”
              </p>
            </div>
          </div>

          <div className="mt-12 text-center motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-6 motion-safe:duration-700 motion-safe:delay-250">
            <p className="text-base sm:text-lg font-semibold text-gray-900">
              Choose from over 40 Unique Category Models that suit your brand!
            </p>
            <p className="mt-4 max-w-3xl mx-auto text-sm sm:text-base text-gray-700 leading-relaxed">
              You would never hire a marketer from a random niche. Orkestrate is set up for your category.
            </p>
            <p className="mt-6 text-base sm:text-lg font-semibold text-[#DD3B2F]">
              stop using basic models and start orchestrating intelligence
            </p>
          </div>
        </div>
      </section>

      <section className="relative px-4 py-20 md:py-24 lg:py-28 bg-slate-50/50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-6 motion-safe:duration-700 mb-20">
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-100 bg-orange-50/50 px-4 py-1.5 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
              </span>
              <span className="text-xs font-mono font-medium text-orange-700 uppercase tracking-wider">System Workflow</span>
            </div>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900">
              How Orkestrate works
            </h3>
            <p className="mt-4 max-w-2xl mx-auto text-base sm:text-lg text-gray-600">
              Turn a small team into a high output marketing engine in 5 automated steps.
            </p>
          </div>

          <div className="relative">
            {/* Connecting Line */}
            <div className="absolute left-8 top-8 bottom-8 w-px bg-gradient-to-b from-orange-200 via-gray-200 to-transparent hidden sm:block"></div>

            <div className="space-y-12">
              {/* Step 1 */}
              <div className="relative flex gap-6 sm:gap-10 group">
                <div className="hidden sm:flex flex-none w-16 h-16 rounded-2xl bg-white border border-gray-200 shadow-[0_2px_8px_rgba(0,0,0,0.04)] items-center justify-center z-10 group-hover:border-orange-200 group-hover:shadow-[0_4px_12px_rgba(221,59,47,0.1)] group-hover:scale-110 transition-all duration-300">
                   <Plug className="w-7 h-7 text-gray-400 group-hover:text-[#DD3B2F] transition-colors" />
                </div>
                <div className="flex-1 rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 shadow-sm hover:shadow-md transition-all duration-300 group-hover:border-orange-100 relative overflow-hidden">
                   <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                      <Plug className="w-24 h-24 text-[#DD3B2F] -mr-8 -mt-8 transform rotate-12" />
                   </div>
                   <div className="relative z-10">
                     <div className="flex items-center justify-between mb-4">
                        <h4 className="text-xl font-bold text-gray-900">Connect your store and campaigns</h4>
                        <span className="text-xs font-mono font-bold text-gray-300 group-hover:text-orange-400 transition-colors bg-gray-50 group-hover:bg-orange-50 px-2 py-1 rounded">STEP_01</span>
                     </div>
                     <p className="text-base text-gray-700 leading-relaxed font-medium">
                        Plug in Shopify plus your existing tools like Klaviyo, Attentive or Braze.
                     </p>
                     <p className="mt-3 text-sm text-gray-500 leading-relaxed">
                        Orkestrate ingests orders, browsing, campaigns and basic catalog data so it can see what you are already doing and where revenue is leaking.
                     </p>
                   </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative flex gap-6 sm:gap-10 group">
                <div className="hidden sm:flex flex-none w-16 h-16 rounded-2xl bg-white border border-gray-200 shadow-[0_2px_8px_rgba(0,0,0,0.04)] items-center justify-center z-10 group-hover:border-orange-200 group-hover:shadow-[0_4px_12px_rgba(221,59,47,0.1)] group-hover:scale-110 transition-all duration-300">
                   <Layers className="w-7 h-7 text-gray-400 group-hover:text-[#DD3B2F] transition-colors" />
                </div>
                <div className="flex-1 rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 shadow-sm hover:shadow-md transition-all duration-300 group-hover:border-orange-100 relative overflow-hidden">
                   <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                      <Layers className="w-24 h-24 text-[#DD3B2F] -mr-8 -mt-8 transform rotate-12" />
                   </div>
                   <div className="relative z-10">
                     <div className="flex items-center justify-between mb-4">
                        <h4 className="text-xl font-bold text-gray-900">Choose your category profile</h4>
                        <span className="text-xs font-mono font-bold text-gray-300 group-hover:text-orange-400 transition-colors bg-gray-50 group-hover:bg-orange-50 px-2 py-1 rounded">STEP_02</span>
                     </div>
                     <p className="text-base text-gray-700 leading-relaxed font-medium">
                        Pick the category that matches your brand, for example beauty, fashion, home or food.
                     </p>
                     <p className="mt-3 text-sm text-gray-500 leading-relaxed">
                        Category models bring instant pattern recognition for your niche so you are not waiting months for the system to learn from scratch.
                     </p>
                   </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative flex gap-6 sm:gap-10 group">
                <div className="hidden sm:flex flex-none w-16 h-16 rounded-2xl bg-white border border-gray-200 shadow-[0_2px_8px_rgba(0,0,0,0.04)] items-center justify-center z-10 group-hover:border-orange-200 group-hover:shadow-[0_4px_12px_rgba(221,59,47,0.1)] group-hover:scale-110 transition-all duration-300">
                   <MessageSquare className="w-7 h-7 text-gray-400 group-hover:text-[#DD3B2F] transition-colors" />
                </div>
                <div className="flex-1 rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 shadow-sm hover:shadow-md transition-all duration-300 group-hover:border-orange-100 relative overflow-hidden">
                   <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                      <MessageSquare className="w-24 h-24 text-[#DD3B2F] -mr-8 -mt-8 transform rotate-12" />
                   </div>
                   <div className="relative z-10">
                     <div className="flex items-center justify-between mb-4">
                        <h4 className="text-xl font-bold text-gray-900">Start chatting with your Orkestrator</h4>
                        <span className="text-xs font-mono font-bold text-gray-300 group-hover:text-orange-400 transition-colors bg-gray-50 group-hover:bg-orange-50 px-2 py-1 rounded">STEP_03</span>
                     </div>
                     <p className="text-base text-gray-700 leading-relaxed font-medium mb-4">
                        Describe your goals in simple language.
                     </p>
                     <div className="grid gap-3 mb-4">
                        <div className="flex items-center gap-3 text-sm text-gray-600 bg-gray-50 p-3 rounded-lg border border-gray-100">
                           <div className="w-1.5 h-1.5 rounded-full bg-orange-400"></div>
                           “Recover more lapsing VIPs.”
                        </div>
                        <div className="flex items-center gap-3 text-sm text-gray-600 bg-gray-50 p-3 rounded-lg border border-gray-100">
                           <div className="w-1.5 h-1.5 rounded-full bg-orange-400"></div>
                           “Launch a new product to high intent browsers.”
                        </div>
                     </div>
                     <p className="text-sm text-gray-500 leading-relaxed">
                        Orkestrate turns that into cohorts, journeys and experiments across your channels.
                     </p>
                   </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="relative flex gap-6 sm:gap-10 group">
                <div className="hidden sm:flex flex-none w-16 h-16 rounded-2xl bg-white border border-gray-200 shadow-[0_2px_8px_rgba(0,0,0,0.04)] items-center justify-center z-10 group-hover:border-orange-200 group-hover:shadow-[0_4px_12px_rgba(221,59,47,0.1)] group-hover:scale-110 transition-all duration-300">
                   <CheckCircle2 className="w-7 h-7 text-gray-400 group-hover:text-[#DD3B2F] transition-colors" />
                </div>
                <div className="flex-1 rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 shadow-sm hover:shadow-md transition-all duration-300 group-hover:border-orange-100 relative overflow-hidden">
                   <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                      <CheckCircle2 className="w-24 h-24 text-[#DD3B2F] -mr-8 -mt-8 transform rotate-12" />
                   </div>
                   <div className="relative z-10">
                     <div className="flex items-center justify-between mb-4">
                        <h4 className="text-xl font-bold text-gray-900">Approve plays and launch</h4>
                        <span className="text-xs font-mono font-bold text-gray-300 group-hover:text-orange-400 transition-colors bg-gray-50 group-hover:bg-orange-50 px-2 py-1 rounded">STEP_04</span>
                     </div>
                     <p className="text-base text-gray-700 leading-relaxed font-medium">
                        Review the proposed plays in plain English. Tweak guardrails, budget and tone where needed.
                     </p>
                     <p className="mt-3 text-sm text-gray-500 leading-relaxed">
                        Approve and Orkestrate’s agents create and schedule the actual campaigns in your connected tools.
                     </p>
                   </div>
                </div>
              </div>

              {/* Step 5 */}
              <div className="relative flex gap-6 sm:gap-10 group">
                <div className="hidden sm:flex flex-none w-16 h-16 rounded-2xl bg-white border border-gray-200 shadow-[0_2px_8px_rgba(0,0,0,0.04)] items-center justify-center z-10 group-hover:border-orange-200 group-hover:shadow-[0_4px_12px_rgba(221,59,47,0.1)] group-hover:scale-110 transition-all duration-300">
                   <TrendingUp className="w-7 h-7 text-gray-400 group-hover:text-[#DD3B2F] transition-colors" />
                </div>
                <div className="flex-1 rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 shadow-sm hover:shadow-md transition-all duration-300 group-hover:border-orange-100 relative overflow-hidden">
                   <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                      <TrendingUp className="w-24 h-24 text-[#DD3B2F] -mr-8 -mt-8 transform rotate-12" />
                   </div>
                   <div className="relative z-10">
                     <div className="flex items-center justify-between mb-4">
                        <h4 className="text-xl font-bold text-gray-900">Learn, optimize and scale</h4>
                        <span className="text-xs font-mono font-bold text-gray-300 group-hover:text-orange-400 transition-colors bg-gray-50 group-hover:bg-orange-50 px-2 py-1 rounded">STEP_05</span>
                     </div>
                     <p className="text-base text-gray-700 leading-relaxed font-medium">
                        Every send, click and order feeds back into Orkestrate. Agents automatically promote what works.
                     </p>
                     <p className="mt-3 text-sm text-gray-500 leading-relaxed">
                        Over time you run far more campaigns and experiments with the same team while keeping performance and customer experience improving week after week.
                     </p>
                   </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      <section className="relative px-4 py-20 md:py-24 lg:py-28 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-6 motion-safe:duration-700 mb-16">
            <p className="text-sm font-semibold tracking-wide text-gray-500 uppercase">Integrations</p>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900">
              Orkestrate your existing stack
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-base sm:text-lg text-gray-600">
              Orkestrate is simple, enterprise-ready, and integrates seamlessly—no long setup required
            </p>
            <div className="mt-8 flex items-center justify-center gap-4">
              <button className="inline-flex items-center justify-center rounded-lg bg-[#DD3B2F] px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#c42e23] transition-colors">
                Request an Integration
              </button>
              <a href="#" className="text-sm font-semibold text-[#DD3B2F] hover:text-[#c42e23] flex items-center gap-1">
                See all Integrations <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="grid lg:grid-cols-[1fr,auto,1fr] gap-8 items-stretch">
            {/* Left Column: Data Sources */}
            <div className="space-y-6">
              <div className="text-center motion-safe:animate-in motion-safe:fade-in motion-safe:duration-700 motion-safe:delay-100">
                <h4 className="text-xs font-bold text-[#DD3B2F] uppercase tracking-wider mb-4">Data Sources</h4>
              </div>
              
              {/* CDPs */}
              <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm hover:shadow-md transition-shadow motion-safe:animate-in motion-safe:slide-in-from-left-8 motion-safe:fade-in motion-safe:duration-700 motion-safe:delay-200">
                <h5 className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-3 text-center">Customer Data Platforms</h5>
                <div className="flex flex-wrap justify-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-600 hover:scale-110 transition-transform duration-200" title="Segment">
                    <Layers className="h-5 w-5" />
                  </div>
                  <div className="h-10 w-10 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-600 hover:scale-110 transition-transform duration-200" title="mParticle">
                    <Box className="h-5 w-5" />
                  </div>
                  <div className="h-10 w-10 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-400">
                    <span className="text-xs">•••</span>
                  </div>
                </div>
              </div>

              {/* Data Warehouse */}
              <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm hover:shadow-md transition-shadow motion-safe:animate-in motion-safe:slide-in-from-left-8 motion-safe:fade-in motion-safe:duration-700 motion-safe:delay-300">
                <h5 className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-3 text-center">Data Warehouse & Storage</h5>
                <div className="flex flex-wrap justify-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-600 hover:scale-110 transition-transform duration-200" title="Snowflake">
                    <Database className="h-5 w-5" />
                  </div>
                  <div className="h-10 w-10 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-600 hover:scale-110 transition-transform duration-200" title="BigQuery">
                    <Server className="h-5 w-5" />
                  </div>
                  <div className="h-10 w-10 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-600 hover:scale-110 transition-transform duration-200" title="S3">
                    <Box className="h-5 w-5" />
                  </div>
                  <div className="h-10 w-10 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-400">
                    <span className="text-xs">•••</span>
                  </div>
                </div>
              </div>

              {/* CMS */}
              <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm hover:shadow-md transition-shadow motion-safe:animate-in motion-safe:slide-in-from-left-8 motion-safe:fade-in motion-safe:duration-700 motion-safe:delay-500">
                <h5 className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-3 text-center">Content Management Systems</h5>
                <div className="flex flex-wrap justify-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-600 hover:scale-110 transition-transform duration-200" title="Shopify">
                    <ShoppingBag className="h-5 w-5" />
                  </div>
                  <div className="h-10 w-10 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-600 hover:scale-110 transition-transform duration-200" title="Contentful">
                    <Layout className="h-5 w-5" />
                  </div>
                  <div className="h-10 w-10 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-600 hover:scale-110 transition-transform duration-200" title="WordPress">
                    <Globe className="h-5 w-5" />
                  </div>
                  <div className="h-10 w-10 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-400">
                    <span className="text-xs">•••</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Center Column: The Engine */}
            <div className="flex flex-col items-center justify-center relative py-8">
              {/* Connecting Lines (Desktop) */}
              <div className="hidden lg:block absolute top-1/2 left-0 w-12 h-[2px] bg-gray-200 overflow-hidden -translate-x-full">
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-[#DD3B2F] to-transparent animate-stream-x"></div>
              </div>
              <div className="hidden lg:block absolute top-1/2 right-0 w-12 h-[2px] bg-gray-200 overflow-hidden translate-x-full">
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-[#DD3B2F] to-transparent animate-stream-x-reverse"></div>
              </div>

              <div className="w-full max-w-xs space-y-4">
                {/* Ingestion */}
                <div className="space-y-2 motion-safe:animate-in motion-safe:slide-in-from-top-4 motion-safe:fade-in motion-safe:duration-700 motion-safe:delay-300">
                  <div className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white p-3 shadow-sm hover:border-orange-200 transition-colors">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-50 text-[#DD3B2F]">
                      <Zap className="h-4 w-4" />
                    </div>
                    <span className="text-sm font-medium text-gray-900">Stream Ingestion API</span>
                  </div>
                  <div className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white p-3 shadow-sm hover:border-orange-200 transition-colors">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-50 text-[#DD3B2F]">
                      <Workflow className="h-4 w-4" />
                    </div>
                    <span className="text-sm font-medium text-gray-900">Batch Connectors</span>
                  </div>
                </div>

                {/* Core */}
                <div className="relative py-6 flex justify-center motion-safe:animate-in motion-safe:zoom-in-90 motion-safe:fade-in motion-safe:duration-700 motion-safe:delay-500">
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <div className="w-[2px] h-1/2 bg-gray-200 overflow-hidden relative">
                      <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-transparent via-[#DD3B2F] to-transparent animate-stream-y"></div>
                    </div>
                    <div className="w-[2px] h-1/2 bg-gray-200 overflow-hidden relative">
                      <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-transparent via-[#DD3B2F] to-transparent animate-stream-y-reverse"></div>
                    </div>
                  </div>
                  <div className="relative z-10 bg-[#DD3B2F] text-white px-6 py-4 rounded-2xl shadow-[0_0_40px_rgba(221,59,47,0.4)] text-center hover:scale-105 transition-transform duration-300 border border-orange-400">
                    <Cpu className="h-8 w-8 mx-auto mb-2" />
                    <span className="text-sm font-bold uppercase tracking-wide">Agentic<br/>Infrastructure</span>
                  </div>
                </div>

                {/* Output */}
                <div className="space-y-2 motion-safe:animate-in motion-safe:slide-in-from-bottom-4 motion-safe:fade-in motion-safe:duration-700 motion-safe:delay-700">
                  <div className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white p-3 shadow-sm hover:border-orange-200 transition-colors">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-50 text-[#DD3B2F]">
                      <Layers className="h-4 w-4" />
                    </div>
                    <span className="text-sm font-medium text-gray-900">Action Queues</span>
                  </div>
                  <div className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white p-3 shadow-sm hover:border-orange-200 transition-colors">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-50 text-[#DD3B2F]">
                      <Database className="h-4 w-4" />
                    </div>
                    <span className="text-sm font-medium text-gray-900">Content API</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Agentic Actions */}
            <div className="space-y-6">
              <div className="text-center motion-safe:animate-in motion-safe:fade-in motion-safe:duration-700 motion-safe:delay-100">
                <h4 className="text-xs font-bold text-[#DD3B2F] uppercase tracking-wider mb-4">Agentic Actions, Content & Data</h4>
              </div>

              {/* Delivery */}
              <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm hover:shadow-md transition-shadow motion-safe:animate-in motion-safe:slide-in-from-right-8 motion-safe:fade-in motion-safe:duration-700 motion-safe:delay-200">
                <h5 className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-3 text-center">Delivery Infrastructure</h5>
                <div className="flex flex-wrap justify-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-600 hover:scale-110 transition-transform duration-200" title="SendGrid">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div className="h-10 w-10 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-600 hover:scale-110 transition-transform duration-200" title="Twilio">
                    <MessageSquare className="h-5 w-5" />
                  </div>
                  <div className="h-10 w-10 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-400">
                    <span className="text-xs">•••</span>
                  </div>
                </div>
              </div>

              {/* Engagement */}
              <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm hover:shadow-md transition-shadow motion-safe:animate-in motion-safe:slide-in-from-right-8 motion-safe:fade-in motion-safe:duration-700 motion-safe:delay-300">
                <h5 className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-3 text-center">Engagement Tools</h5>
                <div className="flex flex-wrap justify-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-600 hover:scale-110 transition-transform duration-200" title="Klaviyo">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div className="h-10 w-10 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-600 hover:scale-110 transition-transform duration-200" title="Braze">
                    <Zap className="h-5 w-5" />
                  </div>
                  <div className="h-10 w-10 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-600 hover:scale-110 transition-transform duration-200" title="Attentive">
                    <MessageSquare className="h-5 w-5" />
                  </div>
                  <div className="h-10 w-10 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-400">
                    <span className="text-xs">•••</span>
                  </div>
                </div>
              </div>

              {/* Observability */}
              <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm hover:shadow-md transition-shadow motion-safe:animate-in motion-safe:slide-in-from-right-8 motion-safe:fade-in motion-safe:duration-700 motion-safe:delay-500">
                <h5 className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-3 text-center">Observability & Insights</h5>
                <div className="flex flex-wrap justify-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-600 hover:scale-110 transition-transform duration-200" title="Mixpanel">
                    <BarChart3 className="h-5 w-5" />
                  </div>
                  <div className="h-10 w-10 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-600 hover:scale-110 transition-transform duration-200" title="Amplitude">
                    <Radio className="h-5 w-5" />
                  </div>
                  <div className="h-10 w-10 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-400">
                    <span className="text-xs">•••</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
