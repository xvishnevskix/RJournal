
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne } from 'typeorm';
import { OutputBlockData } from '../dto/create-post.dto';
import { UserEntity } from '../../user/entities/user.entity';

@Entity('posts')
export class PostEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: true })
    title: string;

    @Column({ nullable: true, type: 'jsonb' })
    body: OutputBlockData[];

    @Column()
    description: string;

    @ManyToOne( () => UserEntity, {eager: true})
    user: UserEntity;

    @Column({ default: 0 })
    views: number;

    @Column({ nullable: true })
    tags?: string;

    @CreateDateColumn({type: 'timestamp'})
    createdAt: Date;

    @UpdateDateColumn({type: 'timestamp'})
    updatedAt: Date;
}
