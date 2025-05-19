import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../hooks/useUser";
import { usePlans } from "../../hooks/usePlans";
import type { planType } from "../../types/planTypes";
import * as Component from "../../components";

export function Plans() {
    const navigate = useNavigate()
    const { filteredPlans, loadFilteredPlans } = usePlans()
    const {state : userState} = useUser()
    const [selectedDiscount, setSelectedDiscount] = useState<number | null>(null);
    const age = userState.yearsold;

    useEffect(() => {
        if (age && filteredPlans.length === 0) {
            loadFilteredPlans(age);
        }
    }, [age, loadFilteredPlans, filteredPlans]);

    const handleDiscountChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const discount = Number(e.target.value);
        setSelectedDiscount(discount);

        if (filteredPlans.length === 0) {
            await loadFilteredPlans(age);
        }
    };

    const getModifiedPlans = (): planType[] => {
        if (selectedDiscount === null) return [];
        
        return filteredPlans.map(plan => ({
            ...plan,
            price: selectedDiscount > 0 
                ? plan.price * (1 - selectedDiscount)
                : plan.price
        }));
    };    

    return (
        <div className="page-container">
            <section className="page-container__plans container">
                <div>
                    <button
                        onClick={() => { navigate(-1) }}
                    >Regresar</button>
                </div>

                <h2>{`${userState.name} ¿Para quién deseas cotizar?`}</h2>
                <p>Selecciona la opción que se ajuste más a tus necesidades</p>


                <div className="plans-radio">
                    <label>
                        <input 
                            type="radio" 
                            name="ageFilter"
                            value={0} 
                            onChange={handleDiscountChange}
                        />
                        Para Mi
                    </label>
                    
                    <label>
                        <input 
                            type="radio" 
                            name="ageFilter"
                            value={0.05} 
                            onChange={handleDiscountChange}
                        />
                        Para otra persona
                    </label>
                </div>

                {selectedDiscount !== null && (
                    <div>                
                        {getModifiedPlans().map((plan, index) => (
                            <Component.CartPlan
                                key={`${plan.name}-${index}`}
                                plan={plan}
                                index={index}
                            />
                        ))}
                    </div>
                )}
                </section>
        </div>
    )
}