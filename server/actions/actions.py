# This files contains your custom actions which can be used to run
# custom Python code.

# See this guide on how to implement these action:
# https://rasa.com/docs/rasa/custom-actions
# import requests
# from bs4 import BeautifulSoup
# from typing import Any, Text, Dict, List
# from rasa_sdk import Action, Tracker
# from rasa_sdk.executor import CollectingDispatcher


# This is a simple example for a custom action which utters "Hello World!"

# from typing import Any, Text, Dict, List

# from rasa_sdk import Action, Tracker
# from rasa_sdk.executor import CollectingDispatcher


# class ActionHelloWorld(Action):

#     def name(self) -> Text:
#         return "action_hello_world"

#     def run(self, dispatcher: CollectingDispatcher,
#             tracker: Tracker,
#             domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:

#         dispatcher.utter_message(text="Hello World!")

#         return []
# This files contains your custom actions which can be used to run
# custom Python code.

# See this guide on how to implement these action:
# https://rasa.com/docs/rasa/core/actions/#custom-actions/


# This is a simple example for a custom action which utters "Hello World!"

# from rasa_core.policies import FallbackPolicy
# from rasa_core.agent import Agent
# from rasa_core.policies import MemoizationPolicy, KerasPolicy

# class MyAgent(Agent):
#     def __init__(self):
#         fallback = FallbackPolicy(fallback_action_name="utter_default",
#                                     core_threshold=0.3,
#                                     nlu_threshold=0.3)
#         agent = Agent("domain.yml",
#                       policies=[MemoizationPolicy(), KerasPolicy(), fallback])
#         super().__init__(agent)
        
# @DefaultV1Recipe.register("my_agent")
# class MyAgentRecipe(DefaultV1Recipe):
#     @classmethod
#     def create(cls, config: Dict[Text, Any],
#                model_storage: ModelStorage,
#                resource: Resource) -> Agent:
#         return MyAgent()

