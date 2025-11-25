import React from "react";

const Aboutus = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl mb-2">ABOUT US</h2>
        <p className="text-gray-500 mb-6">We are leading in the plants service fields.</p>
        <p className="text-gray-500 max-w-3xl mb-10">
          Quisque orci quam, vulputate non commodo finibus, molestie ac ante.
          Duis in scelerisque sem. Nulla sit amet varius nunc. Maecenas dui,
          tempor ullamcorper in.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Side - Progress Bars */}
          <div>
            {[
              { label: "Office plants", value: 80 },
              { label: "Field manager", value: 70 },
              { label: "Landscape design", value: 85 },
              { label: "Garden Care", value: 65 },
            ].map((item, index) => (
              <div key={index} className="mb-5">
                <div className="flex justify-between text-sm font-medium text-gray-700 mb-1">
                  <span>{item.label}</span>
                  <span>{item.value}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-green-500 h-2.5 rounded-full"
                    style={{ width: `${item.value}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side - Icons and Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                title: "Quality Products",
                desc: "Intiam eu sagittis est, at commodo lacin libero. Praesent dignissim sed odio vel aliquam manta lagorn.",
                icon: "https://preview.colorlib.com/theme/alazea/img/core-img/b1.png",
              },
              {
                title: "Perfect Service",
                desc: "Intiam eu sagittis est, at commodo lacin libero. Praesent dignissim sed odio vel aliquam manta lagorn.",
                icon: "https://preview.colorlib.com/theme/alazea/img/core-img/b2.png",
              },
              {
                title: "100% Natural",
                desc: "Intiam eu sagittis est, at commodo lacin libero. Praesent dignissim sed odio vel aliquam manta lagorn.",
                icon: "https://preview.colorlib.com/theme/alazea/img/core-img/b3.png",
              },
              {
                title: "Environmentally friendly",
                desc: "Intiam eu sagittis est, at commodo lacin libero. Praesent dignissim sed odio vel aliquam manta lagorn.",
                icon: "	https://preview.colorlib.com/theme/alazea/img/core-img/b4.png",
              },
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-start space-x-4">
                <div className=" text-green-500">
                <img
                  src={item.icon}
                  className="w-20 h-20 object-contain mb-2"
                />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">{item.title}</h4>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutus;
