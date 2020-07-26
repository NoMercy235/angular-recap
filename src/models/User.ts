import * as faker from 'faker';

export class User {
  id: string;
  name: string;
  city: string;
  age: number;

  constructor () {
    this.id = faker.random.uuid();
    this.name = faker.name.findName();
    this.city = faker.address.city();
    this.age = faker.random.number(100);
  }
}
