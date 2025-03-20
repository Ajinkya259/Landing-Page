
interface CaseStudyProps {
  image: string;
  title: string;
  description: string;
}

const CaseStudy = ({ image, title, description }: CaseStudyProps) => (
  <div className="flex w-full items-center gap-16 justify-between flex-wrap px-36 py-12 max-md:px-5">
    <img
      src={image}
      alt={title}
      className="w-[442px] object-contain self-stretch min-w-60"
    />
    <div className="flex flex-1 min-w-60 flex-col">
      <h3 className="text-[#4D4D4D] text-4xl font-semibold leading-[44px]">
        {title}
      </h3>
      <p className="text-[#717171] text-base leading-7 mt-4 max-w-[600px]">{description}</p>
      <button className="bg-[#4CAF4F] text-white font-medium text-center mt-8 px-8 py-3.5 rounded-md hover:bg-[#45a047] transition-colors w-fit">
        Learn More
      </button>
    </div>
  </div>
);

export const CaseStudies = () => {
  const cases = [
    {
      image: "public/casestudy1.png",
      title: "The unseen of spending three years at Pixelgrade",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.",
    },
    {
      image:
        "public/casestudy2.png",
      title: "How to design your site footer like we did",
      description:
        "Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.",
    },
  ];

  return (
    <section className="w-full">
      {cases.map((caseStudy, index) => (
        <CaseStudy key={index} {...caseStudy} />
      ))}
    </section>
  );
};
