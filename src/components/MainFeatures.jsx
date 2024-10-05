import main1 from "../assets/main/main1.svg";
import main2 from "../assets/main/main2.svg";
import main3 from "../assets/main/main3.svg";
import main4 from "../assets/main/main4.svg";
import MainFeaturesCard from "./MainFeaturesCard";
import SectionTitle from "./SectionTitle";

export default function MainFeatures() {
  return (
    <section className="pb-8 pt-20 dark:bg-dark lg:pb-[70px] lg:pt-[120px]">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-12 max-w-[485px] text-center lg:mb-[70px]">
              <SectionTitle
                heading={"Features"}
                title={"Main Features Of Play"}
                description={
                  "here are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
                }
              />
            </div>
          </div>
        </div>
        <div className="-mx-4 flex flex-wrap">
          <MainFeaturesCard
            title={" Premium Property Listings"}
            description={
              "Discover an array of hand-picked properties that meet the highest standards of luxury and comfort."
            }
            svg={main1}
          />
          <MainFeaturesCard
            title={" Personalized Property Matching"}
            description={
              "Our advanced matching system pairs you with properties that align with your specific needs and desires."
            }
            svg={main2}
          />
          <MainFeaturesCard
            title={" Expert Guidance and Support"}
            description={
              "Benefit from the expertise of our dedicated team of real estate professionals."
            }
            svg={main3}
          />
          <MainFeaturesCard
            title={" Virtual Tours"}
            description={
              "Take advantage of our cutting-edge virtual tours and 3D walkthroughs to explore properties from the comfort of your home."
            }
            svg={main4}
          />
        </div>
      </div>
    </section>
  );
}
