import React, { useState, useRef } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import Pagetitle from "../elements/Pagetitle";
import emailjs from '@emailjs/browser';


const initialState = {
  name: "",
  email: "",
  subject: "",
  message: "",
}

function Contact() {
  const form = useRef();
  const [formData, setFormData] = useState(initialState);

  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    validateFormData();
    if (!error) {
      emailjs.sendForm('service_7pdw8ap', 'template_6h7w2be', form.current, 'nJlmzX0_uoDZ73JEw')
        .then((result) => {
          resetFormData();
        }, (error) => {
          console.log(error.text);
        });
    }
  }


  const validateFormData = () => {
    if (!formData.name) {
      setError(true);
      setMessage("Name is required");
    } else if (!formData.email) {
      setError(true);
      setMessage("Email is required");
    } else if (!formData.subject) {
      setError(true);
      setMessage("Subject is required");
    } else if (!formData.message) {
      setError(true);
      setMessage("Message is required");
    }
  }

  const resetFormData = () =>{
    setError(false);
      setMessage("You message has been sent!!!");
      setFormData(initialState);
  }

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  const handleAlerts = () => {
    if (error && message) {
      return <div className="alert alert-danger mt-4">{message}</div>;
    } else if (!error && message) {
      return <div className="alert alert-success mt-4">{message}</div>;
    } else {
      return null;
    }
  };

  return (
    <section id="contact">
      <div className="container">
        <Pagetitle title="Get in Touch" />

        <div className="row">
          <div className="col-md-4">
            <div className="contact-info">
              <ScrollAnimation
                animateIn="fadeInUp"
                animateOut="fadeInOut"
                animateOnce={true}
              >
                <h3>Let's talk about everything!</h3>
              </ScrollAnimation>
              <ScrollAnimation
                animateIn="fadeInUp"
                animateOut="fadeInOut"
                animateOnce={true}
              >
                <p>
                  Don't like forms? Send me an{" "}
                  <a href="mailto:mohaiman.dev@gmail.com">email</a>. 👋
                </p>
              </ScrollAnimation>
            </div>
          </div>

          <div className="col-md-8">
            <form
              ref={form}
              id="contact-form"
              className="contact-form mt-6"
              onSubmit={submitHandler}
            >
              <div className="row">
                <div className="column col-md-6">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      id="InputName"
                      placeholder="Your name"
                      onChange={handleChange}
                      value={formData.name}
                    />
                  </div>
                </div>

                <div className="column col-md-6">
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      id="InputEmail"
                      name="email"
                      placeholder="Email address"
                      onChange={handleChange}
                      value={formData.email}
                    />
                  </div>
                </div>

                <div className="column col-md-12">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      id="InputSubject"
                      name="subject"
                      placeholder="Subject"
                      onChange={handleChange}
                      value={formData.subject}
                    />
                  </div>
                </div>

                <div className="column col-md-12">
                  <div className="form-group">
                    <textarea
                      name="message"
                      id="InputMessage"
                      className="form-control"
                      rows="5"
                      placeholder="Message"
                      onChange={handleChange}
                      value={formData.message}
                    ></textarea>
                  </div>
                </div>
              </div>
              <button
                type="submit"
                name="submit"
                id="submit"
                value="Submit"
                className="btn btn-default"
              >
                Send Message
              </button>
            </form>
            {handleAlerts()}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
