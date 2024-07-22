import Image from "next/image";
import Link from "next/link";

export const NavBar = () => {
  return (
    <section className="mt-5 fixed w-full z-30">
      <header className="bg-white rounded-lg flex justify-between items-center py-4 px-7 md:mx-28 mx-10 cs-box-shadow">
        <Link href="/">
        <Image
          src="/logo.png"
          alt="logo"
          width={100}
          height={100}
          className="w-18 m-0 p-0"
        />
        </Link>
        <nav className="flex gap-5 text-sm">
          <Link href="#services">Services</Link>
          <Link href="#projects">Projects</Link>
          <Link href="#teams">Teams</Link>
          <Link href="#faq">FAQ</Link>
          <Link href="#contacts">Contacts</Link>
        </nav>

        <div className="hidden lg:flex items-center gap-5 text-red-900 text-sm ">
            <p className="flex gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="red" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>
            <span>+91 0000000000</span>
            </p>

            <p className="flex gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="red" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
            <span>demo@gmail.com</span>
            </p>
        </div>
      </header>
    </section>
  );
};
