from datetime import datetime

now = datetime.now()

hours = now.hour
minutes = now.minute
seconds = now.second

print(f"{hours}:{minutes}:{seconds}")

ms = now.timestamp() * 1000

days = int(ms // (1000 * 60 * 60 * 24))
print(days)