// import React from "react";
// import "./admintable.css";
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';

// const List = () =>{
//     const rows=[
// {
//     id:31042723005,
//     vehicle_rent:"bike", //bike name
//     img: "https://www.google.com/imgres?q=hero%20all%20bike%20images&imgurl=https%3A%2F%2Fimgd.aeplcdn.com%2F664x374%2Fn%2Fv6etpfb_1827755.jpg%3Fq%3D80&imgrefurl=https%3A%2F%2Fwww.bikewale.com%2Fhero-bikes%2Fsuper-splendor-xtec%2F&docid=hhZncGtJKOWjyM&tbnid=8E9RJPTsKTt9vM&vet=12ahUKEwjr5rDy9PiOAxVTslYBHc3tPIAQM3oECHYQAA..i&w=664&h=374&hcb=2&itg=1&ved=2ahUKEwjr5rDy9PiOAxVTslYBHc3tPIAQM3oECHYQAA",//img of bike
//     customer:"Anjali Kumari",
//     date:"25 May",
//     amount:5932,
//     method:"Cash on Delivery",
//     status:"Approved",
// },
// {
//     id:31042723069,
//     vehicle_rent:"bike", //bike name
//     img: "https://www.google.com/imgres?q=hero%20all%20bike%20images&imgurl=https%3A%2F%2Fimgd.aeplcdn.com%2F664x374%2Fn%2Fv6etpfb_1827755.jpg%3Fq%3D80&imgrefurl=https%3A%2F%2Fwww.bikewale.com%2Fhero-bikes%2Fsuper-splendor-xtec%2F&docid=hhZncGtJKOWjyM&tbnid=8E9RJPTsKTt9vM&vet=12ahUKEwjr5rDy9PiOAxVTslYBHc3tPIAQM3oECHYQAA..i&w=664&h=374&hcb=2&itg=1&ved=2ahUKEwjr5rDy9PiOAxVTslYBHc3tPIAQM3oECHYQAA",//img of bike
//     customer:"Sutrishna Mondal",
//     date:"25 May",
//     amount:5932,
//     method:"Cash on Delivery",
//     status:"Approved",
// },

//  {
//     id:310427230078,
//     vehicle_rent:"bike", //bike name
//     img: "https://www.google.com/imgres?q=hero%20all%20bike%20images&imgurl=https%3A%2F%2Fimgd.aeplcdn.com%2F664x374%2Fn%2Fv6etpfb_1827755.jpg%3Fq%3D80&imgrefurl=https%3A%2F%2Fwww.bikewale.com%2Fhero-bikes%2Fsuper-splendor-xtec%2F&docid=hhZncGtJKOWjyM&tbnid=8E9RJPTsKTt9vM&vet=12ahUKEwjr5rDy9PiOAxVTslYBHc3tPIAQM3oECHYQAA..i&w=664&h=374&hcb=2&itg=1&ved=2ahUKEwjr5rDy9PiOAxVTslYBHc3tPIAQM3oECHYQAA",//img of bike
//     customer:"Tushar Mahto",
//     date:"25 May",
//     amount:5932,
//     method:"Cash on Delivery",
//     status:"Pending",
// },

