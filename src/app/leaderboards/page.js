'use client';
import { useState } from "react";
import DriverStandings from "../components/DriverStandings";

export default function Leaderboard() {
    
  const [sessionType, setSessionType] = useState("qualifying");
  const [grandPrix, setGrandPrix] = useState("Monaco Grand Prix");
  const [year, setYear] = useState("2024");

 
  const [search, setSearch] = useState(false);

  
  const handleSearch = () => {
    setSearch(false);
    setTimeout(() => setSearch(true), 0); // Triggers re-render
  };

  return (
    <>
      <div className="flex flex-col">
        {/* Heading */}
        <h1 className="text-center text-2xl m-10 underline underline-offset-8 font-bold">
          Leaderboards
        </h1>

        {/* Dropdown and Input Section */}
        <div className="m-10 flex flex-wrap gap-10 justify-center">
          {/* Session Type Dropdown */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="session"
              className="text-lg font-medium text-gray-700 dark:text-gray-300"
            >
              Choose a session type:
            </label>
            <select
              name="session"
              id="session"
              value={sessionType}
              onChange={(e) => setSessionType(e.target.value)}
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-800 dark:border-gray-600"
            >
              <option value="qualifying">Qualifying</option>
              <option value="race">Race</option>
            </select>
          </div>

          {/* Grand Prix Dropdown */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="grandPrix"
              className="text-lg font-medium text-gray-700 dark:text-gray-300"
            >
              Choose grand prix:
            </label>
            <select
              name="grandPrix"
              id="grandPrix"
              value={grandPrix}
              onChange={(e) => setGrandPrix(e.target.value)}
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-800 dark:border-gray-600"
            >
              <option value="bahrain">Bahrain Grand Prix</option>
              <option value="catalunya">Spain Grand Prix</option>
              <option value="hungaroring">Hungary Grand Prix</option>
              <option value="imola">Imola Grand Prix</option>
              <option value="istanbul">Istanbul Grand Prix</option>
              <option value="monza">Monza Grand Prix</option>
              <option value="mugello">Mugello Grand Prix</option>
              <option value="nurburgring">Germany Grand Prix</option>
              <option value="portimao">Portugal Grand Prix</option>
              <option value="red_bull_ring">Austria Grand Prix</option>
              <option value="silverstone">Silverstone Grand Prix</option>
              <option value="sochi">Sochi Grand Prix</option>
              <option value="spa">Spa Grand Prix</option>
              <option value="yas_marina">Abu Dhabi Grand Prix</option>
            </select>
          </div>

          {/* Year Input */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="year"
              className="text-lg font-medium text-gray-700 dark:text-gray-300"
            >
              Enter a year:
            </label>
            <input
              type="number"
              id="year"
              name="year"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              min="1900"
              max="2100"
              placeholder="2020"
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-800 dark:border-gray-600"
            />
          </div>
        </div>

        {/* Search Button */}
        <button
          onClick={handleSearch}
          className="mt-5 px-3 py-2 w-32 mx-auto bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
        >
          Search
        </button>
      </div>

      {/* Pass Props to DriverStandings */}
      {search && (
        <DriverStandings
          sessionType={sessionType}
          grandPrix={grandPrix}
          year={year}
        />
      )}
    </>
  );
}
