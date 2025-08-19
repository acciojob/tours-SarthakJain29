import React, {useState, useEffect} from "react";
import Loading from "./Loading.js";
import Tours from "./Tours.js";
import "regenerator-runtime/runtime";

const App = () => {
    const [tours, setTours] = useState([]);
    const [loading, setLoading] = useState(false);

    async function fetchTours(){
      setLoading(true);
      try{
        const response = await fetch("/api/react-tours-project");
        const data = await response.json();
        setTours(data);
        setLoading(false);
      }catch(error){
        console.log(error);
        setLoading(false);
      }
    }
    useEffect(()=>{
      fetchTours();
    },[]);

    const removeTour = (id) => {
      const newTours = tours.filter((tour) => tour.id!==id);
      setTours(newTours);
    }
    if(loading){
      return(
        <main>
          <Loading/>
        </main>
        
      )
    }
    if(tours.length === 0){
      return (
        <main>
          <h2>No Tours left</h2>
          <button onClick={fetchTours}>Refresh</button>
        </main>
      )
    }

    return(
      <main id="main">
        <Tours tours={tours} removeTour={removeTour}/>
      </main>
    )
}
export default App;
