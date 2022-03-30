import './App.css';

import JSConfetti from 'js-confetti';

import DynamicButton from './components/DynamicButton';
import Selfie from './assets/13549549_399738896863242_2023945710_n.jpg';

function App() {
    const makeManyConfetties = new JSConfetti();

    return (
        <div className='App'>
            <div className='frontpage'>
                <div>
                    <h1>Edvard Høiby</h1>
                    <p>
                        Jeg er en 17 år gammel gutt. Jeg er arbeidsom,
                        ambisiøs og sosial. Jeg tar yrkesfaglig
                        utdanning og er ferdig med Vg1 på
                        Informasjonsteknologi og Medieproduksjon. Nå
                        går jeg Informasjonsteknologi Vg2 ved Hamar
                        Katedralskole.
                    </p>
                    <p>
                        På fritiden er jeg glad i å gå på fjellturer
                        både med og uten randonee ski på beina. Det er
                        heller ikke sjeldent at jeg sitter hjemme bak
                        skjermen og koder eller spiller.
                    </p>
                    <DynamicButton
                        onClick={() =>
                            makeManyConfetties.addConfetti({
                                confettiRadius: 6,
                                confettiNumber: 500,
                                emojis: [
                                    '😂',
                                    '🖥️',
                                    '💀',
                                    '🔫',
                                    '🔪',
                                    '🙂',
                                ],
                                emojiSize: 30,
                            })
                        }
                    >
                        TRYKK MEG
                    </DynamicButton>
                </div>
                <div>
                    <img src={Selfie} alt='' />
                </div>
            </div>
        </div>
    );
}

export default App;
