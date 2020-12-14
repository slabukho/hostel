import styled from 'styled-components'

export const RoomStyled = styled.div`
    position: relative;
    display:flex;
    align-items: center;
    flex-direction:column;
    width: calc(50% - 40px);
    margin: 40px 20px;
    cursor: pointer;
    &>img{
        width:100%;
    }
    &>h3{
        font-size: 24px;
        line-height: 1.35;
    }
    &>span{
        margin-top:5px;
    }
    &>b{
        margin: 10px 0;
        font-size: 20px;
        font-weight: 600;
    }
    &>div{
        display:flex;
        align-items:center;
        justify-content:center;
        background-color: #f2c783;
        text-align: center;
        white-space: nowrap;
        vertical-align: middle;
        font-weight: 700;
        background-image: none;
        cursor: pointer;
        width:20%;
        height:40px;
        border-radius:5px;
    }
`