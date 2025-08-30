# 🚀 Website Speed Checker

A modern React.js application that checks website performance using Google PageSpeed Insights API. Get detailed performance metrics for both mobile and desktop devices.
Q  Q## ✨ Features

- **Real-time Performance Analysis**: Uses Google PageSpeed Insights API for accurate results
- **Mobile & Desktop Metrics**: Separate performance analysis for both device types
- **Comprehensive Metrics**: 
  - Performance Score (0-100)
  - First Contentful Paint (FCP)
  - Largest Contentful Paint (LCP)
  - Cumulative Layout Shift (CLS)
  - Speed Index
  - Time to Interactive (TTI)
- **Beautiful UI**: Modern, responsive design with smooth animations
- **Performance Tips**: Helpful suggestions to improve website speed
- **Error Handling**: Comprehensive error handling for API issues

## 🛠️ Technologies Used

- **Frontend**: React.js 19
- **Styling**: CSS3 with modern design principles
- **HTTP Client**: Axios
- **Build Tool**: Vite
- **API**: Google PageSpeed Insights API

## 📋 Prerequisites

Before running this application, you need:

1. **Node.js** (version 16 or higher)
2. **Google PageSpeed Insights API Key** (free)

### Getting Google PageSpeed Insights API Key

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the PageSpeed Insights API
4. Go to Credentials → Create Credentials → API Key
5. Copy your API key

## 🚀 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd wsclone
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 📱 How to Use

1. **Enter API Key**: Paste your Google PageSpeed Insights API key in the first input field
2. **Enter Website URL**: Type the website URL you want to analyze (e.g., `google.com` or `https://example.com`)
3. **Click Check Speed**: The application will analyze both mobile and desktop performance
4. **View Results**: See detailed performance metrics and scores for both device types

## 🔧 API Configuration

The application makes two API calls to Google PageSpeed Insights:
- One for mobile performance analysis
- One for desktop performance analysis

### API Endpoints Used
```
GET https://www.googleapis.com/pagespeedonline/v5/runPagespeed
```

### Required Parameters
- `url`: The website URL to analyze
- `key`: Your API key
- `strategy`: Either 'mobile' or 'desktop'

## 📊 Performance Metrics Explained

### Performance Score (0-100)
- **90-100**: Fast (Green) - Excellent performance
- **50-89**: Average (Yellow) - Room for improvement
- **0-49**: Slow (Red) - Needs optimization

### Core Web Vitals
- **First Contentful Paint (FCP)**: Time until first content appears
- **Largest Contentful Paint (LCP)**: Time until largest content is visible
- **Cumulative Layout Shift (CLS)**: Visual stability measure

### Additional Metrics
- **Speed Index**: How quickly content is visually displayed
- **Time to Interactive (TTI)**: Time until page becomes interactive

## 🎨 Customization

### Styling
- Modify `src/App.css` to change colors, fonts, and layout
- The app uses CSS custom properties for easy theming

### Features
- Add more performance metrics in `src/App.jsx`
- Implement caching for API responses
- Add performance history tracking

## 🚨 Error Handling

The application handles various error scenarios:
- **Invalid API Key**: 403 Forbidden error
- **Invalid URL**: 400 Bad Request error
- **API Quota Exceeded**: 429 Too Many Requests error
- **Network Issues**: Generic error messages

## 📱 Responsive Design

The application is fully responsive and works on:
- Desktop computers
- Tablets
- Mobile phones
- All modern browsers

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

### Deploy to Platforms
- **Netlify**: Drag and drop the `dist` folder
- **Vercel**: Connect your GitHub repository
- **GitHub Pages**: Use the `dist` folder as source

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🔗 Useful Links

- [Google PageSpeed Insights API Documentation](https://developers.google.com/speed/docs/insights/v5/get-started)
- [Core Web Vitals](https://web.dev/vitals/)
- [React.js Documentation](https://reactjs.org/)
- [Vite Documentation](https://vitejs.dev/)

## 🆘 Support

If you encounter any issues:
1. Check the browser console for error messages
2. Verify your API key is correct
3. Ensure the website URL is accessible
4. Check your API quota limits

## 📈 Future Enhancements

- [ ] Performance history tracking
- [ ] Batch URL analysis
- [ ] Export results to PDF/CSV
- [ ] Performance comparison between websites
- [ ] Lighthouse audit details
- [ ] Performance monitoring alerts
- [ ] Integration with other performance APIs

---

**Note**: This application requires a valid Google PageSpeed Insights API key to function. The API has usage limits, so be mindful of your quota when testing.
