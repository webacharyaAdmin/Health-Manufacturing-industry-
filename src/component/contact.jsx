import React from "react";
import Navigation from "./common_component/navigation";
import contact_banner from "../assets/contact_banner.png";
import message from "../assets/message.svg";
import location from "../assets/ion_location.svg";
import Footer from "./common_component/footer";
import img from '../assets/contact_form_img.png'
const Contact = () => {
  return (
    <div>
      <div
        className="h-[45rem] bg-cover bg-center bg-no-repeat pt-5 md:relative rounded-b-[2.5rem] flex flex-col items-center text-center  "
        style={{ backgroundImage: `url(${contact_banner})` }}
      >
        <Navigation />

        <div className="text-white m-auto self-center ">
          <label className="text-[2rem] font-medium">Get Touch With Us</label>
          <p>monday-friday:9am-5pm</p>
          <p>34-A demo park,Delhi,india</p>
        </div>
      </div>

      {/* contact form */}

      <div className="w-full">
        <div className="m-5 md:flex md:gap-12 md:m-[5rem] md:justify-center md:items-center  ">
          <img src={img} alt="" className="hidden md:flex" />
          <div className="space-y-5 md:w-[50rem]">
            <div>
              <label className="text-[1.8rem] md:text-[2.6rem]">
                Contact Us
              </label>
              <p className="text-[0.9rem] w-[15rem] my-5 md:w-full md:text-[1.5rem]">
                We'd love to hear from you. Fill out the form below to get in
                touch.
              </p>
            </div>
            <div className="flex flex-col space-y-5 md:flex-row md:space-y-0 md:gap-5">
              <input
                type="text"
                placeholder="First Name"
                className="w-full h-12 p-5 border-2 rounded-xl bg-[#17340913]"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-full h-12 p-5 border-2 rounded-xl bg-[#17340913]"
              />
            </div>
            <input
              type="email"
              placeholder="Email"
              className="w-full h-12 p-5 border-2 rounded-xl bg-[#17340913]"
            />
            <input
              type="text"
              placeholder="Address"
              className="w-full h-40 p-5 border-2 rounded-xl bg-[#17340913]  "
            />
            <button className="w-full h-12 border-2 rounded-xl bg-[#279EFF] text-white font-semibold">
              Submit
            </button>
          </div>
        </div>
      </div>

      {/* details */}
      <div className="md:flex md:justify-center md:gap-64">
        <div className="mt-10 ">
          <div>
            <label className="w-full text-[1.5rem] font-semibold flex flex-center text-center items-center justify-center md:text-left md:text-[2.5rem] leading-tight md:justify-start">
              Need Help ? Get <br />
              in Touch
            </label>
            <p className="hidden md:flex text-lg md:w-[30rem] ">
              This ensures that your items are well-protected during transit Our
              products are meticulously packaged using industry-standard
              materials and techniques.{" "}
            </p>
          </div>
        </div>
        <div className="space-y-10 mt-16 md:flex  md:w-fit md:mt-0 md:space-y-0 gap-40">
          <div className="w-full flex flex-col justify-center items-center text-center space-y-2">
            <div className="flex gap-3">
              <img src={message} alt="" />
              <p className="font-semibold md:text-xl">Contact Us</p>
            </div>
            <div className="md:text-lg">
              <p>ayushbahuguna76@gmail.com</p>
              <p className="text-[0.9rem] md:text-lg">+91-7078303280</p>
            </div>
          </div>

          <div className="w-full flex flex-col justify-center items-center text-center space-y-2 ">
            <div className="flex gap-3">
              <img src={location} alt="" />
              <p className="font-semibold md:text-xl">Contact Us</p>
            </div>
            <div className="md:text-lg">
              <p>ayushbahuguna76@gmail.com</p>
              <p className="text-[0.9rem]">+91-7078303280</p>
            </div>
          </div>
        </div>
      </div>
      {/* Map_location */}

      <div className="w-full ">
        <div className=" m-5 pt-16 md:mx-16">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14008.667860527234!2d77.01711855700067!3d28.624757601728408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d05442056e727%3A0xccdd1313fcd42184!2sVipin%20Garden%2C%20Nawada%2C%20Delhi%2C%20110059%2C%20India!5e0!3m2!1sen!2sjp!4v1737228479652!5m2!1sen!2sjp"
            width="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-xl h-[30rem] "
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
