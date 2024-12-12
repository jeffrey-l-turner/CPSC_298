import os
from autogen import AssistantAgent, UserProxyAgent
from dotenv import load_dotenv

load_dotenv()

# Get API key from environment
api_key = os.getenv('OPENAI_API_KEY')
if not api_key:
    raise ValueError("No OpenAI API key found. Please set OPENAI_API_KEY environment variable.")

# API config
CONFIG_LIST = [
    {
        "model": "gpt-4o-mini",
        "api_key": api_key,
    }
]

LLM_CONFIG = {
    "config_list": CONFIG_LIST,
    "temperature": 0.7,
}

class BusinessStrategist(AssistantAgent):
    def __init__(self):
        super().__init__(
            name="business_strategist",
            system_message="""You are an experienced Business Strategist who analyzes startup ideas.
For each analysis, focus on:
1. Business model viability
2. Target market potential
3. Revenue streams
4. Initial challenges

Provide concise, actionable insights based on the startup idea and any market feedback provided.""",
            llm_config=LLM_CONFIG,
            human_input_mode="NEVER",
            max_consecutive_auto_reply=3,
        )

class MarketAnalyst(AssistantAgent):
    def __init__(self):
        super().__init__(
            name="market_analyst",
            system_message="""You are a detail-oriented Market Analyst who evaluates market conditions and opportunities.
For each analysis, focus on:
1. Market size and growth potential
2. Competitor analysis
3. Consumer trends and behavior
4. Market entry barriers

Provide data-driven insights and market research perspectives for startup ideas.""",
            llm_config=LLM_CONFIG,
            human_input_mode="NEVER",
            max_consecutive_auto_reply=3,
        )