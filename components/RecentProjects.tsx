"use client";

import { FaLocationArrow } from "react-icons/fa6";
import { projects } from "@/data";
import Link from "next/link";
import Image from "next/image";
import { CardContainer, CardBody, CardItem } from "./ui/3d-card"; // Ensure the correct import path

const RecentProjects = () => {
  return (
    <div className="py-20">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-20 lg:mt-10">
        {projects.map((item) => (
          <div
            className="lg:min-h-[500px] h-[28rem] flex items-center justify-center sm:w-96 md:w-[500px]  relative"
            key={item.id}
          >
            <Link href={item.href}>
              <div
                className="absolute inset-0  rounded-3xl"
                style={{ backgroundColor: "#13162D" }}
              >
                <img src="/bg.png" alt="bgimg" />
              </div>
              <CardContainer className="inter-var  items-center justify-center     max-w-full ">
                <CardBody className=" relative group/card w-full sm:w-[30rem] h-auto rounded-xl p-6 ">
                  <CardItem
                    translateZ="100"
                    rotateX={20}
                    rotateZ={-10}
                    className="w-full mt-4"
                  >
                    <Image
                      src={item.img}
                      height={350}
                      width={60}
                      className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                      alt="thumbnail"
                    />
                  </CardItem>
                  <CardItem
                    translateZ="50"
                    className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1 md:mt-10 mt-6"
                  >
                    {item.title}
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                    style={{
                      color: "#BEC1DD",
                      margin: "1vh 0",
                    }}
                  >
                    {item.des}
                  </CardItem>
                  <div className="flex justify-between items-center mt-6">
                    <CardItem
                      translateZ={20}
                      translateX={-40}
                      as="button"
                      className=" "
                    >
                      <div className="flex items-center">
                        {item.iconLists.map((icon, index) => (
                          <div
                            key={index}
                            className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                            style={{
                              transform: `translateX(-${5 * index + 2}px)`,
                            }}
                          >
                            <img
                              src={icon}
                              alt={`icon${index}`}
                              className="p-2"
                            />
                          </div>
                        ))}
                      </div>
                    </CardItem>
                    <CardItem
                      translateZ={20}
                      translateX={40}
                      as="button"
                      className="px-2 py-2 rounded-xl flex justify-center items-center"
                    >
                      <p className="flex lg:text-xl md:text-xs text-[12px] text-purple">
                        Check Live Site
                      </p>
                      <FaLocationArrow className="ms-3" color="#CBACF9" />
                    </CardItem>
                  </div>
                </CardBody>
              </CardContainer>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;

// import { FaLocationArrow } from "react-icons/fa6";
// import { projects } from "@/data";
// import { PinContainer } from "./ui/Pin";
// import Link from "next/link";

// const RecentProjects = () => {
//   return (
//     <div className="py-20">
//       <h1 className="heading">
//         A small selection of{" "}
//         <span className="text-purple">recent projects</span>
//       </h1>
//       <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
//         {projects.map((item) => (
//           <div
//             className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
//             key={item.id}
//           >
//             <Link href={item.href}>
//               <PinContainer title="visit" href={item.href || "#"}>
//                 <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
//                   <div
//                     className="relative w-full h-full overflow-hidden lg:rounded-3xl"
//                     style={{ backgroundColor: "#13162D" }}
//                   >
//                     <img src="/bg.png" alt="bgimg" />
//                   </div>
//                   <img
//                     src={item.img}
//                     alt="cover"
//                     className="z-10 absolute bottom-0"
//                   />
//                 </div>

//                 <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
//                   {item.title}
//                 </h1>

//                 <p
//                   className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
//                   style={{
//                     color: "#BEC1DD",
//                     margin: "1vh 0",
//                   }}
//                 >
//                   {item.des}
//                 </p>

//
//
//               </PinContainer>
//             </Link>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default RecentProjects;
