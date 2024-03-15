import './section.css';

function Section () {

	return (
		<>
            <section className="home-main-section">
                <div className="img-wrapper">
                    <div className="lady-image"></div>
                </div>
                <div className="call-to-action">
                    <h1 className="title">Feel The Music</h1>
                    <span className="subtitle">Stream over 20 thousand songs with one click</span>
                    <a href="join.html" className="btn">Join Now</a>
                </div>
            </section>
            <div class="home-page-circle-1"></div>
            <div class="home-page-circle-2"></div>
            <div class="home-page-circle-3"></div>
		</>
	)
}

export default Section
