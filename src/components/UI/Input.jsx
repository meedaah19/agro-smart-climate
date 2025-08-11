export default function Input({label, id, type, img, placeholder}){
    return(
        <p >
        <label htmlFor={id}>{label}</label>
        <input className="lg:w-[485px] lg:h-[48px] rounded-[4px] border-[1px] lg:pt-0 lg:mt-0 pt-3 mt-3  " type={type} name={id} required placeholder={placeholder} />
        </p>
    )
}