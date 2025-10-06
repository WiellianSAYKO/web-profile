import Image from "next/image"; 

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Product Manager at TechCorp",
    feedback: "Working with you was an amazing",
    image: "/image/sarahjohnson.jpg",
  },
  {
    name: "Mr Vincent",
    role: "Founder of GajahDuduk",
    feedback:
      "The collaboration was smooth from start to finish. The project was delivered ahead of schedule and exceeded our expectations.",
    image: "/image/vincent.jpg",
  },
  {
    name: "Sum Ting Wong",
    role: "Founder of xiexie",
    feedback:
      "Very professional and attentive to details. The final product not only looked great but also worked flawlessly",
    image: "/image/sumtingwong.jpg",
  },
  {
    name: "Mr Vincent",
    role: "Founder of GajahDuduk",
    feedback:
      "The collaboration was smooth from start to finish. The project was delivered ahead of schedule and exceeded our expectations.",
    image: "/image/vincent.jpg",
  },
  {
    name: "Mr Vincent",
    role: "Founder of GajahDuduk",
    feedback:
      "The collaboration was smooth from start to finish. The project was delivered ahead of schedule and exceeded our expectations.",
    image: "/image/vincent.jpg",
  },
  {
    name: "Mr Vincent",
    role: "Founder of GajahDuduk",
    feedback:
      "The collaboration was smooth from start to finish. The project was delivered ahead of schedule and exceeded our expectations.",
    image: "/image/vincent.jpg",
  },
];

export default function Testi() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 bg-gradient-to-r from-blue-500 to-sky-600">
      <div className="flex justify-center mb-5">
        <p className="text-3xl font-bold text-emerald-300">Testimonial</p>
      </div>
      <div className="grid md:grid-cols-3 gap-5">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-neutral-900 rounded-3xl shadow-md p-5 flex flex-col items-center text-center hover:scale-105 transition"
          >
            <div className="w-15 h-15 mb-4 relative">
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                width={60}
                height={60}
                className="rounded-full object-cover"
              />
            </div>
            {/* ✅ FIXED LINE */}
            <p className="text-white italic mb-4">{`"${testimonial.feedback}"`}</p>
            <h3 className="font-semibold text-lg text-emerald-300">
              {testimonial.name}
            </h3>
            <span className="text-sm text-gray-500">{testimonial.role}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