//  {
//     id:31042723041,
//     vehicle_rent:"bike", //bike name
//     img: "https://www.google.com/imgres?q=hero%20all%20bike%20images&imgurl=https%3A%2F%2Fimgd.aeplcdn.com%2F664x374%2Fn%2Fv6etpfb_1827755.jpg%3Fq%3D80&imgrefurl=https%3A%2F%2Fwww.bikewale.com%2Fhero-bikes%2Fsuper-splendor-xtec%2F&docid=hhZncGtJKOWjyM&tbnid=8E9RJPTsKTt9vM&vet=12ahUKEwjr5rDy9PiOAxVTslYBHc3tPIAQM3oECHYQAA..i&w=664&h=374&hcb=2&itg=1&ved=2ahUKEwjr5rDy9PiOAxVTslYBHc3tPIAQM3oECHYQAA",//img of bike
//     customer:"Priti Kumari Singh",
//     date:"25 May",
//     amount:5932,
//     method:"Cash on Delivery",
//     status:"Approved",
// },
// {
//     id:31042723016,
//     vehicle_rent:"bike", //bike name
//     img: "https://www.google.com/imgres?q=hero%20all%20bike%20images&imgurl=https%3A%2F%2Fimgd.aeplcdn.com%2F664x374%2Fn%2Fv6etpfb_1827755.jpg%3Fq%3D80&imgrefurl=https%3A%2F%2Fwww.bikewale.com%2Fhero-bikes%2Fsuper-splendor-xtec%2F&docid=hhZncGtJKOWjyM&tbnid=8E9RJPTsKTt9vM&vet=12ahUKEwjr5rDy9PiOAxVTslYBHc3tPIAQM3oECHYQAA..i&w=664&h=374&hcb=2&itg=1&ved=2ahUKEwjr5rDy9PiOAxVTslYBHc3tPIAQM3oECHYQAA",//img of bike
//     customer:"Bristy Samanta",
//     date:"25 May",
//     amount:5932,
//     method:"Cash on Delivery",
//     status:"Pending",
// },
// ]


//     return(
//         <TableContainer component={Paper} className="table">
//       <Table sx={{ minWidth: 650 }} aria-label="simple table">
//         <TableHead>
//           <TableRow>
//             <TableCell className="tableCell">Tracking ID</TableCell>
//             <TableCell className="tableCell">Product</TableCell>
//             <TableCell className="tableCell">Customer</TableCell>
//             <TableCell className="tableCell">Date</TableCell>
//             <TableCell className="tableCell">Amount</TableCell>
//             <TableCell className="tableCell">Payment Method</TableCell>
//             <TableCell className="tableCell">Status</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {rows.map((row) => (
//             <TableRow key={row.id}>
//               <TableCell className="tableCell">{row.id}</TableCell>
//               <TableCell className="tableCell" >
//               <div className="cellWrapper">
//                <img src={row.img} alt="" className="image" /> 
//                {row.product}
//               </div>
//               {row.vehicle_rent}</TableCell>
//               <TableCell className="tableCell" >{row.customer}</TableCell>
//               <TableCell className="tableCell" >{row.date}</TableCell>
//               <TableCell className="tableCell" >{row.amount}</TableCell>
//               <TableCell className="tableCell" >{row.method}</TableCell>
//               <TableCell className="tableCell" >
//                 <span className={`status ${row.status}`}>{row.status}</span>
//               </TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//     )
// }
// export default List;


