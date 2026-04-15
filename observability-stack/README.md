# Observability Stack

This project implements a complete observability stack including Prometheus, Grafana, Alertmanager, and a Node.js API with database integrations (MongoDB, PostgreSQL, Redis).

## Structure

- **app/**: Node.js API with metrics instrumentation.
- **prometheus/**: Prometheus configuration and alert rules.
- **alertmanager/**: Alertmanager notification settings.
- **grafana/**: Grafana provisioning (datasources and dashboards).
- **exporters/**: Configurations for Node, Mongo, Redis, and Postgres exporters.
- **k8s/**: Kubernetes deployment manifests.
- **docker-compose.yml**: Local development stack with all services and exporters.
