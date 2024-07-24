import React from "react";
import { Box } from "@mui/material";

const FlexboxDemo = ()=>{
    return (
        <Box sx={{      
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            height:'100vh'
            }}>

                <Box sx={{width:100, height:100, bgcolor:'primary.main'}} >Caja 1</Box>
                <Box sx={{width:100, height:100, bgcolor:'secondary.main', mx:2}} >Caja 2</Box>
                <Box sx={{width:100, height:100, bgcolor:'error.main'}}   >Caja 3</Box>

        </Box>

    );
}

export default FlexboxDemo;