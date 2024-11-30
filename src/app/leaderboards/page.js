export default function Leaderboard() {
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
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-800 dark:border-gray-600"
            >
              <option value="qualifying">Qualifying</option>
              <option value="standard">Standard</option>
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
              min="1900"
              max="2100"
              placeholder="2024"
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-800 dark:border-gray-600"
            />
          </div>

          {/* Additional Session Dropdown */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="additional-session"
              className="text-lg font-medium text-gray-700 dark:text-gray-300"
            >
              Choose an additional session type:
            </label>
            <select
              name="additional-session"
              id="additional-session"
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-800 dark:border-gray-600"
            >
              <option value="practice">Practice</option>
              <option value="race">Race</option>
            </select>
          </div>
        </div>
        <button className="mt-5 px-3 py-2 w-32 mx-auto bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400">Search</button>
      </div>

      <div>
        <table>
            <tr>
                <th>Pos</th>
                <th>Driver</th>
                <th>Constructor</th>
                <th>Points</th>
                <th>Wins</th>
            </tr>
        </table>
      </div>
    </>
  );
}
