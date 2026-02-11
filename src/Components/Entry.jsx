import { japan, map } from '../assets'
const Entry = ({img,title,country,googleMapsLink,dates,text}) => {
    return (
        <div className='light'>
            <div className='pic'><img src={img.src} alt={img.alt} />
            </div>
            <div className='save'>
                <div className='top'>
                    <img src={map} alt="" className='ii'/>
                    <div>{country}</div>
                    <div>
                        <a href={googleMapsLink}>View on Google maps
                        </a>
                    </div>
                </div>
                <p className='fuji'>{title}</p>
                <p className='power'>{dates}</p>
                <div className='div'>
                    <p>
                        {text}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Entry;
