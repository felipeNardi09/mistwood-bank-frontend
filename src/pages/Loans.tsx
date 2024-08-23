import FeatureImage from "../ui/FeatureImage";
import LoanTypeCard from "../ui/LoanTypeCard";

export default function Loans() {
  return (
    <div className="animate-fade-in">
      <div className="m-4 flex">
        <div className="space-y-2">
          <FeatureImage
            src="loans-1.jpeg"
            alt="Mistwood members in front of a branch."
            imageSize="max-w-[16rem]"
          />

          <FeatureImage
            src="loan.jpeg"
            alt="A couple in front of a personal computer laughing."
            imageSize="max-w-[16rem]"
          />
        </div>

        <div className="flex flex-col items-center justify-around">
          <div className="m-auto w-[90%]">
            <h1 className="mb-2 text-center text-xl font-semibold tracking-wide">
              Loans
            </h1>
            <p className="text-justify text-lg">
              At Mistwood Bank, we understand that life's big moments often
              require a little extra financial support. That's why we offer a
              variety of loan options designed to meet your unique needs and
              help you achieve your goals with confidence. Whether you're
              looking to buy a new home, start a business, or consolidate debt,
              our flexible loan solutions and competitive interest rates make
              borrowing easy and affordable.
            </p>
          </div>
          <div className="m-auto flex w-[95%] gap-4">
            <LoanTypeCard
              title="Home Loans"
              description=" Turn your dream home into a reality with our competitive home
                loan options. Choose from fixed or variable rates, with interest
                rates as low as 3.75% APR for qualified borrowers. We offer a
                range of term lengths and down payment options to fit your
                budget."
            />

            <LoanTypeCard
              title="Business Loans"
              description=" Fuel your business growth with our tailored business loan
                solutions. Whether you need capital for expansion, equipment, or
                working capital, we provide flexible loan amounts and terms.
                Interest rates start at 4.25% APR, with customizable repayment
                plans to suit your business needs."
            />

            <LoanTypeCard
              title="Personal Loans"
              description=" Our personal loans are perfect for covering unexpected expenses,
                home improvements, or major purchases. Enjoy fixed interest
                rates starting as low as 5.99% APR, with loan amounts ranging
                from $1,000 to $50,000 and terms up to 5 years."
            />
          </div>
        </div>
      </div>
    </div>
  );
}
