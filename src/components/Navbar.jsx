import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import {IoLogoYoutube } from 'react-icons/io'
import {BsList } from 'react-icons/bs'
import {CgProfile} from 'react-icons/cg'
import {BsBell} from 'react-icons/bs'
import {RiVideoAddLine} from 'react-icons/ri'
import {IoMdMic} from 'react-icons/io'
import SearchBar from './Search';


const Navbar = () => (
  <Stack direction="row" alignItems="center" p={2} sx={{ position:  "sticky", background: 'white', top: 0, justifyContent: "space-between" }}>
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <BsList size={32} style={{ color:"black", marginLeft:'1rem',marginRight:"1.5rem"}} className="nav-icons"/>
      <IoLogoYoutube size={32} style={{ color:"red"}} />
      <span style={{color:'black',marginLeft:'5px', fontWeight: 'bold',fontSize:'22px'}} className="nav-icons">YouTube</span>
    </Link>
    <div style={{display:'flex'}}>
    <SearchBar />
      <Link><IoMdMic  size={24} style={{marginTop:'10px'}} className="nav-icons"/></Link>

    </div>
    
    <Link style={{color:'black',display:'flex'}} className="nav-icons">
        <RiVideoAddLine size={28} />
        <BsBell size={28} style={{marginLeft:"1.5rem", marginRight:'1.5rem'}}/>
        <CgProfile size={28} style={{marginRight:"1.5rem"}}/> 
    </Link>
  </Stack>
);

export default Navbar;
