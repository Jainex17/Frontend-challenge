import Image from "next/image";

export const Team = () => {
  return <section className="flex mx-28 my-20 flex-col lg:flex-row" id="teams">
    <div className="flex-1" >
        <h2 className="text-3xl font-bold my-6">Our Team</h2>
        <p className="text-sm font-medium">Thousand is a full-cycle digital production company with its own product analytics, design, web and mobile development.</p>
        <div className="my-10 flex justify-between md:flex-row flex-col">
            <div>
                <h5 className="text-4xl font-bold my-2">28</h5>
                <span className="text-gray-700 text-sm">team members</span>
            </div>
            <div>
                <h5 className="text-4xl font-bold my-2">+100</h5>
                <span className="text-gray-700 text-sm">projects</span>
            </div>
            <div>
                <h5 className="text-4xl font-bold my-2">7 years</h5>
                <span className="text-gray-700 text-sm">in IT sphere</span>
            </div>
        </div>
        <p className="text-sm font-medium">All the necessary specialists - from a designer to a tester - are on our staff. We hire the best specialists in the market. It&aposs expensive but worth it</p>
    </div>
    <div className="flex-1 flex justify-center">
        <Image src={"/teams.png"} width={500} height={500} alt="team" className="mt-5 w-full md:w-fit rounded-lg cs-box-shadow" />
    </div>
  </section>;
};
