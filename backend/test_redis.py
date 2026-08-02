from app.cache.redis_client import get_redis

redis = get_redis()

redis.set("name", "Amal")

print(redis.get("name"))