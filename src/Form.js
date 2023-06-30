import React from 'react';
import { string } from 'prop-types';
function Form({ type = "", placeholder ="", tipo="",name="", label = ""}) {
  let input;
  if (tipo === "input") {
    input =<input name={name} class="u-full-width" placeholder={placeholder}></input>
  }
 return (
    <>
      <label>{label}</label>
      {input}
    </>
)
}
Form.propTypes = {
   label: String
}
export default Form;