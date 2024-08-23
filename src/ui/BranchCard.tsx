interface BranchCard {
  branchLocation: string;
  branchDescription: string;
  location: string;
}

export default function BranchCard({
  branchLocation,
  branchDescription,
  location,
}: BranchCard) {
  return (
    <div className="mx-4 my-2 flex items-center gap-4 rounded-2xl border bg-slate-50 bg-opacity-40 p-2 transition-all duration-200 hover:scale-105 hover:shadow-md">
      <div className="m-auto text-center">
        <img
          className="max-w-[14rem] rounded-3xl"
          src={`${location}.jpeg`}
          alt=""
        />
      </div>
      <div className="m-auto w-full max-w-[50rem] p-1">
        <h1 className="m-2 text-center text-xl font-semibold tracking-wide">
          {branchLocation}
        </h1>
        <p className="text-justify">{branchDescription}</p>
      </div>
    </div>
  );
}
