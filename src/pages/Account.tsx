import FeatureDescription from "../ui/FeatureDescription";
import FeatureImage from "../ui/FeatureImage";

export default function Account() {
  return (
    <div className="flex h-full animate-fade-in  items-center justify-center gap-4 text-black">
      <FeatureImage
        src="savings.jpeg"
        alt="Photo of a table with a mini branch with some money to save."
        effect="animate-move-in-right"
        imageSize="max-w-[24rem]"
      />
      <div>
        <FeatureDescription
          title="Checking Account"
          description="Our Checking Account provides quick and convenient access to your
            funds with modern features to simplify your daily financial needs.
            Enjoy no monthly fees, seamless online banking, and a free debit
            card for everyday purchases."
        />

        <FeatureDescription
          title="Savings Account"
          description=" Our Savings Account helps you grow your money effortlessly with
            competitive interest rates and no monthly fees. Enjoy secure online
            access, easy transfers, and the peace of mind that comes with FDIC
            insurance on your savings."
        />
      </div>

      <FeatureImage
        src="checking.jpeg"
        alt="Photo of a PC showing a happy girl and her checking account."
        effect="animate-move-in-left"
        imageSize="max-w-[24rem]"
      />
    </div>
  );
}
