import React from 'react'
import { Link } from 'react-router-dom'

function Footer () {
  return (
    <>
      <section style={{ overflow: 'hidden' }} className='somelinks'>
        <Link className='yellow-link mx-4' href='#/legal/privacy-policy'>
          PrivacyPolicy
        </Link>
        <Link className='yellow-link' href='#/legal/terms-and-conditions'>
          Terms &amp; Conditions
        </Link>
        <br />
      </section>
      <section className='somelinks2'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12 text-center'>
              <strong>@ 2022 A7-SATTA All Rights Reserved</strong>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Footer
