import { Check } from "lucide-react"

const plans = [
  {
    name: "Basic",
    price: 29,
    features: ["5 team members", "10GB storage", "Basic analytics", "Email support"],
  },
  {
    name: "Pro",
    price: 79,
    features: ["Unlimited team members", "100GB storage", "Advanced analytics", "Priority email support", "API access"],
  },
  {
    name: "Enterprise",
    price: 199,
    features: [
      "Unlimited everything",
      "Dedicated account manager",
      "Custom integrations",
      "24/7 phone support",
      "On-premise deployment option",
    ],
  },
]

const Pricing = () => {
  return (
    <section className="bg-gray-100 py-12 sm:py-16 lg:py-20" id="pricing">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Simple, transparent pricing</h2>
          <p className="mt-4 text-lg text-gray-500">Choose the plan that's right for your team</p>
        </div>
        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <div key={plan.name} className="rounded-lg bg-white p-8 shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900">{plan.name}</h3>
              <p className="mt-4 text-5xl font-bold tracking-tight text-gray-900">
                ${plan.price}
                <span className="text-xl font-normal text-gray-500">/mo</span>
              </p>
              <ul className="mt-6 space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <Check className="h-5 w-5 text-green-500" />
                    <span className="ml-3 text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="mt-8 w-full rounded-md bg-blue-600 py-3 px-4 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                Get started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing

