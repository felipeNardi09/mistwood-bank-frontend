import BranchCard from "../ui/BranchCard";

export default function Branches() {
  return (
    <div className="grid h-full animate-fade-in grid-cols-2 grid-rows-2 items-center  justify-center gap-4 p-2 text-black">
      <BranchCard
        branchLocation="New York"
        branchDescription="Situated in the vibrant Financial District, the Mistwood New York Branch provides a full range of banking services tailored to the dynamic needs of our clients. Offering expert financial advice, support for international transactions, and personalized customer service, we deliver a seamless banking experience in the heart of New York City."
        location="new-york"
      />
      <BranchCard
        branchLocation="London"
        branchDescription="Located in the historic City of London, the Mistwood London Branch offers comprehensive banking solutions designed to cater to the financial needs of our clients. With expert financial advice, seamless international transaction support, and dedicated customer service, we ensure a premium banking experience in the financial heart of London."
        location="london"
      />
      <BranchCard
        branchLocation="Tokyo"
        branchDescription=" Located in the bustling Shibuya district, the Mistwood Tokyo Branch
            offers comprehensive banking services to meet the diverse needs of
            our clients. From expert financial advice and international
            transaction support to personalized customer service, we ensure a
            seamless banking experience in the heart of Tokyo."
        location="tokyo"
      />
      <BranchCard
        branchLocation="Melbourne"
        branchDescription="Nestled in the bustling Central Business District, the Mistwood Melbourne Branch provides tailored banking services to meet the unique requirements of our clients. Offering expert financial advice, support for international transactions, and personalized customer service, we deliver a seamless banking experience in the heart of Melbourne."
        location="melbourne"
      />
    </div>
  );
}
