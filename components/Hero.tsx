import Image from "next/image";

export const Hero = () => {
  return (
    <section className="pt-36 flex" id="home">
      <div className="md:mx-28 sm:mx-12 mx-5 flex-1">
        <h1 className="text-4xl font-bold">
          <span className="text-yellow-500">User-Centric Excellence:</span> Our
          App Development services Tackles Your Pain Points
        </h1>

        <p className="mt-5">
          Experience a Seamless Digital Journey with Desun - Where Every Line of
          Code Resolves Your Challenges and Elevates Your App Experience to
          Unparalleled Heights.
        </p>

        <div className="bg-white cs-box-shadow mt-6 p-5 rounded-md">
          <h4 className="text-[#101828] text-base font-semibold ">
            Leave your contacts and we will call you back within 30 minutes
          </h4>

          <form className="w-full flex gap-4 mt-4 md:flex-row flex-col">
            <div className="flex flex-col flex-1">
              <label className="flex flex-col">
                <span className="text-[#667085] text-xs font-medium mb-1">
                  Full name
                </span>
                <input
                  type="text"
                  name="name"
                  placeholder="My Name"
                  className=" border border-white border-b-gray-300 text-base"
                  required
                />
              </label>
              <label className="flex flex-col mt-4">
                <span className="text-[#667085] text-xs font-medium mb-1">
                  Business Name
                </span>
                <input
                  type="text"
                  name="business_name"
                  placeholder="ABC Technologies PVT LTD"
                  className="border border-white border-b-gray-300 text-base"
                  required
                />
              </label>
            </div>
            <div className="flex flex-col flex-1 px-2">
              <label className="flex flex-col">
                <span className="text-[#667085] text-xs font-medium mb-1">
                  Phone Number
                </span>
                <input
                  type="text"
                  name="phone"
                  placeholder="+91 000000000"
                  className="border border-white border-b-gray-300 text-base"
                  required
                />
              </label>
              <label className="flex flex-col mt-4">
                <span className="text-[#667085] text-xs font-medium mb-1">
                  Business Email
                </span>
                <input
                  type="email"
                  name="business_email"
                  placeholder="demoaccount@gmail.com"
                  className="border border-white border-b-gray-300 text-base"
                  required
                />
              </label>
            </div>
            <div className="flex flex-1 items-end px-2">
              <button type="submit" className="text-white bg-[#80A948] hover:bg-[#698b38] transition-all py-1 px-4 text-sm rounded">
                Get Consultation
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="flex-1 z-0 hidden xl:block">
        <div className="grid grid-cols-2 absolute gap-5 -translate-y-[30%] -rotate-12 top-1">
          <Image
            src="/hero1.png"
            width={250}
            height={250}
            alt="Hero"
            className="w-full"
          />
          <Image
            src="/hero2.png"
            width={250}
            height={250}
            alt="Hero"
            className="w-full"
          />
          <Image
            src="/hero3.png"
            width={250}
            height={250}
            alt="Hero"
            className="w-full"
          />
          <Image
            src="/hero4.png"
            width={250}
            height={250}
            alt="Hero"
            className="w-full"
          />
          <Image
            src="/hero5.png"
            width={250}
            height={250}
            alt="Hero"
            className="w-full"
          />
          <Image
            src="/hero6.png"
            width={250}
            height={250}
            alt="Hero"
            className="w-full z-0"
          />
        </div>
      </div>
    </section>
  );
};
