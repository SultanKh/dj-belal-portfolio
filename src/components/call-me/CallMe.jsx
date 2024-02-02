import './CallMe.css'
import callme from '../../assets/belalFace.png'
const CallMe = () => {
    return <div className="CallMe">
        <div className='container'>
            {/* <div className='innerContainer'>
            </div> */}
            <div className='callMephoto'>
                <img src={callme} alt='profile' />
            </div>
            <div dir='rtl' className='mobile-number'>
                <span > للاتصال والحجز</span>

                <a
                    href="https://wa.me/0547572768"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <h4 dir='ltr'>054 757 2768</h4>
                </a>
            </div>



        </div>

    </div>
}

export default CallMe;