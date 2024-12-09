# Agentic AI Project

A project that uses Microsoft AutoGen and allows AI agents to make clothing, activity, and meal recommendations to a user based on the weather conditions at their current location.

## Agents

- `ClothingAssistant`
- `ActivityAssistant`
- `MealAssistant`
- `UserProxy`

## Dependencies

- `autogen`
- `python-dotenv`
- `flaml[automl]`

Install dependencies:

```sh
pip install -r requirements.txt
```

## Configuration

Paste your [Groq](https://groq.com/) API key in the `.env` file:

```
GROQ_API_KEY=...
```

## Execution

```sh
python3 main.py
```

## Authors

We are the yellow group.

- Nataniel Farzan (Lead)
- Drew Floyd (Product Owner)
- Jonathan Vergonio (QA)
- Ben Fellows (Dev)
- Ryan Jewik (Dev)
- Shuntaro Abe (Dev)

## References

- https://github.com/microsoft/autogen
- https://microsoft.github.io/autogen/0.2/docs/tutorial/tool-use
- https://github.com/chubin/wttr.in
- https://docs.docker.com/get-started/docker-concepts/building-images/writing-a-dockerfile/
