
// initiate local storage ==>
const getLS =()=>{
    const LS = localStorage.getItem('product');
    return LS? JSON.parse(LS) : [];
}

// set local storage ==>
const setLS = item=>{
    localStorage.setItem('product', JSON.stringify(item));
}

// add local storage ==>

export {getLS , setLS};
