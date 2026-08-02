import json

from app.cache.redis_client import get_redis


class CacheService:

    def __init__(self):
        self.redis = get_redis()

    def get(self, key: str):

        value = self.redis.get(key)

        if value is None:
            return None

        try:
            return json.loads(value)

        except Exception:
            return value

    def set(
        self,
        key: str,
        value,
        ttl: int = 3600,
    ):

        if isinstance(value, (dict, list)):
            value = json.dumps(value)

        self.redis.setex(
            key,
            ttl,
            value,
        )

    def delete(
        self,
        key: str,
    ):
        self.redis.delete(key)

    def exists(
        self,
        key: str,
    ):
        return self.redis.exists(key)

    def clear(self):
        self.redis.flushdb()