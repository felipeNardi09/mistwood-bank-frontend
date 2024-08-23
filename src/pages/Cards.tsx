import FeatureDescription from "../ui/FeatureDescription";
import FeatureImage from "../ui/FeatureImage";

export default function Cards() {
  return (
    <div className="flex h-full animate-fade-in  items-center justify-center gap-4 text-black">
      <FeatureImage
        src="debit-card.jpeg"
        alt="The credit card of the Mistwood Bank."
        effect="animate-move-in-right"
        imageSize="max-w-[24rem]"
      />
      <div>
        <FeatureDescription
          title="Credit Card"
          description="Experience financial flexibility with the Mistwood Bank Credit Card. Enjoy competitive interest rates, rewards for your purchases, and worldwide acceptance. Whether for everyday expenses or larger purchases, our credit card offers convenience and security, empowering you to manage your finances with ease."
        />

        <FeatureDescription
          title="Debit Card"
          description="The Mistwood Bank Debit Card provides convenient access to your funds with every swipe. Enjoy zero liability protection, easy account management, and access to a global network of ATMs. Make purchases securely online and in-store, and manage your spending effortlessly with real-time transaction alerts and budgeting tools."
        />
      </div>

      <FeatureImage
        src="credit-card.jpeg"
        alt="The debit card of the Mistwood Bank."
        effect="animate-move-in-left"
        imageSize="max-w-[24rem]"
      />
    </div>
  );
}
