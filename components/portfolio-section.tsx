import { ArrowUpRight } from "lucide-react"
import AnimateInView from "@/components/animate-in-view"
import StaggerChildren from "@/components/stagger-children"
import AnimatedChild from "@/components/animated-child"
import { Button } from "@/components/ui/button-enhanced"
import { Card, CardContent } from "@/components/ui/card-enhanced"

const projects = [
  {
    title: "HealthTech Platform",
    description: "A telemedicine solution for remote patient monitoring",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["MERN Stack", "AI", "Healthcare"],
  },
  {
    title: "E-commerce Marketplace",
    description: "A platform connecting local artisans with global buyers",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "EdTech Solution",
    description: "An AI-powered learning platform for students",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Next.js", "AI", "Education"],
  },
]

export default function PortfolioSection() {
  return (
    <section
      id="portfolio"
      className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900 transition-colors duration-300"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateInView>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">Our Portfolio</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Check out some of the successful MVPs we've built for startups.
            </p>
          </div>
        </AnimateInView>

        <StaggerChildren staggerDelay={0.15}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <AnimatedChild key={index} direction="up">
                <Card hoverEffect="lift" className="overflow-hidden border-0 shadow-lg group dark:bg-gray-800">
                  <div className="relative overflow-hidden">
                    <div className="aspect-video bg-gray-100 dark:bg-gray-700">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end">
                      <div className="p-6 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <Button
                          variant="outline"
                          rounded="full"
                          className="bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30 group"
                        >
                          View Project{" "}
                          <ArrowUpRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </Button>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 transition-all duration-300 hover:bg-blue-200 dark:hover:bg-blue-800/40"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </AnimatedChild>
            ))}
          </div>
        </StaggerChildren>
      </div>
    </section>
  )
}
