import React from "react";
import contact from "../../images/contact.jpg";
import Button from "../Button";
import FormField from "../FormField";

function Contact() {
  return (
    <section className="flex items-stretch w-full bg-gray-100">
      <div className="w-1/2 overflow-hidden">
        <img
          src={contact}
          alt=""
          className="transform -translate-x-10 translate-y-72 scale-190"
        />
      </div>
      <div className="w-1/2 px-6 pb-32 pt-96">
        <div className="px-6">
          <div className="flex items-center">
            <div className="w-12 h-0.5 mr-3 bg-primary"></div>
            <span className="font-medium text-gray-800 ">
              Focus on what’s Imporant
            </span>
          </div>
          <h2 className="pr-3 mt-1 text-4xl font-light font-montserrat">
            Let’s talk about improving your tax submissions
          </h2>
          <p className="mt-4 font-medium text-gray-800">
            Are you worried about a possible audit from the IRS or a collective
            action being taken against you? Don’t wait until it’s too late. The
            experts at Avantage are here to assist you with all of your tax
            needs. Taxes can be stressful and confusing, but our consultants can
            make it easy.
          </p>
        </div>

        <form action="" className="flex flex-wrap px-3 mt-8">
          <FormField type="text" placeholder="Your Name" />
          <FormField type="text" placeholder="Company Name" />
          <FormField type="email" placeholder="Your Email Address" />
          <FormField type="text" placeholder="Phone Number" />
          <div className="w-full px-3 py-1">
            <textarea
              placeholder="How can I help you?"
              className="w-full h-32 px-5 py-3 border border-gray-400 focus:outline-none rounded-4xl"
            />
          </div>
          <Button
            title="Reserve your Free Consultation"
            inverted
            className="py-3 mx-3"
          />
        </form>
      </div>
    </section>
  );
}

export default Contact;
