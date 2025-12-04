import Link from "next/link";
import FavoriteIcon from '@mui/icons-material/Favorite';


const Header = () => {
  return (
      <div
        style={{
          padding: "0.8rem",
          background: "#f4f4f4",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          position: "sticky",
          top: '0px'
        }}
      >
        <h1 style={{ fontSize: "1.8rem" }}>Blog</h1>
        <nav>
          <ul style={{ display: "flex", gap: "1rem", listStyle: "none" }}>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/services">Services</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            <li>
              <Link href="/addBlog">Add Blog</Link>
            </li>
            <li>
                <Link href="/"><FavoriteIcon/></Link>
            </li>
          </ul>
        </nav>
      </div>
  );
};

export default Header; 
  