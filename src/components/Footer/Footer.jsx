import footer from "../../assets/logo-footer.png";
import subscribe from "../../assets/button.png";
import hero from "../../assets/bg-shadow.png";
const Footer = () => {
  return (
    <div className="relative mt-80 bg-black pb-10">
      <div className="rounded-2xl absolute p-5 -top-46 left-22 w-[1340px] h-[380px] border border-white">
        <div className="border rounded-2xl space-y-3 flex flex-col justify-center items-center h-[332px] border-white" style={{ backgroundImage: `url(${hero})`, backgroundColor: "white" }}>
          <h2 className="text-3xl font-bold">Subscribe to our Newsletter</h2>
          <p>Get the latest updates and news right in your inbox!</p>
          <div className="flex gap-2">
            <input
              className="w-[561px] text-gray-500 bg-white rounded-xl px-4"
              type="text"
              placeholder="Enroll your email"
            />
            <button className="">
              <img className="rounded-xl" src={subscribe} alt="" />
            </button>
          </div>
        </div>
      </div>
      <div className="w-[1320px] pt-60 mx-auto border border-black">
        <img className="mx-auto border border-black" src={footer} alt="" />
        <div className="text-white flex justify-between border border-black mt-16">
          <div className="space-y-2">
            <h2 className="font-bold">About Us</h2>
            <p className="text-gray-400">
              We are a passionate team <br /> dedicated to providing the best{" "}
              <br /> services to our customers.
            </p>
          </div>
          <div className="space-y-2">
            <h2 className="font-bold">Quick Links</h2>
            <ul className="text-gray-400">
              <li>Home</li>
              <li>Service</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h2 className="font-bold">Subscribe</h2>
            <p className="text-gray-400">
              Subscribe to our newsletter for the latest updates.
            </p>
            <div className="relative">
              <input
                className=" text-gray-500 bg-white rounded-2xl border-none w-full py-3 px-6"
                type="text"
                placeholder="Enroll your email"
              />
              <button className="absolute right-0">
                <img src={subscribe} alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="divider border-t border-white"></div>
      <div className="">
        <p className="text-center text-gray-400">
          @2024 Your Company All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
