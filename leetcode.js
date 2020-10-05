//Leetcode 1523


/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
let countOdds = function(low, high) {

    let result = 0;

    // for (i=low;i<=high;i++)
    // {
    //     if (i%2!=0) result++;
    // }
    if (low%2!=0 && high%2!=0) return (high-low)/2+1;
    else if (low%2!=0 && high%2==0) return Math.round((high-low)/2);
    else if (low%2==0 && high%2!=0) return Math.round((high-low)/2);
    else return (high-low)/2;
    //3+6
    //6+9

};

let result = countOdds(6,12);
console.log("Leetcode 1523 result: " + result);


/**
 * @param {string} s
 * @return {number}
 */
let numSplits = function(s) {

    let myMap = mapOptions(s);
    let count = 0;
    for (i=0;i<s.length-1;i++) //for (i=0;i<s.length-1;i++)
    {
        let left = s.substring(0,i+1);
        let right = s.substring(i+1,s.length);
        if (myMap.get(left)===myMap.get(right)) count++;

    }
    return count;
};

/**
 *
 * @param s recieves String
 * @returns {Map<any, any>} of all possible string permutations
 */
const mapOptions = (s) => {
    let myMap = new Map();

    for (i=0;i<s.length-1;i++)
    {
        let left = s.substring(0,i+1);
        let right = s.substring(i+1,s.length);
        if (!myMap.has(left))
        {
            let tempStringLength = removeDupes(left);
            myMap.set(left,tempStringLength);
        }
        if (!myMap.has(right))
        {
            let tempStringLength = removeDupes(right);
            myMap.set(right,tempStringLength);
        }
        //if (remDups(left,myMap)===remDups(right,myMap)) count++;

    }


    return myMap;
}

//Generate a map
//take each string , check if the map contains the string,if contains skip,else place inside the map with the number of letters

const showUniqChars = (text) => {
    let uniqChars ="";

    for (const char of text){
        if (!uniqChars.includes(char)) uniqChars+=char;
    }
    return uniqChars.length;
}

const removeDupes = (text) => {
    let newstr = text.split("").sort().join("").replace(/(.)(?=.*\1)/g, "");
    return newstr.length;
}

/*
function remDups(str){
    if(!str.length)
        return '';
    var s = str.split('');
    var obj = {};
    for(var i = 0; i < s.length; i++){
        obj[s[i]] = (obj[s[i]] || 0) + 1;
    }
    return Object.keys(obj).join('').length;
}
*/
let s = "aaaaa";
 result = numSplits(s);
 console.log("Leetcode 1525 result: "+ result);



 /**
 * @param {string} s
 * @return {string}
 */
var makeGood = function(s) {
    
    //Iterate the string , check two adjacent letters , if they are the same(upper or lower included,remove them.start over the string again until reach end of string)

    for(i=0;i<s.length-1;)
    {
       let tempCharLower = s.charAt(i+1).toLowerCase();
       let  tempCharUpper = s.charAt(i+1).toUpperCase();
        if(s.charAt(i)===tempCharLower && s.charAt(i+1)===tempCharUpper || s.charAt(i)===tempCharUpper && s.charAt(i+1)===tempCharLower ){
            s = s.slice(0,i)+s.slice(i+2,s.length);
            i=-1;
        }
        if (s===null) return s;
        i++;
    }
        return s;
};


const string1544 = "leEeetcode";
let result1544 = makeGood(string1544);
console.log(result1544);



/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
    //Take the 4 end dots and connect them, then figure out what to do with the middle

    let sum = 0;



    if(mat.length%2!=0){
        for(i=0,j=0,k=mat.length-1;i<mat.length;){
            console.log(mat[i][j],mat[i][k])
            sum+= mat[i][j]+ mat[i][k];
            i++;
            k--;
            j++;

        }
        sum-=mat[Math.floor(mat.length/2)][Math.floor(mat.length/2)]
    }
    else
    {
        for(i=0,j=0,k=mat.length-1;i<mat.length;){
            sum+= mat[i][j]+ mat[i][k];
            i++;
            k--;
            j++;

        }
    }
    return sum;
};


const result1572 =diagonalSum([[7,3,1,9],[3,4,6,9],[6,9,6,6],[9,5,8,5]]);
const result1572b =diagonalSum([[1,2,3],[4,5,6],[7,8,9]]);
const result1572c =diagonalSum([[4,6,7],[2,9,4],[5,5,5]]);
console.log(result1572);
console.log(result1572b);
console.log(result1572c);




