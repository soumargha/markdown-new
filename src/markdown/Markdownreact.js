import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';


const Markdownreact = () => {
    const [markdown, setMarkDown ] = useState('welcome to markdown')
  return (
    <div className="center-div">
        <textarea className="left-side" value={markdown}
        onChange={(e) => setMarkDown(e.target.value)}></textarea>


        <div className="right-side">
        <ReactMarkdown>{markdown}</ReactMarkdown>
        </div>
    </div>
  )
}

export default Markdownreact;
