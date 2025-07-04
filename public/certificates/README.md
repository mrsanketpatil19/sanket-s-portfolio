# Certificate Images

## How to Add Your Certificate Images

1. **Save your certificate images** in this folder with the following names:
   - `hackerrank-python-sql.jpg` - for your HackerRank Python Programming & SQL certificate
   - `imarticus-data-analytics.jpg` - for your Imarticus Learning Data Analytics & ML certificate

2. **Supported formats**: JPG, PNG, or PDF (converted to image)

3. **Recommended image size**: 1200px width for best quality

4. **File naming**: Use lowercase letters and hyphens for file names

## Current Certificate Setup

- **HackerRank Certificate**: `hackerrank-python-sql.jpg`
- **Imarticus Learning Certificate**: `imarticus-data-analytics.jpg`

## Adding New Certificates

To add more certificates:
1. Add the image file to this folder
2. Update the `certifications` array in `src/App.js`
3. Add the new certificate object with the correct image path

## Example Certificate Object

```javascript
{
  title: "Certificate Name",
  issuer: "Issuing Organization", 
  icon: IconComponent,
  color: "neon-color",
  image: "/certificates/certificate-filename.jpg"
}
```

## Note

If you don't have the image files yet, the modal will show a placeholder with the certificate details. 