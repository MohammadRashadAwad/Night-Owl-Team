import React, { Fragment } from 'react'
import { Container } from 'react-bootstrap';
import './PageStyle.css'

const TopPage = ({title}) => {
  return (
    <Fragment>
      <Container fluid={true} className='TopPageMainContainer'>
        <div className='overLayPage'>
            <Container className='TopPageTitleContainer'>
                <h4 className='topPageTitle'>
                    {title}
                </h4>
            </Container>
        </div>
      </Container>
    </Fragment>
  )
}

export default TopPage
