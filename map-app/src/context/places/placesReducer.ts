import { PlacesState } from "./PlacesProvider";


type PlacesAction = { type: 'serUserLocation', payload: [number, number]};

export const placesReducer = (state: PlacesState, action: PlacesAction): PlacesState => {

    switch (action.type) {
        case 'serUserLocation':
            return {
                ...state,
                isLoading: false,
                userLocation: action.payload
            }
            default:
                return state;
    }
}