# Work Experience Images

## Current Images

- **DePaul.jpeg** - DePaul University Research Assistant position image
- **MRO.jpg** - MRO Corp Data Analyst position image

## How to Add New Work Experience Images

1. **Save your workplace images** in this folder
2. **Supported formats**: JPG, JPEG, PNG
3. **Recommended size**: 400x300px or similar aspect ratio for best display
4. **File naming**: Use descriptive names without spaces

## Adding New Work Experience

To add more work experience positions:

1. Add the image file to this folder
2. Update the `experiences` array in `src/App.js`
3. Add the new experience object with detailed information

## Example Experience Object

```javascript
{
  title: "Job Title",
  company: "Company Name",
  location: "City, State/Country",
  duration: "Start Date – End Date",
  description: "Brief description for the timeline view",
  color: "neon-color",
  image: "/work_experience/image-filename.jpg",
  project: "Main Project or Focus Area",
  details: [
    "Detailed bullet point about responsibilities",
    "Another achievement or responsibility",
    // ... more details
  ],
  achievements: [ // Optional
    "Specific award or recognition",
    "Quantified achievement",
    // ... more achievements
  ]
}
```

## Available Colors

- `neon-red`
- `neon-green`
- `neon-blue`
- `neon-pink`

## Modal Features

- **Responsive Design**: Works on all screen sizes
- **Image Display**: Shows workplace/company images
- **Detailed Information**: Comprehensive project details and achievements
- **Smooth Animations**: Beautiful slide-in effects
- **Easy Navigation**: Click outside or X button to close 