import React from "react";
import "./admintable.css";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const List = () =>{
    const rows=[
{
    id:31042723005,
    vehicle_rent:"bike", //bike name
    img: "https://www.google.com/imgres?q=hero%20all%20bike%20images&imgurl=https%3A%2F%2Fimgd.aeplcdn.com%2F664x374%2Fn%2Fv6etpfb_1827755.jpg%3Fq%3D80&imgrefurl=https%3A%2F%2Fwww.bikewale.com%2Fhero-bikes%2Fsuper-splendor-xtec%2F&docid=hhZncGtJKOWjyM&tbnid=8E9RJPTsKTt9vM&vet=12ahUKEwjr5rDy9PiOAxVTslYBHc3tPIAQM3oECHYQAA..i&w=664&h=374&hcb=2&itg=1&ved=2ahUKEwjr5rDy9PiOAxVTslYBHc3tPIAQM3oECHYQAA",//img of bike
    customer:"Anjali Kumari",
    date:"25 May",
    amount:5932,
    method:"Cash on Delivery",
    status:"Approved",
},
{
    id:31042723069,
    vehicle_rent:"bike", //bike name
    img: "https://www.google.com/imgres?q=hero%20all%20bike%20images&imgurl=https%3A%2F%2Fimgd.aeplcdn.com%2F664x374%2Fn%2Fv6etpfb_1827755.jpg%3Fq%3D80&imgrefurl=https%3A%2F%2Fwww.bikewale.com%2Fhero-bikes%2Fsuper-splendor-xtec%2F&docid=hhZncGtJKOWjyM&tbnid=8E9RJPTsKTt9vM&vet=12ahUKEwjr5rDy9PiOAxVTslYBHc3tPIAQM3oECHYQAA..i&w=664&h=374&hcb=2&itg=1&ved=2ahUKEwjr5rDy9PiOAxVTslYBHc3tPIAQM3oECHYQAA",//img of bike
    customer:"Sutrishna Mondal",
    date:"25 May",
    amount:5932,
    method:"Cash on Delivery",
    status:"Approved",
},

 {
    id:310427230078,
    vehicle_rent:"bike", //bike name
    img: "https://www.google.com/imgres?q=hero%20all%20bike%20images&imgurl=https%3A%2F%2Fimgd.aeplcdn.com%2F664x374%2Fn%2Fv6etpfb_1827755.jpg%3Fq%3D80&imgrefurl=https%3A%2F%2Fwww.bikewale.com%2Fhero-bikes%2Fsuper-splendor-xtec%2F&docid=hhZncGtJKOWjyM&tbnid=8E9RJPTsKTt9vM&vet=12ahUKEwjr5rDy9PiOAxVTslYBHc3tPIAQM3oECHYQAA..i&w=664&h=374&hcb=2&itg=1&ved=2ahUKEwjr5rDy9PiOAxVTslYBHc3tPIAQM3oECHYQAA",//img of bike
    customer:"Tushar Mahto",
    date:"25 May",
    amount:5932,
    method:"Cash on Delivery",
    status:"Pending",
},

 {
    id:31042723041,
    vehicle_rent:"bike", //bike name
    img: "https://www.google.com/imgres?q=hero%20all%20bike%20images&imgurl=https%3A%2F%2Fimgd.aeplcdn.com%2F664x374%2Fn%2Fv6etpfb_1827755.jpg%3Fq%3D80&imgrefurl=https%3A%2F%2Fwww.bikewale.com%2Fhero-bikes%2Fsuper-splendor-xtec%2F&docid=hhZncGtJKOWjyM&tbnid=8E9RJPTsKTt9vM&vet=12ahUKEwjr5rDy9PiOAxVTslYBHc3tPIAQM3oECHYQAA..i&w=664&h=374&hcb=2&itg=1&ved=2ahUKEwjr5rDy9PiOAxVTslYBHc3tPIAQM3oECHYQAA",//img of bike
    customer:"Priti Kumari Singh",
    date:"25 May",
    amount:5932,
    method:"Cash on Delivery",
    status:"Approved",
},
{
    id:31042723016,
    vehicle_rent:"bike", //bike name
    img: "https://www.google.com/imgres?q=hero%20all%20bike%20images&imgurl=https%3A%2F%2Fimgd.aeplcdn.com%2F664x374%2Fn%2Fv6etpfb_1827755.jpg%3Fq%3D80&imgrefurl=https%3A%2F%2Fwww.bikewale.com%2Fhero-bikes%2Fsuper-splendor-xtec%2F&docid=hhZncGtJKOWjyM&tbnid=8E9RJPTsKTt9vM&vet=12ahUKEwjr5rDy9PiOAxVTslYBHc3tPIAQM3oECHYQAA..i&w=664&h=374&hcb=2&itg=1&ved=2ahUKEwjr5rDy9PiOAxVTslYBHc3tPIAQM3oECHYQAA",//img of bike
    customer:"Bristy Samanta",
    date:"25 May",
    amount:5932,
    method:"Cash on Delivery",
    status:"Pending",
},
]


    return(
        <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Tracking ID</TableCell>
            <TableCell className="tableCell">Product</TableCell>
            <TableCell className="tableCell">Customer</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Amount</TableCell>
            <TableCell className="tableCell">Payment Method</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell" >
              <div className="cellWrapper">
               <img src={row.img} alt="" className="image" /> 
               {row.product}
              </div>
              {row.vehicle_rent}</TableCell>
              <TableCell className="tableCell" >{row.customer}</TableCell>
              <TableCell className="tableCell" >{row.date}</TableCell>
              <TableCell className="tableCell" >{row.amount}</TableCell>
              <TableCell className="tableCell" >{row.method}</TableCell>
              <TableCell className="tableCell" >
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    )
}
export default List;