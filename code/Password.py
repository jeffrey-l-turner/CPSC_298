import re
import hashlib
from typing import NamedTuple

# Define the necessary data structures with type annotations

class Email(NamedTuple):
    value: str

    def is_valid(self) -> bool:
        # Regular expression pattern for validating an email address
        pattern = r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'
        return re.match(pattern, self.value) is not None

class SecureString(NamedTuple):
    value: str

    def is_secure(self) -> bool:
        # Check if the password is at least 8 characters long
        if len(self.value) < 8:
            return False

        # Check for at least one uppercase letter
        if not re.search(r'[A-Z]', self.value):
            return False

        # Check for at least one lowercase letter
        if not re.search(r'[a-z]', self.value):
            return False

        # Check for at least one special character or number
        if not re.search(r'[~!@#$%^&*()_+\-=\[\]{}|;:\'",.<>?/0-9]', self.value):
            return False

        return True

class HashedPassword(NamedTuple):
    algorithm: str
    value: str

# Define the User and LoginCredentials structures

class User(NamedTuple):
    username: Email
    password: HashedPassword

    @staticmethod
    def create(username: Email, password: SecureString) -> 'User':
        # Hash the password when creating a new User
        hashed_password = hash_password(password)
        return User(username, hashed_password)


class LoginCredentials(NamedTuple):
    username: Email
    password: SecureString

# Function to hash a password

def hash_password(password: SecureString) -> HashedPassword:
    # Using SHA-256 hashing algorithm
    hashed = hashlib.sha256(password.value.encode()).hexdigest()
    return HashedPassword("SHA-256", hashed)

# Function to authenticate a user

def authenticate_user(credentials: LoginCredentials, user: User) -> bool:
    # Hash the provided password
    hashed_password = hash_password(credentials.password)

    # Compare the hashed password value with the stored hash value
    return hashed_password.value == user.password.value



# Example usage

def main():
    # Loop for getting a valid email
    while True:
        user_input_email = input("Enter your email: ")
        input_email = Email(user_input_email)
        if input_email.is_valid():
            break
        print("Invalid email. Please try again.")

    # Loop for getting a valid password
    while True:
        user_input_password = input("Enter your password: ")
        input_password = SecureString(user_input_password)
        if input_password.is_secure():
            break
        print("Password must be at least 8 characters long, contain an uppercase letter, a lowercase letter, and a special character or number.")

    # Example user with the hashed password
    user = User.create(username=user_input_email, password=input_password)

    # Login credentials
    login_credentials = LoginCredentials(username=input_email, password=input_password)

    # Attempt to authenticate the user
    is_authenticated = authenticate_user(login_credentials, user)
    print("User authenticated:", is_authenticated)

if __name__ == "__main__":
    main()

