import styled from "styled-components";

const AddCardFormStyles = styled.form`
   & textarea{
       width: 260px;
       height: 60px;
       resize: none;
       border-radius: 5px;
       outline: none;
       font-size: 17px;
   }
   .add_card_form_btns{
       width: 260px;
       display: flex;
       justify-content: space-between;
       margin: 0 auto;
   }
`

export default AddCardFormStyles