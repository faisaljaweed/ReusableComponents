const Button=(props:any)=>{
    const {text,onClick,className}=props;
    return(
        <div>
            <button className={className} onClick={onClick}>{text}</button>
        </div>
    );
}
export default Button;