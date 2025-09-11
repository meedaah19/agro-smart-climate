import { useContext, useState, useEffect } from "react";
import { ModalContext } from "../store/ModalContext";
import Modal from "../UI/Modal";
import { FaTimes, FaTrash, FaChevronDown } from "react-icons/fa";
import Input from "../UI/Input";
import { useNavigate } from "react-router-dom";

export default function Kyc() {
  const navigate = useNavigate();
  const modalCtx = useContext(ModalContext);
  const [fetching, setFetching] = useState(false);

  function handleCloseModal() {
    modalCtx.hideModal();
  }

  const [crops, setCrops] = useState([""]);

  const [liveFormValues, setLiveFormValues] = useState({
    language: "",
    voice: "",
    role: "",
    tools: "",
    location: "",
    crops: ""
  });

  const [formComplete, setFormComplete] = useState(false);

  const handleChange = (e) => {
    setLiveFormValues({
      ...liveFormValues,
      [e.target.name]: e.target.value
    });
  };

  useEffect(() => {
    const { language, voice, role, tools, location } = liveFormValues;
    const allCropsFilled = crops.every((crop) => crop.trim());
    const allFilled =
      language.trim() &&
      voice.trim() &&
      role.trim() &&
      tools.trim() &&
      location.trim() &&
      allCropsFilled;

    setFormComplete(Boolean(allFilled));
  }, [liveFormValues, crops]);

   function validInput(e) {
    e.preventDefault();

      handleCloseModal();
      navigate("dashboard");

      setLiveFormValues({
        language: "",
        voice: "",
        role: "",
        tools: "",
        location: "",
        crops: ""
      });
      setCrops([""]);

      return { errors: null };
  }

  function handleCropChange(index, value) {
    const newCrops = [...crops];
    newCrops[index] = value;
    setCrops(newCrops);

    setLiveFormValues((prev) => ({
      ...prev,
      crops: newCrops.join(", ")
    }));
  }

  function addCropField() {
    setCrops([...crops, ""]);
  }

  function removeCropField(index) {
    const newCrops = crops.filter((_, i) => i !== index);
    setCrops(newCrops);

    setLiveFormValues((prev) => ({
      ...prev,
      crops: newCrops.join(", ")
    }));
  }

  return (
    <Modal open={modalCtx.modalType === "kyc"} onClose={handleCloseModal}>
      <form
        onSubmit={validInput}
        className="lg:w-[572px] h-auto rounded-[30px] p-[32px] flex-col gap-[64px]"
      >
        <button
          onClick={handleCloseModal}
          type="button"
          className="absolute top-4 h-[34px] w-[34px] border-1 rounded-full right-4 text-xl pl-1.5 text-black hover:text-gray-600"
        >
          <FaTimes />
        </button>

        <div className="lg:w-[504px] h-auto grid gap-[10px] font-[Poppins] font-[400]">
          <div className="lg:w-[508px] h-auto grid gap-[8px]">
            <h1 className="text-[19.2px]">Language Preference</h1>

            <div className="lg:w-[508px] h-auto grid gap-[16px]">
              <div className="lg:w-[508px] h-auto grid gap-[4px] relative">
                <label htmlFor="language">
                  In what language do you like to be communicated with?
                </label>
                <select
                  name="language"
                  id="language"
                  className={`lg:w-[485px] h-auto rounded-[4px] border-[1px] p-[16px] appearance-none ${
                    liveFormValues.language ? "text-black" : "text-gray-500"
                  }`}
                  value={liveFormValues.language}
                  onChange={handleChange}
                >
                  <option value="" disabled>
                    e.g, English
                  </option>
                  <option value="english">English</option>
                  <option value="hausa">Hausa</option>
                  <option value="igbo">Igbo</option>
                  <option value="yoruba">Yoruba</option>
                </select>
                <FaChevronDown className="absolute lg:right-16 right-6 lg:top-12 top-18 transform text-gray-500 pointer-events-none" />
              </div>

              <div className="lg:w-[508px] h-auto grid gap-[4px] relative">
                <label htmlFor="voice">
                  Would you like to enable voice activation?
                </label>
                <select
                  name="voice"
                  id="voice"
                  className={`lg:w-[485px] h-auto rounded-[4px] border-[1px] p-[16px] appearance-none ${
                    liveFormValues.voice ? "text-black" : "text-gray-500"
                  }`}
                  value={liveFormValues.voice}
                  onChange={handleChange}
                >
                  <option value="" disabled>
                    Choose...
                  </option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
                <FaChevronDown className="absolute lg:right-16 right-6 lg:top-12 top-18 transform text-gray-500 pointer-events-none" />
              </div>
            </div>
          </div>

          <div className="lg:w-[485px] h-auto grid gap-[8px] relative">
            <h1 className="text-[19.2px]">Function and equipment</h1>

            <div className="lg:w-[485px] h-auto grid gap-[16px]">
              <div className="lg:w-[485px] h-auto grid gap-[4px] relative">
                <label htmlFor="role">
                  What is your role for this Climate journey?
                </label>
                <select
                  name="role"
                  id="role"
                  className={`lg:w-[485px] h-auto rounded-[4px] border-[1px] p-[16px] appearance-none ${
                    liveFormValues.role ? "text-black" : "text-gray-500"
                  }`}
                  value={liveFormValues.role}
                  onChange={handleChange}
                >
                  <option value="" disabled>
                    e.g, Private farmer ...
                  </option>
                  <option value="commercial">Commercial farmer</option>
                  <option value="private">Private farmer</option>
                  <option value="seller">Seller</option>
                </select>
                <FaChevronDown className="absolute lg:right-10 right-6 lg:top-12 top-18 transform text-gray-500 pointer-events-none" />
              </div>

              <div className="lg:w-[485px] h-auto grid gap-[4px]">
                <Input
                  label="Mention the tools you work with in general?"
                  id="tools"
                  name="tools"
                  type="text"
                  placeholder="e.g Cutlass, hoe, rake..."
                  className="lg:w-[485px] h-auto lg:h-[52px] rounded-[4px] border-[1px] px-[16px]"
                  value={liveFormValues.tools}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          <div className="lg:w-[485px] h-auto grid gap-[8px]">
            <div className="flex justify-between">
              <h1 className="text-[19.2px]">Crop registration (1)</h1>

              <button
                type="button"
                onClick={addCropField}
                className="text-black bg-[#FF8E28] hover:bg-[#c2610c] px-4 w-[140px] h-[50px] rounded-xl mt-2"
              >
                Add More +
              </button>
            </div>

            <div className="lg:w-[485px] h-auto grid gap-[16px]">
              <div className="lg:w-[485px] h-auto grid gap-[4px]">
                <label htmlFor="location">
                  What is the specific location of your farm?
                </label>
                <Input
                  id="location"
                  name="location"
                  type="text"
                  placeholder="e.g, Lagos, Nigeria"
                  className="lg:w-[485px] h-auto lg:h-[52px] rounded-[4px] border-[1px] px-[16px]"
                  value={liveFormValues.location}
                  onChange={handleChange}
                />
              </div>

              {crops.map((cropValue, index) => (
                <div key={index} className="lg:w-[485px] h-auto grid gap-[4px]">
                  <Input
                    label={
                      index === 0
                        ? "What crops is at the specific location mentioned above?"
                        : ""
                    }
                    id={`crops-${index}`}
                    name={`crops-${index}`}
                    type="text"
                    placeholder="e.g Rice, yam"
                    className="lg:w-[485px] h-auto rounded-[4px] border-[1px] px-[16px]"
                    value={cropValue}
                    onChange={(e) => handleCropChange(index, e.target.value)}
                  />
                  {crops.length > 1 && (
                    <div className="flex justify-end">
                      <button
                        type="button"
                        onClick={() => removeCropField(index)}
                        className="flex items-center gap-2 text-black py-3 px-5 text-xl rounded bg-red-600 hover:bg-red-800 "
                      >
                        <FaTrash /> Delete
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <button
          disabled={!formComplete || fetching}
          type="submit"
          className={`lg:w-[485px] lg:h-[61px] mt-5 font-[700] font-[Poppins] text-[19.2px] text-center transition-colors duration-200 ${
            formComplete
              ? "bg-[#FF8E28] text-white"
              : "bg-[#FF8E2880] cursor-not-allowed text-gray-700"
          } rounded-[8px] py-[8px] px-[16px]`}
        >
          {fetching ? "Loading..." : "Continue"}
        </button>
      </form>
    </Modal>
  );
}
