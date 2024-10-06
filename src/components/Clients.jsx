import ClientCard from "./ClientCard";
import SectionTitle from "./SectionTitle";

export default function Clients() {
  return (
    <section
      id="team"
      className="overflow-hidden bg-gray-1 pb-12 pt-20 dark:bg-dark-2 lg:pb-[90px] lg:pt-[120px]"
    >
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[485px] text-center">
              <SectionTitle
                heading={"Our Team Members"}
                title={"Our Clients"}
                description={
                  "There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
                }
              />
            </div>
          </div>
        </div>
        <div className="-mx-4 flex flex-wrap justify-center">
          {/*For religious reason I have used male pic.. SORRY */}
          <ClientCard
            name={"Melissa Tatcher"}
            designation={"Marketing Expert"}
            img={
              "https://img.freepik.com/premium-photo/arafed-man-with-black-jacket-black-jacket-generative-ai_1035767-12999.jpg?w=900"
            }
          />
          {/*For religious reason I have used male pic.. SORRY */}
          <ClientCard
            name={"Stuard Ferrel"}
            designation={"Digital Marketer"}
            img={
              "https://img.freepik.com/premium-photo/arafed-man-with-mustache-beard-smiling-camera-generative-ai_1035767-13084.jpg?w=996"
            }
          />
          {/*For religious reason I have used male pic.. SORRY */}
          <ClientCard
            name={"Eva Hudson"}
            designation={"Creative Designer"}
            img={
              "https://img.freepik.com/premium-photo/man-hat-holding-plant-with-hat-it_1308172-527980.jpg?w=996"
            }
          />
          {/*For religious reason I have used male pic.. SORRY */}
          <ClientCard
            name={"Jackie Sanders"}
            designation={"Founder of Facebook"}
            img={
              "https://img.freepik.com/premium-photo/arafed-man-with-beard-jacket-smiling-picture-generative-ai_1035767-13015.jpg?w=900"
            }
          />
        </div>
      </div>
    </section>
  );
}
