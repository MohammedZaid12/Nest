import { BeforeInsert, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, Unique } from "typeorm";
import * as bcrypt from 'bcryptjs'

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

   @BeforeInsert()
    async hashPassword(){
       this.password = await bcrypt.hash(this.password , 10);
   }

   toResponseObject(){
    const {id,fullName,createdDate,email} = this;
    return {id,fullName,createdDate,email};
   }
   
}
