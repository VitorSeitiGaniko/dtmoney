import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root{
        --background: #f0f2f5;
        --red: #E52e54;
        --blue: #5429CC;
        --green: #33CC95;
        --white: #FFF;

        --blue-light: #6933FF;

        --text-title: #363f5f;
        --text-body: #969cb3;

        --shape: #FFFFFF
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html{
        @media (max-width: 1080px) {
            font-size: 93.75%;
        }

        @media (max-width: 728px) {
            font-size: 87.5%;
        }
    }

    body{
        background: var(--background);
        --webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button{
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }
    
    h1, h2, h3, h4, h5, h6, strong{
        font-weight: 600;
    }    

    button{
        cursor: pointer;
    }

    [disabled]{ 
        opacity: 0.6;
        cursor: not-allowed;
    }

    .react-modal-overlay{
        background: rgba(0, 0, 0, 0.5);

        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;

        display: flex;
        justify-content: center;
        align-items: center;
    }

    .react-modal-content{ 
        width: 100%;
        max-width: 576px;

        background: var(--background);
        padding: 48px;
        position: relative;
        border-radius: 4px;
    }

    .iconClose{
        background-image: url("data:image/svg+xml,%3Csvg width='14' height='14' viewBox='0 0 14 14' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z' fill='%23A8A8B3'/%3E%3C/svg%3E%0A");
        width: 14px;
        height: 14px;
        position: absolute;
        top: 20px;
        right: 20px;
        cursor: pointer;
        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.8);
        }
    }

`;
