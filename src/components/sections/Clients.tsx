export const Clients = () => {
  return (
    <section className="w-full px-36 py-10 max-md:px-5">
      <div className="max-w-[1110px] mx-auto text-center">
        <h2 className="text-[#4D4D4D] text-4xl font-semibold">Our Clients</h2>
        <p className="text-[#717171] text-base mt-2">
          We have been working with some Fortune 500+ clients
        </p>

        <div className="flex items-center gap-[40px_100px] justify-between flex-wrap mt-4">
          {[
            "https://cdn.builder.io/api/v1/image/assets/TEMP/0896ce1f57d95c9f9a5fcee1aa9c4174f1b34fc2?placeholderIfAbsent=true",
            "https://cdn.builder.io/api/v1/image/assets/TEMP/1870d77e25a89b6049c8c9bd51d8c061fc2a038a?placeholderIfAbsent=true",
            "https://cdn.builder.io/api/v1/image/assets/TEMP/e77c7004bd1965d545dddaf855aacc2a171421a1?placeholderIfAbsent=true",
            "https://cdn.builder.io/api/v1/image/assets/TEMP/f22a0061d8cf1a8189003958b747f782cc52a9ed?placeholderIfAbsent=true",
            "https://cdn.builder.io/api/v1/image/assets/TEMP/982dda6ca684b0a0ce8f05da16b8be143a74c18a?placeholderIfAbsent=true",
            "https://cdn.builder.io/api/v1/image/assets/TEMP/03ef7dc4362567c9fe38852b2b7bda3fc2c6a8cc?placeholderIfAbsent=true",
            "https://cdn.builder.io/api/v1/image/assets/TEMP/177ca097c864a7a074df08f6bf885bf2a992248c?placeholderIfAbsent=true",
          ].map((url, index) => (
            <img
              key={index}
              src={url}
              alt={`Client Logo ${index + 1}`}
              className="w-12 object-contain rounded-lg"
            />
          ))}
        </div>
      </div>
    </section>
  );
};
