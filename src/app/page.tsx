"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import MatrixEffect from "@/components/MatrixEffect";
import SmoothScrollLink from "@/components/SmoothScrollLink";
import AnimatedSection from "@/components/AnimatedSection";
import MobileMenu from "@/components/MobileMenu";

export default function Home() {
  const [matrixEffect, setMatrixEffect] = useState(false);

  useEffect(() => {
    setMatrixEffect(true);
  }, []);

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Matrix Background Effect */}
      <div className="absolute inset-0 opacity-20">
        <MatrixEffect />
      </div>

      {/* Animated Grid Lines */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-900/10 to-transparent"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(0, 255, 0, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(0, 255, 0, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-md z-50 border-b border-green-500/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <AnimatedSection animation="fade-left" duration={800}>
                <h1 className="text-xl sm:text-2xl font-bold text-green-400 font-mono">
                  {"> CodeCrafters"}
                </h1>
              </AnimatedSection>
            </div>
            <div className="hidden md:flex space-x-6 lg:space-x-8">
              <AnimatedSection animation="fade-right" duration={800} delay={100}>
                <SmoothScrollLink href="#features" className="text-green-400 hover:text-green-300 transition-colors font-mono text-sm lg:text-base">
                  {"[ Fitur ]"}
                </SmoothScrollLink>
              </AnimatedSection>
              <AnimatedSection animation="fade-right" duration={800} delay={200}>
                <SmoothScrollLink href="#download" className="text-green-400 hover:text-green-300 transition-colors font-mono text-sm lg:text-base">
                  {"[ Download ]"}
                </SmoothScrollLink>
              </AnimatedSection>
              <AnimatedSection animation="fade-right" duration={800} delay={300}>
                <SmoothScrollLink href="#contact" className="text-green-400 hover:text-green-300 transition-colors font-mono text-sm lg:text-base">
                  {"[ Kontak ]"}
                </SmoothScrollLink>
              </AnimatedSection>
            </div>
            {/* Mobile Menu */}
            <div className="md:hidden">
              <MobileMenu />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <AnimatedSection animation="fade-up" duration={1000}>
              <div className="mb-8">
                <div className="inline-flex items-center px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full mb-6">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                  <span className="text-green-400 text-sm font-mono">SYSTEM READY</span>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" duration={1200} delay={200}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-green-400 mb-4 sm:mb-6 font-mono">
                {"> CodeCrafters_"}
                <span className="block text-green-300 animate-pulse text-xl sm:text-2xl md:text-3xl lg:text-4xl">
                  Aplikasi Keamanan Siber
                </span>
              </h2>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" duration={1400} delay={400}>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-green-200 mb-6 sm:mb-8 max-w-3xl mx-auto font-mono leading-relaxed px-4">
                {"[ Aplikasi keamanan siber profesional dengan fitur autentikasi Firebase, SQL Injection checker, XSS detector, dan alat-alat penetrasi testing modern ]"}
              </p>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" duration={1600} delay={600}>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
                <SmoothScrollLink
                  href="#download"
                  className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-green-600 text-black font-bold rounded-lg hover:bg-green-500 transition-all duration-300 shadow-lg hover:shadow-green-500/50 font-mono border-2 border-green-400 text-sm sm:text-base"
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  {"[ DOWNLOAD NOW ]"}
                </SmoothScrollLink>
                <SmoothScrollLink
                  href="#features"
                  className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 border-2 border-green-500 text-green-400 font-bold rounded-lg hover:bg-green-500/10 transition-all duration-300 font-mono text-sm sm:text-base"
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  {"[ SCAN FEATURES ]"}
                </SmoothScrollLink>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection animation="fade-up" duration={1000}>
            <div className="text-center mb-12 sm:mb-16">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-400 mb-2 sm:mb-4 font-mono">
                {"> SYSTEM_FEATURES.EXE"}
              </h3>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-green-200 font-mono px-4">
                {"[ CodeCrafters dilengkapi dengan alat-alat profesional untuk testing keamanan dan penetrasi sistem ]"}
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            <AnimatedSection animation="fade-up" duration={800} delay={0}>
              <div className="p-4 sm:p-6 bg-black/50 border border-green-500/30 rounded-xl hover:border-green-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/20">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-red-900/50 border border-red-500 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                  <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h4 className="text-lg sm:text-xl font-semibold text-green-400 mb-2 font-mono">
                  {"🔐 FIREBASE_AUTH.SYS"}
                </h4>
                <p className="text-green-200 font-mono text-sm">
                  {"[ Login dan registrasi pengguna yang aman dengan integrasi Firebase Authentication ]"}
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" duration={800} delay={100}>
              <div className="p-6 bg-black/50 border border-green-500/30 rounded-xl hover:border-green-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/20">
                <div className="w-12 h-12 bg-orange-900/50 border border-orange-500 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-green-400 mb-2 font-mono">
                  {"🛡️ SQL_INJECT.CHECK"}
                </h4>
                <p className="text-green-200 font-mono text-sm">
                  {"[ Pemeriksaan kerentanan SQL Injection untuk keamanan database aplikasi Anda ]"}
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" duration={800} delay={200}>
              <div className="p-6 bg-black/50 border border-green-500/30 rounded-xl hover:border-green-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/20">
                <div className="w-12 h-12 bg-yellow-900/50 border border-yellow-500 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-green-400 mb-2 font-mono">
                  {"🌐 XSS_DETECTOR.EXE"}
                </h4>
                <p className="text-green-200 font-mono text-sm">
                  {"[ Deteksi kerentanan Cross-Site Scripting untuk proteksi aplikasi web Anda ]"}
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" duration={800} delay={300}>
              <div className="p-6 bg-black/50 border border-green-500/30 rounded-xl hover:border-green-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/20">
                <div className="w-12 h-12 bg-green-900/50 border border-green-500 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-green-400 mb-2 font-mono">
                  {"🔍 MIRROR_TOOLS.BAT"}
                </h4>
                <p className="text-green-200 font-mono text-sm">
                  {"[ Alat untuk mirror website secara massal dengan fitur advanced crawling ]"}
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" duration={800} delay={400}>
              <div className="p-6 bg-black/50 border border-green-500/30 rounded-xl hover:border-green-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/20">
                <div className="w-12 h-12 bg-blue-900/50 border border-blue-500 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-green-400 mb-2 font-mono">
                  {"📊 SMB_ENUM.NMAP"}
                </h4>
                <p className="text-green-200 font-mono text-sm">
                  {"[ Enumerasi SMB dengan Nmap untuk analisis keamanan jaringan Anda ]"}
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" duration={800} delay={500}>
              <div className="p-6 bg-black/50 border border-green-500/30 rounded-xl hover:border-green-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/20">
                <div className="w-12 h-12 bg-purple-900/50 border border-purple-500 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-green-400 mb-2 font-mono">
                  {"🎯 INVESTIGATE_ID.PS1"}
                </h4>
                <p className="text-green-200 font-mono text-sm">
                  {"[ Alat investigasi identitas digital untuk keamanan dan forensik digital ]"}
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection animation="fade-up" duration={1000}>
            <div className="text-center mb-12 sm:mb-16">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-400 mb-2 sm:mb-4 font-mono">
                {"> DOWNLOAD_SYSTEM.EXE"}
              </h3>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-green-200 font-mono px-4">
                {"[ Pilih platform Anda dan mulai menjelajahi keamanan sistem dengan CodeCrafters hari ini ]"}
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <AnimatedSection animation="fade-left" duration={800} delay={0}>
              <div className="bg-black/50 border border-green-500/30 rounded-xl p-8 hover:border-green-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/20 text-center">
                <div className="w-16 h-16 bg-indigo-900/50 border border-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-indigo-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 3.82-2.51 1.38-.03 2.7.87 3.69.87.98 0 2.84-1.11 4.81-.91.78.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                  </svg>
                </div>
                <h4 className="text-2xl font-semibold text-green-400 mb-2 font-mono">
                  {"[ iOS_PLATFORM ]"}
                </h4>
                <p className="text-green-200 font-mono mb-6">
                  {"[ Untuk iPhone dan iPad ]"}
                </p>
                <Link
                  href="https://github.com/HadiOnZero/CodeCraftersNewVersion/releases/download/v1.0.0/CodeCrafters-iOS.ipa"
                  className="inline-flex items-center px-6 py-3 bg-indigo-600 text-black font-bold rounded-lg hover:bg-indigo-500 transition-all duration-300 font-mono border-2 border-indigo-400"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  {"[ DOWNLOAD IPA ]"}
                </Link>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-right" duration={800} delay={200}>
              <div className="bg-black/50 border border-green-500/30 rounded-xl p-8 hover:border-green-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/20 text-center">
                <div className="w-16 h-16 bg-green-900/50 border border-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.523 15.341c-.551 1.478.542 3.159 1.547 2.574 1.555-.902 2.358-3.041 1.267-4.755-1.092-1.715-3.006-1.972-4.055-.717-.344.388-.534.869-.534 1.341 0 .554-.205 1.073-.579 1.463-.511.53-1.254.689-1.949.528-.696-.16-1.242-.689-1.532-1.343-.289-.654-.285-1.398.011-2.048.297-.65.848-1.139 1.499-1.331.651-.192 1.348-.066 1.894.344.421.316.959.456 1.493.385.535-.07 1.026-.348 1.379-.773.353-.425.543-.961.543-1.514 0-1.072.655-2.034 1.618-2.456.963-.421 2.076-.227 2.864.496.788.723 1.165 1.821.996 2.886-.169 1.065-.878 1.969-1.816 2.4-.938.431-2.052.309-2.893-.328-.841-.637-1.355-1.651-1.355-2.724 0-1.17-.421-2.298-1.173-3.148-.752-.85-1.791-1.35-2.871-1.35-1.08 0-2.119.5-2.871 1.35-.752.85-1.173 1.978-1.173 3.148 0 1.073-.514 2.087-1.355 2.724-.841.637-1.955.759-2.893.328-.938-.431-1.647-1.335-1.816-2.4-.169-1.065.208-2.163.996-2.886.788-.723 1.901-0.917 2.864-0.496z" />
                  </svg>
                </div>
                <h4 className="text-2xl font-semibold text-green-400 mb-2 font-mono">
                  {"[ ANDROID_PLATFORM ]"}
                </h4>
                <p className="text-green-200 font-mono mb-6">
                  {"[ Untuk semua perangkat Android ]"}
                </p>
                <Link
                  href="https://github.com/HadiOnZero/CodeCraftersNewVersion/releases/download/v1.0.0/CodeCrafters-Android.apk"
                  className="inline-flex items-center px-6 py-3 bg-green-600 text-black font-bold rounded-lg hover:bg-green-500 transition-all duration-300 font-mono border-2 border-green-400"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  {"[ DOWNLOAD APK ]"}
                </Link>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection animation="fade-up" duration={1000} delay={400}>
            <div className="text-center mt-12">
              <p className="text-green-300 font-mono mb-4">
                {"[ Butuh versi lain? Lihat semua versi di GitHub ]"}
              </p>
              <SmoothScrollLink
                href="https://github.com/HadiOnZero/CodeCraftersNewVersion/releases"
                className="inline-flex items-center px-6 py-3 border-2 border-green-500 text-green-400 font-bold rounded-lg hover:bg-green-500/10 transition-all duration-300 font-mono"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                {"[ GITHUB_REPOSITORY ]"}
              </SmoothScrollLink>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-black border-t border-green-500/30 text-white py-8 sm:py-12 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <AnimatedSection animation="fade-left" duration={800}>
              <div className="text-center sm:text-left">
                <h4 className="text-xl sm:text-2xl font-bold text-green-400 mb-2 sm:mb-4 font-mono">
                  {"> CodeCrafters.exe"}
                </h4>
                <p className="text-green-200 font-mono text-xs sm:text-sm">
                  {"[ Aplikasi keamanan siber profesional untuk developer yang mengutamakan keamanan dan penetrasi testing ]"}
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" duration={800} delay={200}>
              <div className="text-center sm:text-left">
                <h5 className="text-base sm:text-lg font-semibold mb-2 sm:mb-4 text-green-400 font-mono">{"[ SYSTEM_LINKS ]"}</h5>
                <ul className="space-y-1 sm:space-y-2">
                  <li>
                    <SmoothScrollLink href="#features" className="text-green-200 hover:text-green-400 transition-colors font-mono text-xs sm:text-sm">
                      {"[ ./features ]"}
                    </SmoothScrollLink>
                  </li>
                  <li>
                    <SmoothScrollLink href="#download" className="text-green-200 hover:text-green-400 transition-colors font-mono text-xs sm:text-sm">
                      {"[ ./download ]"}
                    </SmoothScrollLink>
                  </li>
                  <li>
                    <SmoothScrollLink href="https://github.com/HadiOnZero/CodeCraftersNewVersion" className="text-green-200 hover:text-green-400 transition-colors font-mono text-xs sm:text-sm">
                      {"[ ./github ]"}
                    </SmoothScrollLink>
                  </li>
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-right" duration={800} delay={400}>
              <div>
                <h5 className="text-lg font-semibold mb-4 text-green-400 font-mono">{"[ SYSTEM_CONTACT ]"}</h5>
                <ul className="space-y-2 text-green-200 font-mono text-sm">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    hadsxdev@gmail.com
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Subang, Indonesia
                  </li>
                </ul>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection animation="fade-up" duration={1000} delay={600}>
            <div className="border-t border-green-500/30 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center">
              <div className="mb-3 sm:mb-4">
                <p className="text-green-400 font-mono text-xs sm:text-sm mb-1 sm:mb-2">
                  {"[ SYBORG_SYNDICATE_TEAM ]"}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 text-green-200 font-mono text-xs">
                  <div>
                    <span className="text-green-400">{">"}</span> Programmer : Hadi Ramdhani
                  </div>
                  <div>
                    <span className="text-green-400">{">"}</span> Designer : Hadi Ramdhani
                  </div>
                  <div>
                    <span className="text-green-400">{">"}</span> DevOps : Akmal Alhafiz
                  </div>
                </div>
              </div>
              <p className="text-green-300 font-mono text-xs sm:text-sm">
                {"[ © 2024 CodeCrafters Security Team ]"} |
                <SmoothScrollLink href="https://github.com/HadiOnZero/CodeCraftersNewVersion" className="text-green-400 hover:text-green-300 ml-1">
                  {"[ OPEN_SOURCE_PROJECT ]"}
                </SmoothScrollLink>
              </p>
            </div>
          </AnimatedSection>
        </div>
      </footer>
    </div>
  );
}
