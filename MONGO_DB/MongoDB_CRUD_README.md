# 🚀 MongoDB Atlas with Python - Full Setup & CRUD Boilerplate

This guide and boilerplate helps you set up **MongoDB Atlas** and perform **CRUD operations** in Python using `pymongo` and `rich`.

---

## ✅ Steps to Set Up MongoDB Atlas

### 1. Create a Cluster
- Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- Sign in and create a new **free cluster** (choose your nearest region)

### 2. Create a Database User
- Navigate to **Database Access**
- Create a user (e.g. `tahaahmed`) with password (e.g. `taha1234`)
- Assign role: "Read and write to any database" (or a specific one)

### 3. Set Network Access
- Go to **Network Access**
- Click **Add IP Address**
  - Use your IP or `0.0.0.0/0` for access from anywhere (dev use)

### 4. Wait for Cluster to Be Ready
- This may take 1–3 minutes

### 5. Get Connection String
- Go to **Clusters > Connect > Connect your application**
- Copy the connection string:
  ```
  mongodb+srv://<user>:<pass>@cluster0.mongodb.net/?retryWrites=true&w=majority
  ```
- Replace `<user>` and `<pass>` with your details (URL-encoded if needed)

### 6. Use URI in Your Python Code
- Prefer storing in `.env` file
- Use `pymongo.MongoClient(uri)` to connect

### 7. Send Data from Python
- Use insert/find/update commands

### 8. Check Data in Atlas
- Go to **Clusters > Collections**
- See your database and inserted documents

---

## ✅ Bonus Tips

- 🔒 Use `.env` + `python-dotenv` to secure credentials
- ⚠️ URL-encode special characters (e.g. `@` → `%40`)
- 🧪 Use `.find_one()` to test connection
- 🧼 MongoDB auto-creates databases/collections on first insert

---

# 🧠 MongoDB CRUD Boilerplate (Python + pymongo + rich)

```python
# 🔧 Boilerplate Setup
import os
from dotenv import load_dotenv
from pymongo import MongoClient
import rich

load_dotenv()

client = MongoClient(os.getenv("Db_uri"))
db = client["myschooldb"]
collection = db["student"]
```

---

### 📥 Create (Insert)

```python
student_info = {
    "name": "Ahmed",
    "age": 21
}

collection.insert_one(student_info)
rich.print("[green]Document inserted successfully.[/green]")
```

---

### 📖 Read (Find)

```python
students = collection.find()

for student in students:
    rich.print(student)
```

---

### 🛠️ Update

```python
collection.update_one(
    {"name": "Ahmed"},
    {"$set": {"name": "Mohamed"}}
)
rich.print("[yellow]Document updated successfully.[/yellow]")
```

---

### ❌ Delete

```python
collection.delete_one({"name": "Mohamed"})
rich.print("[red]Document deleted successfully.[/red]")
```
