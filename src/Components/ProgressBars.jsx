
const ProgressBars=({bgcolor,completed})=> {
   const containerstyle={
    height:25,
    backgroundColor:"#e0e0de",
    borderRadius:50,
    margin:50,
    width:"100%"
   }
   const fillerstyle={
    backgroundColor:bgcolor,
    height:"100%",
    width:`${completed}%`,
    borderRadius:"inherit",
    textAlign:"right",
    transition:"width 1s ease-in-out"
   }
   const labelstyles={
    padding:15,
    margin:10 ,
    color:"#fff",
    fontWeight:"bold"
   }
  return (
    <div style={containerstyle}>
        <div style={fillerstyle}>

        <span style={labelstyles}>{`${completed}%`}
            </span></div></div>
  )
}

export default ProgressBars