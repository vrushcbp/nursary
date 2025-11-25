export default function Services() {
    const services = [
      {
        title: "Plants Care",
        description:
          "In Aenean purus, pretium sito amet sapien denim moste consectet sedoni urna placerat sodales.service its.",
        icon: "https://preview.colorlib.com/theme/alazea/img/core-img/s1.png.webp",
      },
      {
        title: "Pressure Washing",
        description:
          "In Aenean purus, pretium sito amet sapien denim moste consectet sedoni urna placerat sodales.service its.",
        icon: "https://preview.colorlib.com/theme/alazea/img/core-img/s2.png",
      },
      {
        title: "Tree Service & Trimming",
        description:
          "In Aenean purus, pretium sito amet sapien denim moste consectet sedoni urna placerat sodales.service its.",
        icon: "https://preview.colorlib.com/theme/alazea/img/core-img/s3.png",
      },
    ];
  
    return (
      <section className="py-5 px-6 md:px-12">
        <h2 className="text-3xl md:text-4xl  text-center mb-2 ">
          Our Services
        </h2>
        <p className="mb-12 text-center text-gray-500">We provide the perfect service for you.</p>
  
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Section */}
          <div className="md:w-1/2 w-full space-y-8">
            {services.map((service, index) => (
              <div key={index} className="flex items-start gap-4">
                <img
                  src={service.icon}
                  alt={service.title}
                  className="w-12 h-12 object-contain"
                />
                <div>
                  <h3 className="text-xl font-semibold ">
                    {service.title}
                  </h3>
                  <p className="text-gray-500">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
  
          {/* Right Section - Video Card with matching height */}
          <div className="md:w-1/2 w-full">
            <div className="h-full w-full rounded-lg shadow-lg overflow-hidden bg-white flex items-center justify-center">
              <iframe
                className="w-full h-[100%] min-h-[300px] rounded-lg"
                src="https://www.youtube.com/embed/72ijtwfzhkA"
                title="Plant Nursery Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    );
  }
  