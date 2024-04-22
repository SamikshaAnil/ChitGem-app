import axios from 'axios'
export const startGetShop = ()=>{
    return async (dispatch) => {
        try{
            const response = await axios.get('http://localhost:3009/api/shops',{
                headers : {
                  Authorization : localStorage.getItem('token')
                }
              })
              console.log(response.data)
        dispatch(setShops(response.data));
        }
        catch(err){
            console.log(err)
        }
    }
}

const setShops = (data)=>{
    return {
        type : 'SET_SHOP',
        payload : data

    }
}


export const startCreateShop = () => {
    return async (dispatch,formData) => {
        try{
            const response = await axios.post('http://localhost:3009/api/shops', formData,{
                    headers : {
                        Authorization : localStorage.getItem('token')
                    }
                });
                console.log(response.data);
                dispatch(createShop(response.data))
        }
        catch(err){
            console.log(err)
        }
    }
}

const createShop = (data) => {
    return {
        type : 'ADD_SHOP',
        payload : data
    }
}

export const startUpdateShop = (shopId,formData) => {
    return async (dispatch) => {
        try{
            const response = await axios.put(`http://localhost:3009/api/shops/${shopId}`, formData,{
                    headers : {
                        Authorization : localStorage.getItem('token')
                    }
                });
                console.log(response.data)
                dispatch(updateShop(response.data))
        }
        catch(err){
            console.log(err)
        }
        
    }
}

const updateShop = (shop) =>{
    return{
        type : 'UPDATE_SHOP',
        payload : shop
    }
}

export const startRemoveShop = (id) => {
    return async (dispatch) => {
        try{
            const response = await axios.delete(`http://localhost:3009/api/shops/${id}`,{
                    headers : {
                        Authorization : localStorage.getItem('token')
                    }
                });
                console.log(response.data)
                dispatch(removeShop(id))
        }
        catch(err){
            console.log(err)
        }
    }
}

const removeShop = (id) => {
    return {
        type : 'REMOVE_SHOP',
        payload : id
    }
}

export const setServerErrors = (errors) => {
    return {
        type: 'SET_SERVER_ERRORS',
        payload: errors
    };
};