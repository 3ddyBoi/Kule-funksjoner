import './App.css';

import { useState } from 'react';
import JSConfetti from 'js-confetti';

import DynamicButton from './components/DynamicButton';
import Selfie from './assets/13549549_399738896863242_2023945710_n.jpg';

import emojis from './data/emojis.json';

const App = () => {
    const makeManyConfetties = new JSConfetti();

    const randomBackgroundColor = () => {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        return { r, g, b, color: `rgb(${r}, ${g}, ${b})` };
    };

    const [secondButton, setSecondButton] = useState(
        JSON.parse(localStorage.getItem('secondButton')) || false
    );

    localStorage.setItem('secondButton', secondButton);
    const [backgroundColor, setBackgroundColor] = useState(
        JSON.parse(localStorage.getItem('backgroundColor')) ||
            randomBackgroundColor()
    );

    localStorage.setItem(
        'backgroundColor',
        JSON.stringify(backgroundColor)
    );

    const rgbToBrightness = (r, g, b) => {
        return (r * 299 + g * 587 + b * 114) / 1000;
    };

    const isDark =
        rgbToBrightness(
            backgroundColor.r,
            backgroundColor.g,
            backgroundColor.b
        ) < 128;

    const textColor = isDark ? 'white' : 'black';

    const RandomEmoji = () => {
        emojis.sort(() => Math.random() - 0.5);
        return emojis[0];
    };

    return (
        <div
            className='App'
            style={{
                backgroundColor: backgroundColor.color,
                color: textColor,
            }}
        >
            <div className='frontpage'>
                <div>
                    <h1>
                        Edvard Høiby
                        <RandomEmoji />
                    </h1>
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
                    {secondButton && (
                        <h2>Wow du trykket på den andre knappen🤯</h2>
                    )}
                    <DynamicButton
                        onClick={() =>
                            makeManyConfetties
                                .addConfetti({
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
                                .then(
                                    makeManyConfetties.clearCanvas()
                                )
                        }
                        margin='0px 5px 0px 0px'
                    >
                        TRYKK MEG🎉
                    </DynamicButton>
                    <DynamicButton
                        margin='0px 5px 0px 0px'
                        onClick={() => {
                            setBackgroundColor(
                                randomBackgroundColor()
                            );
                        }}
                    >
                        Bytt bakgrunnsfarge🖥️
                    </DynamicButton>
                    <DynamicButton
                        padding='10px 45px'
                        color='#191645'
                        backgroundColor='#FF64B4'
                        borderRadius='10px'
                        onClick={() => setSecondButton(!secondButton)}
                    >
                        En helt annen knapp😉
                    </DynamicButton>
                </div>
                <div>
                    <img
                        src={Selfie}
                        alt='Digitalt selvportrett av Edvard Høiby'
                    />
                </div>
            </div>
        </div>
    );
};

export default App;
