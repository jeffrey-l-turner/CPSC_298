import json
import logging
from typing_extensions import Annotated
import requests

WEATHER_API_URL = "https://wttr.in"

GET_STATE_DESC = """
A function that returns the current weather conditions, location, and date.
"""


# A helper function that returns the current weather conditions, location, and date
# based on the IP address of the user
def get_state() -> Annotated[dict, GET_STATE_DESC]:
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
    state = {
        "temp_fahrenheit": current_conditions["temp_F"],
        "precipitation_inches": current_conditions["precipInches"],
        "description": current_conditions["weatherDesc"][0]["value"],
        "location": location,
        "datetime": datetime,
    }
    return state
