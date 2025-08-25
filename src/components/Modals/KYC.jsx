import { useActionState, useContext, useState, useEffect } from "react";
import { ModalContext } from "../store/ModalContext";
import Modal from "../UI/Modal";
import { FaTimes, FaTrash } from "react-icons/fa";
import Input from "../UI/Input";
import { useNavigate } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";


export default function Kyc() {
    const navigate = useNavigate();
    const modalCtx = useContext(ModalContext);

    function handleCloseModal() {
        modalCtx.hideModal();
    }

    const [liveFormValues, setLiveFormValues] = useState({
        language: "",
        voiceActivation: "",
        role: "",
        tool: "",
        location: "",
        crop: ""
    });

    const [formComplete, setFormComplete] = useState(false);

    const handleChange = (e) => {
        setLiveFormValues({
            ...liveFormValues,
            [e.target.name]: e.target.value
        });
    };

    useEffect(() => {
        const { language, voiceActivation, role, tool, location, crop } = liveFormValues;
        const allFilled =
            language.trim() &&
            voiceActivation.trim() &&
            role.trim() &&
            tool.trim() &&
            location.trim() &&
            crop.trim();
        setFormComplete(Boolean(allFilled));
    }, [liveFormValues]);

    function validInput(prevFormState, formData) {
        setLiveFormValues({
            language: '',
            voiceActivation: '',
            role: '',
            tool: '',
            location: '',
            crop: ''
        });
        navigate('dashboard')
        modalCtx.hideModal()
        console.log('Form submitted with values:', liveFormValues);

        return { errors: null }; 
    }

    const [formState, formAction] = useActionState(validInput, { errors: null });

    const [crops, setCrops] = useState([""]);

    function handleCropChange (index, value) {
        const newCrops = [...crops];
        newCrops[index] = value;
        setCrops(newCrops);
        setLiveFormValues({
            ...liveFormValues,
            crop: newCrops.join(", ") 
        });
    };

    function addCropField ()  {
        setCrops([...crops, ""]);
    };

    function removeCropField(index) {
    const newCrops = crops.filter((_, i) => i !== index);
    setCrops(newCrops);

    setLiveFormValues(prev => ({
        ...prev,
        crop: newCrops.join(", ")
    }));
}



    return (
        <Modal
            open={modalCtx.modalType === 'kyc'}
            onClose={handleCloseModal}
        >
            <form action={formAction} className="lg:w-[572px] h-auto  rounded-[30px] p-[32px] flex-col gap-[64px]">

                <button
                    onClick={handleCloseModal}
                    className="absolute top-4 h-[34px] w-[34px] border-1 rounded-full right-4 text-xl pl-1.5 text-black hover:text-gray-600"
                >
                    <FaTimes />
                </button>

                <div className="lg:w-[504px] h-auto grid gap-[10px] font-[Poppins] font-[400]">

                    <div className="lg:w-[508px] h-auto  grid gap-[8px]">
                        <h1 className="text-[19.2px]">Language Preference</h1>

                        <div className="lg:w-[508px] h-auto  grid gap-[16px]">

                            <div className="lg:w-[508px] h-auto grid gap-[4px] relative">
                                <label htmlFor="language">In what language do you like to be communicated with?</label>
                                <select
                                    name="language"
                                    id="language"
                                    className={`lg:w-[485px] h-auto pl-  rounded-[4px] border-[1px] p-[16px] flex gap-[10px] appearance-none ${liveFormValues.language ? "text-black" : "text-gray-500"}`}
                                    value={liveFormValues.language}
                                    onChange={handleChange}
                                >
                                    <option value="" disabled>e.g, English</option>
                                    <option value="english">English</option>
                                    <option value="hausa">Hausa</option>
                                    <option value="igbo">Igbo</option>
                                    <option value="yoruba">Yoruba</option>
                                </select>

                                <FaChevronDown 
                                    className="absolute lg:right-16 right-6 lg:top-12 top-18  transform text-gray-500 pointer-events-none"
                                />
                            </div>

                            <div className="lg:w-[508px] h-auto  grid gap-[4px] relative">
                                <label htmlFor="voiceActivation">Would you like to enable voice activation?</label>
                                <select
                                    name="voiceActivation"
                                    id="voiceActivation"
                                    className={`lg:w-[485px] h-auto rounded-[4px] border-[1px] p-[16px] flex gap-[10px] appearance-none ${liveFormValues.language ? "text-black" : "text-gray-500"}`}
                                    value={liveFormValues.voiceActivation}
                                    onChange={handleChange}
                                >
                                    <option value="" disabled>Yes</option>
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                </select>

                                <FaChevronDown 
                                    className="absolute lg:right-16 right-6 lg:top-12 top-18  transform text-gray-500 pointer-events-none"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-[485px] h-auto  grid gap-[8px] relative">
                        <h1 className="text-[19.2px]">Function and equipment</h1>

                        <div className="lg:w-[485px] h-auto  grid gap-[16px]">

                            <div className="lg:w-[485px] h-auto  grid gap-[4px] relative">
                                <label htmlFor="role">What is your role for this Climate journey?</label>
                                <select
                                    name="role"
                                    id="role"
                                    className={`lg:w-[485px] h-auto rounded-[4px] border-[1px] p-[16px] flex gap-[10px] appearance-none ${liveFormValues.language ? "text-black" : "text-gray-500"}`}
                                    value={liveFormValues.role}
                                    onChange={handleChange}
                                >
                                    <option value="" disabled>e.g, Private farmer ...</option>
                                    <option value="commercial">Commercial farmer</option>
                                    <option value="private">Private farmer</option>
                                    <option value="seller">Seller</option>
                                </select>

                                <FaChevronDown 
                                    className="absolute lg:right-10 right-6 lg:top-12 top-18  transform text-gray-500 pointer-events-none"
                                />
                            </div>

                            <div className="lg:w-[485px] h-auto  grid gap-[4px]">
                                <Input
                                    label="Mention the tools you work with in general?"
                                    id="tool"
                                    name="tool"
                                    type="text"
                                    placeholder="e.g Cutlass, hoe, rake..."
                                    className="lg:w-[485px] h-auto lg:h-[52px] rounded-[4px] border-[1px] px-[16px] flex gap-[10px]"
                                    value={liveFormValues.tool}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-[485px] h-auto  grid gap-[8px]">

                        <div className="flex  justify-between ">
                        <h1 className="text-[19.2px]">Crop registration (1)</h1>

                        {/* Add More Button */}
                        <button
                            type="button"
                            onClick={addCropField}
                            className="text-black bg-[#FF8E28] hover:bg-[#c2610c] lg:pl-8 pl-4 w-[140px] h-[50px] rounded-xl mt-2 text-left"
                        >
                            Add More +
                        </button>
                        </div>

                        <div className="lg:w-[485px] h-auto  grid gap-[16px]">

                            <div className="lg:w-[485px] h-auto  grid gap-[4px]">
                                <label htmlFor="location">What is the specific location of your farm?</label>
                                <Input
                                    id="location"
                                    name="location"
                                    type="text"
                                    placeholder="e.g, Lagos, Nigeria"
                                    className="lg:w-[485px] h-auto lg:h-[52px] rounded-[4px] border-[1px] px-[16px] flex gap-[10px]"
                                    value={liveFormValues.location}
                                    onChange={handleChange}
                                />
                            </div>

                             {crops.map((cropValue, index) => (
                            <div key={index} className="lg:w-[485px] h-auto grid gap-[4px]">
                                <Input
                                    label={index === 0 ? "What crops is at the specific location mentioned above?" : ""}
                                    id={`crop-${index}`}
                                    name={`crop-${index}`}
                                    type="text"
                                    placeholder="e.g Rice, yam"
                                    className="lg:w-[485px] h-auto  rounded-[4px] border-[1px] px-[16px] flex gap-[10px]"
                                    value={cropValue}
                                    onChange={(e) => handleCropChange(index, e.target.value)}
                                />
                                {crops.length > 1 && (
                            <div className="flex justify-end mr-25  ">
                        <button
                            type="button"
                            onClick={() => removeCropField(index)}                     // <-- idx in scope
                            className="text-gray-500 cursor-pointer h-[100px] w-[100px] hover:text-black font-bold"
                        >
                            <div className="flex gap-8 w-[200px] h-[50px] py-3 px-8  hover:bg-red-600 ">Delete crop <FaTrash size={18} /> </div>
                        </button>
                        </div>
                        )}
                            </div>
                            
                        ))}

                        
                        

                        </div>
                    </div>
                </div>

                <button
                    disabled={!formComplete}
                    className={`lg:w-[485px] h-auto lg:h-[61px] mt-5  flex-col gap-[32px] font-[700] font-[Poppins] text-[19.2px] text-center transition-colors duration-200 ${formComplete ? "bg-[#FF8E28]" : "bg-[#FF8E2880]  cursor-not-allowed"} rounded-[8px] py-[8px] px-[16px]`}
                >
                    Continue
                </button>
            </form>
        </Modal>
    );
}
