import { Breed } from "src/breeds/entities/breed.entity";
import { Column, DeleteDateColumn, Entity, ManyToOne } from "typeorm";

@Entity()
export class Cat {

    //@PrimaryGeneratedColumn()
    @Column({ primary: true, generated: true })
    id: number;

    @Column()
    name: string;

    @Column()
    age: number;

    @DeleteDateColumn()
    deletedAt: Date;

    //Relacion con la bd
    @ManyToOne(()=> Breed, (breed)=> breed.id,{
        eager:true,//trae la raza al hacer un find one
    })
    breed: Breed;
}
    