import axios from "axios";
import { useEffect, useState } from "react";
import './Source.css'
import { useNavigate } from "react-router-dom";
const Source = () => {
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

  useEffect(() => {
    axios.get('http://localhost:5000/api/source')
      .then((response) => {
        setData(response.data.sourData);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // Create a Set to store unique sources
  const uniqueSources = new Set();
  data.forEach((item) => {
    uniqueSources.add(item.source);
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
    <div className="sourcepage">
        <h1 className="source">Sources</h1>
        <h2 className="source">Every Sources From The Data</h2>
        <div className="sourcedata">
    {Array.from(uniqueSources).map((source, index) => (
      <span key={index}className="sourcedata">{source} , </span>
    ))}
    </div>
  </div>
  </div>
  );
}
 
export default Source;
