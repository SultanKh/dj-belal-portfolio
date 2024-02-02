
import './BioSection.css'
import img from '../../assets/signature.webp';
import bilz from '../../assets/billz.png'


const BioSection = ({index, djName, djDescription}) => {
    return <div className='bio' dir='rtl'>
        <div className='bio-section'>
            <div className={'container' + (index%2 === 0 ? ' reverse': '')}>

                <figure><img src={bilz} alt="belal" height={500}/></figure>
                <div className='about_info'>
                    <h3>{djName}</h3>
                    <p>{djDescription}</p>
                    <div className='signature'>
                        <img src={img} alt='my sign' />
                    </div>
                </div>

            </div>
        </div >
    </div>
}

export default BioSection;