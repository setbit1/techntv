import React from 'react'
import styled from 'styled-components'

function Header() {
    return (
        <Nav>
            <logo src = ""/>
            <NavMenu>
                <a>
                    <img src = "./images/home.png" alt="icon.home"/>
                    <span><b>HOME</b></span>
                </a>
                <a>
                    <img src = "./images/sports.png" alt="icon.sports"/>
                    <span><b>SPORTS</b></span>
                </a>
                <a>
                    <img src = "./images/technology.png" alt="icon.tech"/>
                    <span><b>TECH</b></span>
                </a>
                <a>
                    <img src = "./images/tv.jpg" alt="icon.tv"/>
                    <span><b>TV</b></span>
                </a>
                <a>
                    <img src = "./images/search.png" alt="icon.tv"/>
                    <span><b>SEARCH</b></span>
                </a>
            </NavMenu>
            
            
        </Nav>
    )
}

export default Header

const Nav = styled.nav`
    Height: 70px;
    background: #29afff;
    display: flex;
    border: 3px outset #000000;
    align-items: center;
`
const logo = styled.img`
    width: 80px;

`
const NavMenu = styled.div`
    display: flex;
    flex: 1;
    margin-left: 30px;
    align-items: center;
    a{
        display: flex;
        align-items: center;
        padding: 0 20px;
        cursor: pointer;

        img{
            height: 20px;
            padding: 0 4px;
        }
        
        span{
            font-size: 13px;
            letter-spacing: 1.42px;
            position: relative;

            &:after{
                content: "";
                height: 2px;
                background: black;
                position: absolute;
                left: 0;
                right: 0;
                bottom: -6px;
                opacity: 0;
                tarnsform-origin: left center;
                transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
                transform: scaleX(0);
            }
        }
        &:hover{
            span:after{
                transform: scaleX(1);
                opacity: 1;
            }
        }
    }
`