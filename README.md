# Lab: Publish a Docker Image to GHCR (Starter)

## Objective

Complete a starter Node + Express + GraphQL + Mongoose + Cypress API and configure GitHub Actions to push a Docker image to GitHub Container Registry (GHCR).

By the end of this lab, you will:

1. Complete missing API routes
2. Run Cypress API tests locally
3. Build a Docker image
4. Complete a GHCR workflow in `.github/workflows/ghcr.yml`

---

## Step 1: Install and Run Tests

```bash
npm install
npm test
```

Expected result in Starter: tests fail until TODO routes are completed.

### Checkpoint 1

- [ ] Dependencies installed
- [ ] You ran tests and saw current failures

---

## Step 2: Complete API TODOs in `src/app.js`

Implement:

1. `GET /health` returning:

```json
{
  "status": "ok",
  "service": "ghcr-demo-api"
}
```

2. GraphQL endpoint at `/graphql` using `graphqlHTTP`

Run tests again:

```bash
npm test
```

### Checkpoint 2

- [ ] `/health` route implemented
- [ ] `/graphql` route mounted
- [ ] Cypress tests pass locally

---

## Step 3: Build and Run the Docker Image

```bash
docker build -t ghcr-demo-api:local .
docker run --rm -p 3000:3000 ghcr-demo-api:local
```

Verify:

```bash
curl http://localhost:3000/health
```

### Checkpoint 3

- [ ] Local image builds
- [ ] Container responds on port 3000

---

## Step 4: Complete GHCR Workflow TODOs

Open `.github/workflows/ghcr.yml` and complete TODO 3–5:

- Add `docker/login-action@v3`
- Add `docker/metadata-action@v5`
- Add `docker/build-push-action@v6`

Workflow requirements:

- Trigger on push to `main`
- Push image to `ghcr.io/<owner>/ghcr-demo-api`
- Publish both `latest` and `sha` tags

### Checkpoint 4

- [ ] Workflow includes login action
- [ ] Workflow includes metadata action
- [ ] Workflow includes build-push action

---

## Step 5: Push and Verify on GitHub

1. Commit your completed changes
2. Push to `main`
3. Open GitHub **Actions** tab
4. Verify workflow **Build and Push GHCR Image** passes
5. Open GitHub **Packages** and find your image

### Checkpoint 5

- [ ] Actions workflow run is green
- [ ] GHCR image appears under Packages

---

## Reflection

Answer briefly:

1. Why is `packages: write` required in workflow permissions?
2. Why do teams publish both `latest` and `sha` tags?
3. What is the difference between manual `docker push` and workflow-based push?
