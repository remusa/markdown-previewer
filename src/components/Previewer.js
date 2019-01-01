import React from 'react'

import marked from 'marked'

const renderer = new marked.Renderer()

// renderer.link = function(href, title, text) {
//     return `<a target="_blank" href="${href}">${text}` + '</a>'
// }

const Previewer = ({ input }) => (
    <div
        id="preview"
        className="previewer"
        dangerouslySetInnerHTML={{
            __html: marked(input, { renderer: renderer }),
        }}
    />
)

export default Previewer
