import  { Icon } from '@iconify/react'
import { Box, BoxProps } from "@mui/material";
import { forwardRef } from "react";

interface Props extends BoxProps {
    icon: string
}

const Iconify = forwardRef<SVGAElement, Props>(({icon, width = 20, sx, ...other}, ref) => (
    <Box
    ref={ref}
    component={Icon}
    className="component-iconify"
    icon={icon}
    sx={{width, height: width, ...sx}}
    {...other}
    />
));

export default Iconify
