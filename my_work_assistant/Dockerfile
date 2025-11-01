FROM python:3.12-slim
WORKDIR /app
COPY .. /app
RUN pip install -e .[dev]
CMD ["python", "-m", "my_work_assistant", "self-test"]
