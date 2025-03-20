export const CallToAction = () => {
  return (
    <section className="bg-[#F5F7FA] w-full text-center py-8">
      <h2 className="text-[#263238] text-[64px] font-semibold leading-[76px] max-w-[887px] mx-auto max-md:text-[40px] max-md:leading-[52px]">
        Pellentesque suscipit fringilla libero eu.
      </h2>

      <button className="bg-[#4CAF4F] text-white font-medium flex items-center gap-2 mx-auto mt-8 px-8 py-3.5 rounded hover:bg-[#45a047] transition-colors">
        <span>Get a Demo</span>
        <div className="w-4 h-4 rotate-180" />
      </button>
    </section>
  );
};
