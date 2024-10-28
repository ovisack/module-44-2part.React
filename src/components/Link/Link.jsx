;
import PropTypes from 'prop-types';

const Link = ({route}) => {
    return (
    
        <div className='  '>
           <li className='mr-8 hover:bg-yellow-500 6px'  ><a href={route.path}>{route.name}</a></li> 
        </div>
    );

  
};
 Link.propTypes={
    route: PropTypes.object
   } 
export default Link;