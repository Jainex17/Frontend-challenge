import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="bg-white py-5">
      <div className="bg-[#111111] mx-28 rounded-lg text-white">
        <div className="flex justify-center py-5">
          <Image
            src="/footerlogo.png"
            width={200}
            height={200}
            alt="footer logo"
            className="w-fit"
          />
        </div>

        <div className="flex justify-center xl:gap-40 lg:gap-20 flex-col lg:flex-row items-center">
          <div className="flex flex-col gap-1 py-4">
            <p className="flex gap-2 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                height={20}
                viewBox="0 0 16 16"
              >
                <g fill="#98A2B3">
                  <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"></path>
                  <path d="M8 14a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></path>
                </g>
              </svg>
              <span className="text-[#98A2B3] font-sm">Contact Nums</span>
            </p>
            <p>+91 0000000000</p>
          </div>

          <div className="flex flex-col gap-1 py-4">
            <p className="flex gap-2 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                height={20}
                viewBox="0 0 24 24"
              >
                <path
                  fill="#98A2B3"
                  d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm8-7l8-5V6l-8 5l-8-5v2z"
                ></path>
              </svg>
              <span className="text-[#98A2B3] font-sm">Gmail</span>
            </p>
            <p>demo@gmail.com</p>
          </div>

          <div className="flex flex-col gap-1 py-4">
            <p className="flex gap-2 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                height={20}
                viewBox="0 0 24 24"
              >
                <path
                  fill="#98A2B3"
                  d="M12 11.5A2.5 2.5 0 0 1 9.5 9A2.5 2.5 0 0 1 12 6.5A2.5 2.5 0 0 1 14.5 9a2.5 2.5 0 0 1-2.5 2.5M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7"
                ></path>
              </svg>
              <span className="text-[#98A2B3] font-sm">Adress</span>
            </p>
            <p>Mumbai, India</p>
          </div>

          <div className="flex flex-col gap-1 py-4">
            <p className="flex gap-2 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                height={20}
                viewBox="0 0 24 24"
              >
                <path
                  fill="#98A2B3"
                  d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zm4 18H6V4h7v5h5z"
                ></path>
              </svg>
              <span className="text-[#98A2B3] font-sm">Leave a request</span>
            </p>
            <p>Leave a Request</p>
          </div>
        </div>
        <div className="flex justify-center text-sm py-4">
          <p>We work throughout the world</p>
        </div>
      </div>
    </footer>
  );
};
