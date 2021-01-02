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





console.log("--------------------------------------------------------------------------------------------\n")
// ============== Solution 409 =================


/*
Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.

Letters are case sensitive, for example, "Aa" is not considered a palindrome here.



Example 1:

Input: s = "abccccdd"
Output: 7
Explanation:
One longest palindrome that can be built is "dccaccd", whose length is 7.
Example 2:

Input: s = "a"
Output: 1
Example 3:

Input: s = "bb"
Output: 2


 */

/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {


    // Letters are case sensitive

    // We can break the string to every possible sub-string variation , and then loop each one and check for palindrome and length


    // OR
    // Create a map with every letter getting letter count , then , every even letter enters the end string , and highest odd too


    let map =new Map();

    for (i=0;i<s.length;i++){
        if (map.has(s[i])){
            map.set(s[i],map.get((s[i]))+1);
        }
        else
        {
            map.set(s[i],1);
        }
    }


    let result="";

    let max = 0;
    let tempChar = "";
    map.forEach(((value, key) => {

        if (value%2===0){

            while(value>0){
                result = key + result;
                result = result + key;
                value-=2;
           }
        }
        else if (value %2 !==0 && value > 2){
            while(value>1){
                result = key + result;
                result = result + key;
                value-=2;
                if (value>=max){
                    max=value;
                    tempChar = key;
                }
            }
        }
        else if (value===1){
            if (value>=max){
                max=value;
                tempChar = key;
            }
        }
    }));

    result = result.slice(0,Math.floor(result.length/2))+ tempChar + result.slice(Math.floor(result.length/2),result.length);

    return result.length;
};


let solution409a = "abccccdd";

let solution409b = "a";

let solution409c = "bb";

let solution409d = "ccc";

let solution409e = "civilwartestingwhetherthatnaptionoranynartionsoconceivedandsodedicatedcanlongendureWeareqmetonagreatbattlefiemldoftzhatwarWehavecometodedicpateaportionofthatfieldasafinalrestingplaceforthosewhoheregavetheirlivesthatthatnationmightliveItisaltogetherfangandproperthatweshoulddothisButinalargersensewecannotdedicatewecannotconsecratewecannothallowthisgroundThebravelmenlivinganddeadwhostruggledherehaveconsecrateditfaraboveourpoorponwertoaddordetractTgheworldadswfilllittlenotlenorlongrememberwhatwesayherebutitcanneverforgetwhattheydidhereItisforusthelivingrathertobededicatedheretotheulnfinishedworkwhichtheywhofoughtherehavethusfarsonoblyadvancedItisratherforustobeherededicatedtothegreattdafskremainingbeforeusthatfromthesehonoreddeadwetakeincreaseddevotiontothatcauseforwhichtheygavethelastpfullmeasureofdevotionthatweherehighlyresolvethatthesedeadshallnothavediedinvainthatthisnationunsderGodshallhaveanewbirthoffreedomandthatgovernmentofthepeoplebythepeopleforthepeopleshallnotperishfromtheearth"

console.log("Solution 409: " +solution409a+" --> " +longestPalindrome(solution409a));
console.log("Solution 409: " +solution409b+" --> " +longestPalindrome(solution409b));
console.log("Solution 409: " +solution409c+" --> " +longestPalindrome(solution409c));
console.log("Solution 409: " +solution409d+" --> " +longestPalindrome(solution409d));
console.log("Solution 409: " +solution409e+" --> " +longestPalindrome(solution409e));

console.log("--------------------------------------------------------------------------------------------\n")
// ============== Solution 20 =================


/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.


Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false
Example 4:

Input: s = "([)]"
Output: false
Example 5:

Input: s = "{[]}"
Output: true


 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {


    const stack = [];

    for (let i = 0 ; i < s.length ; i++) {
        let c = s.charAt(i);
        switch(c) {
            case '(': stack.push(')');
                break;
            case '[': stack.push(']');
                break;
            case '{': stack.push('}');
                break;
            default:
                if (c !== stack.pop()) {
                    return false;
                }
        }
    }

    return stack.length === 0;



};


let solution20a = "()";

let solution20b = "()[]{}";

