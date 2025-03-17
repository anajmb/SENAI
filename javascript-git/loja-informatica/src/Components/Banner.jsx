const Banner = () => {
    const bannerStyle = {
        background: 'url("https://fastly.picsum.photos/id/237/1200/400.jpg?hmac=BbS8vWTeMxU0ClOngzjknbvivjY4RFv69mOxwvMVPSY") no-repeat center center',
        backgroundSize: "cover",
        color:"blue",
        padding: "100px 0 ",
        textAlign: "center",
    }
    return (
        <div style={bannerStyle}>
            <div className="container">
                <h1 className="display-4"> Bem-vindo ao meu site!</h1>
                <p className="lead text blue">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
        </div>
    )
}

export default Banner;