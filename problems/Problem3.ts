// Problem 3
import { Professor, Class, Student } from "../types";

export default studentsTaughtByProf; // Uncomment this line when done writing the function

function studentsTaughtByProf(professor:Professor): string[]{
    let students: Student[]=[]
    for (let courese of professor.classes){
        for (let student of courese.students){
            let b=false;
            for (let existing of students){
                if (existing.name==student.name&&existing.age==student.age){
                    b=true;

                }
            }
            if (!b){
                students.push(student)
            }
            
        }
    }

        students.sort((a,b)=>a.age-b.age);
        const names: string[] = [];

        for (const student of students) {
            names.push(student.name);
    }
    


    
    return names;
    

}