let solution20c = "(]";

let solution20d = "([)]";

let solution20e = "{[]}"



console.log("Solution 20: " +solution20a+" --> " +isValid(solution20a));
console.log("Solution 20: " +solution20b+" --> " +isValid(solution20b));
console.log("Solution 20: " +solution20c+" --> " +isValid(solution20c));
console.log("Solution 20: " +solution20d+" --> " +isValid(solution20d));
console.log("Solution 20: " +solution20e+" --> " +isValid(solution20e));



console.log("--------------------------------------------------------------------------------------------\n")
// ============== Solution 1370 =================

/*
Given a string s. You should re-order the string using the following algorithm:

Pick the smallest character from s and append it to the result.
Pick the smallest character from s which is greater than the last appended character to the result and append it.
Repeat step 2 until you cannot pick more characters.
Pick the largest character from s and append it to the result.
Pick the largest character from s which is smaller than the last appended character to the result and append it.
Repeat step 5 until you cannot pick more characters.
Repeat the steps from 1 to 6 until you pick all characters from s.
In each step, If the smallest or the largest character appears more than once you can choose any occurrence and append it to the result.

Return the result string after sorting s with this algorithm.



Example 1:

Input: s = "aaaabbbbcccc"
Output: "abccbaabccba"
Explanation: After steps 1, 2 and 3 of the first iteration, result = "abc"
After steps 4, 5 and 6 of the first iteration, result = "abccba"
First iteration is done. Now s = "aabbcc" and we go back to step 1
After steps 1, 2 and 3 of the second iteration, result = "abccbaabc"
After steps 4, 5 and 6 of the second iteration, result = "abccbaabccba"
Example 2:

Input: s = "rat"
Output: "art"
Explanation: The word "rat" becomes "art" after re-ordering it with the mentioned algorithm.
Example 3:

Input: s = "leetcode"
Output: "cdelotee"
Example 4:

Input: s = "ggggggg"
Output: "ggggggg"
Example 5:

Input: s = "spo"
Output: "ops"

 */

/**
 * @param {string} s
 * @return {string}
 */
var sortString = function(s) {

    return result;
};

let solution1370a = "aaaabbbbcccc";

let solution1370b = "rat";

let solution1370c = "leetcode";

let solution1370d = "ggggggg";

let solution1370e = "spo"



console.log("Solution 1370: " +solution1370a+" --> " +sortString(solution1370a));
console.log("Solution 1370: " +solution1370b+" --> " +sortString(solution1370b));
console.log("Solution 1370: " +solution1370c+" --> " +sortString(solution1370c));
console.log("Solution 1370: " +solution1370d+" --> " +sortString(solution1370d));
console.log("Solution 1370: " +solution1370e+" --> " +sortString(solution1370e));



console.log("--------------------------------------------------------------------------------------------\n")
// ============== Solution 665 =================

/*
Given an array nums with n integers, your task is to check if it could become non-decreasing by modifying at most 1 element.

We define an array is non-decreasing if nums[i] <= nums[i + 1] holds for every i (0-based) such that (0 <= i <= n - 2).



Example 1:

Input: nums = [4,2,3]
Output: true
Explanation: You could modify the first 4 to 1 to get a non-decreasing array.
Example 2:

Input: nums = [4,2,1]
Output: false
Explanation: You can't get a non-decreasing array by modify at most one element.


Constraints:

1 <= n <= 10 ^ 4
- 10 ^ 5 <= nums[i] <= 10 ^ 5


 */


