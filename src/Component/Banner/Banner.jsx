import React from 'react'
import { connect } from 'react-redux'
export const Banner = (props) => {
  return (
    <div className='banner'>
        <div className='content'>
            <h1 className='tittle'> Movie Name</h1>
            <div className='Banner_buttons'>
                <button className='button'>play</button>
                <button className='button'>My list</button>
            </div>

        </div>
    </div>
  )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Banner)