import {createContext, ReactNode, useContext, useState} from "react";

interface OtpContextProps {
    otpAction: string | null;
    setOtpAction: (action: string) => void;
}

const OtpContext = createContext<OtpContextProps | undefined>(undefined);

export const OtpProvider = ({ children }: { children: ReactNode }) => {
    const [otpAction, setOtpAction] = useState<string | null>(null);

    return (
        <OtpContext.Provider value={{ otpAction, setOtpAction }}>
            {children}
        </OtpContext.Provider>
    );
};

export const useOtp = () => {
    const context = useContext(OtpContext);
    if (!context) {
        throw new Error('useOtp must be used within an OtpProvider');
    }
    return context;
};