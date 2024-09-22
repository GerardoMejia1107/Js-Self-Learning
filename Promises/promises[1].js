// Función que simula la obtención de datos del usuario (2 segundos)
function getUserData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ name: "Juan", age: 22 });
        }, 2000);
    });
}

// Función que simula la obtención de datos del curso (3 segundos)
function getCourseData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ course: "Matemática Discreta", grade: 95 });
        }, 3000);
    });
}

Promise.all([getUserData(), getCourseData()]).then((result)=>{
    let [user, course] = result;
    console.log(user);
    console.log(course);
})


/*function getPromises(promise1, promise2) {
    promise1.then((result) => {
        console.log(result);
    })

    promise2.then((result) => {
        console.log(result);
    })
}

getPromises(getUserData(), getCourseData())*/


/*
getUserData().then((data)=>{
    console.log(data)
})
getCourseData().then((data)=>{
    console.log(data)
})*/
