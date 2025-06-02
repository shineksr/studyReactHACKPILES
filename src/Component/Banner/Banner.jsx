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
            <h1 className='description'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
              Consectetur, velit itaque rerum a repudiandae animi! Quidem sunt nisi ipsa officia aliquid! 
              Soluta, distinctio hic? Culpa autem ex nulla sint ad!</h1>
        </div>
    </div>
  )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Banner)