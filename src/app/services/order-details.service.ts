import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }


//foodDetails
foodDetails = [
  {
    id:1,
    foodName:"Sanduíche Grelhado Paneer",
    foodDetails:"Paneer masala frito.",
    foodPrice:200,
    foodImg:"../../../assets/img/wzfq7djolqxgdhghebbq.webp"
  },
  {
    id:2,
    foodName:"Vegetariano Supremo",
    foodDetails:"Cebola| Capsicum Verde | Cogumelo | azeitonas pretas, milho doce, páprica vermelha coberta com queijo",
    foodPrice:369,
    foodImg:"../../../assets/img/sgbobtbxlojbtdnr2m5k.webp"
  },
  {
    id:3,
    foodName:"Hambúrguer Paneer",
    foodDetails:"panner",
    foodPrice:149,
    foodImg:"../../../assets/img/xbeqlsck3p0kei53to7k.webp"
  },
  {
    id:4,
    foodName:"Rolo Veg Masala Em Naan",
    foodDetails:"Uma mistura caseira de purê de batata e vegetais, temperada com especiarias indianas. Um recheio que vai te levar de volta à cozinha da mamãe.",
    foodPrice:140,
    foodImg:"../../../assets/img/l2ng6gtge30sqaafqng7.webp"
  },
  {
    id:5,
    foodName:"Brownie de Indulgência",
    foodDetails:"(Sem ovos) Delicie-se com um brownie de chocolate ricamente decadente feito com amor e coberto com chocolate amargo que proporciona uma experiência de chocolate ultra-rica.",
    foodPrice:105,
    foodImg:"../../../assets/img/iqlmbg1hlyc0dspdyzzv.webp"
  },
  {
    id:6,
    foodName:"Sorvete de Cheesecake Oreo",
    foodDetails:"Sorvete de oreo",
    foodPrice:219,
    foodImg:"../../../assets/img/wtj8esaeslvlscv8glj6.webp"
  }
]

}
