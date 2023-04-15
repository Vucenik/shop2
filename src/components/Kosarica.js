import React from "react";
import { useNavigate } from "react-router-dom";
import { obrisi_iz_kosarice,izracunaj_narudzbu } from "./pomocne_funkcije";

export default function  Kosarica({kosarica,update_kosarica}){
const navigate = useNavigate();


const redovi = kosarica.map((el,index)=>{
    return(
        <tr key={"red-kosarica"+index}>
        <td>
        {el.name}
    </td>
    <td>
         {el.cijena +" €"}
    </td>
    <td>
       <input type="number" name="kolicina" id="kolicina_input" min="1" max="9999" 
       value={el.kolicina}
       onChange={e=>{
        
        const privremena_kosarica = [...kosarica];
        const kolicina =e.currentTarget.value;
        if(kolicina>0){
        privremena_kosarica[index].kolicina=Number.parseInt(kolicina);
        };
        update_kosarica(privremena_kosarica);

       }}
       
       />
    </td>
    <td>
         {(el.kolicina*el.cijena).toFixed(2) +' €'}
       </td>
       <td>
      <button
      onClick={e=>{
        const privremena_kosarica = obrisi_iz_kosarice(index,kosarica);
        update_kosarica(privremena_kosarica);

      }}
      
      >Briši</button>
       </td>
    </tr>
    )
})

    return (
        <>
        <table>
    <caption> Pregled košarice</caption>
    <thead>
        <tr>
        <th>
            Opis
        </th>
        <th>
            Cijena
        </th>
        <th>
            Količina
        </th>
        <th>
            Ukupno
        </th>
        <th>
            Briši
        </th>
        </tr>
    </thead>
    <tbody id="kontejner_tablica">
      
        
{redovi}

    </tbody>
    <tfoot>
        <tr>
            <td>Ukupno</td>
            <td id="tablica_ukupno" colSpan="2">   {izracunaj_narudzbu(kosarica).toFixed(2)+ " €"}</td>
        </tr>
        <tr>
            <td colSpan="5">
                <button id="tablica_naruci" 
                onClick={
                    e=>{
                        update_kosarica([]);
                        alert("Narudžba poslana");
                        navigate("/katalog/1");
                    }
                }
                >Naruči</button>
            </td>
        </tr>
    </tfoot>
</table>
</>
    )
}