import React, { createContext, useContext, useState } from 'react';

export type ComponentType = 'navbar' | 'hero' | 'footer' | 'cta' | 'faq';

export type ComponentContextType = {
    selectedComponents: Record<ComponentType, string>;
    setComponentVariation: (type: ComponentType, variation: string) => void;
};

const ComponentContext = createContext<ComponentContextType | undefined>(undefined);

export const ComponentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [selectedComponents, setSelectedComponents] = useState<Record<ComponentType, string>>({
        navbar: 'Navigation Bar 1',
        hero: 'Hero Section 1',
        footer: 'Footer 1',
        cta: 'CTA 1',
        faq: 'FAQ 1'
    });

    const setComponentVariation = (type: ComponentType, variation: string) => {
        setSelectedComponents(prevState => ({
            ...prevState,
            [type]: variation,
        }));
    };

    return (
        <ComponentContext.Provider value={{ selectedComponents, setComponentVariation }}>
            {children}
        </ComponentContext.Provider>
    );
};

export const useComponentContext = () => {
    const context = useContext(ComponentContext);
    if (!context) {
        throw new Error('useComponentContext must be used within a ComponentProvider');
    }
    return context;
};
