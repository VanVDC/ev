import React from 'react'
import { Helmet } from 'react-helmet'

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keyword' content={keywords} />
    </Helmet>
  )
}

Meta.defaultProps = {
  title: 'Welcome To EV-Wheels',
  description: 'We sell the best personal light electric vehicles',
  keywords:
    'euc, electric unicycle, buy electric bicycles, cheap electric scooters',
}
export default Meta
