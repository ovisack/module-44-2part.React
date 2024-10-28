import PropTypes from "prop-types";
import Features from "../Features/Features";


const PriceOption = ({option}) => {
    const { name,features,price}=option;
    return (
        <div className="bg-blue-500 text-white  rounded-md p-4">
         
          <h2 className="text-5xl">{price}</h2>
          <h1 className="text-3xl">{name}</h1>  
      <div className="text-center">
      {
            features.map((features,index)=><Features key={index} features={features} ></Features>)
        }
      </div>
      <button className="mt-10 bg-lime-300 text-blue-700 font-bold  w-28 h-10 hover:bg-black">By New</button>
        </div>
    );
};

PriceOption.proTotype ={
    option:PropTypes.object,
}

export default PriceOption;