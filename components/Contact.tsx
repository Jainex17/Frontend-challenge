export const Contact = () => {
  return (
    <section className="cs-gradient flex justify-center items-center py-12 flex-col lg:flex-row">
      <div className="flex-1 flex flex-col items-center text-white">
        <h2 className="font-bold text-3xl my-5">Let&aposs discuss Your project</h2>
        <p className="text-sm w-96">
          Let&aposs figure out how to create an effective application, its cost and
          terms of its development
        </p>
      </div>
      <div className="flex-1 flex flex-col items-center">
        <div className="bg-white cs-box-shadow mt-6 p-5 rounded-md">

          <form className="w-full flex gap-4 mt-4">
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
                />
              </label>
            </div>
          </form>
          <div className="flex justify-end pt-4">
            <button className="text-white bg-[#FFB900] py-2 px-4 text-sm rounded">
              Discuss the project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
