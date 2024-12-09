#!/usr/bin/env python3

from agents import ClothingAssistant, ActivityAssistant, MealAssistant, UserProxy


def main():

    clothing_assistant = ClothingAssistant()
    activity_assistant = ActivityAssistant()
    meal_assistant = MealAssistant()
    user_proxy = UserProxy()

    user_proxy.initiate_chat(clothing_assistant, message="What should I wear today?")
    user_proxy.initiate_chat(activity_assistant, message="What should I do today?")
    user_proxy.initiate_chat(meal_assistant, message="Where should I eat?")


if __name__ == "__main__":
    main()
