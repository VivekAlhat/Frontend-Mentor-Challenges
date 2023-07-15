import Button from "../atom/Button";
import Separator from "../atom/Separator";
import NewsItem from "../molecule/NewsItem";
import { newsItems } from "../../utils/constant";

const Hero = () => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-3 sm:grid-rows-2 gap-8 mt-14">
      <img
        src="/images/image-web-3-desktop.jpg"
        alt="web 3 hero"
        className="sm:col-span-2 h-[300px] w-full object-cover"
      />
      <h1 className="sm:col-start-1 sm:row-start-2 text-5xl sm:text-7xl font-black">
        The Bright Future of Web 3.0?
      </h1>
      <div className="sm:col-start-2 sm:row-start-2">
        <p className="text-dark-grayish-blue leading-relaxed text-xl">
          We dive into the next evolution of the web that claims to put the
          power of the platforms back into the hands of the people. But is it
          really fulfilling its promise?
        </p>
        <Button text={"read more"} />
      </div>
      <div className="bg-very-dark-blue text-off-white row-span-2 p-6 flex flex-col justify-evenly">
        <h1 className="text-5xl text-soft-orange font-bold">New</h1>
        {newsItems.map((item, id) => {
          const { heading, content } = item;
          return (
            <div key={id}>
              <NewsItem heading={heading} content={content} />
              {id !== newsItems.length - 1 && <Separator />}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Hero;
