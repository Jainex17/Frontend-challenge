import { Product } from "./ui/Product";

const productsdata = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#FFBA00"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
      </svg>
    ),
    name: "Social Media",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
      >
        <path
          fill="#FFBA00"
          d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9zm6.82 6L12 12.72L5.18 9L12 5.28zM17 16l-5 2.72L7 16v-3.73L12 15l5-2.73z"
        ></path>
      </svg>
    ),
    name: "Education",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={20}
        height={20}
        viewBox="0 0 16 16"
      >
        <path
          fill="#FFBA00"
          d="m13.637 2.363l1.676.335c.09.018.164.084.19.173a.25.25 0 0 1-.062.249l-1.373 1.374a.88.88 0 0 1-.619.256H12.31L9.45 7.611A1.5 1.5 0 1 1 6.5 8a1.5 1.5 0 0 1 1.889-1.449l2.861-2.862V2.552c0-.232.092-.455.256-.619L12.88.559a.25.25 0 0 1 .249-.062c.089.026.155.1.173.19Z"
        ></path>
        <path
          fill="#FFBA00"
          d="M2 8a6 6 0 1 0 11.769-1.656a.751.751 0 1 1 1.442-.413a7.502 7.502 0 0 1-12.513 7.371A7.501 7.501 0 0 1 10.069.789a.75.75 0 0 1-.413 1.442A6 6 0 0 0 2 8"
        ></path>
        <path
          fill="#FFBA00"
          d="M5 8a3.002 3.002 0 0 0 4.699 2.476a3 3 0 0 0 1.28-2.827a.748.748 0 0 1 1.045-.782a.75.75 0 0 1 .445.61A4.5 4.5 0 1 1 8.516 3.53a.75.75 0 1 1-.17 1.49A3 3 0 0 0 5 8"
        ></path>
      </svg>
    ),
    name: "AR Technology",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={20}
        height={20}
        viewBox="0 0 24 24"
      >
        <path
          fill="#FFBA00"
          d="M6 4.01C3.58 5.84 2 8.73 2 12c0 1.46.32 2.85.89 4.11L6 14.31zm5 7.41V2.05c-1.06.11-2.07.38-3 .79v10.32zm1 1.73l-8.11 4.68c.61.84 1.34 1.59 2.18 2.2L15 14.89zm1-5.19v3.46l8.11 4.68c.42-.93.7-1.93.82-2.98zM8.07 21.2c1.21.51 2.53.8 3.93.8c3.34 0 6.29-1.65 8.11-4.16L17 16.04zm13.85-10.39c-.55-4.63-4.26-8.3-8.92-8.76v3.6z"
        ></path>
      </svg>
    ),
    name: "Fitness and Sport",
  },
  {
    name: "Auto, Transport",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={20}
        height={20}
        viewBox="0 0 36 36"
      >
        <path
          fill="#FFBA00"
          d="M15 17h3v2h-3z"
          className="clr-i-outline clr-i-outline-path-1"
        ></path>
        <path
          fill="#FFBA00"
          d="M26.45 14.17A22.1 22.1 0 0 0 19.38 7a9.64 9.64 0 0 0-9-.7a8.6 8.6 0 0 0-4.82 6.4c-.08.47-.14.92-.2 1.36A4 4 0 0 0 2 18v6.13a2 2 0 0 0 2 2V18a2 2 0 0 1 2-2h18.73A7.28 7.28 0 0 1 32 23.27V24h-2a4.53 4.53 0 1 0 .33 2H32a2 2 0 0 0 2-2v-.73a9.28 9.28 0 0 0-7.55-9.1M11 14H6.93c0-.31.09-.63.15-1A6.52 6.52 0 0 1 11 8Zm2 0V7.58a8.17 8.17 0 0 1 5.36 1.16A19 19 0 0 1 23.9 14Zm12.8 14.38a2.5 2.5 0 1 1 2.5-2.5a2.5 2.5 0 0 1-2.5 2.5"
          className="clr-i-outline clr-i-outline-path-2"
        ></path>
        <path
          fill="#FFBA00"
          d="M14.17 24a4.53 4.53 0 1 0 .33 2h5.3v-.25A6 6 0 0 1 20 24ZM10 28.38a2.5 2.5 0 1 1 2.5-2.5a2.5 2.5 0 0 1-2.5 2.5"
          className="clr-i-outline clr-i-outline-path-3"
        ></path>
        <path fill="none" d="M0 0h36v36H0z"></path>
      </svg>
    ),
  },
  {
    name: "TV Series",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={20}
        height={20}
        viewBox="0 0 24 24"
      >
        <g
          fill="none"
          stroke="#FFBA00"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          color="#FFBA00"
        >
          <path d="M14 3h-4C6.229 3 4.343 3 3.172 4.172S2 7.229 2 11s0 5.657 1.172 6.828S6.229 19 10 19h4c3.771 0 5.657 0 6.828-1.172S22 14.771 22 11s0-5.657-1.172-6.828S17.771 3 14 3"></path>
          <path d="M16.9 15.5a1.6 1.6 0 0 1 1.6-1.6m-4.8 1.6a4.8 4.8 0 0 1 4.8-4.8m-8 4.8a8 8 0 0 1 8-8M18 19l1 2M6 19l-1 2"></path>
        </g>
      </svg>
    ),
  },
  {
    name: "Bank",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={20}
        height={20}
        viewBox="0 0 24 24"
      >
        <path
          fill="#FFBA00"
          d="M11.5 1L2 6v2h19V6m-5 4v7h3v-7M2 22h19v-3H2m8-9v7h3v-7m-9 0v7h3v-7z"
        ></path>
      </svg>
    ),
  },
  {
    name: "Construction",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={20}
        height={20}
        viewBox="0 0 24 24"
      >
        <path
          fill="#FFBA00"
          d="m18.9 21l-5.475-5.475l2.1-2.1L21 18.9zM5.1 21L3 18.9L9.9 12l-1.7-1.7l-.7.7l-1.275-1.275v2.05l-.7.7L2.5 9.45l.7-.7h2.05L4 7.5l3.55-3.55q.5-.5 1.075-.725T9.8 3t1.175.225t1.075.725l-2.3 2.3L11 7.5l-.7.7L12 9.9l2.25-2.25q-.1-.275-.162-.575t-.063-.6q0-1.475 1.013-2.488t2.487-1.012q.375 0 .713.075t.687.225L16.45 5.75l1.8 1.8l2.475-2.475q.175.35.238.687t.062.713q0 1.475-1.012 2.488t-2.488 1.012q-.3 0-.6-.05t-.575-.175z"
        ></path>
      </svg>
    ),
  },
  {
    name: "Restaurant",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={20}
        height={20}
        viewBox="0 0 24 24"
      >
        <path
          fill="#FFBA00"
          d="M7 22v-9.15q-1.275-.35-2.137-1.4T4 9V2h2v7h1V2h2v7h1V2h2v7q0 1.4-.862 2.45T9 12.85V22zm10 0v-8h-3V7q0-2.075 1.463-3.537T19 2v20z"
        ></path>
      </svg>
    ),
  },
  {
    name: "Healthcare",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={20}
        height={20}
        viewBox="0 0 24 24"
      >
        <g
          fill="none"
          stroke="#FFBA00"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
        >
          <path d="m18 20l3.824-3.824a.6.6 0 0 0 .176-.424V10.5A1.5 1.5 0 0 0 20.5 9v0a1.5 1.5 0 0 0-1.5 1.5V15"></path>
          <path d="m18 16l.858-.858a.48.48 0 0 0 .142-.343v0a.49.49 0 0 0-.268-.433l-.443-.221a2 2 0 0 0-2.308.374l-.895.895a2 2 0 0 0-.586 1.414V20M6 20l-3.824-3.824A.6.6 0 0 1 2 15.752V10.5A1.5 1.5 0 0 1 3.5 9v0A1.5 1.5 0 0 1 5 10.5V15"></path>
          <path d="m6 16l-.858-.858A.5.5 0 0 1 5 14.799v0c0-.183.104-.35.268-.433l.443-.221a2 2 0 0 1 2.308.374l.895.895a2 2 0 0 1 .586 1.414V20m4.167-8h-3.334V9.667H8V6.333h2.333V4h3.334v2.333H16v3.334h-2.333z"></path>
        </g>
      </svg>
    ),
  },
  {
    name: "game development",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={20}
        height={20}
        viewBox="0 0 24 24"
      >
        <path
          fill="none"
          stroke="#FFBA00"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M2 14.5c0-3.287 0-4.931.908-6.038a4 4 0 0 1 .554-.554C4.57 7 6.212 7 9.5 7h5c3.288 0 4.931 0 6.038.908a4 4 0 0 1 .554.554C22 9.57 22 11.212 22 14.5s0 4.931-.908 6.038a4 4 0 0 1-.554.554C19.43 22 17.788 22 14.5 22h-5c-3.287 0-4.931 0-6.038-.908a4 4 0 0 1-.554-.554C2 19.43 2 17.788 2 14.5M12 7V5a1 1 0 0 1 1-1a1 1 0 0 0 1-1V2m-4 14l-1.5-1.5m0 0L7 13m1.5 1.5L7 16m1.5-1.5L10 13m7 2.5v-2"
          color="#FFBA00"
        ></path>
      </svg>
    ),
  },
  {
    name: "Marketplace",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={20}
        height={20}
        viewBox="0 0 24 24"
      >
        <path
          fill="#FFBA00"
          d="M12 13a5 5 0 0 1-5-5h2a3 3 0 0 0 3 3a3 3 0 0 0 3-3h2a5 5 0 0 1-5 5m0-10a3 3 0 0 1 3 3H9a3 3 0 0 1 3-3m7 3h-2a5 5 0 0 0-5-5a5 5 0 0 0-5 5H5c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2"
        ></path>
      </svg>
    ),
  },
];

export const Products = () => {
  return (
    <section className="md:mx-28 mx-12 my-12 py-7">
      <h2 className="md:text-3xl text-xl font-bold w-96">
        Developed more than 100 projects in 15 industries
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 my-10 gap-7">
        {productsdata.map((product, index) => (
          <Product key={index} icon={product.icon} name={product.name} />
        ))}
      </div>
    </section>
  );
};
