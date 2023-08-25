import axios from "axios";
import { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import './Endyear.css'
import { useNavigate } from "react-router-dom";

const Endyear = () => {
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
    const [value, setValue] = useState([]);
    const [chartData, setChartData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/endyear')
            .then((response) => {
                setData(response.data);
                setValue([
                    response.data.count2018less,
                    response.data.count2018,
                    response.data.count2019,
                    response.data.count2020,
                    response.data.count2021,
                    response.data.count2022,
                    response.data.count2023,
                    response.data.count2024,
                    response.data.count2025,
                    response.data.count2026,
                    response.data.count2027,
                    response.data.count2027greater
                ]);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    useEffect(() => {
        if (value.length > 0) {
            setChartData([
                {
                    name: "End Year",
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
                categories: ["<2018", 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027, ">2027"]
            }
        },
        series: chartData
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
      <div>
        <div className="endyearcontent">
        <h1 className=" endyear">End Year</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
    </div>
      <Chart
               options={state.options}
             series={state.series}
               type="bar"
               width="800"
             />
             <div className="endyearlist">
             <h3>End Year Listed With Each Year</h3>
              <li>The Year Less than 2018  = {data.count2018less}</li>
              <li>The Year 2018 = {data.count2018}</li>
              <li>The Year 2019 = {data.count2019}</li>
              <li>The Year 2020 = {data.count2020}</li>
              <li>The Year 2021 = {data.count2021} </li>
              <li>The Year 2022 = {data.count2022} </li>
              <li>The Year 2023 = {data.count2023} </li>
              <li>The Year 2024 = {data.count2024} </li>
              <li>The Year 2025 = {data.count2025} </li>
              <li>The Year 2026 = {data.count2026} </li>
              <li>The Year 2027 = {data.count2027} </li>
              <li>The Year Greater Than 2027 = {data.count2027greater}</li>
     </div>
             </div>
             </div>
    );
 }
 
 export default Endyear;