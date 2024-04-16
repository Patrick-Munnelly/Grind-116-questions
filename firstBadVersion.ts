/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let left=0
        let right=n
        let middle=left+(right-left)/2
       
        if (n==1) return 1;
        let begin=1
        let end=n
        while (begin<end){
            let mid=begin+(end-begin)/2
            if(isBadVersion(mid) ) end=mid
            else begin=mid+1
        }
           
        return Math.floor(begin)    };
};