import React, {createContext, useReducer} from "react";
import { OriginReducer,DestinationReducer } from "../reducers/reducer";

export const OriginContext = createContext()
export const DestinationContext = createContext()

export const OriginProvider = (props)=>{
    const [origin, dispatchOrigin] = useReducer(OriginReducer, {
        latitude : null,
        longitude : null,
        address : '',
        name : '' 
    })
    return(
        <OriginContext.Provider value={{origin, dispatchOrigin}}>
            {props.children}
        </OriginContext.Provider>
    )
}

export const DestinationProvider = (props)=>{
    const[destination,dispatchDestination] =useReducer(DestinationReducer,{
                latitude:null,
                longitude:null,
                address:"",
                name:""
    })
    return(
        <DestinationContext.Provider
                value ={{destination,dispatchDestination}}
            >
            {props.children}
        </DestinationContext.Provider>
    )
}