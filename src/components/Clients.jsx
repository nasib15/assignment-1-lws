import team1 from "../assets/team/team-01.png";
import team2 from "../assets/team/team-02.png";
import team4 from "../assets/team/team-04.png";
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
          <ClientCard
            name={"Melissa Tatcher"}
            designation={"Marketing Expert"}
            img={team1}
          />
          <ClientCard
            name={"Stuard Ferrel"}
            designation={"Digital Marketer"}
            img={team2}
          />

          <ClientCard
            name={"Eva Hudson"}
            designation={"Creative Designer"}
            img={
              "https://cdn.tailgrids.com/1.0/assets/images/team/image-07/image-03.png"
            }
          />
          <ClientCard
            name={"Jackie Sanders"}
            designation={"Founder of Facebook"}
            img={team4}
          />
        </div>
      </div>
    </section>
  );
}
