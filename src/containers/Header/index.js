import React, { Component } from 'react'

import { TOP_MENU } from 'constants'

import TopMenu from 'components/TopMenu'

class Header extends Component {
  render() {
    return (
      <div>
        <TopMenu list={TOP_MENU} />
      </div>
    )
  }
}

export default Header
