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

function incrementToLS(itemName, product) {
    const LS = getLS(itemName);
    const found = LS.find(item=>item.product_id === product.product_id);
    // if targeted product not in the list
    if (!found) {
        LS.push({product_id: product.product_id, quantity:1});
    } else {
        found.quantity++;
    }
    setLs(itemName, LS);
}

// reducing any specific items' quantity==>
function decrementLS(itemName, product) {
  const LS = getLS(itemName);
  const updatedItems = LS.map(item=>{
    if (item.product_id===product.product_id) {
        if (item.quantity>1) {
            return {...item , quantity: item.quantity-1}
        } else{
            return null;
        }
    }
    return item;
  }).filter(Boolean);

  setLs(itemName,updatedItems);
}

// clear any specific items fully===>
function removeLS(itemName, product) {
    const LS = getLS(itemName);
    const removeItem = LS.filter(idx=>idx.product_id!==product.product_id);
    setLs(itemName, removeItem);
}

// clear all saved data after purchasing done ===>

function clearLS(itemName) {
    localStorage.removeItem(itemName);
}
// only for wishlist ===>
function addToLS(itemName, product) {
    const LS = getLS(itemName);
    const found = LS.find(item=>item.product_id === product.product_id);

    if (!found) {
        LS.push({product_id: product.product_id});
        setLs(itemName, LS)
    }
}

export {getLS, incrementToLS, decrementLS, removeLS, clearLS, addToLS};




