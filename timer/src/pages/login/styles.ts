import styled from "@emotion/styled"

export const Wrapper = styled.main`
background-color: var(--primary-color-dark);
min-heigth: 100vh;

display: grid;
grid-template-rows: 1fr 4rem;
align-items: center;
gap: 2rem;

footer{
   text-align:center;
   color: var(--white);
}

`;
 export const Main= styled.div`
 width: min(100%, 30.4375rem);
 margin-inline:auto;
 display:flex;
 flex-direction:column;
 gap: 2rem;
 `;

 export const Header= styled.header`
 width:100%;
 display: flex;
 flex-direction:column;
 justify-content: center;
 align-items: center;
 h1{
    font-weigth: 700;
    font-size: 4rem;
    line-heigth: 4.6875rem;
    color: var(--primary-color);
    
 }
 p{
    font-weigt:400;
    font-size: 1.25rem;
    color: var(--white);

 }
 `;
 export const Form=styled.form`
 width:100%;
 display: flex;
 flex-direction:column;
 align-items: center;
 gap:2rem;

.inputContainer{
   display: flex;
   flex-direction: column;
   width:100%;
   gap:1rem;
   

}

 `;



 