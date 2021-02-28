const tickets = [["uae","usa"],["bra","uae"],["usa","bra"],["usa","jpn"],["jpn","phl"]];

function trip(tickets){

let baslar = []
let sonlar = []
for(let i=0;i<tickets.length;i++){
    baslar.push(tickets[i][0]);
    sonlar.push(tickets[i][1]);
}
let son;
for(let i=0;i<baslar.length;i++){
    if(!baslar.includes(sonlar[i]))
      son = sonlar[i];}
let i= 0;
let yol = [son];
while(yol.length<sonlar.length+1){
  if(tickets[i][1]==yol[0]){
    yol.unshift(tickets[i][0]);
    i=0;
  }
  else
    i+=1;
}
return yol.join();
}

console.log(trip(tickets));