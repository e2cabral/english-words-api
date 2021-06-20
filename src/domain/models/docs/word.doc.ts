import {
  Column, Entity, ObjectID, ObjectIdColumn,
} from 'typeorm';

@Entity({ database: 'default', name: 'words' })
export default class Word {
  @ObjectIdColumn()
  _id!: ObjectID;

  @Column()
  word!: string;

  @Column()
  pos!: string;

  @Column()
  definitions!: Array<string>;

  @Column()
  synonyms!: string;
}
