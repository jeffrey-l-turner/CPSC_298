# Agentic AI Project

A project that uses Microsoft AutoGen and allows AI agents to make clothing and activity recommendations to a user based on the weather conditions at their current location.

## Dependencies

- `autogen`
- `python-dotenv`
- `flaml[automl]`

## Configuration

Paste Groq API key in the `.env` file:

```
GROQ_API_KEY=...
```

## Execution

```sh
python3 main.py
```

## Authors

We are the yellow group.

- Nataniel Farzan
- Ben Fellows
- Drew Floyd
- Jonathan Vergonio
- Ryan Jewik
- Shuntaro Abe

## References

- https://github.com/microsoft/autogen
- https://microsoft.github.io/autogen/0.2/docs/tutorial/tool-use
- https://github.com/chubin/wttr.in
- https://docs.docker.com/get-started/docker-concepts/building-images/writing-a-dockerfile/
