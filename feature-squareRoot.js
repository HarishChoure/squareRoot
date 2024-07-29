//********************************Leetcode 69 *************************************

link = https://leetcode.com/problems/sqrtx/description/
/**
 * @param {number} 
 * @return {number}
 */
var mySqrt = function(x) {
    //   return naiveApproachSqrt(x);
       return betterApproachSqrt(x);
   };

// using binary search
   var betterApproachSqrt = function(n){
        let ans  =0;
        let low = 0;
        let high = n;
       while(low <= high){
           const mid = Math.floor((high + low) / 2);
           let value = mid*mid;
           if(value <= n){
               ans = mid
           }
           if(value > n){
               high = mid-1;
           }
           else{
               low = mid +1;
           }
       }
       return ans;
   }

// Using linear search
   var naiveApproachSqrt = function(n){
       let ans = 0;
   
       for(let i = 0; i<= n ; i++){
           const value = i*i;
           if(value <= n){
               ans = i;
           }
           else {
               break;
           }
       }
       return ans;
   }
   
   let solution = mySqrt(5)
   console.log(solution)
