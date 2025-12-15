'use client';

import { Mail, Phone } from 'lucide-react';
import FloatingNavbar from '@/components/FloatingNavbar';
import Footer from '@/components/Footer';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <FloatingNavbar />
      
      <main className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16 space-y-6 motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-6 motion-safe:duration-700">
                <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-4 py-1.5">
                    <span className="text-sm font-medium text-orange-600">Contact us</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 tracking-tight">
                    Get in touch with our team
                </h1>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
                {/* Left Column: Contact Info */}
                <div className="space-y-12 motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-6 motion-safe:duration-700 motion-safe:delay-150">
                    <div>
                        <h2 className="text-2xl font-semibold text-neutral-900 mb-4">
                            Feel free to reach out - we'd love to connect.
                        </h2>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            Whether you have a question about features, pricing, or need a demo, our team is ready to answer all your questions.
                        </p>
                    </div>

                    <div className="space-y-8">
                        {/* Email */}
                        <div className="flex items-start gap-4 group">
                            <div className="p-3 rounded-xl bg-orange-50 text-orange-600 group-hover:bg-orange-100 transition-colors">
                                <Mail className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-neutral-900 mb-1">Email us</h3>
                                <a href="mailto:hello@orkestrate.com" className="text-gray-600 hover:text-orange-600 transition-colors">
                                    hello@orkestrate.com
                                </a>
                            </div>
                        </div>

                        {/* Phone */}
                        <div className="flex items-start gap-4 group">
                            <div className="p-3 rounded-xl bg-orange-50 text-orange-600 group-hover:bg-orange-100 transition-colors">
                                <Phone className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-neutral-900 mb-1">Call us</h3>
                                <a href="tel:+14158150649" className="text-gray-600 hover:text-orange-600 transition-colors">
                                    +1 415 815 0649
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column: Form */}
                <div className="bg-gray-50 rounded-[2rem] p-8 md:p-10 motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-6 motion-safe:duration-700 motion-safe:delay-300">
                    <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                        <div className="grid sm:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-neutral-900">First Name</label>
                                <input 
                                    type="text" 
                                    placeholder="First name" 
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all bg-white placeholder:text-gray-400" 
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-neutral-900">Last Name</label>
                                <input 
                                    type="text" 
                                    placeholder="Last name" 
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all bg-white placeholder:text-gray-400" 
                                />
                            </div>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-neutral-900">Email</label>
                                <input 
                                    type="email" 
                                    placeholder="Your email" 
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all bg-white placeholder:text-gray-400" 
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-neutral-900">Phone Number</label>
                                <input 
                                    type="tel" 
                                    placeholder="Your phone" 
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all bg-white placeholder:text-gray-400" 
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-neutral-900">Message</label>
                            <textarea 
                                placeholder="Write your message" 
                                rows={4} 
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all bg-white resize-none placeholder:text-gray-400" 
                            />
                        </div>

                        <button 
                            type="submit" 
                            className="w-full py-4 rounded-xl bg-neutral-900 text-white font-semibold hover:bg-neutral-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                        >
                            Submit
                        </button>

                        <p className="text-center text-sm text-gray-500">
                            By submitting this form you agree to our friendly <a href="/privacy" className="underline hover:text-neutral-900 transition-colors">Privacy Policy</a>
                        </p>
                    </form>
                </div>
            </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
