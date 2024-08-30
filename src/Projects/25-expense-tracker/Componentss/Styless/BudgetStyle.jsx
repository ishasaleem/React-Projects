import styled from "styled-components";
export const BudgetStyle=styled.h3`

    input{
        outline: none;
        border: none;
        width: 100px;
        background: inherit;
        color: inherit;
        text-align: right;
        border-bottom: 1px solid #9999;
        padding: 0%.1rem 0.5rem;
        margin-bottom: 1rem;
        font-size: 1.3rem;
        font-weight: bold;
        &::-webkit-inner-spin-button,::-webkit-outer-spin-button{
            -webkit-appearance: none;
            margin: 0;
        }
        &:focus{
            background: #593c76;
            color:white;
          
        }
    }
`