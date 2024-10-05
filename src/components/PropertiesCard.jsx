import bathSVG from "../assets/properties/bath.svg";
import bedSVG from "../assets/properties/bed.svg";

export default function PropertiesCard({ img, title, price, bed, bath }) {
  return (
    <div className="p-4 bg-white rounded-lg border border-gray-600/10">
      <img
        src="https://images.unsplash.com/photo-1601760562234-9814eea6663a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmVhbGVzdGF0ZXxlbnwwfHwwfHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60"
        alt="property"
      />

      <div className="p-6">
        <h4 className="text-2xl font-bold cursor-pointer">
          Modern Design villa
        </h4>
        <div className="mt-2">
          <span className="text-xl font-extrabold text-blue-600">$3000.00</span>
          /M
        </div>
      </div>
      <div className="flex justify-between p-4 text-gray-700 border-t border-gray-300">
        <div className="flex items-center">
          <div className="w-6 h-6 mr-3 text-gray-600 fill-current">
            <img src={bedSVG} alt="" />
          </div>
          <p>
            <span className="font-bold text-gray-900">3</span> Bedrooms
          </p>
        </div>
        <div className="flex items-center">
          <div className="w-6 h-6 mr-3 text-gray-600 fill-current">
            <img src={bathSVG} alt="bathicon" />
          </div>
          <p>
            <span className="font-bold text-gray-900">2</span> Bathrooms
          </p>
        </div>
      </div>
    </div>
  );
}