import { workExperiences } from "../constants/index.js";

const WorkExperience = () => {

  return (
    <section className="c-space my-20" id="experience">
      <div className="w-full text-white-600">
        <p className="head-text">My Work Experience</p>

        <div className="mt-4">
          <div className="work-content">
            <div className="sm:py-10 py-5 sm:px-5 px-2.5">
              {workExperiences.map((item, index) => (
                <div
                  key={index}
                  className="work-content_container group"
                >
                  <div className="flex flex-col h-full justify-start items-center py-2">
                    <div className="work-content_logo">
                      <img className="w-full h-full" src={item.icon} alt="" />
                    </div>

                    <div className="work-content_bar" />
                  </div>

                  <div className="sm:p-5 px-2.5 py-5">
                    <p className="font-bold text-white-800">{item.name}</p>
                    <p className="text-sm mb-5">
                      {item.pos} -- <span>{item.duration}</span>
                    </p>
                    {/* <p className="group-hover:text-white transition-all ease-in-out duration-500">{item.title}</p> */}
                    <ul className="list-disc ml-5 text-sm group-hover:text-white transition-all ease-in-out duration-500 space-y-2">
                      {item.title.map((point, idx) => (
                        <li key={idx}>{point}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
