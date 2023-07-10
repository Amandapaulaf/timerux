import styled from "@emotion/styled";

export const Container= styled.button`
width: 292px;
padding: 1.125rem 7.125rem;
border:none;
background-color: var(--tertiary-color-dark);
border-radius: 999px;
font-size: 1rem;
font-weigth: 600;
color: var(--white);
text-transform: uppercase;
transition: transform 0.2s ease-in-out;

&:hover{
    transform: scale(1.2);
    background-color: blue;
}
`;