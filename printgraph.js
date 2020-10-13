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
  var getkeys = this.listadj.keys();
  for(var i of getkeys){
   var conc = " ";
   var listsommets = this.listadj.get(i);
   for(var j in listsommets)
      conc = conc + listsommets[j];
   console.log(i + " " + "->" + " " + conc);
  }
 }// fin printgraph
}// fin class Graph
var test = new Graph(10);
var tab = ['A','B','C','D','E','F','G','H','I','J'];
for (var i = 0; i < tab.length; i++)
    test.addsommet(tab[i]);
    test.addchemin('A','B');
    test.addchemin('A','C');
    test.addchemin('A','D');
    test.addchemin('A','E');
    test.addchemin('B','E');
    test.addchemin('C','D');
    test.addchemin('C','E');
    test.addchemin('D','G');
    test.addchemin('E','F');
    test.addchemin('E','H');
    test.addchemin('F','G');
    test.addchemin('F','H');
    test.addchemin('G','H');
    test.addchemin('G','I');
    test.addchemin('H','J');
    test.addchemin('I','J');
    test.printgraph();






