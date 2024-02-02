
import './Service.css'

const Service = ({title ,description = 'Wedding Events'}) => {
    return <div className='Service'>
        {/* <h2>Weddings</h2>
        <p>we deliver finest evening event with quality music</p> */}
        <a className="service">
            <div className="service__img"></div>
            <h2 className="service__title">{description}</h2>
        </a>
    </div>
}


export default Service;