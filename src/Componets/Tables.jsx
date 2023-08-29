import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Button1 from '@mui/icons-material/Download';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';


export default function Tables() {
  return (
//     <div>
//         <table className="table">
//   <thead>
//     <tr>
//       <th scope="col">Name</th>
//       <th scope="col">Phone_no</th>
//       <th scope="col">Address</th>
//       <th scope="col">Actions</th>

//     </tr>
//   </thead>
//   <tbody>
//     <tr>
//       <th scope="row">ismail</th>
//       <td>12345678</td>
//       <td>Bantwal</td>
//       <td><button class="btn btn-success">view</button> <button class="btn btn-primary">edit</button> <button  class="btn btn-danger">delete</button></td>
      
//     </tr>

//     <tr className="table-primary">
//       <th scope="row">Jeevan</th>
//       <td>12345678</td>
//       <td>Puttur</td>
//       <td><button class="btn btn-success">view</button> <button class="btn btn-primary">edit</button> <button  class="btn btn-danger">delete</button></td>
     
//     </tr>
//     <tr className="table-secondary">
//       <th scope="row">Soory</th>
//       <td>1234567890</td>
//       <td>B C road</td>
//       <td><button class="btn btn-success">view</button> <button class="btn btn-primary">edit</button> <button  class="btn btn-danger">delete</button></td>
//       {/* <button>edit</button>
//       <button>delete</button> */}
//     </tr>
//     <tr>
        
//     </tr>
//   </tbody>
// </table> 
//     </div>
//   )
// }
<div className='asd'>
<table class="table">
<thead>
<tr>
<th scope="col">Name</th>
<th scope="col">Email</th>
<th scope="col">Phone_No</th>
<th scope="col">Address</th>
<th scope="col">Action</th>

</tr>
</thead>
<tbody>
<tr>
<th scope="row">ismail</th>
<td>ismail@gmail.com</td>
<td>123456789</td>
<td>kalladka</td>
<td>
<button class="btn btn-info" data-bs-target="#edit" data-bs-toggle="modal">View</button> <button class="btn btn-success" data-bs-toggle="modal" data-bs-target="#view">Edit</button> <button class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#delete">Delete</button> </td>



</tr>
<tr>
<th scope="row">jeevan</th>
<td>jeevan@gmail.com</td>
<td>123456789</td>
<td>dubai</td>
<td>
<button  class="btn btn-info" type='button ' data-bs-target="#edit" data-bs-toggle="modal">View</button> <button class="btn btn-success" data-bs-toggle="modal" data-bs-target="#view">Edit</button> <button class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#delete">Delete</button> </td>
</tr>
<tr>
<th scope="row">Soorya</th>
<td>Soorya@gmail.com</td>
<td>1234567890</td>
<td>b c road</td>
<td>
<button type="button" class="btn btn-info" data-bs-toggle="modal" data-bs-target="#edit">
Edit
</button>  <button type="button"   class="btn btn-success" data-bs-toggle="modal" data-bs-target="#view">
View
</button> <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#delete">
Delete</button> </td>

</tr>
</tbody>
</table>



<div class="modal fade" id="edit" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
<div class="modal-dialog">
<div class="modal-content">
<div class="modal-header">
<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
</div>
<div class="modal-body">
<h1 >View Page</h1>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
               
                <TextField id="outlined-basic" label="Name" variant="outlined" /><br/>
                <TextField id="outlined-basic" label="Email" variant="outlined" /><br/>
                <TextField id="outlined-basic" label="phone_no" variant="outlined" /><br/>
                <TextField id="outlined-basic" label="Address" variant="outlined" /><br/>


               


            </Box>

</div>
<div class="modal-footer">
<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
</div>
</div>
</div>
</div>


<div class="modal fade" id="delete" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
<div class="modal-dialog">
<div class="modal-content">
<div class="modal-header">
<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
</div>
<div class="modal-body">
  Your Data Deleted  
</div>
<div class="modal-footer">
<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
</div>
</div>
</div>
</div>



<div class="modal fade" id="view" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
<div class="modal-dialog">
<div class="modal-content">
<div class="modal-header">
<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
</div>
<div>
             <h1 >EDIT CARD</h1>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
               
                <TextField id="outlined-basic" label="Name" variant="outlined" /><br/>
                <TextField id="outlined-basic" label="Email" variant="outlined" /><br/>
                <TextField id="outlined-basic" label="phone_no" variant="outlined" /><br/>
                <TextField id="outlined-basic" label="Address" variant="outlined" /><br/>


                <Button variant="contained">Edit</Button>


            </Box>
        </div>
<div class="modal-footer">
<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
</div>
</div>
</div>
</div>

</div>






)
}


  