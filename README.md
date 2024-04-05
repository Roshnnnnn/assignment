# Travel Planner App

Welcome to the Travel Planner App! This app allows you to plan your travel itinerary by selecting your favorite country, state, city, and explore various tourist attractions.

## Features

- **Name Entry**: Start by entering your name to personalize your travel experience.
- **Country Selection**: Choose your favorite country from a list of available countries.
- **State Selection**: Once you've selected a country, choose a state within that country to explore.
- **City Selection**: Select a city within the chosen state to discover its attractions.
- **Place Exploration**: Explore various tourist places in the selected city, including their images and names.

## Usage

1. Clone this repository to your local machine.
2. Install dependencies using `npm install` or `yarn install`.
3. Start the development server using `npm start` or `yarn start`.
4. Open your browser and navigate to `http://localhost:3000`.
5. Enter your name and start planning your travel itinerary by selecting a country, state, city, and exploring places.

## Technologies Used

- React.js
- React Router
- Redux
- Tailwind CSS

## Project Structure

travel-planner-app/
├── src/
│ ├── components/
│ │ ├── CountryList.js
│ │ ├── StateList.js
│ │ ├── CityList.js
│ │ ├── PlaceList.js
│ │ └── Loader.js
│ ├── redux/
│ │ └── slices/
│ │ ├── countrySlice.js
│ │ └── ...
│ ├── App.js
│ └── index.js
└── README.md

## License

This project is licensed under the [MIT License](LICENSE).
