interface FeatureImage {
  src: string;
  alt: string;
  effect?: string;
  imageSize: string;
}

export default function FeatureImage({
  src,
  alt,
  effect,
  imageSize,
}: FeatureImage) {
  console.log(alt, effect);

  return (
    <div>
      <img
        className={`${imageSize} ${effect} rounded-3xl`}
        src={src}
        alt={alt}
      />
    </div>
  );
}
