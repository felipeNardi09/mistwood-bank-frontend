interface FeatureDescription {
  title: string;
  description: string;
}

export default function FeatureDescription({
  title,
  description,
}: FeatureDescription) {
  return (
    <div className="m-auto min-h-[10rem] max-w-[30rem]">
      <h1 className="m-2 text-center text-xl font-semibold tracking-wide">
        {title}
      </h1>
      <p className="text-justify text-lg">{description}</p>
    </div>
  );
}
