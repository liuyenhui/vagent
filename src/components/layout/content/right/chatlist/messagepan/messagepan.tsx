import { Sheet } from "@mui/joy";

export default function MessagePan(props:any){
    const {children} = props
    return(
        <Sheet variant="outlined" color="neutral" sx={{ height:"100px",p: 4 }}>
            {children}
        </Sheet>
    )
}