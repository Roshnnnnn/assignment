import { useDispatch, useSelector } from "react-redux";
import { selectState } from "../redux/slices/countrySlice";
import { Link, useParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { useEffect, useState } from "react";
import Loader from "../Loader";

const StateList = () => {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const { countryId } = useParams();
  const selectedCountry = useSelector(
    (state) => state.products.selectedCountry
  );

  const name = useSelector((state) => state.name.name);

  console.log("selectedCountry", selectedCountry);

  const selectedStates = selectedCountry ? selectedCountry.states || [] : [];

  const handleStateClick = (stateId, stateName) => {
    dispatch(selectState({ stateId, stateName }));
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
    <div>
      <div className="text-lg font-bold mb-4">
        <span>
          You know {name}, I like {selectedCountry ? selectedCountry.name : ""}{" "}
          as a country.
        </span>
        <div className="float-left">
          <Link to={"/country"}>
            <FaArrowLeft className="text-2xl" />
          </Link>
        </div>
      </div>
      <div className="text-lg font-bold mb-4">Please select your State</div>
      <div className="flex justify-center items-center h-[25rem]">
        <div className="w-[50rem] py-2 border-[3px] border-black rounded-md">
          <ul className="list-none w-[20rem] mx-auto hover:text-blue-500">
            {selectedStates.map((state) => (
              <li
                key={state.id}
                className="py-2 border-12 border-solid border-black rounded-md m-[2rem] cursor-pointer hover:bg-green-300 transition-colors duration-300 "
                onClick={() => handleStateClick(state.id, state.name)}
              >
                <Link
                  to={`/country/state/${state.id}`}
                  className="text-blue-600"
                >
                  {state.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default StateList;
