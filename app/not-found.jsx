// app/not-found.jsx
'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Home, ArrowLeft, SearchX } from 'lucide-react';

export default function NotFound() {
  const router = useRouter();

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-32 pb-24 flex items-center relative overflow-hidden">
        {/* Animated Background */}
        <div className="fixed inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 via-blue-50 to-purple-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        </div>

        {/* Floating orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            {/* Icon */}
            <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-gradient-to-br from-cyan-500/10 to-blue-600/10 mb-8 animate-bounce">
              <SearchX className="w-16 h-16 text-cyan-600 dark:text-cyan-400" />
            </div>

            {/* 404 Number */}
            <div className="text-[120px] md:text-[180px] lg:text-[220px] font-bold leading-none mb-8 bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 bg-clip-text text-transparent animate-pulse">
              404
            </div>

            {/* Message */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
              Page Not Found
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-12 leading-relaxed">
              Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/">
                <Button size="lg" className="group gap-2">
                  <Home className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  Go Home
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                onClick={() => router.back()}
                className="group gap-2"
              >
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                Go Back
              </Button>
            </div>

            {/* Helpful Links */}
            <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Here are some helpful links instead:
              </p>
              <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
                <Link href="/services" className="text-cyan-600 dark:text-cyan-400 hover:underline font-medium">
                  Services
                </Link>
                <Link href="/portfolio" className="text-cyan-600 dark:text-cyan-400 hover:underline font-medium">
                  Portfolio
                </Link>
                <Link href="/about" className="text-cyan-600 dark:text-cyan-400 hover:underline font-medium">
                  About Us
                </Link>
                <Link href="/contact" className="text-cyan-600 dark:text-cyan-400 hover:underline font-medium">
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}