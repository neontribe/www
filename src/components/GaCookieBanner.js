import React from 'react'

const GaCookieBanner = () => {
  return (
    <div className="gacookie_container">
      <section className="gacookiebanner_block">
        <div className="gacookiebanner">
          <h3 className="gacookiebanner__heading">Our use of cookies</h3>
          <div className="gacookiebanner__content">
            <p>
              We use necessary cookies to make our site work. We'd also like to
              set optional analytics cookies to help us improve it. We won't set
              optional cookies unless you enable them. Using this tool will set
              a cookie on your device to remember your preferences
            </p>
            <p>
              For more detailed information about the cookies we use, see our{' '}
              <a href="#">Cookies page icon </a>
            </p>
          </div>
        </div>
        <hr class="cc_divider" />
        <div className="gacookiebanner">
          <h3 className="gacookiebanner__heading">Necessary cookies</h3>
          <div className="gacookiebanner__content">
            <p>
              Necessary cookies enable core functionality such as security,
              network management, and accessibility. You may disable these by
              changing your browser settings, but this may affect how the
              website functions.
            </p>
          </div>
        </div>
        <hr class="cc_divider" />
        <div className="gacookiebanner">
          <h3 className="gacookiebanner__heading">Analytics cookies</h3>
          <div className="gacookiebanner__content">
            <p>
              We'd like to set Google Analytics cookies to help us to improve
              our website by collecting and reporting information on how you use
              it. The cookies collect information in a way that does not
              directly identify anyone. For more information on how these
              cookies work, please see our 'Cookies page'.
            </p>
          </div>
        </div>
        <hr class="cc_divider" />
        <button className="save_close">Save and Close</button>
      </section>
      <button className="cc_icon"></button>
      <style jsx>{`
        .gacookiebanner_block {
          background: #0b7474;
          position: fixed;
          top: 0;
          left: 0;
          z-index: 999;
          width: 90%;
          max-width: 500px;
          height: 100%;
          padding: 1% 2%;
          overflow: scroll;
          display: flex;
          flex-direction: column;
          // display: none;
        }

        .cc_divider,
        hr {
          width: 100%;
        }

        .save_close {
          padding: 1% 1.5%;
          margin: 15% auto;
          display: block;
        }

        .cc_icon {
          position: fixed;
          bottom: 0;
          color: #ffffff;
          left: 0;
          width: 80px;
          height: 80px;
          cursor: pointer;
          z-index: 9999;
          padding: 0;
          border: 0;
          background: transparent;
          border-bottom: 100px solid #000025;
          border-right: 100px solid transparent;
        }
        .cc_text {
        }
      `}</style>
    </div>
  )
}

export default GaCookieBanner
