import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn} from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  uuid_authsupa: string;

  @Column({ nullable: true })
  document: string;

  @Column()
  email: string;

  @Column()
  name: string;

  @Column()
  lastname: string;

  @Column()
  phone: string;

  @Column()
  password: string;

  @Column({ nullable: true })
  address: string;

  @Column()
  auth_code: string;

  @Column()
  mobile: string;

  @Column()
  roles: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
