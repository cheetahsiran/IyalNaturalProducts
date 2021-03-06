import { Link } from "react-router-dom";
import Styles from "./Topnav.module.scss";
import { MenuList } from "../../Global/Constents";
import Logo from "../../assets/img/Logo.png";
const Topnav = () => {
  return (
    <div className={Styles.topNavWrapper}>
      <div className={Styles.logo}>
        <img src={Logo} alt="iyal logo"/>
        Iyal
            </div>
      <div className={Styles.menu}> 
      <nav>
        <ul>
          {
            MenuList.map((obj)=>{
              return (<li><Link to={obj.Route}>{obj.DisplayName}</Link></li>)
            })
          }
        </ul>
      </nav>
      </div>
    </div>
  );
};

export default Topnav;
