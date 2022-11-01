```
docker build -t "jakmat-ui" .
docker run --rm --mount type=bind,source="$(pwd)"/.,target=/app --name jakmat-ui jakmat-ui
```
