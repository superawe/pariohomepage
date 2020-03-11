import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const InViewContactForm = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: "100px"
  });
  useEffect(() => {
    if (inView) {
      fetch("https://pario-api.azurewebsites.net/api/Visitors", {
        method: "POST",
        headers: new Headers(),
        body: JSON.stringify({ ua: navigator.userAgent })
      })
        .then(res => res.json())
        .then(data => {
          console.log(data);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }, [inView]);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formSubmitting, setFormSubmitting] = useState(false);
  const [sendError, setSendError] = useState(false);
  const [email, setEmail] = useState("");

  const onSubmit = evt => {
    evt.preventDefault();
    if (email.length < 5) {
      return false;
    }
    setSendError(false);
    setFormSubmitting(true);

    fetch("https://pario-api.azurewebsites.net/api/Contact", {
      method: "POST",
      headers: new Headers(),
      body: JSON.stringify({ email })
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setFormSubmitted(true);
        setFormSubmitting(false);
        setEmail("");
        setSendError(false);
      })
      .catch(err => {
        console.log(err);
        setFormSubmitting(false);
        setSendError(true);
      });
  };

  return (
    <section id="#signup" name="signup" className={"signup-section"} ref={ref}>
      <div className="container">
        <div className="row">
          <div className="col-md-10 col-lg-8 mx-auto text-center">
            <i className="fa fa-paper-plane fa-2x mb-2 text-white"></i>
            <h2 className="text-white mb-2">Vill du veta mer?</h2>
            <p className="mb-4 text-white">
              Efter många år i branschen har jag ett rikt kontaktnät av
              utvecklare, designers, uxare, testare och marknadsförare. Lämna
              din e-postadress och låt oss diskutera hur jag kan hjälpa er.
            </p>
            {sendError === true && (
              <h2 className="text-white mb-2">
                Något gick fel, försök igen...
              </h2>
            )}

            {formSubmitted !== true && formSubmitting !== true && (
              <form onSubmit={onSubmit} className="form-inline d-flex">
                <input
                  type="email"
                  className="form-control flex-fill mr-0 mr-sm-2 mb-3 mb-sm-0"
                  id="inputEmail"
                  placeholder="SKRIV DIN E-POSTADRESS..."
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
                <button type="submit" className="btn btn-primary mx-auto">
                  Kontakta mig
                </button>
              </form>
            )}
            {formSubmitting === true && (
              <h2 className="text-white mb-2">skickar...</h2>
            )}

            {formSubmitted === true && (
              <h2 className="text-white mb-2">Tack! Vi hörs snart</h2>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InViewContactForm;
