import {mocks} from './mock';
import camelize from 'camelize';
export const storesRequest = (location = "41.878113,-87.629799") => {
    return new Promise((resolve, reject) => {
        const mock = mocks[location];
        if(!mock){
            reject("not found");
        }
        resolve(mock);
    })
}

//Esta función formatea el resultado obtenido del fetch para que sea camel case.
export const storeTransform = ({results = []}) => {
    const mappedResults = results.map((store) => {
        return {
            ...store, //Se copian las propiedades de la tienda sobre la que se está iterando.
            isOpenNow: store.opening_hours && store.opening_hours.open_now, //Para verificar si la tienda está abierta.
            isClosedTemporarily: store.business_status === "CLOSED_TEMPORARILY"
        };
    });
    return camelize(mappedResults);
}