import React from 'react'
import PropTypes from 'prop-types'
import './FlintLogo.scss'

const FlintLogo = ({ width, height, className, poweredBy }) => (
  <div className={`flint-logo-wrapper ${className || ''}`}>
    {poweredBy && <h6 className="flint-logo__poweredBy">Powered by</h6>}
    <svg xmlns="http://www.w3.org/2000/svg" className="flint-logo" width={width} height={height} viewBox="0 0 198.77 48.61">
      <title>FlintCMS</title>
      <desc>FlintCMS Logo</desc>
      <g className="flint-logo__flint">
        <path d="M13.4,12.43v3.25h7.26v7.46H13.4v25H4.64v-25H0V15.69H4.64V12.3C4.64,5,9.22.33,16.35.33A12.65,12.65,0,0,1,20.67,1V8.31A9.73,9.73,0,0,0,17.92,8C16,8,13.4,8.83,13.4,12.43Z" />
        <path d="M23.44,48.16V.79h8.7V48.16Z" />
        <path d="M39.21,0a5.37,5.37,0,1,1-5.37,5.43A5.36,5.36,0,0,1,39.21,0ZM34.89,48.16V16h8.7V48.16Z" />
        <path d="M55,48.16h-8.7V16h8.44v4c2-3.34,5.82-4.84,9.29-4.84,8,0,11.65,5.69,11.65,12.76V48.16H67V29.38c0-3.6-1.77-6.41-6-6.41-3.79,0-6,2.94-6,6.67Z" />
        <path d="M91.35,16h6.48v7.72H91.35V37.16c0,2.81,1.31,3.73,3.79,3.73a12.63,12.63,0,0,0,2.68-.26v7.2a12.91,12.91,0,0,1-4.91.79c-6.28,0-10.21-3.73-10.21-9.95v-15H76.89V16h1.64c3.4,0,5-2.22,5-5.1V6.35h7.85Z" />
      </g>
      <g className="flint-logo__cms">
        <path d="M116.49,47.67c-8.36,0-14.66-6.66-14.66-15.49s6.14-15.43,14.6-15.43c7.18,0,11.15,4.19,12.6,8.37l-3.75,1.59a8.85,8.85,0,0,0-8.85-6.21c-4.95,0-10.28,3.66-10.28,11.69s5.36,11.75,10.34,11.75a9.19,9.19,0,0,0,9.13-6l3.62,1.57A13.2,13.2,0,0,1,116.49,47.67Z" />
        <path d="M170.9,46.7V28.26c0-5-2.79-8-7.46-8-4.24,0-8,4.87-8,9.26V46.7h-4.19V28.26c0-5-2.79-8-7.45-8-4.39,0-8.1,4.72-8.1,9.37v17h-4.13v-29h3.94v5.76c1.85-4.95,5.74-6.66,10.27-6.66,5.19,0,7.8,3.33,9.12,6.45,2.45-5.26,5.84-6.45,10.43-6.45S175,19.64,175,27.62V46.7Z" />
        <path d="M188.4,47.67c-7.61,0-10.73-4.53-11.51-7.46l3.69-1.3c.89,3.36,3.87,5.47,7.88,5.47,4.24,0,6.17-2.6,6.17-5s-1.75-4.21-4.69-4.87l-5.26-1.15c-4.37-.93-7-3.83-7-7.76,0-4.78,4.6-8.83,10-8.83,7.44,0,9.87,4.51,10.62,6.79l-3.56,1.33c-.79-2.49-3-4.82-7.06-4.82-3.78,0-6,2.55-6,5s1.55,4,4.25,4.61l5,1.09c5,1.1,7.8,4,7.8,8.27S195.14,47.67,188.4,47.67Z" />
      </g>
    </svg>
  </div>
)

FlintLogo.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  className: PropTypes.string,
  poweredBy: PropTypes.bool
}

FlintLogo.defaultProps = {
  width: 198.77,
  height: 48.61,
  className: null,
  poweredBy: false
}

export default FlintLogo
