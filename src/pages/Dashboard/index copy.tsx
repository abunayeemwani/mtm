import camping from "assets/images/camping.jpeg";
import hikking from "assets/images/hiking.jpg";
import trekking from "assets/images/trekking.jpg";
import cycling from "assets/images/cycling.jpg";

export default function Dashboard() {
  const bgImage = (bg: string) => {
    return {
      backgroundImage: `url(${bg})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    }
  }
  return (
    <>
      <div className="mt-28">
        <p className="text-xs mb-2">GO FOR A HIKE WITH</p>
        <p className="text-4xl font-bold">Men Of The</p>
        <p className="text-4xl font-bold">Mountain</p>
        <p className="text-xs mt-2">
          Change the way you live, Be closer to nature
        </p>
      </div>
      <div className="relative w-100 bg-gray-600 md:bg-transparent md:ms-52 rounded-xl mt-28 px-5 pb-5 md:px-0 md:pb-0">
        <div className="bg-gray-600 opacity-75 rounded-xl py-7 px-5 md:px-10">
          <p className="text-lg font-bold leading-3">Go to camping</p>
          <span className="text-xs">See our camping locations now!</span>
        </div>
        <div className="md:absolute grid grid-cols-2 md:grid-cols-4 gap-5 md:top-1/2 md:right-0 md:-translate-y-1/2 mt-5 md:mt-0">
          <div className="bg-red-500 border-2 border-white rounded-lg w-32">
            <div className="h-36 rounded-t-lg" style={bgImage(trekking)}></div>
            <div className="bg-white text-gray-800 px-2 py-1 font-semibold">
              Trekking
            </div>
          </div>
          <div className="bg-yellow-500 border-2 border-white rounded-lg w-32">
            <div className="h-36 rounded-t-lg" style={bgImage(hikking)}></div>
            <div className="bg-white text-gray-800 px-2 py-1 font-semibold">
              Hiking
            </div>
          </div>
          <div className="bg-green-500 border-2 border-white rounded-lg w-32">
            <div className="h-36 rounded-t-lg" style={bgImage(cycling)}></div>
            <div className="bg-white text-gray-800 px-2 py-1 font-semibold">
              Cycling
            </div>
          </div>
          <div className="bg-blue-500 border-2 border-white rounded-lg w-32">
            <div className="h-36 rounded-t-lg" style={bgImage(camping)}></div>
            <div className="bg-white text-gray-800 px-2 py-1 font-semibold">
              Camping
            </div>
          </div>
        </div>
      </div>
      <p>hello</p>
      <p>hello</p>
      <p>hello</p>
      <p>hello</p>
      <p>hello</p>
      <p>hello</p>
      <p>hello</p>
      <p>hello</p>
      <p>hello</p>
      <p>hello</p>
      <p>hello</p>
      <p>hello</p>
      <p>hello</p>
      <p>hello</p>
      <p>hello</p>
      <p>hello</p>
      <p>hello</p>
      <p>hello</p>
      <p>hello</p>
      <p>hello</p>
      <p>hello</p>
      <p>hello</p>
    </>
  );
}
