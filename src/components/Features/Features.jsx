import PropTypes from "prop-types";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";


const Features = ({features}) => {
    return (
        <div>
            <p className="flex"><IoMdCheckmarkCircleOutline className="text-green-900"></IoMdCheckmarkCircleOutline>{features}</p>
        </div>
    );
};
Features.proTotype ={
    features:PropTypes.string,
}

export default Features;