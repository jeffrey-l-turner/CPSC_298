function secureHashPassword(password: SecureString): HashedPassword {
  // Simulate password hashing
  const salt = "randomSalt";
  const hash = `hashed-${password.decrypt()}`; // Decrypt only at the point of hashing
  return {
    algorithm: "SHA-256",
    salt: salt,
    hash: hash,
  };
}

function login(credentials: LoginCredentials): boolean {
  // Example: retrieve the stored hashed password (mock)
  const storedHashedPassword: HashedPassword = {
    algorithm: "SHA-256",
    salt: "randomSalt",
    hash: "hashed-correctPassword",
  };

  const hashedPassword: HashedPassword = secureHashPassword(credentials.password);

  // Compare the hashed password with the stored value
  return hashedPassword.hash === storedHashedPassword.hash;
}
