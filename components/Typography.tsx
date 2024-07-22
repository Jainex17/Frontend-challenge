import Image from "next/image";

export const Typography = () => {
  return (
    <section className="bg-white md:mt-44 mt-14 z-20 relative w-[101%]">
      <div className="pb-20">
        <div className="grid grid-cols-5 py-20">
          <Image
            src={"/typography1.png"}
            width={400}
            height={300}
            alt="Typography"
            className="w-fit"
          />
          <Image
            src={"/typography1.png"}
            width={400}
            height={300}
            alt="Typography"
          />
          <Image
            src={"/typography1.png"}
            width={400}
            height={300}
            alt="Typography"
          />
          <Image
            src={"/typography1.png"}
            width={400}
            height={300}
            alt="Typography"
          />
          <Image
            src={"/typography1.png"}
            width={400}
            height={300}
            alt="Typography"
          />
        </div>

        <div className="flex md:flex-row flex-col gap-10">
          <div className="mx-28 flex-1">
            <h2 className="text-3xl font-bold">Full Devlopment cycle</h2>

            <p className="mt-10 font-semibold text-sm">
              We use proven technologies
            </p>

            <div className="mt-5">
              <h5 className="font-semibold">Web</h5>
              <p className="mt-2 text-sm w-2/3">
                PHP / Javascript / Node.JS / Web Socket / Socket.io / Vue.js/
                Nuxt / MySQL / Laravel / GO lang / django / Python
              </p>
            </div>

            <div className="mt-8">
              <h5 className="font-semibold">Mobile</h5>
              <p className="mt-2 text-sm w-2/3">
                Swift / Kotlin / Alamofire / Firebase / CoreData / Room / Realm
                / Coroutine / RxJava / RxSwift / Unit Test / Navigation
              </p>
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-3 md:items-start items-center">
            <p className="flex items-center gap-1 hover:underline cursor-pointer">
              <span>iOS development </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 22 22"
                fill="none"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </p>
            <p className="flex items-center gap-1 hover:underline cursor-pointer">
              <span>Android development</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 22 22"
                fill="none"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </p>
            <p className="flex items-center gap-1 hover:underline cursor-pointer">
              <span>Web development</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 22 22"
                fill="none"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </p>
            <p className="flex items-center gap-1 hover:underline cursor-pointer">
              <span>UI/UX design</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 22 22"
                fill="none"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </p>
            <p className="flex items-center gap-1 hover:underline cursor-pointer">
              <span>testing</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 22 22"
                fill="none"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </p>
            <p className="flex items-center gap-1 hover:underline cursor-pointer">
              <span>launch</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 22 22"
                fill="none"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </p>
            <p className="flex items-center gap-1 hover:underline cursor-pointer">
              <span>IT consulting</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 22 22"
                fill="none"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
