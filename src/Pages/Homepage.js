import React, { useEffect, useState } from "react";
import HeaderSection from "../components/Header/Header";
import FooterSection from "../components/Footer/Footer";
import DynamicSection from "../components/DynamicSection";
import useStateValue from "../Files/Context/StateProvider";
import About from "../components/About";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Coaching from "../components/Coaching";

const App = ({ match }) => {
  const [{ activeTabIndex, activeViewSlug }, dispatch] = useStateValue();

  useEffect(() => {
    console.log("Page in HomePage Component from (props)", match.params.page);

    dispatch({
      type: "SET_ACTIVE_VIEW_SLUG",
      slug: match.params.page,
    });
  }, [match.params.page]);

  console.log("Page in HomePage Component from (state)", activeViewSlug);

  return (
    <div className="homepage">
      <HeaderSection />
      <DynamicSection>
        {activeTabIndex === 0 && <About />}
        {activeTabIndex === 1 && <Experience />}
        {activeTabIndex === 2 && <Projects />}
        {activeTabIndex === 3 && <Contact />}
        {activeTabIndex === 4 && <Coaching />}
      </DynamicSection>
    </div>
  );
};

export default App;

// const [show, setShow] = useState(false);
// const [loading, setLoading] = useState(false);

// useEffect(() => {
//   setTimeout(() => {
//     const loadingStuff = document.getElementById("loading__stuff");
//     if (loadingStuff) loadingStuff.classList.add("disappear__animation");
//     setTimeout(() => {
//       setLoading(false);
//     }, 400);
//   }, 3000);
// }, [loading]);

// useEffect(() => {
//   window.addEventListener("scroll", () => {
//     if (window.scrollY > 750) {
//       setShow(true);
//     } else {
//       setShow(false);
//     }
//   });

//   return () => {
//     window.removeEventListener("scroll", () => {});
//   };
// }, []);

// let AttachedmailBox = document.getElementById("mail-box");
// let Mail = document.getElementById("gmail");
// if (Mail) {
//   Mail.addEventListener("mouseenter", () => {
//     Mail.classList.add("moveup");
//   });
// }

// if (AttachedmailBox) {
//   AttachedmailBox.addEventListener("mouseenter", () => {
//     Mail.classList.add("moveup");
//   });
// }

// if (AttachedmailBox) {
//   AttachedmailBox.addEventListener("mouseout", () => {
//     Mail.classList.remove("moveup");
//   });
// }

// <div className={`Main_app_ui_container ${loading && "hide__scrollbar"}`}>
//   {loading ? (
//     <Loading />
//   ) : (
//     <>
//       <div className="Slider-space" id="Slider-space"></div>
//       <div className="Root-wrapper">
//         <div className="Attached-mail">
//           <div id="mail-box">
//             <a
//               className="mail"
//               id="gmail"
//               href="mailto:azharzaman.001@gmail.com"
//               target="_blank"
//             >
//               <span>azharzaman.001@gmail.com</span>
//             </a>
//           </div>
//           <div className="Line-btw"></div>
//         </div>
//         <div className="Scroll__to__top__wrapper">
//           <Link
//             to="scrollToTopDest"
//             smooth={true}
//             duration={1500}
//             onClick={() => {
//               console.log("clicked");
//             }}
//           >
//             <FontAwesomeIcon
//               className={`Scroll__to__top__icon ${
//                 show && "Visible__scroll__to__top__icon"
//               }`}
//               icon={faArrowAltCircleUp}
//             />
//           </Link>
//         </div>
//         <HeaderSection />
//         <AboutSection />
//         <ExperienceSection />
//         <ProjectsSection />
//         <ContactSection />
//         <FooterSection />
//       </div>
//     </>
//   )}
// </div>
