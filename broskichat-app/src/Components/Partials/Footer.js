import React from 'react';
import ReactDOM from 'react-dom';

const copyright = "All Rights Reserved 2018"

class Footer extends React.Component {

    render() {
        return (
            <footer className="footer footerBG">
                <div className="content has-text-centered">
                    <p className="has-text-light">
                        {copyright} | <strong className="has-text-light">BroksiChat</strong>
                    </p>
                </div>
            </footer>
        )
    }

}

const footer = <Footer />
ReactDOM.render(
    footer,
    document.getElementById('root')
)

export default Footer;
