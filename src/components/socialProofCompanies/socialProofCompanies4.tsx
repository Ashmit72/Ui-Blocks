import data from "./data.json"

const socialProofCompanies3 = () => {
  return (
    <div className="max-w-screen bg-background" >
        <div className="max-w-screen-xl mx-auto" >
          <div className="flex px-6 py-[60px] flex-col items-center justify-center gap-10">
            <h1 className="text-[18px] text-center" >Thousands of businesses trust Radian to build their products</h1>
            <ul className="grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-10 px-6">
                    {data.companies.map((company, index) => (
                            <li key={index} className='bg-background lg:h-10 md:h-8 h-6'>
                                <img className="h-full w-auto saturate-200 contrast-[300%]  dark:invert brightness-[70%] dark:brightness-[59%] grayscale" src={company} />
                            </li>
                        ))}
                    </ul>
          </div>
        </div>
    </div>
  )
}

export default socialProofCompanies3