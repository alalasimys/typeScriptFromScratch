class User5 {
  githubToken: string;
  jwtToken: string;
}

interface AuthStrategy {
  auth(user: User5): boolean;
}

class Auth {
  constructor(private strategy: AuthStrategy) {}

  setStrategy(strategy: AuthStrategy) {
    this.strategy = strategy;
  }

  public authUser(user: User5): boolean {
    return this.strategy.auth(user);
  }
}

class JWTStrategy implements AuthStrategy {
  auth(user: User5): boolean {
    if (user.jwtToken) {
      return true;
    }
    return false;
  }
}

class GithubStrategy implements AuthStrategy {
  auth(user: User5): boolean {
    if (user.githubToken) {
      // Идём в API
      return true;
    }
    return false;
  }
}

const user5 = new User5();
user5.jwtToken = 'token'; // set jwtToken
const authenticate = new Auth(new JWTStrategy()); // create authentication with JWTStrategy
console.log(authenticate.authUser(user5)); // return true because user5.jwtToken = 'token';
authenticate.setStrategy(new GithubStrategy());
console.log(authenticate.authUser(user5)); // return false because githubToken wasn't added
