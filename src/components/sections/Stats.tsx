
interface StatItemProps {
  icon: string;
  number: string;
  label: string;
}

const StatItem = ({ icon, number, label }: StatItemProps) => (
  <div className="flex min-w-52 items-center gap-4">
    <img src={icon} alt={label} className="w-12 h-12 object-contain" />
    <div>
      <div className="text-[#4D4D4D] text-[28px] font-bold leading-none">
        {number}
      </div>
      <div className="text-[#717171] text-base">{label}</div>
    </div>
  </div>
);

export const Stats = () => {
  const stats = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/14bf2f9147fe9e467748bf2c4e5eafdcacc2272f?placeholderIfAbsent=true",
      number: "2,245,341",
      label: "Members",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/633f53dd3f41e34c07baf7fb0e2f6add9da86125?placeholderIfAbsent=true",
      number: "46,328",
      label: "Clubs",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/b2a9bced955729b8505887b33b88f37c10068735?placeholderIfAbsent=true",
      number: "828,867",
      label: "Event Bookings",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/fa47f0179b00a35d0b7eb9d490444ff931312b0b?placeholderIfAbsent=true",
      number: "1,926,436",
      label: "Payments",
    },
  ];

  return (
    <section className="bg-[#F5F7FA] w-full px-36 py-16 max-md:px-5">
      <div className="flex gap-16 justify-between flex-wrap items-center max-w-[1215px] mx-auto">
        <div className="min-w-72 max-w-md">
          <h2 className="text-4xl text-[#4d4d4d] font-semibold leading-[44px]">
            Helping a local{" "}
            <span className="text-[#4CAF4F]">business reinvent itself</span>
          </h2>
          <p className="text-[#18191F] text-base mt-4">
            We reached here with our hard work and dedication
          </p>
        </div>

        <div className="grid grid-cols-2 gap-x-16 gap-y-12">
          {stats.map((stat, index) => (
            <StatItem key={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
};
