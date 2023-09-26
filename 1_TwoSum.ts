/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums:number[], target:number): number[] {
    
    // create array of results
    let results:number[]= []
    
        for(let i:number=0;i<nums.length;i++){
             for(let j:number=i+1;j<nums.length;j++){
            nums[i]+nums[j]===target?results.push(i,j):null;
        }
        }
        //outer loop first number
        // inner loop second number
        // add two numnbers to cjeck equals target number
        // if it does add to array of results
    
        return results;
    };