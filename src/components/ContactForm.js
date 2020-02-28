import React from "react";

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      formSumitted: false,
      formSubmitting: false,
      sendError: false
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  componentWillReceiveProps(nextProps) {}

  componentDidMount() {
    console.log(navigator.userAgent);
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

  onSubmit(event) {
    event.stopPropagation();
    event.preventDefault();
    if (this.state.email.length < 5) {
      return false;
    }
    this.setState({ sendError: false });
    this.setState({ formSubmitting: true });

    fetch("https://pario-api.azurewebsites.net/api/Contact", {
      method: "POST",
      headers: new Headers(),
      body: JSON.stringify({ email: this.state.email })
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.setState({ formSubmitted: true });
        this.setState({ formSubmitting: false });
        this.setState({ email: "" });
        this.setState({ sendError: false });
      })
      .catch(err => {
        console.log(err);
        this.setState({ formSubmitting: false });
        this.setState({ sendError: true });
      });
  }

  handleChange(event) {
    this.setState({ email: event.target.value });
  }

  render() {
    return (
      <section id="#signup" name="signup" className={"signup-section"}>
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
              {this.state.sendError === true && (
                <h2 className="text-white mb-2">
                  Något gick fel, försök igen...
                </h2>
              )}

              {this.state.formSubmitted !== true &&
                this.state.formSubmitting !== true && (
                  <form onSubmit={this.onSubmit} className="form-inline d-flex">
                    <input
                      type="email"
                      className="form-control flex-fill mr-0 mr-sm-2 mb-3 mb-sm-0"
                      id="inputEmail"
                      placeholder="Skriv din e-postadress..."
                      value={this.state.email}
                      onChange={this.handleChange}
                    />
                    <button type="submit" className="btn btn-primary mx-auto">
                      Kontakta mig
                    </button>
                  </form>
                )}
              {this.state.formSubmitting === true && (
                <h2 className="text-white mb-2">skickar...</h2>
              )}

              {this.state.formSubmitted === true && (
                <h2 className="text-white mb-2">Tack! Vi hörs snart</h2>
              )}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ContactForm;
