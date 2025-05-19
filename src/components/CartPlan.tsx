import type { planType } from "../types/planTypes"
import { usePlans } from "../hooks/usePlans"
import { useNavigate } from "react-router-dom"

type CartPlanProps = {
    plan : planType
    index : number
}

export function CartPlan({plan, index} : CartPlanProps) {

    const { dispatch } = usePlans()
    const navigate = useNavigate();

    const handleClick = () => {
        dispatch({type: 'set-plan-selected', payload: {name: plan.name, price: plan.price}})
        navigate('/summary');
    }

    return (
        <div>
            {index === 1 && <p>PLAN RECOMENDADO</p>}
            <h3>{plan.name}</h3>
            <p>Costo del Plan</p>
            <p>{`$ ${plan.price}`}</p>
            <p>{plan.description}</p>
            <button
                onClick={handleClick}
            >Comprar</button>
        </div>
    )
}