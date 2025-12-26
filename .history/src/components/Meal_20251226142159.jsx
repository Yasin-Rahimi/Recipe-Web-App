import SmallCards from "./SmallCard";
import Ingredients from "./Ingredients";
import YoutubeBox from "./YoutubeBox";

export default function Meal({ title, category, area, tags, imageUrl, ingredients, videoUrl }) {

  return (
    <div className="flex max-w-6xl mx-auto" id="meal">
      {/* Intro Section */}
      <div className="flex flex-col w-1/2 p-6">
        <div
          className="rounded-lg bg-white shadow-lg border border-orange-100 bg-cover bg-center flex h-80"
          style={{ backgroundImage: `url('${imageUrl}')` }}
        >
          <div className="self-end p-4">
            <h1 className="text-3xl font-bold text-white mb-2">{title}</h1>
            { <span className="inline-flex items-center px-3 py-0.5 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-yellow-500 to-yellow-500 mr-3">
              {category}
            </span>}
            <span className="inline-flex items-center px-3 py-0.5 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-yellow-500 to-yellow-500 mr-3">
              {area}
            </span>
            {tags.map((tag, index) => (
              <span
                key={index}
                className="inline-flex items-center px-3 py-0.5 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-yellow-500 to-yellow-500 mr-3"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <SmallCards />
      </div>

      {/* Ingredients and YouTube Section */}
      <div className="flex flex-col w-1/2 p-6">
        <Ingredients ingredients={ingredients} />
        <YoutubeBox videoUrl={videoUrl} />
      </div>
    </div>
  );
}