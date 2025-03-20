export const Hero = () => {
  return (
    <section className="bg-[#F5F7FA] w-full px-36 py-24 max-md:px-5">
      <div className="flex gap-[40px_104px] flex-wrap items-center max-w-[1215px] mx-auto">
        <div className="flex-1 min-w-60">
          <h1 className="text-[#4d4d4d] text-[64px] font-semibold leading-[76px] max-md:text-[40px] max-md:leading-[52px]">
            Lessons and insights
            <span className="text-[#4CAF4F]"> from 8 years</span>
          </h1>
          <p className="text-[#717171] text-base mt-4">
            Where to grow your business as a photographer: site or social media?
          </p>
          <button className="bg-[#4CAF4F] text-white font-medium px-8 py-3.5 rounded mt-8 hover:bg-[#45a047] transition-colors">
            Register
          </button>
        </div>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/40bfe59fae400797a7d8679bc03e9f2abc9b9006?placeholderIfAbsent=true"
          alt="Hero Illustration"
          className="w-[391px] object-contain self-stretch min-w-60"
        />
      </div>
    </section>
  );
};