/**
 * @param {string} text
 * @return {string}
 */
var reorderSpaces = function(text) {
// Get number of spaces in the text
    const spaces = text.split(" ").length-1;

    // Split sentence to array of words
    let words = [];
    let buf = "";
    for(let i = 0; i < text.length; i++) {
        if(text[i]!==" ")
            buf += text[i];
        if(text[i] === " " && buf!==" " && buf.length > 0) {
            words.push(buf.trim());
            buf = "";
        }
    }

    // the last possible word in the sentence
    if(buf.length > 0) {
        words.push(buf);
    }


    let moduloSpacesRemainder=spaces; // The value of remained spaces
    let divideSpace=0; // The number of spaces between words, if only one word its 0
    // Check if words is greater than 1, requiring us to insert spaces between words
    if(words.length>1){
        moduloSpacesRemainder = spaces % (words.length-1);
        divideSpace = Math.floor(spaces/ (words.length-1));
    }


    let spaceWord = "";
    let endSentence ="";
    for(let j = 0 ; j < divideSpace ; j++) // Build space string
    {
        spaceWord+=" ";
    }

    for( j = 0 ; j < moduloSpacesRemainder ; j++) // Build end sentence string
    {
        endSentence+=" ";
    }

    let result ="";
    for( j = 0 ;j< words.length ; j++){  // attach string and spaces
        if(j!==words.length-1){
            result+= words[j]+ spaceWord;
        }
        else{
            result+=words[j];
        }

    }

    result+=endSentence; // attach end of sentence spaces

    return result;

};


const text1592 = " practice   makes   perfect";
const text1592b = "  hello";
const result1592 = reorderSpaces(text1592);
const result1592b = reorderSpaces(text1592b);
console.log(result1592b)



// ======= Leetcode 1588 ========

/*

Given an array of positive integers arr, calculate the sum of all possible odd-length subarrays.

A subarray is a contiguous subsequence of the array.

Return the sum of all odd-length subarrays of arr.
 */


/*


Success
Details
Runtime: 120 ms, faster than 11.61% of JavaScript online submissions for Sum of All Odd Length Subarrays.
Memory Usage: 36.3 MB, less than 95.54% of JavaScript online submissions for Sum of All Odd Length Subarrays.
 */


/**
 * @param {number[]} arr
 * @return {number}
 */
const sumOddLengthSubarrays = function(arr) {

    let result = 0;


    //Basically the only variable i'm concerned about is the size
    for(j=0,size=1,startIndex=0,endIndex=size;size<=arr.length;)
    {

        let temp = j;
        // First iteration completes successfully
        for (;startIndex<endIndex;startIndex++)
        {
            result+=arr[j];
            j++;
        }
        if(j==arr.length) {
            j=0;
            size+=2;
        }
        else
        {
            j=temp+1;
        }
        startIndex=0;
        endIndex=size;
    }
    return result;
};


const arr1588 = [1,4,2,5,3];
const arr1588b = [10,11,12];
const arr1588c = [1,2];

console.log(sumOddLengthSubarrays(arr1588));
console.log(sumOddLengthSubarrays(arr1588b));

console.log(sumOddLengthSubarrays(arr1588c));
// =====================================================================



// ========== 1582 ==========


/*
Success
Details
Runtime: 76 ms, faster than 93.97% of JavaScript online submissions for Special Positions in a Binary Matrix.
Memory Usage: 38.8 MB, less than 75.86% of JavaScript online submissions for Special Positions in a Binary Matrix.
Next challenges:


 */

/**
 * @param {number[][]} mat
 * @return {number}
 */
var numSpecial = function(mat) {

    let result = 0;

    // From each position with 1, we need to go to max of each direction (left,right,up,down) and check if it has only zeros
    for(i=0;i<mat.length;i++)
    {
        for(j=0;j<mat[i].length;j++)
        {
            let flag =false;
            if(mat[i][j]==1)
            {
                if(!flag) for(k=j+1;k<mat[i].length;k++) if(mat[i][k]===1) flag = true; // Row forward
                if(!flag)  for(k=j-1;k>=0;k--) if(mat[i][k]===1) flag = true; // Row Backward
                if(!flag) for(k=i+1;k<mat.length;k++) if(mat[k][j]===1) flag= true; // Column forward
                if(!flag) for(k=i-1;k>=0;k--) if(mat[k][j]===1) flag= true; // Column backward
                if(!flag) result++;
                else flag = false;
            }
        }
    }
    return result;
};

