"use client";

import { useState } from "react";

export const Faq = () => {

  const [faq1, setFaq1] = useState(false);
  const [faq2, setFaq2] = useState(false);
  const [faq3, setFaq3] = useState(false);
  const [faq4, setFaq4] = useState(false);

  return (
    <section className="px-28 py-12 bg-white">
      <h2 className="text-4xl font-bold">FAQ</h2>

      <hr className="my-4 border-gray-200" />

      <div className="grid grid-cols-2 gap-10">
        <div>
          <div className="my-5 cursor-pointer" onClick={() => setFaq1(!faq1)}>
            <div className="flex justify-between">
              <h5 className="font-semibold text-lg">
                what is cost of mobile application?
              </h5>
              <span className="bg-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={35}
                  height={35}
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#80A948"
                    d="M19 12.998h-6v6h-2v-6H5v-2h6v-6h2v6h6z"
                  ></path>
                </svg>
              </span>
            </div>
            {faq1 && (
            <p className="text-sm py-4">
              The cost of developing a mobile application depends on the
              complexity of the project, the number of platforms, the
              functionality, and the design. The cost of developing a mobile
              application can be from $ 5000 to $ 100,000. To get an accurate
              estimate of the cost of developing a mobile application, you need
              to contact us and provide a detailed description of the project.
            </p>
            )}
          </div>
          <hr className="my-3 border-gray-200" />
          <div className="my-10 cursor-pointer" onClick={() => setFaq2(!faq2)}>
            <div className="flex justify-between">
              <h5 className="font-semibold text-lg">
                Do you provide guarantee for the mobile application?
              </h5>
              <span className="bg-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={35}
                  height={35}
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#80A948"
                    d="M19 12.998h-6v6h-2v-6H5v-2h6v-6h2v6h6z"
                  ></path>
                </svg>
              </span>
            </div>
            {faq2 && (
            <p className="text-sm py-4">
              Yes, we provide a guarantee for the mobile application. We provide
              a guarantee for the mobile application for 6 months. During this
              period, we will fix all the bugs that will be found in the
              application. After the guarantee period, we can sign a contract
              for technical support of the application.
            </p>
            )}
          </div>
          <hr className="my-3 border-gray-200" />
        </div>

        <div>
          <div className="my-5 cursor-pointer" onClick={() => setFaq3(!faq3)}>
            <div className="flex justify-between">
              <h5 className="font-semibold text-lg">
                How long will devlopment take?
              </h5>
              <span className="bg-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={35}
                  height={35}
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#80A948"
                    d="M19 12.998h-6v6h-2v-6H5v-2h6v-6h2v6h6z"
                  ></path>
                </svg>
              </span>
            </div>
            {faq3 && (
            <p className="text-sm py-4">
              Development terms directly depend on the requirements for the
              mobile application, the characteristics of the company, as well as
              the wishes of the customer. Average development time from start to
              finished application: Medium projects up to 3 months. Large
              projects about 4-6 months. To get a more accurate estimate of the
              project completion time, it is necessary to determine the main
              task of the application, think over its logic and functionality.
            </p>
            )}
          </div>
          <hr className="my-3 border-gray-200" />
          <div className="my-10 cursor-pointer" onClick={() => setFaq4(!faq4)}>
            <div className="flex justify-between">
              <h5 className="font-semibold text-lg">
                I will not tell my idea, do you guarantee confidentiality?
              </h5>
              <span className="bg-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={35}
                  height={35}
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#80A948"
                    d="M19 12.998h-6v6h-2v-6H5v-2h6v-6h2v6h6z"
                  ></path>
                </svg>
              </span>
            </div>
            {faq4 && (
            <p className="text-sm py-4">
              Yes, we guarantee the confidentiality of your idea. We sign a
              non-disclosure agreement with each client. We do not disclose
              information about the project to third parties. We guarantee the
              confidentiality of your idea and the safety of your data.
            </p>
            )}
          </div>
          <hr className="my-3 border-gray-200" />
        </div>
      </div>
    </section>
  );
};
