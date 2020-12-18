import React, { useEffect } from "react";
import Aos from "aos";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt, faImages } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faWordpressSimple,
} from "@fortawesome/free-brands-svg-icons";

const CMSProject = ({
  Slider_opener_id,
  project_link,
  project_heading,
  project_description,
  tech_link_1,
  tech_link_2,
  tech_link_3,
  tech_1,
  tech_2,
  tech_3,
  no_Need_Of_Icons,
  external_link_icon_id,
  need_Replace_WP_icon,
  wordpress_replacing_logo_src,
  wordpress_replacing_logo_alt,
  wordpress_replacing_logo_class,
  projectSpecialClass,
  preview_popup_indiv_id,
  source_popup_indiv_id,
  source_link_icon_unique_id,
  smallProject__githubLink,
  needOfGitHubIcon,
  smallInLarge,
}) => {
  useEffect(() => {
    Aos.init({});
  }, []);

  return (
    <div
      data-aos="fade-up"
      data-aos-duration="850"
      data-aos-delay="500"
      data-aos-easing="ease-out"
      className={`smallProjects__wrapper ${projectSpecialClass} ${
        smallInLarge && "smallInLarge__projectWrapper"
      }`}
    >
      <div className="iconsBar">
        <FontAwesomeIcon
          className={`icons icon1 ${
            need_Replace_WP_icon && "need_Replace_WP_icon"
          }`}
          icon={faWordpressSimple}
        />
        <img
          className={wordpress_replacing_logo_class}
          src={wordpress_replacing_logo_src}
          alt={wordpress_replacing_logo_alt}
        />
        <span className="sliderOpener__overlapper" id={Slider_opener_id}></span>
        <span className="Preview__popup" id={preview_popup_indiv_id}>
          Preview
        </span>
        <a
          className={`Slider-opener ${no_Need_Of_Icons && "no_Need_Of_Icons"}`}
        >
          <FontAwesomeIcon className="icons icon3 " icon={faImages} />
        </a>

        <span className="Source__popup" id={source_popup_indiv_id}>
          Source Link
        </span>

        <a href={project_link} target="_blank" id={source_link_icon_unique_id}>
          <FontAwesomeIcon
            className="icons icon2"
            id={external_link_icon_id}
            icon={faExternalLinkAlt}
          />
        </a>
        {needOfGitHubIcon && (
          <a href={smallProject__githubLink} target="_blank">
            <FontAwesomeIcon
              className="smallProject__githubIcon"
              icon={faGithub}
            />
          </a>
        )}
      </div>
      <h1 className="smallProjects__heading"> {project_heading} </h1>
      <p className="smallProjects__desc"> {project_description} </p>
      <p className="projects__tech">
        <a href={tech_link_1} target="_blank">
          {tech_1}
        </a>
        |
        <a href={tech_link_2} target="_blank">
          {tech_2}
        </a>
        |
        <a href={tech_link_3} target="_blank">
          {tech_3}
        </a>
      </p>
    </div>
  );
};

export default CMSProject;
