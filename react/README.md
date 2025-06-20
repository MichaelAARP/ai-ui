# Chainlit React Integration

A React application that integrates with a Chainlit chat interface hosted at `https://demchat.agetechcollaborative.org`.

## Overview

This project demonstrates how to embed a Chainlit chat interface into a React application. After evaluating multiple approaches, we settled on an iframe-based solution for its simplicity and reliability.

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Architecture

### Tech Stack
- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Iframe Integration** - Chat embedding approach

### Project Structure
```
src/
├── components/
│   └── ChainlitWidget.tsx    # Chat widget component
├── App.tsx                   # Main application
├── main.tsx                  # React entry point
└── index.css                 # Global styles
```

## Integration Approach

### Why Iframe Embedding?

We initially attempted to use the official `@chainlit/react-client` SDK but encountered several issues:

1. **Version Compatibility**: The SDK had peer dependency conflicts with React 18/19
2. **API Instability**: Methods like `connect()` were undefined or not working as documented
3. **Hook Issues**: React hooks (`useChatSession`, `useChatMessages`) returned undefined values
4. **Dependency Conflicts**: Required Recoil with conflicting peer dependencies
5. **Custom Element Conflicts**: Browser errors with duplicate custom element definitions

### Iframe Solution Benefits

✅ **Immediate Functionality** - Works out of the box without complex setup  
✅ **No Dependencies** - Avoids all SDK compatibility issues  
✅ **Native Experience** - Users get the exact same chat interface  
✅ **Maintainable** - Minimal code to maintain and debug  
✅ **Reliable** - No React integration bugs or version conflicts  

### Implementation

```tsx
export function ChainlitWidget() {
  return (
    <div style={{ 
      width: '100%', 
      height: '400px', 
      border: '1px solid #ddd', 
      borderRadius: '8px',
      overflow: 'hidden'
    }}>
      <iframe
        src="https://demchat.agetechcollaborative.org"
        style={{
          width: '100%',
          height: '100%',
          border: 'none'
        }}
        title="Chainlit Chat"
      />
    </div>
  )
}
```

## Considerations

### When to Use Iframe Approach
- Quick integration needed
- Standard chat functionality is sufficient  
- Minimal customization required
- Avoiding dependency conflicts is important

### When to Use SDK Approach
- Custom message styling/theming needed
- Integration with app state management required
- Custom message preprocessing needed
- Complex layout integration required

**Note**: The SDK approach would be preferable once the `@chainlit/react-client` package matures and resolves its compatibility issues.

## Configuration

### Environment Variables
- No environment variables required for basic setup
- The Chainlit server URL is hardcoded in the component

### Customization
- Modify iframe dimensions in `ChainlitWidget.tsx`
- Adjust styling in the component or add CSS classes
- Change server URL by updating the `src` attribute

## Troubleshooting

### Common Issues

**Blank iframe**: Check if the Chainlit server is accessible and allows iframe embedding  
**CORS errors**: The server may need to set appropriate `X-Frame-Options` headers  
**Loading issues**: Verify network connectivity to the Chainlit server

### Development Tips

- Use browser dev tools to inspect iframe content
- Check browser console for security/CORS warnings
- Test with different viewport sizes for responsive behavior

## Future Improvements

- Add error handling for iframe loading failures
- Implement responsive sizing
- Add loading states and error boundaries
- Consider postMessage communication if server supports it
- Migrate to SDK approach when stability improves

## License

This project is provided as-is for demonstration purposes.