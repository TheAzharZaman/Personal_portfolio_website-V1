import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import "./CoachingOverview.css";

const CoachingOverview = () => {
  const [readWholeOverviewState, setReadWholeOverviewState] = useState(false);

  const history = useHistory();

  const proceedToEnroll = () => {
    if (!readWholeOverviewState) {
      document.getElementById("read__confirmation").classList.add("setError");
    } else {
      document
        .getElementById("read__confirmation")
        .classList.remove("setError");
      history.push("/coaching/front-end-development/batch1/enrollment");
    }
  };

  return (
    <div className="coaching__overview">
      {/* <h1>Course Overview</h1> */}
      <div className="courseOverview__contentCont">
        <h1>Front-End-Development Bootcamp</h1>
        <p className="greetings">
          Asslam-u-Alaikum Friend/Brother/Sister
          <small>(pick what suits you)</small>
        </p>
        <p className="overview">
          I have decided to teach Pakistani youth <small>(like me)</small>, to
          Provide the most technical skill on this planet right now. Its no
          doubt that, businesses in Eastern parts of world will be shifted
          online in no period. So if you want to have ability to take this as an
          opprtunity and earn money from this trend continously upgoing, thats
          why you might be here. I as a programmer can judge, this trend is not
          going downward atleast for next 30 years. If you are with me, we will
          be providing oppurtunties to local businesses to shift online.
        </p>
        <p className="overview">
          I can help you become an expert{" "}
          <a
            href="https://skillcrush.com/blog/skills-to-become-a-front-end-developer/"
            target="_target"
          >
            Front-end-Developer
          </a>{" "}
          and harvest as much oppurtunities as possible, from this upgoing
          trend. I think it would be good. So if you are interested please go
          through these details and click 'Interested' at the bottom. Otherwise
          sorry for this disturbance, and your time.
        </p>

        <div className="course__outcomes">
          <h1 className="feild__heading">
            Course Roadmap:{" "}
            <span className="heading__desc">
              (What you would will be learning)
            </span>
          </h1>
          <h2 className="feild__desc">
            Complete roadmap of this Bootcamp would be discussed in first class,
            here is the brief overview:
          </h2>

          <ul className="feild__points">
            <FieldPoint2 feildPoint="HTML5" />
            <FieldPoint2 feildPoint="CSS2/3 with Preprocessors like Sass/Less" />
            <FieldPoint2 feildPoint="JavaScript" />
            <FieldPoint2 feildPoint="Create Basic Programmes with JavaScript" />
            <FieldPoint2 feildPoint="JavaScript Frameworks Overview" />
            <FieldPoint2 feildPoint="Complete JavaScript Library ReactJs" />
            <FieldPoint2 feildPoint="Core/Advance concepts of ReactJs" />
            <FieldPoint2 feildPoint="Creating PWA with ReactJs" />
            <FieldPoint2 feildPoint="Everything about Front-End-Development" />
          </ul>
        </div>
        <div className="course__outcomes">
          <h1 className="feild__heading">
            Outcomes:{" "}
            <span className="heading__desc">
              (What you would get after 3 months bootcamp)
            </span>
          </h1>
          <h2 className="feild__desc">
            I know most of the people are straight-forward, so lets come to
            point
          </h2>

          <ul className="feild__points">
            <FieldPoint feildPoint="By the end of this bootcamp you will be able to build website like my website" />
            <FieldPoint feildPoint="You would be in a position to freelance or move even deeper to get full-time job." />
            <FieldPoint feildPoint="Atleast you will be able to start teaching as part-time, get more knowledge, get more exposure, get more skills, and at the end you would be even better developer" />
            <FieldPoint feildPoint="After the end of this bootcamp, after some practice you will be able to clone or create any kind of static website." />
            <FieldPoint feildPoint="After some more pratice of fundamentals I taught you, you would be able to clone basic functionalities of any web appllications, like I did (see my portfolio)." />
            <FieldPoint feildPoint="You would be able to start your own Project." />
            <FieldPoint feildPoint="After some more practice and adding more dynamicity, you might be doing a job for $3-7k/Month" />
          </ul>
        </div>
        <div className="course__outcomes">
          <h1 className="feild__heading">
            Way of Learning:{" "}
            <span className="heading__desc">
              (How you will learn in this Bootcamp)
            </span>
          </h1>
          <h2 className="feild__desc">
            This learning style is designed by me, later on we might alter it
            according to ease of majority students:
          </h2>

          <ul className="feild__points">
            <FieldPoint2 feildPoint="Online Classes on Zoom Meetings / Mircrosoft Teams (about 1:30:00 -- 3:00:00 hours)" />
            <FieldPoint2 feildPoint="+ Half hour QNAs session (where I will answer and ask questions)" />
            <FieldPoint2 feildPoint="Classes time would be decided by voting procedure" />
            <FieldPoint2 feildPoint="Throughout small assignments/tasks of small programmes" />
            <FieldPoint2 feildPoint="Whatsapp group talks 24/7 hours" />
            <FieldPoint2 feildPoint="Relevant youtube tutorials (if needed)" />
            <FieldPoint2 feildPoint="+ Your suggestions will be considered if majority aggreed" />
          </ul>
        </div>

        <div className="course__outcomes">
          <h1 className="feild__heading">
            Fee Structure:{" "}
            <span className="heading__desc">
              (How much every student will pay me)
            </span>
          </h1>
          <h2 className="feild__desc">
            This is something where Pakistanis don't touch something, but don't
            worry fee is negligible. First of all let me mention, average fee
            for Programming bootcamps in Pakistan and India is 10000/Month. You
            can confirm from any where. Here is what you would pay me, accept
            you are not in position to pay:
          </h2>

          <ul className="feild__points feild__pointsSpec">
            <FieldPoint feildPoint="First 3 Days (free trial)" />
            <FieldPoint feildPoint="First Month (PKR 500 total) " />
            <FieldPoint2
              isSubPoint
              feildPoint="First month > First installment: PKR 250 (Month Start)"
            />
            <FieldPoint2
              isSubPoint
              feildPoint="First month > Second installment: PKR 250 (Month End)"
            />
            <FieldPoint feildPoint="Second Month (PKR 1000 total) " />
            <FieldPoint2
              isSubPoint
              feildPoint="Second month > First installment: PKR 500 (Month Mid)"
            />
            <FieldPoint2
              isSubPoint
              feildPoint="Second month > Second installment: PKR 500 (Month End)"
            />
            <FieldPoint feildPoint="Third Month (PKR 1500 total) " />
            <FieldPoint2
              isSubPoint
              feildPoint="Third month > First installment: PKR 1000 (Month Mid)"
            />
            <FieldPoint2
              isSubPoint
              feildPoint="Third month > Second installment: PKR 500 (Month End)"
            />
          </ul>
          <h3 className="total">Total: 3000 (avg. 1000/Month)</h3>
        </div>
        <div className="course__requirments">
          <h1 className="feild__heading">
            Requirements:{" "}
            <span className="heading__desc">(What you need to start)</span>
          </h1>
          <h2 className="feild__desc">
            And the most important thing, what you need to start learning code;
          </h2>

          <ul className="feild__points">
            <FieldPoint feildPoint="One Laptop/Computer (with mouse/keyboard)" />
            <FieldPoint feildPoint="Internet connection at the time of class, no need of internet for coding." />
            <FieldPoint feildPoint="Little knowledge of Internet" />
            <FieldPoint feildPoint="No prior knowledge of coding is required, this bootcamp will be completely beginner oriented" />
            <FieldPoint feildPoint="And the most important thing active and working brain with little creativity and problem understanding skills" />
            <FieldPoint feildPoint="And must have requirement atleast one Heart, if are thinking to learn code without giving it heart, you are on wrong track. Believe me once you started understanding it, you will be called 'coding addict'" />
          </ul>
        </div>
        <h1 className="thatsIt">Thats it, See you in class</h1>
      </div>

      <div className="page__controls">
        <div className="read__confirmation" id="read__confirmation">
          <input
            value={readWholeOverviewState}
            onChange={(e) => setReadWholeOverviewState(!readWholeOverviewState)}
            type="checkbox"
          />{" "}
          {readWholeOverviewState}
          <p>I have read the whole overview</p>
        </div>
        <a onClick={proceedToEnroll}>
          <button>Interested</button>
        </a>
      </div>
    </div>
  );
};

const FieldPoint = ({ feildPoint }) => {
  return (
    <li>
      <h2 className="feild__point">✅ {feildPoint}</h2>
    </li>
  );
};

const FieldPoint2 = ({ feildPoint, isSubPoint }) => {
  return (
    <li>
      <h2 className={`feild__point ${isSubPoint && "smallLeftMargin"}`}>
        ¬ {feildPoint}
      </h2>
    </li>
  );
};

export default CoachingOverview;
