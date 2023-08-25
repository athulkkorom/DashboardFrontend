import { useNavigate } from 'react-router-dom';
import './Home.css'
import { useEffect, useState } from 'react';
import axios from 'axios';
const Home = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

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
useEffect(() => {
  axios.get('http://localhost:5000/api/source')
    .then((response) => {
      setData(response.data.sourData);
    })
    .catch((error) => {
      console.log(error);
    });
}, []);
const uniqueTittle = new Set();
data.forEach((item) => {
uniqueTittle.add(item.title);
});
    return (
      <div className="main">
      <div className="sidebars">
      <h1 onClick={clickDash}>DASHBOARD</h1>
      <h2 onClick={clickTopic}>Topics</h2>
      <h2 onClick={clickSector}>Sector</h2>
      <h2 onClick={clickRegion}>Region</h2>
      <h2 onClick={clickPestle}>Pestle</h2>
      <h2 onClick={clickSource}>Source</h2>
      <h2 onClick={clickCountry}>Country</h2>
      <h2 onClick={clickEndyear}>End year</h2>
  </div>
        <div className="firstpage">
        <div>
<h1 className='home'>Home</h1>
</div>
<div>
  <p className='paragraph'>This Dashboard contain somany data this data useful for the  studies.This dashboard is the huge collection industrial data.This data helpful for finding the changes in the induastial area.
  This data also helpful for the find how the industries effect nature.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
  </p>
  <h2 className='home'>Tittles that we used for Analysing the Data </h2>
  {Array.from(uniqueTittle).map((title, index) => (
      <span key={index}className="sourcedata">{title} , </span>
    ))}
</div>
</div>
</div>
     );
}
 
export default Home;