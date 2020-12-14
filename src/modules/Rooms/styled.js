import styled from 'styled-components'

export const RoomsStyled = styled.div`
    width:70vw;
    margin:0 auto;
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    h4{
        align-self: flex-start;
        color: #292929;
        font-size: 45px;
        font-family: 'OrchideaPro',Arial,sans-serif;
        line-height: 1.55;
        font-weight: 600;
        background-position: center center;
        border-color: transparent;
        border-style: solid;
        position: relative;
        ::after{
            content:'';
            display: inline-block;
            width: 50%;
            height: 5px;
            background-color: #f2c783;
            position:absolute;
            bottom:0;
            left:0;
        }
    }
    #rooms-container{
       
        /* margin: 0 auto; */
        display: flex;
        flex-wrap:wrap;
    }
`