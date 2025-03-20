export const Testimonials = () => {
  return (
    <section className="bg-[#F5F7FA] w-full px-36 py-8 mt-12 max-md:px-5">
      <div className="flex gap-[40px_78px] flex-wrap items-center max-w-[1215px] mx-auto">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/4c98b7f234104e218974daf344396990e1c2b3dd?placeholderIfAbsent=true"
          alt="Testimonial"
          className="w-[326px] object-contain shadow-[0px_8px_16px_0px_rgba(171,190,209,0.40)]"
        />

        <div className="flex-1 min-w-60">
          <blockquote className="text-[#717171] text-base font-medium leading-6">
            Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
            lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu
            enim metus. Vivamus sed libero ornare, tristique quam in, gravida
            enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit
            at ligula molestie, nec molestie mi blandit. Suspendisse cursus
            tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse
            eget lorem eu turpis vestibulum pretium. Suspendisse potenti.
            Quisque malesuada enim sapien, vitae placerat ante feugiat eget.
            Quisque vulputate odio neque, eget efficitur libero condimentum id.
            Curabitur id nibh id sem dignissim finibus ac sit amet magna.
          </blockquote>

          <div className="mt-4">
            <div className="text-[#4CAF4F] text-xl font-semibold">
              Tim Smith
            </div>
            <div className="text-[#89939E] text-base mt-2">
              British Dragon Boat Racing Association
            </div>
          </div>

          <div className="flex items-center gap-8 mt-8 flex-wrap">
            <div className="flex items-center gap-[40px_41px] flex-wrap">
              {[
                "https://cdn.builder.io/api/v1/image/assets/TEMP/d8365183e3cda017085f7b09d2cf9babae9b58b7?placeholderIfAbsent=true",
                "https://cdn.builder.io/api/v1/image/assets/TEMP/8e97a94da6ffb8eeccfa51e47a418de364a37544?placeholderIfAbsent=true",
                "https://cdn.builder.io/api/v1/image/assets/TEMP/43d0d562aa043fabc2d1e5fcd80399641bb42942?placeholderIfAbsent=true",
                "https://cdn.builder.io/api/v1/image/assets/TEMP/2a7ed08cdec888a4ae1dcc492b848e45ca9bafd3?placeholderIfAbsent=true",
                "https://cdn.builder.io/api/v1/image/assets/TEMP/daf6ee819ebb53d7059853d237a69d4982e636a3?placeholderIfAbsent=true",
                "https://cdn.builder.io/api/v1/image/assets/TEMP/da5cf35b0c48d4e0797b5110d46d307f4c23906c?placeholderIfAbsent=true",
              ].map((url, index) => (
                <img
                  key={index}
                  src={url}
                  alt={`Client ${index + 1}`}
                  className="w-12 object-contain"
                />
              ))}
            </div>
            <div className="flex items-center gap-2 text-xl text-[#4CAF4F] font-semibold">
              <span>Meet all customers</span>
              <div className="w-6 h-6 rotate-180" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
