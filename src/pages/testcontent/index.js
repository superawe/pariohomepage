import React, { useEffect, useState } from "react";

import Section from "../../components/Section";

function TestContentPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formSubmitting, setFormSubmitting] = useState(false);
  const [sendError, setSendError] = useState(false);
  const [url, setUrl] = useState("");
  const [content, setContent] = useState("");

  const onSubmit = (evt) => {
    evt.preventDefault();
    if (url.length < 5) {
      return false;
    }
    setSendError(false);
    setFormSubmitting(true);
    setContent("");

    fetch("https://fine-tuned-knowledge.azurewebsites.net/api/Function1?prompt=" + url, {
      method: "GET",
      headers: new Headers({
        wntoken: "abc123",
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setFormSubmitted(true);
        setFormSubmitting(false);
        setSendError(false);
        setContent(data.completion);
      })
      .catch((err) => {
        console.log(err);
        setFormSubmitting(false);
        setSendError(true);
      });
  };

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
                  <h2 className="text-white mb-2">Extract url</h2>
                  <p className="mb-4 text-white"></p>
                  {sendError === true && (
                    <h2 className="text-white mb-2">
                      Något gick fel, försök igen...
                    </h2>
                  )}

                  <form onSubmit={onSubmit} className="form-inline d-flex">
                    <input
                      type="text"
                      className="form-control flex-fill mr-0 mr-sm-2 mb-3 mb-sm-0"
                      id="inputUrl"
                      placeholder="ENTER PROMPT..."
                      value={url}
                      onChange={(e) => setUrl(e.target.value)}
                    />
                    <button type="submit" className="btn btn-primary mx-auto">
                      ANSWER
                    </button>
                  </form>
                  {formSubmitted !== true && formSubmitting !== true && (
                    <h2 className="text mb-2">try something...</h2>
                  )}
                  {formSubmitting === true && (
                    <h2 className="text mb-2">sending...</h2>
                  )}

                  {formSubmitted === true && (
                    <h2 className="text mb-2">sent</h2>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div
            className="row mb-4 mb-lg-5 articlebox"
            dangerouslySetInnerHTML={{ __html: content }}
          ></div>
        </div>
      </section>
    </div>
  );
}

export default TestContentPage;
