import { useState ,useEffect } from "react";
import { useNavigate ,useParams } from "react-router-dom";
import { getUser ,editUser } from "../services/api";


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


const EditUsers = () => {
  const [user, setUser] = useState(initilvalue);

  const navigate =useNavigate();

  const {id} = useParams() ;

  useEffect(()=>{
    getUserData();
  },[]) ;

  const getUserData =async()=>{
    let response = await getUser(id) ;
    setUser(response.data) ;
    console.log(response);
  }

  const onchangeValue = (e) => {
    setUser({ ...user, [e.target.name] : e.target.value });
    //  console.log(user);
  };

  const addUserDetails =async()=>{
     await editUser(user,id) ;
     navigate("/all") ;
  }
  return (
    <Container>
      <Typography variant="h4">Edit User</Typography>
      <FormControl>
        <InputLabel>Name</InputLabel>
        <Input
          onChange={(event) => {
            onchangeValue(event)
          }}
          name="name"
          value={user.name}
        />
      </FormControl>
      <FormControl>
        <InputLabel>Username</InputLabel>
        <Input
          onChange={(event) => {
            onchangeValue(event);
          }}
          name="username"
          value={user.username}
        />
      </FormControl>
      <FormControl>
        <InputLabel>Email</InputLabel>
        <Input
          onChange={(event) => {
            onchangeValue(event);
          }}
          name="email"
          value={user.email}
        />
      </FormControl>
      <FormControl>
        <InputLabel>Phone</InputLabel>
        <Input
          onChange={(event) => {
            onchangeValue(event);
          }}
          name="phone"
          value={user.phone}
        />
      </FormControl>
      <FormControl>
        <Button variant="contained" onClick={()=>addUserDetails()}>Edit User</Button>
      </FormControl>
    </Container>
  );
};

export default EditUsers;
