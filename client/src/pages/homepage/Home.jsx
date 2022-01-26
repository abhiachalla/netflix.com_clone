
import Navbar from "../../components/navbar/Navbar.js";
import Featured from "../../components/featured/featured.jsx";
import List from "../../components/list/list.jsx";
import "./Home.css";
import { useState,useEffect } from "react";
import axios from "axios";


const Home = ({type}) => {


    const [lists, setlists] = useState([]);
    const [genre, setGenre] = useState(null);

    useEffect( () => {
        const getRandomLists = async() => {
            try {

                const res = await axios.get(
                  `lists${type ? "?type=" + type : ""}${
                    genre ? "&genre=" + genre : ""
                  }`,
                  {
                    headers: {
                      
                        token:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxY2FhMzExNjRkODQ4M2MwMDNiODhhNCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MjY1NDg5OSwiZXhwIjoxNjQzMDg2ODk5fQ.HYzJwbYW1--sOO35Tyg6EOyAFfUKKjMvZT-s-mRYlF8"
                    },
                  }
                );
              
                setlists(res.data);
              
              }catch(err) {
                  
                console.log(err);
            }
        };
        getRandomLists()
    },[type, genre]);

    return (
        <div className="Home">
            <Navbar/>
           
            <Featured type = {type} setGenre={setGenre}/>


{lists.map((list) => (
        <List list={list} />
      ))}


        </div>
    )
}

export default Home

