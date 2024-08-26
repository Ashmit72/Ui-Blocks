import React from 'react'

function SocialProofCompanies1() {


    const companies = [
        'Radian.png',
        'Company2.png',
        'Company3.png',
        'Company4.png',
        'Company5.png',
        'Radian.png',
        'Company4.png',
        'Company4.png',
        'Company4.png'
    ];


    return (
        <div className='min-w-screen bg-background'>
            <div className="max-w-screen-xl mx-auto flex flex-col items-center px-6 py-20  gap-10">
                <div className="max-w-screen-lg text-center text-lg font-medium text-foreground">
                    Thousands of businesses trust Radian to build their products
                </div>
                <div
                    x-data="{}"
                    x-init="$nextTick(() => {
                            let ul = $refs.logos;
                            ul.insertAdjacentHTML('afterend', ul.outerHTML);
                            ul.nextSibling.setAttribute('aria-hidden', 'true');
                            })"
                    className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
                >
                    <ul x-ref="logos" className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
                        {companies.map((company, index) => (
                            <li key={index}>
                                <img className="h-8" src={company} />
                            </li>
                        ))}
                    </ul>
                    <ul x-ref="logos" className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
                        {companies.map((company, index) => (
                            <li key={index}>
                                <img className="h-8" src={company} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default SocialProofCompanies1