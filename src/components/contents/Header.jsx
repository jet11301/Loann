import 'bootstrap/dist/css/bootstrap.css';

export default function Header({onCharacteristicClick}) {
    return (
        <>
            <div className='header w-100'>
                <div className='row w-100' style={{ background: '#848484' }}>
                    <div className='col-lg-5'>
                        <div className='mt-4 mb-3 overflow-hidden' style={{ background: '#00B2BF', borderRadius: '50px', width: '30%', marginLeft: "15%" }}>
                            <p onClick={onCharacteristicClick} className='text-light text-center mt-2' style={{ fontWeight: '500', fontSize: '20px', cursor: 'pointer'}}>Vay tiêu dùng</p>
                        </div>
                    </div>
                    <div className='col-lg-2'>
                        <div className='contact w-25 m-auto mt-1 overflow-hidden w-100' style={{ background: '#00B2BF', borderRadius: '50px', }}>
                            <p className='text-light text-center mt-2' style={{ fontWeight: '500', fontSize: '20px' }}>0935279940</p>
                        </div>
                    </div>
                    <div className='col-lg-5'>
                    </div>
                </div>
            </div>
        </>
    )
}