const mat1582d = [[0,1,0],[0,0,0],[1,0,0],[1,0,0]];
const mat1582 = [[1,0,0],[0,0,1],[1,0,0]];
const mat1582b = [[0,0,0,1],[1,0,0,0],[0,1,1,0],[0,0,0,0]];
const mat1582c = [[1,0,0],[0,1,0],[0,0,1]];


console.log("Special Positions in a Binary Matrix [0,1,0],[0,0,0],[1,0,0],[1,0,0] --> "+ numSpecial(mat1582d));
console.log("Special Positions in a Binary Matrix [1,0,0],[0,0,1],[1,0,0] --> "+ numSpecial(mat1582));
console.log("Special Positions in a Binary Matrix [0,0,0,1],[1,0,0,0],[0,1,1,0],[0,0,0,0] --> "+numSpecial(mat1582b));
console.log("Special Positions in a Binary Matrix [1,0,0],[0,1,0],[0,0,1] --> "+ numSpecial(mat1582c));

// =====================================================================



// ========== 1399 ==========




/**
 * @param {number} n
 * @return {number}
 */
var countLargestGroup =   function(n) {

    // If a number is greater than 9 , then it can have size more than 1
    // If i use modulo

    //Works but not in all cases :\ (46 fails)
    // let result;
    // if(n<10) return n;
    // else{
    //     result = n%10+1;
    // }
    // return result;

    let result =0;
    let maxLength = 1;
    if(n<10)return n;
    let length = maxLength;
    let numsMap =new Map();

    for(i=1;i<10;i++)
    {
        numsMap.set(i,i);
    }
    for(i=10;i<=n;i++)
    {
        let arr= [];
        let temp = i;
        while(temp>=1)
        {
            arr.push(Math.floor(temp%10));
            temp = temp /10;
        }
        let sum = 0;
        for(j=0;j<arr.length;j++)
        {
            sum+=arr[j];
        }
        if(sum<10)
        {
            // numsMap.set(sum,numsMap.get(sum).push(i));
        }

    }

    console.log(numsMap)


};

console.log("countLargestGroup 46 :"+ countLargestGroup(46))
console.log("countLargestGroup 13 :"+ countLargestGroup(13))
console.log("countLargestGroup 2 :"+ countLargestGroup(2))
console.log("countLargestGroup 15 :"+ countLargestGroup(15))
console.log("countLargestGroup 24 :"+ countLargestGroup(24))





// ========== 1475 ==========




/*
Given the array prices where prices[i] is the price of the ith item in a shop. There is a special discount for items in the shop, if you buy the ith item, then you will receive a discount equivalent to prices[j] where j is the minimum index such that j > i and prices[j] <= prices[i], otherwise, you will not receive any discount at all.

Return an array where the ith element is the final price you will pay for the ith item of the shop considering the special discount.



Example 1:

Input: prices = [8,4,6,2,3]
Output: [4,2,4,2,3]
Explanation:
For item 0 with price[0]=8 you will receive a discount equivalent to prices[1]=4, therefore, the final price you will pay is 8 - 4 = 4.
For item 1 with price[1]=4 you will receive a discount equivalent to prices[3]=2, therefore, the final price you will pay is 4 - 2 = 2.
For item 2 with price[2]=6 you will receive a discount equivalent to prices[3]=2, therefore, the final price you will pay is 6 - 2 = 4.
For items 3 and 4 you will not receive any discount at all.
Example 2:

Input: prices = [1,2,3,4,5]
Output: [1,2,3,4,5]
Explanation: In this case, for all items, you will not receive any discount at all.
Example 3:

Input: prices = [10,1,1,6]
Output: [9,0,1,6]


 */

/*

Success
Details
Runtime: 92 ms, faster than 34.62% of JavaScript online submissions for Final Prices With a Special Discount in a Shop.
Memory Usage: 40.1 MB, less than 13.21% of JavaScript online submissions for Final Prices With a Special Discount in a Shop.
 */


/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function(prices) {
    
    for(i=0,j=1;i<prices.length&&j<prices.length;)
    {
        if(prices[i]>=prices[j])
        {
            // result.push(prices[i]-prices[j]);
            prices[i] = prices[i] - prices[j];
            i++;
            j=i+1;
        }
        else{
            j++;
            if (j==prices.length)
            {
                i++;
                j=i+1;
            }
        }
    }
    return prices;
};

