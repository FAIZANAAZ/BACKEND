# uv add pymongo[srv] python-dotenv in terminal 
import os
from dotenv import load_dotenv
from  pymongo import MongoClient 
import rich
from rich import print


load_dotenv()
# hm load kry hen env ki file sy data phit get kry hen
client: MongoClient = MongoClient(os.getenv("DB_URL"))

db=client["my_db"]
# is trha hm database ka name dery hen koi bhi name rkh sakty hen
collection=db["users"]
# is trha hm collection ka name dery hen koi bhi name rkh sakty hen collection ak tanle hi hota he

#////////////create data /////////////
# users_data={
#     "name": "faiza",
#     "age": 30,
#     "city": "New York"
# }
# collection.insert_one(users_data)

# uv run main.py run krky atlas me jakr cheq krengy ke bna data base or collection ya nhi
# click on cluster =>browse collections 

    
# update data////////////////

collection.update_one({
    "name": "faiza"
}, {
    "$set": {
        "age": 31
    }
})

# # delete data /////////////////
# collection.delete_one({
#         "name": "faiza"
# })
# terminal me dekhny ke liye /////////////////
data=collection.find({})
for user in data:
    rich.print(user)
    
    # loop lgana lazmi he

