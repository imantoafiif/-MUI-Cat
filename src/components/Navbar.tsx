import { AppBar, SvgIconTypeMap }  from '@mui/material'
import Toolbar from '@mui/material/Toolbar'
import PetsIcon from '@mui/icons-material/Pets';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Button from '@mui/material/Button';

interface props {
    title: string,
    icon?: SvgIconTypeMap
}

const Navbar = ({ title }: props) => {

    return (
        <AppBar position='sticky'>
            <Toolbar>  
                <PetsIcon sx={{ mr: 2, ml: 2}}/>
                <Typography variant="h6" color="inherit" noWrap>
                    { title }
                </Typography>
            </Toolbar>
        </AppBar>
    )

}

export default Navbar