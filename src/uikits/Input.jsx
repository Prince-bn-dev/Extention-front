export function InpuType({label,type,name,placeholder,onChange,value }){
return(
      <div className="inputType">
      <label htmlFor={name}> {label} </label>
      <input type={type} name={name} placeholder={placeholder} onChange={onChange} value={value} required />
      </div>
)
}