const arr1472a = [8,4,6,2,3];
const arr1472b = [1,2,3,4,5];
const arr1472c = [10,1,1,6];
const arr1472d = [8,7,4,2,8,1,7,7,10,1];
console.log("finalPrices [8,4,6,2,3] " + finalPrices(arr1472a));
console.log("finalPrices [1,2,3,4,5] " + finalPrices(arr1472b));
console.log("finalPrices [10,1,1,6] " + finalPrices(arr1472c));
console.log("finalPrices [8,7,4,2,8,1,7,7,10,1] " + finalPrices(arr1472d));





// ========== 1598 ==========


/*


The Leetcode file system keeps a log each time some user performs a change folder operation.

The operations are described below:

"../" : Move to the parent folder of the current folder. (If you are already in the main folder, remain in the same folder).
"./" : Remain in the same folder.
"x/" : Move to the child folder named x (This folder is guaranteed to always exist).
You are given a list of strings logs where logs[i] is the operation performed by the user at the ith step.

The file system starts in the main folder, then the operations in logs are performed.

Return the minimum number of operations needed to go back to the main folder after the change folder operations.


Input: logs = ["d1/","d2/","../","d21/","./"]
Output: 2
Explanation: Use this change folder operation "../" 2 times and go back to the main folder.

 */

/*
Success
Details
Runtime: 84 ms, faster than 100.00% of JavaScript online submissions for Crawler Log Folder.
Memory Usage: 39 MB, less than 100.00% of JavaScript online submissions for Crawler Log Folder.
Next challenges:

 */


/**
 * @param {string[]} logs
 * @return {number}
 */
var minOperations = function(logs) {



    // logs is ana array of actions the user makes , we need to store each folder entrance in a variable and return it
    let counter = 0;
    const regex = /[a-z]+[0-9]/;
    for(i=0;i<logs.length;i++){

        if(logs[i].startsWith("../")){
            if(counter>0){
                counter--;
            }
        }
        else if(regex.test(logs[i])&& logs[i].endsWith("/")){
            counter++;
        }

    }

    return counter;
};



let arr1598a = ["d1/","d2/","../","d21/","./"];
let arr1598b = ["d1/","d2/","./","d3/","../","d31/"];
let arr1598c = ["d1/","../","../","../"];
console.log("minOperations [\"d1/\",\"d2/\",\"../\",\"d21/\",\"./\"] " + minOperations(arr1598a));
console.log("minOperations [\"d1/\",\"d2/\",\"./\",\"d3/\",\"../\",\"d31/\"] " + minOperations(arr1598b));
console.log("minOperations [\"d1/\",\"../\",\"../\",\"../\"] " + minOperations(arr1598c));


// ========== 1576 ==========


/*
Success
Details
Runtime: 88 ms, faster than 50.42% of JavaScript online submissions for Replace All ?'s to Avoid Consecutive Repeating Characters.
Memory Usage: 39.9 MB, less than 5.28% of JavaScript online submissions for Replace All ?'s to Avoid Consecutive Repeating Characters.

 */


/*

Given a string s containing only lower case English letters and the '?' character,
 convert all the '?' characters into lower case letters such that the final string does not contain any
  consecutive repeating characters. You cannot modify the non '?' characters.

It is guaranteed that there are no consecutive repeating characters in the given string except for '?'.

Return the final string after all the conversions (possibly zero) have been made. If there is more than one solution,
 return any of them. It can be shown that an answer is always possible with the given constraints.



Example 1:

Input: s = "?zs"
Output: "azs"
Explanation: There are 25 solutions for this problem. From "azs" to "yzs", all are valid. Only "z"
 is an invalid modification as the string will consist of consecutive repeating characters in "zzs".
Example 2:

Input: s = "ubv?w"
Output: "ubvaw"
Explanation: There are 24 solutions for this problem. Only "v" and "w" are invalid modifications as the
 strings will consist of consecutive repeating characters in "ubvvw" and "ubvww".

 */


/**
 * @param {string} s
 * @return {string}
 */
var modifyString = function(s) {

    let letters = "abcdefghijklmnopqrstuvwxyz";

    for(i=0, j=0;i<s.length;)
    {
        if(s[i] === '?'){

            // case when only one letter
            if(s.length===1){
                s=s.replace(s.charAt(i),letters[j]);
                i++;
                j=0;
            }
            // case of end of string
            else if(i===s.length-1){
                if(s[i-1]===letters[j]){
                    j++;
                    if(j===letters.length-1) j=0;
                }
                else
                {
                    s=s.replace(s.charAt(i),letters[j]);
                    i++;
                    j=0;
                }
            }
            else if(letters[j]===s[i-1] || letters[j]===s[i+1]){
                j++;
                if(j===letters.length-1) j=0;
            }
            else
            {
                s=s.replace(s.charAt(i),letters[j]);
                i++;
            }
        }
        else i++;
    }
    return s;
};


