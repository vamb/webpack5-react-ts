import React, { useState, useEffect } from "react";
import styled from "styled-components";

const BasicWrapper =()=> {
  const [ pageSize, setPageSize ] = useState({ width: document.body.scrollWidth, height: document.body.scrollHeight })

  const handleResize=()=>{
    const isClient = typeof window === 'object'
    if(!isClient){
      return
    }
    setPageSize({width: document.body.scrollWidth, height: document.body.scrollHeight})
  }

  useEffect(()=>{
    handleResize()
    window.addEventListener('resize', handleResize)
    return ()=> window.removeEventListener('resize', handleResize)
  },[])

  return(
    <Wrapper>
      <div className={'main-content'} style={{width: `${pageSize.width}px`, padding: '10px'}}>
        <div className={'title-content'}>title content</div>
        <div className={'page-content'}>
          <div className={'menu-content'} style={{width: `${200}px`}}>
            menu-content
          </div>
          <div className={'body-content'} style={{width: `${pageSize.width-200}px`}}>
            body-content
          </div>
        </div>
        <div className={'footer-content'}>footer content</div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled('div')`
  width: 100%;
  box-sizing: border-box;
  .main-content {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
  }
  .title-content {
    height: 100px;
    width: 100%;
    box-sizing: border-box;
    margin-bottom: 20px;
    border: 1px solid #000;
  }
  .page-content {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100px;
    margin-bottom: 20px;
    .menu-content {
      min-width: 200px;
      margin-right: 20px;
      border: 1px solid #000;
    }
    .body-content {
      border: 1px solid #000;
    }
  }
  
  .footer-content {
    height: 100px;
    width: 100%;
    box-sizing: border-box;
    border: 1px solid #000;
  }
`

export default BasicWrapper
