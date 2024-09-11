import React, { createContext, useContext, useState } from 'react';

export type ComponentType = 'navbar' | 'hero' | 'footer' | 'cta' | 'faq' | 'socialProofCompany' | 'features' | 'testimonials' | 'pricing' | 'SignIn' | 'SignUp' | 'VerifyEmailSent' | 'AccountVerified' | 'VerificationLinkExpired' | 'VerifyEmailCode' | 'ForgotPassword' | 'ResetEmailSent' | 'NewPassword' | 'PasswordChanged';

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
        pricing: 'Pricing 1',
        faq: 'faq 1',
        socialProofCompany: 'Social Proof Companies 1',
        features: 'Features 1',
        testimonials: 'Testimonials 1',
        SignIn: "SignIn 1",
        SignUp: "SignUp 1",
        VerifyEmailSent: "Verify Email Sent 1",
        AccountVerified: 'Account Verified 1',
        VerificationLinkExpired: 'Verification Link Expired 1',
        VerifyEmailCode: 'Verify Email Code 1',
        ForgotPassword: 'Forgot Password 1',
        ResetEmailSent: 'Reset Email Sent 1',
        NewPassword: 'New Password 1',
        PasswordChanged: 'Password Changed 1'
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
