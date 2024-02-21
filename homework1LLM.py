# I created code that ensures the user has a strong password using SecureString

class SecureString:
    #intializes and validates value
    def __init__(self, value: str):
        self._validate(value)
        self.value = value

    @staticmethod
    def _validate(value: str): 
        if len(value) < 8:
            raise ValueError("Password must be at least 8 characters long.")
        #Checks to see if the string is less than 8 characters
        if not any(char.isdigit() for char in value):
            raise ValueError("Password must contain at least one digit.")
        #Makes sure there is one digit 
        if not any(char.isalpha() for char in value):
            raise ValueError("Password must contain at least one letter.")
        #Makes sure there is one letter
        
        

