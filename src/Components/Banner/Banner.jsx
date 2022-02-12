import Styles from './Banner.module.scss'
import BannerImg from '../../assets/img/bg1.png'
const Banner=()=> {
    return <div className={Styles.BannerWrapper}>
        <img src={BannerImg} />
    </div>
}
export default Banner;