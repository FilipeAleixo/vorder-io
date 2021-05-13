import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faMicrophone from '@fortawesome/fontawesome-free-solid/faMicrophoneAlt'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            {/*<span className="icon fa-microphone"></span>*/}
            <FontAwesomeIcon icon={faMicrophone} transform="grow-22" />
        </div>
        <div className="content">
            <div className="inner">
                <h1>Vorder</h1>
                <h3>Trade crypto at the speed of your voice</h3>
                <h3>And never miss a trade again.</h3>
                <p> From traders to traders </p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('intro')}}>Overview</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('work')}}>Try Vorder</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('about')}}>About Us</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}>Contact</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
