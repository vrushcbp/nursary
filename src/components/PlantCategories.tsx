// import React from "react";

// const plantData = [
//   {
//     title: "Ornamental Plants",
//     emoji: "🌺",
//     categories: [
//       { name: "Roses", desc: "Perfect for gardens & bouquets" },
//       { name: "Tulips", desc: "Elegant, colorful flowers" },
//       { name: "Petunias", desc: "Long-lasting blooms" },
//       { name: "Daisies", desc: "Bright, cheerful flowers" },
//     ],
//     foliage: [
//       { name: "Ferns", desc: "Ideal for indoor & outdoor décor" },
//       { name: "Palms", desc: "Adds tropical beauty" },
//       { name: "Money Plants", desc: "Low-maintenance & brings good luck" },
//     ],
//   },
//   {
//     title: "Fruit Plants",
//     emoji: "🍏",
//     categories: [
//       { name: "Mango", desc: "King of fruits, high demand" },
//       { name: "Guava", desc: "Nutrient-rich & fast-growing" },
//       { name: "Papaya", desc: "Great for tropical climates" },
//       { name: "Banana", desc: "Highly productive plant" },
//       { name: "Pomegranate", desc: "Valued for its health benefits" },
//     ],
//   },
//   {
//     title: "Indoor Plants",
//     emoji: "🏠",
//     categories: [
//       { name: "Peace Lily", desc: "Air-purifying & elegant" },
//       { name: "Spider Plant", desc: "Hardy & great for homes" },
//       { name: "Snake Plant", desc: "Low-maintenance, toxin-removing" },
//     ],
//   },
//   {
//     title: "Medicinal Plants",
//     emoji: "🌿",
//     categories: [
//       { name: "Aloe Vera", desc: "Skin & health benefits" },
//       { name: "Tulsi", desc: "Herbal & religious significance" },
//       { name: "Neem", desc: "Used in medicines & skincare" },
//       { name: "Ashwagandha", desc: "Traditional Ayurvedic herb" },
//     ],
//   },
//   {
//     title: "Landscape Plants",
//     emoji: "🌳",
//     categories: [
//       { name: "Decorative Trees", desc: "Enhances public & private spaces" },
//       { name: "Shrubs & Hedges", desc: "Ideal for landscaping projects" },
//       { name: "Grasses", desc: "Used for lawns & parks" },
//     ],
//   },
// ];

// export default function PlantCategories() {
//   return (
//     <section className="px-4 md:px-12 py-10 bg-white">
//       <h2 className="text-3xl font-bold text-green-700 mb-6">
//         🌱 Our Plant Categories
//       </h2>

//       <div className="space-y-10">
//         {plantData.map((category, idx) => (
//           <div key={idx}>
//             <h3 className="text-2xl font-semibold text-green-600 mb-2">
//               {category.emoji} {category.title}
//             </h3>
//             <ul className="space-y-2 pl-4 list-disc text-gray-700">
//               {category.categories?.map((item, index) => (
//                 <li key={index}>
//                   <span className="font-medium">{item.name}</span> – {item.desc}
//                 </li>
//               ))}
//               {category.foliage?.map((item, index) => (
//                 <li key={`foliage-${index}`}>
//                   <span className="font-medium">{item.name}</span> – {item.desc}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         ))}
//       </div>

//       {/* Why Choose Us */}
//       <div className="mt-12 bg-green-50 p-6 rounded-md shadow-md">
//         <h3 className="text-2xl font-bold text-green-800 mb-4">
//           📌 Why Choose Us?
//         </h3>
//         <ul className="list-disc pl-5 space-y-2 text-green-700 font-medium">
//           <li>✅ High-quality plants with export standards</li>
//           <li>✅ Competitive pricing & bulk availability</li>
//           <li>✅ Timely delivery & best packaging</li>
//           <li>✅ Trusted supplier in the global market</li>
//         </ul>
//         <div className="mt-4 text-lg">
//           📞 <strong>Get in Touch for Orders & Inquiries!</strong>
//         </div>
//       </div>
//     </section>
//   );
// }
