const userLeft = false;
const userWatchingCatMeme = false;
//CALLBACKS EXAMPLE TO UNDERSTAND WHAT PROMISES CONSISTS OF
/*
function watchTutorialCallback(callback, errorCallback) {
    if (userLeft) {
        errorCallback({
            name: 'User Left',
            message: 'See you soon!'
        })
    } else if (userWatchingCatMeme) {
        errorCallback({
            name: 'User Watching Cat',
            message: 'Hope you like the meme chosen for you!'
        })
    } else {
        callback({
            name: 'User Watching',
            message: 'Please subscribe to keep watching more incredible videos like this one!'
        })
    }
}

watchTutorialCallback((result) => {
    console.log("Success " + result.message);
}, (error) => {
    console.log("Failed " + error.message)
})*/


//PREVIOUS EXAMPLE, THIS TIME IMPLEMENTING PROMISES
/*function watchTutorial() {
    return new Promise((resolve, reject) => {
        if (userLeft) {
            reject({
                name: 'User Left',
                message: 'See you soon!'
            })
        } else if (userWatchingCatMeme) {
            reject({
                name: 'User Watching Cat',
                message: 'Hope you like the meme chosen for you!'
            })
        } else {
            resolve({message: 'Please subscribe!'})
        }
    })
}

watchTutorial().then((success)=>{
    console.log(success.message)
}).catch((error)=>{
    console.log(`Status: ${error.name} - ${error.message}`);
})*/


//PROMISE ALL (PARALLEL)
/*const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {resolve('Video 1 recorded')}, 2000)
})
const promise2 = new Promise((resolve, reject) => {
    resolve('Video 2 recorded');
})
const promise3 = new Promise((resolve, reject) => {
    resolve('Video 3 recorded');
})

Promise.all([promise1, promise2, promise3]).then((result)=>{
    console.log(result)
}).catch((error) => {
    console.log(error)
})*/

Promise.race([promise1, promise2, promise3]).then((result)=>{
    console.log(result)
}).catch((error) => {
    console.log(error)
})

