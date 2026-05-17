import Link from "next/link"
import { PERSONAL_PORTFOLIO_CATEGORIES } from "@/data/personal-portfolio-data"
import { notFound } from "next/navigation"
import { CustomCursor } from "@/components/custom-cursor"

export function generateStaticParams() {
  return PERSONAL_PORTFOLIO_CATEGORIES.map((category) => ({
    id: category.id,
  }))
}

export default async function PortfolioDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const category = PERSONAL_PORTFOLIO_CATEGORIES.find((c) => c.id === resolvedParams.id)

  if (!category) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-[#0d0d0d] text-white flex flex-col items-center justify-center p-8">
      <CustomCursor />
      <div className="max-w-4xl w-full flex flex-col items-start gap-8">
        <Link 
          href="/" 
          className="text-[#ff3300] hover:underline flex items-center gap-2 font-sans tracking-widest uppercase text-sm"
        >
          ← Back to Home
        </Link>
        
        <h1 className="text-5xl md:text-7xl font-black font-tech tracking-tighter uppercase text-white">
          {category.title}
        </h1>
        
        <div className="flex flex-wrap gap-4 mt-4">
          {category.tags.map((tag, index) => (
            <span key={index} className="px-4 py-2 border border-white/20 rounded-full text-white/70 font-sans text-sm tracking-wider uppercase">
              {tag}
            </span>
          ))}
        </div>

        <div className="w-full h-[1px] bg-white/20 my-8" />

        <div className="w-full aspect-video relative bg-white/5 rounded-lg overflow-hidden flex items-center justify-center">
          {category.hoverImage ? (
            <img 
              src={category.hoverImage} 
              alt={category.title} 
              className="w-full h-full object-cover"
            />
          ) : (
            <p className="text-white/30 font-sans tracking-widest">NO IMAGE AVAILABLE</p>
          )}
        </div>
        
        <p className="text-white/60 font-sans leading-relaxed max-w-2xl text-lg mt-8">
          Detailed project description will be added here.
        </p>
      </div>
    </main>
  )
}
