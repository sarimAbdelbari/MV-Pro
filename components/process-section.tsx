import { Lightbulb, Rocket, Zap } from "lucide-react"
import AnimateInView from "@/components/animate-in-view"
import StaggerChildren from "@/components/stagger-children"
import AnimatedChild from "@/components/animated-child"

const steps = [
  {
    title: "You pitch the idea",
    description: "Share your vision and requirements with our team. We'll help refine the concept.",
    icon: <Lightbulb className="h-10 w-10 text-amber-500" />,
    gradient: "from-amber-500 to-yellow-400",
  },
  {
    title: "We prototype fast",
    description: "Our team builds a functional MVP in 2-4 weeks using the MERN stack and AI tools.",
    icon: <Zap className="h-10 w-10 text-blue-500" />,
    gradient: "from-blue-500 to-cyan-400",
  },
  {
    title: "You launch & test",
    description: "Deploy your MVP to real users, gather feedback, and iterate based on market response.",
    icon: <Rocket className="h-10 w-10 text-purple-500" />,
    gradient: "from-purple-500 to-pink-400",
  },
]

export default function ProcessSection() {
  return (
    <section id="process" className="py-20 dark:bg-gray-950 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateInView>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">How It Works</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Our streamlined process gets your MVP from concept to launch in record time.
            </p>
          </div>
        </AnimateInView>

        <div className="relative">
          {/* Connection line */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 dark:from-blue-900/30 dark:via-purple-900/30 dark:to-pink-900/30 hidden md:block"></div>

          <StaggerChildren staggerDelay={0.2}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {steps.map((step, index) => (
                <AnimatedChild key={index} direction={index % 2 === 0 ? "up" : "down"}>
                  <div className="relative group">
                    <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-100 dark:border-gray-700 h-full flex flex-col items-center text-center relative z-10 transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-xl">
                      <div className="mb-6 relative">
                        <div
                          className={`absolute inset-0 bg-gradient-to-br ${step.gradient} rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-300`}
                        ></div>
                        <div className="h-20 w-20 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center shadow-md relative z-10 transition-transform duration-300 group-hover:scale-105">
                          <div className="transition-transform duration-300 group-hover:scale-110">{step.icon}</div>
                          <div className="absolute -right-1 -bottom-1 h-6 w-6 rounded-full bg-white dark:bg-gray-700 flex items-center justify-center text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-600 font-bold text-sm">
                            {index + 1}
                          </div>
                        </div>
                      </div>
                      <h3 className="text-xl font-bold mb-3 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">{step.description}</p>
                    </div>
                  </div>
                </AnimatedChild>
              ))}
            </div>
          </StaggerChildren>
        </div>
      </div>
    </section>
  )
}
