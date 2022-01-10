import { FaSpinner } from 'react-icons/fa';
import './styles/Spinner.scss';
export function Spinner() {
    return (
        <div className="spinner">
            <FaSpinner size={60} className="spinning"/>
        </div>
    )
}
