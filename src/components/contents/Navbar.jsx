import 'bootstrap/dist/css/bootstrap.css';

export default function NavBar({ onRegisterClick, onStepLoanClick, onAdvantageClick, onContactClick }) {
    return (
        <>
            <div className='navbar m-auto mt-5' style={{ width: '100%' }}>
                <div className='row w-75 m-auto dl-flex justify-content-between'>
                    <div className='col-lg-2 text-light text-center' style={{ background: '#00B2BF', borderRadius: '50px' }}>
                        <p onClick={onRegisterClick} className='text-light text-center mt-2' style={{ fontWeight: '500', fontSize: '20px', cursor: 'pointer'}}>Đăng ký vay</p>
                    </div>
                    <div className='col-lg-2 text-light text-center' style={{ background: '#00B2BF', borderRadius: '50px' }}>
                        <p onClick={onStepLoanClick} className='text-light text-center mt-2' style={{ fontWeight: '500', fontSize: '20px', cursor: 'pointer' }}>Quy trình vay</p>
                    </div>
                    <div className='col-lg-2 text-light text-center' style={{ background: '#00B2BF', borderRadius: '50px' }}>
                        <p onClick={onAdvantageClick} className='text-light text-center mt-2' style={{ fontWeight: '500', fontSize: '20px', cursor: 'pointer' }}>Ưu điểm</p>
                    </div>
                    <div className='col-lg-2 text-light text-center' style={{ background: '#00B2BF', borderRadius: '50px' }}>
                        <p onClick={onContactClick} className='text-light text-center mt-2' style={{ fontWeight: '500', fontSize: '20px', cursor: 'pointer'  }}>Liên hệ</p>
                    </div>
                </div>
            </div>
        </>
    )
}