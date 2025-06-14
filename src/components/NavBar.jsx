// import {AppBar , Toolbar, Typography, styled} from '@mui/material';

// import { NavLink } from 'react-router-dom';

// const Header =   styled(AppBar)`
// background: linear-gradient(135deg, #6a11cb, #2575fc);
// padding-bottom: 10px;
// `

// const Tabs= styled(NavLink)`
// font-size: 25px;
// margin-right: 35px;
// color: inherit;
// text-decoration: none 

// `


// const NavBar=() => {
//     return(
//         <Header position='static'>  
//             <Toolbar>
//             <Tabs to = "/">Code For Interview </Tabs>
//               <Tabs to = "/all">All Users</Tabs>
//               <Tabs to = "/add">Add Users</Tabs>
//             </Toolbar>
//         </Header>
       
//     )
// }
// export default NavBar; 

import { AppBar, Toolbar, styled } from '@mui/material';
import { NavLink } from 'react-router-dom';

const Header = styled(AppBar)`
  background: linear-gradient(135deg, #6a11cb, #2575fc);
  padding-bottom: 10px;
`;

const MainTab = styled(NavLink)`
  font-size: 25px;
  margin-right: 35px;
  color: inherit;
  text-decoration: none;
`;

const SmallTab = styled(NavLink)`
  font-size: 15px; /* Half the size of MainTab */
  margin-right: 35px;
  color: inherit;
  text-decoration: none;
`;

const NavBar = () => {
  return (
    <Header position="static">
      <Toolbar>
        <MainTab to="/">Code For Interview</MainTab>
        <SmallTab to="/all">All Users</SmallTab>
        <SmallTab to="/add">Add Users</SmallTab>
      </Toolbar>
    </Header>
  );
};

export default NavBar;
