import PropTypes from 'prop-types';
import { FontAwesomeIcon}  from '@fortawesome/react-fontawesome';
import faTwitter from '@fortawesome/fontawesome-free-brands/faTwitter';
import faFacebook from '@fortawesome/fontawesome-free-brands/faFacebook';
import faInstagram from '@fortawesome/fontawesome-free-brands/faInstagram';
import faGithub from '@fortawesome/fontawesome-free-brands/faGithub';

class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article id="start" className={`${this.props.article === 'start' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Start Here</h2>
          <span className="image main"><img src="/static/images/pic01.jpg" alt="" /></span>
          <p>Vorder is a voice assistant that helps you place, cancel and manage hundreds of orders with one voice command. From dozens of clicks to one voice command will be all it takes for a crypto trader to trade more efficiently</p>
          <h3>Smooth trading experience from anywhere</h3>
          <p>Place orders, check prices, and manage your portfolio whether you're on your desk, relaxing on the couch, or even while driving. Zero clicking or typing involved.</p>
          <h3>No more missed trading opportunities</h3>
          <p>Trade faster than ever before. Vorder allows you to focus on the charts and drastically reduces the time it takes you to place an order.</p>
          <h3>All in one place</h3>
          <p>Trading multiple coins and/or in multiple exchanges requires you to constantly switch tabs and manage multiple logins. With Vorder you can access everything from one single place.</p>
          <br></br>
          <p>We are currently in Beta phase. For more information on how to become a Beta tester <a href="#try">click here.</a></p>
          {close}
        </article>

        <article id="try" className={`${this.props.article === 'try' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Try Vorder</h2>
          <h3>Beta phase</h3>
          <p>We are currently in Beta phase. At this stage we are testing our concept only with the Binance Testnet API for BTC/USDT and ETH/USDT. Follow the instructions below if you wish to become a Beta tester.</p>
          <h3>Vorder Beta Registration</h3>
          <ul>
            <li>Register <a href="https://app.vorder.io/signup">here</a>.</li>
            <li>Click the confirmation link sent to your inbox.</li>
            <li>Go to <a href="https://app.vorder.io">app.vorder.io</a> and login with your credentials.</li>
          </ul>
          <h3>Set up Binance Futures Testnet</h3>
          <ul>
            <li>Go to <a href="https://testnet.binancefuture.com/en/futures/BTCUSDT">Binance Futures Testnet</a> and register there</li>
            <li>Log into the account you've just created and then click "API Key"</li>
            <br></br>
            <span className="image fit"><img src="/static/images/binance_future.jpg" alt="" /></span>
            <li>Open <a href="https://app.vorder.io/">app.vorder.io</a> in another tab and click the icon at the lower left corner.</li>
            <br></br>
            <span className="image fit"><img src="/static/images/vorder_options.jpg" alt="" /></span>
            <li>In the form that appears, fill in the fields "API Key" and "API Secret" with those from your Binance Futures Testnet account and submit.</li>
          </ul>
          <h3>You're ready to try Vorder</h3>
          <ul>
            <li>You're all set to try your first voice order. Go back to <a href="https://app.vorder.io">app.vorder.io</a> and click the microphone button. The center of the microphone will turn blue after a loading period and you'll hear a female voice saying "I'm ready".</li>
            <br></br>
            <span className="image fit"><img src="/static/images/vorder_waiting.jpg" alt="" /></span>
            <li>While the microphone is blue, if you say "Terminator" you'll hear Vorder responding "Waiting for order". The center of the microphone will turn red to indicate that your voice is now being recorded, and a wave form indicating your microphone levels will appear at the center of the screen.</li>
            <br></br>
            <span className="image fit"><img src="/static/images/vorder_listening.jpg" alt="" /></span>
            <li>Order types available in Beta phase (only for BTC/USDT and ETH/USDT):
              <ol>
                <li> Simple Limit and Market orders.
                  <ul>
                    <li>Syntax: <b>Buy/Sell [Quantity] [Coin] [Order Type] [Price]</b></li>
                    <li>Example: "Buy 1.1 Bitcoin Market" or "Sell 3.56 Ether Limit 2450"</li>
                  </ul>
                </li>
                <li>Several limit orders of equal size, equally distributed between a range of prices.
                  <ul>
                    <li>Syntax: <b>Buy/Sell [Quantity] [Coin] Range [Number of Limit orders] Lowest [Lower Price] Highest [Higher Price]</b></li>
                    <li>Example: "Buy 1 Bitcoin Range 5 Lowest 40,000 Highest 50,000", which will place 5 limit orders equally distributed between $40k and $50k. In this case, each order will have a quantity of 0.2BTC and the limit prices will be $40.0k, $42.5k, 45.0k, 47.5k, and 50.0k.</li>
                  </ul>
                </li>
              </ol>
            </li>
            <li>Your voice order will be sent for interpretation after one of the two happens:
              <ol>
                <li>You stay silent for 2 seconds after having spoken.</li>
                <li>The counter at the upper right corner reaches zero.</li>
              </ol>
            </li>
          </ul>
          <h3>Important notes</h3>
          <ul>
            <li>foo</li>
          </ul>
          <h3>Answer survey</h3>
          <ul>
            <li>foo</li>
          </ul>
          <h3>Troubleshooting</h3>
          <ul>
            <li>foo</li>
          </ul>
          <h3>Known issues</h3>
          <ul>
            <li>Bluetooth headsets don't work well with Vorder. You'll find that the microphone records, but there won't be any sound. This seems to be a problem for every voice app running in the browser, not just Vorder.</li>
            <li>We've had reports that there are problems in Mac and iPhone but we still haven't tested in those systems.</li>
          </ul>
          {close}
        </article>

        <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">About Us</h2>
          <span className="image main"><img src="/static/images/pic03.jpg" alt="" /></span>
          <p>Lorem ipsum dolor sit amet, consectetur et adipiscing elit. Praesent eleifend dignissim arcu, at eleifend sapien imperdiet ac. Aliquam erat volutpat. Praesent urna nisi, fringila lorem et vehicula lacinia quam. Integer sollicitudin mauris nec lorem luctus ultrices. Aliquam libero et malesuada fames ac ante ipsum primis in faucibus. Cras viverra ligula sit amet ex mollis mattis lorem ipsum dolor sit amet.</p>
          {close}
        </article>

        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Contact</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li><input type="submit" value="Send Message" className="special" /></li>
              <li><input type="reset" value="Reset" /></li>
            </ul>
          </form>
          <ul className="icons">
            <li><a href="#">
              <FontAwesomeIcon icon={faTwitter} transform="shrink-7"/>
            </a></li>
          </ul>
          {close}
        </article>

      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool
}

export default Main