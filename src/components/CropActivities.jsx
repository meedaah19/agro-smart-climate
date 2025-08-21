import Activities from "./UI/Activities";
import riceImage from '../assets/rice.jpg';
import yamImage from '../assets/yam.jpg';
import cucumber from '../assets/cucumber.jpg';
import cassava from '../assets/cassava.jpg';

export default function CropActivities(){
    return(
         <div className="lg:w-[1020px] w-full h-auto lg:h-[400px] overflow-y overflow-x-auto ">
            <h5 className="font-[Poppins] text-[23.04px] font-[400]"
            >Crop Activities</h5>

            <div className="lg:w-[1020px] w-full h-auto py-[16px] flex lg:flex-row flex-col gap-[32px] lg:h-[450px]  ">

                <Activities 
                period='Planting Period' 
                image={riceImage}
                alt='rice image'
                location='Ishiagu Amaeze Amaelzu, Ebonyi state.' 
                list1='Prepare land: Clear and till the soil with tractor.'
                list2='Soak the seeds: Soak rice seeds in water for 24-48 hours.'
                list3='Pre-germinate: Drain and leave seeds to sprout for 1-2 days.'
                list4='Plant seeds: Transplant into soil.'
                list5='Water regularly: Keep the field flooded or wet with the help of rain water. '
                />
                <Activities period='Caregiving & Vine Support period' 
                image={yamImage} 
                alt='yam image' 
                location='Izza, Ebonyi state.' 
                list1=' Weed: Use hoe or hand (avoid damaging yam mounds).'
                list2='Stake Vines: Support with strong sticks.'
                list3='Fix Mounds: Use hoe to reshape broken mounds.'
                list4='Pest Control: Spray neem or pesticide if needed.'
                list5='Optional Mulching: Add dry grass to keep moisture. '
                /> 
                <Activities period='Active Growth & Pest Care period' 
                image={cucumber} 
                alt='cucumber image' 
                location='Rivers state, Idemini.' 
                list1='Weed: Use hand or small hoe carefully.'
                list2='Support Vines: Use sticks and ropes to lift.'
                list3='Spray for Pests: Neem or organic pesticide.'
                list4='Fertilize: Apply NPK or compost near root.'
                list5='Prune Old Leaves: Use scissors to cut yellow leaves. '
                />
                <Activities period='Caregiving & Weeding period' 
                image={cassava} 
                alt='cassava image' 
                location='Epe, Lagos, state.' 
                list1='Weed: Use hoe or cutlass to clear weeds.'
                list2='Improve Drainage: Use hoe to dig channels and prevent waterlogging.'
                list3='Fertilize: Apply NPK or compost by hand.'
                list4='Check for Pests: Inspect leaves, spray neem or pesticide.'
                list5='Maintain Ridges: Rebuild washed-off ridges with hoe.'
                />
            </div>
         </div>
    )
}