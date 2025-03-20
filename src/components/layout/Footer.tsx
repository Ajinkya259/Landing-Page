export const Footer = () => {
  return (
    <footer className="w-full">
      <div className="bg-[#263238] px-[165px] py-16 max-md:px-5">
        <div className="flex gap-[40px_125px] flex-wrap max-w-[1215px] mx-auto">
          <div className="flex min-w-60 flex-col w-[350px]">
            <div className="flex items-center gap-2.5">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/de030ddc9826cf581f6fa38529d3e43b84c68e6b?placeholderIfAbsent=true"
                alt="Footer Logo Icon"
                className="w-[43px] object-contain"
              />
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/991acc2c2ee639f23798b46d3e2a6711b0c4c81b?placeholderIfAbsent=true"
                alt="Footer Logo Text"
                className="w-[138px] object-contain"
              />
            </div>

            <div className="text-sm text-[#F5F7FA] text-center mt-10">
              <p>Copyright © 2020 Nexcent ltd.</p>
              <p className="mt-2">All rights reserved</p>
            </div>

            <div className="flex gap-4 mt-10">
              {[
                "https://cdn.builder.io/api/v1/image/assets/TEMP/583fe462e9ff92084ff41b9f3cab7cfebcb9c0ba?placeholderIfAbsent=true",
                "https://cdn.builder.io/api/v1/image/assets/TEMP/23b570dbf7f4592bdc168036d2d5fa539daa3265?placeholderIfAbsent=true",
                "https://cdn.builder.io/api/v1/image/assets/TEMP/eae27ab4e34b7a8d1ee1aab85dd95223d9c6ba7a?placeholderIfAbsent=true",
                "https://cdn.builder.io/api/v1/image/assets/TEMP/18f4cfdaf782ad7b4ca3e339560cdc8cc78bc1ac?placeholderIfAbsent=true",
              ].map((url, index) => (
                <img
                  key={index}
                  src={url}
                  alt={`Social Media ${index + 1}`}
                  className="w-8 object-contain"
                />
              ))}
            </div>
          </div>

          <div className="flex min-w-60 gap-[30px] flex-wrap">
            <div className="w-40">
              <h3 className="text-white text-xl font-semibold">Company</h3>
              <div className="text-sm text-[#F5F7FA] mt-6 space-y-3">
                <p>About us</p>
                <p>Blog</p>
                <p>Contact us</p>
                <p>Pricing</p>
                <p>Testimonials</p>
              </div>
            </div>

            <div className="w-40">
              <h3 className="text-white text-xl font-semibold">Support</h3>
              <div className="text-sm text-[#F5F7FA] mt-6 space-y-3">
                <p>Help center</p>
                <p>Terms of service</p>
                <p>Legal</p>
                <p>Privacy policy</p>
                <p>Status</p>
              </div>
            </div>

            <div className="w-[255px]">
              <h3 className="text-white text-xl font-semibold">
                Stay up to date
              </h3>
              <div className="mt-6">
                <div className="bg-[rgba(255,255,255,0.2)] flex items-center justify-between px-3 py-2.5 rounded-lg">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="bg-transparent text-sm text-[#D9DBE1] outline-none w-full"
                  />
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/21a26290efea7d4b821afbefc70b512a429a2df1?placeholderIfAbsent=true"
                    alt="Send"
                    className="w-[18px] object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
