function search(nums: number[], target: number): number {
      
    let left: number = 0;
   let right: number = nums.length - 1;
   let center: number;
 
   while (left <= right) {
     center = Math.floor(right - left / 2);
     if (nums[center] == target) {
       return center;
     }
     if (nums[center] < target) {
       left = center + 1;
     } else {
       right = center - 1;
     }
   }
 
   return -1;
 
   
     
 };