/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function(nums) {

    //
    // let min = 100000;
    // let max = -100000;
    // let counter = 0;
    // for (i=0;i<nums.length;i++){
    //     if (nums[i]<min){
    //         min = nums[i];
    //     }
    //     if (nums[i]>max){
    //         max = nums[i];
    //     }
    // }
    // console.log(min,max);
    //
    //
    //
    // if (nums.length<2) return true;
    // if (((nums.length-2)>=2) && nums.lastIndexOf(max)!==nums.length-1 && nums.indexOf(min)!== 0 ) return false;
    // for (i=0;i<nums.length;i++){
    //     if ( nums[i]>=min){
    //         min = nums[i];
    //     }
    //     else{
    //         min = nums[i];
    //         counter++;
    //     }
    //     if (counter >1)return  false;
    // }
    // return true;
    //
    // let min = 100000;
    // let max = -100000;
    // let counterUp = 0;
    // let counterDown = 0;
    // for (i=0;i<nums.length;i++){
    //     if (nums[i]<min){
    //         min = nums[i];
    //     }
    //     if (nums[i]>max){
    //         max = nums[i];
    //     }
    // }
    //
    // for (i=0;i<nums.length-1;i++){
    //     if (nums[i]>nums[i+1]){
    //         counterUp++;
    //     }
    //     else if (nums[i]<nums[i+1]){
    //         counterDown++;
    //     }
    // }
    // console.log(`counterUp: ${counterUp}, counterDown: ${counterDown}`)
    // // if (counterUp === 1 || counterDown === 1  ) return true;
    //
    //
    // // Move max value to the right (or min to the left ?)
    // let tempArr = [...nums];
    //
    //     // Here we have an array
    //     if (tempArr.lastIndexOf(max)!== tempArr.length-1){
    //         tempArr = tempArr.slice(0,tempArr.lastIndexOf(max)).concat(tempArr.slice(tempArr.lastIndexOf(max)+1,tempArr.length)) ;
    //         tempArr[tempArr.length] = max;
    //         console.log(tempArr)
    //         for (i=0;i<tempArr.length-1;i++){
    //             if (tempArr[i]>tempArr[i+1]){
    //                 return false;
    //             }
    //         }
    //         return  true;
    //     }
    //
    // else if (tempArr.indexOf(min)!== 0){
    //         tempArr = [...nums];
    //     tempArr = tempArr.slice(0,tempArr.indexOf(min)).concat(tempArr.slice(tempArr.indexOf(min)+1,tempArr.length)) ;
    //     tempArr.unshift(min);
    //     console.log(tempArr)
    //     for (i=0;i<tempArr.length-1;i++){
    //         if (tempArr[i]>tempArr[i+1]){
    //             return false;
    //         }
    //     }
    // return  true;
    // }

    let min = 100000;
    let minIndex;
    let max = -100000;
    let maxIndex;
    let counterUp = 0;
    let counterDown = 0;
    for (i=0;i<nums.length;i++){
        if (nums[i]<min){
            min = nums[i];
            minIndex=i;
        }
        if (nums[i]>max){
            max = nums[i];
            maxIndex = i;
        }
    }

    console.log(`min index : ${minIndex}, min value: ${min} ----  max index : ${maxIndex}, min value: ${max}`)

    // Iterate until nums[i] > nums[i+1]
    for (i=0;i<nums.length;i++){

        if (nums[i]> nums[i+1]){
            let tmpArr = [...nums];
            tmpArr = tmpArr.slice(0,tmpArr.indexOf(nums[i])).concat(tmpArr.slice(tmpArr.indexOf(nums[i])+1,tmpArr.length));
            console.log(`before adding element: ${tmpArr}`)
            let counter = 0;
            let flag = false;
            for (j=0;j<tmpArr.length;j++){
                if (tmpArr[j]>= nums[i]){
                    tmpArr = tmpArr.slice(0,j).concat(nums[i]).concat(tmpArr[j]).concat(tmpArr.slice(j+1,tmpArr.length));

                    counter++;
                    flag =true;
                }
            }
            if (!flag){
                tmpArr[tmpArr.length] = nums[i];
                console.log(`after adding element: ${tmpArr}`)
                for (j=0;j<tmpArr.length-1;j++){
                    if (tmpArr[j]>tmpArr[j+1]){
                        return false;
                    }
                }
                return true;
            }
            flag = false;
            if (counter > 1) return false;
        }
    }
};


let nums665a = [4,2,3];
let nums665b = [4,2,1];
let nums665c = [-1,4,2,3];
let nums665d = [3,4,2,3];
let nums665e = [1,2,4,5,3];


