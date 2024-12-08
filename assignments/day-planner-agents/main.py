#!/usr/bin/env python3

import json
import logging
import os
from typing_extensions import Annotated
import requests

from autogen import AssistantAgent, UserProxyAgent
from dotenv import load_dotenv

WEATHER_API_URL = "https://wttr.in"

GET_CONTEXT_DESC = """
A function that returns the current weather conditions, location, and date
# based on the IP address of the user.
"""


# A helper function that returns the current weather conditions, location, and date
# based on the IP address of the user
def get_context() -> Annotated[dict, GET_CONTEXT_DESC]:
    url = f"{WEATHER_API_URL}/?format=j1"
    response = requests.get(url)
    logging.info(response.status_code)
    logging.info(response.content)
    info = json.loads(response.content)
    current_conditions = info["current_condition"][0]
    area = info["nearest_area"][0]
    city = area["areaName"][0]["value"]
    region = area["region"][0]["value"]
    country = area["country"][0]["value"]
    datetime = current_conditions["localObsDateTime"]
    location = f"{city}, {region}, {country}"
    weather_info = {
        "temp_fahrenheit": current_conditions["temp_F"],
        "precipitation_inches": current_conditions["precipInches"],
        "description": current_conditions["weatherDesc"][0]["value"],
        "location": location,
        "datetime": datetime,
    }
    return weather_info


def main():
    # Load environment variables
    load_dotenv()

    # API config
    config_list = [
        {
            "model": "llama3-8b-8192",
            "base_url": "https://api.groq.com/openai/v1/",
            "api_key": os.getenv("GROQ_API_KEY"),
        }
    ]

    # Clothing assistant agent
    clothing_assistant = AssistantAgent(
        name="Weather assistant",
        system_message="""
                        You are a helpful and friendly assistant that suggests relevant
                        clothing items based on current weather information. Provide at
                        least three recommendations in a bulleted list format.
                        """,
        llm_config={"config_list": config_list},
        human_input_mode="NEVER",
        max_consecutive_auto_reply=2,
    )

    # Register the tool
    clothing_assistant.register_for_llm(
        name="get_context",
        description=GET_CONTEXT_DESC,
    )(get_context)

    # Activity assistant agent
    activity_assistant = AssistantAgent(
        name="Activity assistant",
        system_message="""
                        You are a helpful and friendly assistant that suggests relevant
                        activites based on current weather conditions and attractions
                        near the provided location. Provide at least three
                        recommendations in a bulleted list format.
                       """,
        llm_config={"config_list": config_list},
        human_input_mode="NEVER",
        max_consecutive_auto_reply=2,
    )

    # Register the tool
    activity_assistant.register_for_llm(
        name="get_context",
        description=GET_CONTEXT_DESC,
    )(get_context)

    # Meal assistant agent
    meal_assistant = AssistantAgent(
        name="Meal assistant",
        system_message="""
                        You are a helpful and friendly assistant that suggests relevant
                        cuisines and places to eat based on the provided location and
                        time of day. Provide at least three recommendations in a
                        bulleted list format.
                       """,
        llm_config={"config_list": config_list},
        human_input_mode="NEVER",
        max_consecutive_auto_reply=2,
    )

    # Register the tool
    meal_assistant.register_for_llm(
        name="get_context",
        description=GET_CONTEXT_DESC,
    )(get_context)

    # User proxy agent
    user_proxy = UserProxyAgent(
        name="User proxy",
        code_execution_config={"use_docker": False},
        human_input_mode="NEVER",
    )

    user_proxy.register_for_execution(name="get_context")(get_context)

    user_proxy.initiate_chat(clothing_assistant, message="What should I wear?")

    user_proxy.initiate_chat(activity_assistant, message="What should I do?")

    user_proxy.initiate_chat(meal_assistant, message="What should I eat?")


if __name__ == "__main__":
    main()
