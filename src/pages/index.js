import React from 'react'
// import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'

const IndexPage = () => (
  <Layout>
    <main>
      <article className='article-body'>
        <div className='home-page-box'>
          <Image />
          <h1 style={{'marginTop': '0rem'}}>John Kane</h1>
          <h3 style={{'marginTop': '0rem'}}>Programmer</h3>
          <div className='brand-box'>
            <div className='brand-link'>
              <p>
                <i className='fab fa-ethereum' />
                <a href='http://johnkane.eth'>johnkane.eth</a>
              </p>
            </div>
            <div className='brand-link'>
              <p>
                <i className='fab fa-github' />
                <a href='https://github.com/kanej'>Github</a>
              </p>
            </div>
            <div className='brand-link'>
              <p>
                <i className='fab fa-twitter' />
                <a href='https://twitter.com/john_kane'>Twitter</a>
              </p>
            </div>
            <div className='brand-link'>
              <p>
                <i className='fab fa-keybase' />
                <a href='https://keybase.io/kanej'>Keybase</a>
              </p>
            </div>
          </div>
        </div>
      </article>
    </main>
  </Layout>
)

export default IndexPage
