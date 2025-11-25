import React from "react";
import { Link } from "react-router-dom";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Amit Sharma",
    role: "Plant Enthusiast",
    message:
      "GreenHaven has transformed my balcony into a mini jungle. The plants are healthy and delivery was super fast!",
    avatar:
      "https://t3.ftcdn.net/jpg/11/49/36/08/240_F_1149360809_sQoGqsMttVODwAjnmlL3118etfhoN4Sy.jpg",
    link: "/testimonials/amit",
  },
  {
    name: "Riya Verma",
    role: "Interior Designer",
    message:
      "The variety of indoor plants they offer is unmatched. I always recommend GreenHaven to my clients.",
    avatar:
      "https://as1.ftcdn.net/v2/jpg/11/49/36/08/1000_F_1149360880_GJcGmentQo2O1TOvMm4KU9l20hs6Ai8E.jpg",
    link: "/testimonials/riya",
  },
  {
    name: "Dev Patel",
    role: "Eco Blogger",
    message:
      "Their plant quality and customer service is amazing. I'm a repeat customer for a reason!",
    avatar:
      "https://t3.ftcdn.net/jpg/11/49/36/08/240_F_1149360809_sQoGqsMttVODwAjnmlL3118etfhoN4Sy.jpg",
    link: "/testimonials/dev",
  },
];

export default function Testimonials() {
  return (
    <section className=" py-16 px-4 md:px-10 lg:px-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl   mb-4">
          What Our Customers Say
        </h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          We’ve helped thousands of plant lovers grow beautiful green spaces.
          Here’s what some of them had to say:
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg flex flex-col justify-between hover:shadow-xl transition duration-300"
            >
              <Quote className="text-green-300 mb-4" size={32} />
              <p className="text-gray-700 italic mb-6">"{t.message}"</p>
              <div className="flex items-center gap-4">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="text-left">
                  <h4 className="text-sm font-semibold text-gray-900">
                    {t.name}
                  </h4>
                  <p className="text-xs text-gray-500">{t.role}</p>
                </div>
              </div>
              <div className="mt-4 text-sm">
                <Link
                  to={t.link}
                  className="text-green-600 font-medium hover:underline"
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
