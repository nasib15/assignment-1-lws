import bathSVG from "../assets/properties/bath.svg";
import bedSVG from "../assets/properties/bed.svg";

export default function PropertiesCard({
  image,
  estateName,
  price,
  bedroom,
  bathroom,
}) {
  return (
    <div className="p-4 bg-white rounded-lg border border-gray-600/10">
      <img src={image} />

      <div className="p-6">
        <h4 className="text-2xl font-bold cursor-pointer">{estateName}</h4>
        <div className="mt-2">
          <span className="text-xl font-extrabold text-blue-600">${price}</span>
          /M
        </div>
      </div>
      <div className="flex justify-between p-4 text-gray-700 border-t border-gray-300">
        <div className="flex items-center">
          <div className="w-6 h-6 mr-3 text-gray-600 fill-current">
            <img src={bedSVG} alt="" />
          </div>
          <p>
            <span className="font-bold text-gray-900">{bedroom}</span> Bedrooms
          </p>
        </div>
        <div className="flex items-center">
          <div className="w-6 h-6 mr-3 text-gray-600 fill-current">
            <img src={bathSVG} alt="bathicon" />
          </div>
          <p>
            <span className="font-bold text-gray-900">{bathroom}</span>{" "}
            Bathrooms
          </p>
        </div>
      </div>
    </div>
  );
}
