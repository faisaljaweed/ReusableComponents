const Input=(props:any)=>{
    const {placeholder,onChange ,value,className}=props;
    return(
        <div>
            <input type="text" placeholder={placeholder} onChange={onChange} value={value}className={className} />
        </div>
    );
}
export default Input;