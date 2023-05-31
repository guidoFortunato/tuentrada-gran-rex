import { FaSpinner } from 'react-icons/fa';
import '../css/spinner.css';


export const Spinner = () => {
  return (
    <div className='spinner'>
      <FaSpinner className='spinning' size={50} />
    </div>
    // <div className="text-center" style={{height:"100vh", display:"flex", justifyContent:"center", alignItems:"center"}}>
    //   <div className="spinner-border" role="status">
    //     <span className="visually-hidden">Cargando...</span>
    //   </div>
    // </div>
  );
};
