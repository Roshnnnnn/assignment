import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Loader from "../Loader";

const PlaceList = () => {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const { placeId } = useParams();

  const selectedPlace = useSelector((state) => state.products.selectedPlace);
  console.log("selectedPlace", selectedPlace);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div>
      <div className="text-lg font-bold mb-4">
        You know what these are the best places
      </div>
      <ul className="list-none grid grid-cols-2 gap-10">
        {selectedPlace.map((place) => (
          <li
            key={place.id}
            className="border border-gray-200 rounded-lg overflow-hidden cursor-pointer transition duration-300 hover:shadow-lg"
          >
            <img
              src={place.image}
              alt={place.name}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold mb-2">{place.name}</h3>
              <p className="text-sm text-gray-600">{place.description}</p>
            </div>
          </li>
        ))}
      </ul>
      <div className="float-right m-6">
        <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
          <Link to={`/`}>Go to Home</Link>
        </button>
      </div>
    </div>
  );
};

export default PlaceList;
