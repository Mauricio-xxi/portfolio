import React from 'react'

export const ContactForm = () => {
    return (
        <div className="container">
            <div className="row">
                <h4 style={{ textAlign: 'center' }}>
                    I'd love to hear from you!
                </h4>
            </div>
            <div className="row input-container">
                <div className="col-xs-12">
                    <div className="styled-input wide">
                        <input type="text" required />
                        <label>Name</label>
                    </div>
                </div>
                <div className="col-md-6 col-sm-12">
                    <div className="styled-input">
                        <input type="text" required />
                        <label>Email</label>
                    </div>
                </div>
                <div className="col-xs-12">
                    <div className="styled-input wide">
                        <textarea required></textarea>
                        <label>Message</label>
                    </div>
                </div>
                <div className="col-xs-12">
                    <div className="btn-lrg submit-btn">Send Message</div>
                </div>
            </div>
        </div>
    )
}
