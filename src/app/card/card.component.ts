import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  cards =
  [
    {
      site:"http://www.capital.ro/uploads/2016-06/pestera-coliboaia4.jpg",
      title:"Picturile rupestre din peştera Coliboaia din Bihor",
      description:"În Peştera Coliboaia din Bihor există desene care s-au dovedit a fi cele mai vechi din Europa Centrală, datând de acum aproape 35.000 de ani. Desenele reprezentă animale din acele vremuri, bizoni, rinoceri, capete de urs, şi s-au păstrat aproape intacte datorită condiţiilor bune de umiditate din zona peşterii unde au fost găsite.",
    },
    {
      site:"http://www.capital.ro/uploads/2016-06/pestera-oase-ww.jpg",
      title:"Peştera cu Oase din Valea Minișului",
      description:"În apropiere de Anina, judeţul Caraș Severin, se află o peşteră cunoscută în întreaga lume de aproape 10 ani. Peştera cu Oase este locul unde au fost găsite cele mai vechi rămăşiţe din Europa ale omului modern. Fosilele, provenind de la trei indivizi, au fost datate la o vechime de 35.000 de ani.",
    },
    {
      site:"http://www.capital.ro/uploads/2016-06/cel-mai-vechi-papirus-intreg-din-europa.jpg",
      title:"Cel mai vechi papirus întreg din Europa",
      description:"Singurul papirus din România, descoperit în urmă cu peste 50 de ani, este scris în greaca veche şi este unic, fiind singurul papirus întreg din Europa care datează din secolul IV î.H.. Acesta a fost descoperit la Mangalia în 1959 şi a fost trimis, în acelaşi an, în Rusia, pentru restaurare şi conservare. Ulterior, însă, nu s-a mai ştiut nimic despre el. În vara  anului 2011, acesta a fost  predat reprezentanţilor Muzeului de Arheologie „Callatis”.",
    },
    {
      site:"http://www.capital.ro/uploads/2016-06/bozoriu.jpg",
      title:"Cerul din comuna Bozoriu, judeţul Buzău",
      description:"Comuna Bozioru din judeţul Buzău este recunoscută pentru „cerul straniu”. Demersurile ştiinţifice au arătat că acest cer este de 4 ori mai clar şi senin decât unul normal. Cercetătorii extrasenzoriali îl considera fără dubiu, una dintre porţile energetice ale Universului, în care spaţiul şi timpul se acordă cu axa infinitului.",
    },
    {
      site:"http://www.capital.ro/uploads/2016-06/padurea-hoia.jpg",
      title:"Pădurea Hoia-Baciu",
      description:"Aflată la 5 kilometri de oraşul Cluj, a cunoscut celebritatea în 1968, când Emil Barnea a publicat o fotografie a unui posibil OZN ajuns în zonă. Aici există o zonă magnetică de 300 de metri, unde muşchii de pe copaci nu arată nordul, aşa cum ar fi normal, iar ciupercile, obişnuite pentru această pădure, nu cresc niciodată.",
    },
    {
      site:"http://www.capital.ro/uploads/2016-06/rapa-rosie-3.jpg",
      title:"Canionul României",
      description: "Râpa Roţia este la aproximativ 3 kilometri de oraşul Sebeş, din judeţul Alba. Se întinde pe o suprafaţă de circa 25 de hectare. Râpa Roșie este o rezervaţie geologică ai cărei pereţi ating înălţimi de până la 100 de metri. Turiştii sunt atraşi în primul rând de formele deosebite săpate de ape colină.",
    },

  ]

}
