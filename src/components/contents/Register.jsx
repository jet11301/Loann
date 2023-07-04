import 'bootstrap/dist/css/bootstrap.css';

import React, { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import handleValidation from '../../assets/js/handleValidation';
import { notification } from 'antd';


export default function Register() {
    const form = useRef();

    const [api, contextHolder] = notification.useNotification();
    const openNotificationSubmit = (placement) => {
        api.success({
            message: `Notification`,
            description: "Gửi đơn thành công, chúng tôi sẽ liện hệ đến bạn",
            placement,
        });
    };

    const [editData, setEditData] = useState({
        fullname: '',
        phonenumber: '',
        email: '',
        workingat: '',
        address: '',
        salary: '',
    })

    const [errors, setErrors] = useState({
        fullname: '',
        phonenumber: '',
        email: '',
        workingat: '',
        address: '',
        salary: '',
    })

    const handleInputChange = (event) => {
        const field = event.target.name;
        const value = event.target.value;

        setEditData((preData) => ({ ...preData, [field]: value }));
    };

    const sendEmail = (e) => {
        e.preventDefault();
        let errors = {};
        handleValidation(editData, errors);
        if (Object.keys(errors).length === 0) {
            // mail đến người nhận thông tin của người gửi
            emailjs.sendForm('service_jiomhyk', 'template_a2ibkxt', form.current, 'm-R4xByE0z7DKxE0W')
                .then((result) => {
                    console.log(result.text);
                }, (error) => {
                    console.log(error.text);
                });
            // mail thông báo confirm đến người gửi 
            emailjs.sendForm('service_jiomhyk', 'template_7oyxr99', form.current, 'm-R4xByE0z7DKxE0W')
                .then((result) => {
                    console.log(result.text);
                }, (error) => {
                    console.log(error.text);
                });
            setErrors("");
            openNotificationSubmit("topRight");
            setEditData("");
        } else {
            setErrors(errors);
        }

    };


    return (
        <>
            {contextHolder}
            <div className='divRegister w-50 m-auto mt-5'>
                <div className='row'>
                    <div className='logo col-lg-5'>
                        <p className='text-center' style={{ color: '#00B2BF', fontSize: '20px', fontWeight: '500' }}>Vay tiêu dùng</p>
                        <div className='img'>
                            <img src="../img/Logo.jpg" alt="" />
                        </div>
                    </div>
                    <div className='register col-lg-6' style={{ marginLeft: '5%' }}>
                        <div className='form'>
                            <p className='text-center' style={{ color: '#00B2BF', fontSize: '20px', fontWeight: '500' }}>Đăng ký tư vấn tài khoản vay</p>
                            <form onSubmit={sendEmail} ref={form}>
                                <div className='form-group mb-2'>
                                    <input type="text" className='form-control' placeholder='Họ và tên' name='fullname' onChange={handleInputChange} value={editData.fullname}/>
                                    {errors.fullname && (
                                        <div
                                            className="invalid-feedback"
                                            style={{ display: "block", color: "red" }}
                                        >
                                            {errors.fullname}
                                        </div>
                                    )}
                                </div>
                                <div className='form-item mb-2'>
                                    <input type="number" className='form-control' placeholder='Số điện thoại' name='phonenumber' onChange={handleInputChange} value={editData.phonenumber}/>
                                    {errors.phonenumber && (
                                        <div
                                            className="invalid-feedback"
                                            style={{ display: "block", color: "red" }}
                                        >
                                            {errors.phonenumber}
                                        </div>
                                    )}
                                </div>
                                <div className='form-item mb-2'>
                                    <input type="text" className='form-control' placeholder='Email hợp lệ' name='email' onChange={handleInputChange} value={editData.email}/>
                                    {errors.email && (
                                        <div
                                            className="invalid-feedback"
                                            style={{ display: "block", color: "red" }}
                                        >
                                            {errors.email}
                                        </div>
                                    )}
                                </div>
                                <div className='form-item mb-2'>
                                    <input type="text" className='form-control' placeholder='Bạn đang làm ở đâu' name='workingat' onChange={handleInputChange} value={editData.workingat}/>
                                    {errors.workingat && (
                                        <div
                                            className="invalid-feedback"
                                            style={{ display: "block", color: "red" }}
                                        >
                                            {errors.workingat}
                                        </div>
                                    )}
                                </div>
                                <div className='form-item mb-2'>
                                    <input type="text" className='form-control' placeholder='Địa chỉ' name='address' onChange={handleInputChange} value={editData.address}/>
                                    {errors.address && (
                                        <div
                                            className="invalid-feedback"
                                            style={{ display: "block", color: "red" }}
                                        >
                                            {errors.address}
                                        </div>
                                    )}
                                </div>

                                <div className='form-item mb-2'>
                                    <input type="text" className='form-control' placeholder='Mức lương hàng tháng' name='salary' onChange={handleInputChange} value={editData.salary}/>
                                    {errors.salary && (
                                        <div
                                            className="invalid-feedback"
                                            style={{ display: "block", color: "red" }}
                                        >
                                            {errors.salary}
                                        </div>
                                    )}
                                </div>
                                <button className='btn btn-success w-100' type='submit' style={{background: '#00B2BF'}}>Gửi đơn</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div></>
    )
}