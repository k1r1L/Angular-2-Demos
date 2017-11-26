export class GitProfile {
  login : string;
  avatar_url : string;
  location : string;

  constructor(login : string, avatar_url : string, location : string) {
    this.login = login;
    this.avatar_url = avatar_url;
    this.location = location;
  }
}