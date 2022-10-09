import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Page1 from '../../Page1'
import Page2 from '../../Page2'
import Page3 from '../../Page3'
import Page4 from '../../Page4'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import TestTitle from "@/pages/styleConfig/basicWrapper/TestTitle";

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
      <Router>
        <div className={'main-content'} style={{width: `${pageSize.width}px`, padding: '10px'}}>
          <div className={'title-content'}>
            <TestTitle />
          </div>
          <div className={'page-content'}>
            <div className={'menu-content'} style={{width: `${200}px`}}>
              <Link to="/page1">page1</Link>
              <Link to="/page2">page2</Link>
              <Link to="/page3">page3</Link>
              <Link to="/page4">page4</Link>
            </div>
            <div className={'body-content'} style={{width: `${pageSize.width-200}px`}}>
              <Switch>
                <Route path="/page1" exact component={Page1} />
                <Route path="/page2" exact component={Page2} />
                <Route path="/page3" exact component={Page3} />
                <Route path="/page4" exact component={Page4} />
              </Switch>
            </div>
          </div>
          <div className={'footer-content'}>footer content</div>
        </div>
      </Router>
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
    height: 592px;
    width: 100%;
    box-sizing: border-box;
    margin-bottom: 20px;
    border: 1px solid #000;
  }
  .page-content {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 400px;
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
    height: 50px;
    width: 100%;
    box-sizing: border-box;
    border: 1px solid #000;
  }
`

export default BasicWrapper
