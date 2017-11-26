export class Contact {
  id?: number;
  firstName: string;
  lastName: string;

  static mapper(contactEntity: any): Contact {
    const contact = new Contact();
    contact.id = contactEntity.id;
    contact.firstName = contactEntity.firtname;
    contact.lastName = contactEntity.lastname;
    return contact;
  }

  static mapperArray(contactEntityArray: any): Array<Contact> {
    const contacts: Array<Contact> = [];
    contactEntityArray.map((data: any) => {
      contacts.push(this.mapper(data));
    });
    return contacts;
  }

  static mapperDtoToEntity(contact: any): any {
    return {
      id: contact.id,
      firtname:  contact.firstName,
      lastname:  contact.lastName,
    };
  }
}
