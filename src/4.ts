class Key {
  private signature = Math.random();
  
  getSignature(): number {
    return this.signature;
  };
};

class Person {
  constructor(private key: Key) {};
  
  getKey(): Key {
    return this.key;
  };
}

abstract class House {
  protected door = false;
  protected tenants: Person[] = [];

  constructor(protected key: Key) {};
  
  comeIn(person: Person): void { 
    if (this.door === true) {
      this.tenants.push(person);
      console.log(`You came in!`)
    }
    else {
      console.log(`You can't come in! Door is closed!`)
    }
      
  };
  
  abstract openDoor(key: Key): void;
}

class MyHouse extends House{
  openDoor(key: Key): void{
    if (this.key.getSignature() === key.getSignature()) {
      this.door = true;
      console.log('Door opened');
    }      
  }
};

const key = new Key();
const otherKey = new Key();

const house = new MyHouse(key);

const person = new Person(key);
const otherPerson = new Person(otherKey);

house.openDoor(person.getKey());
house.openDoor(otherPerson.getKey());

house.comeIn(person);
house.comeIn(otherPerson);

export {};