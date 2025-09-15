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
import { Link, useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import myImage from '../images/Banner1.png';
import myImage1 from '../images/veg.jpg';
import myImage2 from '../images/non-veg.jpg';
import myImage3 from '../images/juice.jpg';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
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
    if (item === 'Signup') navigate('/signup');
    else if (item === 'Home') navigate('/home');
     else if (item === 'Cart') navigate('/cart');
     else if (item === 'Orders') navigate('/orders');
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography
        variant="h6"
        sx={{ my: 2, fontWeight: 'bold', color: 'maroon', fontFamily: 'Poppins, sans-serif' }}
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
                primaryTypographyProps={{ fontFamily: 'Poppins, sans-serif', fontSize: '1rem' }}
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
      {/* AppBar */}
      <AppBar
        component="nav"
        position="fixed"
        sx={{ bgcolor: 'maroon', paddingY: 2, paddingX: 10, boxShadow: 3, fontFamily: 'Poppins, sans-serif' }}
      >
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography
            variant="h5"
            component="div"
            sx={{ fontWeight: 'bold', letterSpacing: 1, fontFamily: 'Poppins, sans-serif', fontSize: '1.8rem' }}
          >
            Cafe@BIT
          </Typography>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerToggle}
              sx={{ display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>

            {!showSearch && <IconButton color="inherit" onClick={() => setShowSearch(true)}><SearchIcon /></IconButton>}

            {showSearch && (
              <TextField
                variant="outlined"
                size="small"
                placeholder="Search..."
                autoFocus
                onBlur={() => setShowSearch(false)}
                sx={{ display: { xs: 'none', sm: 'block' }, bgcolor: 'white', borderRadius: 1, width: 200, fontFamily: 'Poppins, sans-serif' }}
              />
            )}

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
                    '&:hover': { bgcolor: '#800000' },
                  }}
                  onClick={() => handleNavClick(item)}
                >
                  {item}
                </Button>
              ))}
            </Box>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Drawer */}
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>

      {/* Banner */}
      <Box sx={{ width: '100%', mt: 15, px: 5 }}>
        <img
          src={myImage}
          alt="banner"
          style={{
            width: '100%',
            height: '50vh',
            objectFit: 'cover',
            display: 'block',
            borderRadius: '20px',
            boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)',
          }}
        />

        {/* Cards Section */}
        <Container sx={{ mt: 5 ,marginBottom:"20px"}}>
          <Grid container spacing={5} justifyContent="center">
            {/* Veg Card */}
            <Grid item xs={12} sm={6} md={3}>
              <Card
                sx={{
                  width: 250,
                  height: 300,
                  borderRadius: 3,
                  boxShadow: 3,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  '&:hover': { transform: 'scale(1.05)', boxShadow: '0 12px 30px rgba(0,0,0,0.3)' }
                }}
              >
                <CardMedia component="img" height="200" image={myImage1} alt="Veg" />
                <CardContent sx={{ flex: 1,display: 'flex',justifyContent: 'center',flexDirection: 'column',textAlign: 'center',backgroundColor:"#df9797ff"}}>
                  <Typography>Veg Items</Typography>
                <Link to='/veg'><Button variant='contained'style={{backgroundColor:"#800000",fontSize:"15px",borderRadius:"20px"}}>Explore <ArrowForwardIcon/></Button></Link>
                </CardContent>
              </Card>
            </Grid>

            {/* Non-Veg Card */}
            <Grid item xs={12} sm={6} md={3}>
              <Card
                sx={{
                  width: 250,
                  height: 300,
                  borderRadius: 3,
                  boxShadow: 3,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  '&:hover': { transform: 'scale(1.05)', boxShadow: '0 12px 30px rgba(0,0,0,0.3)' },
                }}
              >
                <CardMedia component="img" height="200" image={myImage2} alt="Non-Veg" />
                <CardContent sx={{ flex: 1,display: 'flex',flexDirection: 'column',justifyContent: 'center',textAlign: 'center',backgroundColor:"#df9797ff" }}>
                  <Typography>Non-Veg Items</Typography>
    <Link to='/non-veg'><Button variant='contained'style={{backgroundColor:"#800000",fontSize:"15px",borderRadius:"20px"}}>Explore <ArrowForwardIcon/></Button></Link>
                </CardContent>
              </Card>
            </Grid>

            {/* Juice Card */}
            <Grid item xs={12} sm={6} md={3}>
              <Card
                sx={{
                  width: 250,
                  height: 300,
                  borderRadius: 3,
                  boxShadow: 3,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  '&:hover': { transform: 'scale(1.05)', boxShadow: '0 12px 30px rgba(0,0,0,0.3)' },
                }}
              >
                <CardMedia component="img" height="200" image={myImage3} alt="Juice" />
                <CardContent sx={{ flex: 1,display: 'flex',flexDirection: 'column', justifyContent: 'center',textAlign: 'center',backgroundColor:"#df9797ff"}}>
                  <Typography>Juice Items</Typography> 
            <Link to='/juice'><Button variant='contained' style={{backgroundColor:"#800000",fontSize:"15px",borderRadius:"20px"}}>Explore<ArrowForwardIcon/></Button></Link>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}

Home.propTypes = {
  window: PropTypes.func,
};

export default Home;
