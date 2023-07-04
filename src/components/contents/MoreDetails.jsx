import 'bootstrap/dist/css/bootstrap.css';

import React, { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import handleValidation from '../../assets/js/handleValidation';
import { notification } from 'antd';

export default function MoreDetails({ onRegisterClick }) {

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
            <div className='moreDetail m-auto' style={{ width: '90%' }}>
                <div className='title text-center text-light' style={{ fontSize: '20px', fontWeight: "bold" }}>
                    <p style={{ color: "#00B2BF" }}>VAY TÍN CHẤP THEO LƯƠNG</p>
                    <p style={{ color: "#00B2BF" }}> CHUYỂN KHOẢN</p>
                </div>
                <div className='contents text-center text-white'>
                    <p className='m-auto text-black'>✧ Hạn mức vay 20 – 300 triệu</p>
                    <p className='m-auto text-black'>✧ Hạn mức tối thiểu : 12% một năm</p>
                    <p className='m-auto text-black'>✧ Hạn mức tối đa : 18% một năm</p>
                    <p className='m-auto text-black'>✧ Thời gian giải ngân: 12-24 tiếng</p>
                    <p className='m-auto text-black'>✧ Thời hạn vay tối thiểu 12 tháng, tối đa 48 tháng</p>
                    <p className='m-auto text-black'>✧ Hồ sơ yêu cầu: CMND, Sổ hộ khẩu, 2 tin nhắn lương gần nhất hoặc bảng lương</p>
                </div>
                <div className='w-100 m-auto'>
                    <button  onClick={onRegisterClick} className='border-none mt-3 mb-3 text-white mb-5' style={{ background: "#00B2BF", border: 'none', padding: '12px 22px', marginLeft: '46%', borderRadius: '10px' }}>ĐĂNG KÝ NGAY</button>
                </div>
                <div className='title text-center text-light' style={{ fontSize: '20px', fontWeight: "bold" }}>
                    <p style={{ color: "#00B2BF" }}>VAY THEO BẢO HIỂM NHÂN THỌ</p>
                </div>
                <div className='contents text-center text-white'>
                    <p className='m-auto text-black'>✧ Hạn mức vay 20 – 300 triệu</p>
                    <p className='m-auto text-black'>✧ hạn mức tối thiểu : 12% một năm</p>
                    <p className='m-auto text-black'>✧ Hạn mức tối đa : 18% một năm</p>
                    <p className='m-auto text-black'>✧ Thời gian giải ngân: 12-24 tiếng</p>
                    <p className='m-auto text-black'>✧ Thời hạn vay tối thiểu 12 tháng, tối đa 48 tháng</p>
                    <p className='m-auto text-black'>✧ Hồ sơ yêu cầu: CMND, Sổ hộ khẩu, hợp đồng bảo hiểm nhân thọ đã đóng tiền trên 1 năm.</p>
                </div>
                <div className='w-100 m-auto'>
                    <button  onClick={onRegisterClick} className='border-none mt-3 mb-3 text-white mb-5' style={{ background: "#00B2BF", border: 'none', padding: '12px 22px', marginLeft: '46%', borderRadius: '10px' }}>ĐĂNG KÝ NGAY</button>
                </div>
                <div className='title text-center text-light' style={{ fontSize: '20px', fontWeight: "bold" }}>
                    <p style={{ color: "#00B2BF" }}>ĐIỀU KIỆN VÀ THỦ TỤC</p>
                </div>
                <div className='row w-75 m-auto dl-flex justify-content-between mb-5'>
                    <div className='row col-lg-4'>
                        <div className='icon col-lg-3'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="60%" height="100%" preserveAspectRatio="none" viewBox="0 0 1792 1896.0833" class="" fill="#00B2BF"> <path d="M1671 566q0 40-28 68l-724 724-136 136q-28 28-68 28t-68-28l-136-136-362-362q-28-28-28-68t28-68l136-136q28-28 68-28t68 28l294 295 656-657q28-28 68-28t68 28l136 136q28 28 28 68z"></path> </svg>
                        </div>
                        <div className='content col-lg-9'>
                            <p style={{ fontSize: '20px', color: '#0d5f1c' }}>Là công dân Việt Nam tuổi từ 21-58</p>
                        </div>
                    </div>
                    <div className='row col-lg-4'>
                        <div className='icon col-lg-3'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="60%" height="100%" preserveAspectRatio="none" viewBox="0 0 1792 1896.0833" class="" fill="#00B2BF"> <path d="M1671 566q0 40-28 68l-724 724-136 136q-28 28-68 28t-68-28l-136-136-362-362q-28-28-28-68t28-68l136-136q28-28 68-28t68 28l294 295 656-657q28-28 68-28t68 28l136 136q28 28 28 68z"></path> </svg>
                        </div>
                        <div className='content col-lg-9'>
                            <p style={{ fontSize: '20px', color: '#0d5f1c' }}>Đi làm nhận LƯƠNG từ 4 triệu</p>
                        </div>
                    </div>
                    <div className='row col-lg-4'>
                        <div className='icon col-lg-3'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="60%" height="100%" preserveAspectRatio="none" viewBox="0 0 1792 1896.0833" class="" fill="#00B2BF"> <path d="M1671 566q0 40-28 68l-724 724-136 136q-28 28-68 28t-68-28l-136-136-362-362q-28-28-28-68t28-68l136-136q28-28 68-28t68 28l294 295 656-657q28-28 68-28t68 28l136 136q28 28 28 68z"></path> </svg>
                        </div>
                        <div className='content col-lg-9'>
                            <p style={{ fontSize: '20px', color: '#0d5f1c' }}>Có BHNT đóng trên 12 tháng</p>
                        </div>
                    </div>
                </div>
                <div className='title text-center text-light' style={{ fontSize: '20px', fontWeight: "bold" }}>
                    <p style={{ color: "#00B2BF" }}>ĐĂNG KÝ KHOẢNG VAY</p>
                </div>
                <div className='form w-25 m-auto'>
                    <form onSubmit={sendEmail} ref={form}>
                        <div className='form-group mb-2'>
                            <input type="text" className='form-control' placeholder='Họ và tên' name='fullname' onChange={handleInputChange} value={editData.fullname} />
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
                            <input type="number" className='form-control' placeholder='Số điện thoại' name='phonenumber' onChange={handleInputChange} value={editData.phonenumber} />
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
                            <input type="text" className='form-control' placeholder='Email hợp lệ' name='email' onChange={handleInputChange} value={editData.email} />
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
                            <input type="text" className='form-control' placeholder='Bạn đang làm ở đâu' name='workingat' onChange={handleInputChange} value={editData.workingat} />
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
                            <input type="text" className='form-control' placeholder='Địa chỉ' name='address' onChange={handleInputChange} value={editData.address} />
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
                            <input type="text" className='form-control' placeholder='Mức lương hàng tháng' name='salary' onChange={handleInputChange} value={editData.salary} />
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
                <div className='title text-center text-light mt-5 mb-5' style={{ fontSize: '30px', fontWeight: "bold" }}>
                    <p style={{ color: "black" }}>BẢNG MINH HỌA KHOẢN</p>
                    <p style={{ color: "black" }}>TRẢ Ví dụ tượng trưng về tổng chi phí của khoản vay, các khoản phí hiện hành. Minh</p>
                    <p style={{ color: "black" }}>họa tham khảo cho khoản vay 50 triệu, thời gian 12 tháng, lãi suất 0.8%/tháng,</p>
                    <p style={{ color: "black" }}>18%/năm</p>
                </div>
                <div className='w-75 m-auto'>
                    <img src="../img/Table.png" alt="" style={{ marginLeft: '5%' }} className='mb-5' />
                    <p style={{ fontSize: '20px', fontWeight: '500' }}>Đặc quyền Thanh toán khoản vay trước hạn bất kỳ lúc nào. Không nhất thiết phải để hết hợp đồng.</p>
                    <p style={{ fontSize: '20px', fontWeight: '500' }}>Không yêu cầu trả lại toàn bộ khoản vay trong vòng 60 ngày trở xuống kể từ ngày cho vay.</p>
                    <p className='m-0' style={{ fontSize: '20px', fontWeight: '500' }}><span style={{ color: "red" }}>Phí thanh toán trước hạn: </span>chỉ 2% chỉ tính phí theo nợ gốc còn lại chưa sử dụng</p>
                </div>
            </div>
        </>
    )
}