import styled from 'styled-components'
import logoPic from '../static/logo.png'

//div 組件
export const HeaderWrapper = styled.div`
    position: relative;
    height: 58px;
    border-bottom: 1px solid #f0f0f0;
`

export const Logo = styled.div`
    position: absolute;
    top:0;
    left:0;
    display: block;
    width: 100px;
    height: 56px;
    background: url(${logoPic});
    background-size: contain;
    background-repeat: no-repeat;
` 

export const Nav = styled.div`
    width:960px;
    padding-right: 70px;
    box-sizing: border-box;
    height:100%;
    margin: 0 auto;
`

export const NavItem = styled.div`
    &.left{
        float: left;
    }
    &.right{
        float:right;
    }
    &.active{
        color:#ea6f5a;
    }
    color: #333;
    line-height:56px;
    padding: 0 15px;
    font-size: 17px;
`


export const SearchWrapper = styled.div`
    float: left;
    position: relative;
    .zoom {
        position: absolute;
        bottom:5px;
        right:5px;
        width: 30px;
        line-height:30px;
        border-radius:  15px;
        text-align: center;
        &.focused{
            background:#777
        }
    }
`

export const SearchInfo = styled.div`
    position: absolute;
    left:0;
    top: 56px;
    width: 240px;
    background: #fff;
    padding: 0 20px;
    box-shadow: 0 0 8px rgba(0,0,0,.2);
`
export const SearchIntoTitle = styled.div`
    margin-top:20px;
    margin-bottom: 15px;
    line-height: 20px;
    font-size: 14px;
    color: #969696;
`
// 加上display: block; 才能旋轉
// transition all .2s ease-in; 動畫時間
// .2s==0.2s
export const SearchIntoSwitch = styled.span`
    float: right;
    font-size:13px;
    cursor: pointer;
    .spin {
        display: block;
        float: left;
        font-size:12px;
        margin-right:2px;
        transition all .2s ease-in;
        transform: rotate(0deg)
        transform-origin: center center;
    }
`
export const SearchInfoItem = styled.a`
    margin-right: 10px;
    margin-bottom: 15px;
    float:left;
    line-height:20px;
    padding: 0 5px;
    border: 1px solid #ddd;
    color: #787878;
    border-radius: 3px;
`

export const NavSearch = styled.input.attrs({
    placeholder: '搜尋'
})`
    width: 160px;
    height:38px;
    border: none;
    outline: none;
    margin-top: 9px;
    margin-left:20px;
    border-radius: 19px;
    background: #eee;
    box-sizing: border-box;
    padding: 0 35px;
    color: #666;
    font-size: 14px;
    &::placeholder {
        color: #999;
    }
    &.focused{
        width:240px;
    }
    &.slide-enter{
        width: 160px;
        transition: all .2s ease-out;
    }
    &.slide-enter-active{
        width: 240px;
    }
    &.slide-exit{
        width: 160px;
        transition: all .2s ease-out;
    }
`

export const Addition = styled.div`
    position: absolute;
    right:0;
    top:0;
    height:56px;
`

export const Button = styled.div`
    float: right;
    margin-top: 9px;
    margin-right: 20px;
    padding: 0 20px;
    line-height: 38px;
    border: 1px solid #ec6149;
    border-radius: 19px;
    font-size: 14px;
    &.reg{
        color: #ec6149;
    }
    &.writting{
        color: #fff;
        background: #ec6149;
    }
`