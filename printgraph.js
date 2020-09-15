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
    var listsommet = this.listadj.get(i);
    for(var j of  listsommet)
       conc = conc + j;
  console.log(i + " " + "->" + " " +conc);  
  }
 }
}// fin class Graph
 var test = new Graph(11);
 var tab = ['A','B','C','D','E','F','G','H','I','J','K'];
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
    test.addchemin('G','J');
    test.addchemin('G','H');
    test.addchemin('H','I');
    test.addchemin('H','K');
    test.addchemin('I','J');
    test.addchemin('J','K');
    test.printgraph();



// obtenir les proprietes d'un objet


/*  recup keys d'un object
function nbre_obj(){
 var test = {"a":1, "b":2 ,3:4};
 var recup = Object.keys(test);
 return recup.length;
}
nbre_obj(); */
