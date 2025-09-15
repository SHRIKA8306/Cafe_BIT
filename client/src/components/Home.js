import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import myImage from '../images/Banner1.png';
const drawerWidth = 240;
const navItems = ['Home', 'Orders', 'Cart', 'Signup'];

function Home(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [showSearch, setShowSearch] = React.useState(false);
const navigate = useNavigate();
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
const handleNavClick = (item) => {
    if (item === 'Signup') {
      navigate('/signup');
    } else if (item === 'Home') {
      navigate('/');
    }
  };
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography
        variant="h6"
        sx={{
          my: 2,
          fontWeight: 'bold',
          color: 'maroon',
          fontFamily: 'Poppins, sans-serif',
        }}
      >
         Cafe@BIT
      </Typography>
      <Divider />
      <TextField
        variant="outlined"
        size="small"
        placeholder="Search..."
        sx={{ m: 2, width: '85%' }}
      />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText
                primary={item}
                primaryTypographyProps={{
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '1rem',
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        component="nav"
        position="fixed"
        sx={{
          bgcolor: 'maroon',
          paddingY: 2,
          paddingX: 10,
          boxShadow: 3,
          fontFamily: 'Poppins, sans-serif',
        }}
      >
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          {/* Left side - Brand Name */}
          <Typography
            variant="h5"
            component="div"
            sx={{
              fontWeight: 'bold',
              letterSpacing: 1,
              fontFamily: 'Poppins, sans-serif',
              fontSize: '1.8rem',
            }}
          >
           Cafe@BIT
          </Typography>

          {/* Right side - Search + Links */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
            {/* Mobile menu icon */}
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerToggle}
              sx={{ display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>

            {/* Search toggle button */}
            {!showSearch && (
              <IconButton color="inherit" onClick={() => setShowSearch(true)}>
                <SearchIcon />
              </IconButton>
            )}

            {/* Search box appears on click */}
            {showSearch && (
              <TextField
                variant="outlined"
                size="small"
                placeholder="Search..."
                autoFocus
                onBlur={() => setShowSearch(false)}
                sx={{
                  display: { xs: 'none', sm: 'block' },
                  bgcolor: 'white',
                  borderRadius: 1,
                  width: 200,
                  fontFamily: 'Poppins, sans-serif',
                }}
              />
            )}

            {/* Nav links */}
            <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: 2 }}>
              {navItems.map((item) => (
                <Button
                  key={item}
                  sx={{
                    color: '#fff',
                    textTransform: 'none',
                    fontWeight: 600,
                    fontSize: '1rem',
                    fontFamily: 'Poppins, sans-serif',
                    px: 3,
                    py: 1.2,
                    borderRadius: 3,
                    transition: '0.3s',
                    '&:hover': {
                      bgcolor: '#800000',
                    },
                  }}  onClick={() => handleNavClick(item)}
                >
                  {item}
                </Button>
              ))}
            </Box>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Drawer for mobile */}
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
       <Box sx={{ width: "100%", mt: 10 }}>
      <img
        src={myImage}
        alt="banner"
        style={{
          width: "100%",
          height: "50vh",      
          objectFit: "cover",   
          display: "block"
        }}
      />
    </Box>
    </Box>
  );
}

Home.propTypes = {
  window: PropTypes.func,
};

export default Home;
