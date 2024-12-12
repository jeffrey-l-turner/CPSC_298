from autogen import UserProxyAgent, GroupChat, GroupChatManager
from agents import BusinessStrategist, MarketAnalyst

def evaluate_startup_idea():
    print("\nWelcome to the Startup Idea Evaluator!")
    print("======================================")
    
    # Get user input
    print("\nPlease describe your startup idea and any relevant details:")
    startup_idea = input("> ")
    
    # Initialize agents
    user_proxy = UserProxyAgent(
        name="user",  # Simplified name
        human_input_mode="NEVER",
        max_consecutive_auto_reply=0,
        system_message="A proxy for the user that coordinates the startup evaluation process."
    )
    
    strategist = BusinessStrategist()
    analyst = MarketAnalyst()
    
    # Create the evaluation prompt
    evaluation_prompt = f"""Analyze this startup idea: {startup_idea}

Process:
1. Business Strategist should first analyze the basic viability
2. Market Analyst should then provide market insights
3. Business Strategist should give final recommendations based on all information

Please proceed with the analysis."""
    
    # Create a group chat for the analysis
    groupchat = GroupChat(
        agents=[user_proxy, strategist, analyst],
        messages=[],
        max_round=5
    )
    
    manager = GroupChatManager(groupchat=groupchat)
    
    # Start the group discussion
    user_proxy.initiate_chat(
        manager,
        message=evaluation_prompt,
        silent=False
    )

if __name__ == "__main__":
    evaluate_startup_idea()