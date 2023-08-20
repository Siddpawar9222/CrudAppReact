import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addUser } from "../services/api";

import {
  FormControl,
  FormGroup,
  InputLabel,
  Input,
  Typography,
  Button,
  styled,
} from "@mui/material";
import React from "react";

const Container = styled(FormGroup)`
  width: 50%;
  margin: 5% auto 0 auto;
  & > div {
    margin-top: 20px;
  }
`;
const initilvalue = {
  name: "",
  username: "",
  email: "",
  phone: " ",
};


const AddUsers = () => {
  const [user, setUser] = useState(initilvalue);

  const navigate =useNavigate();

  const onchangeValue = (e) => {

          setUser({ ...user, [e.target.name] : e.target.value });
    
  };

  const addUserDetails =async()=>{
    if (user.name.trim() === "" || user.username.trim() === "" || user.email.trim() === "" || user.phone.trim() === "") {
        alert("Please fill in all the fields");
        return;
      }
     await addUser(user) ;
     navigate("/all") ;
  }
  return (
    <Container>
      <Typography variant="h4">Add User</Typography>
      <FormControl>
        <InputLabel>Name</InputLabel>
        <Input
          onChange={(event) => {
            onchangeValue(event);
          }}
          name="name"
        />
      </FormControl>
      <FormControl>
        <InputLabel>Username</InputLabel>
        <Input
          onChange={(event) => {
            onchangeValue(event);
          }}
          name="username"
        />
      </FormControl>
      <FormControl>
        <InputLabel>Email</InputLabel>
        <Input
          onChange={(event) => {
            onchangeValue(event);
          }}
          name="email"
        />
      </FormControl>
      <FormControl>
        <InputLabel>Phone</InputLabel>
        <Input
          onChange={(event) => {
            onchangeValue(event);
          }}
          name="phone"
        />
      </FormControl>
      <FormControl>
        <Button variant="contained" onClick={()=>addUserDetails()}>Add User</Button>
      </FormControl>
    </Container>
  );
};

export default AddUsers;
