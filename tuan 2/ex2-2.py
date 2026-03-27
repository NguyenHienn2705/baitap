import math

# Cau 1
r = 5
volume = (4/3) * math.pi * (r ** 3)
print(volume)

# Cau 2
total_book = 60
price_per_book = 24.95 * 0.6
total_price_book = total_book * price_per_book
shipping_cost = 3 + (total_book - 1) * 0.75
total_cost = total_price_book + shipping_cost

print(total_cost)

# Cau 3
easy_pace = 8 + 15/60
tempo_pace = 7 + 12/60

total_time = easy_pace + 3 * tempo_pace + easy_pace
print(total_time)