import React from 'react';


class Contact extends React.Component {
  render() {
    return (
      <div>

        <div class="tile is-ancestor">
          <div class="tile is-vertical is-8">
            <div class="tile is-parent">
              <article class="tile is-child notification is-light">
                <p class="title">
                  Contact Us
                </p>
                <p class="subtitle">
                  Ipsum Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam doloribus voluptas ad quasi dignissimos.
                </p>
                <div class="content">
                  {/* --Form--*/}
                  <div class="field">
                    <label class="label">
                      Your Name(required)
                    </label>
                    <div class="control">
                      <input class="input" type="text" placeholder="e.g Alex Smith" />
                    </div>
                  </div>
                  <div class="field">
                    <label class="label">
                      Your Email(required)
                    </label>
                    <div class="control">
                      <input class="input" type="email" placeholder="e.g. alexsmith@gmail.com" />
                    </div>
                  </div>
                  <div class="field">
                    <label class="label">
                      Subject
                    </label>
                    <div class="control">
                      <input class="input" />
                    </div>
                  </div>
                  <div class="field">
                    <label class="label">
                      Your Message
                    </label>
                    <div class="control">
                      <textarea class="textarea" rows="10"></textarea>
                    </div>
                  </div>
                  {/*--Form--*/}

                </div>
                <div class="control">
                  <button class="button is-dark">Submit</button>
                </div>
              </article>
            </div>
          </div>
          <div class="tile is-parent">
            <article class="tile is-child notification is-black">
              <div class="content">
                <p class="title">
                  Email
                </p>
                <p class="subtitle">
                  blahblah@blah.com
                </p>
                <hr></hr>
                <p class="title">
                  Phone Number
                </p>
                <p class="subtitle">
                  123-456-7890
                </p>
                <hr></hr>
                <p class="title">
                  Social Media/Github
                </p>
                <p class="subtitle">
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
