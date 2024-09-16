class LambdaTerm:
    def __init__(self, term):
        self.term = term

    def __str__(self):
        return str(self.term)

    def __repr__(self):
        return f"LambdaTerm({self.term})"

class Variable:
    def __init__(self, name):
        self.name = name

    def __str__(self):
        return self.name

    def __repr__(self):
        return f"Variable({self.name})"

class Application:
    def __init__(self, func, arg):
        self.func = func
        self.arg = arg

    def __str__(self):
        return f"({self.func} {self.arg})"

    def __repr__(self):
        return f"Application({self.func}, {self.arg})"

class Lambda:
    def __init__(self, var, body):
        self.var = var
        self.body = body

    def __str__(self):
        return f"λ{self.var}. {self.body}"

    def __repr__(self):
        return f"Lambda({self.var}, {self.body})"

class BetaReduction:
    @staticmethod
    def reduce(term, env):
        if isinstance(term, Variable):
            return env.get(term.name, term)
        elif isinstance(term, Application):
            func = BetaReduction.reduce(term.func, env)
            arg = BetaReduction.reduce(term.arg, env)
            return Application(func, arg)
        elif isinstance(term, Lambda):
            return term
        else:
            raise ValueError("Unsupported term")

def evaluate(term, env):
    while True:
        new_term = BetaReduction.reduce(term, env)
        if new_term == term:
            return new_term
        term = new_term

def main():
    # Example: λx.x (λy.y) (λz.z)
    env = {Variable("x"): Lambda(Variable("y"), Variable("y")),
           Variable("y"): Lambda(Variable("z"), Variable("z"))}
    term = Lambda(Variable("x"), Application(Lambda(Variable("y"), Variable("y")), Lambda(Variable("z"), Variable("z"))))
    result = evaluate(term, env)
    print(result)

if __name__ == "__main__":
    main()
