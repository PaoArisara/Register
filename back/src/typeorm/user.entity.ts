import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';


@Entity()
export class User {
    @PrimaryGeneratedColumn('uuid')
    id:string;

    @Column({ length: 500 })
    email:string;

    @Column({ length: 500 })
    password:string;
    
    @Column({ length: 500 })
    Firstname:string

    @Column({ length: 500 })
    Lastname:string
    
    @Column({ length: 500 })
    Gender:string
    
    @Column({ length: 500 })
    Month:string

    @Column({ length: 500 })
    Day:string

    @Column({ length: 500 })
    Year:string
   
    


}