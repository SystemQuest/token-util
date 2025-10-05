# SystemQuest Token Tool

🔑 A simple, beautiful web application for quickly obtaining JWT tokens for SystemQuest API testing and development.

## 🎯 Purpose

This tool provides a user-friendly interface to:
- Authenticate with GitHub OAuth
- Obtain JWT access tokens
- Copy tokens for API testing
- Use in development and testing environments

**Note**: This is a temporary tool. It will be deprecated once the main frontend application (`www.systemquest.dev`) is developed.

## 🚀 Quick Start

### Development

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Open http://localhost:3001
```

### Production Build

```bash
# Build for production
pnpm build

# Start production server
pnpm start
```

## 📦 Deployment to Vercel

### 1. Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit: SystemQuest Token Tool"
git remote add origin https://github.com/YOUR_ORG/systemquest-token.git
git push -u origin main
```

### 2. Deploy to Vercel

1. Visit [Vercel Dashboard](https://vercel.com/dashboard)
2. Click "Add New" → "Project"
3. Import your GitHub repository
4. Configure:
   - **Framework Preset**: Next.js
   - **Build Command**: `pnpm build`
   - **Output Directory**: `.next`
   - **Install Command**: `pnpm install`

5. Add Environment Variable:
   ```
   NEXT_PUBLIC_API_BASE=https://api.systemquest.dev
   ```

6. Click "Deploy"

### 3. Configure Custom Domain

1. In Vercel project settings → "Domains"
2. Add domain: `token.systemquest.dev`
3. Configure DNS:
   - Type: `CNAME`
   - Name: `token`
   - Value: `cname.vercel-dns.com`

### 4. Update GitHub OAuth App

1. Visit [GitHub OAuth Apps](https://github.com/settings/developers)
2. Find your OAuth App (Client ID: `Ov23liXBeIw9MqBvvoVZ`)
3. Keep Authorization callback URL as:
   ```
   https://api.systemquest.dev/v1/auth/github/callback
   ```
   (This supports all `*.systemquest.dev` subdomains automatically)

## 🔧 Configuration

### Environment Variables

```bash
# .env.local
NEXT_PUBLIC_API_BASE=https://api.systemquest.dev

# For local development:
# NEXT_PUBLIC_API_BASE=http://localhost:3000
```

### API Integration

This tool integrates with the SystemQuest API backend:
- **OAuth Endpoint**: `/v1/auth/github`
- **Callback**: `/v1/auth/github/callback`
- **Success Redirect**: `/success?access_token=...`

## 📱 Features

### Main Page
- 🎨 Beautiful gradient purple/blue UI
- 🔐 "Login with GitHub" button
- ℹ️ Helpful information cards
- ✅ Feature list
- 📱 Responsive design

### Success Page
- 🎉 Animated success icon
- 📋 Token display with syntax highlighting
- 📑 One-click copy button
- 💡 Usage example
- ⚠️ Security reminders
- 🔄 "Get New Token" action
- 🧪 "Test Token" link

## 🔒 Security

- ✅ Tokens transmitted via HTTPS
- ✅ 1-hour token expiration
- ✅ Secure GitHub OAuth flow
- ✅ No token storage (client-side only)
- ✅ Clear security warnings

## 📊 Tech Stack

- **Framework**: Next.js 15.5.4 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Deployment**: Vercel
- **Package Manager**: pnpm

## 🛠️ Development

### Project Structure

```
systemquest-token/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Main page (login)
│   ├── success/
│   │   └── page.tsx        # Success page (token display)
│   └── globals.css         # Global styles
├── public/                  # Static assets
├── package.json
├── next.config.ts
├── tsconfig.json
├── tailwind.config.ts
└── README.md
```

### Key Components

**Main Page** (`app/page.tsx`):
- Handles GitHub OAuth initiation
- Displays landing page UI
- Generates OAuth state parameter

**Success Page** (`app/success/page.tsx`):
- Receives token from URL parameters
- Displays token with copy functionality
- Shows usage examples and security warnings

## 📝 Usage

### For Developers

1. Visit `https://token.systemquest.dev`
2. Click "Login with GitHub"
3. Authorize the application
4. Copy the displayed token
5. Use in API requests:
   ```bash
   curl -H "Authorization: Bearer YOUR_TOKEN" \
        https://api.systemquest.dev/v1/auth/me
   ```

### For E2E Tests

```bash
# 1. Get token (manual or automated)
TOKEN="eyJhbGc..."

# 2. Use in tests
curl -H "Authorization: Bearer $TOKEN" \
     https://api.systemquest.dev/v1/courses
```

### For GitHub Actions

Store token in GitHub Secrets:
1. Get token from tool
2. Add to repository secrets: `PRODUCTION_ACCESS_TOKEN`
3. Use in workflows:
   ```yaml
   env:
     TOKEN: ${{ secrets.PRODUCTION_ACCESS_TOKEN }}
   ```

## 🎨 Design

- **Color Scheme**: Purple-to-blue gradient
- **Typography**: Clean, modern sans-serif
- **Layout**: Centered, card-based
- **Animations**: Subtle hover and scale effects
- **Responsive**: Mobile-first design

## ⚠️ Important Notes

1. **Temporary Tool**: This will be deprecated when `www.systemquest.dev` launches
2. **Token Expiration**: Tokens expire after 1 hour
3. **Security**: Never commit tokens to version control
4. **Purpose**: Development and testing only

## 📚 Related Documentation

- [SystemQuest API Documentation](../docs/v2/backend-api-design-review.md)
- [E2E Testing Plan](../docs/v2/e2e-testing-plan.md)
- [MVP Projects](../docs/v2/mvp-projects.md)

## 🤝 Contributing

This is a temporary tool. For improvements or issues, please contact the SystemQuest team.

## 📄 License

MIT © 2025 SystemQuest

---

**Last Updated**: 2025-10-05  
**Version**: 1.0.0  
**Status**: Active (Temporary)
