import React from 'react'
import teadrinker from '../images/teadrinker.png'

import Layout from '../components/layout'

const BrandLink = ({iconName, linkUrl, pretext, linkText}) => (
  <div className='brand-link' style={{
    marginTop: '0rem',
    textAlign: 'left'
  }}>
    <p style={{
      marginBottom: '0.25rem'
    }}><i style={{marginRight: '0.8rem', width: '1rem', textAlign: 'center'}} class={`fab ${iconName}`} />{pretext}<a href={linkUrl}>{linkText}</a></p>
  </div>
)

const IndexPage = () => (
  <Layout>
    <div style={{
      textAlign: 'center'
    }}>
      <img
        src={teadrinker}
        alt='Pouring Tea Avatar'
        style={{
          borderRadius: '50%',
          marginTop: 30
        }} />
      <h1 style={{marginTop: '0rem'}}>John Kane</h1>
      <h3 style={{marginTop: '0rem'}}>Programmer</h3>

      <div style={{marginBottom: '3rem'}}>
        <div style={{display: 'inline-block'}}>
          <BrandLink iconName='fa-ethereum' linkUrl='http://johnkane.eth' pretext='' linkText='johnkane.eth' />
          <BrandLink iconName='fa-github' linkUrl='https://github.com/kanej' pretext='' linkText='Github' />
          <BrandLink iconName='fa-twitter' linkUrl='https://twitter.com/john_kane' pretext='' linkText='Twitter' />
          <BrandLink iconName='fa-keybase' linkUrl='https://keybase.io/kanej' pretext='' linkText='Keybase' />

        </div>
      </div>

    </div>
  </Layout>
)

export default IndexPage
