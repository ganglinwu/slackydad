import { CarouselHome } from "./CarouselHome";
import TimeNow from "./TimeNow";

export default function Home() {
  return (
    <div className="bg-blue-500 w-screen h-screen flex justify-center items-center">
      <div className="">
        <div className="flex">
          <div className="min-w-[600px] bg-white p-8 rounded-xl"></div>
          <div className="bg-green-300 p-8 rounded-xl">
            <TimeNow />
          </div>
        </div>
        <div className="flex justify-center">
          <CarouselHome titles={["Hawker Centers"]}></CarouselHome>
        </div>
      </div>
    </div>
  );
}
