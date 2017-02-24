
function DECtoANY(input, source) {

    var result = "";
    var base = +source;
    do {
        result += input%base;
        input = Math.floor(input/base);
    }while (input>0);

    return result.split("").reverse().join("");
}
module.exports = function getBase(n) {
    if(n.match(new RegExp("0+"))!==null&&n.match(new RegExp("0+"))[0].length-1) return "9".repeat(n.length - 1);
   var i=2;
   while (!DECtoANY(n,i).split("").every(x=>x=="1"))
   {
       i++;
   }
   return i;
}