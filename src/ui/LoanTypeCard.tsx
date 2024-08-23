interface LoanCard {
  title: string;
  description: string;
}

export default function LoanTypeCard({ title, description }: LoanCard) {
  return (
    <div className="flex flex-col  rounded-3xl border px-6 py-2 shadow-md duration-200 hover:scale-105 hover:ring-2 hover:ring-dark">
      <h2 className="text-center text-xl font-semibold tracking-wide">
        {title}
      </h2>
      <p className="inline-block flex-1 text-justify text-lg">{description}</p>
    </div>
  );
}
