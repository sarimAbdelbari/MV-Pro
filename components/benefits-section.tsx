import { Check, Clock, Globe, Code2, ArrowRight } from "lucide-react"
import AnimateInView from "@/components/animate-in-view"
import StaggerChildren from "@/components/stagger-children"
import AnimatedChild from "@/components/animated-child"
import { Button } from "@/components/ui/button-enhanced"

const benefits = [
  {
    title: "Fast Delivery",
    description: "Get your MVP in just 2-4 weeks, not months.",
    icon: <Clock className="h-6 w-6 text-blue-500" />,
  },
  {
    title: "Algerian-Based",
    description: "Local team that understands the regional market.",
    icon: <Globe className="h-6 w-6 text-blue-500" />,
  },
  {
    title: "Tech Expertise",
    description: "Skilled developers in MERN stack and AI technologies.",
    icon: <Code2 className="h-6 w-6 text-blue-500" />,
  },
  {
    title: "Affordable Pricing",
    description: "Competitive rates without compromising quality.",
    icon: <Check className="h-6 w-6 text-blue-500" />,
  },
]

export default function BenefitsSection() {
  return (
    <section className="py-20 dark:bg-gray-950 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateInView>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">Why Choose Us</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              We're not just developers – we're your strategic partners in bringing your vision to life.
            </p>
          </div>
        </AnimateInView>

        <StaggerChildren staggerDelay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <AnimatedChild key={index}>
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-all duration-300 h-full group hover:-translate-y-1 hover:border-blue-200 dark:hover:border-blue-500">
                  <div className="h-12 w-12 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">{benefit.description}</p>
                </div>
              </AnimatedChild>
            ))}
          </div>
        </StaggerChildren>

        <AnimateInView delay={0.3} direction="up" className="mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white group hover:shadow-xl hover:shadow-blue-600/20 dark:hover:shadow-blue-800/20 transition-all duration-300">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to build your MVP?</h3>
                <p className="text-white/80 text-lg mb-6">
                  Let's turn your idea into a working product that your users will love.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button
                    asChild
                    variant="default"
                    rounded="full"
                    className="inline-flex items-center px-6 py-3 bg-white text-blue-600 font-medium hover:bg-blue-50 hover:scale-105 group"
                  >
                    <a href="#contact">
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </a>
                  </Button>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="relative">
                  <div className="absolute -inset-1 bg-white/20 rounded-lg blur-xl opacity-70 group-hover:opacity-90 transition-opacity duration-300"></div>
                  <div className="relative bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 transition-transform duration-300 group-hover:scale-105">
                    <div className="space-y-4">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="flex items-start gap-3">
                          <div className="h-6 w-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                            <Check className="h-3 w-3 text-white" />
                          </div>
                          <div className="h-2 bg-white/20 rounded-full w-full"></div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimateInView>
      </div>
    </section>
  )
}
