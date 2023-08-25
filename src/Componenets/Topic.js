import axios from "axios";
import { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import './Topic.css'
import { useNavigate } from "react-router-dom";
const Topic = () => {
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

    const [topics, setTopics] = useState([]);
    const [counts, setCounts] = useState({
        countOil:0,
        countGas:0,
        countMarket:0,
        countConsu:0,
        countProdu:0,
        countExpo:0,
        countGrow:0,
    });
    
    useEffect(() => {
        axios.get('http://localhost:5000/api/topic')
            .then((response) => {
                setCounts(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);
    const[state,setState] =useState({
        series: [{
            data: [5,22,36,40,52,92,416]
          }],
          options: {
            chart: {
              type: 'bar',
              height: 350
            },
            plotOptions: {
              bar: {
                borderRadius: 4,
                horizontal: true,
              }
            },
            dataLabels: {
              enabled: false
            },
            xaxis: {
              categories: ['Consumption', 'Market', 'Production', 'Export',
                'Growth', 'Gas', 'Oil'],
              
            }}
         } )
         const[diagram,setDiagram] = useState({
          
          
          series: [416, 92, 22, 5, 36,40,52],
          options: {
            chart: {
              width: 380,
              type: 'donut',
              dropShadow: {
                enabled: true,
                color: '#111',
                top: -1,
                left: 3,
                blur: 3,
                opacity: 0.2
              }
            },
            stroke: {
              width: 0,
            },
            plotOptions: {
              pie: {
                donut: {
                  labels: {
                    show: true,
                    total: {
                      showAlways: true,
                      show: true
                    }
                  }
                }
              }
            },
            labels: ["Oil", "Gas", "Market", "Consumption", "Prduction","Export","Growth"],
            dataLabels: {
              dropShadow: {
                blur: 3,
                opacity: 0.8
              }
            },
            fill: {
            type: 'pattern',
              opacity: 1,
              pattern: {
                enabled: true,
                style: ['verticalLines', 'squares', 'horizontalLines', 'circles','slantedLines'],
              },
            },
            states: {
              hover: {
                filter: 'none'
              }
            },
            theme: {
              palette: 'palette2'
            },
            title: {
              text: "Favourite Topics Type"
            },
            responsive: [{
              breakpoint: 480,
              options: {
                chart: {
                  width: 400
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
        <div className="topicpage">
            <h1 className="topic">Topics</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
            <div id="chart">
  <Chart options={state.options} series={state.series} type="bar" height={500} />
</div>
<div>
<h2 className="topic">Some Of The Important Topics & Number Of Industry That Have</h2>
<div  className="topiccontemt">
  <div>
            <p>Oil industry:{counts.countOil}</p>
            <p>Gas industry:{counts.countGas}</p>
            <p>Market industry:{counts.countMarket}</p>
            <p>consumption industry:{counts.countConsu}</p>
            <p>Production industry:{counts.countProdu}</p>
            <p>Export industry:{counts.countExpo}</p>
            <p>Growth industry:{counts.countGrow}</p>  
            </div>
            <div id="chart">
  <Chart options={diagram.options} series={diagram.series} type="donut" width={380} />
</div> 
</div>    
</div> 
            </div>
            </div>
     );
}
 
export default Topic;