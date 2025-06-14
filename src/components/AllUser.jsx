import { useEffect, useState } from "react";
import { Table,TableHead, TableBody, TableRow, TableCell,  styled, Button} from "@mui/material";
 
import { getUsers, deleteUser } from "../service/api";
import { Link } from "react-router-dom";


const sytledTable =styled(Table)`
  width: 90%;
  margin: 0 auto;
  display: block;
  table-layout: fixed;
 
`;

const Thead = styled(TableRow)`
background: #000;
& > th {
   color: #fff;
   font-size: 20px;
   padding: 12px 20px;
   
}
`;

const TBody = styled(TableRow)`

& > td {

   font-size: 20px;
   padding: 12px 20px;
  
}
`;

const Container = styled("div")`
  margin: 30px auto; /* Adjusts space above the table */
  padding: 20px; /* Optional padding around the content */
  text-align: center;
`;


const  AllUser= () => {

    const[users, setUser]=useState([]);

    useEffect (() => {
        getUserDetails();
    },[])


   const getUserDetails = async () => {
      try {
          let response = await getUsers();
          if (response && response.data) {
              setUser(response.data);
          } else {
              console.error('Unexpected response:', response);
              setUser([]); // Set to empty if response is invalid
          }
      } catch (error) {
          console.error('Error in getUserDetails:', error);
      }
  }

  const deleteUserData = async (id) => {
   await deleteUser(id);
   getUserDetails();

  };
  
    return(
      <Container>
         <styledTable> 
         <TableHead>
            <Thead>
                <TableCell>ID</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Username</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Phone</TableCell>
                <TableCell></TableCell>
            </Thead>

         </TableHead>
         <TableBody>
            {
                users.map( user => (
                   <TBody >
                    <TableCell>{user.id}</TableCell>
                    <TableCell>{user.name}</TableCell>
                    <TableCell>{user.username}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>{user.phone}</TableCell>
                    <TableCell>
                        <Button variant="contained" style={{marginRight: 10}} component={Link} to={`/edit/${user.id}`}                        >Edit</Button>
                        <Button variant="contained" color="secondary" onClick={() => deleteUserData(user.id)} > Delete </Button>
                    </TableCell>
                  
                   </TBody > 
                ))
            }
            
         </TableBody>
       </styledTable>
      </Container>
 
    )
}

export default AllUser;