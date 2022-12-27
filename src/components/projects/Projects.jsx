/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
import { BsGithub } from "react-icons/bs";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import projectsData from "./projectsData";
import img3 from "../../assets/work/mockupReve.png";
import Project from "./project/Project";

import "./projects.css";
import "./swiper.css";

const Projects = () => {
  const projects = projectsData.map((data) => {
    return (
      <SwiperSlide key={data.SwiperId}>
        <Project key={data.id} {...data} />
      </SwiperSlide>
    );
  });
  return (
    <section className="section__work section">
      <h2 className="section__title">Projects</h2>
      <span className="section__subtitle">My Projects</span>
      <Swiper
        spaceBetween={100}
        slidesPerView={1}
        centeredSlides={true}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Pagination, Navigation]}
        breakpoints={{
          768: {
            slidesPerView: 1.6,
          },
        }}
      >
        {projects}
      </Swiper>
    </section>
  );
};

export default Projects;
