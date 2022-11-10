import React, {CSSProperties} from 'react';
import Link from 'next/link';
import { Paper, Typography } from '@material-ui/core';
import styles from './Post.module.scss';
import { PostActions } from '../PostActions';
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';

interface PostProps {
    title: string;
    id: number;
    description: string;
    imageUrl?: string;
    views: number;
}



export const Post: React.FC<PostProps> = ({id,title, description, imageUrl,views}) => {
  return (
    <Paper elevation={0} className="p-20" classes={{ root: styles.paper }}>
      <Typography variant="h5" className={styles.title}>
        <Link href={`/news/${id}`}>
          <a>
              {title}

          </a>
        </Link>
      </Typography>
      <Typography  className={styles.typography}>
          {description}

          <div className={styles.views}><VisibilityOutlinedIcon fontSize={"small"} >
          </VisibilityOutlinedIcon>
              <div >{views}</div>
          </div>

      </Typography>
        {imageUrl && (
            <img
                src="https://leonardo.osnova.io/a21ca5a9-d95b-560d-9a6f-9fa87eff7fcd/-/preview/600/-/format/webp/"
                height={500}
                width={600}
                alt={title}

            />
        )}
      <PostActions id={id}/>
    </Paper>
  );
};

//className="mt-10 mb-15"