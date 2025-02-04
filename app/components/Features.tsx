import { BookA, Bot, Zap, ChartColumnIncreasing } from "lucide-react"

const features = [
  {
    name: "Your Personal Dictionary",
    description: "Create and customize your own dictionary with fully personalized content tailored to your learning needs.",
    icon: BookA,
  },
  {
    name: "AI-Powered Simplicity",
    description: "Adding new words is effortless—AI provides definitions, examples, and suggestions instantly.",
    icon: Bot,
  },
  {
    name: "Smart Flashcards (Optional)",
    description: "Review words efficiently with an integrated flashcard system designed to reinforce memory.",
    icon: Zap,
  },
  {
    name: "Learning Insights",
    description: "Track your progress with analytics—see how many words you’ve added and reviewed over time.",
    icon: ChartColumnIncreasing,
  },
]

const Features = () => {
  return (
    <div className="py-12 bg-white" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to build your vocabulary effortlessly
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            WordForge offers a powerful set of features designed to make learning smarter, not harder.
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

export default Features

