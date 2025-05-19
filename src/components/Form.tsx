import { useState, useCallback, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useUser } from "../hooks/useUser"

type DocumentType = 'DNI' | 'RUC';

interface LoginState {
  documentType: DocumentType;
  documentNumber: string;
  phoneNumber: string;
  privacy: boolean;
  comunication: boolean;
}

interface ErrorState {
  document?: string;
  phone?: string;
  checkboxes?: string;
}

const DOCUMENT_LENGTHS: Record<DocumentType, number> = {
  DNI: 8,
  RUC: 11
};

const PHONE_LENGTH = 10;

const initialLoginState: LoginState = {
  documentType: 'DNI',
  documentNumber: '',
  phoneNumber: '',
  privacy: false,
  comunication: false
};

export function Form(){
    
  const navigate = useNavigate();
  const [login, setLogin] = useState<LoginState>(initialLoginState);
  const [errors, setErrors] = useState<ErrorState>({});
  const { state } = useUser();

  
  const validateDocument = useCallback((value: string, type: DocumentType): boolean => {
    const requiredLength = DOCUMENT_LENGTHS[type];
    const isValid = value.length === requiredLength;
    
    setErrors(prev => ({
      ...prev,
      document: isValid ? undefined : `*El documento ingresado no es válido`
    }));
    
    return isValid;
  }, []);

  const validatePhone = useCallback((value: string): boolean => {
    const isValid = value.length === PHONE_LENGTH;
    
    setErrors(prev => ({
      ...prev,
      phone: isValid ? undefined : `*El celular ingresado no es válido`
    }));
    
    return isValid;
  }, []);

  const validateCheckboxes = useCallback((privacy: boolean, comunication: boolean): boolean => {
    const isValid = privacy && comunication;
    
    setErrors(prev => ({
      ...prev,
      checkboxes: isValid ? undefined : 'Debe aceptar los términos y condiciones'
    }));
    
    return isValid;
  }, []);

  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const newValue = type !== 'checkbox' ? value : '' ;

    setLogin(prev => {
      const newState = { ...prev, [name]: type === 'checkbox' ? e.target.checked : newValue };      
      
      if (name === 'documentNumber') {
        validateDocument(newValue, prev.documentType);
      }
      if (name === 'documentType') {
        validateDocument(prev.documentNumber, newValue as DocumentType);
      }     
      return newState;
    });
  };
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const isDocumentValid = validateDocument(login.documentNumber, login.documentType);
    const isPhoneValid = validatePhone(login.phoneNumber);
    const areCheckboxesValid = validateCheckboxes(login.privacy, login.comunication);

    if (!isDocumentValid || !isPhoneValid || !areCheckboxesValid){
        console.log('Error en el formulario');
        return;
    }

    if (login.phoneNumber !== state.phoneNumber || login.documentNumber !== state.documentNumber) {
      setErrors(prev => ({ ...prev, phone: 'El usuario ingresado no existe' }));
      return;
    }

    setLogin(initialLoginState);
    setErrors({});
    navigate('/plans');
  };

  useEffect(() => {
    if(login.documentNumber.length){
        validateDocument(login.documentNumber, login.documentType);
    }    
  }, [login.documentType, login.documentNumber, validateDocument]);    

    return (
        <form
            onSubmit={handleSubmit}
        >
            
            <div>
                <select
                    name="documentType"
                    id="documentType"
                    value={login.documentType}
                    onChange={handleChange}   
                >
                    <option value="DNI">DNI</option>
                    <option value="RUC">RUC</option>
                </select>
                <div>
                    <label>DNI</label>
                    <input
                        type="text"
                        id="documentNumber"
                        name="documentNumber"
                        placeholder="dni"
                        value={login.documentNumber}
                        onChange={handleChange}
                        maxLength={DOCUMENT_LENGTHS[login.documentType]}

                    />
                </div>
            </div>
            {errors.document && <p>{errors.document}</p>}

            <div>
                <label>Celular</label>
                <input
                    type="text"
                    id="phoneNumber"
                    name="phoneNumber"
                    placeholder="celular"
                    value={login.phoneNumber}
                    onChange={handleChange}
                    maxLength={PHONE_LENGTH}
                />
            </div>
            {errors.phone && <p>{errors.phone}</p>}

            <div>
                <input
                    type="checkbox"
                    name="privacy"
                    id="privacy"
                    checked={login.privacy}
                    onChange={handleChange}
                />
                <label>Privacidad</label>
            </div>
            <div>
                <input
                    type="checkbox"
                    name="comunication"
                    id="comunication"
                    checked={login.comunication}
                    onChange={handleChange}
                />
                <label>Privacidad</label>
            </div>

            <input
                type="submit"
                value="Cotizar Aqui"
            />
        </form>
    )
}