console.log("Solution 665: " +nums665a+" --> " +checkPossibility(nums665a));
console.log("Solution 665: " +nums665b+" --> " +checkPossibility(nums665b));
console.log("Solution 665: " +nums665c+" --> " +checkPossibility(nums665c));
console.log("Solution 665: " +nums665d+" --> " +checkPossibility(nums665d));
console.log("Solution 665: " +nums665e+" --> " +checkPossibility(nums665e));


console.log("--------------------------------------------------------------------------------------------\n")
// ============== Solution 1304 =================


/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function(n) {

    let sum=0;
    let result =[];

    while(sum!==0 || result.length!==n){

                // First element
                if (sum===0){
                    tmp = Math.floor(Math.random()* n  ) * (Math.random() < 0.5 ? -1 : 1);
                    result.push(tmp)
                    sum+=tmp;
                }
                else{
                    do {
                        tmp = Math.floor(Math.random()* n  ) * (Math.random() < 0.5 ? -1 : 1);
                    }while (result.includes(tmp));
                    result.push(tmp)
                    sum+=tmp;
                    if ((sum===0 && result.length===n)){
                        return result;
                    }
                    else
                    {
                        sum=0;
                        result=[];
                    }
                }

    }
    // for (i=0;i<n;i++){
    //     //     let tmp;
    //     //     if (sum===0){
    //     //         tmp = Math.floor(Math.random()* n  ) * (Math.random() < 0.5 ? -1 : 1);
    //     //         result.push(tmp)
    //     //         sum+=tmp;
    //     //     }
    //     //     else{
    //     //         do {
    //     //             tmp = Math.floor(Math.random()* n  ) * (Math.random() < 0.5 ? -1 : 1);
    //     //         }while (result.includes(tmp) || (sum!==0 && i===n) );
    //     //         result.push(tmp)
    //     //         sum+=tmp;
    //     //         while(sum!==0&&result.length!==n){
    //     //             do {
    //     //                 tmp = Math.floor(Math.random()* n  ) * (Math.random() < 0.5 ? -1 : 1);
    //     //             }while (result.includes(tmp));
    //     //             result.push(tmp)
    //     //             sum+=tmp;
    //     //         }
    //     //         i=n;
    //     //     }





};


let solution1304a = 5;
console.log("Solution 1304: " +solution1304a+" --> " +sumZero(solution1304a));


console.log("--------------------------------------------------------------------------------------------\n")
// ============== Solution 1614 ================= SOLVED

/*

A string is a valid parentheses string (denoted VPS) if it meets one of the following:

It is an empty string "", or a single character not equal to "(" or ")",
It can be written as AB (A concatenated with B), where A and B are VPS's, or
It can be written as (A), where A is a VPS.
We can similarly define the nesting depth depth(S) of any VPS S as follows:

depth("") = 0
depth(A + B) = max(depth(A), depth(B)), where A and B are VPS's
depth("(" + A + ")") = 1 + depth(A), where A is a VPS.
For example, "", "()()", and "()(()())" are VPS's (with nesting depths 0, 1, and 2), and ")(" and "(()" are not VPS's.

Given a VPS represented as string s, return the nesting depth of s.



Example 1:

Input: s = "(1+(2*3)+((8)/4))+1"
Output: 3
Explanation: Digit 8 is inside of 3 nested parentheses in the string.
Example 2:

Input: s = "(1)+((2))+(((3)))"
Output: 3
Example 3:

Input: s = "1+(2*3)/(2-1)"
Output: 1


 */


/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {

    let temp = s;
    temp = temp.replace(/[^() \[\]]+/g, '')
    let result = 0;
    let max = 0;
    const stack = [];
    for (i=0;i<temp.length;i++){
        let c = temp.charAt(i);
        switch (c) {
            case '(' : stack.push(')');
                result++;
                if (result>max) max = result;
                break;
            case ')' : result--;
            default:
                if (c !== stack.pop()) return 0;
        }
    }
    return max;
};

let solution1614a = "(1+(2*3)+((8)/4))+1";
let solution1614b = "(1)+((2))+(((3)))";
let solution1614c = "1+(2*3)/(2-1)";

