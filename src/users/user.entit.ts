import { BeforeInsert, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, Unique } from "typeorm";
import { IsDate, IsEmail, Length, Matches, Max, Min } from "class-validator";
import { Exclude, Expose } from "class-transformer";



@Entity('user')
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 25 })
    fullName:string;

    @Column({ type:'text' , unique:true })
    @IsEmail()
    email:string;

    @Column()
    @Exclude()
    @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,{message:'Password must contain Capital & Numerical characters'})
    password:string;
    
   @CreateDateColumn()
   createdDate: Date;


   
}
