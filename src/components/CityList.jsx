import { useDispatch, useSelector } from "react-redux";
import { selectCity } from "../redux/slices/countrySlice";
import { Link, useParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { useEffect, useState } from "react";
import Loader from "../Loader";

const CityList = () => {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const { stateId } = useParams();

  const selectedState = useSelector((state) => state.products.selectedState);
  const selectedCity = useSelector((state) => state.products.selectedCity);
  const name = useSelector((state) => state.name.name);

  const handleCityClick = (cityId, cityName) => {
    dispatch(selectCity({ cityId, cityName }));
  };

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
    <div className="text-center justify-center">
      <div className="text-lg font-bold mb-4">
        <span>
          You know {name}, I like {selectedState ? selectedState.name : ""} as a
          State.
        </span>
        <div className="float-left">
          <Link to={`/country`}>
            <FaArrowLeft className="text-2xl" />
          </Link>
        </div>
      </div>
      <div className="text-lg font-bold mb-4">Please select your City</div>
      <div className="flex justify-center items-center h-auto">
        <div className="w-full md:w-[50rem] py-2 border-[3px] border-black rounded-md">
          <ul className="list-none w-full md:w-[20rem] mx-auto hover:text-blue-500">
            {selectedState.cities.map((city) => (
              <li
                key={city.id}
                className={`py-2 border-12 border-solid border-black rounded-md m-2 cursor-pointer hover:bg-green-300 transition-colors duration-300 ${
                  selectedCity && selectedCity.id === city.id
                    ? "bg-gray-100"
                    : ""
                }`}
                onClick={() => handleCityClick(city.id, city.name)}
              >
                <Link to={`/state/place`} className="text-blue-600 ">
                  {city.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CityList;
