import React, { useState, useEffect } from "react";

const DriverStandings = ({ sessionType, grandPrix, year }) => {
  const [standings, setStandings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const circuitsResponse = await fetch(
          `https://ergast.com/api/f1/${year}/circuits.json`
        );
        const circuitsData = await circuitsResponse.json();
        const circuits = circuitsData?.MRData?.CircuitTable?.Circuits;

        if (!circuits || circuits.length === 0) {
          setError(`No circuits found for the year ${year}.`);
          setStandings([]);
          return;
        }

        // Match the selected Grand Prix with the corresponding circuitId
        const circuit = circuits.find(
          (c) => c.circuitId.toLowerCase() === grandPrix.toLowerCase()
        );

        if (!circuit) {
          setError(`Grand Prix "${grandPrix}" not found for the year ${year}.`);
          setStandings([]);
          return;
        }

        const endpoint =
          sessionType.toLowerCase() === "race"
            ? "results.json"
            : "qualifying.json";

        const sessionResponse = await fetch(
          `https://ergast.com/api/f1/${year}/circuits/${circuit.circuitId}/${endpoint}`
        );
        const sessionData = await sessionResponse.json();

        const raceData = sessionData?.MRData?.RaceTable?.Races?.[0];

        if (!raceData) {
          setError(
            `No ${sessionType} data found for ${grandPrix} in year ${year}.`
          );
          setStandings([]);
          return;
        }

        const leaderboard =
          sessionType.toLowerCase() === "race"
            ? raceData.Results
            : raceData.QualifyingResults;

        setStandings(leaderboard || []);
      } catch (err) {
        setError("An error occurred while fetching the data.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [sessionType, grandPrix, year]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h2>
        {sessionType.toUpperCase()} Results for {grandPrix} ({year})
      </h2>
      <table className="table-auto w-full border-collapse border border-gray-400">
        <thead>
          <tr>
            <th>Position</th>
            <th>Driver</th>
            <th>Constructor</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          {standings.map((entry, index) => (
            <tr key={index}>
              <td>{entry.position || "N/A"}</td>
              <td>
                {`${entry.Driver.givenName} ${entry.Driver.familyName}` || "N/A"}
              </td>
              <td>{entry.Constructor?.name || "N/A"}</td>
              <td>{entry.points || "N/A"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DriverStandings;
