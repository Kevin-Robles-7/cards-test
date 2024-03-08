import React, { createContext, useContext, ReactNode } from "react";

// Crear contexto para la categoría seleccionada
const CategoryContext = createContext<string>("");

// Proveedor de contexto para la categoría
export const CategoryProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <CategoryContext.Provider value="">
            {children}
        </CategoryContext.Provider>
    );
};

// Hook para acceder a la categoría seleccionada
export const useCategory = () => useContext(CategoryContext);


