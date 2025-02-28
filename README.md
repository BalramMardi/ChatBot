# CDP How-To Chatbot

A React-based chatbot application designed to provide guidance on how to use various **Customer Data Platforms (CDPs)**, including **Segment**, **mParticle**, **Lytics**, and **Zeotap**. Whether you're a developer, marketer, or data analyst, this chatbot simplifies the process of finding answers to your CDP-related questions.

---

## ✨ Features

- **CDP-Specific Guidance**: Get step-by-step answers to "how-to" questions for **Segment**, **mParticle**, **Lytics**, and **Zeotap**.
- **Interactive Chat Interface**: A clean and intuitive chat interface with message history for seamless conversations.
- **Suggested Questions**: Quick-access buttons for common CDP-related queries.
- **CDP Selection**: Filter your questions by selecting a specific CDP platform.
- **Markdown Support**: Rich text formatting in bot responses for better readability.
- **Responsive Design**: Fully optimized for both desktop and mobile devices.

---

## 🛠️ Technologies Used

- **React 18**: For building the user interface.
- **TypeScript**: For type-safe and scalable code.
- **Tailwind CSS**: For responsive and modern styling.
- **Vite**: For fast development and build tooling.
- **React Markdown**: For rendering Markdown content in bot responses.
- **Lucide React**: For beautiful and customizable icons.
- **UUID**: For generating unique identifiers for chat messages.

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v16 or higher)
- **npm** or **yarn** (for package management)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/BalramMardi/ChatBot
   cd ChatBot
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## 🤖 How It Works

1. User Interface: The app provides a clean and interactive chat interface where users can type questions or select from suggested questions.
2. CDP Selection: Users can filter their questions by selecting a specific CDP platform (e.g., Segment, mParticle, Lytics, or Zeotap).
3. Question Processing: When a user submits a question, the app analyzes it to determine:

   - Which CDP it relates to.

4. What specific task or feature the user is asking about.
5. Response Generation: The app retrieves the appropriate response from its knowledge base and displays it in the chat.
6. Markdown Rendering: Responses are formatted with Markdown for better readability, including code snippets, lists, and bold/italic text.

## ❓ Supported Question Types

1. Platform-Specific "How-To" Questions: Step-by-step guides for specific tasks on each CDP.
2. Comparison Questions: Understand the differences between CDPs (e.g., "What’s the difference between Segment and mParticle?").
3. General CDP Functionality Questions: Learn about core features and use cases of CDPs.

## 📂 Project Structure

```
   Zeotap-Assignment2/
   ├── public/              # Static assets
   ├── src/
   │   ├── components/      # React components
   │   ├── data/            # Knowledge base and CDP-specific data
   │   ├── styles/          # Tailwind CSS and custom styles
   │   ├── types/           # TypeScript types and interfaces
   │   ├── App.tsx          # Main application component
   │   └── main.tsx         # Entry point
   ├── .gitignore           # Files and directories to ignore
   ├── package.json         # Project dependencies and scripts
   ├── tsconfig.json        # TypeScript configuration
   └── vite.config.ts       # Vite configuration

```

### 📬 Contact

For questions, feedback, or contributions, feel free to reach out:

Balram Mardi  
GitHub: [Balram Mardi](https://github.com/BalramMardi)  
Email: [rybalram@gmail.com](mailto:rybalram@gmail.com)
