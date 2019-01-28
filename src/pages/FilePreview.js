import React, { Component } from 'react'
import { LinkedInIcon } from '../components/icons/LinkedInIcon'
import { WaveBackground } from '../components/icons/WaveBackground'
import { Wave2Background } from '../components/icons/Wave2Background'
import { GitHubIcon } from '../components/icons/GitHubIcon'
import { CheckIcon } from '../components/icons/CheckIcon'
import { TimesIcon } from '../components/icons/TimesIcon'
import { Wave3 } from '../components/icons/Wave3'
import HideShowContainer from '../components/HideShowContainer'
import { QuestionIcon } from '../components/icons/QuestionIcon'

const urlToPdf =
  'https://www.adobe.com/support/products/enterprise/knowledgecenter/media/c4611_sample_explain.pdf'

const urlToDoc =
  'https://d9db56472fd41226d193-1e5e0d4b7948acaf6080b0dce0b35ed5.ssl.cf1.rackcdn.com/spectools/docs/wd-spectools-word-sample-04.doc'

export default class FilePreview extends Component {
  render() {
    return (
      <article className="content">
        <header className="article-header">
          <Wave3 className="header__wave2" />
          <WaveBackground className="header__background" />
          <h1 className="article-title">
            React file preview - all you need to know
          </h1>
          <div className="author">
            <img
              className="author-photo"
              src="https://s.gravatar.com/avatar/133c1836a37855b7bc319fea21946e98?s=80"
            />
            <ul className="references-list">
              <li>
                <a
                  href="https://www.linkedin.com/in/krzysztof-golasik/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedInIcon className="reference-icon linkedin-icon" />
                </a>
              </li>
              <li>
                <a
                  href="https://selleo.com/people/krzysztof-golasik"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="reference-icon"
                    src="https://selleo.com/favicon.ico"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Zealur"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GitHubIcon className="reference-icon" />
                </a>
              </li>
            </ul>
          </div>
        </header>
        <hr />
        <section className="article-section">
          <div className="article__content">
            <h2>Introduction</h2>
            <p>
              This page is made for developers, to present them all the
              information they need about <b>file embedding</b>, and also give
              them opportunity to test each embedding solution on their own -
              just by openning this site on any device.{' '}
              <b>
                Want even more information? Check out my article:{' '}
                <a href="#">here</a>
              </b>
            </p>
            <br />
            <ul>
              <h4>Sections:</h4>
              <li>
                <a href="#comparison">
                  Embedded File Viewer: Google Drive, OneDrive, Browser support
                </a>
              </li>
              <li>
                <a href="#pdf">Embeding PDF files</a>
              </li>
              <li>
                <a href="#doc">Embedding DOC/PPT/XLS files</a>
              </li>
            </ul>
          </div>
          <hr />
          <div className="article__content">
            <h2 id="comparison">
              Embedded File Viewer: Google Drive, OneDrive, Browser support
            </h2>
            <p>
              All this solutions give developers some more opportunity to
              explore, unfortunately <b>there's no single solution</b> for all
              the cases. Let me give you brief but meaningful summary about
              them:
            </p>
            <br />
            <ul className="no-bullets sections-list">
              <li>
                <div>
                  <h3>Google Docs / Google Drive embedding:</h3>
                </div>
                <section className="small-section">
                  <b>How to use it ?</b>
                  <code>
                    https://docs.google.com/viewer?url=<b>[URL]</b>
                    &embedded=true
                  </code>
                  Just simply paste direct url to your file instead of{' '}
                  <b>[URL]</b> from above example then paste whole url into your
                  HTML inline content embedder <i>iframe/embed/object</i>
                </section>
                <section className="small-section">
                  <b>Specification:</b>
                  <ul>
                    <li>25MB file limit</li>
                    <li>Many supported file types</li>
                    <li>
                      "Works" on every popular desktop and mobile browser which
                      is very important if you want to make preview on mobile
                      devices too
                    </li>
                    <li>
                      <b>It's not supported anymore - throws random errors</b>{' '}
                      for no reason (you can test it out on this site), it's
                      very problematic because
                    </li>
                    <li>
                      Sometimes not accurate at parsing Office file types like
                      .doc and .ppt eg. you might find your images not in their
                      original places (they jump into next line/page etc.)
                    </li>
                  </ul>
                </section>
              </li>
              <li>
                <div>
                  <h3>Office Apps / OneDrive embedding:</h3>
                </div>
                <section className="small-section">
                  <b>How to use it ?</b>
                  <code>
                    https://view.officeapps.live.com/op/view.aspx?src=
                    <b>[URL]</b>
                  </code>
                  Do the same as for Google Docs
                </section>
                <section className="small-section">
                  <b>Specification:</b>
                  <ul>
                    <li>
                      Supports only Microsoft Office file types: .ppt(x),
                      .doc(x), xls(x)
                    </li>
                    <li>10MB limit for docs/ppts, 5MB for xls</li>
                    <li>
                      Faster loading speed, at least faster than Google Docs
                    </li>
                    <li>Always displays - no random errors</li>
                    <li>Accurate .docs and .ppts parser</li>
                    <li>
                      <b>Low (or none) support for mobiles,</b> throws errors,
                      doesn't display anthing, it's not responsive below ~700px
                      width
                    </li>
                  </ul>
                </section>
              </li>
              <li>
                <div>
                  <h3>Browser file embedding:</h3>
                </div>
                <section className="small-section">
                  <b>How to use it ?</b>
                  <br />
                  Just paste direct url into your HTML content embeder
                </section>
                <section className="small-section">
                  <b>Specification:</b>
                  <ul>
                    <li>
                      <b>Only pdf support</b>
                    </li>
                    <li>
                      <b>Works only on desktop browsers: </b> Chrome, Firefox,
                      Safari, Opera, Edge, IE8+
                    </li>
                    <li>No file size limitations</li>
                    <li>Loading time the best from the list</li>
                    <li>No errors</li>
                  </ul>
                </section>
              </li>
              <li>
                <h3>Recommendation:</h3>
                <ul>
                  <li>
                    Use default browser embedder for .pdf file types on desktops
                  </li>
                  <li>For every other case use Google Docs</li>
                  <li>
                    If you really want to optimize your file embedding you might
                    consider using Office Apps for Office file types but also I
                    recommend doing this only for desktop cases
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <hr />
          <div className="article__content">
            <h2 id="pdf" name="pdf">
              Embedding PDF files:
            </h2>
            <p>
              <ul>
                <li>
                  <b>
                    Browser default embeding
                    <CheckIcon className="check" />
                  </b>
                  - Recommended for desktop usage
                </li>
                <li>
                  <b>
                    Google Docs
                    <QuestionIcon className="question-mark" />
                  </b>
                  - Support, but likes to not display anything at all, just
                  throws random errors, refresh this site a few times to check
                  it on your own in preview
                </li>
                <li>
                  <b>
                    Office Apps
                    <TimesIcon className="times" />
                  </b>
                  - No support for pdf
                </li>
              </ul>
            </p>
          </div>

          <HideShowContainer>
            <ul className="cards">
              <li className="card">
                <iframe className="card__preview" src={urlToPdf} />
                <p className="card__caption">Browser default embedding</p>
              </li>
              <li className="card">
                <iframe
                  className="card__preview"
                  src={`https://docs.google.com/viewer?url=${encodeURI(
                    urlToPdf
                  )}&embedded=true`}
                />
                <p className="card__caption">Google Docs</p>
              </li>
              <li className="card">
                <iframe
                  className="card__preview"
                  src={`https://view.officeapps.live.com/op/view.aspx?src=${encodeURI(
                    urlToPdf
                  )}`}
                />
                <p className="card__caption">Office Apps</p>
              </li>
            </ul>
          </HideShowContainer>
        </section>
        <hr />
        <section className="article-section">
          <div className="article__content">
            <h2 id="doc" name="doc">
              Embedding DOC/PPT/XLS files:
            </h2>
            <p>
              <ul>
                <li>
                  <b>
                    Browser default embeding
                    <TimesIcon className="times" />
                  </b>
                  - No support for files other than pdf, forces download
                </li>
                <li>
                  <b>
                    Google Docs
                    <QuestionIcon className="question-mark" />
                  </b>
                  - Support, but still random errors
                </li>
                <li>
                  <b>
                    Office Apps
                    <CheckIcon className="check" />
                  </b>
                  - Support
                </li>
              </ul>
            </p>
          </div>
          <HideShowContainer>
            <ul className="cards">
              <li className="card">
                <iframe className="card__preview" src={urlToDoc} />
                <p className="card__caption">Browser default embedding</p>
              </li>
              <li className="card">
                <iframe
                  className="card__preview"
                  src={`https://docs.google.com/viewer?url=${encodeURI(
                    urlToDoc
                  )}&embedded=true`}
                />
                <p className="card__caption">Google Docs</p>
              </li>
              <li className="card">
                <iframe
                  className="card__preview"
                  src={`https://view.officeapps.live.com/op/view.aspx?src=${encodeURI(
                    urlToDoc
                  )}`}
                />
                <p className="card__caption">Office Apps</p>
              </li>
            </ul>
          </HideShowContainer>
        </section>
        <Wave3 className="footer__wave2" />
        <Wave2Background className="footer__background" />
      </article>
    )
  }
}
