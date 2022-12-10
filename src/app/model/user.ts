export class User {
  id: string;
  name: string;
  email: string;
  phoneNumber: string;
  profileIcon: string;

  constructor(
    id: string,
    name: string,
    email: string,
    phoneNumber: string,
    profileIcon: string
  ) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.phoneNumber = phoneNumber;
      this.profileIcon = profileIcon;
  }
}
