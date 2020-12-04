import { BeforeInsert, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, Unique } from "typeorm";
import { IsDate, IsEmail, Length, Matches, Max, Min } from "class-validator";
import { Exclude } from "class-transformer";



@Entity('user')
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 25 })
    fullName:string;

    @Column({ type:'text' , unique:true })
    email:string;

    @Column()
    password:string;
    
   @CreateDateColumn()
   createdDate: Date;

   
}
