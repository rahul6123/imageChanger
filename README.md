# Image Changer Project

A simple interactive web application that changes images and location names on hover using vanilla JavaScript.

## 🌟 Features

- **Interactive Image Switching**: Hover over the image to see it change from London to Paris
- **Dynamic Text Updates**: Location name updates automatically with the image
- **Smooth Hover Effects**: Visual feedback with border styling
- **Responsive Design**: Clean, centered layout that works on different screen sizes
- **Dark Theme**: Modern black background with contrasting elements

## 🚀 Demo

The application displays:
- **Default State**: London's Big Ben image with "London" label
- **Hover State**: Paris cityscape image with "Paris" label
- **Visual Feedback**: Blue border appears on hover

## 🛠️ Technologies Used

- **HTML5**: Semantic structure
- **CSS3**: Styling and layout with Flexbox
- **Vanilla JavaScript**: DOM manipulation and event handling

## 📁 Project Structure

```
prj2.imagechanger/
├── index.html          # Main HTML file
├── index.css           # Stylesheet
├── index.js            # JavaScript functionality
└── README.md           # Project documentation
```

## 🎯 How It Works

1. **Image Element**: Displays the default London image on page load
2. **Event Listeners**: 
   - `mouseenter`: Changes image to Paris and updates text
   - `mouseleave`: Reverts to original London image and text
3. **State Management**: Stores original image source and text for restoration

## 🔧 Installation & Usage

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/prj2.imagechanger.git
   ```

2. **Navigate to project directory**:
   ```bash
   cd prj2.imagechanger
   ```

3. **Open in browser**:
   - Simply open `index.html` in your web browser
   - Or use a local server like Live Server extension in VS Code

## 💻 Code Highlights

### JavaScript Event Handling
```javascript
img.addEventListener("mouseenter", ()=>{
    img.src='https://cdn.pixabay.com/photo/2015/08/18/23/54/baumkirchen-895299_960_720.jpg'
    h2.innerText="Paris"
    img.style.border='2px solid blue'
})

img.addEventListener("mouseleave", ()=>{
    img.src=prevSrc
    h2.innerText=prevText
})
```

### CSS Flexbox Layout
```css
.imageContainer {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}
```

## 🎨 Styling Features

- **Dark Theme**: Black background with white text
- **Centered Layout**: Flexbox for perfect centering
- **Rounded Corners**: 10px border-radius for modern look
- **Color Contrast**: Yellow background for location labels
- **Responsive Images**: 40% width for adaptability

## 🌐 Browser Compatibility

This project uses standard web technologies and is compatible with all modern browsers:
- Chrome
- Firefox
- Safari
- Edge

## 📝 Future Enhancements

- [ ] Add more cities and images
- [ ] Implement smooth transitions/animations
- [ ] Add touch support for mobile devices
- [ ] Include image preloading for better performance
- [ ] Add keyboard navigation support

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

Created with ❤️ by [Your Name]

---

⭐ If you found this project helpful, please give it a star on GitHub!