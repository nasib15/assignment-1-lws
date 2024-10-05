import bluedot from "../assets/faq/bluedot.svg";
import greendot from "../assets/faq/greendot.svg";
import FaqCard from "./FaqCard";
import SectionTitle from "./SectionTitle";

export default function Faq() {
  return (
    <section className="relative z-20 overflow-hidden bg-white pb-8 pt-20 dark:bg-dark lg:pb-[50px] lg:pt-[120px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[520px] text-center">
              <SectionTitle
                heading={"FAQ"}
                title={"Any Questions? Look Here"}
                description={
                  "There are many variations of passages of Lorem Ipsum available  but the majority have suffered alteration in some form."
                }
              />
            </div>
          </div>
        </div>
        <div className="-mx-4 flex flex-wrap">
          <FaqCard />
          <FaqCard />
          <FaqCard />
          <FaqCard />
        </div>
      </div>
      <div>
        <span className="absolute left-4 top-4 -z-[1]">
          <img src={greendot} alt="" />
        </span>
        <span className="absolute bottom-4 right-4 -z-[1]">
          <img src={bluedot} alt="" />
        </span>
      </div>
    </section>
  );
}
