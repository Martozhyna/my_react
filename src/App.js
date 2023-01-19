import './App.css';

import SimpsonComponent from "./components/SimpsonsComponent/SimpsonComponent";
import RickAndMortyComponent from "./components/RickAndMortyComponent/RickAndMortyComponent";

const App = ()  => {
  const imgHomer = 'https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png';
  const imgMarge = 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png';
  const imgBart = 'https://upload.wikimedia.org/wikipedia/en/a/aa/Bart_Simpson_200px.png';
  const imgLisa = 'https://upload.wikimedia.org/wikipedia/en/e/ec/Lisa_Simpson.png';
  const imgMaggie = 'https://upload.wikimedia.org/wikipedia/en/9/9d/Maggie_Simpson.png'
  return (
      <div className="App">
        <h1>Cartoons</h1>
        <h2>The Simpsons</h2>
        <div className={'Simpsons characters'}>

          <SimpsonComponent name={'Homer'}
                            age={39}
                            img={imgHomer}/>
          <SimpsonComponent name={'Marge'}
                            age={36}
                            img={imgMarge}/>
          <SimpsonComponent name={'Bart'}
                            age={10}
                            img={imgBart}/>
          <SimpsonComponent name={'Lisa'}
                            age={8}
                            img={imgLisa}/>
          <SimpsonComponent name={'Maggie'}
                            age={1}
                            img={imgMaggie}/>
        </div>
        <h2>Rick and Morty</h2>
        <div className={'RickAndMorty characters'}>

          <RickAndMortyComponent id={12}
                                 name={'Alexander'}
                                 status={'dead'}
                                 species={'human'}
                                 gender={'male'}
                                 image={'https://rickandmortyapi.com/api/character/avatar/12.jpeg'}
          />
          <RickAndMortyComponent id={749}
                                 name={'Coat Rack Head'}
                                 status={'unknown'}
                                 species={'Mythological Creature'}
                                 gender={'male'}
                                 image={"https://rickandmortyapi.com/api/character/avatar/749.jpeg"}
          />
          <RickAndMortyComponent id={631}
                                 name={'Rick Sanchez'}
                                 status={'alive'}
                                 species={'human'}
                                 gender={'male'}
                                 image={"https://rickandmortyapi.com/api/character/avatar/631.jpeg"}
          />
          <RickAndMortyComponent id={551}
                                 name={'Monitor Lord'}
                                 status={'alive'}
                                 species={'alien'}
                                 gender={'male'}
                                 image={"https://rickandmortyapi.com/api/character/avatar/551.jpeg"}
          />
          <RickAndMortyComponent id={256}
                                 name={'Rick D-99'}
                                 status={'dead'}
                                 species={'human'}
                                 gender={'male'}
                                 image={"https://rickandmortyapi.com/api/character/avatar/286.jpeg"}
          />
          <RickAndMortyComponent id={176}
                                 name={'Celebrity Jerry'}
                                 status={'alive'}
                                 species={'human'}
                                 gender={'male'}
                                 image={"https://rickandmortyapi.com/api/character/avatar/176.jpeg"}
          />
        </div>

      </div>
  );
}

export {App};
