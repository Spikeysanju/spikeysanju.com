# Portfolio built with SvelteKit

This is my personal portfolio website built with SvelteKit using a number of interesting technologies and tools. It showcases my skills, projects and interests.

## Technologies and Tools

- 💾 **Prisma:** ORM used for interacting with the PostgreSQL database.
- 🐘 **PostgreSQL:** Open-source relational database management system.
- ⌨️ **Typescript:** Typed superset of JavaScript that offers static type checking.
- 🖼️ **Satori:** Dynamic OG image generation tool.
- 📧 **Cloudflare MailChannels:** API service used for sending and receiving emails via workers.
- 🪣 **Cloudflare R2 Storage:** Content delivery network used for storing CDN images and photos.
- 🔒 **AuthJS:** Authentication library used for adding authentication.
- 🎨 **TailwindCSS:** Utility-first CSS framework for styling.
- 📝 **MDsvex:** Markdown preprocessor used for compiling markdown to HTML.
- 📄 **SvelteMarkdown:** Markdown compiler for use with Svelte components.
- ⏰ **Date-fns:** Fast and lightweight library for manipulating dates.


## Getting Started

If you want to run this project locally, follow these steps:

### Prerequisites
- Node.js (version >= 16.0.0)

### Installation
1. Clone the repository
```
git clone https://github.com/spikeysanju/spikeysanju.com
```
2. Navigate to the project directory
```
cd repo
```
3. Install dependencies
```
npm install
```
4. Create environment variables file in root directory with following variables:
```
# DATABASE CONFIG
DATABASE_URL="postgresql://acme:password@localhost:5432/acme"

# AUTH CONFIG
AUTH_SECRET="your auth secret" // make sure length is 32 character
AUTH_TRUST_HOST="true"

# GITHUB CONFIG
GITHUB_ID="your github oauth id"
GITHUB_SECRET="your github oauth secret"

# CLOUDFLARE CONFIG
CLOUDFLARE_SECRET="your secret key" // used to valid request to upload photos

# WEBSITE URL
PUBLIC_WEBSITE_URL="http://localhost:5173"

# EMAIL CONFIG
EMAIL_NAME="Acme"
EMAIL_FROM="news@acme.com"
EMAIL_AUTH_TOKEN="your secret"
REPLY_EMAIL_TO="hi@acme.com"
REPLY_EMAIL_TO_NAME="Acme"
EMAIL_URL="your email workers url"
AUTHOR_NAME="Acme"

```
5. Run the development server
```
npm run dev
```

## Contributions
Contributions to this project are welcome. If you find any bugs or want to add new features, feel free to create an issue or submit a pull request.

## License
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.