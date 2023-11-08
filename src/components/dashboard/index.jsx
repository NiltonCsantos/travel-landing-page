import "./dashboard.css";

import img from "../../assets/images/1.png";
import { useState } from "react";
import { useEffect } from "react";

import indexServices from "../services/index";

export default () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    findCountries();
  }, []);

  async function findCountries() {
    try {
      const response = await (await indexServices.getData()).data;

      setCountries(response.reverse().slice(0, 30));
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="dashboard">
      <h2>
        Países <span>disponíves</span>
      </h2>

      <div className="countries">
        {countries.map((country, index) => {
          return (
            <div className="country" key={index}>
              <img src={country.flags.png} alt="" />
              <div>
                <p>{country.name.common}</p>
                <p>{country.region}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
