interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => (
  <div className="items-center shadow-[0px_2px_4px_0px_rgba(171,190,209,0.20)] bg-white flex min-w-60 flex-col w-[299px] px-4 py-6 rounded-lg">
    <div className="flex max-w-full w-[267px] flex-col items-stretch text-[28px] text-[#4D4D4D] font-bold leading-9">
      <img
        src={icon}
        alt={title}
        className="w-[65px] self-center object-contain"
      />
      <h3 className="mt-4 text-center">{title}</h3>
    </div>
    <p className="text-sm text-[#717171] leading-5 mt-2 text-center">
      {description}
    </p>
  </div>
);

export const Features = () => {
  const features = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/b19b1caadafcc5aec6acc6ce366a3662218577a1?placeholderIfAbsent=true",
      title: "Membership Organisations",
      description:
        "Our membership management software provides full automation of membership renewals and payments",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/007c07a750cb5ee481b3caea48498b8e344e0da0?placeholderIfAbsent=true",
      title: "National Associations",
      description:
        "Our membership management software provides full automation of membership renewals and payments",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/7881f72ebcedcc74fa628f7cab87138ec6e42da5?placeholderIfAbsent=true",
      title: "Clubs And Groups",
      description:
        "Our membership management software provides full automation of membership renewals and payments",
    },
  ];

  return (
    <section className="w-full text-center mt-10">
      <div className="max-w-[1110px] mx-auto">
        <h2 className="text-[#4D4D4D] text-4xl font-semibold leading-[44px]">
          Manage your entire community in a single system
        </h2>
        <p className="text-[#717171] text-base mt-2">
          Who is Nextcent suitable for?
        </p>

        <div className="flex items-center gap-[40px_100px] justify-between flex-wrap mt-4">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};
