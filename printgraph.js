class Graph{
 constructor(nbresommets){
  this.nbresommets = nbresommets;
  this.listadj = new Map();
 }
 addsommet(v){
  this.listadj.set(v,[]);
 }
 addchemin(v,w){
  this.listadj.get(v).push(w);
  this.listadj.get(w).push(v);
 }
 printgraph(){
  var getkey = this.listadj.keys();
  for(var i of getkey){
    var conc = " ";
    var sommetadj = " ";
    var listsommet = this.listadj.get(i);
    for(var j in listsommet){
       conc = conc + j;
       sommetadj = sommetadj + listsommet[j];
     }
    console.log(i + "" + "->" + "" + conc + " " + " sommet correspondant : " + " " + sommetadj);
  }
 } // fin graph
} // fin class Graph 
var test = new Graph(11);
var tab = ['A','B','C','D','E','F','G','H','I','J','K'];
for(var i = 0; i < tab.length; i++)
   test.addsommet(tab[i]);
   test.addchemin('A','B');
   test.addchemin('A','E');
   test.addchemin('A','C');
   test.addchemin('A','D');
   test.addchemin('B','E');
   test.addchemin('C','I');
   test.addchemin('C','F');
   test.addchemin('C','H');
   test.addchemin('D','H');
   test.addchemin('E','I');
   test.addchemin('E','F');
   test.addchemin('A','B');
   test.addchemin('F','H');
   test.addchemin('F','J');
   test.addchemin('I','G');
   test.addchemin('I','K');
   test.addchemin('J','G');
   test.addchemin('J','K');
   test.addchemin('G','K');
   console.log(" Notre graphe :");
   test.printgraph();
