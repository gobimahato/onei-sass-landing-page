import { Feature } from "./Feature";

const features = [
  {
    title: "Integration Ecosystem",
    description:
      "Enhance your productivity by connecting with your tools, keeping your essentials in one place.",
  },
  {
    title: "Goal setting and Tracking",
    description:
      "Define and track your goals, breaking down objectives into achievable tasks to keep your targets in sight.",
  },
  {
    title: "Secure Data Encryption",
    description:
      "With end-to-end encryption, your data is securely stored and protected from unauthorized access.",
  },
];

export const Features = () => {
  return (
    <section className="bg-black text-white py-16 sm:py-20 md:py-24">
      <div className="container max-w-7xl px-4 sm:px-8 lg:px-16">
        {/* Heading */}
        <h2 className="text-center font-bold text-4xl sm:text-5xl md:text-6xl leading-tight">
          Everything you need
        </h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-center mt-5 text-base sm:text-lg md:text-xl text-white/70 leading-relaxed">
            Enjoy customizable lists, teamwork tools, and smart tracking all in
            one place. Set tasks, get reminders, and see your progress simply
            and quickly.
          </p>
        </div>

        {/* Features Section */}
        <div className="mt-12 md:mt-16 grid gap-6 sm:gap-8 lg:gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ title, description }, index) => (
            <Feature title={title} description={description} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
