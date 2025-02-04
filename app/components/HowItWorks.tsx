const steps = [
  {
    title: "Discover",
    description:
      "Enter a sentence with a word you want to learn. WordForge automatically provides its definition and generates example sentences in the same context.",
  },
  {
    title: "Refine",
    description:
      "Write your own sentence using the word or choose from personalized AI suggestions. WordForge proofreads to ensure perfect grammar and natural phrasing.",
  },
  {
    title: "Save",
    description:
      "Make any final edits, then save it to your personal dictionary. Revisit and update anytime for better retention.",
  },
]

const HowItWorks = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">How It Works</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Build your own dictionary in 3 simple steps:
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