console.log("Solution 1614: " +solution1614a+" --> " +maxDepth(solution1614a));
console.log("Solution 1614: " +solution1614b+" --> " +maxDepth(solution1614b));
console.log("Solution 1614: " +solution1614c+" --> " +maxDepth(solution1614c));


console.log("--------------------------------------------------------------------------------------------\n")
// ============== Solution 414 =================


/*
Given a non-empty array of integers, return the third maximum number in this array. If it does not exist, return the maximum number. The time complexity must be in O(n).

Example 1:
Input: [3, 2, 1]

Output: 1

Explanation: The third maximum is 1.
Example 2:
Input: [1, 2]

Output: 2

Explanation: The third maximum does not exist, so the maximum (2) is returned instead.
Example 3:
Input: [2, 2, 3, 1]

Output: 1

Explanation: Note that the third maximum here means the third maximum distinct number.
Both numbers with value 2 are both considered as second maximum.

 */


/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {

let map = new Map();

let max = Number.MIN_SAFE_INTEGER;
let min = Number.MAX_SAFE_INTEGER;



    // Find min,max
    // Create Array and fill with numbers between min and max


    for (i=0;i<nums.length;i++){

        if (!map.has(nums[i])){
            map.set(nums[i],1);
        }
        if (nums[i]<min){
            min = nums[i];
        }
        if (nums[i]>max){
            max = nums[i];
        }
    }



    let arr = [];
    for (i=0,j=min;j<=max;i++,j++){
        if (map.has(j)){
            arr[i] = j;

        }
        else{
            //j++;
            while(!map.has(j)) j++;
            j--;
            i--;
        }
    }

    console.log(arr)
    // map.forEach(((value, key) => {
    //         // arr.push(key);
    //         // if (key>max){
    //         //     max = key;
    //         // }
    //
    //
    // }));

    if (arr.length>=3){
        return arr[arr.length-3];
    }
    else return max;

};



let solution414a = [3,2,1];
let solution414b = [1,2];
let solution414c = [2, 2, 3, 1];
let solution414d = [5,2,2];
let solution414e = [1,2,2,5,3,5];
let solution414f = [-2147483648,1,1];

console.log("Solution 414: " +solution414a+" --> " +thirdMax(solution414a));
console.log("Solution 414: " +solution414b+" --> " +thirdMax(solution414b));
console.log("Solution 414: " +solution414c+" --> " +thirdMax(solution414c));
console.log("Solution 414: " +solution414d+" --> " +thirdMax(solution414d));
console.log("Solution 414: " +solution414e+" --> " +thirdMax(solution414e));
//console.log("Solution 414: " +solution414f+" --> " +thirdMax(solution414f));

console.log("--------------------------------------------------------------------------------------------\n")


// ============== Solution 1624 ================= Solved

/**
 * @param {string} s
 * @return {number}
 */
var maxLengthBetweenEqualCharacters = function(s) {

    //Find the longest substring between two equal characters
    let start;
    let end;
    let length = -1;
    let max = 0;
    for (i=0,j=1;i<s.length&&j<s.length;){
        if (s[i]===s[j]){
            if ((j-i)>max){
                start = i;
                end = j;
                length = j-i-1;
                max = length;
            }
        }
        j++;
        if (j===s.length){
            i++;
            j=i+1;
        }
    }
    return length;

};

let solution1624a ="aa"
let solution1624b ="abca"
let solution1624c ="cbzxy"
let solution1624d ="cabbac"

console.log("Solution 1624: " +solution1624a+" --> " +maxLengthBetweenEqualCharacters(solution1624a));
console.log("Solution 1624: " +solution1624b+" --> " +maxLengthBetweenEqualCharacters(solution1624b));
console.log("Solution 1624: " +solution1624c+" --> " +maxLengthBetweenEqualCharacters(solution1624c));
console.log("Solution 1624: " +solution1624d+" --> " +maxLengthBetweenEqualCharacters(solution1624d));


console.log("--------------------------------------------------------------------------------------------\n")

// ============== Solution 1629 ================= SOLVED

/*

Success
Details
Runtime: 80 ms, faster than 82.47% of JavaScript online submissions for Slowest Key.
Memory Usage: 39.7 MB, less than 5.67% of JavaScript online submissions for Slowest Key.
 */

