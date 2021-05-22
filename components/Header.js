import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import faMicrophone from '@fortawesome/fontawesome-free-solid/faMicrophone';

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            {/*<span className="icon fa-microphone"></span>*/}
            <FontAwesomeIcon icon={faMicrophone} transform="shrink-11 up-2.5" />
        </div>
        <div className="content">
            <div className="inner">
                <h1>Vorder</h1>
                <p>Trade crypto at the speed of your voice and never miss a trade again.</p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="#" onClick={() => {props.onOpenArticle('start')}}>Start Here</a></li>
                <li><a href="#" onClick={() => {props.onOpenArticle('try')}}>Try Vorder</a></li>
                <li><a href="#" onClick={() => {props.onOpenArticle('about')}}>About Us</a></li>
                <li><a href="#" onClick={() => {props.onOpenArticle('contact')}}>Contact</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
