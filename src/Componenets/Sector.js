import axios from "axios";
import { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import './Sector.css'
import { useNavigate } from "react-router-dom";
const Sector = () => {
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
    const [values, setValues] = useState([]);
    const [chartsData, setChartsData] = useState([])
    const [chartedData, setChartedData] = useState([])
    const [counts, setCounts] = useState({
        countEnergy: 0,
        countGovernment: 0,
        countAero: 0,
        countEnvio: 0,
        countFinacial: 0,
        countIt: 0
    });
    const [chartData, setChartData] = useState({
        series: [539, 20, 20, 15, 43,15],
        options: {
            chart: {
                width: 380,
                type: 'pie',
            },
            labels: ['Energy', 'Government', 'Aerospace & defence', 'Environment', 'Financial Service','Information Technology'],
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
        }
    });

    useEffect(() => {
        axios.get('http://localhost:5000/api/sector')
            .then((response) => {
                setCounts(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);
    useEffect(() => {
        axios.get('http://localhost:5000/api/sector/region')
            .then((response) => {
                 setValue([
                    response.data.countEnergy1,
                    response.data.countEnvio1,
                    response.data.countFinacial1,
                    response.data.countGovernment1,
                    response.data.countIt1
                ]);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);
    useEffect(() => {
        axios.get('http://localhost:5000/api/sector/region2')
            .then((response) => {
                 setValues([
                    response.data.countEnergy2,
                    response.data.countEnvio2,
                    response.data.countFinacial2,
                    response.data.countGovernment2,
                    response.data.countIt1
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
                    name: "Northern America",
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
                categories: ["Energy","Enviornment", "Financial", "Government","Information Technology"]
            }
        },
        series: chartedData
    };
    useEffect(() => {
        if (values.length > 0) {
            setChartsData([
                {
                    name: "World",
                    data: values
                }
            ]);
        }
    }, [values]);

    const states = {
        options: {
            chart: {
                id: "basic-bar"
            },
            xaxis: {
                categories: ["Energy","Enviornment", "Financial", "Government","Information Technology"]
            }
        },
        series: chartsData
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
        <div className="sectorpage">
            <h1 className="sector">Sectors</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
            <div id="chart">
                <Chart options={chartData.options} series={chartData.series} type="pie" width={600} />
            </div>
            <h2 className="sector">Some Of The Main Sectors</h2>
                 <p>Energy Count: {counts.countEnergy}</p>
            <p>Government Count: {counts.countGovernment}</p>
            <p>Aerospace & defence Count: {counts.countAero}</p>
            <p>Environment Count: {counts.countEnvio}</p>
            <p>Financial Service Count: {counts.countFinacial}</p>
            <p>Information Technology count: {counts.countIt}</p>
            <div className="sectorsinregion">
                <div>
            <h2 className="sector">Main Sectors In Northern America Region</h2>
            <Chart
               options={state.options}
             series={state.series}
               type="bar"
               width="600"
             />
             </div>
             <div>
                <h2 className="sector">Main Sectors In World Region</h2>
             <Chart
               options={states.options}
             series={states.series}
               type="bar"
               width="600"
             />
             </div>
             </div>
        </div>
        </div>
    );
}

export default Sector;
