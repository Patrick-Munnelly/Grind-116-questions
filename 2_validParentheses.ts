/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s: string): boolean {

    const closingMap: any = {
        '(': ')',
        '{': '}',
        '[' : ']'
    }

    let listOfBrackets: string[] = []

    for(let ch of s){
            if(closingMap[ch]){
                 listOfBrackets.push(closingMap[ch])   
            }
            else if(listOfBrackets.length>0
                    && listOfBrackets[listOfBrackets.length-1]===ch ){
                        listOfBrackets.pop()
            }
            else{return false}
    }
    return listOfBrackets.length===0
};