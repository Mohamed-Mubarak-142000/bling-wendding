"use client";
import React, { useRef, useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import styles from "./contactus.module.css";

const MobileFrame = React.lazy(
  () => import("@/components/ui/mobileframe/Mobile")
);

import emailjs from "@emailjs/browser";
import { Label, TextInput } from "flowbite-react";
// import dynamic from "next/dynamic";
function Contactus() {
  const formDataRef = useRef<HTMLFormElement | null>(null);
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    message: "",
  });
  const handleChange = (
    // e: any
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    // React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const target = e.target as HTMLInputElement | HTMLTextAreaElement;
    setForm({ ...form, [target.name]: target.value });
    // setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    emailjs
      .send(
        "service_5tz6yw8",
        "template_4m22yrb",
        { ...form },
        // (formDataRef as any).current,
        {
          publicKey: "N9qLzL2P3X7Rut2Mp",
        }
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
        },
        (error) => {
          console.error("Failed to send email:", error.text);
        }
      );
    setForm({
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      message: "",
    });
  };
  return (
    <section className={styles.main_grid_contactus}>
      <div data-aos="fade-right">
        <h3>CONTACT US</h3>
        <h1>We’d love to hear from you</h1>
        <p>Our friendly team would love to hear from you.</p>
        <form ref={formDataRef} onSubmit={handleSubmit}>
          <div className="grid gap-6  md:grid-cols-2">
            <div>
              <label
                htmlFor="first_name"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                First name
              </label>
              <input
                type="text"
                id="first_name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="John"
                value={form.first_name}
                onChange={handleChange}
                name="first_name"
                required
              />
            </div>
            <div>
              <label
                htmlFor="last_name"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Last name
              </label>
              <input
                type="text"
                id="last_name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Doe"
                value={form.last_name}
                onChange={handleChange}
                name="last_name"
                required
              />
            </div>
          </div>
          <div>
            <div className="mb-2 block">
              <Label
                htmlFor="email1"
                value="Your email"
                className="dark:text-gray-900"
              />
            </div>
            <TextInput
              id="email1"
              type="email"
              placeholder="name@flowbite.com"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Phone number
            </label>
            <PhoneInput
              country={"us"}
              inputClass="w-full p-2 border border-gray-300 bg-gray-50 rounded-md focus:ring-blue-500 focus:border-blue-500 "
              dropdownClass="custom-dropdown"
              value={form.phone}
              onChange={(value: string) => {
                // console.log(e);
                handleChange({
                  target: { name: "phone", value },
                } as React.ChangeEvent<HTMLInputElement>);
                // handleChange({ target: { name: "phone", value: e } });
              }}
              // name="phone"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              className="block w-full h-32 text-sm text-gray-900 bg-gray-50 rounded-lg border p-2 border-gray-300 focus:ring-blue-500 focus:border-blue-500 resize-none dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Write your thoughts here..."
              value={form.message}
              onChange={handleChange}
              name="message"
            ></textarea>
          </div>

          <button
            type="submit"
            className="text-white  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base w-full sm:w-auto px-5 py-2.5 text-center "
          >
            Send Your Message
          </button>
        </form>
      </div>

      <div className={styles.sec_main_container}>
        <div className={styles.mobiles_container} data-aos="fade-left">
          <div className={styles.first_mob}>
            <MobileFrame
              video="/contactusmob1.mp4"
              fallback="/contactusfall2.webp"
              />
          </div>
          <MobileFrame
            video="/contactusmob2.mp4"
            fallback="/contactusfall1.webp"
          />
        </div>
      </div>
    </section>
  );
}

export default Contactus;
