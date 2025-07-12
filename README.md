# Paraphrasing Web App

A modern, AI-powered web application for paraphrasing text with a beautiful glassmorphism-inspired interface. Built with Flask backend and React frontend, featuring real-time text processing using Ollama's llama3:8b model.

## ✨ Features

- **AI-Powered Paraphrasing**: Advanced text paraphrasing using Ollama's llama3:8b model
- **Modern UI/UX**: Sleek glassmorphism design with smooth animations
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Real-time Processing**: Instant paraphrasing results
- **Multiple Pages**: Home, Paraphraser, About, and Contact pages
- **Consistent Branding**: Olive green and white theme throughout the application

## 🛠️ Tech Stack

### Backend
- **Flask**: Python web framework
- **Ollama**: Local AI model inference
- **Subprocess**: Model execution
- **CORS**: Cross-origin resource sharing

### Frontend
- **React**: JavaScript library for building user interfaces
- **CSS3**: Modern styling with glassmorphism effects
- **React Router**: Client-side routing
- **Responsive Design**: Mobile-first approach

### AI Model
- **llama3:8b**: Meta's Llama 3 8B parameter model via Ollama

## 🚀 Quick Start

### Prerequisites
- Python 3.7+
- Node.js 14+
- npm or yarn
- Ollama installed and running

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/UsmanNadeemGit/paraphrasing-web-app.git
   cd paraphrasing-web-app
   ```

2. **Install Ollama and the model**
   ```bash
   # Install Ollama (if not already installed)
   # Visit: https://ollama.ai/download
   
   # Pull the llama3:8b model
   ollama pull llama3:8b
   ```

3. **Set up the backend**
   ```bash
   # Install Python dependencies
   pip install flask flask-cors
   
   # Start the Flask backend
   python app.py
   ```
   The backend will run on `http://localhost:5000`

4. **Set up the frontend**
   ```bash
   # Navigate to frontend directory
   cd frontend
   
   # Install dependencies
   npm install
   
   # Start the React development server
   npm start
   ```
   The frontend will run on `http://localhost:3000`

5. **Access the application**
   Open your browser and visit `http://localhost:3000`

## 📁 Project Structure

```
paraphrasing-web-app/
├── app.py                 # Flask backend server
├── static/               # Static files for Flask
├── templates/            # Flask templates
├── frontend/             # React frontend application
│   ├── public/          # Public assets
│   ├── src/             # React source code
│   │   ├── components/  # React components
│   │   ├── pages/       # Page components
│   │   └── App.js       # Main App component
│   ├── package.json     # Frontend dependencies
│   └── .gitignore       # Frontend git ignore
└── README.md            # This file
```

## 🎨 UI/UX Features

- **Glassmorphism Design**: Modern frosted glass effect with transparency
- **Smooth Animations**: CSS transitions and hover effects
- **Floating Navigation**: Rounded, floating navbar with active page highlighting
- **Responsive Layout**: Adapts seamlessly to different screen sizes
- **Consistent Theme**: Olive green (#6B8E23) and white color scheme
- **Modern Typography**: Clean, readable fonts with proper hierarchy

## 🔧 Configuration

### Backend Configuration
The Flask backend is configured to:
- Run on port 5000
- Accept CORS requests from the frontend
- Use Ollama's llama3:8b model for paraphrasing
- Handle text processing via subprocess calls

### Frontend Configuration
The React frontend includes:
- React Router for navigation
- Responsive design breakpoints
- CSS custom properties for theming
- Component-based architecture

## 📱 Pages

1. **Home Page**: Landing page with app features and call-to-action
2. **Paraphraser**: Main paraphrasing tool with text input and results
3. **About**: Information about the application and its features
4. **Contact**: Contact form for user inquiries

## 🔄 API Endpoints

- `POST /paraphrase`: Accepts text and returns paraphrased versions
  - Request: `{"text": "Your text here"}`
  - Response: `{"paraphrased": "Paraphrased text here"}`

## 🚀 Deployment

### Frontend Deployment (Vercel/Netlify)
1. Build the React app: `npm run build`
2. Deploy the `build` folder to your preferred platform

### Backend Deployment (Heroku/Railway)
1. Create a `requirements.txt` file
2. Deploy to your preferred Python hosting platform
3. Ensure Ollama is available in the deployment environment

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -m 'Add feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Usman Nadeem**
- GitHub: [@UsmanNadeemGit](https://github.com/UsmanNadeemGit)

## 🙏 Acknowledgments

- Meta for the Llama 3 model
- Ollama team for the local AI inference platform
- React and Flask communities for excellent documentation

## 📞 Support

If you encounter any issues or have questions:
1. Check the [Issues](https://github.com/UsmanNadeemGit/paraphrasing-web-app/issues) page
2. Create a new issue with detailed information
3. Contact through the app's Contact page

---

⭐ **Star this repository if you found it helpful!** 