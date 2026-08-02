from app.cache.cache_service import CacheService

cache = CacheService()

cache.set(
    "candidate:4",
    {
        "name": "Amal",
        "score": 90,
    },
)

print(cache.get("candidate:4"))

print(cache.exists("candidate:4"))

cache.delete("candidate:4")

print(cache.exists("candidate:4"))