import React, { Component } from 'react'
import { LinkedInIcon } from '../components/icons/LinkedInIcon'
import { WaveBackground } from '../components/icons/WaveBackground'
import { GitHubIcon } from '../components/icons/GitHubIcon'

const urlToPdf = 'http://www.pdf995.com/samples/pdf.pdf'

export default class FilePreview extends Component {
  render() {
    return (
      <article className="content">
        <header className="article-header">
          <WaveBackground className="header__background" />
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
        <section className="article-section">
          <ul className="cards">
            <li className="card">
              <iframe className="card__preview" src={urlToPdf} />
              <code className="code">
                {`<iframe
                  src="${urlToPdf}"
                />`}
              </code>
              <p className="card__caption">Inline embeding</p>
            </li>
            <li className="card">
              <iframe
                className="card__preview"
                src={`https://docs.google.com/viewer?url=${encodeURI(
                  urlToPdf
                )}&embedded=true`}
              />
              <p className="card__caption">Google docs</p>
            </li>
            <li className="card">
              <iframe
                className="card__preview"
                src={`http://view.officeapps.live.com/op/view.aspx?src=${encodeURI(
                  urlToPdf
                )}`}
              />
              <p className="card__caption">Inline pdf</p>
            </li>
          </ul>
        </section>
      </article>
    )
  }
}
