export const userColumns = [{field: 'id', headerName: 'ID', width: 80 },
    {field:"user" , headerName:"User" , width: 250, renderCell: (params)=>{
            return(
                <div className="cellWithImg">
                    <img className="cellImg" src={params.row.img} alt="avatar" />
                    {params.row.username}
                </div>
            )
        }
    },
    {
        field:"email" ,
        headerName:"Email" , 
        width:230,
    },
    {
        field:"location" ,
        headerName:"location" , 
        width:240 ,
    },

    {
        field:"status" ,
        headerName:"Status" , 
        width: 200,
        renderCell:(params)=>{
            return(
                <div className={`cellWithStatus ${params.row.status}`}>
                    {params.row.status}
                </div>
            );
        },
    },




];

//temporary data
export const userRows=[
{
    id: 1,
    username: "Anjali",
    img: "https://www.pexels.com/photo/blue-and-yellow-macaw-perched-at-omaha-zoo-33029806/",
    status: "active",
    email: "anjali@20gmail.com",
    location: 19,
},
{
    id:2,
    username:"Priti",
    img:"https://www.pexels.com/photo/blue-and-yellow-macaw-perched-at-omaha-zoo-33029806/",
    status:"passive",
    email:"priti3@gmail.com",
    location:21,
},
{
    id:3,
    username:"Sutrishna",
    img:"https://www.pexels.com/photo/blue-and-yellow-macaw-perched-at-omaha-zoo-33029806/",
    status:"pending",
    email:"sutrishna20@gmail.com",
    location:20,
},
{
    id:4,
    username:"Tushar",
    img:"https://www.pexels.com/photo/blue-and-yellow-macaw-perched-at-omaha-zoo-33029806/",
    status:"active",
    email:"tushar11@gmail.com",
    location:30,
},
{
    id:5,
    username:"Bristy",
    img:"https://www.pexels.com/photo/blue-and-yellow-macaw-perched-at-omaha-zoo-33029806/",
    status:"pending",
    email:"bristy09@gmail.com",
    location:20,
},
{
    id:6,
    username:"Lisa",
    img:"https://www.pexels.com/photo/blue-and-yellow-macaw-perched-at-omaha-zoo-33029806/",
    status:"passive",
    email:"lisa23@gmail.com",
    location:20,
},
{
    id:7,
    username:"Keya",
    img: "https://www.pexels.com/photo/blue-and-yellow-macaw-perched-at-omaha-zoo-33029806/",
    status:"passive",
    email:"keya02@gmail.com",
    location:44,
},
{
    id:8,
    username:"Rossini",
    img:"https://www.pexels.com/photo/blue-and-yellow-macaw-perched-at-omaha-zoo-33029806/",
    status:"pending",
    email: "rossini21@gmail.com",
    location:null,
},
{
    id:9,
    username:null,
    img:"https://www.pexels.com/photo/blue-and-yellow-macaw-perched-at-omaha-zoo-33029806/",
    status:"active",
    email:null,
    location:65,
},
{
    id:10,
    username:null,
    img:"https://www.pexels.com/photo/blue-and-yellow-macaw-perched-at-omaha-zoo-33029806/",
    status:"active",
    email:null,
    location:65,
},
{
    id:11,
    username:null,
    img:"https://www.pexels.com/photo/blue-and-yellow-macaw-perched-at-omaha-zoo-33029806/",
    status:"active",
    email:null,
    location:65,
},
];