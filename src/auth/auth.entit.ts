import { IsDate, IsEmail, Length, Matches, Max, Min } from "class-validator";

export class Auth {
   
    @IsEmail()
    email:string;

    @Min(4 ,{message:'Pasword too weak :/'})
    @Max(20 ,{message:'Pasword too strong :/'})
    @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/)
    password:string;

}
