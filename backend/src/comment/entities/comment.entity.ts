import { PostEntity } from 'src/post/entities/post.entity';
import {Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, JoinColumn, ManyToOne} from 'typeorm';
import {UserEntity} from "../../user/entities/user.entity";

@Entity('comments')
export class CommentEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    text: string;

    @ManyToOne(() => UserEntity, {
        nullable: false,
    })
    @JoinColumn({ name: 'userId' })
    user: UserEntity;

    @ManyToOne(() => PostEntity, {
        nullable: false,

    })
    @JoinColumn({ name: 'postId' })
    post: PostEntity;

    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date;

    @UpdateDateColumn({ type: 'timestamp' })
    updatedAt: Date;
}


