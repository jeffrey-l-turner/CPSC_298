import re
import hashlib
import sqlite3

# SecureString class
class SecureString:
  def __init__(self, password: str):
    if not self.is_password_strong(password):
      raise ValueError("Password must be 8 characters or longer and contain at least one number, one uppercase letter, one lowercase letter, and one special character.")
    self.password = password

  @staticmethod
  def is_password_strong(password: str):
    # Check password length and complexity
    if len(password) < 8:
      return False
    if not re.search(r'\d', password):  # Check for a number
      return False
    if not re.search(r'[a-z]', password):  # Check for a lowercase letter
      return False
    if not re.search(r'[A-Z]', password):  # Check for an uppercase letter
      return False
    if not re.search(r'\W', password):  # Check for a special character
      return False
    return True

class User:
  def __init__(self, username: str, password: str):
    self.username = username
    self.hashed_password = HashedPassword(SecureString(password))

class HashedPassword:
  def __init__(self, secure_string: SecureString):
    self.value = self.make_hashed_password(secure_string.password)

  @staticmethod
  def make_hashed_password(password: str):
    hashed_value = hashlib.sha256(password.encode()).hexdigest()
    return hashed_value

class LoginCredentials:
  def __init__(self, username: str, password: str):
    self.username = username
    self.password = password

def login(credentials: LoginCredentials):
  # Hash the input password
  hashed_input_password = HashedPassword.make_hashed_password(credentials.password)

  # Connect to the database
  conn = sqlite3.connect('my_database.db')
  c = conn.cursor()

  # Use a parameterized query to prevent SQL injection
  c.execute("SELECT hashed_password FROM users WHERE username=?", (credentials.username,))

  # Get the stored hashed password and close the connection
  result = c.fetchone()
  conn.close()

  if result is None:
    return False  # User not found

  stored_hashed_password = result[0]

  # Compare the hashed input password to the stored hashed password
  if hashed_input_password == stored_hashed_password:
    return True  # Login successful
  else:
    return False  # Login failed

# TEST METHOD
def test():
  # Connect to the database
  conn = sqlite3.connect('my_database.db')
  c = conn.cursor()

  # Create the users table
  c.execute("""
    CREATE TABLE IF NOT EXISTS users (
      username TEXT PRIMARY KEY,
      hashed_password TEXT
    )
  """)

  # Test creating a user with a weak password
  try:
    weak_user = User('weak_user', 'weak')
  except ValueError as e:
    print(str(e))  # Password must be 8 characters or longer and contain at least one number, one uppercase letter, one lowercase letter, and one special character.

  # Test creating a user with a strong password
  strong_user = User('strong_user', 'StrongPassword123!')

  # Insert the strong user into the database
  c.execute("INSERT INTO users (username, hashed_password) VALUES (?, ?)", (strong_user.username, strong_user.hashed_password.value))

  # Commit the changes and close the connection
  conn.commit()
  conn.close()

  # Test validating login credentials
  credentials = LoginCredentials('strong_user', 'StrongPassword123!')
  assert login(credentials) == True, "Test failed: Expected successful login with strong password"

  print("All tests passed")

test()
