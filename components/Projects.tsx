import Image from "next/image";

export const Projects = () => {
  return (
    <section className="mx-28 my-2">
      <h2 className="text-3xl font-bold">Projects we are proud of</h2>

      <p className="my-5 w-1/2">
        Our software development company is truly proud of the wonderful clients
        we have worked with. We enjoy a long-term partnership
      </p>

      <div className="flex gap-10 font-semibold my-14 flex-col md:flex-row md:items-start items-center">
        <p className="border-b-2 border-b-yellow-600 cursor-pointer">
          Project 1
        </p>
        <p className="cursor-pointer">Project 2</p>
        <p className="cursor-pointer">Project 3</p>
        <p className="cursor-pointer">Project 4</p>
      </div>

      <div className="flex md:flex-row flex-col">
        <div className="flex-1">
          <h3 className="text-3xl font-bold">Project 1</h3>
          <div className="my-7">
            <p className="text-sm">
              Crafted an innovative rental property management app, seamlessly
              integrating secure login, absence registration, and a tenant
              notice board. Elevating the resident experience with user-friendly
              design and efficient communication channels
            </p>

            <p className="text-gray-700 py-5">
              Business analysis / iOS / Android / QA / UI/UX Design
            </p>

            <div className="flex gap-6 py-3">
              <p className="flex gap-3 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#FFBA00"
                    d="M12 11.5A2.5 2.5 0 0 1 9.5 9A2.5 2.5 0 0 1 12 6.5A2.5 2.5 0 0 1 14.5 9a2.5 2.5 0 0 1-2.5 2.5M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7"
                  ></path>
                </svg>
                <span>India</span>
              </p>
              <p className="flex gap-3 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#FFBA00"
                    d="M4 21q-.825 0-1.412-.587T2 19V8q0-.825.588-1.412T4 6h4V4q0-.825.588-1.412T10 2h4q.825 0 1.413.588T16 4v2h4q.825 0 1.413.588T22 8v11q0 .825-.587 1.413T20 21zm0-2h16V8H4zm6-13h4V4h-4zM4 19V8z"
                  ></path>
                </svg>
                <span>Real Estate</span>
              </p>
            </div>

            <div className="flex gap-12 my-7">
                <div>
                    <h4 className="font-bold text-2xl">400%</h4>
                    <p>User Growth</p>
                </div>
                <div>
                    <h4 className="font-bold text-2xl">+ 200 000</h4>
                    <p>Active Users</p>
                    </div>
            </div>
          </div>
        </div>
        <div className="flex-1">
            <Image src={"/projects.png"} width={500} height={500} alt="project" className="w-full" />
        </div>
      </div>
    </section>
  );
};
