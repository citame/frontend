import React, { useState, createContext, useEffect, useMemo } from 'react';

import { storesRequest, storeTransform } from './store.service';

export const StoresContext = createContext();

export const StoresContexProvider = ({children}) => {
    return (
        <StoresContext.Provider 
            value={{
                stores: [1,2,3],
            }}
        >
            {children}    
        </StoresContext.Provider>
    )
}