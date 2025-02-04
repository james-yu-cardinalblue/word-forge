import { Zap, Users, BarChart, Lock } from "lucide-react"

const features = [
  {
    name: "Lightning Fast",
    description: "Our platform is optimized for speed, ensuring you can work efficiently without any lag.",
    icon: Zap,
  },
  {
    name: "Team Collaboration",
    description: "Easily collaborate with your team members in real-time, boosting productivity and communication.",
    icon: Users,
  },
  {
    name: "Advanced Analytics",
    description: "Gain valuable insights into your workflow with our powerful analytics and reporting tools.",
    icon: BarChart,
  },
  {
    name: "Secure & Reliable",
    description: "Your data is safe with us. We use industry-leading security measures to protect your information.",
    icon: Lock,
  },
]

const Features = () => {
  return (
    <div className="py-12 bg-white" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to streamline your workflow
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            StreamLine offers a comprehensive set of features designed to help you work smarter, not harder.
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