/**
 * @param {number[]} releaseTimes
 * @param {string} keysPressed
 * @return {string}
 */
var slowestKey = function(releaseTimes, keysPressed) {

    // Return the key of the keypress that had the longest duration.
    // If there are multiple such keypresses, return the lexicographically LARGEST key of the keypresses.

    // We can keep longest duration which is initially 0.we check for new max duration each index, we also store the index to compare letters to check which is lexicographically greater

    let maxDuration = releaseTimes[0];
    let maxDurationIndex = 0;

    for (i=0;i<releaseTimes.length-1;i++){

        if ((releaseTimes[i+1]-releaseTimes[i])>maxDuration  ){
            maxDuration = releaseTimes[i+1]-releaseTimes[i]
            maxDurationIndex = i+1
        }
        else if ((releaseTimes[i+1]-releaseTimes[i])===maxDuration){
            if (keysPressed[i+1]>keysPressed[i]){
                maxDuration = releaseTimes[i+1]-releaseTimes[i]
                maxDurationIndex = i+1;
            }
        }

    }

    return keysPressed.charAt(maxDurationIndex)
};

solution1629a = [9,29,49,50]
solution1629akeysPressed = "cbcd"
solution1629b = [12,23,36,46,62]
solution1629bkeysPressed = "spuda"
solution1629c = [23,34,43,59,62,80,83,92,97]
solution1629ckeysPressed = "qgkzzihfc"


console.log("Solution 1629: " +solution1629a+ " Keys Pressed " +solution1629akeysPressed + " --> " +slowestKey(solution1629a,solution1629akeysPressed));
console.log("Solution 1629: " +solution1629b+ " Keys Pressed " +solution1629bkeysPressed + " --> " +slowestKey(solution1629b,solution1629bkeysPressed));
console.log("Solution 1629: " +solution1629c+ " Keys Pressed " +solution1629ckeysPressed + " --> " +slowestKey(solution1629c,solution1629ckeysPressed));



console.log("--------------------------------------------------------------------------------------------\n")

// ============== Solution 1619 =================

/*

Given an integer array arr, return the mean of the remaining integers after removing the smallest 5% and the largest 5% of the elements.

Answers within 10-5 of the actual answer will be considered accepted.

 */

/**
 * @param {number[]} arr
 * @return {number}
 */
var trimMean = function(arr) {

    let removeSizeDown  = arr.length/20;
    let removeSizeUp = arr.length/20;


};



let solution1619a = [1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3]
let solution1619b = [6,2,7,5,1,2,0,3,10,2,5,0,5,5,0,8,7,6,8,0]
let solution1619c = [6,0,7,0,7,5,7,8,3,4,0,7,8,1,6,8,1,1,2,4,8,1,9,5,4,3,8,5,10,8,6,6,1,0,6,10,8,2,3,4]
let solution1619d = [9,7,8,7,7,8,4,4,6,8,8,7,6,8,8,9,2,6,0,0,1,10,8,6,3,3,5,1,10,9,0,7,10,0,10,4,1,10,6,9,3,6,0,0,2,7,0,6,7,2,9,7,7,3,0,1,6,1,10,3]


console.log("Solution 1619: " +solution1619a+" --> " +trimMean(solution1619a));
console.log("Solution 1619: " +solution1619b+" --> " +trimMean(solution1619b));
console.log("Solution 1619: " +solution1619c+" --> " +trimMean(solution1619c));
console.log("Solution 1619: " +solution1619d+" --> " +trimMean(solution1619d));

console.log("--------------------------------------------------------------------------------------------\n")

// ============== Solution 1662 =================

/*

Success
Details
Runtime: 84 ms, faster than 100.00% of JavaScript online submissions for Check If Two String Arrays are Equivalent.
Memory Usage: 40.2 MB, less than 100.00% of JavaScript online submissions for Check If Two String Arrays are Equivalent.
Next challenges:
Count and Say


 */


