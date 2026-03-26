import React from 'react';
import './admindatatable.css';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import { userColumns, userRows} from "../../datatablesource";
import { Link } from "react-router-dom";

const Datatable = ()=>
{
  const actionColumn = [{ field: "action", headerName: "Action", width: 240 , renderCell:()=>{
    return(
      <div className='cellAction'>
        <div className='viewButton'>View</div>
        <div className='deleteButton'>Delete</div>
      </div>
    )
  }}];
  const paginationModel = { page: 0, pageSize: 5 };
  return(
  
    <div className='datatable'>
    <div className="datatableTitle">
        Add New User
        <Link to="/users/new" className='link'>
          Add New
        </Link>
      </div>
    <Paper sx={{ height: 400, width: '100%' }}>
     <DataGrid
        rows={userRows}
        columns={userColumns.concat(actionColumn)}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        sx={{ border: 0 }}
      />
      </Paper>
     </div>
     
  )
}

export default Datatable;
