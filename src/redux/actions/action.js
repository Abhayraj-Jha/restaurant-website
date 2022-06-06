export const addItem = (data)=> {
    return {
        type: "ADD",
        payload: data
    }
};

export const removeItem = (data)=> {
    return {
        type: "REMOVE",
        payload: data
    }
};

export const changeQty = (data)=> {
    return {
        type: "CHANGE",
        payload: data
    }
}