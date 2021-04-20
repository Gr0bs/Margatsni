import '../styles/navigation.scss'
import logo from "../images/margatsni.png"
import Menu from './Menu'

const Navigation = () => {
    return ( 
        <div className="navigation">
            <div className="container">
                <img  src={logo} className="logo" alt="margatsni logo" />
                <div className="search">
                    <i class="fas fa-search"></i>
                    <span className="searchText">Search</span>
                </div>
                <Menu />
            </div>
        </div> 
    );
}
 
export default Navigation;