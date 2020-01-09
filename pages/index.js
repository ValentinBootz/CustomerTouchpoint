import Link from 'next/link'

class LandingPage extends React.Component {
    render() {
        return (
            <div className="landingContainer">
                <div className="landingBackground"/>
                <div className="landingOverlay" />
                <div className="landingContent">
                    <Link href="/customer">
                        <button className="landingButton">
                            Customer
                        </button>
                    </Link>
                    <Link href="/dealer">
                        <button className="landingButton">
                            Dealer
                        </button>
                    </Link>
                </div>
            </div>
        );
    }
}

export default LandingPage;