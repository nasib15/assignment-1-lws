import logo from "../assets/logo/logo.svg";

function NavMiddle({ href, text, largeDevice = 0, xlDevice = 0 }) {
  return (
    <li className="group relative">
      <a
        href={href}
        className={`ud-menu-scroll mx-8 flex py-2 text-base font-medium text-dark group-hover:text-primary dark:text-white lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70 lg:${largeDevice} xl:${xlDevice}`}
      >
        {text}
      </a>
    </li>
  );
}

export default function Navbar() {
  return (
    <div className="ud-header absolute left-0 top-0 z-40 flex w-full items-center bg-transparent">
      <div className="container">
        <div className="relative -mx-4 flex items-center justify-between">
          <div className="flex w-full items-center justify-between px-4 py-3">
            <a className="navbar-logo block w-60 max-w-full px-4">
              <img src={logo} alt="logo" className="header-logo h-12" />
            </a>

            <ul className="hidden lg:flex ">
              <NavMiddle href={"#home"} text={"Home"} />
              <NavMiddle
                href={"#about"}
                text={"About"}
                largeDevice={"ml-7"}
                xlDevice={"ml-10"}
              />
              <NavMiddle
                href={"#pricing"}
                text={"Pricing"}
                largeDevice={"ml-7"}
                xlDevice={"ml-10"}
              />
              <NavMiddle
                href={"#blog"}
                text={"Blog"}
                largeDevice={"ml-7"}
                xlDevice={"ml-10"}
              />
            </ul>

            <div className="sm:flex">
              <a className="flex-1 loginBtn px-[22px] py-2 text-base font-medium text-white hover:opacity-70 hover:cursor-pointer">
                Sign In
              </a>
              <a className="signUpBtn rounded-md bg-white bg-opacity-20 px-6 py-2 text-base font-medium text-white duration-300 ease-in-out hover:bg-opacity-100 hover:text-dark hover:cursor-pointer">
                Sign Up
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
