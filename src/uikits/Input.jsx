export function InpuType({label,type,name}){
return(
      <div className="inputType">
      <label htmlFor={name}> {label} </label>
      <input type={type} name={name} required />
      </div>
)
}
