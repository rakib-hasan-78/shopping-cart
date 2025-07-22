// initializing LS 
function getLS(itemName) {
    const LS = localStorage.getItem(itemName);
    return LS ? JSON.parse(LS) : [];
}
// setting items 
function setLs(itemName, item) {
    localStorage.setItem(itemName, JSON.stringify(item))
}

// items to increase of any specific ==>

function incrementToLS(itemName, id) {
    const LS = getLS(itemName);
    const found = LS.find(ls=>ls.product_id===id);

    //  if items not in the list ===>
    if (!found) {
        LS.push({id: id, quantity: 1});
    } else {
        found.quantity++ ;
    }
    setLs(itemName, LS);
}
// reducing any specific items' quantity==>
function decrementLS(itemName, id) {
    const LS = getLS(itemName);
    LS.map(item=>item.product_id===id && item.quantity > 0 ? {...item , quantity: item.quantity - 1} : item).filter(item=>item.quantity>0);
    setLs(itemName, LS);
}
// clear any specific items fully===>
function removeLS(itemName, id) {
    const LS = getLS(itemName);
    const removeItem = LS.filter(idx=>idx!==id);
    setLs(itemName, removeItem);
}

// clear all saved data after purchasing done ===>

function clearLS(itemName) {
    
    localStorage.removeItem(itemName);
}
// only for wishlist ===>
function addToLS(itemName, id) {
    const LS = getLS(itemName);
    if (!(LS.includes(id))) {
        LS.push(id);
        setLs(itemName, LS)
    }
}

export {getLS, incrementToLS, decrementLS, removeLS, clearLS, addToLS};