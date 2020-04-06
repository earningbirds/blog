import React from 'react'

import './index.scss'

export const PostAuthor = ({ author }) => (
  <div className="post-author">
    <i>작성자: {author}</i>
  </div>
)
