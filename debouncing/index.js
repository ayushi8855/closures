const main=()=>{
    // fetch api
    console.log("fetch api")
}
const debounce=(func,delay)=>{
    let timer;
    return function(){
        clearTimeout(timer)
        timer = setTimeout(() => {
            // getData.apply(context, args)
            func()
        }, delay)
    }
}