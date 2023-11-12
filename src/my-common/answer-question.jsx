import React, { useState } from "react";
// import answer_question_data from "../data/answer-question-data";

const AnswerQuestion = ({ style }) => {
  const [shadow, setShadow] = useState(2);

  const answer_question_data = [
    {
      id: 1,
      question: (
        <>
          Is it available in languages other than
          <br />
          English?
        </>
      ),
      answer: (
        <>
          Not yet, currently only available in English. The developer is still
          trying to provide other languages for future updates. As an
          alternative, you can use Google Translate on the website page to
          access it in another language.
        </>
      ),
      accordion_id: "headingOne",
      collapsed: "collapsed",
      data_bs_target: "#collapseOne",
      aria_controls: "collapseOne",
      actice: "",
    },
    {
      id: 3,
      question: "How do I register an account on e-SchoolConnect?",
      answer: (
        <>
          There is no register feature available for teachers and students.
          Account creation is carried out by the admin at each school. This
          avoids creating more than one account and errors in creating accounts
          by teachers and students. Only admins have the account registration
          feature.
        </>
      ),
      accordion_id: "headingThree",
      collapsed: "collapsed",
      data_bs_target: "#collapseThree",
      aria_controls: "collapseThree",
      actice: "",
    },
    {
      id: 2,
      question: (
        <>
          Can one e-SchoolConnect account be used <br />
          for both teacher and student roles?
        </>
      ),
      answer: (
        <>
          Can't. Teacher and student accounts have different roles and different
          features too. Features available on teacher accounts cannot be
          accessed by student accounts and vice versa.
        </>
      ),
      accordion_id: "headingTwo",
      collapsed: "",
      data_bs_target: "#collapseTwo",
      aria_expanded: true,
      aria_controls: "collapseTwo",
      show: true,
      actice: "",
    },
    {
      id: 4,
      question: "What devices can be used to access e-SchoolConnect?",
      answer: (
        <>
          e-SchoolConnect can be accessed via various devices with an internet
          connection, such as desktop computers, laptops, tablets and
          smartphones.
        </>
      ),
      accordion_id: "headingFour",
      collapsed: "collapsed",
      data_bs_target: "#collapseFour",
      aria_controls: "collapseFour",
      actice: "",
    },
    // {
    //   id: 5,
    //   question: "How does signing up work?",
    //   answer: (
    //     <>
    //       The Softec Shop is built right into your account dashboard, and is
    //       accessible immediately after signing up.{" "}
    //     </>
    //   ),
    //   accordion_id: "headingFive",
    //   collapsed: "collapsed",
    //   data_bs_target: "#collapseFive",
    //   aria_controls: "collapseFive",
    //   actice: "",
    // },
  ];

  return (
    <>
      <div className="tp-custom-accordion">
        <div
          className={`accordion ${style && "tp-inner-font"}`}
          id="accordionExample"
        >
          {answer_question_data.map((item) => (
            <div
              onClick={() => setShadow(item.id)}
              key={item.id}
              className={`accordion-items ${item.show} ${
                shadow === item.id && "tp-faq-active"
              }`}
            >
              <h2 className="accordion-header" id={item.accordion_id}>
                <button
                  className={`accordion-buttons ${item.collapsed}`}
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={item.data_bs_target}
                  aria-expanded={item.aria_expanded}
                  aria-controls={item.aria_controls}
                  style={{ lineHeight: "30px" }}
                >
                  {item.question}
                  <span className="accordion-btn"></span>
                </button>
              </h2>
              <div
                id={item.aria_controls}
                className={`accordion-collapse collapse ${
                  item.show ? "show" : ""
                }`}
                aria-labelledby={item.accordion_id}
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-content">
                  <p>{item.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AnswerQuestion;
