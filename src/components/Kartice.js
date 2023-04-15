import { useParams } from "react-router-dom";
import data from "./data.js";
import { dodaj_u_kosaricu,produkt_u_kosarici } from "./pomocne_funkcije.js";



export default function Kartice ({set_naslov,kosarica,update_kosarica}){
    const params = useParams();
    const kategorije_id =params.id-1;
   
const naslov = data.categories[kategorije_id].name??"";

set_naslov(naslov);

    return(
        data.categories[kategorije_id].products.map((el,i)=>{
            const id = kategorije_id+'-'+i+'-'+el.name;
            const u_kosarici =produkt_u_kosarici(kosarica,id);
          
            return (
        <figure key={id} className="proizvod" id={id}> 
                        <div className="flip">
                            <button aria-label="Dodaj"
                            onClick={e=>{
                               
                                el.id_product=id;
                              
                                const kos = dodaj_u_kosaricu(el,kosarica);
                              
                               update_kosarica(kos);
                            }}
                            > </button>
                            <img src={"../images/"+el.image} alt="Slika_proizvoda" />
                         
        
                        </div>
                        <figcaption>
                            <span>{el.name}</span>
  
                            <span>{el.cijena +" €"}</span>
                            <span className={
                                (u_kosarici[0]&&u_kosarici[1]>0)?"prikaz-span":""
                            }>{
                                u_kosarici[0]&&u_kosarici[1]>0?u_kosarici[1]:""
                            }</span>
                            </figcaption>
                    </figure>
            )
        
        })


        )
    };
