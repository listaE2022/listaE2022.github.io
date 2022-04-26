import './Figure.css';
import { Link } from 'react-router-dom';

function Figure(props) {
  return (
    <div className='centerDiv'>
    <figure itemprop="image">
        <img src={props.image} />
        <figcaption>
        <Link className='link' to={props.path}>
           <button className="btn btn-outline-primary btn-round"> Ver Mais </button>
          </Link> 
       </figcaption>
    </figure>
    </div>
  );
}

export default Figure;