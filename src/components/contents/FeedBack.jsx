import 'bootstrap/dist/css/bootstrap.css';

export default function FeedBack() {
    return (
        <>
            <div className='feedback' style={{ marginTop: '100px' }}>
                <div className='title text-center text-light' style={{ fontSize: '20px', fontWeight: "bold" }}>
                    <p style={{ color: "black" }}>NHẬN XÉT TỪ KHÁCH HÀNG</p>
                </div>
                <div className='contentFeedback w-100' style={{ marginTop: '50px' }}>
                    <div className='row w-75 m-auto' style={{ display: 'flex', justifyContent: 'space-around' }}>
                        <div className='col-lg-3 m-1' style={{ background: '#f5f5f5' }}>
                            <div className='iconComment w-100' style={{ display: 'flex', justifyContent: 'space-around' }}>
                                <img style={{ width: "20%" }} src="../img/comment-svgrepo-com.svg" alt="" />
                            </div>
                            <div className='w-75, text-center' style={{ borderBottom: "1px solid grey", marginBottom: '10px' }}>
                                Tôi thực sự hài lòng về trải nghiệm sản phẩm mà công ty mang lại. Chất lượng sản phẩm hoàn hảo. Tôi sẽ ủng hộ công ty thường xuyên hơn
                            </div>
                            <div className='row w-75 m-auto'>
                                <div className='col-lg-4 p-0' style={{ borderRadius: '50%', overflow: 'hidden', objectFit: 'cover' }}>
                                    <img style={{ width: '100%', height: '100px', overflow: 'hidden' }} src="https://haycafe.vn/wp-content/uploads/2022/02/Avatar-giau-mat-danh-cho-nu.jpg" alt="" />
                                </div>
                                <div className='col-lg-8' style={{ lineHeight: 4.5 }}>
                                    <p>Nguyễn Ngọc Thi</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-3 m-1' style={{ background: '#f5f5f5' }}>
                            <div className='iconComment w-100' style={{ display: 'flex', justifyContent: 'space-around' }}>
                                <img style={{ width: "20%" }} src="../img/comment-svgrepo-com.svg" alt="" />
                            </div>
                            <div className='w-75, text-center' style={{ borderBottom: "1px solid grey", marginBottom: '10px' }}>
                                Tôi thực sự hài lòng về trải nghiệm sản phẩm mà công ty mang lại. Chất lượng sản phẩm hoàn hảo. Tôi sẽ ủng hộ công ty thường xuyên hơn
                            </div>
                            <div className='row w-75 m-auto'>
                                <div className='col-lg-4 p-0' style={{ borderRadius: '50%', overflow: 'hidden', objectFit: 'cover' }}>
                                    <img style={{ width: '100%', height: '100px', overflow: 'hidden' }} src="https://haycafe.vn/wp-content/uploads/2022/02/Avatar-giau-mat-danh-cho-nu.jpg" alt="" />
                                </div>
                                <div className='col-lg-8' style={{ lineHeight: 4.5 }}>
                                    <p>Nguyễn Thị My</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-3 m-1' style={{ background: '#f5f5f5' }}>
                            <div className='iconComment w-100' style={{ display: 'flex', justifyContent: 'space-around' }}>
                                <img style={{ width: "20%" }} src="../img/comment-svgrepo-com.svg" alt="" />
                            </div>
                            <div className='w-75, text-center' style={{ borderBottom: "1px solid grey", marginBottom: '10px' }}>
                                Tôi thực sự hài lòng về trải nghiệm sản phẩm mà công ty mang lại. Chất lượng sản phẩm hoàn hảo. Tôi sẽ ủng hộ công ty thường xuyên hơn
                            </div>
                            <div className='row w-75 m-auto'>
                                <div className='col-lg-4 p-0' style={{ borderRadius: '50%', overflow: 'hidden', objectFit: 'cover' }}>
                                    <img style={{ width: '100%', height: '100px', overflow: 'hidden' }} src="https://haycafe.vn/wp-content/uploads/2022/02/Avatar-giau-mat-danh-cho-nu.jpg" alt="" />
                                </div>
                                <div className='col-lg-8' style={{ lineHeight: 4.5 }}>
                                    <p>Lê Thị Trang</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}