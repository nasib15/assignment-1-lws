import realEstateData from "../assets/realEstateData.json";
import PropertiesCard from "./PropertiesCard";
import SectionTitle from "./SectionTitle";

export default function Properties() {
  console.log(realEstateData);
  return (
    <section>
      <div className="container">
        <div className="mx-auto mb-12 max-w-[485px] text-center lg:mb-[70px]">
          <SectionTitle
            heading={"Properties"}
            title={"Grab your Dream Property"}
            description={
              "There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
            }
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {realEstateData.map((property) => (
            <PropertiesCard key={property.id} {...property} />
          ))}
        </div>
      </div>
    </section>
  );
}
