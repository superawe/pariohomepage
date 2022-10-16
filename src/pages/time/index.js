import React, { useEffect, useState } from "react";

import Section from "../../components/Section";

function TimePage() {
  useEffect(() => {
    window.scrollTo(0, 0);

    var today = new Date();
    var date =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();
    var time =
      today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date + " " + time;

    setTime(dateTime);
  });

  const [time, setTime] = useState("");

  return (
    <div id="home">
      <Section
        name="articles"
        classList="text-center"
        html={
          <div className="container">
            <div className="row">
              <div className="col-lg-8 mx-auto">
                <p className="text-white-50">Arvids lilla testsida</p>
              </div>
            </div>
          </div>
        }
      ></Section>
      <section id="articlelist" name="articlelist" className="articlelist">
        <div className="container">
          <div className="row mb-4 mb-lg-5 articlebox">
            <div className="container">
              <div className="row">
                <div className="col-md-10 col-lg-12 mx-auto text-center">
                  <h2 className="text mb-2">Kolla klockan</h2>
                  <h2 className="text mb-2">{time}</h2>
                  <p className="mb-4 text-white"></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TimePage;
