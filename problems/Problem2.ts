//Problem 2
import { Student } from "../types";

export default arrayOfStudents; // Uncomment this line when done writing the function
function arrayOfStudents(names:string[],ages:number[]):Student[]{
    let arr:Student[]=[]
    for (let i=0;i<names.length;i++){
        arr.push({name: names[i],age:ages[i]});

    }

    return arr;
}
