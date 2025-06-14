// const  CodeforInterview= () => {
//     return(
//         <p> Hello from  CodeforInterview </p>
//     )
// }

// export default CodeforInterview;

import React from "react";
import { styled, Button } from "@mui/material";
import "./CodeforInterview.css";

const Container = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: rgb(18, 162, 224);
  color: #fff;
  font-family: "Poppins", sans-serif;
  text-align: center;
  padding: 20px;
`;

const Heading = styled("h1")`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 1rem;
  animation: fadeIn 2s ease-in-out;
`;

const SubHeading = styled("p")`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  animation: fadeIn 2s ease-in-out 0.5s;
`;

const StyledButton = styled(Button)`
  background-color: #fff;
  color: #6a11cb;
  font-weight: bold;
  padding: 10px 20px;
  &:hover {
    background-color: #f8f9fa;
    transform: scale(1.1);
  }
  transition: all 0.3s ease;
`;

const CodeForInterview = () => {
  return (
    <Container>
      <Heading>Hello Developers</Heading>
      <SubHeading>Prepare, Practice, and Ace Your Interviews</SubHeading>
      <StyledButton variant="contained">Get Started</StyledButton>
    </Container>
  );
};

export default CodeForInterview  ;
