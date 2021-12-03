import logo from './logo.svg';
import './App.css';

function App() {
    return (
        /*<div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>*/
        <div class="hazards">
            <table>
                <thead>
                <tr>
                    <th class="fivePercent">Icon</th>
                    <th class="tenPercent">Risikopriorität</th>
                    <th class="fiftyFivePercent">Definition Gefährdung</th>
                    <th class="fifteenPercent">Gefährdung</th>
                    <th class="fifteenPercent">Akzeptanznachweis</th>
                </tr>
                </thead>
                <tbody>
                {/*<tr className="spacer">
                    <td/>
                    <td/>
                    <td/>
                    <td/>
                    <td/>
                </tr>*/}
                <tr>
                    <td class="fivePercent"></td>
                    <td class="tenPercent"><span className="dot green"></span></td>
                    <td class="fiftyFivePercent">Designvorgabe "Mindestdicke" kann nicht eingehalten werden - Dicke des Implantsts zu dünn.</td>
                    <td class="fifteenPercent"></td>
                    <td class="fifteenPercent"></td>
                </tr><tr>
                    <td class="fivePercent"></td>
                    <td class="tenPercent"><span className="dot green"></span></td>
                    <td class="fiftyFivePercent">Designvorgabe "Mindestdicke" kann nicht eingehalten werden - Dicke des Implantsts zu dünn.</td>
                    <td class="fifteenPercent"></td>
                    <td class="fifteenPercent"></td>
                </tr>
            {/*    <tr class="spacer">
                    <td/>
                    <td/>
                    <td/>
                    <td/>
                    <td/>
                </tr>*/}

                </tbody>
            </table>
        </div>
    );
}

export default App;
