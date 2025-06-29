import { NavLink, useLocation } from "react-router-dom"

const links =({isActive})=>{
    const location = useLocation();

    return `${isActive ? 'underline underline-offset-4':''} ${location.pathname==='/'? 'text-project-white bg-project-violet':'text-project-black'}`
}
const navLinks = (
  <>
    <li>
      <NavLink className={links} to="/">Home</NavLink>
    </li>
    <li>
      <NavLink className={links} to="/statistics">Statistics</NavLink>
    </li>
    <li>
      <NavLink className={links} to="/dashboard">Dashboard</NavLink>
    </li>
  </>
);


export default navLinks;