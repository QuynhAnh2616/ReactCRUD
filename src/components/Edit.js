import React,{ useState} from 'react'

const Edit = ({ text, todo, todos, setTodos }) => {
    const [inputText, setInputText] = useState("");

    const inputTextHandler = (e) => {
        console.log(e);
        setInputText(e.target.value);
      };
    
    //   const submitTodoHandler = (e) => {
    //     e.preventDefault();
    //     setTodos([
    //       ...todos,
    //       { text: inputText, completed: false, id: Math.random() * 1000, status: 'asset' },
    //     ]);
    //     setInputText("");
    //   };
    
 return (
     <div>
         <input type="text" value={text} onChange={inputTextHandler}
        />
     </div>
 );
}


export default Edit
