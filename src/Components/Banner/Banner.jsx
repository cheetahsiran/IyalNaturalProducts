import Styles from './Banner.module.scss'
import BannerImg from '../../assets/img/bg1.png'
const Banner=()=> {
    return <div className={Styles.BannerWrapper} alt="iyal Banner image">
        <img src={BannerImg} />
    </div>
}
export default Banner;