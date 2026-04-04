"use client"

import { CustomCursor } from "@/components/custom-cursor"
import { SmoothScroll } from "@/components/smooth-scroll"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { PortfolioSlider } from "@/components/portfolio-slider"
import { PersonalPortfolioSection } from "@/components/personal-portfolio-section"
import { StudioSection } from "@/components/studio-section"
import { WorkSection } from "@/components/work-section"
import { ServicesSection } from "@/components/services-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <SmoothScroll>
      <CustomCursor />
      <Header />
      <main>
        <HeroSection />
        <PortfolioSlider />
        <PersonalPortfolioSection />
        <StudioSection />
        <WorkSection />
        <ServicesSection />
        <ContactSection />
      </main>
      <Footer />
    </SmoothScroll>
  )
}
