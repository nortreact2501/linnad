import { useState } from "react";

function Linn({linn}) {
    const [kylastusi, setKylastusi] = useState(0)

    const vajutus = (event) => {
        console.log('klikiti nupul ' + event.target.innerText)
        setKylastusi(kylastusi + 1)
        console.log(kylastusi);
    }

    return (
        <div>
            <h1>{linn.nimi}</h1>
            <div>{linn.huvitav}</div>
            <button onClick={vajutus} >Külasta linna {linn.nimi}</button>
            <span id="k"> -- {kylastusi} -- </span>
            <div className="imgWrapper">
                <img src={linn.pilt} alt={'linnapilt ' + linn.nimi} />
            </div>
        </div>
    )
}

export default Linn