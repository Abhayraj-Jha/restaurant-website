const initialState = [];

const handleCart = (state = initialState, action)=> {
    switch(action.type){
        case 'ADD':
            let result = state.find((elem)=> {
                return elem.id === action.payload.id
            })
            if(result === undefined){
                return [...state, action.payload]
            }
            else{
                return [...state]
            }

        case 'REMOVE':
            return state = state.filter((elem)=> {
                return elem.id !== action.payload
            })

        case 'CHANGE':
            let changedValue = state.map((elem)=> {
                if(elem.id === action.payload.id){
                    return {...elem, qty: action.payload.value, price: action.payload.value * action.payload.price}
                }
                return elem
            });
            return changedValue
        
        default: return state
    }
    
    
};

export default handleCart;