import React, { useState } from "react";
import { Sub } from "./types";

interface FormState{
  inputValues: Sub
}

interface FormProps  {
  onNewSub: (newSub: Sub) => void
}

function Form({onNewSub}: FormProps) {
  const [inputValues, setInputValues] = useState<FormState["inputValues"]>({
    nick: '',
    subMonths: 0,
    avatar: '',
    description: ''
  })

  const handlleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault()
    onNewSub(inputValues)
  };

  const handleChange = ( evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setInputValues({
      ...inputValues,
      [evt.target.name] : evt.target.value
    })
  }

  return (
    <div>
      <form onSubmit={handlleSubmit}>
        <input onChange={handleChange} value={inputValues.nick}  type='text' name='nick' placeholder='nick'></input>
        <input onChange={handleChange} value={inputValues.subMonths} type='text' name='subMonths' placeholder='subMonths'></input>
        <input onChange={handleChange} value={inputValues.avatar} type='text' name='avatar' placeholder='avatar'></input>
        <textarea onChange={handleChange} value={inputValues.description}   name='description' placeholder='description'></textarea>
        <button>Save new sub</button>
      </form>
    </div>
  );
}

export default Form;
