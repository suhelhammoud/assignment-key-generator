import './style.css'
import Rand from 'rand-seed';


function mapIntToHex(i: number) {
  return (i.toString(16)).slice(-2);
}

export function generate_count_hex(seed: string) {
  const rnd = new Rand(seed);
  let s = new Set<number>([]);
  while (s.size < 6) {
    s.add(Math.floor(rnd.next() * 16) )
  }
  return Array.from(s).map(mapIntToHex).join('');
}

const seedBox = document.querySelector<HTMLInputElement>('#seed_txt')!
const result = document.querySelector<HTMLSpanElement>('#result')!

seedBox.addEventListener('keyup', () => {
  
  const seed_txt = document.querySelector<HTMLInputElement>('#seed_txt')!.value.trim()
  
  const result_n = generate_count_hex(seed_txt)
  result.innerText = result_n
  setdisplays(result_n);
})


var display1 = document.getElementById('display-1')!;
var display2 = document.getElementById('display-2')!;
var display3 = document.getElementById('display-3')!;
var display4 = document.getElementById('display-4')!;
var display5 = document.getElementById('display-5')!;
var display6 = document.getElementById('display-6')!;



function setdisplays(hNumber:string) {

	var baseClass = 'display-container display-size-12 display-no-';
	
	display1.className = baseClass + hNumber[0];
	display2.className = baseClass + hNumber[1];
	display3.className = baseClass + hNumber[2];
	display4.className = baseClass + hNumber[3];
	display5.className = baseClass + hNumber[4];
	display6.className = baseClass + hNumber[5];
	
}
