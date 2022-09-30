import { Link } from 'react-router-dom'
export default function Services(props) {
    const servicesArr = props.services.map((service, i) => {
        return (
        <li key={`li-id${i}`}> 
            <Link 
            to={`/services/${service.id}`}
            >
                {service.name}
            </Link>
        </li>
    )
    })
    return(
        <div className="servicesDiv">
            <h1>Services</h1>
            <ol>{servicesArr}</ol>
        </div>
    )
}