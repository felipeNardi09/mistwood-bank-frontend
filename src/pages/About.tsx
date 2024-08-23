const aboutContent = [
  {
    title: "Purpose",
    description:
      "At Mistwood Bank, our purpose is to revolutionize digital banking by offering innovative and accessible financial solutions that empower our clients to manage their finances efficiently and securely.",
  },
  {
    title: "Mission",
    description:
      "Our mission is to provide high-quality digital financial services focused on simplicity, security, and convenience, meeting our clients' needs with personalized products and exceptional support.",
  },
  {
    title: "Vision",
    description:
      " To be the preferred digital bank for individuals and businesses, recognized for innovation, reliability, and customer excellence, leading the digital transformation in banking while promoting financial inclusion and sustainable economic growth.",
  },
];
const valuesContent = {
  title: "Values",
  values: [
    {
      subtitle: "Transparency",
      description:
        "Upholding clarity and honesty in all our operations, ensuring clients receive accurate information.",
    },
    {
      subtitle: "Security",
      description:
        "Prioritizing data protection and privacy with rigorous cybersecurity measures.",
    },
    {
      subtitle: "Customer-Centric",
      description:
        "Focusing on clients' needs and expectations with dedicated support and personalized solutions.",
    },
    {
      subtitle: "Sustainability",
      description:
        "Promoting responsible and sustainable financial practices for a balanced economic future.",
    },
  ],
};
export default function About() {
  return (
    <div className="flex h-full animate-fade-in items-center justify-center gap-4 text-black">
      <div className="flex w-7/12 flex-col items-center">
        <h1 className="my-2 inline-block text-center text-xl font-bold tracking-wide">
          About Mistwood Bank
        </h1>

        {aboutContent.map((topic) => (
          <div className="space-y-1">
            <h2 className="text-center text-lg font-semibold tracking-wide">
              {topic.title}
            </h2>
            <p className="text-md rounded bg-primary bg-opacity-5 px-2 py-1">
              {topic.description}
            </p>
          </div>
        ))}

        <div className="text-center">
          <h2 className="text-xl font-semibold tracking-wide">
            {valuesContent.title}
          </h2>
          <ul className="grid grid-cols-2 grid-rows-2 gap-1">
            {valuesContent.values.map((value) => (
              <li>
                <h3 className="text-lg font-semibold tracking-wide">
                  {value.subtitle}
                </h3>
                <p className="text-md rounded bg-primary bg-opacity-5 px-2 py-1">
                  {value.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
