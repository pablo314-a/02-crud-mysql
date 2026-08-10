import { Cat } from "src/cats/entities/cat.entity";
import { Column, Entity, OneToMany } from "typeorm";

@Entity()
export class Breed {

    @Column({ primary:true, generated:true })
    id:number

    @Column({ length : 500})
    name:string;

    //Relacion con la bd RECIBIMOS LA INSTANCIA DE CAT Y PASAMOS SU ID
    @OneToMany(()=> Cat, (cat)=> cat.breed)
    cats: Cat[];
}
