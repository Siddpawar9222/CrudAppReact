import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  styled,
  Button,
} from "@mui/material";
import TableContainer from "@mui/material/TableContainer";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useEffect, useState } from "react";
import { getUsers, deleteUser } from "../services/api";
import { Link } from "react-router-dom";

const StyledTable = styled(Table)`
  width: 90%;
  margin: 50px auto 0 auto;
`;

const Thead = styled(TableRow)`
  background: #000;
  & > th {
    color: white;
    font-size: 20px;
    text-align: center;
  }
`;
const TBody = styled(TableRow)`
  & > td {
    font-size: 20px;
    text-align: center;
  }
`;
const AllUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUserDratails();
  }, []);

  const getUserDratails = async () => {
    let response = await getUsers();
    setUsers(response.data);
    console.log(response);
  };

  const deleteUserData = async (id) => {
    await deleteUser(id);
    getUserDratails();
  };
  return (
    <TableContainer sx={{ maxWidth: "100%", overflowX: "auto" }}>
      <StyledTable>
        <TableHead>
          <Thead>
            <TableCell>Id</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Username</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell>
               Edit &nbsp; Delete
            </TableCell>
          </Thead>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TBody>
              <TableCell>{user.id}</TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.username}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.phone}</TableCell>
              <TableCell>
                <Button component={Link} to={`/edit/${user.id}`}>
                  <EditIcon />
                </Button>
                <Button
                  onClick={() => {
                    deleteUserData(user.id);
                  }}
                >
                  <DeleteIcon />
                </Button>
              </TableCell>
            </TBody>
          ))}
        </TableBody>
      </StyledTable>
    </TableContainer>
  );
};

export default AllUsers;
