const callReq = (url) => {

    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();

        request.addEventListener('readystatechange', () => {
            if(request.readyState === 4 && request.status === 200) {
               resolve(JSON.parse(request.responseText))
            }
            else if(request.readyState === 4) {
                reject('err here');
            }
        })
        request.open('GET',url );
        request.send();
    })
}





// callReq('json/sample1.json')
// .then(response => {
//     console.log(response)
//     return callReq('json/sample2.json');
// })
// .then(response => {
//     console.log(response)
//     return callReq('json/sample3.json');
// })
// .then(response => {
//     console.log(response)
// })
// .catch(err => {console.log(err)})



// fetch('json/sample1.json')
// .then(response => {
//     return response.json();
// })
// .then(data => console.log(data))
// .catch(err => {
//     console.log(err)
// })

const callRequest = async () => {
    let response = await fetch('json/sample11.json')
    if (response.status !== 200) {
        throw new Error('cannot fetch sample')
    }
    let data = await response.json();
    return data;
}

console.log(1)
console.log(2)
callRequest()
.then(response => console.log(response))
.catch(err => console.log(err))

console.log(3)
console.log(4)