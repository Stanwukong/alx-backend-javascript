// Display a welcome message
process.stdout.write('Welcome to Holberton School, what is your name?\n');

// Listen for user input
process.stdin.on('data', (data) => {
  // Trim input to remove extra spaces or newline characters
  const name = data.toString().trim();

  // Output the user's name
  process.stdout.write(`Your name is: ${name}\n`);

  // Gracefully close the stdin stream
  process.stdin.end();
});

// Handle the end of input
process.stdin.on('end', () => {
  // Display the closing message
  process.stdout.write('This important software is now closing\n');
});
