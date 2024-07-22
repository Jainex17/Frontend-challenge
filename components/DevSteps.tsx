import Image from "next/image";

export const DevSteps = () => {
  return <section className="bg-white">
    <div className="px-28 py-20">
    <h2 className="text-3xl font-bold">Application Development Stages</h2>

    <div className="flex my-10 justify-between md:gap-20 md:flex-row flex-col">
        <div className="flex flex-col gap-5">
            <div className="bg-white p-5 rounded-lg cs-box-shadow">
                <div className="flex gap-4 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} viewBox="0 0 48 48"><g fill="none" stroke="#80A948" strokeWidth={4}><path strokeLinejoin="round" d="M44 5H4v12h40z"></path><path strokeLinecap="round" strokeLinejoin="round" d="m4 41.03l12.176-12.3l6.579 6.3L30.798 27l4.48 4.368"></path><path strokeLinecap="round" d="M44 16.172v26m-40-26v14M13.016 43H44M17 11h21m-28-.003h1"></path></g></svg>
                    <h4 className="text-lg font-semibold">Analysis</h4>
                </div>
                <p className="text-sm mt-4">We craft precise technical specs, aligning with your business, technology, and user requirements.</p>
            </div>

            <div className="bg-white p-5 rounded-lg cs-box-shadow">
                <div className="flex gap-4 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} viewBox="0 0 48 48"><g fill="none" stroke="#80A948" strokeWidth={4}><path strokeLinejoin="round" d="M44 5H4v12h40z"></path><path strokeLinecap="round" strokeLinejoin="round" d="m4 41.03l12.176-12.3l6.579 6.3L30.798 27l4.48 4.368"></path><path strokeLinecap="round" d="M44 16.172v26m-40-26v14M13.016 43H44M17 11h21m-28-.003h1"></path></g></svg>
                    <h4 className="text-lg font-semibold">Design</h4>
                </div>
                <p className="text-sm mt-4">We adapt the customer&aposs corporate identity to the platform guidelines. We draw convenient and understandable interfaces.</p>
            </div>

            <div className="bg-white p-5 rounded-lg cs-box-shadow">
                <div className="flex gap-4 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} viewBox="0 0 48 48"><g fill="none" stroke="#80A948" strokeWidth={4}><path strokeLinejoin="round" d="M44 5H4v12h40z"></path><path strokeLinecap="round" strokeLinejoin="round" d="m4 41.03l12.176-12.3l6.579 6.3L30.798 27l4.48 4.368"></path><path strokeLinecap="round" d="M44 16.172v26m-40-26v14M13.016 43H44M17 11h21m-28-.003h1"></path></g></svg>
                    <h4 className="text-lg font-semibold">Devlopment</h4>
                </div>
                <p className="text-sm mt-4">We create an extensible architecture, write clean and stable code. We integrate with customer technologies.</p>
            </div>
        </div>
        <div className="hidden lg:block">
            <Image src={"/hero3.png"} width={500} height={500} alt="hero1" className="w-full" />
        </div>
        <div className="flex flex-col gap-5 md:mt-0 mt-5">
            <div className="bg-white p-5 rounded-lg cs-box-shadow">
                <div className="flex gap-4 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} viewBox="0 0 48 48"><g fill="none" stroke="#80A948" strokeWidth={4}><path strokeLinejoin="round" d="M44 5H4v12h40z"></path><path strokeLinecap="round" strokeLinejoin="round" d="m4 41.03l12.176-12.3l6.579 6.3L30.798 27l4.48 4.368"></path><path strokeLinecap="round" d="M44 16.172v26m-40-26v14M13.016 43H44M17 11h21m-28-.003h1"></path></g></svg>
                    <h4 className="text-lg font-semibold">Testing</h4>
                </div>
                <p className="text-sm mt-4">We carry out functional testing and do bug fixes. We adapt the application to different phone resolutions</p>
            </div>
            
            <div className="bg-white p-5 rounded-lg cs-box-shadow">
                <div className="flex gap-4 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} viewBox="0 0 48 48"><g fill="none" stroke="#80A948" strokeWidth={4}><path strokeLinejoin="round" d="M44 5H4v12h40z"></path><path strokeLinecap="round" strokeLinejoin="round" d="m4 41.03l12.176-12.3l6.579 6.3L30.798 27l4.48 4.368"></path><path strokeLinecap="round" d="M44 16.172v26m-40-26v14M13.016 43H44M17 11h21m-28-.003h1"></path></g></svg>
                    <h4 className="text-lg font-semibold">Launching</h4>
                </div>
                <p className="text-sm mt-4">We design the application page and publish it in the App Store and Google Play stores.</p>
            </div>

            <div className="bg-white p-5 rounded-lg cs-box-shadow">
                <div className="flex gap-4 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} viewBox="0 0 48 48"><g fill="none" stroke="#80A948" strokeWidth={4}><path strokeLinejoin="round" d="M44 5H4v12h40z"></path><path strokeLinecap="round" strokeLinejoin="round" d="m4 41.03l12.176-12.3l6.579 6.3L30.798 27l4.48 4.368"></path><path strokeLinecap="round" d="M44 16.172v26m-40-26v14M13.016 43H44M17 11h21m-28-.003h1"></path></g></svg>
                    <h4 className="text-lg font-semibold">Support</h4>
                </div>
                <p className="text-sm mt-4">We monitor the stability of the application, update it for new devices and versions of iOS and Android.</p>
            </div>
        </div>
    </div>
    </div>
  </section>;
};
