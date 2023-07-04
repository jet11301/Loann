import 'bootstrap/dist/css/bootstrap.css';


export default function Characteristic({ onRegisterClick }) {
    return (
        <>
            <div className='w-100 mb-5' style={{ background: "#00B2BF", margin: '0' }}>
                <div className='title text-center text-light pt-3' style={{ fontSize: '20px', fontWeight: "bold" }}>
                    <p>ĐẶC ĐIỂM KHOẢN VAY TÍN CHẤP</p>
                    <p>THEO LƯƠNG</p>
                    <p>VAY TIÊU DÙNG</p>
                </div>
                <div className='contents text-center text-white'>
                    <p className='m-0'>✧ Số tiền vay: từ 20.000.000 VNĐ đến 300.000.000 VNĐ</p>
                    <p className='m-0'>✧ Thời hạn vay từ 12 đến 48 tháng</p>
                    <p className='m-0'>✧ Lãi suất vay hàng năm APR tối đa: 18%</p>
                    <p className='m-0'>✧ Lãi suất vay hàng năm APR tối thiểu: 12%</p>
                    <p className='m-0'>✧ Phí thủ tục: 0%</p>
                    <p className='m-0'>✧ Lệ phí giao dịch: 0 VND</p>
                    <p></p>
                    <p></p>
                    <p style={{ fontSize: '20px', fontWeight: "bold" }}>Ví dụ:</p>
                    <p className='m-0'>✧ Bạn vay 100 triệu trong 3 năm với lãi suất 0,8%/tháng</p>
                    <p className='m-0'>✧ Lãi suất cho khoản vay 100 triệu hiện tại là 18%/năm theo dư nợ giảm dần tương đương 0.8%/tháng lãi suất phẳng</p>
                    <p className='m-0'>✧ Số lãi hàng tháng phải trả: 100.000.000 x 0,8%= 800.000 VNĐ</p>
                    <p className='m-0'>✧ Số tiền gốc phải trả: 100.000.000 / 36 tháng = 2.777.000 VNĐ</p>
                    <p className='m-0'>✧ Tổng số tiền phải trả hàng tháng: 3.577.000 VNĐ (Tiền lãi + tiền gốc)</p>
                    <p className='m-0'>✧ Tổng số tiền phải trả khoản vay: 128.772.000 VNĐ (Tiền lãi + tiền gốc)</p>
                    <p className='m-0'>✧ Miễn Phí làm hồ sơ</p>
                    <p className='m-0'>✧ Khách hàng có thể tất toán sớm bất cứ lúc nào kể cả vừa giải ngân. Phí phạt giảm dần theo năm 6%, 4%, 3%, 2% tính trên dư nợ còn lại của số tiền gốc khách hàng vay tại thời điểm tất toán.</p>
                </div>
                <div className='w-100 m-auto'>
                    <button onClick={onRegisterClick} className='border-none mt-3 mb-3' style={{ background: "white", border: 'none', padding: '12px 22px', marginLeft: '46%', borderRadius: '10px'}}>ĐĂNG KÝ NGAY</button>
                </div>
            </div>
        </>
    )
}