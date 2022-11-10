import React from 'react';
import Link from 'next/link';
import { Paper, Typography } from '@material-ui/core';
import Image from 'next/image';

import styles from './AnotherPost.module.scss';
import { PostActions } from '../PostActions';

export const AnotherPost: React.FC = () => {
    // @ts-ignore
    return (
        <Paper elevation={0} className="p-20" classes={{ root: styles.paper }}>
            <Typography variant="h5" className={styles.title}>
                <Link href="/news/test-123">
                    <a>
                        Кот прилёг отдохнуть в английском парке миниатюр — и стал героем шуток и фотожаб о
                        «гигантском пушистом захватчике»
                    </a>
                </Link>
            </Typography>
            <Typography className="mt-10 mb-15">
                Пока одни не могли соотнести размеры животного и окружения, другие начали создавать
                апокалиптические сюжеты с котом в главной роли.
            </Typography>
            <Image
                src="https://leonardo.osnova.io/45937880-e62a-5d87-a5b1-430d88d155c7/"
                height={500}
                width={600}
            />
            <PostActions/>
        </Paper>
    );
};
