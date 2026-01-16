function handleError(err) {
     // -- custom error handler -- \\
     // -- this determines if the error is MAJOR -- \\
     const MAJOR_ERROR = (err) => {
          return (
               err instanceof Error || (typeof err === 'string' && err.toLowerCase().includes('fatal'))
          );
     };

     // -- Log the error (optional: send to github pages for logging)-- \\
     console.error(`WEBSITE ERROR - ${err} || ${MAJOR_ERROR(err)}`);

     // -- redirect to error page -- \\
     if (MAJOR_ERROR(err)) window.location.href = 'error.html';
}

// === EXAMPLE: GLOBAL ERROR HANDLER === \\
window.addEventListener('error', function(e) {
     handleError(e.error);
});

// === EXAMPLE: GLOBAL UNHANDLED PROMISE REJECTION === \\
window.addEventListener('unhandledrejection', function(e) {
     handleError(e.reason);
});

// -- export for use in oither files (IF NEEDED) -- \\
export { handleError };
