import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import HistoryIcon from '@mui/icons-material/History'; // Import HistoryIcon from @mui/icons-material
import { useNavigate } from 'react-router-dom';
// import HomeIcon from '@material-ui/icons/Home';

const Sidebar = () => {
  const [state, setState] = React.useState({
    left: false,
  });
  const navigate= useNavigate()

  const handleClick=()=>{
    navigate("/table")
  }

  const handleClick1=()=>{
    navigate("/Pverifyy")
  }

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (


    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >


       <div className='shield-div' style={{textAlign:"center"}}>
                    <h1 className='shield' >
                        SHIELD
                    </h1>

                </div>
      <List>
        {/* Display the History option with the HistoryIcon */}

        <ListItem key="Home" disablePadding>
          <ListItemButton>
            <ListItemIcon>
              
            </ListItemIcon>
            <ListItemText primary="Home" onClick={() => navigate('/Pverifyy')} />
          </ListItemButton>
        </ListItem>
        <ListItem key="History" disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <HistoryIcon />
            </ListItemIcon>
            <ListItemText primary="Recent Search" onClick={handleClick} />
          </ListItemButton>
        </ListItem>

        <ListItem key="Home" disablePadding>
          <ListItemButton>
            <ListItemIcon>
              
            </ListItemIcon>
            <ListItemText primary="New" onClick={handleClick1} />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div>
      {/* Show only one MenuIcon */}
      <Button onClick={toggleDrawer('left', true)}><MenuIcon style={{height:"50px", color:'#fff'}} /></Button>
      <Drawer
        anchor="left"
        open={state.left}
        onClose={toggleDrawer('left', false)}
      >
        {list('left')}
      </Drawer>
    </div>
  );
}

export default Sidebar;
