import React from "react"

const Head = () => {
  return (
    <>
      <section className='head'>
        <div className='container d_flex'>
          <div className='left row'>
            <i className='fa fa-phone'></i>
            <label> +99012 3456 7894</label>
            <i className='fa fa-envelope'></i>
            <label> support_shopp-lib.comm</label>
          </div>
          <div className='right row RText'>
            <label>Theme FAQ"s</label>
            <label>Need Help?</label>
            <span>🇮🇳</span>
            <label>IN</label>
            <span>🏳️‍⚧️</span>
            <label>USD</label>
          </div>
        </div>
      </section>
    </>
  )
}

export default Head