/*

Given two string arrays word1 and word2, return true if the two arrays represent the same string, and false otherwise.

A string is represented by an array if the array elements concatenated in order forms the string.



Example 1:

Input: word1 = ["ab", "c"], word2 = ["a", "bc"]
Output: true
Explanation:
word1 represents string "ab" + "c" -> "abc"
word2 represents string "a" + "bc" -> "abc"
The strings are the same, so return true.
Example 2:

Input: word1 = ["a", "cb"], word2 = ["ab", "c"]
Output: false
Example 3:

Input: word1  = ["abc", "d", "defg"], word2 = ["abcddefg"]
Output: true


 */

/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function(word1, word2) {

    let tempWord1 = ""
    let tempWord2 = ""

    for (i=0,j=0;i<word1.length || j<word2.length;i++,j++){
        if (i<word1.length) tempWord1+=word1[i]
        if (j<word2.length) tempWord2+=word2[j]


    }
    console.log("first--> " + tempWord1)
    console.log("second--> " + tempWord2)

    if (tempWord1===tempWord2) return true;
    return false;


};


let solution1662a1 = ["ab", "c"]
let solution1662a2 = ["a", "bc"]
let solution1662b1 = ["a", "cb"]
let solution1662b2 = ["ab", "c"]
let solution1662c1 = ["abc", "d", "defg"]
let solution1662c2 = ["abcddefg"]


console.log("Solution 1662: " +solution1662a1+", "+solution1662a2 +  " --> " +arrayStringsAreEqual(solution1662a1,solution1662a2));
console.log("Solution 1662: " +solution1662b1+", "+solution1662b2 +  " --> " +arrayStringsAreEqual(solution1662b1,solution1662b2));
console.log("Solution 1662: " +solution1662c1+", "+solution1662c2 +  " --> " +arrayStringsAreEqual(solution1662c1,solution1662c2));

console.log("--------------------------------------------------------------------------------------------\n")

// ============== Solution 1656 =================

/**
 * @param {number} n
 */
var OrderedStream = function(n) {

};

/**
 * @param {number} id
 * @param {string} value
 * @return {string[]}
 */
OrderedStream.prototype.insert = function(id, value) {

};

/**
 * Your OrderedStream object will be instantiated and called as such:
 * var obj = new OrderedStream(n)
 * var param_1 = obj.insert(id,value)
 */


console.log("--------------------------------------------------------------------------------------------\n")

// ============== Solution 1672 =================

// SOLVED

/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {


    // Each index inside the outer array is a customer and the sum of the array of the index is the amount of money he has in the bank

    // iterate through each index, sum the numbers and keep max value , return max value

    let maxSum = 0;

    for (i=0;i<accounts.length;i++){
        let arr = accounts[i];
        let temp = 0;
        for (j=0;j<arr.length;j++){
            temp+= arr[j];
        }
        if (temp>maxSum){
            maxSum = temp;
        }
        //temp =0;
    }

    return maxSum;
};

let solution1672a = [[1,2,3],[3,2,1]];
let solution1672b = [[1,5],[7,3],[3,5]];
let solution1672c = [[2,8,7],[7,1,3],[1,9,5]];


console.log("Solution 1672: " +solution1672a+" --> " +maximumWealth(solution1672a));
console.log("Solution 1672: " +solution1672b+" --> " +maximumWealth(solution1672b));
console.log("Solution 1672: " +solution1672c+" --> " +maximumWealth(solution1672c));

console.log("--------------------------------------------------------------------------------------------\n")



// ============== Solution 1688 =================

// SOLVED

/**
 * @param {number} n
 * @return {number}
 */
var numberOfMatches = function(n) {

    // if we have even number of teams , each round half of the teams advance , so we keep dividing until we reach 1,
    // otherwise , each odd number is divided and we add 1

    let matches = 0;
    while(n!=1){

        if (n%2===0){
            matches += n/2;
            n = n/2;
        }
        else{
            let temp = n+1;
            matches+= temp/2;
            matches--;

            n = temp/2;
        }

    }
        return matches;
};

let solution1688a = 7 ;
let solution1688b = 14 ;



console.log("Solution 1688: " +solution1688a+" --> " +numberOfMatches(solution1688a));
console.log("Solution 1688: " +solution1688b+" --> " +numberOfMatches(solution1688b));

