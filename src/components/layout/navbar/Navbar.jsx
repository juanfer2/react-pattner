import React from 'react'
import { PageHeader } from 'antd';

function Navbar() {
  return (
    <PageHeader
    className="site-page-header navbar_component"
    onBack={() => null}
    title="Title"
    subTitle="This is a subtitle"
    />
  )
}

export default Navbar
