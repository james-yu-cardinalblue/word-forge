const steps = [
  {
    title: "Sign Up and Onboard Your Team",
    description:
      "Create your StreamLine account and invite your team members. Set up your workspace and customize it to fit your needs.",
  },
  {
    title: "Create and Assign Tasks",
    description:
      "Easily create tasks, set priorities, and assign them to team members. Use our intuitive interface to organize your workflow.",
  },
  {
    title: "Track Progress and Collaborate",
    description:
      "Monitor project progress in real-time, collaborate with your team, and use analytics to optimize your workflow.",
  },
]

const HowItWorks = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">How It Works</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Streamline your workflow in 3 simple steps
          </p>
        </div>
        <div className="mt-10">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
            {steps.map((step, index) => (
              <div key={step.title} className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                  <span className="text-lg font-bold">{index + 1}</span>
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{step.title}</p>
                <p className="mt-2 ml-16 text-base text-gray-500">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks

