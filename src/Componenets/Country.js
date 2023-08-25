import axios from "axios";
import { useEffect, useState } from "react";
import './Country.css'
import { useNavigate } from "react-router-dom";
const Country = () => {
    const navigate = useNavigate();

    const clickDash = () => {
      navigate("/");
  }
  const clickTopic = () => {
    navigate("/topic");
}
const clickSector = () => {
  navigate("/sector");
}
const clickRegion = () => {
  navigate("/region");
}
const clickSource = () => {
  navigate("/source");
}
const clickCountry = () => {
  navigate("/country");
}
const clickEndyear = () => {
  navigate("/endyear");
}
const clickPestle = () => {
  navigate("/pestle");
}

    const [data, setData] = useState([]);

    const [counts, setCounts] = useState({
        countUsa: 0,
    });
    useEffect(() => {
        axios.get('http://localhost:5000/api/country')
            .then((response) => {
                setCounts(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);
    useEffect(() => {
        axios.get('http://localhost:5000/api/source')
          .then((response) => {
            setData(response.data.sourData);
          })
          .catch((error) => {
            console.log(error);
          });
      }, []);
      const uniqueSources = new Set();
  data.forEach((item) => {
    uniqueSources.add(item.country);
  });
    return (
      <div className="main">
            <div className="sidebar">
            <h1 onClick={clickDash}>DASHBOARD</h1>
            <h2 onClick={clickTopic}>Topics</h2>
            <h2 onClick={clickSector}>Sector</h2>
            <h2 onClick={clickRegion}>Region</h2>
            <h2 onClick={clickPestle}>Pestle</h2>
            <h2 onClick={clickSource}>Source</h2>
            <h2 onClick={clickCountry}>Country</h2>
            <h2 onClick={clickEndyear}>End year</h2>
        </div>
        <div className="countrypage">
            <h1 className="country">Country</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
    <p className="usa">Country that have most number United States Of Anerica:{counts.countUsa}</p> 
    <h2 className="country">Names Of Country From The Given Data</h2>
    {Array.from(uniqueSources).map((country, index) => (
      <span key={index}className="sourcedata">{country} , </span>
    ))}
    </div>
    </div>

    );
}
 
export default Country;