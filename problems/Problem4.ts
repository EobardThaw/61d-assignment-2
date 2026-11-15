// Problem 4
import { Student, Athlete } from "../types";

export default allAthletes; // Uncomment this line when done writing the function
function allAthletes(students:(Student|Athlete)[],defaultSport:stirng):Athlete[]{
    let result:Athlete[]=[];
    for (let student of students){
        if ("sport" in student){
            result.push(student);
        }else{
            result.push({
                name: student.name,
                age: student.age,
                sport: defaultSport
            });
        }
    }
    return result
}