console.log("--------------------------------------------------------------------------------------------\n")



// ============== Solution 1684 =================

// SOLVED

/*

You are given a string allowed consisting of distinct characters and an array of strings words.
A string is consistent if all characters in the string appear in the string allowed.
Return the number of consistent strings in the array words.
 */

/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {


    // we iterate the array , check each word if all its letters appear in the allowed string. if the condition is true, we add 1 to counter.

    let result = 0;
    for (i=0;i<words.length;i++){

        // if we find a letter that is not included in the allowed we automatically skip the rest of the string
        for (j=0;j<words[i].length;j++){
            if (!allowed.includes(words[i].slice(j,j+1))){
                j=words[i].length;
            }
            else if (j===words[i].length-1){
                result++;
            }

        }

    }

    return result;


};


let solution1684Alloweda = "ab" ;
let solution1684Wordsa = ["ad","bd","aaab","baa","badab"];
let solution1684Allowedb = "abc" ;
let solution1684Wordsb = ["a","b","c","ab","ac","bc","abc"] ;
let solution1684Allowedc = "cad" ;
let solution1684Wordsc = ["cc","acd","b","ba","bac","bad","ac","d"];


console.log("Solution 1684: " +solution1684Alloweda+" --> " +countConsistentStrings(solution1684Alloweda,solution1684Wordsa));
console.log("Solution 1684: " +solution1684Allowedb+" --> " +countConsistentStrings(solution1684Allowedb,solution1684Wordsb));
console.log("Solution 1684: " +solution1684Allowedc+" --> " +countConsistentStrings(solution1684Allowedc,solution1684Wordsc));

console.log("--------------------------------------------------------------------------------------------\n")


// ============== Solution 1694 =================


/**
 * @param {string} number
 * @return {string}
 */
var reformatNumber = function(number) {


    number = number.replace(/-|\s/g,"")
    console.log("after removing dashes and spaces: " + number)

    // Always check how many digits left, if more than 4 and you own group of 3 , place them together.this condition needs to be checked right when the program
    // starts so that if we deal immediately with a 4 digits or less we create a solution. if we have more, we continue to build the string xxx-xxx-xxx until 4 or less left.


    let dashes = 0
    let countThree = 0
    let numbers = 0
    for (i=0;i<number.length;i++){

        countThree++;
        if (number.charAt(i)==='-'){
            countThree--;
        }

        if (number.length-numbers-dashes <=4 && number.charAt(i) !== '-' && countThree!==3){

            // handle case when 4 left and current char is not '-' which needs to be skipped
            switch (number.length-i) {
                case 2:
                case 3:
                    i = number.length
                    break;
                case 4:
                    number = number.slice(0,number.length-2) + '-' + number.slice(number.length-2,number.length)
                    i = number.length

            }
        }
        else if (number.length-numbers-dashes > 4 && number.charAt(i) !== '-' && countThree === 3){
                    number = number.slice(0,i+1) + '-' + number.slice(i+1,number.length)
                    countThree = 0
                    numbers+=3;
                    dashes++;

        }



    }
    return number;
};

let solution1694a = "1-23-45 6" ;
let solution1694b = "123 4-567" ;
let solution1694c = "123 4-5678" ;
let solution1694d = "12" ;
let solution1694e = "--17-5 229 35-39475 " ;
let solution1694f = "9964-" ;

console.log("Solution 1694: " +solution1694a+" --> " +reformatNumber(solution1694a));
console.log("Solution 1694: " +solution1694b+" --> " +reformatNumber(solution1694b));
console.log("Solution 1694: " +solution1694c+" --> " +reformatNumber(solution1694c));
console.log("Solution 1694: " +solution1694d+" --> " +reformatNumber(solution1694d));
console.log("Solution 1694: " +solution1694e+" --> " +reformatNumber(solution1694e));
console.log("Solution 1694: " +solution1694f+" --> " +reformatNumber(solution1694f));

// ===================================== Knowledge =====================================
// Useful commands

// s=s.replace(s.charAt(i),letters[j]); --> Replace letter in a string
// map.set(rounds[i],(map.get(rounds[i]))+1); --> Increment map value