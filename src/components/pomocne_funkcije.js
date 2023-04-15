export const obrisi_iz_kosarice = (index,kosarica)=>{
    return kosarica.filter((el,i)=>{
       return i!==index;
   });
}
export const izracunaj_narudzbu=(kosarica=[])=>{
    return kosarica.reduce((ak,val)=>{
        return ak+(val.cijena*val.kolicina);
    },0)
}

export const produkt_u_kosarici2 = (kosarica=[],id_product)=>{
    let rezultat=[false];
    for(let i=0;i<kosarica.length;i++){
        if(id_product===kosarica[i].id_product){
            rezultat=[true,i];
            break;
        }
    }
    return rezultat;
}

export const dodaj_u_kosaricu = (ob,kosarica)=>{
    
    const u_kosarici =produkt_u_kosarici2(kosarica,ob.id_product);
    if(u_kosarici[0]){
       const nova_kosarica = [...kosarica];
       nova_kosarica[u_kosarici[1]].kolicina=nova_kosarica[u_kosarici[1]].kolicina +1;
      // return [...kosarica,{...kosarica[u_kosarici[1]],kolicina:kosarica[u_kosarici[1]].kolicina+1}];
      return nova_kosarica;
     
    }else{
   
       return [...kosarica,{name:ob.name,cijena:ob.cijena,id_product:ob.id_product,kolicina:1}];
    }
   
         
   } 

   export const produkt_u_kosarici = (kosarica=[],id_product)=>{
    let rezultat=[false];
    for(let i=0;i<kosarica.length;i++){
        if(id_product===kosarica[i].id_product){
            rezultat=[true,kosarica[i].kolicina];
            break;
        }
    }
    return rezultat;
}

export const izracunaj_kolicinu = (kosarica=[])=>{
    return kosarica.reduce((ak,val)=>{
        return ak+val.kolicina;
    
    },0)}