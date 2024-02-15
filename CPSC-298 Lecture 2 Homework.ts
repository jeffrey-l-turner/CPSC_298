import { SecureString } from 'secure-string-library';

interface User {
    username: string;
    password: SecureString;
}

interface LoginCredentials {
    username: string;
    password: string;
}

interface HashedPassword {
    algorithm: string; // Details specific to the chosen hashing algorithm
    hash: string; // Hashed password value
}

export { User, LoginCredentials, HashedPassword };
 
