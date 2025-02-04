const challenges = [
  {
    title: "Forgetting words despite looking them up repeatedly",
    description: "New words don’t stick when they aren’t learned in a personal context.",
  },
  {
    title: "Making word notes feels time-consuming and inefficient",
    description:
      "Organizing vocabulary should enhance learning, not feel like extra work.",
  },
  {
    title: "Uncertainty about grammar and natural phrasing in your notes",
    description: "You’re unsure if your self-written sentences sound correct and natural.",
  },
  {
    title: "Scattered word notes make it hard to review",
    description: "Your vocabulary is spread across different apps, notebooks, and platforms.",
  }
]

const Challenge = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">The Challenge</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Struggling to retain and use new words?
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            In language learning, many learners face common obstacles:
          </p>
        </div>
        <div className="mt-10">
          <ul className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {challenges.map((challenge, index) => (
              <li key={index}>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                      <svg
                        className="h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">{challenge.title}</h3>
                    <p className="mt-2 text-base text-gray-500">{challenge.description}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Challenge
