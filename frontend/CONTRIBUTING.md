# Contributing to Quantum Arc Labs Website

First off, thank you for considering contributing to Quantum Arc Labs Website! It's people like you that make this project better.

## Code of Conduct

By participating in this project, you are expected to uphold our Code of Conduct. Please report unacceptable behavior to quantumarc.labs@gmail.com.

## How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check the existing issues to avoid duplicates. When you create a bug report, include as many details as possible:

- **Use a clear and descriptive title**
- **Describe the exact steps to reproduce the problem**
- **Provide specific examples**
- **Describe the behavior you observed and what you expected**
- **Include screenshots if possible**
- **Include your environment details** (OS, browser, Node version)

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion:

- **Use a clear and descriptive title**
- **Provide a detailed description of the suggested enhancement**
- **Explain why this enhancement would be useful**
- **List any alternatives you've considered**

### Pull Requests

1. **Fork the repository** and create your branch from `main`
2. **Make your changes** following our coding standards
3. **Test your changes** thoroughly
4. **Update documentation** if needed
5. **Write clear commit messages**
6. **Submit a pull request**

## Development Process

### Setting Up Your Development Environment

1. Fork and clone the repository
   ```bash
   git clone https://github.com/your-username/quantum-arc-labs-website.git
   cd quantum-arc-labs-website
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Create a new branch
   ```bash
   git checkout -b feature/your-feature-name
   ```

4. Set up environment variables
   ```bash
   cp .env.example .env.local
   # Add your configuration
   ```

5. Start development server
   ```bash
   npm run dev
   ```

### Coding Standards

#### TypeScript/JavaScript
- Use TypeScript for type safety
- Follow ESLint rules
- Use functional components with hooks
- Keep components small and focused
- Use meaningful variable names

#### Styling
- Use Tailwind CSS utility classes
- Follow existing design patterns
- Ensure responsive design (mobile-first)
- Test on multiple screen sizes

#### Git Commits
- Use present tense ("Add feature" not "Added feature")
- Use imperative mood ("Move cursor to..." not "Moves cursor to...")
- Limit first line to 72 characters
- Reference issues and pull requests

**Examples:**
```
feat: Add contact form validation
fix: Resolve mobile menu bug
docs: Update README installation steps
style: Format code with Prettier
refactor: Simplify email service logic
test: Add unit tests for API routes
```

### Testing

Before submitting a PR:
- Test on multiple browsers (Chrome, Firefox, Safari)
- Test on mobile devices
- Check for console errors
- Verify all links work
- Test form submissions

### Code Review Process

1. Maintainers will review your PR
2. Address any requested changes
3. Once approved, your PR will be merged
4. Delete your feature branch after merge

## Project Structure

```
app/
  ├── about/          # About page
  ├── api/            # API routes
  ├── contact/        # Contact page
  ├── services/       # Services page
  └── ...
components/
  └── ui/             # Reusable UI components
public/               # Static assets
```

## Style Guide

### Component Structure
```typescript
"use client";
import React from "react";
// Other imports...

export default function ComponentName() {
  // State declarations
  // Handlers
  // JSX return
}
```

### API Routes
```javascript
export async function POST(req) {
  try {
    // Logic
    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ success: false }, { status: 500 });
  }
}
```

## Questions?

Feel free to:
- Open an issue for discussion
- Email us at quantumarc.labs@gmail.com
- Check existing issues and discussions

## Recognition

Contributors will be recognized in our README and project documentation.

Thank you for contributing! 🚀