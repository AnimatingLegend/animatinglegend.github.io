/**
 * Error handling and redirection logic.
 * Call handleError(error) whenever an error occurs.
 * 
 * progerammed by CHATGPT (tweaks by animatinglegend)
 */

function handleError(error) {
    // Customize this function to determine what is a "VERY bad" error
    const isVeryBadError = (err) => {
        // Example: treat all uncaught errors or specific error messages as "very bad"
        return (
            err instanceof Error ||
            (typeof err === 'string' && err.toLowerCase().includes('fatal'))
        );
    };

    // Log the error (optional: send to server for logging)
    console.error('Website error:', error);

    if (isVeryBadError(error)) {
        // Redirect to error.html
        window.location.href = '/error.html';
    } else {
        // Optionally, show a non-blocking error message to the user
        // alert('An error occurred. Please try again.');
    }
}

// Example: global error handler
window.addEventListener('error', function (event) {
    handleError(event.error || event.message);
});

// Example: global unhandled promise rejection handler
window.addEventListener('unhandledrejection', function (event) {
    handleError(event.reason);
});

// Export for use in other scripts if needed
window.handleError = handleError;