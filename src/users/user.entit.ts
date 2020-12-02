import { BeforeInsert, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, Unique } from "typeorm";
import { IsDate, IsEmail, Length, Matches, Max, Min } from "class-validator";



@Entity('user')
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 25 })
    fullName:string;

    @IsEmail()
    @Column({ type:'text' , unique:true })
    email:string;

    @Min(4 ,{message:'Pasword too weak :/'})
    @Max(20 ,{message:'Pasword too strong :/'})
    @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/)
    @Column()
    password:string;
    
   @CreateDateColumn()
   createdDate: Date;

   
}
