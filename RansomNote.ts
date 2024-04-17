function canConstruct(ransomNote: string, magazine: string): boolean {
    
    let tempMagazine =  [...magazine];
    let tempRansomNote = [...ransomNote];
   
    
    while(tempRansomNote.length!==0){
       if(tempMagazine.includes(tempRansomNote[0])){
        const indesOfLetter = tempMagazine.indexOf(tempRansomNote[0])
        tempRansomNote.splice(0, 1) 
        tempMagazine.splice(indesOfLetter, 1) 
       }else{return false}

    }
    

    return tempRansomNote.length===0
};