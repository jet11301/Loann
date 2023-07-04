import 'bootstrap/dist/css/bootstrap.css';

export default function StepLoan() {
    return (
        <>
            <div className='stepLoan w-100' style={{ background: "#00B2BF", margin: '0', paddingBottom: "50px" }}>
                <div className='title text-center text-light' style={{ fontSize: '20px', fontWeight: "bold", marginBottom: '70px' }}>
                    <p className='mt-5 pt-5'>THÔNG TIN LIÊN HỆ</p>
                </div>
                <div className='contents text-left text-white row w-75 m-auto dl-flex justify-content-around'>
                    <div className='col-lg-4' style={{fontWeight: "bold", fontSize: '20px'}}>
                        <p className='m-0'>Cty Tài chính Shinhan Việt Nam</p>
                        <p className='m-0'>Địa chỉ: 100 Nguyễn Văn Linh,Vĩnh Trung, Thanh Khê, Đà Nẵng</p>
                        <p className='m-0'>Hotline: (Phone/Zalo): 0935279940 </p>
                        <p className='m-0'>Tư vấn và hướng dẫn làm hồ sơ hoàn toàn miễn phí</p>
                        <p className='m-0'>Chỉ cần gửi thông tin qua Zalo là có thể hoàn thành hồ sơ.</p>
                        <p className='m-0'>Chúng tôi luôn Online ->Tư vấn ngay trên Zalo</p>
                    </div>
                    <div className='col-lg-4' style={{fontWeight: "bold", fontSize: '20px'}}>
                        <p className='m-0'>Thời Gian Làm Việc</p>
                        <p className='m-0'>Thứ 2 Đến Thứ 6: 8h00 - 17h30</p>
                        <p className='m-0'>Thứ 7: 8h00 - 12h00</p>
                        <p className='m-0'>Chủ Nhật: Nghỉ</p>
                        <p className='m-0'>Website: vaytieudungtheoluong.net</p>
                    </div>
                </div>
               
            </div>
        </>
    )
}