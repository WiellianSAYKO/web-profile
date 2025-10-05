"use client";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";
import { useRef, useState, useEffect } from "react";
import { useToast } from "../toast/ToastProvider";

export default function ContactSection() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);
  const { addToast } = (() => {
    try {
      return useToast();
    } catch (e) {
      // If ToastProvider isn't mounted, fallback to no-op addToast
      return { addToast: (_: any) => {} } as { addToast: (t: any) => void };
    }
  })();
  return (
    <div 
    id="Contact"
    className="min-h-screen flex justify-center px-6 bg-gradient-to-r from-blue-500 to-sky-600">
      <div className="w-full max-w-2xl-md md:max-w-screen-lg lg:max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-emerald-300 mb-6 mt-5">Contact Me</h2>

        <Formik
          initialValues={{ name: "", email: "", message: "" }}
          validationSchema={Yup.object({
            name: Yup.string().required("Name is required"),
            email: Yup.string()
              .email("Invalid email address")
              .required("Email is required"),
            message: Yup.string().required("Message is required"),
          })}
              onSubmit={async (_values, { resetForm, setSubmitting }) => {
            if (!formRef.current) return;

            try {
              await emailjs.sendForm(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
                formRef.current,
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string
              );
 
              if (isMounted) {
                addToast({ message: "Message sent successfully ✅", type: "success" });
                setSuccess("Message sent successfully ✅");
                resetForm();
              }
            } catch (error) {
              console.error("EmailJS Error:", error);
              if (isMounted) {
                addToast({ message: "Failed to send message ❌", type: "error" });
                setSuccess("Failed to send message ❌");
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
                  className="w-full block border border-gray-300 rounded-lg p-4 text-lg "
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
                  className="w-full block border border-gray-300 rounded-lg p-4 text-lg"
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
                  className="w-full block border border-gray-300 rounded-lg p-4 text-lg"
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

        {success && <p className="mt-4 text-gray-700 font-medium">{success}</p>}
      </div>
    </div>
  );
}