let solution1576a = "?zs"
let solution1576b = "ubv?w"
let solution1576c = "j?qg??b"
let solution1576d = "??????bfi????p?k?"
let solution1576e = "??yw?ipkj?"
let solution1576f = "a?b"

console.log("Solution 1576: " +solution1576a+" --> " +modifyString(solution1576a));
console.log("Solution 1576: " +solution1576b+" --> " +modifyString(solution1576b));
console.log("Solution 1576: " +solution1576c+" --> " +modifyString(solution1576c));
console.log("Solution 1576: " +solution1576d+" --> " +modifyString(solution1576d));
console.log("Solution 1576: " +solution1576e+" --> " +modifyString(solution1576e));
console.log("Solution 1576: " +solution1576f+" --> " +modifyString(solution1576f));

console.log("--------------------------------------------------------------------------------------------\n")
// ============== Solution 1560 =================

/*

Given an integer n and an integer array rounds. We have a circular track which consists of n sectors labeled from 1 to n. A marathon will be held on this track, the marathon consists of m rounds. The ith round starts at sector rounds[i - 1] and ends at sector rounds[i]. For example, round 1 starts at sector rounds[0] and ends at sector rounds[1]

Return an array of the most visited sectors sorted in ascending order.

Notice that you circulate the track in ascending order of sector numbers in the counter-clockwise direction (See the first example).
 */




/**
 * @param {number} n
 * @param {number[]} rounds
 * @return {number[]}
 */
var mostVisited = function(n, rounds) {

    let result = [];

    let max = 1;
    let map = new Map();

    for(i=0;i<rounds.length;){

        if (rounds[i]<rounds[i+1]){
            let j = rounds[i];
            while(j<rounds[i+1]){
                if (map.has(j)){
                    map.set(j,(map.get(j))+1);
                }
                else
                {
                    map.set(j,1);
                }
                j++;
            }
        }
        else
        {
            let j =  rounds[i];
            while(j<=n){
                if (map.has(j)){
                    map.set(j,(map.get(j))+1);
                }
                else
                {
                    map.set(j,1);
                }
                j++;
                if (i===rounds.length-1){
                    j=n+1;
                }
            }
        }

    }
    console.log(map);

        map.forEach(((value, key) => {
            if (value>max){
                max =value;
            }
        }));

        map.forEach((value, key) => {
            if (value===max){
                result.push(key);
            }
        })

    return result;
};



let solution1560a = [1,3,1,2];
let solution1560b = [2,1,2,1,2,1,2,1,2];
let solution1560c = [1,3,5,7];
let solution1560d = [3,2,1,2,1,3,2,1,2,1,3,2,3,1];


// console.log("Solution 1560: " +solution1560a+" --> " +mostVisited(4,solution1560a));
// console.log("Solution 1560: " +solution1560b+" --> " +mostVisited(2,solution1560b));
// console.log("Solution 1560: " +solution1560c+" --> " +mostVisited(7,solution1560c));
// console.log("Solution 1560: " +solution1560d+" --> " +mostVisited(3,solution1560d));




console.log("--------------------------------------------------------------------------------------------\n")
// ============== Solution 1464 =================


/*
Success
Details
Runtime: 76 ms, faster than 81.58% of JavaScript online submissions for Maximum Product of Two Elements in an Array.
Memory Usage: 38.9 MB, less than 10.94% of JavaScript online submissions for Maximum Product of Two Elements in an Array.
Next challenges:

 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {

    let nums1=nums[0];
    let nums1Index=0;
    let nums2=nums[1];
    for (i=2;i<nums.length;i++){
        if (nums[i]>nums1){
            nums1 = nums[i];
            nums1Index=i;
        }
    }
    for (i=2;i<nums.length;i++){
        if (nums[i]>nums2 && i !== nums1Index){
            nums2=nums[i];
        }
    }
    return (nums1-1)*(nums2-1);
};

let nums1464a = [3,4,5,2];
let nums1464b = [1,5,4,5];
let nums1464c = [3,7];
let nums1464d = [10,2,5,2];


console.log("Solution 1464: " +nums1464a+" --> " +maxProduct(nums1464a));
console.log("Solution 1464: " +nums1464b+" --> " +maxProduct(nums1464b));
console.log("Solution 1464: " +nums1464c+" --> " +maxProduct(nums1464c));
console.log("Solution 1464: " +nums1464d+" --> " +maxProduct(nums1464d));




console.log("--------------------------------------------------------------------------------------------\n")
// ============== Solution 1460 =================


/*

Success
Details
Runtime: 88 ms, faster than 50.96% of JavaScript online submissions for Make Two Arrays Equal by Reversing Sub-arrays.
Memory Usage: 43.6 MB, less than 5.34% of JavaScript online submissions for Make Two Arrays Equal by Reversing Sub-arrays.
Next challenges:

 */

