import './App.css';
import Linn from './Linn';

import piltPariis from './pildid/paris__7_by_joeclaffeyjr_dfgnddo.png';
import piltLondon from './pildid/london_pictures_iii_by_jenisei_d1z6dkf.jpg';
import piltBerliin from './pildid/evening_in_gendarmenmarkt_by_rikitza_d7mm0zy.png';

function App() {
  const pariis = {
    nimi: "Pariis",
    huvitav: "palju kunsti",
    pilt: piltPariis
  };

 
  const london = {
    nimi: "London",
    huvitav: "punased bussid!!!",
    pilt: piltLondon
  };

  const linnad = [
    pariis,
    london,
    {
      nimi: "Berliin",
      huvitav: "väga hea curryvorst",
      pilt: piltBerliin
    },
    {
      nimi: "Tallinn",
      huvitav: "kilukarbivaade"
    },
  ]
  
  return (
    <div className="App">
      <h1>Linnad</h1>
      { 
          linnad.map((linn, index) =>  <Linn key={index} linn={linn} />)
      }
    </div>
  );
}

export default App;
