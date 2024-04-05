import { createSlice } from "@reduxjs/toolkit";
import { countries } from "../../data";

const initialState = {
  allCountries: countries,
  selectedCountry: null,
  selectedState: null,
  selectedCity: null,
  selectedPlace: { name: null, image: null },
  selectedPopularPlace: { id: null, name: null, image: null },
  error: null,
};

const countrySlice = createSlice({
  name: "country",
  initialState,
  reducers: {
    selectCountry: (state, action) => {
      const selectedCountryId = action.payload.countryId;
      const selectedCountry = state.allCountries.find(
        (country) => country.id === selectedCountryId
      );
      if (selectedCountry) {
        state.selectedCountry = selectedCountry;
        state.selectedState = selectedCountry.states || [];
        state.selectedCity = [];
        state.selectedPlace = { name: null, image: null };
        state.selectedPopularPlace = { id: null, name: null, image: null };
      }
    },
    selectState: (state, action) => {
      const selectedStateId = action.payload.stateId;
      const selectedState = state.selectedCountry.states.find(
        (state) => state.id === selectedStateId
      );
      if (selectedState) {
        state.selectedState = selectedState;
        state.selectedCity = selectedState.cities || [];
        state.selectedPlace = selectedState.popular_places || [];
        state.selectedPopularPlace = { id: null, name: null, image: null };
      }
    },
    selectCity: (state, action) => {
      const selectedCityId = action.payload.cityId;
      const selectedCity = state.selectedState.cities.find(
        (city) => city.id === selectedCityId
      );
      if (selectedCity) {
        state.selectedCity = selectedCity;
        state.selectedPlace = selectedCity.popular_places || [];
        state.selectedPopularPlace = { id: null, name: null, image: null };
      }
    },
    selectPlace: (state, action) => {
      const { name, image } = action.payload;
      state.selectedPlace = null;
      state.selectedPopularPlace = { id: null, name, image };
    },

    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const {
  selectCountry,
  selectState,
  selectCity,
  selectPlace,
  selectPopularPlace,
  setError,
} = countrySlice.actions;

export default countrySlice.reducer;
