import styled from 'styled-components'

export const RequestStyled = styled.div`
    height:80vh;
    width:100%;
    max-width: 100vw;
    background: url('https://rethinkoffsite.wsp.com/wp-content/uploads/2019/03/tetra-4.jpg');
    background-size: 100%;
    background-position: center center;
    background-size:cover;
    background-repeat: no-repeat;
    min-height:550px;
    background-attachment:scroll;
    position: relative;
    :after{
        content: '';
        background-image: linear-gradient(to bottom, rgba(24,28,31,0.3), rgba(24,28,31,0.7));
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        z-index: 0;
    }
    div{
        z-index: 1;
        max-width:100vw;
        display:flex;
        #description{
            color:white;
            display:flex;
            flex-direction: column;
            position: absolute;
            top:20%;
            left:23%;
            align-items: center;
            h1{
                font-size:80px;
                font-weight:600;
                margin:0;
                ::before{
                    content:'';
                    background-image: url('https://static.tildacdn.com/tild3062-3235-4832-a231-363661343233/1.svg');
                    width:80px;
                    height:22.5px;
                    position: absolute;
                    background-size: cover;
                    left:-90px;
                    top:25%;
                }
                ::after{
                    content:'';
                    background-image: url('https://static.tildacdn.com/tild3364-6336-4034-b537-376637333364/2.svg');
                    width:80px;
                    height:22.5px;
                    position: absolute;
                    background-size: cover;
                    right:-90px;
                    top:25%;
                }
            }
            h2{
                margin:0;
                font-size: 40px;
            }
        }
        #description-ul{
            color:white;
            display:flex;
            flex-direction: column;
            position: absolute;
            top:50%;
            left:23%;
            font-size:25px;
            align-items: center;
            margin:5px;
            line-height:1.55;
            font-weight:100;
            font-family:'OrchideaPro',Arial,sans-serif;
        }
    }
    form{
        z-index:1;
        display: flex;
        flex-direction:column;
        position: absolute;
        top:26%;
        right:18%;
        input{
                color: #000000;
                border: 1px solid #f2c783;
                background-color: #fff;
                font-size: 16px;
                font-weight: 400;
                height: 55px;
                margin-bottom:20px;
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
                margin-top:20px;
                }
                span{
                    color:red;
                }
        div{
            .form-control{
                color: #000000;
                border: 1px solid #f2c783;
                background-color: #fff;
                font-size: 16px;
                font-weight: 400;
                height: 55px;
                width: 350px;
                margin-bottom:20px;
            }
            
        }
        
    }
    input[type="date"]:before {
    content: attr(placeholder) !important;
    color: #aaa;
    margin-right: 0.5em;
  }
  input[type="date"]:focus:before,
  input[type="date"]:valid:before {
    content: "";
  }
`