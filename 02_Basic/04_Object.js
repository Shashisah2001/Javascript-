
// singleton
const linkdinUser = new Object()
//console.log(linkdinUser);

linkdinUser.Id = "#20010210",
linkdinUser.Username = "Shashi_Sah",
linkdinUser.Name = "Shashi Sah",
linkdinUser.Email = 'Shah@google.com',
linkdinUser.Address = 'Dehradun,UK'

//console.log(linkdinUser);
//console.log(linkdinUser.Id);
/*
console.log(Object.keys(linkdinUser));
console.log(Object.entries(linkdinUser));
console.log(Object.values(linkdinUser));


const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}

const obj3 = Object.assign(obj1,obj2)
console.log("1",obj3);
console.log(obj1,obj2);
console.log({...obj1,...obj2});


const detailOfuser={
    Username:{
        Fullname: {
            Firstname: "Shashi",
            Middlename: "Kumar",
            Lastname:"Sah"

        }
    }
}
console.log(detailOfuser.Username);
console.log(detailOfuser.Username.Fullname);




//************************Destructuring*************/
const course ={
    coursename: "B.tech",
    Branchname: "CSE",
    StudentId: "2020CSE",
    Studentname:"Tony"

}

//console.log(course);
//console.log(course.StudentId);

const{StudentId} = course
const{StudentId:Id} = course
console.log(StudentId);
console.log(Id);

