import { useUser } from "../../hooks/useUser"
import { usePlans } from "../../hooks/usePlans"
import { useNavigate } from "react-router-dom";

export function Summary() {
     const navigate = useNavigate()
    const {state : userState} = useUser()
    const {namePlan, pricePlan} = usePlans()

    return (
        <div className="page-container">            
            <section className="page-container__plans container">
                <button
                    onClick={() => { navigate(-1) }}
                >Regresar</button>
                <h2>Resumen del Seguro</h2>
                <div>
                    <p>Precios Calculados Para:</p>
                    <p>{`${userState.name} ${userState.lastName}`}</p>
                    <p>Responsable de Pago:</p>
                    <p>{`${userState.documentType}: ${userState.documentNumber}`}</p>
                    <p>Celular: {userState.phoneNumber}</p>
                    <p>Plan Elegido</p>
                    <p>{namePlan}</p>
                    <p>{`Costo del Plan: $${pricePlan} al mes`}</p>
                </div>
            </section>
        </div>
    )
}