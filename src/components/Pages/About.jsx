export default function About() {
  return (
    <div className="max-w-3xl mx-auto my-12">
      <div>
        <img
          className="rounded-lg"
          src="https://www.happybaliwedding.com/wp-content/uploads/2017/07/Cost-of-Bali-Beach-Wedding.jpg"
          alt="about Image"
        />
      </div>
      <div className="space-y-6">
        <h1 className="text-center font-bold text-gray-600">
          Elegant Planning
        </h1>
        <p className="text-center font-semibold text-gray-600">
          We are organize more than{" "}
          <span className="text-orange-500 font-bold">1000</span>+ Evnet. All
          Over the world We Provide Our Service..
        </p>
      </div>
      <div className="max-w-xl mx-auto px-4 py-6 bg-gray-900 my-6 rounded-md text-center text-white">
        <p className="font-bold">Contact Us</p>
        <p>elegantPlanning@gmail.com</p>
        <p>+8888 999 88</p>
      </div>
    </div>
  );
}
