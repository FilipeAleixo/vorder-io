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
          <span className="image main"><img src="/static/images/vorder_intro.png" alt="" /></span>
          <p>Vorder is a voice assistant that helps you place, cancel and manage hundreds of orders with one voice command. We are currently in Beta phase. For more information on how to become a Beta tester click <i>TRY VORDER</i> in the main menu.</p>
          <h3>Smooth trading experience from anywhere</h3>
          <p>Place orders, check prices, and manage your portfolio whether you're on your desk, relaxing on the couch, or even while driving. Zero clicking or typing involved.</p>
          <h3>No more missed trading opportunities</h3>
          <p>Trade faster than ever before. Vorder allows you to focus on the charts and drastically reduces the time it takes you to place an order.</p>
          <h3>All in one place</h3>
          <p>Trading multiple coins and/or in multiple exchanges requires you to constantly switch tabs and manage multiple logins. With Vorder you can access everything from one single place.</p>
          {close}
        </article>

        <article id="try" className={`${this.props.article === 'try' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Try Vorder</h2>
          <h3>Beta phase</h3>
          <p>We are currently in Beta phase. If you wish to become a Beta tester, follow the instructions below.</p>
          <p><u>Note</u>: At this stage we are testing our concept with the Binance Futures Testnet for the BTC/USDT and ETH/USDT pairs. We're testing with the Futures Testnet because the Binance Spot Testnet doesn't have a graphical interface.</p>
          <h3>Vorder Beta Registration</h3>
          <ul>
            <li>Register <a href="https://app.vorder.io/signup">here</a>.</li>
            <li>Click the confirmation link sent to your inbox.</li>
            <li>Go to <a href="https://app.vorder.io">app.vorder.io</a> and log in with your credentials.</li>
          </ul>
          <h3>Set up Binance Futures Testnet</h3>
          <ul>
            <li>Go to <a href="https://testnet.binancefuture.com/en/futures/BTCUSDT">Binance Futures Testnet</a> and register there</li>
            <li>Log into the Testnet account you've just created and then click "API Key".</li>
            <br></br>
            <span className="image fit"><img src="/static/images/binance_future.jpg" alt="" /></span>
            <li>Open <a href="https://app.vorder.io/">app.vorder.io</a> in another tab and click the icon at the lower left corner.</li>
            <br></br>
            <span className="image fit"><img src="/static/images/vorder_options.jpg" alt="" /></span>
            <li>In the form that appears, fill in the fields "API Key" and "API Secret" with those from your Binance Futures Testnet account, and then submit.</li>
          </ul>
          <h3>Ready to try Vorder?</h3>
          <ul>
            <li>You're all set to place your first voice order, so buckle up! Go back to <a href="https://app.vorder.io">app.vorder.io</a> and click the microphone button. The center of the microphone will turn blue after a loading period and you'll hear a female voice saying "I'm ready".</li>
            <br></br>
            <span className="image fit"><img src="/static/images/vorder_waiting.jpg" alt="" /></span>
            <li>While the microphone is blue, if you say "Terminator" you'll hear Vorder responding with "Waiting for order". The center of the microphone will turn red to indicate that your voice is now being recorded. A waveform will also show up at the center of the screen indicating your microphone levels.</li>
            <br></br>
            <span className="image fit"><img src="/static/images/vorder_listening.jpg" alt="" /></span>
            <li>While the microphone is red you can say your order. These are the order types available during the Beta phase (only for BTC/USDT and ETH/USDT):
              <p></p>
              <ol>
                <li><u>Limit and Market orders</u>
                  <ul>
                    <li>Syntax: <b>Buy/Sell [Quantity] [Coin] [Order Type] [Price]</b></li>
                    <li>Example: "Buy 1.1 Bitcoin Market" or "Sell 3.56 Ether Limit 5289". The first order buys 1.1 BTC at market price. The second order sells 3.56 ETH, with 5289 USDT as the limit price.</li>
                  </ul>
                </li>
                <li><u>Several limit orders of equal size, equally distributed inside range</u>
                  <ul>
                    <li>Syntax: <b>Buy/Sell [Quantity] [Coin] Range [Number of Limit orders] Lowest [Lower Price] Highest [Higher Price]</b></li>
                    <li>Example: "Buy 1 Bitcoin Range 5 Lowest 40,000 Highest 50,000". This will place 5 limit orders equally distributed between 40k and 50k USDT. In this case, each order will have a quantity of 0.2 BTC and the limit prices will be 40.0k, 42.5k, 45.0k, 47.5k, and 50.0k USDT.</li>
                  </ul>
                </li>
              </ol>
            </li>
            <li>Your voice order will be sent for interpretation once one of the two happens:
              <ol>
                <li>You stay silent for 2 seconds after speaking.</li>
                <li>The counter at the upper right corner reaches zero.</li>
              </ol>
            </li>
            <li>Once your voice order has been interpreted, you'll hear Vorder asking you to confirm your order. Case your audio wasn't clear enough or there was something invalid with the order you'll get an error message.</li>
            <br></br>
            <li>To confirm, just say either "Yes" or "No". If you said yes and you heard "Order placed", go check <a href="https://testnet.binancefuture.com/en/futures/BTCUSDT">Binance Futures Testnet</a> and your order will be there waiting for you :)</li>
            <br></br>
            <span className="image fit"><img src="/static/images/binance_future_order.jpg" alt="" /></span>
          </ul>
          <h3>Important notes</h3>
          <ul>
            <li>Vorder accepts several decimal places but Binance only accepts 2 for BTC and ETH, so if you use more than 2 decimal places the remaining ones will be truncated.</li>
            <li>Currently, only 'Bitcoin' and 'Ether' words work for the coin names. If you say, for instance, "BTC" or "ETH" it won't work.</li>
            <li>Noise, quality of the microphone, distance from microphone, and accent matters. We're still working on the system's robustness.</li>
            <li>According to our experiments, the voice recognition system generally works better using the microphone from a headset than using the built-in microphone from a laptop.</li>
            <li>During the Beta phase we will record and save all the orders to serve as samples to train and improve the speech recognition algorithm. Let us know if you don't want us to use your data.</li>
          </ul>
          <h3>Known issues</h3>
          <ul>
            <li>There are issues with Bluetooth headsets. You'll find that the microphone records, but there won't be any sound. This seems to be a problem for every voice app running in the browser, not just Vorder.</li>
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
          <form onSubmit={this.props.onSubmitContactForm}>
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
              <li><input type="submit" value="Send Message" className="special"/></li>
              <li><input type="reset" value="Reset" /></li>
            </ul>
          </form>
          <ul className="icons">
            <li><a href="#">
              <FontAwesomeIcon icon={faTwitter}/>
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
  onSubmitContactForm: PropTypes.func,
  timeout: PropTypes.bool
}

export default Main