import { useEffect, useReducer } from "react"
import { placesReducer } from "./placesReducer"
import { PlacesContext } from "./PlacesContext"
import { getUserLocation } from "../../helpers"

    export interface PlacesState {
        isLoading: boolean;
        userLocation?: [number, number],
    }

    const INITIAL_STATE: PlacesState = {
        isLoading: true,
        userLocation: undefined
    }


    interface Props{
        children: JSX.Element | JSX.Element[]
    }

    export const PlacesProvider = ({ children }: Props) => {

        const [state, dispatch] = useReducer(placesReducer, INITIAL_STATE);

        useEffect(() =>{
            getUserLocation()
                .then( Lat => dispatch({type: 'setUserLocation', payload: Lat}) )
        }, []);


        return(
            <PlacesContext.Provider value={{
                ...state,
            }}>
                { children }
            </PlacesContext.Provider>
        )
    }