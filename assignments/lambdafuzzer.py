import random

def generate_variable():
    return chr(random.randint(97, 122))

def generate_abstraction():
    variable = generate_variable()
    body = generate_expression()
    return f"(λ{variable}.{body})"

def generate_application():
    function = generate_expression()
    argument = generate_expression()
    return f"({function} {argument})"

def generate_expression():
    expression_type = random.choice(["variable", "abstraction", "application"])
    if expression_type == "variable":
        return generate_variable()
    elif expression_type == "abstraction":
        return generate_abstraction()
    else:
        return generate_application()

def generate_fuzz():
    return generate_expression()

if __name__ == "__main__":
    fuzz = generate_fuzz()
    print(fuzz, end="\n")