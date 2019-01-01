import React from 'react'

const Editor = ({ onInputChange, input }) => (
    <div className="editor">
        <textarea
            id="editor"
            className="editor__textarea"
            placeholder="Insert markdown text..."
            onChange={onInputChange}
            value={input}
        />
    </div>
)

export default Editor
