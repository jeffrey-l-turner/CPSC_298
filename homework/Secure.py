from dataclasses import dataclass
from typing import TypedDict
import bcrypt

# Define the interface for User data
@dataclass
class User:
    username: str
    hashed_password: bytes  # Storing the hashed password as bytes

# Define the interface for LoginCredentials
class LoginCredentials(TypedDict):
    username: str
    password: str  # Plain text password, not safe to store

# Define the interface for HashedPassword
@dataclass
class HashedPassword:
    hashed_password: bytes

def hash_password(password: str) -> bytes:
    """
    Hash a password for storing.
    """
    salt = bcrypt.gensalt()
    return bcrypt.hashpw(password.encode('utf-8'), salt)

def verify_password(stored_password_hash: bytes, provided_password: str) -> bool:
    """
    Verify a stored password against one provided by user
    """
    return bcrypt.checkpw(provided_password.encode('utf-8'), stored_password_hash)

def login_user(credentials: LoginCredentials, user: User) -> bool:
    """
    Simulate user login, verifying credentials against stored user information.
    """
    # In a real application, you would retrieve the user information (including the hashed password)
    # from a database, using parameterized queries to prevent SQL injection.
    # Here, we simulate this by directly comparing to a 'user' object.
    if credentials['username'] == user.username:
        return verify_password(user.hashed_password, credentials['password'])
    else:
        return False

# Example usage
if __name__ == "__main__":
    # Simulate creating a user with a hashed password
    user_password = "secure_password"
    hashed = hash_password(user_password)
    user = User(username="john_doe", hashed_password=hashed)

    # Simulate a login attempt
    credentials = LoginCredentials(username="john_doe", password="secure_password")
    login_success = login_user(credentials, user)
    print("Login successful:", login_success)
