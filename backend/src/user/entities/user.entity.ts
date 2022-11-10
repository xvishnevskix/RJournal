import { CommentEntity } from 'src/comment/entities/comment.entity';
import {Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany} from 'typeorm';
import { PostEntity } from '../../post/entities/post.entity';

@Entity('users')
export class UserEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: true })
    fullName: string;

    @Column({ nullable: true ,
    unique: true
    })
    email: string;

    @OneToMany(() => CommentEntity, (comment) => comment.user, {
        eager: false,
        nullable: true,
    })
    comments: CommentEntity[];

    @OneToMany(() => PostEntity, (post) => post.user, {
        eager: false,
        nullable: true,
    })
    posts: PostEntity[];

    @Column({ nullable: true })
    password?: string;

    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date;

    @UpdateDateColumn({ type: 'timestamp' })
    updatedAt: Date;
}