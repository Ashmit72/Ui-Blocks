import data from "./data.json";

const SocialProofCompanies3 = () => {

  const firstRowItems = data.companies.slice(0, 6); // First 6 items
  const secondRowItems = data.companies.slice(6, 10); // Next 4 items

  return (
    <div className="max-w-screen bg-background">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex px-6 py-[60px] flex-col items-center justify-center gap-10">
          <h1 className="text-[18px] text-center">
            Thousands of businesses trust Radian to build their products
          </h1>
          <ul className="grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2 gap-10 px-6">
            {firstRowItems.map((company, index) => (
              <li key={index} className="bg-background md:h-10 sm:h-8 h-6 flex items-center justify-center">
                <img className="h-full w-auto dark:invert dark:grayscale dark:brightness-[59%] dark:saturate-200 dark:contrast-[300%]" src={company} />
              </li>
            ))}
          </ul>
          <ul className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-2 gap-10 px-6">
            {secondRowItems.map((company, index) => (
              <li key={index} className="bg-background md:h-10 sm:h-8 h-6 flex items-center justify-center">
                <img className="h-full w-auto dark:invert dark:grayscale dark:brightness-[59%] dark:saturate-200 dark:contrast-[300%]" src={company} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SocialProofCompanies3;
