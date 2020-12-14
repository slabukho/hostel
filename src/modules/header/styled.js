import styled from 'styled-components'

export const HeaderStyled = styled.div`
    height: 14vh;
    max-width:100vw;
    padding:0 18.5vw;
    display:flex;
    position: relative;
    #logo{
        margin:10px 0;
    img{
        height:11vh;
        }
    }
    #center-head{
        display:flex;
        flex-direction:column;
        align-items: center;
        position: relative;
        width:45vw;
        height:11vh;
        #links{
            display:flex;
            justify-content:space-between;
            div{
                position: absolute;
                top:16%;
                left:8%;
                a{
                    margin:0 10px;
                    img{
                        width:45px;

                    }
                }
            }
            span{
                a{
                    text-decoration: none;
                    color:#686868;
                    font-size:20px;
                }
                position: absolute;
                top:21%;
                right:0;

            }
        }
    }
    #ul-head{
        position:absolute;
        bottom:-30px;
        left:25px;
        width:45vw;
        ul{
            width:100%;
            display:flex;
            justify-content: space-between;
            li{
                list-style-type: none;
                a{
                    text-decoration: none;
                    font-size:21px;
                    font-family: 'OrchideaPro',Arial,sans-serif;
                    font-weight:600;
                    color:#000;
                    :hover{
                        color:#686868;
                    }
                }
            }
        }
    }
    #languages{
        display:flex;
        position: absolute;
        top:40%;
        right:18%;
        div{
            display:flex;
            flex-direction:column;
            align-items: center;
            margin: 0 7px;
            cursor: pointer;
            img{
                width:40px;
            }
        }
    }
    #selected{
        opacity:0.5;
    }
`