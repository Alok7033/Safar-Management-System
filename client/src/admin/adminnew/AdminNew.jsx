

import React, { useState } from "react";
import "./Adminnew.css";
import Sidebar from "../../components/SidebarAdmin/AdminSidebar";
import Navbar from "../../components/NavbarAdmin/AdminNavbar";
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';

const New = ({inputs,title})=>{

    const[file ,setFile] = useState("");
     console.log(file)


    return(
        <div className="new">
        <Sidebar/>
        <div className="newContainer">
            <Navbar/>
            <div className="top">
                <h1>{title}</h1>
            </div>
            <div className="bottom">
                <div className="left">
                    <img src={file ? URL.createObjectURL (file)
                    : "https://1drv.ms/i/c/143dd2ca4be4f1c4/EblUrbDnZfFJr0ewOl26NTkBYXh4KC1X-ZZ8poSr-vQdyA?e=w47KI6"} alt="" />
                </div>
                <div className="right">
                    <form>
                     <div className="formInput">
                        <label htmlFor="file">
                          Image:  <DriveFolderUploadOutlinedIcon className="icon"/>
                        </label>
                        <input type="file" id="file" onChange={e=>setFile(e.target.files[0])} style={{ display: "none" }} />
                    </div>

                    {inputs.map((input) => (

                        <div className="formInput" key={input.id}>
                            <label>{input.label}{" "}
                            {input.required && <span className="required">*</span>}
                            </label>
                            <input type={input.type} placeholder={input.placeholder} required={input.required || false} pattern={input.pattern} title={input.title} inputMode="numeric"  />
                        </div>
                    ))}
                     
                    <button>Submit</button>

                    </form>
                </div>
            </div>
        </div>
        

        </div>
    )
}
export default New