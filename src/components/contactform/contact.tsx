"use client";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";
import { useRef, useState, useEffect } from "react";
import { toast } from "sonner";

export default function ContactSection() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  return (
    <div
      id="Contact"
      className="min-h-screen flex justify-center px-6 bg-gradient-to-r from-blue-500 to-sky-600"
    >
      <div className="w-full max-w-2xl md:max-w-screen-lg lg:max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-emerald-300 mb-6 mt-5">
          Contact Me
        </h2>

        <Formik
          initialValues={{ name: "", email: "", message: "" }}
          validationSchema={Yup.object({
            name: Yup.string().required("Name is required"),
            email: Yup.string()
              .email("Invalid email address")
              .required("Email is required"),
            message: Yup.string().required("Message is required"),
          })}
          onSubmit={async (_values, { resetForm, setSubmitting }): Promise<void> => {
            if (!formRef.current) return;

            try {
              await emailjs.sendForm(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
                formRef.current,
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string
              );

              if (isMounted) {
                toast.success("✅ Message sent successfully!", {
                  description: "Thank you for contacting me. I'll get back to you soon!",
                });
                resetForm();
              }
            } catch (error) {
              console.error("EmailJS Error:", error);
              if (isMounted) {
                toast.error("❌ Failed to send message", {
                  description: "Please check your internet connection or try again later.",
                });
              }
            } finally {
              setSubmitting(false);
            }
          }}
        >
          {({ isSubmitting }) => (
            <Form
              ref={formRef}
              className="bg-neutral-900 p-12 rounded-2xl shadow-lg space-y-6 w-full max-w-screen-md md:max-w-screen-lg lg:max-w-screen-xl mx-auto"
            >
              {/* Name */}
              <div>
                <Field
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="w-full block border border-gray-300 rounded-lg p-4 text-lg text-white"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-red-500 text-sm mt-1 text-left"
                />
              </div>

              {/* Email */}
              <div>
                <Field
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="w-full block border border-gray-300 rounded-lg p-4 text-lg text-white"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-sm mt-1 text-left"
                />
              </div>

              {/* Message */}
              <div>
                <Field
                  as="textarea"
                  name="message"
                  placeholder="Your Message"
                  rows={6}
                  className="w-full block border border-gray-300 rounded-lg p-4 text-lg text-white"
                />
                <ErrorMessage
                  name="message"
                  component="div"
                  className="text-red-500 text-sm mt-1 text-left"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 text-white py-4 rounded-lg hover:bg-blue-700 transition text-lg"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
