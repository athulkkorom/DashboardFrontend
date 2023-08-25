import axios from "axios";
import { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import './Region.css'
import { useNavigate } from "react-router-dom";
const Region = () => {
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

    const [counts, setCounts] = useState({
        countNa: 0,
        countWorld:0,
        countCa:0,
        countWa:0,
        countwasia:0,
        countEu:0,
        countCafrica:0,
        countSa:0,
        countSasia:0,
        countCasia:0,
        countEasia:0
    });
    useEffect(() => {
        axios.get('http://localhost:5000/api/region')
            .then((response) => {
                setCounts(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);
    const[state,setState] = useState({
        options: {
            chart: {
              id: "basic-bar"
            },
            xaxis: {
              categories: ["Northern America", "World", "Central America", "Western Africa", "Western Asia", "Estern Europe", "Central Africa", "Southern Africa","Southern Asia","Central Asia","Estern Asia"]
            }
          },
          series: [
            {
              name: "series-1",
              data: [137, 135, 5, 13, 45, 32, 3, 2,42,3,36]
            }
          ]
        
    })
    const [diagram,setDiagram] = useState({
        series: [44, 55, 41, 17, 15],
        options: {
          chart: {
            type: 'donut',
          },
          responsive: [{
            breakpoint: 480,
            options: {
              chart: {
                width: 200
              },
              legend: {
                position: 'bottom'
              }
            }
          }]
        },
          
    })
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
        <div className="regionpage">
            <h1 className="region">Region</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      <div id="chart">
      <Chart
              options={state.options}
              series={state.series}
              type="bar"
              width="800"
            />
            </div>
            <div className="regiondetails">
    
<div>
    <h2 className="region">Number of Industries in Regions</h2>
        <p>Northern America:{counts.countNa}</p>
        <p>world:{counts.countWorld}</p>
        <p>Central America:{counts.countCa}</p>
        <p>Western Africa:{counts.countWa}</p>
        <p>Western Asia:{counts.countwasia}</p>
        <p>Eastern Europe:{counts.countEu}</p>
        <p>Central Africa:{counts.countCafrica}</p>
        <p>Southern Africa:{counts.countSa}</p>
        <p>Southern Asia:{counts.countSasia}</p>
        <p>Central Asia:{counts.countCasia}</p>
        <p>Eastern Asia:{counts.countEasia}</p>
        </div>
        <div className="diagram">
  <Chart
   options={diagram.options} series={diagram.series} type="donut" />
</div>
        </div>
        </div>
        </div>
     );
}
 
export default Region;