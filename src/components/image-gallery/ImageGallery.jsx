
import Service from '../service/Service';
import './ImageGallery.css'

const SERVICES = ['سهرات شباب', "طلعات", "زفات", "سهرات صبابا", "تعليه العيله", "حفلات تخريج"]
const ImageGallery = () => {
    return <div className='ImageGallery'>

        {SERVICES.map((item, index) => <div key={index + '.descriptionservice'} className='work-item'>
            <Service description={item} />
        </div>)}

    </div>
}

export default ImageGallery;