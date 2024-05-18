const Table=(props:any)=>{
    const {add}=props
    return(
        <div>
            <table className="  w-full ">
                <thead className="flex gap-10 border  bg-[#03A9F4] p-3">
                    <tr className="pl-3 text-white text-2xl font-bold">ID</tr>
                    <tr className="text-white text-2xl font-bold" >Value</tr>
                </thead>
                <tbody >
                    {add.map((item:any,index:any)=>{
                        return(
                        <tr key={index} className="flex gap-7 border   mt-3 bg-[#03A9F4] p-3 ">
                            <tr className="pl-3 text-white text-2xl font-bold">{index+1}</tr>
                            <tr className="text-white text-[1.2rem] font-semibold" >{item}</tr>
                        </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}
export default Table;