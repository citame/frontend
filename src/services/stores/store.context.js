import {mocks} from './mock';
export const storesRequest = (location = "41.878113,-87.629799") => {
    return new Promise((resolve, reject) => {
        const mock = mocks[location];
        if(!mock){
            reject("not found");
        }
        resolve(mock);
    })
}
storesRequest().then((result) => {
    console.log(result);
}).catch((err) => {
    console.log("error")
});