import Link from "next/link"
import { ArrowRight } from "lucide-react"
import AnimateInView from "@/components/animate-in-view"
import StaggerChildren from "@/components/stagger-children"
import AnimatedChild from "@/components/animated-child"
import { Button } from "@/components/ui/button-enhanced"

export default function HeroSection() {
  return (
    <section className="pt-32 pb-20 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <StaggerChildren delay={0.2} staggerDelay={0.15}>
            <AnimatedChild>
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-sm font-medium mb-4">
                <span className="relative flex h-2 w-2 mr-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 dark:bg-blue-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500 dark:bg-blue-400"></span>
                </span>
                Algeria's Premier MVP Agency
              </div>
            </AnimatedChild>
            <AnimatedChild>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-blue-800 to-purple-900 dark:from-gray-100 dark:via-blue-300 dark:to-purple-400">
                Turn Your Startup Ideas Into Reality
              </h1>
            </AnimatedChild>
            <AnimatedChild>
              <p className="mt-6 text-xl text-gray-600 dark:text-gray-400 max-w-lg">
                We help founders quickly build MVPs using the MERN stack and AI tools. Launch faster, validate sooner,
                succeed quicker.
              </p>
            </AnimatedChild>
            <AnimatedChild>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Button asChild size="lg" variant="gradient" rounded="full" className="px-8 py-6 text-lg">
                  <Link href="#contact">
                    Book a Free Call
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  rounded="full"
                  className="px-8 py-6 text-lg border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300 hover:border-blue-300 dark:hover:border-blue-500"
                >
                  <Link href="#portfolio">View Our Work</Link>
                </Button>
              </div>
            </AnimatedChild>
            <AnimatedChild>
              <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400 mt-8">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="h-8 w-8 rounded-full border-2 border-white dark:border-gray-800 bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-xs font-medium"
                    >
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <p>Trusted by 20+ startups in Algeria</p>
              </div>
            </AnimatedChild>
          </StaggerChildren>
          <AnimateInView delay={0.5} direction="left">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg blur opacity-30 animate-pulse group-hover:opacity-50 transition-opacity duration-300"></div>
              <div className="relative bg-white dark:bg-gray-800 rounded-lg p-6 shadow-xl transition-all duration-300 group-hover:-translate-y-1">
                <div className="aspect-video rounded-lg overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 flex items-center justify-center">
                  <img
                    src="/placeholder.svg?height=400&width=600"
                    alt="Startup illustration"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg p-4 shadow-lg border border-gray-100 dark:border-gray-700 transition-all duration-300 group-hover:shadow-xl">
                  <div className="flex items-center space-x-3">
                    <div className="h-10 w-10 rounded-full bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center text-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900 dark:text-gray-100">Fast Delivery</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">2-4 weeks turnaround</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimateInView>
        </div>
      </div>
    </section>
  )
}
