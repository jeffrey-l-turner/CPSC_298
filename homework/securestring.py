# Write a function in Python to handle user login using secure password hashing. Define interfaces for User, LoginCredentials, and HashedPassword. Ensure type safety to prevent common security vulnerabilities like SQL injection.

from typing import Union

class User:
    def __init__(self, username: str, password: 'HashedPassword'):
        self.username = username
        self.password = password

class LoginCredentials:
    def __init__(self, username: str, password: 'SecureString'):
        self.username = username
        self.password = password

class HashedPassword:
    def __init__(self, hashed_password: str):
        self.hashed_password = hashed_password

class SecureString:
    def __init__(self, value: str):
        self.value = value

def hash_password(password: 'SecureString') -> HashedPassword:
    # Implement secure password hashing algorithm here
    # Return the hashed password as an instance of HashedPassword
    pass

def login(credentials: LoginCredentials, user: User) -> bool:
    # Implement login logic here
    # Compare the hashed password of the user with the hashed password of the provided credentials
    # Return True if the login is successful, False otherwise
    pass

