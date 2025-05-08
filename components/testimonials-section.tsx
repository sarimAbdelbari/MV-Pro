import { Star } from "lucide-react"
import AnimateInView from "@/components/animate-in-view"
import StaggerChildren from "@/components/stagger-children"
import AnimatedChild from "@/components/animated-child"
import { Card, CardContent } from "@/components/ui/card-enhanced"

const testimonials = [
  {
    name: "Sarah Benali",
    role: "Founder, HealthConnect",
    content:
      "MVPro helped us build our telemedicine platform in just 3 weeks. Their expertise in MERN stack and AI integration was exactly what we needed to launch quickly and secure our first round of funding.",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 5,
  },
  {
    name: "Karim Hadj",
    role: "CEO, LocalMarket",
    content:
      "Working with MVPro was a game-changer for our e-commerce startup. They understood our vision and delivered a high-quality MVP that impressed our investors and early users alike.",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 5,
  },
  {
    name: "Amina Tazi",
    role: "Co-founder, EduTech",
    content:
      "The team at MVPro are true professionals. They built our learning platform with all the features we needed while keeping the design clean and user-friendly. Highly recommended!",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 4,
  },
]

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateInView>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">What Our Clients Say</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Don't just take our word for it – hear from the startups we've helped.
            </p>
          </div>
        </AnimateInView>

        <StaggerChildren staggerDelay={0.15}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <AnimatedChild key={index} direction={index % 2 === 0 ? "up" : "down"}>
                <Card
                  hoverEffect="glow"
                  className="border-0 shadow-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm h-full group"
                >
                  <CardContent className="p-8">
                    <div className="flex items-center gap-1 mb-4">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${
                            i < testimonial.rating
                              ? "text-yellow-400 fill-yellow-400"
                              : "text-gray-300 dark:text-gray-600"
                          } transition-transform duration-300 group-hover:scale-110 group-hover:rotate-[5deg]`}
                          style={{ transitionDelay: `${i * 50}ms` }}
                        />
                      ))}
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                    <div className="flex items-center">
                      <div className="h-12 w-12 rounded-full overflow-hidden mr-4 transition-transform duration-300 group-hover:scale-110">
                        <img
                          src={testimonial.avatar || "/placeholder.svg"}
                          alt={testimonial.name}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-bold dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                          {testimonial.name}
                        </h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                      </div>
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
