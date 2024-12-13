"use client";
import { Label, TextInput } from "flowbite-react";
import React, { useRef, useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import CountrySelector from "./selectcountry/SelectCountry";
import Checkbox from "./checkbox/Checkbox";
import styles from "./paymentformstyle.module.css";
import emailjs from "@emailjs/browser";
function PaymentForm() {
  const formDataRef = useRef<HTMLFormElement | null>(null);
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "01064182529",
    country: "Egypt",
    city: "",
    street: "",
  });
  // const handleChange = (
  //   e: any
  //   // React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  // ) => {
  //   setForm({ ...form, [e.target.name]: e.target.value });
  // };
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
        "template_hr20fcs",
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
      phone: "01064182529",
      country: "Egypt",
      city: "",
      street: "",
    });
  };
  return (
    <div className={styles.payment__main__grid}>
      <h1>Payments Details</h1>
      <p>Complete your purchase by providing your payment details.</p>
      <form
        ref={formDataRef}
        onSubmit={handleSubmit}
        className="flex max-w-md flex-col gap-4"
      >
        {/* First Name && last Name */}
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
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
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
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5"
              placeholder="Doe"
              value={form.last_name}
              onChange={handleChange}
              name="last_name"
              required
            />
          </div>
        </div>
        {/* email */}
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
        {/* Phone Number */}
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
            // onChange={(e: any) => {
            //   // console.log(e);
            //   handleChange({ target: { name: "phone", value: e } });
            // }}
            onChange={(value: string) => {
              // console.log(e);
              handleChange({
                target: { name: "phone", value },
              } as React.ChangeEvent<HTMLInputElement>);
              // handleChange({ target: { name: "phone", value: e } });
            }}
          />
        </div>
        {/* city and street */}
        <div className="grid gap-6  md:grid-cols-2">
          <CountrySelector
            // onChange={(e: any) => {
            //   handleChange({ target: { name: "country", value: e } });
            // }}
            onChange={(value: string | undefined) => {
              // console.log(e);
              handleChange({
                target: { name: "phone", value },
              } as React.ChangeEvent<HTMLInputElement>);
              // handleChange({ target: { name: "phone", value: e } });
            }}
          />
          <div>
            <label
              htmlFor="city"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              City
            </label>
            <TextInput
              id="city"
              type="text"
              sizing="md"
              style={{ backgroundColor: "white" }}
              name="city"
              onChange={handleChange}
            />
          </div>
        </div>
        {/* Address */}
        <div>
          <label
            htmlFor="street"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Address
          </label>
          <TextInput
            id="street"
            type="text"
            sizing="sm"
            style={{ backgroundColor: "white" }}
            name="street"
            onChange={handleChange}
            placeholder="Street 432 ....."
          />
        </div>
        {/*Payment Method */}
        <div className="pb-5  border-b">
          <div>
            <label
              htmlFor="payment"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Payment Methods
            </label>
            <Checkbox />
          </div>
        </div>
        <div className="flex justify-between">
          <h4 className="text-base text-black">Coupon Booklet Price:</h4>
          <h4 className="font-extrabold" style={{ color: "#6c5656" }}>
            3000 EGP
          </h4>
        </div>
        <button className="text-white  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Submit Your Request
        </button>
      </form>
    </div>
  );
}

export default PaymentForm;
