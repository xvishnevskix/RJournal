import React, { CSSProperties } from 'react';
import { IconButton } from '@material-ui/core';
import {
  ModeCommentOutlined as CommentsIcon,
  RepeatOutlined as RepostIcon,
  BookmarkBorderOutlined as FavoriteIcon,
  ShareOutlined as ShareIcon,
} from '@material-ui/icons';
import Link from "next/link";

const styles: CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  position: 'relative',
  top: '5',
  listStyle: 'none',
  padding: '0',
  margin: '0',
};

interface PostsProps {
    id?: number;
}

export const PostActions: React.FC<PostsProps> = ({id}) => {
  return (
    <ul style={styles}>
      <li>
        <IconButton>

              <Link href={`/news/${id}`}>
                  <CommentsIcon > </CommentsIcon>
          </Link>

        </IconButton>
      </li>
      <li>
        <IconButton>
          <RepostIcon />
        </IconButton>
      </li>
      <li>
        <IconButton>
          <FavoriteIcon />
        </IconButton>
      </li>
      <li>
        <IconButton>
          <ShareIcon />
        </IconButton>
      </li>
    </ul>
  );
};
