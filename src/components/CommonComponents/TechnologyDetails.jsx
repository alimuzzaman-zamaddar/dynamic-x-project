import { useParams } from "react-router";
import { technologies } from "../../static_data/static.data";
import FdmTechnologySection from "../PagesComponent/TechnologyDetails/FdmSection";
import ComparisonSection from "../PagesComponent/TechnologyDetails/ComparisonSection";

const TechnologyDetails = () => {
  const { title } = useParams();

  const getTechnologyByTitle = title => {
    return technologies.find(
      tech => tech.title.toLowerCase() === title.toLowerCase(),
    );
  };

  const tech = getTechnologyByTitle(title);
  if (!tech) {
    return <p>Technology not found!</p>;
  }

  return (
    <section className="pt-8 mt-[112px] h-auto w-full">
      <div className="container flex flex-col gap-y-25 ">
        <div className="flex flex-col gap-y-8  ">
          <img
            className="h-[593px] rounded-2xl w-full  object-cover "
            src={tech.bgImg}
            alt={tech.title}
          />
          <div className="flex flex-row gap-x-12">
            <div className="flex max-w-[50%]  flex-col gap-y-12 ">
              <h2 className="text-[71px] font-normal leading-[123%] text-black  ">
                {" "}
                {tech.title}{" "}
              </h2>
              <p className="text-2xl  font-normal leading-[200%] text-black opacity-64 ">
                {tech.description}
              </p>
            </div>
            <FdmTechnologySection />
          </div>
          <p className="text-2xl font-normal leading-[200%] text-black opacity-64 ">
            {" "}
            {tech.additional_desc}{" "}
          </p>
        </div>

        <ComparisonSection />
      </div>
    </section>
  );
};

export default TechnologyDetails;
