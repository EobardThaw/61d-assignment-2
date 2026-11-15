// Problem 5

export default countOccurrences; // Uncomment this line when done writing the function
function countOccurrences<T>(arr:T[],target:T):number{
    let count=0;
    for(let item of arr){
        if (item==target){
            count++
        }
    }
    return count
}