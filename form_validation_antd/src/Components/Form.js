import React from "react";
import { Button,Form,Checkbox,DatePicker,Input,Select,Password } from "antd";
import 'antd/dist/antd.css';
// import '../CSS/Form.css';

function FormV(){
    return(
        <>
        <div className="form">
            <Form labelCol={{span:8}} wrapperCol={{span:8}} autoComplete="off">
                <Form.Item   wrapperCol={{offset:10}}><h1>login form</h1></Form.Item>
                <Form.Item name="Full name" 
                label="full name"
                rules={[
                    {
                        required:true,
                        message:"please enter your name",
                    },
                    {
                        whitespace:true,
                    },
                    {
                        // message: 'this is custom',
                        validator: (_, value) => {
                          if (/^[a-zA-Z]+$/.test(value)) {
                            return Promise.resolve();
                          } else {
                            return Promise.reject('Name must have only alphabates');
                          }
                         }
                       }
                ]}
                     hasFeedback
                >
                <Input placeholder="Type your name"></Input>
                </Form.Item>
                <Form.Item name="Email" label="Email ID"
                 rules={[
                    {
                        required:true,
                        message:"please enter your Email Id",
                    },
                    {
                        type:'email'
                    },
                ]}
                     hasFeedback>
                <Input placeholder="Type your name"></Input>
                </Form.Item>
                <Form.Item name="password" label="Password"
                 rules={[
                    {
                        required:true,
                    },
                    {
                        // message: 'this is custom',
                        validator: (_, value) => {
                          if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,16}$/.test(value)) {
                            return Promise.resolve();
                          } else {
                            return Promise.reject('password must be eight to sixteen characters including one uppercase letter,one special character and alphanumeric characters');
                          }
                         }
                       }
                ]}
                     hasFeedback>
                <Input.Password placeholder="Password"></Input.Password>
                </Form.Item>
                <Form.Item name="Confirm Password" label="Confirm Password"
                 rules={[
                    {required:true },
                    ({getFieldValue})=>({
                        validator(_,value){
                            if(!value || getFieldValue('password')===value){
                                return Promise.resolve()
                            }
                          return Promise.reject("Password does not match")
                        }
                    })
                ]}
                     hasFeedback>
                <Input.Password placeholder="Confirm Password"></Input.Password>
                </Form.Item>
                <Form.Item name="gender" label=" Gender" 
                rules={[
                    {
                        required:true,
                        message:"please choose your gender"
                    }
                ]}
                hasFeedback>
                <Select placeholder="Select your gender">
                <Select.Option value="male">Male</Select.Option>
                <Select.Option value="female">Female</Select.Option>
                <Select.Option value="other">Other</Select.Option>
                </Select>
                </Form.Item>
                <Form.Item name="DOB" label="Date of Birth"
                 rules={[
                    {
                        required:true,
                        message:"please fill the Date of Birth"
                    }
                ]}
                hasFeedback>
                <DatePicker picker="Date" placeholder="Choose Date of Birth"></DatePicker>
                </Form.Item>
                <Form.Item name="Agrrement"  wrapperCol={{offset:8}}
                 rules={[
                    {
                        // required:true,
                    }
                ]}>
                <Checkbox>Agree to terms and conditions</Checkbox>
                </Form.Item>
                <Form.Item name="Button" wrapperCol={{offset:8}}>
                <Button type="primary" htmlType="submit" >Submit</Button>
                </Form.Item>
            </Form>
        </div>
        </>
    );
}
export default FormV