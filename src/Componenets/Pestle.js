import axios from "axios";
import { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import './Pestle.css'
import { useNavigate } from "react-router-dom";
const Pestle = () => {
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

    const [value, setValue] = useState([]);
    const [chartedData, setChartedData] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:5000/api/pestle')
            .then((response) => {
                setValue([
                    response.data.countIndu,
                    response.data.countEnv,
                    response.data.countEcn,
                    response.data.countPlt,
                ]);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);
    useEffect(() => {
        if (value.length > 0) {
            setChartedData([
                {
                    name: "Pestle",
                    data: value
                }
            ]);
        }
    }, [value]);

    const state = {
        options: {
            chart: {
                id: "basic-bar"
            },
            xaxis: {
                categories: ["Industry","Enviornmental", "Ecnomical", "Political"]
            }
        },
        series: chartedData
    };
    

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
        <div className="pestlepage">
            <h1 className="pest">Pestle</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        <div id="chart">
 <Chart
               options={state.options}
             series={state.series}
               type="bar"
               width="800"
             />        
        </div>
        </div>
        </div>
    );
}

export default Pestle;
