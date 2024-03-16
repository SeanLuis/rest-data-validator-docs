---
page: true
---

<div class="fill-height flex flex-column justify-center items-center">
  <div class="hero">
    <h1 style="line-height: 3rem">REST Data Validator</h1>
    <div class="badges">
      <img src="https://img.shields.io/badge/Jest%20Coverage-98.50%25-success?style=flat" alt="Jest Coverage">
      <a href="https://codecov.io/gh/SeanLuis/rest-data-validator"><img src="https://codecov.io/gh/SeanLuis/rest-data-validator/graph/badge.svg?token=rhWlGJspdW" alt="Codecov"></a>
      <a href="https://github.com/SeanLuis/rest-data-validator/actions/workflows/build.yml"><img src="https://github.com/SeanLuis/rest-data-validator/actions/workflows/build.yml/badge.svg" alt="Package Build"></a>
      <a href="https://badge.fury.io/js/rest-data-validator"><img src="https://badge.fury.io/js/rest-data-validator.svg" alt="Version"></a>
    </div>
    <p class="description">REST Data Validator is a versatile library designed to offer comprehensive validation for
      data in RESTful APIs.</p>
    <a href="/guide/installation" class="get-started-button">Get Started</a>
  </div>
  <div class="card-container">
    <a href="/guide/features" class="card">
    <i class="fas fa-star"></i>
      <h2>Features</h2>
      <p>Discover all the features REST Data Validator has to offer.</p>
      <span class="arrow">➔</span>
    </a>
    <a href="/guide/installation" class="card">
      <h2>Installation</h2>
      <p>Learn how to install REST Data Validator.</p>
      <span class="arrow">➔</span>
    </a>
    <a href="/community/contribution-guide" class="card">
      <h2>Contribute</h2>
      <p>Join the community and help improve REST Data Validator.</p>
      <span class="arrow">➔</span>
    </a>
    <a href="/resources/roadmap" class="card">
      <h2>Roadmap</h2>
      <p>See what's planned for the future of REST Data Validator.</p>
      <span class="arrow">➔</span>
    </a>
  </div>
</div>

<style scoped>
  :root {
    --vt-font-family-base: 'Inter var experimental', 'Inter var', Inter,
      -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
      Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    --vt-font-family-mono: Menlo, Monaco, Consolas, 'Courier New', monospace;
    --card-background-start: rgba(255, 255, 255, 0.7);
    --card-background-end: rgba(255, 255, 255, 0.4);
  }

  .fill-height {
    height: calc(100vh - calc(var(--vt-nav-height) * 2));
  }

  @media (max-width: 600px) {
    .fill-height {
      height: auto;
    }
  }

  .hero {
    text-align: center;
    padding: 2rem;
  }

  .badges {
    display: flex;
    justify-content: center;
    gap: 10px;
  }

  @media (max-width: 600px) {
    .badges {
      flex-direction: column;
      align-items: center;
    }
  }

  .description, .card p {
    font-family: var(--vt-font-family-base);
    margin: 1rem auto;
    max-width: 600px;
    color: black;
  }

  .get-started-button {
    display: inline-block;
    padding: 10px 20px;
    background: linear-gradient(to right, #6ee7b7, #3b82f6, #9333ea);
    color: white;
    text-decoration: none;
    border-radius: 20px;
    transition: transform 0.2s;
  }

  .get-started-button:hover {
    transform: scale(1.05);
  }

  .card-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
    padding: 2rem;
  }

  .hero h1 {
    font-family: var(--vt-font-family-base);
    font-weight: 700;
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  .card {
    position: relative;
    background: rgba(255, 255, 255, 0.19);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border: 1px solid rgba(255, 255, 255, 0.3);
    /* From https://css.glass */
    background: rgba(255, 255, 255, 0.19);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border: 1px solid rgba(255, 255, 255, 0.3);

    padding: 1.5rem;
    width: 300px;
    text-align: left;
    text-decoration: none;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .arrow {
    position: absolute;
    right: 20px;
    bottom: 10px;
    transition: transform 0.3s ease;
  }

  .card:hover .arrow {
    transform: translateX(5px);
  }

  .card h2 {
    font-weight: bold;
    margin-top: 0;
  }

  .card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2);
  }

  .card h2 {
    margin-top: 0;
  }

  .card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
  }

  .h-screen {
    height: 100vh;
  }

  .flex {
    display: flex;
  }

  .flex-column {
    flex-direction: column;
  }

  .justify-center {
    justify-content: center;
  }

  .items-center {
    align-items: center;
  }

  .dark .card p {
    color: white
  }

  .dark .description {
    color: white
  }
</style>
