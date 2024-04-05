import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCountry } from "../redux/slices/countrySlice";
import { Link } from "react-router-dom";
import { FaPlaceOfWorship, FaArrowLeft } from "react-icons/fa";
import Loader from "../Loader";

const CountryList = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCountryId, setSelectedCountryId] = useState(null);

  const allCountries = useSelector((state) => state.products.allCountries);
  const name = useSelector((state) => state.name.name);

  const handleCountryClick = (countryId, countryName) => {
    dispatch(selectCountry({ countryId, countryName }));
    setSelectedCountryId(countryId);
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
      <div className="text-lg font-bold">
        Hello {name}, Please select your Favorite Country
      </div>
      <div className="float-left">
        <Link to={"/"}>
          <FaArrowLeft className="text-2xl" />
        </Link>
      </div>
      <div className="flex justify-center items-center h-[25rem]">
        <div className="w-full md:w-[50rem] py-2 border-[3px] border-black rounded-md">
          <ul className="list-none w-full md:w-[20rem] mx-auto hover:text-blue-500">
            {allCountries.map((country) => (
              <li
                key={country.id}
                className={`py-2 border-10 border-solid border-black rounded-md m-[2rem] cursor-pointer hover:bg-green-300 transition-colors duration-300 ${
                  selectedCountryId === country.id ? "bg-green-200" : ""
                }`}
                onClick={() => handleCountryClick(country.id, country.name)}
              >
                <Link
                  to={`/country/${country.id}`}
                  className="text-black flex justify-start items-center hover:text-blue-500 ml-[20px]"
                >
                  <FaPlaceOfWorship className="mr-[1rem] ml-[1rem]" />
                  <span>{country.name.trim()}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CountryList;
