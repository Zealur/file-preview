import React, { Component } from 'react'
import { LinkedInIcon } from '../components/icons/LinkedInIcon'
import { WaveBackground } from '../components/icons/WaveBackground'
import { Wave2Background } from '../components/icons/Wave2Background'
import { GitHubIcon } from '../components/icons/GitHubIcon'
import { CheckIcon } from '../components/icons/CheckIcon'
import { TimesIcon } from '../components/icons/TimesIcon'
import { OrganicShape1 } from '../components/icons/OrganicShape1'
import { Wave3 } from '../components/icons/Wave3'

const urlToPdf =
  'https://www.adobe.com/support/products/enterprise/knowledgecenter/media/c4611_sample_explain.pdf'

const urlToDoc = 'http://www.snee.com/xml/xslt/sample.doc'

export default class FilePreview extends Component {
  render() {
    return (
      <article className="content">
        <header className="article-header">
          <Wave3 className="header__wave2" />
          <WaveBackground className="header__background" />
          <OrganicShape1 className="header__shape1" />
          <OrganicShape1 className="header__shape2" />
          <h1 className="article-title">File preview - live examples</h1>
          <ul className="references-list">
            <a
              className="article-author"
              rel="author"
              href="https://www.linkedin.com/in/krzysztof-golasik/"
            >
              Krzysztof Golasik
            </a>
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
        </header>
        <hr />
        <section className="article-section">
          <div className="article__content">
            <h3>Introduction</h3>
            <p>
              This page is made for developers to check browser support for file
              embedding, and also to gather some information about this topic.
            </p>
            <br />
            <ul>
              <h4>Sections:</h4>
              <li>
                <a href="#pdf">Embeding PDF file test</a>
              </li>
              <li>
                <a href="#doc">Embeding DOC file test</a>
              </li>
            </ul>
          </div>
          <hr />
          <div className="article__content">
            <h3 id="pdf" name="pdf">
              Embeding PDF file test:
            </h3>
            <p>
              <ul>
                <li>
                  <b>Browser default embeding</b>
                  <CheckIcon className="check" />
                </li>
                <li>
                  <b>Google Docs</b> - support, but likes to not display
                  anything at all, just throws random errors, refresh this site
                  a few times to check it on your own
                  <CheckIcon className="check" /> /
                  <TimesIcon className="times" />
                </li>
                <li>
                  <b>Office Apps</b> - No support for pdf
                  <TimesIcon className="times" />
                </li>
              </ul>
            </p>
          </div>

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
                src={`http://view.officeapps.live.com/op/view.aspx?src=${encodeURI(
                  urlToPdf
                )}`}
              />
              <p className="card__caption">Office Apps</p>
            </li>
          </ul>
        </section>
        <hr />
        <section className="article-section">
          <div className="article__content">
            <h3 id="doc" name="doc">
              Embeding DOC file test:
            </h3>
            <p>
              <ul>
                <li>
                  Browser default embeding - forces download
                  <TimesIcon className="times" />
                </li>
                <li>
                  Google Docs <CheckIcon className="check" />
                </li>
                <li>
                  Office Apps - No support for pdf
                  <CheckIcon className="check" />
                </li>
              </ul>
            </p>
          </div>

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
                src={`http://view.officeapps.live.com/op/view.aspx?src=${encodeURI(
                  urlToDoc
                )}`}
              />
              <p className="card__caption">Office Apps</p>
            </li>
          </ul>
        </section>
        <Wave3 className="footer__wave2" />
        <Wave2Background className="footer__background" />
      </article>
    )
  }
}
