'''
autoeg.py

based on the example code for Python(AgentChat) in the readme at

https://github.com/microsoft/autogen

to install the requirements, first upgrade pip:

% pip install --upgrade pip

then:

% pip install 'autogen-agentchat==0.4.0.dev11' 'autogen-ext[openai]==0.4.0.dev11'

then run this file:

% python3 autoeg.py

edit the agent names and system messages as desired.


OPEN AI KEY INSTRUCTIONS:
Make a file called openai_key.py with this format:
OPENAI_API_KEY = "xxx"
where xxx is your openai key.
'''

import asyncio
from autogen_agentchat.agents import AssistantAgent
from autogen_agentchat.ui import Console
from autogen_agentchat.conditions import TextMentionTermination
from autogen_agentchat.teams import RoundRobinGroupChat
from autogen_ext.models.openai import OpenAIChatCompletionClient

from openai_key import OPENAI_API_KEY

DEFAULT_SYSTEM_MESSAGE = 'You are a helpful AI assistant. Solve tasks using your tools.' \
                         ' Reply with TERMINATE when the task has been completed.'

from system_messages import PLANNER_MESSAGE, CODER_MESSAGE

# Define a tool
async def get_weather(city: str) -> str:
    return f"The weather in {city} is 73 degrees and Sunny."

async def main() -> None:
    # Define an agent
    weather_agent_1 = AssistantAgent(
        # system_message = DEFAULT_SYSTEM_MESSAGE + ' Always do a good job, but be concise.',
        system_message = PLANNER_MESSAGE,
        name="planner_agent",
        model_client=OpenAIChatCompletionClient(
            model="gpt-4o-2024-08-06",
            api_key=OPENAI_API_KEY,
        ),
        tools=[get_weather],
    )
    
    weather_agent_2 = AssistantAgent(
        # system_message = DEFAULT_SYSTEM_MESSAGE + ' Sometimes suggest another thing to do that might help.',
        system_message = CODER_MESSAGE,
        name="coder_agent",
        model_client=OpenAIChatCompletionClient(
            model="gpt-4o-2024-08-06",
            api_key=OPENAI_API_KEY,
        ),
        tools=[get_weather],
    )

    # Define termination condition
    termination = TextMentionTermination("TERMINATE")

    # Define a team
    agent_team = RoundRobinGroupChat([weather_agent_1, weather_agent_2], termination_condition=termination)

    # Run the team and stream messages to the console
##    stream = agent_team.run_stream(task="What is the weather in New York?")
    # stream = agent_team.run_stream(task="What is the weather in several prominent cities?")
    stream = agent_team.run_stream(task="Create a snake game in python.")
    await Console(stream)

asyncio.run(main())
