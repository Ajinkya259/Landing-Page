import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="bg-[#F5F7FA] w-full px-[70px] py-[22px] max-md:px-5">
      <nav className="flex w-full max-w-[1215px] mx-auto items-center gap-5 flex-wrap justify-between">
        <div className="flex items-center gap-2">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/aa061aa695059547aff4e4a4872ddc48d6905f5a?placeholderIfAbsent=true"
            alt="Logo Icon"
            className="w-[35px] object-contain"
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/dd787b1ba87b3802223764123ad90080fce3a563?placeholderIfAbsent=true"
            alt="Logo Text"
            className="w-[111px] object-contain"
          />
        </div>

        <div className="flex items-center gap-[40px] text-base text-[#18191F] font-normal">
          <Link
            to="/"
            className="font-medium hover:text-[#4CAF4F] transition-colors"
          >
            Home
          </Link>
          <Link
            to="/service"
            className="hover:text-[#4CAF4F] transition-colors"
          >
            Service
          </Link>
          <Link
            to="/feature"
            className="hover:text-[#4CAF4F] transition-colors"
          >
            Feature
          </Link>
          <Link
            to="/product"
            className="hover:text-[#4CAF4F] transition-colors"
          >
            Product
          </Link>
          <Link
            to="/testimonial"
            className="hover:text-[#4CAF4F] transition-colors"
          >
            Testimonial
          </Link>
          <Link to="/faq" className="hover:text-[#4CAF4F] transition-colors">
            FAQ
          </Link>
        </div>

        <div className="flex gap-3.5 text-sm font-medium">
          <button className="bg-[#F5F7FA] text-[#4CAF4F] px-5 py-2.5 rounded-md hover:bg-[#4CAF4F] hover:text-white transition-colors">
            Login
          </button>
          <button className="bg-[#4CAF4F] text-white px-5 py-2.5 rounded-md hover:bg-[#45a047] transition-colors">
            Sign up
          </button>
        </div>
      </nav>
    </header>
  );
};