/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
var canBeEqual = function(target, arr) {

    let mapTarget = new Map();
    let mapArr = new Map();

    for (i=0;i<target.length;i++){
        if (mapTarget.has(target[i])) mapTarget.set(target[i],mapTarget.get(target[i])+1);
        else mapTarget.set(target[i],1);
    }

    for (i=0;i<arr.length;i++){
        if (mapArr.has(arr[i])) mapArr.set(arr[i],mapArr.get(arr[i])+1);
        else mapArr.set(arr[i],1);
    }
    if (compareMaps(mapArr,mapTarget)) return true;
    return false;
};

function compareMaps(map1, map2) {
    let testVal;
    if (map1.size !== map2.size) return false;

    for (let [key, val] of map1) {
        testVal = map2.get(key);
        // in cases of an undefined value, make sure the key
        // actually exists on the object so there are no false positives
        if (JSON.stringify(testVal) !== JSON.stringify(val) || (testVal === undefined && !map2.has(key))) {
            return false;
        }
    }
    return true;
}


solution1460Targeta = [1,2,3,4];
solution1460Arra = [2,4,1,3];
solution1460Targetb = [7];
solution1460Arrb = [7];
solution1460Targetc = [1,12];
solution1460Arrc = [12,1];
solution1460Targetd = [3,7,9];
solution1460Arrd = [3,7,11];

console.log("Solution 1460: " +solution1460Targeta+", " +solution1460Arra +  " --> " +canBeEqual(solution1460Targeta,solution1460Arra));
console.log("Solution 1460: " +solution1460Targetb+", " +solution1460Arrb +  " --> " +canBeEqual(solution1460Targetb,solution1460Arrb));
console.log("Solution 1460: " +solution1460Targetc+", " +solution1460Arrc +  " --> " +canBeEqual(solution1460Targetc,solution1460Arrc));
console.log("Solution 1460: " +solution1460Targetd+", " +solution1460Arrd +  " --> " +canBeEqual(solution1460Targetd,solution1460Arrd));



console.log("--------------------------------------------------------------------------------------------\n")
// ============== Solution 1413 =================
/*

Success
Details
Runtime: 80 ms, faster than 38.66% of JavaScript online submissions for Minimum Value to Get Positive Step by Step Sum.
Memory Usage: 38.9 MB, less than 8.24% of JavaScript online submissions for Minimum Value to Get Positive Step by Step Sum.
Next challenges:
 */


/**
 * @param {number[]} nums
 * @return {number}
 */
var minStartValue = function(nums) {

    let result=1;
    for (i=0,j=result;i<nums.length;){
        if (result+nums[i]>0){
                result+=nums[i];
                i++;
        }
        else
        {
            j++;
            result=j;
            i=0;
        }
    }
return j;
};

let solution1413a = [-3,2,-3,4,2];
let solution1413b = [1,2];
let solution1413c = [1,-2,-3];

console.log("Solution 1413: " +solution1413a+" --> " +minStartValue(solution1413a));
console.log("Solution 1413: " +solution1413b+" --> " +minStartValue(solution1413b));
console.log("Solution 1413: " +solution1413c+" --> " +minStartValue(solution1413c));



console.log("--------------------------------------------------------------------------------------------\n")
// ============== Solution 1603 =================

/*

Success
Details
Runtime: 156 ms, faster than 100.00% of JavaScript online submissions for Design Parking System.
Memory Usage: 46.2 MB, less than 100.00% of JavaScript online submissions for Design Parking System.
Next challenges:

 */

/**
 * @param {number} big
 * @param {number} medium
 * @param {number} small
 */
var ParkingSystem = function(big, medium, small) {

    this.big = big;
    this.medium = medium;
    this.small = small;
};

/**
 * @param {number} carType
 * @return {boolean}
 */
