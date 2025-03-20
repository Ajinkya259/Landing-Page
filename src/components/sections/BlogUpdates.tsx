interface BlogCardProps {
  image: string;
  title: string;
}

const BlogCard = ({ image, title }: BlogCardProps) => (
  <div className="flex min-w-60 flex-col items-center w-[368px]">
    <img
      src={image}
      alt={title}
      className="w-[368px] object-contain rounded-lg"
    />
    <div className="shadow-[0px_8px_16px_0px_rgba(171,190,209,0.40)] bg-[#F5F7FA] w-[317px] p-4 rounded-lg">
      <p className="text-[#717171] text-center leading-7">{title}</p>
      <div className="flex items-center gap-2 text-[#4CAF4F] justify-center mt-4 p-2">
        <span className="font-semibold">Readmore</span>
        <div className="w-6 h-6 rotate-180" />
      </div>
    </div>
  </div>
);

export const BlogUpdates = () => {
  const blogs = [
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/88d21ee5baf4307de89e5d43fa2735e9066afcb8?placeholderIfAbsent=true",
      title: "Creating Streamlined Safeguarding Processes with OneRen",
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/632bd1e8f3c92b648ca1b14d6dd9956e0920165d?placeholderIfAbsent=true",
      title:
        "What are your safeguarding responsibilities?",
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/7bc0d3b06e06fd89fccbf71206f21de6b8de542a?placeholderIfAbsent=true",
      title: "Revamping the Membership Model with Triathlon Australia",
    },
  ];

  return (
    <section className="w-full mt-12 px-36 max-md:px-5">
      <div className="text-center max-w-[1110px] mx-auto">
        <h2 className="text-[#4D4D4D] text-4xl font-semibold">
          Caring is the new marketing
        </h2>
        <p className="text-[#717171] text-base leading-6 max-w-[628px] mx-auto mt-2">
          The Nexcent blog is the best place to read about the latest membership
          insights, trends and more. See who's joining the community, read about
          how our community are increasing their membership income and lot's
          more.​
        </p>
      </div>

      <div className="flex items-center gap-6 justify-between flex-wrap mt-4">
        {blogs.map((blog, index) => (
          <BlogCard key={index} {...blog} />
        ))}
      </div>
    </section>
  );
};
