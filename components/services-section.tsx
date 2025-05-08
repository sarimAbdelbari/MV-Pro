import { Code, Layers, MessageSquare, BarChart3 } from "lucide-react"
import AnimateInView from "@/components/animate-in-view"
import StaggerChildren from "@/components/stagger-children"
import AnimatedChild from "@/components/animated-child"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card-enhanced"

const services = [
  {
    title: "Landing Pages",
    description: "Conversion-focused landing pages that turn visitors into customers.",
    icon: <Layers className="h-10 w-10 text-blue-500" />,
    gradient: "from-blue-500 to-cyan-400",
  },
  {
    title: "MVPs",
    description: "Functional prototypes of your product idea ready for market testing.",
    icon: <Code className="h-10 w-10 text-purple-500" />,
    gradient: "from-purple-500 to-pink-400",
  },
  {
    title: "AI Chatbots",
    description: "Intelligent conversational interfaces to engage with your users.",
    icon: <MessageSquare className="h-10 w-10 text-green-500" />,
    gradient: "from-green-500 to-emerald-400",
  },
  {
    title: "SaaS Platforms",
    description: "Scalable software solutions with subscription-based models.",
    icon: <BarChart3 className="h-10 w-10 text-orange-500" />,
    gradient: "from-orange-500 to-amber-400",
  },
]

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateInView>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">What We Build</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              We specialize in creating digital products that help startups validate their ideas and grow their
              business.
            </p>
          </div>
        </AnimateInView>

        <StaggerChildren staggerDelay={0.15}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <AnimatedChild key={index}>
                <div className="group h-full">
                  <Card
                    hoverEffect="lift"
                    className="h-full border-0 shadow-lg overflow-hidden bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm"
                  >
                    <CardHeader className="pb-2">
                      <div className="mb-4 relative">
                        <div
                          className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-full opacity-10 group-hover:opacity-30 transition-opacity duration-300`}
                        ></div>
                        <div className="relative z-10 transition-transform duration-300 group-hover:scale-110">
                          {service.icon}
                        </div>
                      </div>
                      <CardTitle className="text-xl dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                        {service.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-gray-600 dark:text-gray-400 text-base">
                        {service.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </div>
              </AnimatedChild>
            ))}
          </div>
        </StaggerChildren>
      </div>
    </section>
  )
}
