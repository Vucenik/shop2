import React from "react";

import data from "./data.js";
import Katalog from "./Katalog.js";
import {Routes,Route,Link} from 'react-router-dom';
import Kartice from "./Kartice.js";
import Kosarica from "./Kosarica.js";
import { useNavigate } from "react-router-dom";
import { izracunaj_kolicinu } from "./pomocne_funkcije.js";
const katalog = <Katalog {...data}/>




export default function Shop(){

  const navigate = useNavigate();
  
  const [naslov,set_naslov]=React.useState("");

  const [kosarica,set_kosarica]=React.useState([]);
  React.useEffect(()=>{
   let kosara = localStorage.hasOwnProperty('kosarica')?JSON.parse( localStorage.getItem("kosarica")):[];
 
   set_kosarica([...kosara]);
   navigate("/katalog/1");
 
  },[]);


const update_kosarica = kosarica=>{
  set_kosarica([...kosarica]);
  const kosarica_json = JSON.stringify(kosarica);
  localStorage.setItem("kosarica",kosarica_json);
}

  const parametri_kosarice ={set_naslov,kosarica,update_kosarica};
  
    return(
        <>
       
        <header>
        <Link to={"/" }className="logo"></Link>
        <h2 id="naslov_kategorija">{naslov}</h2>
        <ul>
            <li><Link to={'/kosarica'}><span id="cart-span" className="prikaz-span">{
              izracunaj_kolicinu(kosarica)
            }</span></Link></li>
            <li></li>
        </ul>
    </header>
    <main>
        <aside>

          <nav>
          <h3>Katalog</h3>
            <ul id="kategorije">
               {katalog}
            </ul>
          </nav>
          <nav>
         
            <ul>
                <li><a href="#">Kontakt</a></li>
                <li><a href="#">Newsletter</a></li>
                <li><a href="#">Pretlati se</a></li>
            </ul>
          </nav>
        </aside>
        <section className="pozdrav">
            <h3>
              Web šop sa šarenim igračkama
            </h3>
        </section>
        <section className="proizvodi" id="kontejner_proizvoda">
      <Routes>
        <Route path="/katalog/:id" element = {<Kartice {...parametri_kosarice}/>} />
        <Route path="/kosarica" element ={<Kosarica {...{update_kosarica,kosarica}}/>}/>
      
        <Route path="/" element={<></>}/>
     
      </Routes>
        </section>
    </main>
    
  
    </>
    );
}