var checkString=(str)=>{
   let pattern=/^[\d.\n]*$/

   return pattern.test(str)
}
var checkDuplicate=(item)=>{
      var set=new Set(item)

      return set.size === item.length
}

var Toarray=(item)=>{
              var slice=item.split("\n").map((element)=>{
                    return element.split("")
              })
              return slice       
}


const emptyPuzzle = `2001
0..0
1000
0..0`
const words = ['casa', 'alan', 'ciao', 'anta']

var crosswordSolver=(emptyPuzz, word)=>{
   if (!checkString(emptyPuzzle) || !checkDuplicate(word)){
                return "Error"
   }
let array=Toarray(emptyPuzz)
 


}

console.log(checkString(emptyPuzzle))
console.log(Toarray(emptyPuzzle))
console.log(checkDuplicate(words))
console.log(crosswordSolver(emptyPuzzle,words))