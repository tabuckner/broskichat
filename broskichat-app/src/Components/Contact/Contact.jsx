import React from 'react';


class Contact extends React.Component {
  render() {
    return (
      <div>

        <div className="tile is-ancestor">
          <div className="tile is-vertical is-8">
            <div className="tile is-parent">
              <article className="tile is-child notification is-light">
                <p className="title">
                  Contact Us
                </p>
                <p className="subtitle">
                  Ipsum Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam doloribus voluptas ad quasi dignissimos.
                </p>
                <div className="content">
                  {/* --Form--*/}
                  <div className="field">
                    <label className="label">
                      Your Name(required)
                    </label>
                    <div className="control">
                      <input className="input" type="text" placeholder="e.g Alex Smith" />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label">
                      Your Email(required)
                    </label>
                    <div className="control">
                      <input className="input" type="email" placeholder="e.g. alexsmith@gmail.com" />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label">
                      Subject
                    </label>
                    <div className="control">
                      <input className="input" />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label">
                      Your Message
                    </label>
                    <div className="control">
                      <textarea className="textarea" rows="10"></textarea>
                    </div>
                  </div>
                  {/*--Form--*/}

                </div>
                <div className="control">
                  <button className="button is-dark">Submit</button>
                </div>
              </article>
            </div>
          </div>
          <div className="tile is-parent">
            <article className="tile is-child notification is-black">
              <div className="content">
                <p className="title">
                  Email
                </p>
                <p className="subtitle">
                  blahblah@blah.com
                </p>
                <hr></hr>
                <p className="title">
                  Phone Number
                </p>
                <p className="subtitle">
                  123-456-7890
                </p>
                <hr></hr>
                <p className="title">
                  Social Media/Github
                </p>
                <p className="subtitle">
                  blahblah@blah.com
                </p>
                <hr></hr>
              </div>
            </article>
          </div>
        </div>






      </div>



    )
  }
}
export default Contact;
