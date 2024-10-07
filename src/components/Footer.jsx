import blog2 from "../assets/blog/blog-02.jpg";
import blog3 from "../assets/blog/blog-03.jpg";
import logo from "../assets/logo/logo.svg";
import {
  FacebookIconFooter,
  InstagramIconFooter,
  LinkedInIcon,
  TwitterIconFooter,
} from "./svg/IconSVG";

function FooterLink({ href, text }) {
  return (
    <li>
      <a
        href={href}
        className="mb-3 inline-block text-base text-gray-7 hover:text-primary"
      >
        {text}
      </a>
    </li>
  );
}

function FooterTitle({ title }) {
  return <h4 className="mb-9 text-lg font-semibold text-white">{title}</h4>;
}

function FooterBlogCard({ img, title }) {
  return (
    <a href="blog-details.html" className="group flex items-center gap-[22px]">
      <div className="overflow-hidden rounded">
        <img className="w-[70px] h-12" src={img} alt="blog" />
      </div>
      <span className="max-w-[180px] text-base text-gray-7 group-hover:text-white">
        {title}
      </span>
    </a>
  );
}

export default function Footer() {
  return (
    <footer className="relative z-10 bg-[#090E34] pt-20 lg:pt-[100px]">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-4/12 xl:w-3/12">
            <div className="mb-10 w-full">
              <a href="#" className="mb-6 inline-block max-h-[100px]">
                <img src={logo} alt="logo" className="max-w-full" />
              </a>
              <p className="mb-8 lg:max-w-[270px] text-base text-gray-7">
                We create digital experiences for brands and companies by using
                technology.
              </p>
              <div className="-mx-3 flex items-center">
                <a href="#" className="px-3 text-gray-7 hover:text-white">
                  <FacebookIconFooter />
                </a>
                <a href="#" className="px-3 text-gray-7 hover:text-white">
                  <TwitterIconFooter />
                </a>
                <a href="#" className="px-3 text-gray-7 hover:text-white">
                  <InstagramIconFooter />
                </a>
                <a href="#" className="px-3 text-gray-7 hover:text-white">
                  <LinkedInIcon />
                </a>
              </div>
            </div>
          </div>
          <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
            <div className="mb-10 w-full">
              <FooterTitle title="About Us" />
              <ul>
                <FooterLink href="#home" text="Home" />
                <FooterLink href="#features" text="Features" />
                <FooterLink href="#about" text="About" />
              </ul>
            </div>
          </div>
          <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-3/12 xl:w-2/12">
            <div className="mb-10 w-full">
              <FooterTitle title="Features" />
              <ul>
                <FooterLink href="#how-it-works" text="How it works" />
                <FooterLink href="#policy" text="Privacy policy" />
                <FooterLink href="#terms" text="Terms of Service" />
                <FooterLink href="#refund-policy" text="Refund policy" />
              </ul>
            </div>
          </div>

          {/* For relious reason, I have used male pic... SORRY */}
          <div className="w-full px-4 md:w-2/3 lg:w-6/12 xl:w-3/12">
            <div className="mb-10 w-full">
              <FooterTitle title="Latest blog" />
              <div className="flex flex-col gap-8">
                <FooterBlogCard
                  img={blog2}
                  title="I think really important to design with..."
                />

                <FooterBlogCard
                  img={blog3}
                  title="Recognizing the need is the primary..."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
