import dottedShape from "../assets/team/dotted-shape.svg";
import fb from "../assets/team/fb.svg";
import insta from "../assets/team/insta.svg";
import twitter from "../assets/team/twitter.svg";

export default function ClientCard({ name, designation, img }) {
  return (
    <div className="w-full px-4 sm:w-1/2 lg:w-1/4 xl:w-1/4">
      <div className="group mb-8 rounded-xl bg-white px-5 pb-10 pt-12 shadow-testimonial dark:bg-dark dark:shadow-none">
        <div className="relative z-10 mx-auto mb-5 h-[120px] w-[120px]">
          <img
            src={img}
            alt="team image"
            className="h-[120px] w-[120px] rounded-full"
          />
          <span className="absolute bottom-0 left-0 -z-10 h-10 w-10 rounded-full bg-secondary opacity-0 transition-all group-hover:opacity-100"></span>
          <span className="absolute right-0 top-0 -z-10 opacity-0 transition-all group-hover:opacity-100">
            <img src={dottedShape} alt="" />
          </span>
        </div>
        <div className="text-center">
          <h4 className="mb-1 text-lg font-semibold text-dark dark:text-white">
            {name}
          </h4>
          <p className="mb-5 text-sm text-body-color dark:text-dark-6">
            {designation}
          </p>
          <div className="flex items-center justify-center gap-5">
            <a
              href="javascript:void(0)"
              className="text-dark-6 hover:text-primary"
            >
              <img src={fb} alt="facebook icon" />
            </a>
            <a
              href="javascript:void(0)"
              className="text-dark-6 hover:text-primary"
            >
              <img src={twitter} alt="twitter icon" />
            </a>
            <a
              href="javascript:void(0)"
              className="text-dark-6 hover:text-primary"
            >
              <img src={insta} alt="insta icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
