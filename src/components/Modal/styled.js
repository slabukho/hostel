import styled from 'styled-components'

export const ModalRoomStyled = styled.div`
    position: fixed;
    z-index:100;
    height:100vh;
    width:100vw;
    top:0;
    left:0;
    background-color: #fff;
    &>span{
        position: absolute;
        right: 3%;
        top: 5%;
        width: 32px;
        height: 32px;
        opacity: 0.3;
        cursor: pointer;
        &::before,::after{
            position: absolute;
            left: 15px;
            content: ' ';
            height: 33px;
            width: 2px;
            background-color: #333;
        };
        &:hover{
            opacity: 1;
            }
        &::before{
                transform: rotate(45deg);
        }
        &::after{
                transform: rotate(-45deg);
        }
    }
    &>div{
        position: absolute;
        top:3%;
        left:3%;
        cursor: pointer;
    }
    &>section{
        width:65vw;
        margin: 0 auto;
        margin-top: 10vh;
        display: flex;
    .slide-container{
        height:20vw;
        width:30vw;
        margin-right:20px;
    }
    .each-slide{
        height:19vw;
        &>div{
            height:100%;
        }
    } 
    &>div{
        &>#book-room{
            height:5vh;
            width:fit-content;
            border-radius:5px;
            background-color: #f2c783;
            padding: 0 10px;
            cursor: pointer;
            display:flex;
            align-items:center;
            justify-content:center;
        }
    }
}
    
`

export const ModalOderStyled = styled.div`
    position: fixed;
    z-index:100;
    height:100vh;
    width:100vw;
    top:0;
    left:0;
    background-color: rgba(0,0,0,.8);
    &>section{
        position: absolute;
        top:50%;
        left: 50%;
        height:80vh;
        width:30vw;
        transform: translate(-50%, -50%);
        background-color:#fff;
        padding:15px;
        &>h4{
            font-size: 24px;
            line-height: 1.35;
        }
        &>div{
            display:flex;
            justify-content:space-between;
            align-items: center;
            margin: 10px 0;
        &>#picture{
            width:20%;
            border-radius: 15px;
        }
        &>#close{
            width:5%;
            cursor: pointer;
        }
        &>b{
            font-size: 18px;
        }
    }
    &>form{
        z-index:1;
        display: flex;
        flex-direction:column;
        position: absolute;
        top:60%;
        left: 50%;
        transform: translate(-50%, -50%);
        input{
                color: #000000;
                border: 1px solid #000;
                background-color: #fff;
                font-size: 16px;
                font-weight: 400;
                height: 55px;
                margin-bottom:40px;
            }
            button{
                color: #000000;
                background-color: #f2c783;
                font-family: OrchideaPro;
                font-weight: 600;
                font-size: 20px;
                width: 350px;
                height: 70px;
                padding: 0 15px;
                display: block;
                cursor: pointer;
                margin-top:40px;
                }
                span{
                    color:red;
                }
        div{
            .form-control{
                color: #000000;
                border: 1px solid #000000;
                background-color: #fff;
                font-size: 16px;
                font-weight: 400;
                height: 55px;
                width: 350px;
                margin-bottom:50px;
            }
            
        }
        
    }
    }
    &>span{
        position: absolute;
        right: 3%;
        top: 5%;
        width: 32px;
        height: 32px;
        opacity: 0.3;
        cursor: pointer;
        &::before,::after{
            position: absolute;
            left: 15px;
            content: ' ';
            height: 33px;
            width: 2px;
            background-color: #fff;
        };
        &:hover{
            opacity: 1;
            }
        &::before{
                transform: rotate(45deg);
        }
        &::after{
                transform: rotate(-45deg);
        }
    }

`