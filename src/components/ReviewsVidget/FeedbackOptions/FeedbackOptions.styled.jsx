import styled from "styled-components";

export const Feedback = styled.div`
    margin-top: 20px;
    padding-top: 10px;
    padding-bottom: 10px;
    text-align: center;
    
    
`

export const ButtonsContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 20px;
    height: 30px;

    .button-good {
        width: 80px;
        border: none;
        cursor: pointer;
        margin-right: 20px;
        border-radius: 10px;

    }

    .button-neutural {
        width: 80px;
        border: none;
        cursor: pointer;
        margin-right: 20px;
        border-radius: 10px;
    }

    .button-bad {
        width: 80px;
        border: none;
        cursor: pointer;
        border-radius: 10px;
    }

    
`