import useFetch from "../customHook/useFetch";
import axios from "axios";
import { useState } from "react";

const ExampleUseEffect = () => {
  const [donne, setDonne] = useState([]);
  const BASE_URL = "https://covid19-api.com/country/all?formatjson";
  // const BASE_URL2 = "https://jsonplaceholder.typicode.com/users";

  axios
    .get("https://covid19-api.com/country/all?format=json%27")
    .then((res) => res.data)
    .then((results) => {
      setDonne(results);
    })
    .catch((err) => {
      alert(">> Erreur: " + err);
    });

  const { loading, data, error } = useFetch(BASE_URL);

  return (
    <div className="useeffect">
      {loading ? "Page Loading ....." : ""}
      {error ? (
        <div style={{ color: "red", fontSize: 16 }}>
          <h2>{error}</h2>
        </div>
      ) : (
        <div>
          {data.map((info, index) => (
            <ul key={index} style={{ listStyleType: "none" }}>
              <li>
                <span style={{ fontWeight: "bold", fontSize: 16 }}>
                  Country:{" "}
                </span>
                {info.country}
              </li>
              <li>
                <span style={{ fontWeight: "bold", fontSize: 16 }}>
                  Critical:{" "}
                </span>
                {info.critical}
              </li>
              <li>
                <span style={{ fontWeight: "bold", fontSize: 16 }}>
                  Deaths:{" "}
                </span>
                {info.deaths}
              </li>
              <li>
                <span style={{ fontWeight: "bold", fontSize: 16 }}>
                  Recovered:{" "}
                </span>
                {info.recovered}
              </li>
            </ul>
          ))}

          <h2>AXIOS DATA</h2>

          {donne.map((info, index) => (
            <ul key={index} style={{ listStyleType: "none" }}>
              <li>
                <span style={{ fontWeight: "bold", fontSize: 16 }}>
                  Country:{" "}
                </span>
                {info.country}
              </li>
              <li>
                <span style={{ fontWeight: "bold", fontSize: 16 }}>
                  Critical:{" "}
                </span>
                {info.critical}
              </li>
              <li>
                <span style={{ fontWeight: "bold", fontSize: 16 }}>
                  Deaths:{" "}
                </span>
                {info.deaths}
              </li>
              <li>
                <span style={{ fontWeight: "bold", fontSize: 16 }}>
                  Recovered:{" "}
                </span>
                {info.recovered}
              </li>
            </ul>
          ))}
        </div>
      )}
    </div>
  );
};

export default ExampleUseEffect;