ParkingSystem.prototype.addCar = function(carType) {

    switch (carType) {
        case 3:
            if (this.small>0){
                this.small--;
                return true;
            }
            else
            {
                return false;
            }
            break;
        case 2:
            if (this.medium>0){
                this.medium--;
                return true;
            }
        {
            return false;
        }
            break;
        case 1:
            if (this.big>0){
                this.big--;
                return true;
            }
        {
            return false;
        }
            break;

        default:
            return false;
    }
};

/**
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */


console.log("--------------------------------------------------------------------------------------------\n")
// ============== Solution 1455 =================
/*

38 / 38 test cases passed.
Status: Accepted
Runtime: 76 ms
Memory Usage: 38.5 MB

 */

/*
Given a sentence that consists of some words separated by a single space, and a searchWord.

You have to check if searchWord is a prefix of any word in sentence.

Return the index of the word in sentence where searchWord is a prefix of this word (1-indexed).

If searchWord is a prefix of more than one word, return the index of the first word (minimum index). If there is no such word return -1.

A prefix of a string S is any leading contiguous substring of S.



Example 1:

Input: sentence = "i love eating burger", searchWord = "burg"
Output: 4
Explanation: "burg" is prefix of "burger" which is the 4th word in the sentence.
Example 2:

Input: sentence = "this problem is an easy problem", searchWord = "pro"
Output: 2
Explanation: "pro" is prefix of "problem" which is the 2nd and the 6th word in the sentence, but we return 2 as it's the minimal index.
 */


/**
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */
var isPrefixOfWord = function(sentence, searchWord) {

    let sentenceArr = sentence.split(" ");
    for (i=0;i<sentenceArr.length;i++){

        if (sentenceArr[i].startsWith(searchWord)){
            return i+1;
        }
    }
    return -1;
};


let solution1455a = "i love eating burger";
let solution1455aPrefix = "burg"
let solution1455b = "this problem is an easy problem";
let solution1455bPrefix = "pro"
let solution1455c = "i am tired";
let solution1455cPrefix = "you"

console.log("Solution 1455: " +solution1455a+", " +solution1455aPrefix +  " --> " +isPrefixOfWord(solution1455a,solution1455aPrefix));
console.log("Solution 1455: " +solution1455b+", " +solution1455bPrefix +  " --> " +isPrefixOfWord(solution1455b,solution1455bPrefix));
console.log("Solution 1455: " +solution1455c+", " +solution1455cPrefix +  " --> " +isPrefixOfWord(solution1455c,solution1455cPrefix));



console.log("--------------------------------------------------------------------------------------------\n")
// ============== Solution 1608 =================


/*
Success
Details
Runtime: 80 ms, faster than 100.00% of JavaScript online submissions for Special Array With X Elements Greater Than or Equal X.
Memory Usage: 38.9 MB, less than 100.00% of JavaScript online submissions for Special Array With X Elements Greater Than or Equal X.
Next challenges:




 */

/*
You are given an array nums of non-negative integers. nums is considered special if there exists a number x such that there are exactly x numbers in nums that are greater than or equal to x.

Notice that x does not have to be an element in nums.

Return x if the array is special, otherwise, return -1. It can be proven that if nums is special, the value for x is unique.



Example 1:

Input: nums = [3,5]
Output: 2
Explanation: There are 2 values (3 and 5) that are greater than or equal to 2.
Example 2:

Input: nums = [0,0]
Output: -1
Explanation: No numbers fit the criteria for x.
If x = 0, there should be 0 numbers >= x, but there are 2.
If x = 1, there should be 1 number >= x, but there are 0.
If x = 2, there should be 2 numbers >= x, but there are 0.
x cannot be greater since there are only 2 numbers in nums.
Example 3:

Input: nums = [0,4,3,0,4]
Output: 3
Explanation: There are 3 values that are greater than or equal to 3.
Example 4:

Input: nums = [3,6,7,7,0]
Output: -1

 */


/**
 * @param {number[]} nums
 * @return {number}
 */
