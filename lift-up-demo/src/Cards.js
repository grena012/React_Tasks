import React from "react";
import { useState } from "react";
import { Button,DatePicker,TimePicker,Rate} from "antd";
import 'antd/dist/antd.css'
import "./App.css"
import { type } from "@testing-library/user-event/dist/type";




const Cards = ({ name, change }) => {
    const [newName, setNewName] = useState(name);
    return (
       <div>
       <input
          placeholder="Enter new name"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
       />
       <Button onClick={() => change(newName )} type="primary">Change</Button><br/><br></br>
       <DatePicker placeholder="select date"></DatePicker>
       <TimePicker placeholder="Time"></TimePicker><br/>
       <Rate defaultValue={0} />
       <span className="ant-rate-text">Rate us</span>
       <br />
       
       </div>
    );
 };
export default Cards;