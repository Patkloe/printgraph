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
      var conc = "";
      var listsommet = this.listadj.get(i);
      for(var j of listsommet)
         conc = conc + j;
   console.log(i + " " + "->" + " " + conc);
  }
 }// fin printgraph
}//fin class graph
var tab=['A','B','C','D','E','F','G','H','I','J','K'];
var test = new Graph(11);
for(var i = 0; i < tab.length; i++)
    test.addsommet(tab[i]);
    test.addchemin('A','B');
    test.addchemin('A','C');
    test.addchemin('A','D');
    test.addchemin('B','C');
    test.addchemin('B','E');
    test.addchemin('C','F');
    test.addchemin('C','G');
    test.addchemin('D','G');
    test.addchemin('D','J');
    test.addchemin('E','F');
    test.addchemin('F','G');
    test.addchemin('F','H');
    test.addchemin('G','H');
    test.addchemin('G','J');
    test.addchemin('H','K');
    test.addchemin('H','I');
    test.addchemin('I','J');
    test.addchemin('J','K');
   // test.printgraph();
   console.log(" Notre graphe :");
   test.printgraph();