var specialArray = function(nums) {


    // We have a number that starts from 0 ,we need to return the number if the number of elements inside the array that are greater or equal to that number equals to the number

    let result = 0;
    let counter = 0;

     //Remove all 0 from array
    let countZeros = 0;
    for (i=0;i<nums.length;i++){
        if (nums[i]===0){
          countZeros++;
        }
    }
    if (countZeros<nums.length&& countZeros>0){
        for (i=0;i<nums.length;i++){
            if (nums[i]===0){
                nums.splice(i,1);
            }
        }
    }
    let max = 0;
    for (i=0;i<nums.length;i++){
        if (nums[i]>max){
            max = nums[i];
        }
    }


    for (i=0,j=0;result<=max;){

        if (nums[j]>=result){
            counter++;
        }
        j++;

        if (counter===result&& j===nums.length){
            return result;
        }
        else if (counter!==result&&j===nums.length){
            result++;
            counter=0;
            j=0;
        }

    }
    console.log(result);
    console.log(counter);
    return -1;
};


let nums1608a = [3,5];
let nums1608b = [0,0];
let nums1608c = [0,4,3,0,4];
let nums1608d = [3,6,7,7,0];
let nums1608e = [3,9,7,8,3,8,6,6];
let nums1608f = [100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100];


console.log("Solution 1608: " +nums1608a+" --> " +specialArray(nums1608a));
console.log("Solution 1608: " +nums1608b+" --> " +specialArray(nums1608b));
console.log("Solution 1608: " +nums1608c+" --> " +specialArray(nums1608c));
console.log("Solution 1608: " +nums1608d+" --> " +specialArray(nums1608d));
console.log("Solution 1608: " +nums1608e+" --> " +specialArray(nums1608e));
console.log("Solution 1608: " +nums1608f+" --> " +specialArray(nums1608f));

console.log("--------------------------------------------------------------------------------------------\n")
// ============== Solution 1550 =================


/*

Success
Details
Runtime: 76 ms, faster than 64.48% of JavaScript online submissions for Three Consecutive Odds.
Memory Usage: 38.8 MB, less than 5.06% of JavaScript online submissions for Three Consecutive Odds.
Next challenges:

 */


/*
Given an integer array arr, return true if there are three consecutive odd numbers in the array. Otherwise, return false.


Example 1:

Input: arr = [2,6,4,1]
Output: false
Explanation: There are no three consecutive odds.
Example 2:

Input: arr = [1,2,34,3,4,5,7,23,12]
Output: true
Explanation: [5,7,23] are three consecutive odds.


 */



/**
 * @param {number[]} arr
 * @return {boolean}
 */
var threeConsecutiveOdds = function(arr) {

    let counter = 0;
    for (i=0;i<arr.length;i++){
        if (arr[i]%2!==0){
            counter++;
            if (counter===3){
                return true;
            }
        }
        else
        {
            counter=0;
        }
    }
    return counter>=3 ? true : false;
};


let nums1550a = [2,6,4,1];
let nums1550b = [1,2,34,3,4,5,7,23,12];


console.log("Solution 1550: " +nums1550a+" --> " +threeConsecutiveOdds(nums1550a));
console.log("Solution 1550: " +nums1550b+" --> " +threeConsecutiveOdds(nums1550b));



console.log("--------------------------------------------------------------------------------------------\n")
// ============== Solution 125 =================

/*

Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

Note: For the purpose of this problem, we define empty string as valid palindrome.

Example 1:

Input: "A man, a plan, a canal: Panama"
Output: true
Example 2:

Input: "race a car"
Output: false
 */

/*

481 / 481 test cases passed.
Status: Accepted
Runtime: 92 ms
Memory Usage: 40.9 MB


 */


/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {


    let regex = /[A-Za-z0-9]/;

    if (s==="") return true;

    for (i=0,j=s.length-1;i<=j;){

        let checkI = regex.test(s[i]);
        let checkJ = regex.test(s[j]);

         if (!checkI){
            i++;
        }
        else if (!checkJ){
            j--;
        }

         else if ((checkI&&checkJ&&s[i].toLowerCase()===s[j].toLowerCase())){
             i++;
             j--;
         }
        else if (!(checkI&&checkJ&&s[i].toLowerCase()===s[j].toLowerCase())){
            return false;
        }

    }
    return true;

};

let solution125a = "A man, a plan, a canal: Panama";
let solution125b = "race a car";
let solution125c = ",,,,,,,,,,,,acva";


console.log("Solution 125: " +solution125a+" --> " +isPalindrome(solution125a));
console.log("Solution 125: " +solution125b+" --> " +isPalindrome(solution125b));
console.log("Solution 125: " +solution125c+" --> " +isPalindrome(solution125c));


// ===================================== Knowledge =====================================
// Useful commands

// s=s.replace(s.charAt(i),letters[j]); --> Replace letter in a string
// map.set(rounds[i],(map.get(rounds[i]))+1); --> Increment map value