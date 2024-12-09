import os

from autogen import AssistantAgent, UserProxyAgent
from dotenv import load_dotenv

from tools import get_state, GET_STATE_DESC

# Load environment variables
load_dotenv()

# API config
CONFIG_LIST = [
    {
        "model": "llama3-70b-8192",
        "base_url": "https://api.groq.com/openai/v1/",
        "api_key": os.getenv("GROQ_API_KEY"),
    }
]

LLM_CONFIG = {"config_list": CONFIG_LIST}


class ClothingAssistant(AssistantAgent):
    def __init__(self):
        name = "Clothing assistant"
        system_message = """
        You are a helpful and friendly assistant that suggests relevant
        clothing items based on current weather information. Provide at
        least three recommendations in a bulleted list format.
        """
        super().__init__(
            name=name,
            system_message=system_message,
            llm_config=LLM_CONFIG,
            human_input_mode="NEVER",
            max_consecutive_auto_reply=3,
        )
        self.register_for_llm(
            description=GET_STATE_DESC,
        )(get_state)


class ActivityAssistant(AssistantAgent):
    def __init__(self):
        name = "Activity assistant"
        system_message = """
        You are a helpful and friendly assistant that suggests relevant
        activites based on current weather conditions and attractions
        near the provided location. Provide at least three
        recommendations in a bulleted list format.
        """
        super().__init__(
            name=name,
            system_message=system_message,
            llm_config=LLM_CONFIG,
            human_input_mode="NEVER",
            max_consecutive_auto_reply=3,
        )
        self.register_for_llm(
            description=GET_STATE_DESC,
        )(get_state)


class MealAssistant(AssistantAgent):
    def __init__(self):
        name = "Meal assistant"
        system_message = """
        You are a helpful and friendly assistant that suggests relevant
        cuisines and specific places to eat based on the provided location, time of day,
        and current season. Provide at least three recommendations in a bulleted list
        format.
        """
        super().__init__(
            name=name,
            system_message=system_message,
            llm_config=LLM_CONFIG,
            human_input_mode="NEVER",
            max_consecutive_auto_reply=3,
        )
        self.register_for_llm(
            description=GET_STATE_DESC,
        )(get_state)


class UserProxy(UserProxyAgent):
    def __init__(self):
        name = "User proxy"
        system_message = """
        You are someone looking for advice for planning their day.
        """
        super().__init__(
            name=name,
            system_message=system_message,
            code_execution_config={"use_docker": False},
            human_input_mode="NEVER",
        )
        self.register_for_execution()(get_state)
