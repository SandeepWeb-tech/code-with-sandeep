import Link from "next/link";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Applogo from "../../../public/eshopify.png";
import Image from "next/image";
import { Box, Button, TextField, Typography } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const Header = () => {
  return (
    <Box className="pl-3 pr-3 pt-1 pb-1 bg-slate-50 flex justify-between items-center sticky z-111111">
      <Box className="flex gap-5 justify-center items-center">
        <Image
          src={Applogo}
          alt="Logo"
          width={130}
          height={130}
          style={{ marginLeft: "-40px" }}
        />
        <TextField
          id="outlined-basic"
          label="Search Items"
          variant="outlined"
        />
      </Box>
      <Box className="flex justify-center items-center gap-4 ">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/services">Services</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/admin"><Button>Admin</Button></Link>
        <Link href="/">
          <Box className='relative'>
            <AddShoppingCartIcon fontSize="large" className="z-111" />
            <span className="absolute top-[-15px]  right-[-10px] bg-cyan-500 pl-1 z-110 pr-1 rounded-[50px]">1</span>
          </Box>
        </Link>
      </Box>
    </Box>
  );
};

export default Header;
