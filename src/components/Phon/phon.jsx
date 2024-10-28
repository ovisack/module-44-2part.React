import { useEffect, useState } from "react";



const Phon = () => {

    const [phon,setPhon]=useState([])

useEffect(()=>{
    fetch("https://openapi.programming-hero.com/api/phones?search=iphone")
    .then(res=>res.json())
    .then(data=> setPhon(data.data))
},[])

    return (
        <div>
            <h1 className="text-2xl"> Phon{phon.length}</h1>
        </div>
    );
};

export default Phon;