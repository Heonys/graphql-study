import { Coords } from '@/components/Keypad';
import { Dispatch, SetStateAction, createContext, useContext, useState } from 'react';

type ContextType = {
  password: Coords[];
  confirmPassword: Coords[];
  setPassword: Dispatch<SetStateAction<Coords[]>>;
  setConfirmPassword: Dispatch<SetStateAction<Coords[]>>;
};

const FormContext = createContext<ContextType>({
  password: [],
  confirmPassword: [],
  setPassword: () => {},
  setConfirmPassword: () => {},
});
FormContext.displayName = 'FormContext';

export const useForm = () => {
  const [password, setPassword] = useState<Coords[]>([]);
  const [confirmPassword, setConfirmPassword] = useState<Coords[]>([]);

  return {
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
  };
};

export const FormProvider = ({ children }: React.PropsWithChildren) => {
  const context = useForm();

  return <FormContext.Provider value={context}>{children}</FormContext.Provider>;
};

export const useFormValue = () => {
  return useContext(FormContext);
};
