import { useParams } from "react-router-dom"


export default function Service(props) {
    let { id } = useParams()
    const service = props.services.find((service) => (service.id.toString() === id))
    if(!service) return <h3>no service</h3>
    return (
        <div className="serviceDiv">
            <h1>{service.name}</h1>
            <p>Price: {service.price}</p>
            <p>{service.description}</p>
        </div>
    )
}